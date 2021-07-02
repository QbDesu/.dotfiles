/**
* @name DisableAllButton
* @displayName Disable All Button
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
    const config = {
        info: {
            name: "DisableAllButton",
            authors: [
                {
                    name: "Qb",
                    discord_id: "415849376598982656",
                    github_username: "Qb_Desu",
                    twitter_username: "Strencher3"
                }
            ],
            version: "1.0.0",
            description: "Allows you to specify a custom JavaScript file similar to custom CSS.",
            github: "",
            github_raw: ""
        },
        defaultConfig: [
            {
                type: 'textbox',
                name: 'JavaScript Code',
                id: 'code',
                value: true
            }
        ]
    };
    return !global.ZeresPluginLibrary ? class {
        constructor() { this._config = config; }
        getName() { return config.info.name; }
        getAuthor() { return config.info.authors.map(a => a.name).join(", "); }
        getDescription() { return config.info.description; }
        getVersion() { return config.info.version; }
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
            const {DiscordModules: {React, DiscordConstants}, WebpackModules, PluginUtilities, DiscordModules, Patcher, Utilities, Toasts} = Api;

            return class CustomJS extends Plugin {
                constructor() {
                    super();
                }
                css = `
                .disable-all--button {
                    float: right;
                }
                `;

                onLoad() {
                    this.disableAll = (function() {
                        this.cachedPlugins = BdApi.Plugins.getAll().filter(p => BdApi.Plugins.isEnabled(p.id) && p.name !== 'DisableAllButton');
                        if (this.cachedPlugins && this.cachedPlugins.length) {
                            this.cachedPlugins.forEach(p => BdApi.Plugins.disable(p.id));
                            if (this.reenableAllButton) this.reenableAll.disabled = false;
                        }
                    }).bind(this);
                    this.reenableAll = (function() {
                        if (this.cachedPlugins && this.cachedPlugins.length) {
                            this.cachedPlugins.forEach(p => BdApi.Plugins.enable(p.id));
                            this.cachedPlugins = [];
                            if (this.reenableAllButton) this.reenableAll.disabled = true;
                        }
                    }).bind(this);
                }

                onStart() {
                    this.reenableAllButton = document.createElement('button');
                    this.reenableAllButton.disabled = !(this.cachedPlugins && this.cachedPlugins.length);
                    this.reenableAllButton.classList.add('bd-button','bd-button-title','disable-all--button','disable-all--button-reenable');
                    this.reenableAllButton.textContent = 'Reenable All';
                    this.reenableAllButton.addEventListener('click',this.reenableAll);

                    this.disableAllButton = document.createElement('button');
                    this.disableAllButton.classList.add('bd-button','bd-button-title','disable-all--button','disable-all--button-disable');
                    this.disableAllButton.textContent = 'Disable All';
                    this.disableAllButton.addEventListener('click',this.disableAll);

                    PluginUtilities.addStyle(config.info.name, this.css);

                    const title = document.querySelector("h2.bd-settings-title");
                    if (!title) return;
                    let addonType = this.getAddonType();
                    if(addonType) this.addButtons(title, addonType);
                }

                observer(mutationRecord) {
                    if (mutationRecord.type !== 'childList') return;
                    if (!mutationRecord.addedNodes.length) return;
                    const title = Array.from(mutationRecord.addedNodes).find(n => n.matches && n.matches("h2.bd-settings-title"))
                    if (!title) return;

                    let addonType = this.getAddonType();
                    if(addonType) this.addButtons(title, addonType);
                }

                getAddonType() {
                    const selectedTab = document.querySelector('.bd-plugins-tab[aria-selected="true"],.bd-themes-tab[aria-selected="true"]');
                    if (!selectedTab) return;

                    if (document.querySelector('.bd-plugins-tab[aria-selected="true"]'))
                        return 'plugin';
                    else if (document.querySelector('.bd-themes-tab[aria-selected="true"]'))
                        return 'theme';
                    else
                        return;
                }
                
                addButtons(title) {
                    title.append(this.disableAllButton);
                    title.append(this.reenableAllButton);
                }

                removeButtons() {
                    if (this.reenableAllButton) this.reenableAllButton.remove();
                    if (this.disableAllButton) this.disableAllButton.remove()
                }

                onStop() {
                    this.removeButtons();
                }

            }

        };
        return plugin(Plugin, Api);
    })(global.ZeresPluginLibrary.buildPlugin(config));
})();
/*@end@*/
