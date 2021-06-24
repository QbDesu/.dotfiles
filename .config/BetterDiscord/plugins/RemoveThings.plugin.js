/**
 * @name RemoveThings
 * @author Qb
 * @authorId ??
 * @version 1.0.0
 * @description Removes things that are just unnecessary in my option
 * @invite w5JQzMcG
 * @source 
 * @updateUrl 
 */

 module.exports = (_ => {
	const config = {
		"info": {
			"name": "RemoveThings",
			"author": "Qb",
			"version": "1.0.0",
			"description": "Adds options to remove things that are just unnecessary in my opinion"
		},
		"changeLog": {}
	};

	return !window.BDFDB_Global || (!window.BDFDB_Global.loaded && !window.BDFDB_Global.started) ? class {
		getName () {return config.info.name;}
		getAuthor () {return config.info.author;}
		getVersion () {return config.info.version;}
		getDescription () {return `The Library Plugin needed for ${config.info.name} is missing. Open the Plugin Settings to download it. \n\n${config.info.description}`;}
		
		downloadLibrary () {
			require("request").get("https://mwittrien.github.io/BetterDiscordAddons/Library/0BDFDB.plugin.js", (e, r, b) => {
				if (!e && b && r.statusCode == 200) require("fs").writeFile(require("path").join(BdApi.Plugins.folder, "0BDFDB.plugin.js"), b, _ => BdApi.showToast("Finished downloading BDFDB Library", {type: "success"}));
				else BdApi.alert("Error", "Could not download BDFDB Library Plugin. Try again later or download it manually from GitHub: https://mwittrien.github.io/downloader/?library");
			});
		}
		
		load () {
			if (!window.BDFDB_Global || !Array.isArray(window.BDFDB_Global.pluginQueue)) window.BDFDB_Global = Object.assign({}, window.BDFDB_Global, {pluginQueue: []});
			if (!window.BDFDB_Global.downloadModal) {
				window.BDFDB_Global.downloadModal = true;
				BdApi.showConfirmationModal("Library Missing", `The Library Plugin needed for ${config.info.name} is missing. Please click "Download Now" to install it.`, {
					confirmText: "Download Now",
					cancelText: "Cancel",
					onCancel: _ => {delete window.BDFDB_Global.downloadModal;},
					onConfirm: _ => {
						delete window.BDFDB_Global.downloadModal;
						this.downloadLibrary();
					}
				});
			}
			if (!window.BDFDB_Global.pluginQueue.includes(config.info.name)) window.BDFDB_Global.pluginQueue.push(config.info.name);
		}
		start () {this.load();}
		stop () {}
		getSettingsPanel () {
			let template = document.createElement("template");
			template.innerHTML = `<div style="color: var(--header-primary); font-size: 16px; font-weight: 300; white-space: pre; line-height: 22px;">The Library Plugin needed for ${config.info.name} is missing.\nPlease click <a style="font-weight: 500;">Download Now</a> to install it.</div>`;
			template.content.firstElementChild.querySelector("a").addEventListener("click", this.downloadLibrary);
			return template.content.firstElementChild;
		}
	} : (([Plugin, BDFDB]) => {
		const userTypes = {
			NONE: 0,
			MANAGEMENT: 1,
			ADMIN: 2,
			OWNER: 3
		};
		
		return class StaffTag extends Plugin {
			onLoad () {
				this.patchedModules = {
                    before:{
						SettingsView: "render",
                        ChatForm: "render"
                    }
				};
				
				this.defaults = {
					general: {
						hypeSquadIcon:	            {value: true, 	description: "HypeSquad Icon on user profiles"},
						unreadMentionsIndicator:    {value: true, 	description: "Unread Mentions Indicator at the bottom of the server list"},
					},
					nitro: {
						giftButton:				    {value: true, 	description: "Gift button in chat input"},
						nitroDMs:				    {value: true, 	description: "Nitro Tab in direct messages"},
					},
					settings: {
						//accountRemoval:			    {value: true, 	description: "Account Removal section in settings"},
						hypeSquad:		            {value: true, 	description: "HypeSquad tab in settings"},
						logout:			            {value: true, 	description: "Logout option in settings"},
					}
				};
			
				this.css = `
					${BDFDB.dotCN.memberownericon + BDFDB.dotCN._stafftagadminicon} {
						color: #aaa9ad;
					}
					${BDFDB.dotCN.memberownericon + BDFDB.dotCN._stafftagmanagementicon} {
						color: #88540b;
					}
					${BDFDB.dotCNS.message + BDFDB.dotCN.memberownericon} {
						top: 2px;
					}
					${BDFDB.dotCNS.voicecontent + BDFDB.dotCN.memberownericon} {
						top: 0px;
					}
					${BDFDB.dotCNS.userprofile + BDFDB.dotCN.memberownericon} {
						top: 0px;
					}
					${BDFDB.dotCNS.messagerepliedmessage + BDFDB.dotCN.memberownericon},
					${BDFDB.dotCNS.messagecompact + BDFDB.dotCN.memberownericon} {
						margin-left: 0;
						margin-right: 4px;
					}
				`;
			}
			
			onStart () {
				this.forceUpdateAll();
			}
			
			onStop () {
				this.forceUpdateAll();
			}

			getSettingsPanel (collapseStates = {}) {
				let settingsPanel;
				return settingsPanel = BDFDB.PluginUtils.createSettingsPanel(this, {
					collapseStates: collapseStates,
					children: _ => {
						let settingsItems = [];
				
						settingsItems.push(BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.CollapseContainer, {
							title: "Settings",
							collapseStates: collapseStates,
							children: Object.keys(this.defaults.general).map(key => BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.SettingsSaveItem, {
								type: "Switch",
								plugin: this,
								key: key,
								keys: ["general", key],
								label: this.defaults.general[key].description,
								value: this.settings.general[key]
							}))
						}));
						settingsItems.push(BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.CollapseContainer, {
							title: "Nitro Settings",
							collapseStates: collapseStates,
							children: Object.keys(this.defaults.nitro).map(key => BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.SettingsSaveItem, {
								type: "Switch",
								plugin: this,
								key: key,
								keys: ["nitro", key],
								label: this.defaults.nitro[key].description,
								value: this.settings.nitro[key]
							}))
						}));
						settingsItems.push(BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.CollapseContainer, {
							title: "Settings Settings",
							collapseStates: collapseStates,
							children: Object.keys(this.defaults.settings).map(key => BDFDB.ReactUtils.createElement(BDFDB.LibraryComponents.SettingsSaveItem, {
								type: "Switch",
								plugin: this,
								key: key,
								keys: ["nitro", key],
								label: this.defaults.settings[key].description,
								value: this.settings.settings[key]
							}))
						}));
						
						return settingsItems;
					}
				});
			}

			onSettingsClosed () {
				if (this.SettingsUpdated) {
					delete this.SettingsUpdated;
					this.forceUpdateAll();
				}
			}
	
			forceUpdateAll () {				
				BDFDB.PatchUtils.forceAllUpdates(this);
				BDFDB.MessageUtils.rerenderAll();
			}

            processSettingsView (e) {
				if (BDFDB.ArrayUtils.is(e.instance.props.sections) && e.instance.props.sections[0] && e.instance.props.sections[0].label == BDFDB.LanguageUtils.LanguageStrings.USER_SETTINGS) {
                    if(this.settings.settings.hypeSquad){
                        let index = e.instance.props.sections.indexOf(e.instance.props.sections.find(n => n.section == BDFDB.DiscordConstants.UserSettingsSections.HYPESQUAD_ONLINE));
                        if (index > -1) {
                            e.instance.props.sections.splice(index, 1);
                        }
                    }
                    if(this.settings.settings.logout){
                        let index = e.instance.props.sections.indexOf(e.instance.props.sections.find(n => n.section == "logout"));
                        if (index > -1) {
                            e.instance.props.sections.splice(index, 1);
                        }
                    }
                    let prevDivider = false;
                    for (let index in e.instance.props.sections){
                        if(e.instance.props.sections[index].section==="DIVIDER"){
                            if (prevDivider) {
                                e.instance.props.sections.splice(index, 1);
                            } else {
                                prevDivider = true;
                            }
                        } else {
                            prevDivider = false;
                        }
                    }
                    
                    
                }
			}

			processChatForm (e) {
				console.log(e.instance);
			}
		};
	})(window.BDFDB_Global.PluginUtils.buildPlugin(config));
})();