/**
 * @name RestoreDirectMessages
 * @version 1.0.1
 * @author Strencher
 * @description Adds user status everywhere Discord doesn't.
 * @source https://github.com/Strencher/BetterDiscordStuff/tree/master/RestoreDirectMessages
 * @updateUrl https://raw.githubusercontent.com/Strencher/BetterDiscordStuff/master/RestoreDirectMessages/RestoreDirectMessages.plugin.js
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
/* Generated Code */
const config = {
	"info": {
		"name": "RestoreDirectMessages",
		"version": "1.0.1",
		"authors": [{
			"name": "Strencher",
			"discord_id": "415849376598982656",
			"github_username": "Strencher",
			"twitter_username": "Strencher3"
		}],
		"description": "Adds user status everywhere Discord doesn't.",
		"github": "https://github.com/Strencher/BetterDiscordStuff/tree/master/RestoreDirectMessages",
		"github_raw": "https://raw.githubusercontent.com/Strencher/BetterDiscordStuff/master/RestoreDirectMessages/RestoreDirectMessages.plugin.js"
	},
	"changelog": [{
		"type": "fixed",
		"title": "Rewrite",
		"items": [
			"This plugin was rewritten."
		]
	}],
	"build": {
		"zlibrary": true,
		"copy": true,
		"production": false,
		"scssHash": false,
		"alias": {
			"icons": "components/icons",
			"stores": "./modules/stores"
		},
		"release": {
			"public": true,
			"source": true,
			"readme": true
		}
	}
};
function buildPlugin([BasePlugin, PluginApi]) {
	const module = {
		exports: {}
	};
	/*! For license information please see index.js.LICENSE.txt */
	(() => {
		class StyleLoader {
			static styles = "";
			static element = null;
			static append(module, css) {
				this.styles += `/* ${module} */\n${css}`;
			}
			static inject(name = config.info.name) {
				if (this.element) this.element.remove();
				this.element = document.head.appendChild(Object.assign(document.createElement("style"), {
					id: name,
					textContent: this.styles
				}));
			}
			static remove() {
				if (this.element) {
					this.element.remove();
					this.element = null;
				}
			}
		}
		function ___createMemoize___(instance, name, value) {
			value = value();
			Object.defineProperty(instance, name, {
				value,
				configurable: true
			});
			return value;
		};
		const Modules = {
			get 'react-spring'() {
				return ___createMemoize___(this, 'react-spring', () => BdApi.findModuleByProps('useSpring'))
			},
			'@discord/utils': {
				get 'joinClassNames'() {
					return ___createMemoize___(this, 'joinClassNames', () => BdApi.findModule(m => typeof m?.default?.default === 'function')?.default)
				},
				get 'useForceUpdate'() {
					return ___createMemoize___(this, 'useForceUpdate', () => BdApi.findModuleByProps('useForceUpdate')?.useForceUpdate)
				},
				get 'Logger'() {
					return ___createMemoize___(this, 'Logger', () => BdApi.findModuleByProps('setLogFn')?.default)
				},
				get 'Navigation'() {
					return ___createMemoize___(this, 'Navigation', () => BdApi.findModuleByProps('replaceWith'))
				}
			},
			'@discord/components': {
				get 'Tooltip'() {
					return ___createMemoize___(this, 'Tooltip', () => BdApi.findModuleByDisplayName('Tooltip'))
				},
				get 'TooltipContainer'() {
					return ___createMemoize___(this, 'TooltipContainer', () => BdApi.findModuleByProps('TooltipContainer')?.TooltipContainer)
				},
				get 'TextInput'() {
					return ___createMemoize___(this, 'TextInput', () => BdApi.findModuleByDisplayName('TextInput'))
				},
				get 'SlideIn'() {
					return ___createMemoize___(this, 'SlideIn', () => BdApi.findModuleByDisplayName('SlideIn'))
				},
				get 'SettingsNotice'() {
					return ___createMemoize___(this, 'SettingsNotice', () => BdApi.findModuleByDisplayName('SettingsNotice'))
				},
				get 'TransitionGroup'() {
					return ___createMemoize___(this, 'TransitionGroup', () => BdApi.findModuleByDisplayName('TransitionGroup'))
				},
				get 'Button'() {
					return ___createMemoize___(this, 'Button', () => BdApi.findModuleByProps('DropdownSizes'))
				},
				get 'Flex'() {
					return ___createMemoize___(this, 'Flex', () => BdApi.findModuleByDisplayName('Flex'))
				},
				get 'Text'() {
					return ___createMemoize___(this, 'Text', () => BdApi.findModuleByDisplayName('Text'))
				},
				get 'Card'() {
					return ___createMemoize___(this, 'Card', () => BdApi.findModuleByDisplayName('Card'))
				}
			},
			'@discord/modules': {
				get 'Dispatcher'() {
					return ___createMemoize___(this, 'Dispatcher', () => BdApi.findModuleByProps('dirtyDispatch', 'subscribe'))
				},
				get 'EmojiUtils'() {
					return ___createMemoize___(this, 'EmojiUtils', () => BdApi.findModuleByProps('uploadEmoji'))
				},
				get 'PermissionUtils'() {
					return ___createMemoize___(this, 'PermissionUtils', () => BdApi.findModuleByProps('computePermissions'))
				},
				get 'DMUtils'() {
					return ___createMemoize___(this, 'DMUtils', () => BdApi.findModuleByProps('openPrivateChannel'))
				}
			},
			'@discord/stores': {
				get 'Messages'() {
					return ___createMemoize___(this, 'Messages', () => BdApi.findModuleByProps('getMessage', 'getMessages'))
				},
				get 'Channels'() {
					return ___createMemoize___(this, 'Channels', () => BdApi.findModuleByProps('getChannel'))
				},
				get 'Guilds'() {
					return ___createMemoize___(this, 'Guilds', () => BdApi.findModuleByProps('getGuild'))
				},
				get 'SelectedGuilds'() {
					return ___createMemoize___(this, 'SelectedGuilds', () => BdApi.findModuleByProps('getGuildId', 'getLastSelectedGuildId'))
				},
				get 'SelectedChannels'() {
					return ___createMemoize___(this, 'SelectedChannels', () => BdApi.findModuleByProps('getChannelId', 'getLastSelectedChannelId'))
				},
				get 'Info'() {
					return ___createMemoize___(this, 'Info', () => BdApi.findModuleByProps('getSessionId'))
				},
				get 'Status'() {
					return ___createMemoize___(this, 'Status', () => BdApi.findModuleByProps('getStatus'))
				},
				get 'Users'() {
					return ___createMemoize___(this, 'Users', () => BdApi.findModuleByProps('getUser', 'getCurrentUser'))
				},
				get 'SettingsStore'() {
					return ___createMemoize___(this, 'SettingsStore', () => BdApi.findModuleByProps('afkTimeout', 'status'))
				},
				get 'UserProfile'() {
					return ___createMemoize___(this, 'UserProfile', () => BdApi.findModuleByProps('getUserProfile'))
				},
				get 'Members'() {
					return ___createMemoize___(this, 'Members', () => BdApi.findModuleByProps('getMember'))
				},
				get 'Activities'() {
					return ___createMemoize___(this, 'Activities', () => BdApi.findModuleByProps('getActivities'))
				},
				get 'Games'() {
					return ___createMemoize___(this, 'Games', () => BdApi.findModuleByProps('getGame'))
				},
				get 'Auth'() {
					return ___createMemoize___(this, 'Auth', () => BdApi.findModuleByProps('getId', 'isGuest'))
				},
				get 'TypingUsers'() {
					return ___createMemoize___(this, 'TypingUsers', () => BdApi.findModuleByProps('isTyping'))
				}
			},
			'@discord/actions': {
				get 'ProfileActions'() {
					return ___createMemoize___(this, 'ProfileActions', () => BdApi.findModuleByProps('fetchProfile'))
				},
				get 'GuildActions'() {
					return ___createMemoize___(this, 'GuildActions', () => BdApi.findModuleByProps('requestMembersById'))
				}
			},
			get '@discord/i18n'() {
				return ___createMemoize___(this, '@discord/i18n', () => BdApi.findModuleByProps('getLocale'))
			},
			get '@discord/constants'() {
				return ___createMemoize___(this, '@discord/constants', () => BdApi.findModuleByProps('API_HOST'))
			},
			get '@discord/contextmenu'() {
				return ___createMemoize___(this, '@discord/contextmenu', () => {
					const ctx = Object.assign({}, BdApi.findModuleByProps('openContextMenu'), BdApi.findModuleByProps('MenuItem'));
					ctx.Menu = ctx.default;
					return ctx;
				})
			},
			get '@discord/forms'() {
				return ___createMemoize___(this, '@discord/forms', () => BdApi.findModuleByProps('FormItem'))
			},
			get '@discord/scrollbars'() {
				return ___createMemoize___(this, '@discord/scrollbars', () => BdApi.findModuleByProps('ScrollerAuto'))
			},
			get '@discord/native'() {
				return ___createMemoize___(this, '@discord/native', () => BdApi.findModuleByProps('requireModule'))
			},
			get '@discord/flux'() {
				return ___createMemoize___(this, '@discord/flux', () => Object.assign({}, BdApi.findModuleByProps('useStateFromStores').default, BdApi.findModuleByProps('useStateFromStores')))
			},
			get '@discord/modal'() {
				return ___createMemoize___(this, '@discord/modal', () => Object.assign({}, BdApi.findModuleByProps('ModalRoot'), BdApi.findModuleByProps('openModal')))
			},
			get '@discord/connections'() {
				return ___createMemoize___(this, '@discord/connections', () => BdApi.findModuleByProps('get', 'isSupported', 'map'))
			},
			get '@discord/sanitize'() {
				return ___createMemoize___(this, '@discord/sanitize', () => BdApi.findModuleByProps('stringify', 'parse', 'encode'))
			},
			get '@discord/icons'() {
				return ___createMemoize___(this, '@discord/icons', () => BdApi.findAllModules(m => m.displayName && ~m.toString().indexOf('currentColor')).reduce((icons, icon) => (icons[icon.displayName] = icon, icons), {}))
			},
			'@discord/classes': {
				get 'Timestamp'() {
					return ___createMemoize___(this, 'Timestamp', () => BdApi.findModuleByPrototypes('toDate', 'month'))
				},
				get 'Message'() {
					return ___createMemoize___(this, 'Message', () => BdApi.findModuleByPrototypes('getReaction', 'isSystemDM'))
				},
				get 'User'() {
					return ___createMemoize___(this, 'User', () => BdApi.findModuleByPrototypes('tag'))
				},
				get 'Channel'() {
					return ___createMemoize___(this, 'Channel', () => BdApi.findModuleByPrototypes('isOwner', 'isCategory'))
				}
			}
		};
		"use strict";
		var __webpack_modules__ = {
			"./RestoreDirectMessages/package.json": module => {
				eval('module.exports = JSON.parse(\'{"info":{"name":"RestoreDirectMessages","version":"1.0.1","authors":[{"name":"Strencher","discord_id":"415849376598982656","github_username":"Strencher","twitter_username":"Strencher3"}],"description":"Adds user status everywhere Discord doesn\\\'t.","github":"https://github.com/Strencher/BetterDiscordStuff/tree/master/RestoreDirectMessages","github_raw":"https://raw.githubusercontent.com/Strencher/BetterDiscordStuff/master/RestoreDirectMessages/RestoreDirectMessages.plugin.js"},"changelog":[{"type":"fixed","title":"Rewrite","items":["This plugin was rewritten."]}],"build":{"zlibrary":true,"copy":true,"production":false,"scssHash":false,"alias":{"icons":"components/icons","stores":"./modules/stores"},"release":{"public":true,"source":true,"readme":true}}}\');\n\n//# sourceURL=webpack://LibraryPluginHack/./RestoreDirectMessages/package.json?');
			},
			"./RestoreDirectMessages/components/button.tsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
				eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ RestoreDirectMessagesButton)\n/* harmony export */ });\n/* harmony import */ var _discord_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @discord/components */ "@discord/components");\n/* harmony import */ var _discord_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_discord_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _discord_flux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @discord/flux */ "@discord/flux");\n/* harmony import */ var _discord_flux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_discord_flux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _zlibrary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @zlibrary */ "@zlibrary");\n/* harmony import */ var _zlibrary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_zlibrary__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../settings */ "./RestoreDirectMessages/settings.ts");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../style.scss */ "./RestoreDirectMessages/style.scss");\n/* harmony import */ var _icons_restore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./icons/restore */ "./RestoreDirectMessages/components/icons/restore.tsx");\n/* provided dependency */ var React = __webpack_require__(/*! react */ "react");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst BadgesModule = _zlibrary__WEBPACK_IMPORTED_MODULE_2__.WebpackModules.getByProps("NumberBadge");\r\n\r\nconst getBadgeWidth = function (count) {\r\n    return count < 10 ? 12 : count < 100 ? 18 : count < 1000 ? 24 : 30;\r\n};\r\n\r\nfunction RestoreDirectMessagesButton({ onOpen = () => { } }) {\r\n    const count = (0,_discord_flux__WEBPACK_IMPORTED_MODULE_1__.useStateFromStores)([_settings__WEBPACK_IMPORTED_MODULE_4__.default], () => Object.keys(_settings__WEBPACK_IMPORTED_MODULE_4__.default.get("saved", {})).length);\r\n\r\n    const badge = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => (\r\n        React.createElement(BadgesModule.NumberBadge, { count: count,})\r\n    ), [count]);\r\n\r\n    const style = (0,react__WEBPACK_IMPORTED_MODULE_3__.useMemo)(() => ({ "--badge-width": getBadgeWidth(count) + "px" }), [count]);\r\n\r\n    return (\r\n        React.createElement(_discord_components__WEBPACK_IMPORTED_MODULE_0__.TooltipContainer, { text: "Open Closed DM\'s"  , className: _style_scss__WEBPACK_IMPORTED_MODULE_5__.default.button,}\n            , React.createElement(_discord_components__WEBPACK_IMPORTED_MODULE_0__.Button, { look: _discord_components__WEBPACK_IMPORTED_MODULE_0__.Button.Looks.BLANK, size: _discord_components__WEBPACK_IMPORTED_MODULE_0__.Button.Sizes.NONE, onClick: onOpen,}\n                , React.createElement(_icons_restore__WEBPACK_IMPORTED_MODULE_6__.default, null )\n                , React.createElement(\'div\', { className: _style_scss__WEBPACK_IMPORTED_MODULE_5__.default.badgeContainer, style: style,}\n                    , badge\n                )\n            )\n        )\r\n    );\r\n}\n\n//# sourceURL=webpack://LibraryPluginHack/./RestoreDirectMessages/components/button.tsx?');
			},
			"./RestoreDirectMessages/components/icons/close.tsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
				eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* provided dependency */ var React = __webpack_require__(/*! react */ "react");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (props => (\r\n    React.createElement(\'svg\', { width: "24", height: "24", viewBox: "0 0 24 24"   , ...props,}\n        , React.createElement(\'path\', { fill: "currentColor", d: "M18.4 4L12 10.4L5.6 4L4 5.6L10.4 12L4 18.4L5.6 20L12 13.6L18.4 20L20 18.4L13.6 12L20 5.6L18.4 4Z"             ,})\n    )\r\n));\n\n//# sourceURL=webpack://LibraryPluginHack/./RestoreDirectMessages/components/icons/close.tsx?');
			},
			"./RestoreDirectMessages/components/icons/restore.tsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
				eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* provided dependency */ var React = __webpack_require__(/*! react */ "react");\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (props => (\r\n    React.createElement(\'svg\', { width: "24", height: "24", viewBox: "0 0 512 512"   , ...props,}\n        , React.createElement(\'path\', { fill: "currentColor", d: "M184.561 261.903c3.232 13.997-12.123 24.635-24.068 17.168l-40.736-25.455-50.867 81.402C55.606 356.273 70.96 384 96.012 384H148c6.627 0 12 5.373 12 12v40c0 6.627-5.373 12-12 12H96.115c-75.334 0-121.302-83.048-81.408-146.88l50.822-81.388-40.725-25.448c-12.081-7.547-8.966-25.961 4.879-29.158l110.237-25.45c8.611-1.988 17.201 3.381 19.189 11.99l25.452 110.237zm98.561-182.915l41.289 66.076-40.74 25.457c-12.051 7.528-9 25.953 4.879 29.158l110.237 25.45c8.672 1.999 17.215-3.438 19.189-11.99l25.45-110.237c3.197-13.844-11.99-24.719-24.068-17.168l-40.687 25.424-41.263-66.082c-37.521-60.033-125.209-60.171-162.816 0l-17.963 28.766c-3.51 5.62-1.8 13.021 3.82 16.533l33.919 21.195c5.62 3.512 13.024 1.803 16.536-3.817l17.961-28.743c12.712-20.341 41.973-19.676 54.257-.022zM497.288 301.12l-27.515-44.065c-3.511-5.623-10.916-7.334-16.538-3.821l-33.861 21.159c-5.62 3.512-7.33 10.915-3.818 16.536l27.564 44.112c13.257 21.211-2.057 48.96-27.136 48.96H320V336.02c0-14.213-17.242-21.383-27.313-11.313l-80 79.981c-6.249 6.248-6.249 16.379 0 22.627l80 79.989C302.689 517.308 320 510.3 320 495.989V448h95.88c75.274 0 121.335-82.997 81.408-146.88z"                                                                        ,} )\n    )\r\n));\n\n//# sourceURL=webpack://LibraryPluginHack/./RestoreDirectMessages/components/icons/restore.tsx?');
			},
			"./RestoreDirectMessages/components/menu.tsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
				eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Menu)\n/* harmony export */ });\n/* harmony import */ var _discord_flux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @discord/flux */ "@discord/flux");\n/* harmony import */ var _discord_flux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_discord_flux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _zlibrary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @zlibrary */ "@zlibrary");\n/* harmony import */ var _zlibrary__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_zlibrary__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../settings */ "./RestoreDirectMessages/settings.ts");\n/* harmony import */ var _icons_close__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/close */ "./RestoreDirectMessages/components/icons/close.tsx");\n/* harmony import */ var _menu_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./menu.scss */ "./RestoreDirectMessages/components/menu.scss");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "lodash");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _discord_components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @discord/components */ "@discord/components");\n/* harmony import */ var _discord_components__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_discord_components__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _select__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./select */ "./RestoreDirectMessages/components/select.tsx");\n/* harmony import */ var _discord_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @discord/utils */ "@discord/utils");\n/* harmony import */ var _discord_utils__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_discord_utils__WEBPACK_IMPORTED_MODULE_9__);\n/* provided dependency */ var React = __webpack_require__(/*! react */ "react");\n function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === \'optionalAccess\' || op === \'optionalCall\') && value == null) { return undefined; } if (op === \'access\' || op === \'optionalAccess\') { lastAccessLHS = value; value = fn(value); } else if (op === \'call\' || op === \'optionalCall\') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst { ListNavigatorContainer } = _zlibrary__WEBPACK_IMPORTED_MODULE_1__.WebpackModules.getByProps("ListNavigatorContainer");\r\nconst { ListAuto } = _zlibrary__WEBPACK_IMPORTED_MODULE_1__.WebpackModules.getByProps("ListAuto");\r\nconst AvatarUtils = _zlibrary__WEBPACK_IMPORTED_MODULE_1__.WebpackModules.getByProps("getUserAvatarURL");\r\nconst DMUtils = _zlibrary__WEBPACK_IMPORTED_MODULE_1__.WebpackModules.getByProps("openPrivateChannel");\r\nconst SearchBar = _zlibrary__WEBPACK_IMPORTED_MODULE_1__.WebpackModules.getByDisplayName("SearchBar");\r\nconst classes = _zlibrary__WEBPACK_IMPORTED_MODULE_1__.WebpackModules.getByProps("desaturate", "searchResultsWrap");\r\n \r\nconst itemHeight = 50;\r\n\r\nfunction Menu({ onClose }) {\r\n    const [query, setQuery] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)("");\r\n\r\n    const peoples = (0,_discord_flux__WEBPACK_IMPORTED_MODULE_0__.useStateFromStores)([_settings__WEBPACK_IMPORTED_MODULE_3__.default], () => {\r\n        const sort = _settings__WEBPACK_IMPORTED_MODULE_3__.default.get("sortOption", { value: "descending", label: "descending" });\r\n        const order = _settings__WEBPACK_IMPORTED_MODULE_3__.default.get("order", { value: "username", label: "username" });\r\n        let list = lodash__WEBPACK_IMPORTED_MODULE_6___default()(Object.values(_settings__WEBPACK_IMPORTED_MODULE_3__.default.get("saved", {})));\r\n\r\n        if (list.some(user => user.id === query)) {\r\n            return [list.find(user => user.id === query)];\r\n        }\r\n\r\n        const tester = new RegExp(lodash__WEBPACK_IMPORTED_MODULE_6___default().escape(query), "i");\r\n        if (query) list = list.filter(user => tester.test(_optionalChain([user, \'optionalAccess\', _2 => _2.username])));\r\n\r\n        list = list.sortBy(user => user[sort.value]);\r\n        if (order.value === "ascending") list = list.reverse();\r\n\r\n        const value = list.value();\r\n        if (value.length < 1) {\r\n            return ["EMPTY_PLACE_HOLDER"];\r\n        }\r\n\r\n        return value;\r\n    });\r\n    \r\n    const renderSection = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(() => {\r\n        const sort = _settings__WEBPACK_IMPORTED_MODULE_3__.default.get("sortOption", { value: "descending", label: "Descending" });\r\n        const order = _settings__WEBPACK_IMPORTED_MODULE_3__.default.get("order", { value: "username", label: "Username" });\r\n        \r\n        return (\r\n            React.createElement(_discord_components__WEBPACK_IMPORTED_MODULE_7__.Flex, { className: _menu_scss__WEBPACK_IMPORTED_MODULE_5__.default.controls, direction: _discord_components__WEBPACK_IMPORTED_MODULE_7__.Flex.Direction.VERTICAL, justify: _discord_components__WEBPACK_IMPORTED_MODULE_7__.Flex.Justify.BETWEEN,}\n                , React.createElement(SearchBar, {\r\n                    onChange: value => setQuery(value),\r\n                    onClear: () => setQuery(""),\r\n                    placeholder: "Search",\r\n                    query: query,\r\n                    size: SearchBar.Sizes.MEDIUM,}\r\n                )\n                , React.createElement(_discord_components__WEBPACK_IMPORTED_MODULE_7__.Flex, { direction: _discord_components__WEBPACK_IMPORTED_MODULE_7__.Flex.Direction.HORIZONTAL, justify: _discord_components__WEBPACK_IMPORTED_MODULE_7__.Flex.Justify.BETWEEN, className: _menu_scss__WEBPACK_IMPORTED_MODULE_5__.default.selectInputs,}\n                    , React.createElement(_select__WEBPACK_IMPORTED_MODULE_8__.default, {\r\n                        label: "Order",\r\n                        value: order,\r\n                        options: [\r\n                            { label: "Ascending", value: "ascending" },\r\n                            { label: "Descending", value: "descending" }\r\n                        ],\r\n                        onChange: value => {\r\n                            _settings__WEBPACK_IMPORTED_MODULE_3__.default.set("order", value);\r\n                        },}\r\n                    )\n                    , React.createElement(_select__WEBPACK_IMPORTED_MODULE_8__.default, {\r\n                        label: "Sort by" ,\r\n                        value: sort,\r\n                        options: [\r\n                            { label: "Name", value: "username" },\r\n                            { label: "Discriminator", value: "discriminator" }\r\n                        ],\r\n                        onChange: value => {\r\n                            _settings__WEBPACK_IMPORTED_MODULE_3__.default.set("sortOption", value);\r\n                        },}\r\n                    )\n                )\n            )\r\n        );\r\n    }, [peoples]);\r\n\r\n    const removeUser = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(userId => {\r\n        const savedUsers = _settings__WEBPACK_IMPORTED_MODULE_3__.default.get("saved", {});\r\n        delete savedUsers[userId];\r\n        _settings__WEBPACK_IMPORTED_MODULE_3__.default.set("saved", savedUsers);\r\n    }, []);\r\n\r\n    const openDM = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(userId => {\r\n        onClose();\r\n        DMUtils.openPrivateChannel(userId);\r\n    }, []);\r\n\r\n    const renderRow = (0,react__WEBPACK_IMPORTED_MODULE_2__.useCallback)(function ({ row: index }) {\r\n        const user = peoples[index];\r\n        if (user === "EMPTY_PLACE_HOLDER") return (\r\n            React.createElement(\'div\', { className: (0,_discord_utils__WEBPACK_IMPORTED_MODULE_9__.joinClassNames)(classes.emptyResultsContent, _menu_scss__WEBPACK_IMPORTED_MODULE_5__.default.noResult),}\n                , React.createElement(\'div\', { className: (0,_discord_utils__WEBPACK_IMPORTED_MODULE_9__.joinClassNames)(classes.desaturate, classes.noResultsImage),} )\n                , React.createElement(\'div\', { className: (0,_discord_utils__WEBPACK_IMPORTED_MODULE_9__.joinClassNames)(classes.emptyResultsText, classes.noResults),}\n                    , query\r\n                        ? "No results found for query \'" + query + "\'"\r\n                        : "You didn\'t close anything yet."\r\n                    \n                )\n            )\r\n        );\r\n\r\n\r\n        return (\r\n            React.createElement(_discord_components__WEBPACK_IMPORTED_MODULE_7__.Flex, { direction: _discord_components__WEBPACK_IMPORTED_MODULE_7__.Flex.Direction.HORIZONTAL, key: user.id, className: _menu_scss__WEBPACK_IMPORTED_MODULE_5__.default.user, align: _discord_components__WEBPACK_IMPORTED_MODULE_7__.Flex.Align.CENTER, onClick: openDM.bind(null, user.id),}\n                , React.createElement(\'img\', { className: _menu_scss__WEBPACK_IMPORTED_MODULE_5__.default.avatar, src: AvatarUtils.getUserAvatarURL(user),} )\n                , React.createElement(\'span\', { className: _menu_scss__WEBPACK_IMPORTED_MODULE_5__.default.username,}\n                    , user.username\n                    , React.createElement(\'span\', { className: _menu_scss__WEBPACK_IMPORTED_MODULE_5__.default.discriminator,}, "#", user.discriminator)\n                )\n                , React.createElement(\'div\', { className: _menu_scss__WEBPACK_IMPORTED_MODULE_5__.default.buttonContainer,}\n                    , React.createElement(_discord_components__WEBPACK_IMPORTED_MODULE_7__.TooltipContainer, { text: "Remove",}\n                        , React.createElement(_icons_close__WEBPACK_IMPORTED_MODULE_4__.default, { onClick: removeUser.bind(null, user.id), className: _menu_scss__WEBPACK_IMPORTED_MODULE_5__.default.deleteIcon,} )\n                    )\n                )\n            )\r\n        );\r\n    }, [peoples]);\r\n\r\n    return (\r\n        React.createElement(ListNavigatorContainer, null\n            , props => {\r\n                return (\r\n                    React.createElement(ListAuto, {\r\n                        ...props,\r\n                        renderSection: renderSection,\r\n                        renderRow: renderRow,\r\n                        sectionHeight: itemHeight,\r\n                        rowHeight: itemHeight,\r\n                        sections: [peoples.length],}\r\n                    )\r\n                );\r\n            }\n        )\r\n    );\r\n}\n\n//# sourceURL=webpack://LibraryPluginHack/./RestoreDirectMessages/components/menu.tsx?');
			},
			"./RestoreDirectMessages/components/select.tsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
				eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Select)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _zlibrary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @zlibrary */ "@zlibrary");\n/* harmony import */ var _zlibrary__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_zlibrary__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _discord_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @discord/components */ "@discord/components");\n/* harmony import */ var _discord_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_discord_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _select_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./select.scss */ "./RestoreDirectMessages/components/select.scss");\n/* harmony import */ var _discord_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @discord/utils */ "@discord/utils");\n/* harmony import */ var _discord_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_discord_utils__WEBPACK_IMPORTED_MODULE_4__);\n/* provided dependency */ var React = __webpack_require__(/*! react */ "react");\n function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === \'optionalAccess\' || op === \'optionalCall\') && value == null) { return undefined; } if (op === \'access\' || op === \'optionalAccess\') { lastAccessLHS = value; value = fn(value); } else if (op === \'call\' || op === \'optionalCall\') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }\r\n\r\n\r\n\r\n\r\n\r\nconst Popout = _zlibrary__WEBPACK_IMPORTED_MODULE_1__.WebpackModules.getByDisplayName("Popout");\r\nconst Caret = _zlibrary__WEBPACK_IMPORTED_MODULE_1__.WebpackModules.getByDisplayName("Caret");\r\n\r\nfunction Select({value, options, label, onChange}) {\r\n    const [selected, setSelected] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value);\r\n\r\n    const renderPopout = props => (\r\n        React.createElement(\'div\', { ...props, className: _select_scss__WEBPACK_IMPORTED_MODULE_3__.default.container,}\n            , \r\n                options.map((option, index) => (\r\n                    React.createElement(\'div\', { \r\n                        className: (0,_discord_utils__WEBPACK_IMPORTED_MODULE_4__.joinClassNames)(_select_scss__WEBPACK_IMPORTED_MODULE_3__.default.option, {[_select_scss__WEBPACK_IMPORTED_MODULE_3__.default.selected]: _optionalChain([selected, \'optionalAccess\', _ => _.value]) === option.value}), \r\n                        key: index,\r\n                        onClick: () => {\r\n                            setSelected(option);\r\n                            onChange(option);\r\n                            props.closePopout();\r\n                        },}\r\n                    \n                        , option.label\n                    )\r\n                ))\r\n            \n        )\r\n    );\r\n\r\n    return React.createElement(Popout, { renderPopout: renderPopout, align: "center", animation: Popout.Animation.FADE, position: "bottom",}\n        , \r\n            props => (\r\n                React.createElement(_discord_components__WEBPACK_IMPORTED_MODULE_2__.Flex, { className: _select_scss__WEBPACK_IMPORTED_MODULE_3__.default.select, shrink: 0, grow: 0, align: _discord_components__WEBPACK_IMPORTED_MODULE_2__.Flex.Align.CENTER, justify: _discord_components__WEBPACK_IMPORTED_MODULE_2__.Flex.Justify.END, onClick: props.onClick,}\n                    , React.createElement(_discord_components__WEBPACK_IMPORTED_MODULE_2__.Text, { color: _discord_components__WEBPACK_IMPORTED_MODULE_2__.Text.Colors.MUTED,}, label)\n                    , React.createElement(_discord_components__WEBPACK_IMPORTED_MODULE_2__.Text, { className: _select_scss__WEBPACK_IMPORTED_MODULE_3__.default.selectedText, color: _discord_components__WEBPACK_IMPORTED_MODULE_2__.Text.Colors.INTERACTIVE_NORMAL,}, _optionalChain([selected, \'optionalAccess\', _2 => _2.label]))\n                    , React.createElement(Caret, { direction: Caret.Directions.DOWN, className: _discord_components__WEBPACK_IMPORTED_MODULE_2__.Text.Colors.INTERACTIVE_NORMAL,} )\n                )\r\n            )\r\n        \n    )\r\n}\n\n//# sourceURL=webpack://LibraryPluginHack/./RestoreDirectMessages/components/select.tsx?');
			},
			"./RestoreDirectMessages/index.tsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
				eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ RestoreDirectMessages)\n/* harmony export */ });\n/* harmony import */ var _zlibrary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @zlibrary */ "@zlibrary");\n/* harmony import */ var _zlibrary__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_zlibrary__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _zlibrary_plugin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @zlibrary/plugin */ "@zlibrary/plugin");\n/* harmony import */ var _zlibrary_plugin__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_zlibrary_plugin__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./style.scss */ "./RestoreDirectMessages/style.scss");\n/* harmony import */ var styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styles */ "styles");\n/* harmony import */ var styles__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styles__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/button */ "./RestoreDirectMessages/components/button.tsx");\n/* harmony import */ var _discord_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @discord/modal */ "@discord/modal");\n/* harmony import */ var _discord_modal__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_discord_modal__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _components_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/menu */ "./RestoreDirectMessages/components/menu.tsx");\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./settings */ "./RestoreDirectMessages/settings.ts");\n/* provided dependency */ var React = __webpack_require__(/*! react */ "react");\n function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === \'optionalAccess\' || op === \'optionalCall\') && value == null) { return undefined; } if (op === \'access\' || op === \'optionalAccess\') { lastAccessLHS = value; value = fn(value); } else if (op === \'call\' || op === \'optionalCall\') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst DMUtils = _zlibrary__WEBPACK_IMPORTED_MODULE_0__.WebpackModules.getByProps("closePrivateChannel");\r\nconst ChannelStore = _zlibrary__WEBPACK_IMPORTED_MODULE_0__.WebpackModules.getByProps("getDMFromUserId");\r\n\r\nclass RestoreDirectMessages extends (_zlibrary_plugin__WEBPACK_IMPORTED_MODULE_1___default()) {\r\n    get Settings() { return _settings__WEBPACK_IMPORTED_MODULE_7__.default;}\r\n    onStart() {\r\n        this.patchDmSearchBar();\r\n        this.patchCloseChannel();\r\n\r\n        styles__WEBPACK_IMPORTED_MODULE_3___default().inject();\r\n    }\r\n\r\n    openMenu() {\r\n        (0,_discord_modal__WEBPACK_IMPORTED_MODULE_5__.openModal)(props => (\r\n            // @ts-ignore\r\n            React.createElement(_discord_modal__WEBPACK_IMPORTED_MODULE_5__.ModalRoot, { ...props, size: "medium",}\n                , React.createElement(_components_menu__WEBPACK_IMPORTED_MODULE_6__.default, { onClose: props.onClose,} )\n            )\r\n        ));\r\n    }\r\n\r\n    async patchCloseChannel() {\r\n        _zlibrary__WEBPACK_IMPORTED_MODULE_0__.Patcher.before(DMUtils, "closePrivateChannel", (_, [dmId]) => {\r\n            const channel = ChannelStore.getChannel(dmId);\r\n            const saved = _settings__WEBPACK_IMPORTED_MODULE_7__.default.get("saved", {});\r\n            const recipient = _optionalChain([channel, \'optionalAccess\', _2 => _2.recipients, \'optionalAccess\', _3 => _3[0]]);\r\n            if (!recipient || saved[recipient]) return;\r\n            console.log(recipient);\r\n            saved[recipient] = { ...channel.rawRecipients[0] };\r\n            _settings__WEBPACK_IMPORTED_MODULE_7__.default.set("saved", saved);\r\n            console.log(saved);\r\n        });\r\n    }\r\n\r\n    async patchDmSearchBar() {\r\n        const className = _optionalChain([_zlibrary__WEBPACK_IMPORTED_MODULE_0__.WebpackModules, \'access\', _4 => _4.getByProps, \'call\', _5 => _5("searchBar", "hideGameUpdateProgressIndicator"), \'optionalAccess\', _6 => _6.searchBar]);\r\n        const SearchBarContainer = await _zlibrary__WEBPACK_IMPORTED_MODULE_0__.ReactComponents.getComponentByName("TutorialIndicator", `.${className}`);\r\n        \r\n        _zlibrary__WEBPACK_IMPORTED_MODULE_0__.Patcher.after(SearchBarContainer.component.prototype, "render", (_this, _, res) => {\r\n            if (_this.props.tutorialId !== "direct-messages") return res;\r\n            \r\n            res.props.children = [\r\n                res.props.children,\r\n                React.createElement(\'div\', { className: _style_scss__WEBPACK_IMPORTED_MODULE_2__.default.divider,} ),\r\n                React.createElement(_components_button__WEBPACK_IMPORTED_MODULE_4__.default, { onOpen: () => { this.openMenu(); },} )\r\n            ].flat(10);\r\n        });\r\n\r\n        SearchBarContainer.forceUpdateAll();\r\n    }\r\n\r\n    onStop() {\r\n        styles__WEBPACK_IMPORTED_MODULE_3___default().remove();\r\n        _zlibrary__WEBPACK_IMPORTED_MODULE_0__.Patcher.unpatchAll();\r\n    }\r\n}\n\n//# sourceURL=webpack://LibraryPluginHack/./RestoreDirectMessages/index.tsx?');
			},
			"./RestoreDirectMessages/settings.ts": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
				eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var common_classes_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/classes/settings */ "./node_modules/bdbuilder/common/classes/settings.ts");\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./package.json */ "./RestoreDirectMessages/package.json");\n\r\n\r\n\r\nconst Settings = new common_classes_settings__WEBPACK_IMPORTED_MODULE_0__.default(_package_json__WEBPACK_IMPORTED_MODULE_1__.info.name, { saved: {} });\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Settings);\n\n//# sourceURL=webpack://LibraryPluginHack/./RestoreDirectMessages/settings.ts?');
			},
			"./node_modules/bdbuilder/common/classes/settings.ts": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
				eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ SettingsManager)\n/* harmony export */ });\n/* harmony import */ var _zlibrary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @zlibrary */ "@zlibrary");\n/* harmony import */ var _zlibrary__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_zlibrary__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _discord_flux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @discord/flux */ "@discord/flux");\n/* harmony import */ var _discord_flux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_discord_flux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _discord_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @discord/modules */ "@discord/modules");\n/* harmony import */ var _discord_modules__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_discord_modules__WEBPACK_IMPORTED_MODULE_2__);\n function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }\n\n\n\n/// <reference path="../../typings/discord.d.ts"/>\n\nclass SettingsManager extends _discord_flux__WEBPACK_IMPORTED_MODULE_1__.Store {\n    \n    \n    constructor(pluginName) {\n        super(_discord_modules__WEBPACK_IMPORTED_MODULE_2__.Dispatcher, {});SettingsManager.prototype.__init.call(this);SettingsManager.prototype.__init2.call(this);;\n        this.pluginName = pluginName;\n        this.settings = _zlibrary__WEBPACK_IMPORTED_MODULE_0__.PluginUtilities.loadSettings(pluginName, {});\n    }\n\n    __init() {this.get = (key, defaultValue) => {\n        return _nullishCoalesce(this.settings[key], () => ( defaultValue));\n    }}\n\n    __init2() {this.set = (key, value) => {\n        this.settings[key] = value;\n        _zlibrary__WEBPACK_IMPORTED_MODULE_0__.PluginUtilities.saveSettings(this.pluginName, this.settings);\n        this.emitChange();\n\n        return value;\n    }}\n}\n\n//# sourceURL=webpack://LibraryPluginHack/./node_modules/bdbuilder/common/classes/settings.ts?');
			},
			"./node_modules/css-loader/dist/runtime/api.js": module => {
				eval('\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return "@media ".concat(item[2], " {").concat(content, "}");\n      }\n\n      return content;\n    }).join("");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === "string") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, ""]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://LibraryPluginHack/./node_modules/css-loader/dist/runtime/api.js?');
			},
			"./RestoreDirectMessages/components/menu.scss": (module, __webpack_exports__, __webpack_require__) => {
				eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, ".RestoreDirectMessages-menu-noResult {\\n  color: #ddd;\\n}\\n\\n.RestoreDirectMessages-menu-controls {\\n  color: #ddd;\\n  padding: 10px;\\n  padding-right: 0;\\n}\\n\\n.RestoreDirectMessages-menu-selectInputs {\\n  margin: 5px 20px;\\n  padding-bottom: 10px;\\n  border-bottom: thin solid var(--background-modifier-accent);\\n}\\n\\n.RestoreDirectMessages-menu-user {\\n  cursor: pointer;\\n  height: 50px;\\n  align-items: center;\\n  color: #ddd;\\n  justify-content: space-between;\\n  padding: 0 10px;\\n  border-radius: 4px;\\n  margin-left: 5px;\\n}\\n.RestoreDirectMessages-menu-user:hover {\\n  background-color: var(--background-modifier-accent);\\n}\\n.RestoreDirectMessages-menu-user:hover .RestoreDirectMessages-menu-deleteIcon {\\n  visibility: visible;\\n}\\n\\n.RestoreDirectMessages-menu-avatar {\\n  width: 32px;\\n  height: 32px;\\n  border-radius: 50%;\\n  margin-right: 10px;\\n}\\n\\n.RestoreDirectMessages-menu-deleteIcon {\\n  cursor: pointer;\\n  visibility: hidden;\\n  color: var(--interactive-modifier-accent);\\n  width: 20px;\\n  height: 20px;\\n}\\n\\n.RestoreDirectMessages-menu-username {\\n  display: block;\\n  margin-right: auto;\\n}\\n.RestoreDirectMessages-menu-username .RestoreDirectMessages-menu-discriminator {\\n  color: var(--text-muted);\\n  font-weight: 700;\\n}\\n\\n.RestoreDirectMessages-menu-buttonContainer {\\n  display: inline-flex;\\n}", ""]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t"noResult": "RestoreDirectMessages-menu-noResult",\n\t"controls": "RestoreDirectMessages-menu-controls",\n\t"selectInputs": "RestoreDirectMessages-menu-selectInputs",\n\t"user": "RestoreDirectMessages-menu-user",\n\t"deleteIcon": "RestoreDirectMessages-menu-deleteIcon",\n\t"avatar": "RestoreDirectMessages-menu-avatar",\n\t"username": "RestoreDirectMessages-menu-username",\n\t"discriminator": "RestoreDirectMessages-menu-discriminator",\n\t"buttonContainer": "RestoreDirectMessages-menu-buttonContainer"\n};\nStyleLoader.append(module.id, ___CSS_LOADER_EXPORT___.toString())\n;\n\t/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign(___CSS_LOADER_EXPORT___, ___CSS_LOADER_EXPORT___.locals));\n\n\n//# sourceURL=webpack://LibraryPluginHack/./RestoreDirectMessages/components/menu.scss?');
			},
			"./RestoreDirectMessages/components/select.scss": (module, __webpack_exports__, __webpack_require__) => {
				eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, ".RestoreDirectMessages-select-container {\\n  background: var(--background-secondary);\\n  border: 1px solid var(--background-tertiary);\\n  border-radius: 4px;\\n}\\n.RestoreDirectMessages-select-container .RestoreDirectMessages-select-option {\\n  padding: 7px 10px;\\n  color: #ddd;\\n  text-align: center;\\n}\\n.RestoreDirectMessages-select-container .RestoreDirectMessages-select-option.RestoreDirectMessages-select-selected {\\n  background: var(--background-secondary-alt);\\n  color: #fff;\\n}\\n.RestoreDirectMessages-select-container .RestoreDirectMessages-select-option:not(.RestoreDirectMessages-select-selected):hover {\\n  color: #fff;\\n  cursor: pointer;\\n  background: var(--background-modifier-hover);\\n}\\n\\n.RestoreDirectMessages-select-selectedText {\\n  margin: 0 5px;\\n}\\n\\n.RestoreDirectMessages-select-select {\\n  cursor: pointer;\\n}", ""]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t"container": "RestoreDirectMessages-select-container",\n\t"option": "RestoreDirectMessages-select-option",\n\t"selected": "RestoreDirectMessages-select-selected",\n\t"selectedText": "RestoreDirectMessages-select-selectedText",\n\t"select": "RestoreDirectMessages-select-select"\n};\nStyleLoader.append(module.id, ___CSS_LOADER_EXPORT___.toString())\n;\n\t/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign(___CSS_LOADER_EXPORT___, ___CSS_LOADER_EXPORT___.locals));\n\n\n//# sourceURL=webpack://LibraryPluginHack/./RestoreDirectMessages/components/select.scss?');
			},
			"./RestoreDirectMessages/style.scss": (module, __webpack_exports__, __webpack_require__) => {
				eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, ".RestoreDirectMessages-style-divider {\\n  width: 1px;\\n  height: 24px;\\n  margin: 0 10px;\\n  -webkit-box-flex: 0;\\n  -ms-flex: 0 0 auto;\\n  flex: 0 0 auto;\\n  position: relative;\\n  background: var(--background-modifier-accent);\\n}\\n\\n.RestoreDirectMessages-style-button {\\n  color: var(--interactive-normal);\\n}\\n.RestoreDirectMessages-style-button svg {\\n  width: 20px;\\n  height: 20px;\\n}\\n\\n.RestoreDirectMessages-style-badgeContainer {\\n  padding: 3px;\\n  background: var(--background-secondary);\\n  border-top-left-radius: 50%;\\n  position: absolute;\\n  bottom: -5px;\\n  right: -5px;\\n}\\n.RestoreDirectMessages-style-badgeContainer div {\\n  font-size: 10px;\\n  width: var(--badge-width) !important;\\n  height: 12px;\\n  min-width: 10px;\\n  min-height: 10px;\\n}", ""]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t"divider": "RestoreDirectMessages-style-divider",\n\t"button": "RestoreDirectMessages-style-button",\n\t"badgeContainer": "RestoreDirectMessages-style-badgeContainer"\n};\nStyleLoader.append(module.id, ___CSS_LOADER_EXPORT___.toString())\n;\n\t/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign(___CSS_LOADER_EXPORT___, ___CSS_LOADER_EXPORT___.locals));\n\n\n//# sourceURL=webpack://LibraryPluginHack/./RestoreDirectMessages/style.scss?');
			},
			"@zlibrary/plugin": module => {
				module.exports = BasePlugin;
			},
			react: module => {
				module.exports = BdApi.React;
			},
			"@zlibrary": module => {
				module.exports = PluginApi;
			},
			styles: module => {
				module.exports = StyleLoader;
			},
			lodash: module => {
				module.exports = window._;
			},
			"@discord/components": module => {
				module.exports = Modules["@discord/components"];
			},
			"@discord/flux": module => {
				module.exports = Modules["@discord/flux"];
			},
			"@discord/modal": module => {
				module.exports = Modules["@discord/modal"];
			},
			"@discord/modules": module => {
				module.exports = Modules["@discord/modules"];
			},
			"@discord/utils": module => {
				module.exports = Modules["@discord/utils"];
			}
		};
		var __webpack_module_cache__ = {};
		function __webpack_require__(moduleId) {
			var cachedModule = __webpack_module_cache__[moduleId];
			if (void 0 !== cachedModule) return cachedModule.exports;
			var module = __webpack_module_cache__[moduleId] = {
				id: moduleId,
				exports: {}
			};
			__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
			return module.exports;
		}
		(() => {
			__webpack_require__.n = module => {
				var getter = module && module.__esModule ? () => module["default"] : () => module;
				__webpack_require__.d(getter, {
					a: getter
				});
				return getter;
			};
		})();
		(() => {
			__webpack_require__.d = (exports, definition) => {
				for (var key in definition)
					if (__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) Object.defineProperty(exports, key, {
						enumerable: true,
						get: definition[key]
					});
			};
		})();
		(() => {
			__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);
		})();
		(() => {
			__webpack_require__.r = exports => {
				if ("undefined" !== typeof Symbol && Symbol.toStringTag) Object.defineProperty(exports, Symbol.toStringTag, {
					value: "Module"
				});
				Object.defineProperty(exports, "__esModule", {
					value: true
				});
			};
		})();
		var __webpack_exports__ = __webpack_require__("./RestoreDirectMessages/index.tsx");
		module.exports.LibraryPluginHack = __webpack_exports__;
	})();
	const PluginExports = module.exports.LibraryPluginHack;
	return PluginExports?.__esModule ? PluginExports.default : PluginExports;
}
module.exports = window.hasOwnProperty("ZeresPluginLibrary") ?
	buildPlugin(window.ZeresPluginLibrary.buildPlugin(config)) :
	class {
		getName() {
			return config.info.name;
		}
		getAuthor() {
			return config.info.authors.map(a => a.name).join(", ");
		}
		getDescription() {
			return `${config.info.description}. __**ZeresPluginLibrary was not found! This plugin will not work!**__`;
		}
		getVersion() {
			return config.info.version;
		}
		load() {
			BdApi.showConfirmationModal(
				"Library plugin is needed",
				[`The library plugin needed for ${config.info.name} is missing. Please click Download to install it.`], {
					confirmText: "Download",
					cancelText: "Cancel",
					onConfirm: () => {
						require("request").get("https://rauenzi.github.io/BDPluginLibrary/release/0PluginLibrary.plugin.js", async (error, response, body) => {
							if (error) return require("electron").shell.openExternal("https://betterdiscord.net/ghdl?url=https://raw.githubusercontent.com/rauenzi/BDPluginLibrary/master/release/0PluginLibrary.plugin.js");
							await new Promise(r => require("fs").writeFile(require("path").join(BdApi.Plugins.folder, "0PluginLibrary.plugin.js"), body, r));
						});
					}
				}
			);
		}
		start() {}
		stop() {}
	};
/*@end@*/