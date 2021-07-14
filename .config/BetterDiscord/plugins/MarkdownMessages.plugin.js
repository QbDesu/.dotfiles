/**
 * @name MarkdownMessages
 * @version 1.0.0
 * @author Kyza
 * @description Renders messages in standard markdown.
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
		"name": "Markdown Messages",
		"version": "1.0.0",
		"authors": [{
			"name": "Kyza",
			"discord_id": "220584715265114113",
			"github_username": "Kyza"
		}],
		"description": "Renders messages in standard markdown."
	}
};
function buildPlugin([BasePlugin, PluginApi]) {
	const module = {
		exports: {}
	};
	(() => {
		"use strict";
		let __plugin_styles__ = "";
		var __webpack_modules__ = {
			348: (module, __webpack_exports__, __webpack_require__) => {
				__webpack_require__.d(__webpack_exports__, {
					Z: () => __WEBPACK_DEFAULT_EXPORT__
				});
				var _node_modules_pnpm_css_loader_5_1_1_webpack_5_24_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(975);
				var _node_modules_pnpm_css_loader_5_1_1_webpack_5_24_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_node_modules_pnpm_css_loader_5_1_1_webpack_5_24_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
				var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_5_1_1_webpack_5_24_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()((function(i) {
					return i[1];
				}));
				___CSS_LOADER_EXPORT___.push([module.id, ".h1-2Ib01{font-size:2em;line-height:1.25;margin-top:.67em;margin-bottom:.67em}.h2-3nirp{font-size:1.5em;line-height:1.25;margin-top:.83em;margin-bottom:.83em}.h3-dvial{font-size:1.17em;line-height:1.25;margin-top:1em;margin-bottom:1em}.h4-1Od3S{font-size:1em;line-height:1.25;margin-top:1.33em;margin-bottom:1.33em}.h5-O3_pB{font-size:.83em;line-height:1.25;margin-top:1.67em;margin-bottom:1.67em}.h6-3yo73{font-size:.67em;line-height:1.25;margin-top:2.33em;margin-bottom:2.33em}.header-1uTPB{display:block;margin-left:0;margin-right:0;font-weight:bold}", ""]);
				___CSS_LOADER_EXPORT___.locals = {
					h1: "h1-2Ib01",
					h2: "h2-3nirp",
					h3: "h3-dvial",
					h4: "h4-1Od3S",
					h5: "h5-O3_pB",
					h6: "h6-3yo73",
					header: "header-1uTPB"
				};
				__plugin_styles__ += `\n/* ${module.id} */\n${___CSS_LOADER_EXPORT___}\n`;
				let element = null;
				const __WEBPACK_DEFAULT_EXPORT__ = Object.assign(___CSS_LOADER_EXPORT___, ___CSS_LOADER_EXPORT___.locals, {
					appendToDOM: () => {
						if (element) element.remove();
						element = document.head.appendChild(Object.assign(document.createElement("style"), {
							textContent: __plugin_styles__
						}));
					},
					removeFromDOM: () => {
						if (!element) return;
						element.remove();
					}
				});
			},
			772: (module, __webpack_exports__, __webpack_require__) => {
				__webpack_require__.d(__webpack_exports__, {
					Z: () => __WEBPACK_DEFAULT_EXPORT__
				});
				var _node_modules_pnpm_css_loader_5_1_1_webpack_5_24_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(975);
				var _node_modules_pnpm_css_loader_5_1_1_webpack_5_24_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_node_modules_pnpm_css_loader_5_1_1_webpack_5_24_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
				var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_5_1_1_webpack_5_24_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()((function(i) {
					return i[1];
				}));
				___CSS_LOADER_EXPORT___.push([module.id, ".margin-tzP4Y{margin-top:8px;margin-bottom:8px;background-color:var(--brand-experiment)}", ""]);
				___CSS_LOADER_EXPORT___.locals = {
					margin: "margin-tzP4Y"
				};
				__plugin_styles__ += `\n/* ${module.id} */\n${___CSS_LOADER_EXPORT___}\n`;
				let element = null;
				const __WEBPACK_DEFAULT_EXPORT__ = Object.assign(___CSS_LOADER_EXPORT___, ___CSS_LOADER_EXPORT___.locals, {
					appendToDOM: () => {
						if (element) element.remove();
						element = document.head.appendChild(Object.assign(document.createElement("style"), {
							textContent: __plugin_styles__
						}));
					},
					removeFromDOM: () => {
						if (!element) return;
						element.remove();
					}
				});
			},
			377: (module, __webpack_exports__, __webpack_require__) => {
				__webpack_require__.d(__webpack_exports__, {
					Z: () => __WEBPACK_DEFAULT_EXPORT__
				});
				var _node_modules_pnpm_css_loader_5_1_1_webpack_5_24_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(975);
				var _node_modules_pnpm_css_loader_5_1_1_webpack_5_24_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_node_modules_pnpm_css_loader_5_1_1_webpack_5_24_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
				var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_5_1_1_webpack_5_24_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()((function(i) {
					return i[1];
				}));
				___CSS_LOADER_EXPORT___.push([module.id, ".markdown-1oDIO{display:block;white-space:break-spaces}.markdown-1oDIO :first-child{margin-top:0}.markdown-1oDIO :last-child{margin-bottom:0}[class*=messageContent-]{overflow:visible !important}[class*=messageContent-] .markdown-1oDIO{max-width:100%;margin-right:.25rem}[class*=messageContent-] [class*=timestamp-]{margin-left:0}[class*=popouts-],[class*=popouts-]+div{z-index:1003}", ""]);
				___CSS_LOADER_EXPORT___.locals = {
					markdown: "markdown-1oDIO"
				};
				__plugin_styles__ += `\n/* ${module.id} */\n${___CSS_LOADER_EXPORT___}\n`;
				let element = null;
				const __WEBPACK_DEFAULT_EXPORT__ = Object.assign(___CSS_LOADER_EXPORT___, ___CSS_LOADER_EXPORT___.locals, {
					appendToDOM: () => {
						if (element) element.remove();
						element = document.head.appendChild(Object.assign(document.createElement("style"), {
							textContent: __plugin_styles__
						}));
					},
					removeFromDOM: () => {
						if (!element) return;
						element.remove();
					}
				});
			},
			17: (module, __webpack_exports__, __webpack_require__) => {
				__webpack_require__.d(__webpack_exports__, {
					Z: () => __WEBPACK_DEFAULT_EXPORT__
				});
				var _node_modules_pnpm_css_loader_5_1_1_webpack_5_24_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(975);
				var _node_modules_pnpm_css_loader_5_1_1_webpack_5_24_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_node_modules_pnpm_css_loader_5_1_1_webpack_5_24_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
				var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_5_1_1_webpack_5_24_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()((function(i) {
					return i[1];
				}));
				___CSS_LOADER_EXPORT___.push([module.id, ".inline-3rR9Y{display:inline-block}", ""]);
				___CSS_LOADER_EXPORT___.locals = {
					inline: "inline-3rR9Y"
				};
				__plugin_styles__ += `\n/* ${module.id} */\n${___CSS_LOADER_EXPORT___}\n`;
				let element = null;
				const __WEBPACK_DEFAULT_EXPORT__ = Object.assign(___CSS_LOADER_EXPORT___, ___CSS_LOADER_EXPORT___.locals, {
					appendToDOM: () => {
						if (element) element.remove();
						element = document.head.appendChild(Object.assign(document.createElement("style"), {
							textContent: __plugin_styles__
						}));
					},
					removeFromDOM: () => {
						if (!element) return;
						element.remove();
					}
				});
			},
			154: (module, __webpack_exports__, __webpack_require__) => {
				__webpack_require__.d(__webpack_exports__, {
					Z: () => __WEBPACK_DEFAULT_EXPORT__
				});
				var _node_modules_pnpm_css_loader_5_1_1_webpack_5_24_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(975);
				var _node_modules_pnpm_css_loader_5_1_1_webpack_5_24_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_node_modules_pnpm_css_loader_5_1_1_webpack_5_24_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
				var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_5_1_1_webpack_5_24_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()((function(i) {
					return i[1];
				}));
				___CSS_LOADER_EXPORT___.push([module.id, ".ul-eTGw2{display:block;list-style-type:disc;margin-left:0;margin-right:0;padding-left:20px}.ul-eTGw2 .uli-_PnJ0.disc-2Mpsj{list-style-type:disc}.ul-eTGw2 .uli-_PnJ0.circle-2tPjt{list-style-type:circle}.ul-eTGw2 .uli-_PnJ0.square-3YPpl{list-style-type:square}", ""]);
				___CSS_LOADER_EXPORT___.locals = {
					ul: "ul-eTGw2",
					uli: "uli-_PnJ0",
					disc: "disc-2Mpsj",
					circle: "circle-2tPjt",
					square: "square-3YPpl"
				};
				__plugin_styles__ += `\n/* ${module.id} */\n${___CSS_LOADER_EXPORT___}\n`;
				let element = null;
				const __WEBPACK_DEFAULT_EXPORT__ = Object.assign(___CSS_LOADER_EXPORT___, ___CSS_LOADER_EXPORT___.locals, {
					appendToDOM: () => {
						if (element) element.remove();
						element = document.head.appendChild(Object.assign(document.createElement("style"), {
							textContent: __plugin_styles__
						}));
					},
					removeFromDOM: () => {
						if (!element) return;
						element.remove();
					}
				});
			},
			441: (module, __webpack_exports__, __webpack_require__) => {
				__webpack_require__.d(__webpack_exports__, {
					Z: () => __WEBPACK_DEFAULT_EXPORT__
				});
				var _node_modules_pnpm_css_loader_5_1_1_webpack_5_24_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(975);
				var _node_modules_pnpm_css_loader_5_1_1_webpack_5_24_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_node_modules_pnpm_css_loader_5_1_1_webpack_5_24_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
				var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_5_1_1_webpack_5_24_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()((function(i) {
					return i[1];
				}));
				___CSS_LOADER_EXPORT___.push([module.id, "[class*=typeWindows-]~div .modalTitlebar-2gUBL{height:22px;background-color:var(--background-tertiary)}.modal-3Lm23{position:absolute;top:0;left:0;border-radius:0;width:100%;max-width:unset;height:100vh}.modalContent-3gopT{padding:16px !important}", ""]);
				___CSS_LOADER_EXPORT___.locals = {
					modalTitlebar: "modalTitlebar-2gUBL",
					modal: "modal-3Lm23",
					modalContent: "modalContent-3gopT"
				};
				__plugin_styles__ += `\n/* ${module.id} */\n${___CSS_LOADER_EXPORT___}\n`;
				let element = null;
				const __WEBPACK_DEFAULT_EXPORT__ = Object.assign(___CSS_LOADER_EXPORT___, ___CSS_LOADER_EXPORT___.locals, {
					appendToDOM: () => {
						if (element) element.remove();
						element = document.head.appendChild(Object.assign(document.createElement("style"), {
							textContent: __plugin_styles__
						}));
					},
					removeFromDOM: () => {
						if (!element) return;
						element.remove();
					}
				});
			},
			991: (module, __webpack_exports__, __webpack_require__) => {
				__webpack_require__.d(__webpack_exports__, {
					Z: () => __WEBPACK_DEFAULT_EXPORT__
				});
				var _node_modules_pnpm_css_loader_5_1_1_webpack_5_24_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(975);
				var _node_modules_pnpm_css_loader_5_1_1_webpack_5_24_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(_node_modules_pnpm_css_loader_5_1_1_webpack_5_24_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
				var ___CSS_LOADER_EXPORT___ = _node_modules_pnpm_css_loader_5_1_1_webpack_5_24_4_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()((function(i) {
					return i[1];
				}));
				___CSS_LOADER_EXPORT___.push([module.id, "", ""]);
				__plugin_styles__ += `\n/* ${module.id} */\n${___CSS_LOADER_EXPORT___}\n`;
				let element = null;
				const __WEBPACK_DEFAULT_EXPORT__ = Object.assign(___CSS_LOADER_EXPORT___, ___CSS_LOADER_EXPORT___.locals, {
					appendToDOM: () => {
						if (element) element.remove();
						element = document.head.appendChild(Object.assign(document.createElement("style"), {
							textContent: __plugin_styles__
						}));
					},
					removeFromDOM: () => {
						if (!element) return;
						element.remove();
					}
				});
			},
			24: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
				__webpack_require__.r(__webpack_exports__);
				__webpack_require__.d(__webpack_exports__, {
					default: () => MarkdownMessages
				});
				var rules_namespaceObject = {};
				__webpack_require__.r(rules_namespaceObject);
				__webpack_require__.d(rules_namespaceObject, {
					heading: () => Markdown_heading,
					hr: () => Markdown_hr,
					inlineLink: () => Markdown_inlineLink,
					list: () => Markdown_list,
					text: () => Markdown_text
				});
				const external_PluginApi_namespaceObject = PluginApi;
				const external_BasePlugin_namespaceObject = BasePlugin;
				var external_BasePlugin_default = __webpack_require__.n(external_BasePlugin_namespaceObject);
				const package_namespaceObject = JSON.parse('{"um":{"u2":"Markdown Messages"}}');
				function _defineProperty(obj, key, value) {
					if (key in obj) Object.defineProperty(obj, key, {
						value,
						enumerable: true,
						configurable: true,
						writable: true
					});
					else obj[key] = value;
					return obj;
				}
				const discordRules = _.cloneDeep(external_PluginApi_namespaceObject.WebpackModules.getByProps("parseEmbedTitle").defaultRules);
				class Settings {
					static get(id) {
						return this.settings[id];
					}
					static set(id, value) {
						this.settings[id] = value;
						this.saveState();
					}
					static saveState() {
						return external_PluginApi_namespaceObject.PluginUtilities.saveSettings(package_namespaceObject.um.u2, this.settings);
					}
				}
				_defineProperty(Settings, "settings", external_PluginApi_namespaceObject.PluginUtilities.loadSettings(package_namespaceObject.um.u2, {
					markdownToggles: {
						inlineLink: true,
						inlineImage: true,
						heading: true,
						hr: true,
						list: true,
						...Object.keys(discordRules).reduce(((rules, rule) => (rules[rule] = true, rules)), {})
					}
				}));
				var inlineLink = __webpack_require__(17);
				var React = __webpack_require__(698);
				const MaskedLink = external_PluginApi_namespaceObject.WebpackModules.getByDisplayName("MaskedLink");
				const {
					TooltipContainer
				} = external_PluginApi_namespaceObject.WebpackModules.getByProps("TooltipContainer");
				const regex = /^\[((?:\[[^\]]*\]|[^\[\]]|\](?=[^\[]*\]))*)\]\(\s*<?((?:\([^)]*\)|[^\s\\]|\\.)*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*\)/;
				const Markdown_inlineLink = {
					order: -1,
					html: () => "e",
					match: source => regex.exec(source),
					parse: (capture, parse, state) => ({
						content: parse(capture[1], state),
						target: capture[2]
					}),
					react: (node, output) => React.createElement(TooltipContainer, {
						text: node.target,
						className: inlineLink.Z.inline
					}, React.createElement(MaskedLink, {
						href: node.target,
						target: "_blank"
					}, output(node.content)))
				};
				var list = __webpack_require__(154);
				var list_React = __webpack_require__(698);
				const depthStyles = [list.Z.disc, list.Z.circle, list.Z.square];
				const list_regex = /^(\s*)- (.+)$/;
				const Markdown_list = {
					order: -3,
					html: () => "e",
					match: source => {
						const matches = [];
						const lines = source.trim().split("\n");
						for (const line of lines) {
							const result = list_regex.exec(line);
							if (result) matches.push(result);
							else break;
						}
						if (0 === matches.length) return null;
						const prespace = source.substring(0, source.length - source.trim().length);
						return [prespace + matches.map((match => match[0])).join("\n") + "\n", matches, prespace];
					},
					parse: function(capture, parse, state) {
						const lines = capture[1].map((line => ({
							content: parse(line[2], state),
							depth: 1 + line[1].length
						})));
						return {
							prespace: capture[2],
							lines
						};
					},
					react: (node, output) => {
						function generateLayer(lines, depth) {
							const generated = [];
							for (let i = 0; i < lines.length; i++) {
								const line = lines[i];
								const nextLines = [];
								stepLoop: for (let j = i + 1; j < lines.length; j++) {
									const nextLine = lines[j];
									if (nextLine.depth > line.depth) nextLines.push(nextLine);
									else break stepLoop;
								}
								if (nextLines.length > 0) generated.push(list_React.createElement("li", {
									className: `${list.Z.uli} ${depthStyles[(line.depth - 1) % depthStyles.length]}`
								}, output(line.content), generateLayer(nextLines, depth + 1)));
								else generated.push(list_React.createElement("li", {
									className: `${list.Z.uli} ${depthStyles[(line.depth - 1) % depthStyles.length]}`
								}, output(line.content)));
								i += Math.max(nextLines.length, 0);
							}
							return list_React.createElement("ul", {
								className: list.Z.ul
							}, generated);
						}
						return list_React.createElement(list_React.Fragment, null, node.prespace, generateLayer(node.lines, 1));
					}
				};
				var heading = __webpack_require__(348);
				var heading_React = __webpack_require__(698);
				const heading_regex = /^\s*(#{1,6}) (.+)\n?/;
				const Markdown_heading = {
					order: -1,
					html: () => "e",
					match: source => heading_regex.exec(source),
					parse: (capture, parse, state) => {
						let size = `h${capture[1].trim().length}`;
						return {
							content: parse(capture[2], state),
							size
						};
					},
					react: (node, output) => heading_React.createElement("span", {
						className: `${heading.Z.header} ${heading.Z[node.size]}`
					}, output(node.content))
				};
				var hr = __webpack_require__(772);
				var hr_React = __webpack_require__(698);
				const FormDivider = external_PluginApi_namespaceObject.WebpackModules.getByDisplayName("FormDivider");
				const hr_regex = /^\s*-{3,}\n?/;
				const Markdown_hr = {
					order: -1,
					html: () => "e",
					match: source => hr_regex.exec(source),
					parse: () => ({}),
					react: () => hr_React.createElement(FormDivider, {
						className: hr.Z.margin
					})
				};
				var text_React = __webpack_require__(698);
				const discordTextParse = _.cloneDeep(external_PluginApi_namespaceObject.WebpackModules.getByProps("parseEmbedTitle").defaultRules.text).parse;
				const text_regex = /^[\s\S]+?(?=[^#\-\b0-9A-Za-z\s\u00c0-\uffff]|\n| {2,}\n|\w+:\S|$)/;
				const Markdown_text = {
					order: 26,
					html: () => "e",
					match: source => text_regex.exec(source),
					parse: (...args) => discordTextParse(...args),
					react: (node, output) => text_React.createElement("span", null, "string" === typeof node.content ? node.content : output(node.content))
				};
				var Markdown = __webpack_require__(377);
				var Markdown_React = __webpack_require__(698);
				const SimpleMarkdown = external_PluginApi_namespaceObject.WebpackModules.getByProps("ReactMarkdown");
				const Markdown_DiscordMarkdown = external_PluginApi_namespaceObject.WebpackModules.getByProps("parseEmbedTitle");
				const allRules = _.merge(_.cloneDeep(Markdown_DiscordMarkdown.defaultRules), rules_namespaceObject);
				window.SimpleMarkdown = SimpleMarkdown;
				window.DiscordMarkdown = Markdown_DiscordMarkdown;
				function generateRules(rules) {
					const toggles = Settings.get("markdownToggles");
					const toggledRules = {};
					for (const key of Object.keys(rules))
						if (toggles[key]) toggledRules[key] = _.cloneDeep(rules[key]);
					return toggledRules;
				}
				const MarkdownMessages_Markdown = (...args) => {
					args[0] = args[0].trim();
					const markdown = Markdown_DiscordMarkdown.reactParserFor(generateRules(allRules))(...args);
					if (0 === markdown.length) return null;
					return Markdown_React.createElement("div", {
						className: Markdown.Z.markdown
					}, Markdown_DiscordMarkdown.reactParserFor(generateRules(allRules))(...args));
				};
				var components_Settings = __webpack_require__(441);
				var Settings_React = __webpack_require__(698);
				function _extends() {
					_extends = Object.assign || function(target) {
						for (var i = 1; i < arguments.length; i++) {
							var source = arguments[i];
							for (var key in source)
								if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
						}
						return target;
					};
					return _extends.apply(this, arguments);
				}
				const {
					useEffect
				} = Settings_React;
				const Text = external_PluginApi_namespaceObject.WebpackModules.getByDisplayName("Text");
				const Flex = external_PluginApi_namespaceObject.WebpackModules.getByDisplayName("Flex");
				const FlexChild = external_PluginApi_namespaceObject.WebpackModules.getByProps("Child").Child;
				const Header = external_PluginApi_namespaceObject.WebpackModules.getByDisplayName("Header");
				const {
					ModalRoot,
					ModalContent,
					ModalHeader,
					ModalFooter,
					ModalSize,
					ModalCloseButton
				} = external_PluginApi_namespaceObject.WebpackModules.getByProps("ModalRoot");
				const {
					getCurrentUser
				} = external_PluginApi_namespaceObject.WebpackModules.getByProps("getCurrentUser");
				const {
					openModal,
					closeModal,
					useModalsStore
				} = external_PluginApi_namespaceObject.WebpackModules.getByProps("openModal");
				let settingsModalId;
				function Proxy() {
					if (window.powercord) return Settings_React.createElement(Content, null);
					useEffect((() => {
						settingsModalId = openModal((props => Settings_React.createElement(Settings_Settings, props)));
					}));
					return null;
				}
				function Settings_Settings(props) {
					useEffect((() => () => {
						const modals = useModalsStore.getState().default;
						if (!modals.some((modal => modal.key === settingsModalId)))
							for (const modal of modals) closeModal(modal.key);
					}));
					return Settings_React.createElement(ModalRoot, _extends({}, props, {
						className: components_Settings.Z.modal,
						size: ModalSize.LARGE
					}), Settings_React.createElement("div", {
						className: components_Settings.Z.modalTitlebar
					}), Settings_React.createElement(ModalHeader, null, Settings_React.createElement(FlexChild, {
						grow: 1,
						shrink: 1,
						basis: "auto",
						wrap: 0
					}, Settings_React.createElement(Header, {
						size: Header.Sizes.SIZE_20,
						tag: Header.Tags.H2
					}, "Markdown Messages"), Settings_React.createElement(Text, null, "Settings")), Settings_React.createElement(FlexChild, {
						grow: 0,
						shrink: 1,
						wrap: 0,
						basis: "auto"
					}, Settings_React.createElement(ModalCloseButton, {
						onClick: props.onClose
					}))), Settings_React.createElement(ModalContent, {
						className: components_Settings.Z.modalContent
					}, Settings_React.createElement(Content, null)));
				}
				function Content() {
					const markdownTestText = `<@${getCurrentUser().id}>\n# Lorem Ipsum\n---\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eu ligula ante. Nam nec leo orci. Nulla facilisi. Vivamus porttitor nibh laoreet sem interdum ultricies. Quisque feugiat nisl sit amet tincidunt accumsan. Pellentesque pretium turpis at ligula euismod tempus. Cras id diam turpis. Proin dapibus neque enim, bibendum convallis mi efficitur nec.\n\n- Cras mattis blandit sem, id aliquet risus vulputate id.\n - Ut tristique ultrices sodales.\n - Nullam in nunc ac erat consectetur viverra eget sed odio.\n  - Quisque est [risus](https://google.it/), volutpat non turpis eu, aliquet sodales eros.\n - Quisque turpis augue, ultrices sit amet orci sit amet, rhoncus finibus ante.\n- Vestibulum sagittis eros enim, sit amet lacinia velit lobortis eu.\n## Dolor Sit Amet`;
					return Settings_React.createElement(Text, null, MarkdownMessages_Markdown(markdownTestText));
				}
				var plugins_MarkdownMessages = __webpack_require__(991);
				function MarkdownMessages_defineProperty(obj, key, value) {
					if (key in obj) Object.defineProperty(obj, key, {
						value,
						enumerable: true,
						configurable: true,
						writable: true
					});
					else obj[key] = value;
					return obj;
				}
				class MarkdownMessages extends(external_BasePlugin_default()) {
					constructor(..._args) {
						super(..._args);
						MarkdownMessages_defineProperty(this, "parse", ((that, args) => MarkdownMessages_Markdown(...args)));
					}
					onStart() {
						plugins_MarkdownMessages.Z.appendToDOM();
						external_PluginApi_namespaceObject.Patcher.instead(DiscordMarkdown, "parse", this.parse);
					}
					onStop() {
						plugins_MarkdownMessages.Z.removeFromDOM();
						external_PluginApi_namespaceObject.Patcher.unpatchAll();
					}
					getSettingsPanel() {
						return Proxy;
					}
				}
			},
			975: module => {
				module.exports = function(cssWithMappingToString) {
					var list = [];
					list.toString = function toString() {
						return this.map((function(item) {
							var content = cssWithMappingToString(item);
							if (item[2]) return "@media ".concat(item[2], " {").concat(content, "}");
							return content;
						})).join("");
					};
					list.i = function(modules, mediaQuery, dedupe) {
						if ("string" === typeof modules) modules = [
							[null, modules, ""]
						];
						var alreadyImportedModules = {};
						if (dedupe)
							for (var i = 0; i < this.length; i++) {
								var id = this[i][0];
								if (null != id) alreadyImportedModules[id] = true;
							}
						for (var _i = 0; _i < modules.length; _i++) {
							var item = [].concat(modules[_i]);
							if (dedupe && alreadyImportedModules[item[0]]) continue;
							if (mediaQuery)
								if (!item[2]) item[2] = mediaQuery;
								else item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
							list.push(item);
						}
					};
					return list;
				};
			},
			698: module => {
				module.exports = global["BdApi"]["React"];
			}
		};
		var __webpack_module_cache__ = {};
		function __webpack_require__(moduleId) {
			if (__webpack_module_cache__[moduleId]) return __webpack_module_cache__[moduleId].exports;
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
		var __webpack_exports__ = __webpack_require__(24);
		module.exports.LibraryPluginHack = __webpack_exports__;
	})();
	const PluginExports = module.exports.LibraryPluginHack;
	return PluginExports.__esModule ? PluginExports.default : PluginExports;
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