"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[9952],{

/***/ 49952:
/***/ ((module) => {

module.exports = "# This Source Code Form is subject to the terms of the Mozilla Public\n# License, v. 2.0. If a copy of the MPL was not distributed with this\n# file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\ntabbrowser-empty-tab-title = New Tab\ntabbrowser-empty-private-tab-title = New Private Tab\n\ntabbrowser-menuitem-close-tab =\n    .label = Close Tab\ntabbrowser-menuitem-close =\n    .label = Close\n\n# Displayed as a tooltip on container tabs\n# Variables:\n#   $title (String): the title of the current tab.\n#   $containerName (String): the name of the current container.\ntabbrowser-container-tab-title = { $title } — { $containerName }\n\n# Variables:\n#   $tabCount (Number): The number of tabs that will be closed.\ntabbrowser-close-tabs-tooltip =\n    .label =\n        { $tabCount ->\n            [one] Close tab\n           *[other] Close { $tabCount } tabs\n        }\n\n## Tooltips for tab audio control\n## Variables:\n##   $tabCount (Number): The number of tabs that will be affected.\n\n# Variables:\n#   $shortcut (String): The keyboard shortcut for \"Mute tab\".\ntabbrowser-mute-tab-audio-tooltip =\n    .label =\n        { $tabCount ->\n            [one] Mute tab ({ $shortcut })\n           *[other] Mute { $tabCount } tabs ({ $shortcut })\n        }\n# Variables:\n#   $shortcut (String): The keyboard shortcut for \"Unmute tab\".\ntabbrowser-unmute-tab-audio-tooltip =\n    .label =\n        { $tabCount ->\n            [one] Unmute tab ({ $shortcut })\n           *[other] Unmute { $tabCount } tabs ({ $shortcut })\n        }\ntabbrowser-mute-tab-audio-background-tooltip =\n    .label =\n        { $tabCount ->\n            [one] Mute tab\n           *[other] Mute { $tabCount } tabs\n        }\ntabbrowser-unmute-tab-audio-background-tooltip =\n    .label =\n        { $tabCount ->\n            [one] Unmute tab\n           *[other] Unmute { $tabCount } tabs\n        }\ntabbrowser-unblock-tab-audio-tooltip =\n    .label =\n        { $tabCount ->\n            [one] Play tab\n           *[other] Play { $tabCount } tabs\n        }\n\n## Confirmation dialog when closing a window with more than one tab open,\n## or when quitting when only one window is open.\n\n# The singular form is not considered since this string is used only for multiple tabs.\n# Variables:\n#   $tabCount (Number): The number of tabs that will be closed.\ntabbrowser-confirm-close-tabs-title =\n    { $tabCount ->\n       *[other] Close { $tabCount } tabs?\n    }\ntabbrowser-confirm-close-tabs-button = Close tabs\ntabbrowser-confirm-close-tabs-checkbox = Confirm before closing multiple tabs\n\n## Confirmation dialog when quitting using the menu and multiple windows are open.\n\n# The forms for 0 or 1 items are not considered since this string is used only for\n# multiple windows.\n# Variables:\n#   $windowCount (Number): The number of windows that will be closed.\ntabbrowser-confirm-close-windows-title =\n    { $windowCount ->\n       *[other] Close { $windowCount } windows?\n    }\ntabbrowser-confirm-close-windows-button =\n    { PLATFORM() ->\n        [windows] Close and exit\n       *[other] Close and quit\n    }\n\n## Confirmation dialog when quitting using the keyboard shortcut (Ctrl/Cmd+Q)\n## Windows does not show a prompt on quit when using the keyboard shortcut by default.\n\ntabbrowser-confirm-close-tabs-with-key-title = Close window and quit { -brand-short-name }?\ntabbrowser-confirm-close-tabs-with-key-button = Quit { -brand-short-name }\n# Variables:\n#   $quitKey (String): the text of the keyboard shortcut for quitting.\ntabbrowser-confirm-close-tabs-with-key-checkbox = Confirm before quitting with { $quitKey }\n\n## Confirmation dialog when opening multiple tabs simultaneously\n\ntabbrowser-confirm-open-multiple-tabs-title = Confirm open\n# Variables:\n#   $tabCount (Number): The number of tabs that will be opened.\ntabbrowser-confirm-open-multiple-tabs-message =\n    { $tabCount ->\n       *[other] You are about to open { $tabCount } tabs. This might slow down { -brand-short-name } while the pages are loading. Are you sure you want to continue?\n    }\ntabbrowser-confirm-open-multiple-tabs-button = Open tabs\ntabbrowser-confirm-open-multiple-tabs-checkbox = Warn me when opening multiple tabs might slow down { -brand-short-name }\n\n## Confirmation dialog for enabling caret browsing\n\ntabbrowser-confirm-caretbrowsing-title = Caret Browsing\ntabbrowser-confirm-caretbrowsing-message = Pressing F7 turns Caret Browsing on or off. This feature places a moveable cursor in web pages, allowing you to select text with the keyboard. Do you want to turn Caret Browsing on?\ntabbrowser-confirm-caretbrowsing-checkbox = Do not show me this dialog box again.\n\n##\n\n# Variables:\n#   $domain (String): URL of the page that is trying to steal focus.\ntabbrowser-allow-dialogs-to-get-focus =\n    .label = Allow notifications like this from { $domain } to take you to their tab\n\ntabbrowser-customizemode-tab-title = Customize { -brand-short-name }\n\n## Context menu buttons, of which only one will be visible at a time\n\ntabbrowser-context-mute-tab =\n    .label = Mute Tab\n    .accesskey = M\ntabbrowser-context-unmute-tab =\n    .label = Unmute Tab\n    .accesskey = m\n# The accesskey should match the accesskey for tabbrowser-context-mute-tab\ntabbrowser-context-mute-selected-tabs =\n    .label = Mute Tabs\n    .accesskey = M\n# The accesskey should match the accesskey for tabbrowser-context-unmute-tab\ntabbrowser-context-unmute-selected-tabs =\n    .label = Unmute Tabs\n    .accesskey = m\n";

/***/ })

}]);