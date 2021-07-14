/**
* @name CustomJS
* @displayName CustomJS
* @authorId 415849376598982656
* @invite gvA2ree
*/
/*@cc_on
@if (@_jscript)
    
    // Offer to self-install for clueless users that try to run this directly.
    var shell = WScript.CreateObject("WScript.Shell");
    var fs = new ActiveXObject("Scripting.FileSystemObject");
    var pathPlugins = shell.ExpandEnvironmentStrings("%APPDATA%\BetterDiscord\plugins");
    var pathSelf = WScript.ScriptFullName;
    // Put the user at ease by addressing them in the first person
    shell.Popup("It looks like you've mistakenly tried to run me directly. \n(Don't do that!)", 0, "I'm a plugin for BetterDiscord", 0x30);
    if (fs.GetParentFolderName(pathSelf) === fs.GetAbsolutePathName(pathPlugins)) {
        shell.Popup("I'm in the correct folder already.", 0, "I'm already installed", 0x40);
    } else if (!fs.FolderExists(pathPlugins)) {
        shell.Popup("I can't find the BetterDiscord plugins folder.\nAre you sure it's even installed?", 0, "Can't install myself", 0x10);
    } else if (shell.Popup("Should I copy myself to BetterDiscord's plugins folder for you?", 0, "Do you need some help?", 0x34) === 6) {
        fs.CopyFile(pathSelf, fs.BuildPath(pathPlugins, fs.GetFileName(pathSelf)), true);
        // Show the user where to put plugins in the future
        shell.Exec("explorer " + pathPlugins);
        shell.Popup("I'm installed!", 0, "Successfully installed", 0x40);
    }
    WScript.Quit();

@else@*/

module.exports = (() => {
    const fs = require('fs');
    const path = require('path')

    const config = {
        info: {
            name: "CustomJS",
            version: "1.0.0",
            github: "",
            github_raw: ""
        },
        defaultConfig: [
            {
                type: 'file',
                name: 'File Path',
                id: 'filePath',
                value: path.join(BdApi.Plugins.folder,'custom.js')
            },
            {
                type: 'switch',
                name: 'Show Toast on Reload',
                id: 'reloadToast',
                value: true
            }
        ]
    };
    return !global.ZeresPluginLibrary ? class {
        constructor() { this._config = config; }
        load() {
            BdApi.showConfirmationModal("Library plugin is needed", 
                [`The library plugin needed for ${config.info.name} is missing. Please click Download Now to install it.`], {
                    confirmText: "Download",
                    cancelText: "Cancel",
                    onConfirm: () => {
                        require("request").get("https://rauenzi.github.io/BDPluginLibrary/release/0PluginLibrary.plugin.js", async (error, response, body) => {
                        if (error) return require("electron").shell.openExternal("https://betterdiscord.net/ghdl?url=https://raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js");
                        await new Promise(r => require("fs").writeFile(require("path").join(BdApi.Plugins.folder, "0PluginLibrary.plugin.js"), body, r));
                        });
                    }
                });
        }
        start() { }
        stop() { }
    } : (([Plugin, Api]) => {
        const plugin = (Plugin, Api) => {
            const {PluginUtilities, Toasts, Logger} = Api;

            return class CustomJS extends Plugin {
                watcher = null;

                constructor() {
                    super();
                    // remove need for duplication of metadata fields
                    this.getAuthor = null;
                    this.getDescription = null;
                }
                css = ``;

                async onStart() {
                    PluginUtilities.addStyle(config.info.name, this.css);

                    await this.reloadJs();
                    await this.rewatch();
                }

                async rewatch() {
                    if(this.watcher) this.watcher.close();
                    
                    if (this.settings.filePath) {
                        this.watcher = fs.watch(this.settings.filePath, () => {
                            const current = fs.readFileSync(this.settings.filePath, "utf-8");
                            if(!current) return;
                            if(this.last != current) this.reloadJs();
                        });
                    }
                }
                
                async reloadJs() {
                    fs.closeSync(fs.openSync(this.settings.filePath, 'a' ));
                    try {
                        Logger.debug(`Loading CustomJS file from ${this.settings.filePath}`)
                        eval(fs.readFileSync(this.settings.filePath, "utf-8"));
                        if(this.settings.reloadToast) Toasts.success(`Reloaded CustomJS`);
                    } catch(err) {
                        Toasts.error("Error evaluating CustomJS: " + err);
                        console.error(err);
                    }
                }

                onStop() {
                    if(this.watcher) this.watcher.close();
                }

                getSettingsPanel() {
                    const panel = this.buildSettingsPanel();
                    panel.addListener(() => {
                        this.reloadJs();
                        this.rewatch();
                    });
                    return panel.getElement();
                }

            }

        };
        return plugin(Plugin, Api);
    })(global.ZeresPluginLibrary.buildPlugin(config));
})();
/*@end@*/
