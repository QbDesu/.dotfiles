/**
 * @name PinStuff
 * @author Strencher
 * @version 0.0.1
 * @description Lets you pin direct messages at the top of the page.
 * @source https://github.com/Strencher/BetterDiscordStuff/blob/master/PinStuff/PinStuff.plugin.js
 * @updateUrl https://raw.githubusercontent.com/Strencher/BetterDiscordStuff/master/PinStuff/PinStuff.plugin.js
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
		"name": "PinStuff",
		"authors": [{
			"name": "Strencher",
			"discord_id": "415849376598982656",
			"github_username": "Strencher",
			"twitter_username": "Strencher3"
		}],
		"version": "0.0.1",
		"description": "Lets you pin direct messages at the top of the page.",
		"github": "https://github.com/Strencher/BetterDiscordStuff/blob/master/PinStuff/PinStuff.plugin.js",
		"github_raw": "https://raw.githubusercontent.com/Strencher/BetterDiscordStuff/master/PinStuff/PinStuff.plugin.js"
	},
	"build": {
		"copy": true,
		"zlibrary": true,
		"production": true,
		"release": {
			"source": true,
			"readme": true,
			"public": true
		}
	},
	"changelog": [{
		"title": "Yeah",
		"type": "added",
		"items": [
			"The plugin exist"
		]
	}]
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
			"./PinStuff/package.json": module => {
				eval('module.exports = JSON.parse(\'{"info":{"name":"PinStuff","authors":[{"name":"Strencher","discord_id":"415849376598982656","github_username":"Strencher","twitter_username":"Strencher3"}],"version":"0.0.1","description":"Lets you pin direct messages at the top of the page.","github":"https://github.com/Strencher/BetterDiscordStuff/blob/master/PinStuff/PinStuff.plugin.js","github_raw":"https://raw.githubusercontent.com/Strencher/BetterDiscordStuff/master/PinStuff/PinStuff.plugin.js"},"build":{"copy":true,"zlibrary":true,"production":true,"release":{"source":true,"readme":true,"public":true}},"changelog":[{"title":"Yeah","type":"added","items":["The plugin exist"]}]}\');\n\n//# sourceURL=webpack://LibraryPluginHack/./PinStuff/package.json?');
			},
			"./PinStuff/components/avatar.tsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
				eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "PinIcon": () => (/* binding */ PinIcon),\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _discord_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @discord/components */ "@discord/components");\n/* harmony import */ var _discord_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_discord_components__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _zlibrary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @zlibrary */ "@zlibrary");\n/* harmony import */ var _zlibrary__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_zlibrary__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _avatar_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./avatar.scss */ "./PinStuff/components/avatar.scss");\n/* harmony import */ var _icons_pin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icons/pin */ "./PinStuff/components/icons/pin.tsx");\n/* harmony import */ var common_components_errorboundary__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! common/components/errorboundary */ "./node_modules/bdbuilder/common/components/errorboundary.tsx");\n function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === \'optionalAccess\' || op === \'optionalCall\') && value == null) { return undefined; } if (op === \'access\' || op === \'optionalAccess\') { lastAccessLHS = value; value = fn(value); } else if (op === \'call\' || op === \'optionalCall\') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst { AnimatedAvatar } = _zlibrary__WEBPACK_IMPORTED_MODULE_1__.WebpackModules.getByProps("AnimatedAvatar");\r\n\r\nfunction PinIcon() {\r\n    return (\r\n        react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_discord_components__WEBPACK_IMPORTED_MODULE_0__.Tooltip, { text: "Pinned", spacing: 9.5,}\n            , \r\n                props => react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\'g\', { className: _avatar_scss__WEBPACK_IMPORTED_MODULE_3__.default.wrapper,}\n                    , react__WEBPACK_IMPORTED_MODULE_2___default().createElement(\'rect\', { ...props, fill: "#5865f2", width: "11", height: "11", x: "1", y: "22", rx: "50", ry: "50",})\n                    , react__WEBPACK_IMPORTED_MODULE_2___default().createElement(_icons_pin__WEBPACK_IMPORTED_MODULE_4__.default, { className: _avatar_scss__WEBPACK_IMPORTED_MODULE_3__.default.pin, x: "2", y: "22", width: "10", height: "10",} )\n                )\r\n            \n        )\r\n    );\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst PinnedDMAvatar = (0,react__WEBPACK_IMPORTED_MODULE_2__.memo)(props => {\r\n    const ret = AnimatedAvatar.type(props);\r\n    const old = ret.type;\r\n    ret.type = (...e) => {\r\n        try {\r\n            const ret = old(...e);\r\n            const mask = _zlibrary__WEBPACK_IMPORTED_MODULE_1__.Utilities.findInReactTree(ret, e => _optionalChain([e, \'optionalAccess\', _ => _.mask]));\r\n            const childs = _zlibrary__WEBPACK_IMPORTED_MODULE_1__.Utilities.findInReactTree(ret, e => Array.isArray(_optionalChain([e, \'optionalAccess\', _2 => _2.children])));\r\n            const svg = _zlibrary__WEBPACK_IMPORTED_MODULE_1__.Utilities.findInReactTree(ret, e => _optionalChain([e, \'optionalAccess\', _3 => _3.type]) === "svg");\r\n            if (!mask || !childs || !svg) return ret;\r\n            \r\n            svg.props.height = "35";\r\n            \r\n            mask.mask = props.isTyping\r\n                ? "url(#svg-mask-avatar-status-typing-32-pinned)"\r\n                : props.isMobile\r\n                    ? "url(#svg-mask-avatar-status-mobile-32-pinned)"\r\n                    : "url(#svg-mask-avatar-status-round-32-pinned)";\r\n\r\n            childs.children.push(react__WEBPACK_IMPORTED_MODULE_2___default().createElement(PinIcon, null ));\r\n\r\n            return ret;\r\n        } catch (error) {\r\n            _zlibrary__WEBPACK_IMPORTED_MODULE_1__.Logger.error("Error in AvatarPatch:\\n", error);\r\n            return null;\r\n        }\r\n\r\n    }\r\n    \r\n    return ret;\r\n});\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (common_components_errorboundary__WEBPACK_IMPORTED_MODULE_5__.default.from(PinnedDMAvatar, "PinStuff"));\n\n//# sourceURL=webpack://LibraryPluginHack/./PinStuff/components/avatar.tsx?');
			},
			"./PinStuff/components/directMessages.tsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
				eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "DraggableDirectMessage": () => (/* binding */ DraggableDirectMessage),\n/* harmony export */   "default": () => (/* binding */ PinnedUsers)\n/* harmony export */ });\n/* harmony import */ var _discord_flux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @discord/flux */ "@discord/flux");\n/* harmony import */ var _discord_flux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_discord_flux__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _zlibrary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @zlibrary */ "@zlibrary");\n/* harmony import */ var _zlibrary__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_zlibrary__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../settings */ "./PinStuff/settings.ts");\n/* harmony import */ var _list_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../list.scss */ "./PinStuff/list.scss");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _dmChannel_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dmChannel.scss */ "./PinStuff/components/dmChannel.scss");\n/* harmony import */ var _discord_stores__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @discord/stores */ "@discord/stores");\n/* harmony import */ var _discord_stores__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_discord_stores__WEBPACK_IMPORTED_MODULE_6__);\n/* provided dependency */ var React = __webpack_require__(/*! react */ "react");\n function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === \'optionalAccess\' || op === \'optionalCall\') && value == null) { return undefined; } if (op === \'access\' || op === \'optionalAccess\') { lastAccessLHS = value; value = fn(value); } else if (op === \'call\' || op === \'optionalCall\') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst { useDrag, useDrop } = _zlibrary__WEBPACK_IMPORTED_MODULE_1__.WebpackModules.getByProps("DropTarget", "useDrop");\r\nconst Channels = _zlibrary__WEBPACK_IMPORTED_MODULE_1__.WebpackModules.getByProps("DirectMessage");\r\nconst ChannelStore = _zlibrary__WEBPACK_IMPORTED_MODULE_1__.WebpackModules.getByProps("getDMFromUserId");\r\n\r\nfunction moveItem(array, fromIndex, toIndex) {\r\n    array = [...array];\r\n    const item = array[fromIndex];\r\n    array.splice(fromIndex, 1);\r\n    array.splice(toIndex, 0, item);\r\n    return array;\r\n}\r\n\r\nfunction DraggableDirectMessage({ move, index, id }) {\r\n    const ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);\r\n    const channel = ChannelStore.getChannel(id);\r\n\r\n    const [, drop] = useDrop({\r\n        accept: "user",\r\n        hover: (item, monitor) => {\r\n            if (!ref.current) return;\r\n            const dragIndex = item.index;\r\n            const hoverIndex = index;\r\n\r\n            if (dragIndex === hoverIndex) return;\r\n\r\n            const hoverBoundingRect = _optionalChain([ref, \'access\', _ => _.current, \'optionalAccess\', _2 => _2.getBoundingClientRect, \'call\', _3 => _3()]);\r\n            const hoverMiddleY =\r\n                (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;\r\n            const clientOffset = monitor.getClientOffset();\r\n            const hoverClientY = clientOffset.y - hoverBoundingRect.top;\r\n\r\n            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) return;\r\n            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) return;\r\n\r\n            move(dragIndex, hoverIndex);\r\n            item.index = hoverIndex;\r\n        }\r\n    });\r\n\r\n    const [{ isDragging }, drag] = useDrag({\r\n        item: { id, index, type: "user" },\r\n        collect: (monitor) => ({\r\n            isDragging: monitor.isDragging()\r\n        })\r\n    });\r\n\r\n    drag(drop(ref));\r\n    \r\n    return (\r\n        React.createElement(Channels.DirectMessage, {\r\n            pinned: true,\r\n            elRef: ref,\r\n            className: isDragging ? _dmChannel_scss__WEBPACK_IMPORTED_MODULE_5__.default.dragging : null,\r\n            channel: channel,\r\n            key: id,\r\n            id: `private-channels-${id}`,\r\n            role: "listitem",\r\n            selected: _discord_stores__WEBPACK_IMPORTED_MODULE_6__.SelectedChannels.getChannelId() === id,}\r\n        )\r\n    );\r\n}\r\n\r\nfunction PinnedUsers() {\r\n    const users = (0,_discord_flux__WEBPACK_IMPORTED_MODULE_0__.useStateFromStores)([_settings__WEBPACK_IMPORTED_MODULE_2__.default], () => _settings__WEBPACK_IMPORTED_MODULE_2__.default.get("pinned", []));\r\n\r\n    const setUsers = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)(users => {\r\n        _settings__WEBPACK_IMPORTED_MODULE_2__.default.set("pinned", users);\r\n    }, [users]);\r\n\r\n    const move = (0,react__WEBPACK_IMPORTED_MODULE_4__.useCallback)((dragIndex, hoverIndex) => {\r\n        setUsers(moveItem(users, dragIndex, hoverIndex));\r\n    }, [users]);\r\n\r\n    const renderUser = (user, index) => {\r\n        const channel = ChannelStore.getChannel(user);\r\n        if (!channel) return null;\r\n\r\n        return (\r\n            React.createElement(DraggableDirectMessage, {\r\n                key: user,\r\n                index: index,\r\n                id: user,\r\n                move: move,}\r\n            )\r\n        );\r\n    };\r\n\r\n    return (\r\n        React.createElement(\'div\', { className: _list_scss__WEBPACK_IMPORTED_MODULE_3__.default.container,}\n            , \r\n                users.map((id, i) => renderUser(id, i))\r\n            \n            , React.createElement(\'div\', { className: _list_scss__WEBPACK_IMPORTED_MODULE_3__.default.divider,} )\n        )\r\n    );\r\n}\n\n//# sourceURL=webpack://LibraryPluginHack/./PinStuff/components/directMessages.tsx?');
			},
			"./PinStuff/components/icons/pin.tsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
				eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Pin)\n/* harmony export */ });\n/* provided dependency */ var React = __webpack_require__(/*! react */ "react");\nfunction Pin(props) {\r\n    return (\r\n        React.createElement(\'svg\', { x: "0", y: "0", width: "24", height: "24", viewBox: "0 0 24 24"   , ...props,}\n            , React.createElement(\'path\', { fill: "currentColor", d: "M22 12L12.101 2.10101L10.686 3.51401L12.101 4.92901L7.15096 9.87801V9.88001L5.73596 8.46501L4.32196 9.88001L8.56496 14.122L2.90796 19.778L4.32196 21.192L9.97896 15.536L14.222 19.778L15.636 18.364L14.222 16.95L19.171 12H19.172L20.586 13.414L22 12Z"                 ,} )\n        )\r\n    );\r\n}\n\n//# sourceURL=webpack://LibraryPluginHack/./PinStuff/components/icons/pin.tsx?');
			},
			"./PinStuff/components/masks.tsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
				eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ Masks)\n/* harmony export */ });\n/* provided dependency */ var React = __webpack_require__(/*! react */ "react");\nfunction Masks() {\r\n    return (\r\n        React.createElement(React.Fragment, null\n            , React.createElement(\'mask\', { \'data-pdm\': true, id: "svg-mask-avatar-status-round-32-pinned", maskContentUnits: "objectBoundingBox", viewBox: "0 0 1 1"   ,}\n                , React.createElement(\'circle\', { fill: "white", cx: "0.5", cy: "0.5", r: "0.5",})\n                , React.createElement(\'circle\', { fill: "black", cx: "0.84375", cy: "0.84375", r: "0.25",})\n                , React.createElement(\'circle\', { fill: "black", cx: "0.21725", cy: "0.84375", r: "0.25",})\n            )\n            , React.createElement(\'mask\', { \'data-pdm\': true, id: "svg-mask-avatar-status-mobile-32-pinned", maskContentUnits: "objectBoundingBox", viewBox: "0 0 1 1"   ,}\n                , React.createElement(\'circle\', { fill: "white", cx: "0.5", cy: "0.5", r: "0.5",})\n                , React.createElement(\'rect\', { fill: "black", x: "0.59375", y: "0.4375", width: "0.5", height: "0.65625", rx: "0.13125", ry: "0.13125",})\n                , React.createElement(\'circle\', { fill: "black", cx: "0.21725", cy: "0.84375", r: "0.25",})\n            )\n            , React.createElement(\'mask\', { \'data-pdm\': true, id: "svg-mask-avatar-status-typing-32-pinned", maskContentUnits: "objectBoundingBox", viewBox: "0 0 1 1"   ,}\n                , React.createElement(\'circle\', { fill: "white", cx: "0.5", cy: "0.5", r: "0.5",})\n                , React.createElement(\'rect\', { fill: "black", x: "0.359375", y: "0.59375", width: "0.96875", height: "0.5", rx: "0.25", ry: "0.25",})\n                , React.createElement(\'circle\', { fill: "black", cx: "0.21725", cy: "0.84375", r: "0.25",})\n            )\n        )\r\n    );\r\n}\n\n//# sourceURL=webpack://LibraryPluginHack/./PinStuff/components/masks.tsx?');
			},
			"./PinStuff/index.tsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
				eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ PinStuff)\n/* harmony export */ });\n/* harmony import */ var _discord_contextmenu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @discord/contextmenu */ "@discord/contextmenu");\n/* harmony import */ var _discord_contextmenu__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_discord_contextmenu__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _discord_flux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @discord/flux */ "@discord/flux");\n/* harmony import */ var _discord_flux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_discord_flux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _discord_stores__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @discord/stores */ "@discord/stores");\n/* harmony import */ var _discord_stores__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_discord_stores__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _zlibrary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @zlibrary */ "@zlibrary");\n/* harmony import */ var _zlibrary__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_zlibrary__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _zlibrary_plugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @zlibrary/plugin */ "@zlibrary/plugin");\n/* harmony import */ var _zlibrary_plugin__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_zlibrary_plugin__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "react");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./settings */ "./PinStuff/settings.ts");\n/* harmony import */ var styles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styles */ "styles");\n/* harmony import */ var styles__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styles__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _components_directMessages__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/directMessages */ "./PinStuff/components/directMessages.tsx");\n/* harmony import */ var _components_masks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/masks */ "./PinStuff/components/masks.tsx");\n/* harmony import */ var _components_avatar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/avatar */ "./PinStuff/components/avatar.tsx");\n/* harmony import */ var _data_mask_html__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./data/mask.html */ "./PinStuff/data/mask.html");\n function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } } function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === \'optionalAccess\' || op === \'optionalCall\') && value == null) { return undefined; } if (op === \'access\' || op === \'optionalAccess\') { lastAccessLHS = value; value = fn(value); } else if (op === \'call\' || op === \'optionalCall\') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }/// <reference path="../bdbuilder/typings/main.d.ts" />\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nconst removeItems = function (array, items) {\r\n    const removed = [];\r\n    \r\n    while (array.some(item => items.includes(item))) {\r\n        removed.push(array.splice(array.findIndex(item => items.includes(item)), 1));\r\n    }\r\n\r\n    return removed.flat(10);\r\n};\r\n\r\nconst ChannelStore = _zlibrary__WEBPACK_IMPORTED_MODULE_3__.WebpackModules.getByProps("getDMFromUserId");\r\nconst DMComponents = _nullishCoalesce(_zlibrary__WEBPACK_IMPORTED_MODULE_3__.WebpackModules.getByProps("DirectMessage"), () => ( {}));\r\n\r\nclass PinStuff extends (_zlibrary_plugin__WEBPACK_IMPORTED_MODULE_4___default()) {constructor(...args) { super(...args); PinStuff.prototype.__init.call(this); }\r\n    __init() {this.updateChannels = () => {}}\r\n    get settings() { return _settings__WEBPACK_IMPORTED_MODULE_6__.default;}\r\n\r\n    onStart() {\r\n        styles__WEBPACK_IMPORTED_MODULE_7___default().inject();\r\n        \r\n        this.patchDMChannel();\r\n        this.patchLazyScroller();\r\n        this.patchPrivateChannels();\r\n        this.patchDMUserContextMenu();\r\n        this.patchQuickSwitcher();\r\n        this.patchMaskLibary();\r\n    }\r\n\r\n    async patchMaskLibary() {\r\n        const { MaskLibrary } = _zlibrary__WEBPACK_IMPORTED_MODULE_3__.WebpackModules.getByProps("MaskLibrary");\r\n        \r\n        _zlibrary__WEBPACK_IMPORTED_MODULE_3__.Patcher.after(MaskLibrary, "type", (_, __, res) => {\r\n            res.props.children.push(react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_masks__WEBPACK_IMPORTED_MODULE_9__.default, null ));\r\n        });\r\n\r\n        const DOMNode = document.querySelector("#app-mount svg");\r\n        if (!DOMNode) return;\r\n        \r\n        DOMNode.insertAdjacentHTML("beforeend", _data_mask_html__WEBPACK_IMPORTED_MODULE_11__.default);\r\n    }\r\n\r\n    async patchDMUserContextMenu() {\r\n        const DMUserContextMenu = _zlibrary__WEBPACK_IMPORTED_MODULE_3__.WebpackModules.find(m => _optionalChain([m, \'optionalAccess\', _2 => _2.default, \'optionalAccess\', _3 => _3.displayName]) === "DMUserContextMenu");\r\n\r\n        _zlibrary__WEBPACK_IMPORTED_MODULE_3__.Patcher.after(DMUserContextMenu, "default", (_, [props], res) => {\r\n            const pinned = _settings__WEBPACK_IMPORTED_MODULE_6__.default.get("pinned", []);\r\n            const isPinned = pinned.includes(props.channel.id);\r\n            const tree = _zlibrary__WEBPACK_IMPORTED_MODULE_3__.Utilities.findInReactTree(res, e => _optionalChain([e, \'optionalAccess\', _4 => _4.children, \'optionalAccess\', _5 => _5.length]) > 5 && e.children.length < 9);\r\n            if (!Array.isArray(_optionalChain([tree, \'optionalAccess\', _6 => _6.children]))) return;\r\n\r\n            tree.children.push(\r\n                react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_discord_contextmenu__WEBPACK_IMPORTED_MODULE_0__.MenuItem, {\r\n                    label: isPinned ? "Unpin Chat" : "Pin Chat",\r\n                    id: "pin-or-unpin-chat",\r\n                    action: () => {\r\n                        if (isPinned) {\r\n                            pinned.splice(pinned.indexOf(props.channel.id), 1);\r\n                        } else {\r\n                            pinned.push(props.channel.id);\r\n                        }\r\n\r\n                        _settings__WEBPACK_IMPORTED_MODULE_6__.default.set("pinned", pinned);\r\n                        this.updateChannels();\r\n                    },}\r\n                )\r\n            );\r\n        });\r\n    }\r\n\r\n    async patchLazyScroller() {\r\n        const LazyScoller = _zlibrary__WEBPACK_IMPORTED_MODULE_3__.WebpackModules.find(m => _optionalChain([m, \'optionalAccess\', _7 => _7.render, \'optionalAccess\', _8 => _8.toString, \'call\', _9 => _9(), \'access\', _10 => _10.includes, \'call\', _11 => _11("useResizeObserverSubscription")]));\r\n\r\n        _zlibrary__WEBPACK_IMPORTED_MODULE_3__.Patcher.after(LazyScoller, "render", (_, [props], res) => {\r\n            if (props.id !== "private-channels") return;\r\n            const tree = _zlibrary__WEBPACK_IMPORTED_MODULE_3__.Utilities.findInReactTree(res, e => _optionalChain([e, \'optionalAccess\', _12 => _12.containerRef]));\r\n            if (!Array.isArray(_optionalChain([tree, \'optionalAccess\', _13 => _13.children]))) return;\r\n\r\n            tree.children.splice(tree.children.findIndex(el => _optionalChain([el, \'optionalAccess\', _14 => _14.props, \'optionalAccess\', _15 => _15.channel])), 0, react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_directMessages__WEBPACK_IMPORTED_MODULE_8__.default, null ));\r\n        });\r\n    }\r\n\r\n    async patchPrivateChannels() {\r\n        const classes = _nullishCoalesce(_zlibrary__WEBPACK_IMPORTED_MODULE_3__.WebpackModules.getByProps("empty", "scroller", "headerText"), () => ( {}));\r\n        const selector = "." + ["scroller"].map(key => classes[key]).join(".");\r\n\r\n        const PrivateChannels = await _zlibrary__WEBPACK_IMPORTED_MODULE_3__.ReactComponents.getComponentByName("PrivateChannelsList", selector);\r\n\r\n        function LazyScrollerWrapper(props) {\r\n            const removed = (0,_discord_flux__WEBPACK_IMPORTED_MODULE_1__.useStateFromStores)([_settings__WEBPACK_IMPORTED_MODULE_6__.default], () => {\r\n                const removed = removeItems(props.users, _settings__WEBPACK_IMPORTED_MODULE_6__.default.get("pinned", []));\r\n                return removed;\r\n            });\r\n            props.userIds = removed;\r\n\r\n            return react__WEBPACK_IMPORTED_MODULE_5___default().createElement(props.__originalType, {...props, users: void 0});\r\n        };\r\n\r\n        _zlibrary__WEBPACK_IMPORTED_MODULE_3__.Patcher.after(PrivateChannels.component.prototype, "render", (_this, _, res) => {\r\n            const originalChildren = _optionalChain([res, \'optionalAccess\', _16 => _16.props, \'optionalAccess\', _17 => _17.children]);\r\n            if (typeof originalChildren !== "function") return;\r\n\r\n            if (!_this._users) _this._users = _this.props.privateChannelIds;\r\n\r\n            _this.props.privateChannelIds = [..._this._users];\r\n\r\n            res.props.children = function () {\r\n                const returnValue = originalChildren.apply(this, arguments);\r\n\r\n                try {\r\n                    const lazyScroller = _zlibrary__WEBPACK_IMPORTED_MODULE_3__.Utilities.findInReactTree(returnValue, e => _optionalChain([e, \'optionalAccess\', _18 => _18.props, \'optionalAccess\', _19 => _19.renderSection]));\r\n                    if (lazyScroller) {\r\n                        const originalType = lazyScroller.type;\r\n                        lazyScroller.type = LazyScrollerWrapper;\r\n\r\n                        Object.assign(lazyScroller.props, {\r\n                            __originalType: originalType,\r\n                            users: _this.props.privateChannelIds\r\n                        });\r\n                    }\r\n                } catch (error) {\r\n                    _zlibrary__WEBPACK_IMPORTED_MODULE_3__.Logger.error("Error in PrivateChannels.render patch:\\n", error);\r\n                }\r\n\r\n                return returnValue;\r\n            };\r\n        });\r\n\r\n        PrivateChannels.forceUpdateAll();\r\n        this.updateChannels = PrivateChannels.forceUpdateAll.bind(PrivateChannels);\r\n    }\r\n\r\n    async patchDMChannel() {\r\n        const PrivateChannel = _zlibrary__WEBPACK_IMPORTED_MODULE_3__.WebpackModules.getByDisplayName("PrivateChannel");\r\n\r\n        _zlibrary__WEBPACK_IMPORTED_MODULE_3__.Patcher.after(DMComponents, "DirectMessage", (_1, [props], res) => {\r\n            if (!_optionalChain([res, \'optionalAccess\', _20 => _20.props])) return;\r\n            Object.assign(res.props, props, {\r\n                __pinStuff: true\r\n            });\r\n        });\r\n\r\n        function PatchedAvatar(props) {\r\n            return react__WEBPACK_IMPORTED_MODULE_5___default().createElement(_components_avatar__WEBPACK_IMPORTED_MODULE_10__.default, props);\r\n        };\r\n\r\n        _zlibrary__WEBPACK_IMPORTED_MODULE_3__.Patcher.after(PrivateChannel.prototype, "render", ({props}, _, res) => {\r\n            if (props.elRef) res.ref = props.elRef;\r\n\r\n            if (!props.className) return;\r\n            res.props.className += (" " + props.className);\r\n        })\r\n\r\n        _zlibrary__WEBPACK_IMPORTED_MODULE_3__.Patcher.after(PrivateChannel.prototype, "renderAvatar", (_this, _1, res) => {\r\n            if (!_this.props.pinned) return;\r\n            const originalType = res.type;\r\n            res.type = PatchedAvatar;\r\n            Object.assign(res.props, _this.props, {\r\n                __originalType: originalType\r\n            });\r\n        });\r\n    }\r\n\r\n    async patchQuickSwitcher() {\r\n        const QuickSwitcher = _zlibrary__WEBPACK_IMPORTED_MODULE_3__.WebpackModules.getByDisplayName("QuickSwitcher");\r\n\r\n        _zlibrary__WEBPACK_IMPORTED_MODULE_3__.Patcher.before(QuickSwitcher.prototype, "render", (_this, _1, res) => {\r\n            _this.props.results = _this.props.results.filter(e => !e._pdm);\r\n            let pinned = _settings__WEBPACK_IMPORTED_MODULE_6__.default.get("pinned", []).map(id => {\r\n                const channel = ChannelStore.getChannel(id);\r\n                if (!channel) return;\r\n                const user = _discord_stores__WEBPACK_IMPORTED_MODULE_2__.Users.getUser(channel.recipients[0]);\r\n                if (!user) return;\r\n\r\n                return { user, channel };\r\n            }).filter(Boolean);\r\n            \r\n            if (!pinned.length) return;\r\n            const searchQuey = _this.props.query;\r\n            const result = [];\r\n\r\n            if (!searchQuey) result.push(...pinned);\r\n            \r\n            if (!result.length) return;\r\n            \r\n            _this.props.results.unshift(...result.map(({ user }) => ({\r\n                type: "USER",\r\n                _pdm: true,\r\n                score: 11000,\r\n                comparator: user.tag,\r\n                record: user\r\n            })).filter(res => !_this.props.results.some(record => res.record.id === record.record.id)));\r\n\r\n            if (_this.props.results.filter(e => e.type === "HEADER").some(e => !e._pdm)) {\r\n                _this.props.results.unshift({\r\n                    type: "HEADER",\r\n                    score: 0,\r\n                    _pdm: true,\r\n                    record: { id: "pinned-chats", text: "Pinned Chats" }\r\n                });\r\n            }\r\n        })\r\n    }\r\n\r\n    onStop() {\r\n        _zlibrary__WEBPACK_IMPORTED_MODULE_3__.Patcher.unpatchAll();\r\n        styles__WEBPACK_IMPORTED_MODULE_7___default().remove();\r\n        this.updateChannels();\r\n\r\n        document.querySelectorAll("mask[data-pdm]").forEach(node => node.remove());\r\n    }\r\n}\n\n//# sourceURL=webpack://LibraryPluginHack/./PinStuff/index.tsx?');
			},
			"./PinStuff/settings.ts": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
				eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var common_classes_settings__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! common/classes/settings */ "./node_modules/bdbuilder/common/classes/settings.ts");\n/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./package.json */ "./PinStuff/package.json");\n\r\n\r\n\r\nconst Settings = new common_classes_settings__WEBPACK_IMPORTED_MODULE_0__.default(_package_json__WEBPACK_IMPORTED_MODULE_1__.info.name, { pinned: [] });\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Settings);\n\n//# sourceURL=webpack://LibraryPluginHack/./PinStuff/settings.ts?');
			},
			"./node_modules/bdbuilder/common/classes/settings.ts": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
				eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (/* binding */ SettingsManager)\n/* harmony export */ });\n/* harmony import */ var _zlibrary__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @zlibrary */ "@zlibrary");\n/* harmony import */ var _zlibrary__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_zlibrary__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _discord_flux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @discord/flux */ "@discord/flux");\n/* harmony import */ var _discord_flux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_discord_flux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _discord_modules__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @discord/modules */ "@discord/modules");\n/* harmony import */ var _discord_modules__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_discord_modules__WEBPACK_IMPORTED_MODULE_2__);\n function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }\n\n\n\n/// <reference path="../../typings/discord.d.ts"/>\n\nclass SettingsManager extends _discord_flux__WEBPACK_IMPORTED_MODULE_1__.Store {\n    \n    \n    constructor(pluginName) {\n        super(_discord_modules__WEBPACK_IMPORTED_MODULE_2__.Dispatcher, {});SettingsManager.prototype.__init.call(this);SettingsManager.prototype.__init2.call(this);;\n        this.pluginName = pluginName;\n        this.settings = _zlibrary__WEBPACK_IMPORTED_MODULE_0__.PluginUtilities.loadSettings(pluginName, {});\n    }\n\n    __init() {this.get = (key, defaultValue) => {\n        return _nullishCoalesce(this.settings[key], () => ( defaultValue));\n    }}\n\n    __init2() {this.set = (key, value) => {\n        this.settings[key] = value;\n        _zlibrary__WEBPACK_IMPORTED_MODULE_0__.PluginUtilities.saveSettings(this.pluginName, this.settings);\n        this.emitChange();\n\n        return value;\n    }}\n}\n\n//# sourceURL=webpack://LibraryPluginHack/./node_modules/bdbuilder/common/classes/settings.ts?');
			},
			"./node_modules/bdbuilder/common/components/errorboundary.tsx": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
				eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ErrorBoundary)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n function _nullishCoalesce(lhs, rhsFn) { if (lhs != null) { return lhs; } else { return rhsFn(); } }\n\n\n\nclass ErrorBoundary extends (react__WEBPACK_IMPORTED_MODULE_0___default().Component) {constructor(...args) { super(...args); ErrorBoundary.prototype.__init.call(this); }\n    __init() {this.state = { hasError: false, error: null, info: null, didFallbackError: false }}\n\n     componentDidCatch(error, info) {\n        this.setState({\n            hasError: true,\n            didFallbackError: false,\n            info,\n            error\n        });\n        console.error(`[ErrorBoundary:${this.props.id}] HI OVER HERE!! SHOW THIS SCREENSHOT TO THE DEVELOPER.\\n`, error);\n    }\n\n     render() {\n        const { fallback: Fallback } = this.props;\n\n        if (this.state.hasError && typeof this.props.fallback === 'function' && !this.state.didFallbackError) {\n            return (\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Fallback, { error: this.state.error, info: this.state.info,} )\n            );\n        } else if (typeof this.props.fallback !== 'function' && this.state.hasError) {\n            return (\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', null, \"Component Error\" )\n            );\n        } else if (this.state.didFallbackError && this.state.hasError) {\n            return (\n                react__WEBPACK_IMPORTED_MODULE_0___default().createElement('div', null, \"Double Crashed.\" )\n            );\n        }\n\n        return this.props.children;\n    }\n\n     static from(Component, name, fallback) {\n        const id = _nullishCoalesce(_nullishCoalesce(name, () => ( Component.displayName)), () => ( Component.name));\n\n        const Element = react__WEBPACK_IMPORTED_MODULE_0___default().memo(props => (\n            react__WEBPACK_IMPORTED_MODULE_0___default().createElement(ErrorBoundary, { id: id, fallback: fallback,}\n                , react__WEBPACK_IMPORTED_MODULE_0___default().createElement(Component, { ...props,} )\n            )\n        ));\n        Object.assign(Element, Component);\n\n        return Element;\n    }\n}\n\n//# sourceURL=webpack://LibraryPluginHack/./node_modules/bdbuilder/common/components/errorboundary.tsx?");
			},
			"./node_modules/css-loader/dist/runtime/api.js": module => {
				eval('\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return "@media ".concat(item[2], " {").concat(content, "}");\n      }\n\n      return content;\n    }).join("");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === "string") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, ""]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://LibraryPluginHack/./node_modules/css-loader/dist/runtime/api.js?');
			},
			"./PinStuff/components/avatar.scss": (module, __webpack_exports__, __webpack_require__) => {
				eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, ".PinStuff-avatar-wrapper rect {\\n  pointer-events: all;\\n}\\n\\n.PinStuff-avatar-pin {\\n  color: #ddd;\\n  width: 10px;\\n  height: 10px;\\n}\\n.PinStuff-avatar-pin svg {\\n  width: 10px;\\n  height: 10px;\\n}", ""]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t"wrapper": "PinStuff-avatar-wrapper",\n\t"pin": "PinStuff-avatar-pin"\n};\nStyleLoader.append(module.id, ___CSS_LOADER_EXPORT___.toString())\n;\n\t/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign(___CSS_LOADER_EXPORT___, ___CSS_LOADER_EXPORT___.locals));\n\n\n//# sourceURL=webpack://LibraryPluginHack/./PinStuff/components/avatar.scss?');
			},
			"./PinStuff/components/dmChannel.scss": (module, __webpack_exports__, __webpack_require__) => {
				eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, ".PinStuff-dmChannel-dragging {\\n  opacity: 0.5;\\n}", ""]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t"dragging": "PinStuff-dmChannel-dragging"\n};\nStyleLoader.append(module.id, ___CSS_LOADER_EXPORT___.toString())\n;\n\t/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign(___CSS_LOADER_EXPORT___, ___CSS_LOADER_EXPORT___.locals));\n\n\n//# sourceURL=webpack://LibraryPluginHack/./PinStuff/components/dmChannel.scss?');
			},
			"./PinStuff/list.scss": (module, __webpack_exports__, __webpack_require__) => {
				eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, ".PinStuff-list-container {\\n  margin-bottom: 5px;\\n}\\n.PinStuff-list-container .wrapper-3t9DeA {\\n  transform: scale(1.1);\\n}\\n\\n.PinStuff-list-divider {\\n  width: 90%;\\n  margin-left: 13px;\\n  background-color: var(--background-modifier-accent);\\n  height: 1px;\\n  margin-top: 5px;\\n}", ""]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t"container": "PinStuff-list-container",\n\t"divider": "PinStuff-list-divider"\n};\nStyleLoader.append(module.id, ___CSS_LOADER_EXPORT___.toString())\n;\n\t/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Object.assign(___CSS_LOADER_EXPORT___, ___CSS_LOADER_EXPORT___.locals));\n\n\n//# sourceURL=webpack://LibraryPluginHack/./PinStuff/list.scss?');
			},
			"./PinStuff/data/mask.html": (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
				eval('__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ("<mask data-pdm id=\\"svg-mask-avatar-status-round-32-pinned\\" maskContentUnits=\\"objectBoundingBox\\" viewBox=\\"0 0 1 1\\">\\r\\n    <circle fill=\\"white\\" cx=\\"0.5\\" cy=\\"0.5\\" r=\\"0.5\\"></circle>\\r\\n    <circle fill=\\"black\\" cx=\\"0.84375\\" cy=\\"0.84375\\" r=\\"0.25\\"></circle>\\r\\n    <circle fill=\\"black\\" cx=\\"0.21725\\" cy=\\"0.84375\\" r=\\"0.25\\"></circle>\\r\\n</mask>\\r\\n<mask data-pdm id=\\"svg-mask-avatar-status-mobile-32-pinned\\" maskContentUnits=\\"objectBoundingBox\\" viewBox=\\"0 0 1 1\\">\\r\\n    <circle fill=\\"white\\" cx=\\"0.5\\" cy=\\"0.5\\" r=\\"0.5\\"></circle>\\r\\n    <rect fill=\\"black\\" x=\\"0.59375\\" y=\\"0.4375\\" width=\\"0.5\\" height=\\"0.65625\\" rx=\\"0.13125\\" ry=\\"0.13125\\"></rect>\\r\\n    <circle fill=\\"black\\" cx=\\"0.21725\\" cy=\\"0.84375\\" r=\\"0.25\\"></circle>\\r\\n</mask>\\r\\n<mask data-pdm id=\\"svg-mask-avatar-status-typing-32-pinned\\" maskContentUnits=\\"objectBoundingBox\\" viewBox=\\"0 0 1 1\\">\\r\\n    <circle fill=\\"white\\" cx=\\"0.5\\" cy=\\"0.5\\" r=\\"0.5\\"></circle>\\r\\n    <rect fill=\\"black\\" x=\\"0.359375\\" y=\\"0.59375\\" width=\\"0.96875\\" height=\\"0.5\\" rx=\\"0.25\\" ry=\\"0.25\\"></rect>\\r\\n    <circle fill=\\"black\\" cx=\\"0.21725\\" cy=\\"0.84375\\" r=\\"0.25\\"></circle>\\r\\n</mask>");\n\n//# sourceURL=webpack://LibraryPluginHack/./PinStuff/data/mask.html?');
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
			"@discord/components": module => {
				module.exports = Modules["@discord/components"];
			},
			"@discord/contextmenu": module => {
				module.exports = Modules["@discord/contextmenu"];
			},
			"@discord/flux": module => {
				module.exports = Modules["@discord/flux"];
			},
			"@discord/modules": module => {
				module.exports = Modules["@discord/modules"];
			},
			"@discord/stores": module => {
				module.exports = Modules["@discord/stores"];
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
		var __webpack_exports__ = __webpack_require__("./PinStuff/index.tsx");
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