/**
* @name USRBG
* @displayName USRBG
* @authorId 133659541198864384
* @invite gj7JFa6mF8
* @updateUrl https://raw.githubusercontent.com/QbDesu/BetterDiscordAddons/potato/Plugins/USRBG/USRBG.plugin.js
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
            name: "USRBG",
            authors: [
                {
                    name: "Qb",
                    discord_id: "133659541198864384",
                    github_username: "QbDesu"
                }
            ],
            version: "0.0.1",
            description: "See every status a user has enabled. Original made by Juby210#0577 and later Strencher#1044.",
            github: "https://github.com/QbDesu/BetterDiscordAddons/blob/potato/Plugins/USRBG",
            github_raw: "https://raw.githubusercontent.com/QbDesu/BetterDiscordAddons/potato/Plugins/USRBG/USRBG.plugin.js"
        },
        changelog: [
            {
                title: "Initial",
                type: "fixed",
                items: ["Initial Release"]
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

            const { WebpackModules, PluginUtilities, Patcher, DiscordModules: { React }, Utilities } = Api;
            
            return class ShowAllActivities extends Plugin {
                constructor() {
                    super();
                }

                get css() {
                    return `@import url('https://discord-custom-covers.github.io/usrbg/dist/usrbg.css');`;
                }

                onStart() {
                    PluginUtilities.addStyle(config.info.name, this.css);
                    this.patchUserProfile();
                }

                patchUserProfile() {
                    const UserBanner = WebpackModules.getByDisplayName('UserBanner');
                    console.info(UserBanner)
                    Patcher.after(UserBanner.prototype, 'render', (_this, _, ret) => {
                        debugger;
                        console.info("render",_this);
                        console.info("render",ret);
                        if (!ret) return;
                        
                    });
                }

                onStop() {
                    Patcher.unpatchAll();
                    PluginUtilities.removeStyle(config.info.name);
                }

            }

        };
        return plugin(Plugin, Api);
    })(global.ZeresPluginLibrary.buildPlugin(config));
})();
