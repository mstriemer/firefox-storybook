"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[1577],{

/***/ 21577:
/***/ ((module) => {

module.exports = "# This Source Code Form is subject to the terms of the Mozilla Public\n# License, v. 2.0. If a copy of the MPL was not distributed with this\n# file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\n## These messages are used as headings in the recommendation doorhanger\n\ncfr-doorhanger-extension-heading = Recommended Extension\ncfr-doorhanger-feature-heading = Recommended Feature\n\n##\n\ncfr-doorhanger-extension-sumo-link =\n  .tooltiptext = Why am I seeing this\n\ncfr-doorhanger-extension-cancel-button = Not Now\n  .accesskey = N\n\ncfr-doorhanger-extension-ok-button = Add Now\n  .accesskey = A\n\ncfr-doorhanger-extension-manage-settings-button = Manage Recommendation Settings\n  .accesskey = M\n\ncfr-doorhanger-extension-never-show-recommendation = Don’t Show Me This Recommendation\n  .accesskey = S\n\ncfr-doorhanger-extension-learn-more-link = Learn more\n\n# This string is used on a new line below the add-on name\n# Variables:\n#   $name (String) - Add-on author name\ncfr-doorhanger-extension-author = by { $name }\n\n# This is a notification displayed in the address bar.\n# When clicked it opens a panel with a message for the user.\ncfr-doorhanger-extension-notification = Recommendation\ncfr-doorhanger-extension-notification2 = Recommendation\n  .tooltiptext = Extension recommendation\n  .a11y-announcement = Extension recommendation available\n\n# This is a notification displayed in the address bar.\n# When clicked it opens a panel with a message for the user.\ncfr-doorhanger-feature-notification = Recommendation\n  .tooltiptext = Feature recommendation\n  .a11y-announcement = Feature recommendation available\n\n## Add-on statistics\n## These strings are used to display the total number of\n## users and rating for an add-on. They are shown next to each other.\n\n# Variables:\n#   $total (Number) - The rating of the add-on from 1 to 5\ncfr-doorhanger-extension-rating =\n  .tooltiptext =\n    { $total ->\n        [one] { $total } star\n       *[other] { $total } stars\n    }\n# Variables:\n#   $total (Number) - The total number of users using the add-on\ncfr-doorhanger-extension-total-users =\n  { $total ->\n      [one] { $total } user\n     *[other] { $total } users\n  }\n\n## Firefox Accounts Message\n\ncfr-doorhanger-bookmark-fxa-header = Sync your bookmarks everywhere.\ncfr-doorhanger-bookmark-fxa-body = Great find! Now don’t be left without this bookmark on your mobile devices. Get Started with a { -fxaccount-brand-name }.\ncfr-doorhanger-bookmark-fxa-link-text = Sync bookmarks now…\ncfr-doorhanger-bookmark-fxa-close-btn-tooltip =\n  .aria-label = Close button\n  .title = Close\n\n## Protections panel\n\ncfr-protections-panel-header = Browse without being followed\ncfr-protections-panel-body = Keep your data to yourself. { -brand-short-name } protects you from many of the most common trackers that follow what you do online.\ncfr-protections-panel-link-text = Learn more\n\n## What's New toolbar button and panel\n\n# This string is used by screen readers to offer a text based alternative for\n# the notification icon\ncfr-badge-reader-label-newfeature = New feature:\n\ncfr-whatsnew-button =\n  .label = What’s New\n  .tooltiptext = What’s New\n\ncfr-whatsnew-release-notes-link-text = Read the release notes\n\n## Enhanced Tracking Protection Milestones\n\n# Variables:\n#   $blockedCount (Number) - The total count of blocked trackers. This number will always be greater than 1.\n#   $date (Datetime) - The date we began recording the count of blocked trackers\ncfr-doorhanger-milestone-heading2 =\n  { $blockedCount ->\n    *[other] { -brand-short-name } blocked over <b>{ $blockedCount }</b> trackers since { DATETIME($date, month: \"long\", year: \"numeric\") }!\n  }\ncfr-doorhanger-milestone-ok-button = See All\n  .accesskey = S\ncfr-doorhanger-milestone-close-button = Close\n  .accesskey = C\n\n## DOH Message\n\ncfr-doorhanger-doh-body = Your privacy matters. { -brand-short-name } now securely routes your DNS requests whenever possible to a partner service to protect you while you browse.\ncfr-doorhanger-doh-header = More secure, encrypted DNS lookups\ncfr-doorhanger-doh-primary-button-2 = Okay\n  .accesskey = O\ncfr-doorhanger-doh-secondary-button = Disable\n  .accesskey = D\n\n## Full Video Support CFR message\n\ncfr-doorhanger-video-support-body = Videos on this site may not play correctly on this version of { -brand-short-name }. For full video support, update { -brand-short-name } now.\ncfr-doorhanger-video-support-header = Update { -brand-short-name } to play video\ncfr-doorhanger-video-support-primary-button = Update Now\n  .accesskey = U\n\n## VPN promotion dialog for public Wi-Fi users\n##\n## If a user is detected to be on a public Wi-Fi network, they are given a\n## bit of info about how to improve their privacy and then offered a button\n## to the Mozilla VPN page and a link to dismiss the dialog.\n\n# This header text can be explicitly wrapped.\nspotlight-public-wifi-vpn-header = Looks like you’re using public Wi-Fi\nspotlight-public-wifi-vpn-body = To hide your location and browsing activity, consider a Virtual Private Network. It will help keep you protected when browsing in public places like airports and coffee shops.\nspotlight-public-wifi-vpn-primary-button = Stay private with { -mozilla-vpn-brand-name }\n  .accesskey = S\nspotlight-public-wifi-vpn-link = Not Now\n  .accesskey = N\n\n## Emotive Continuous Onboarding\n\nspotlight-better-internet-header = A better internet starts with you\nspotlight-better-internet-body = When you use { -brand-short-name}, you’re voting for an open and accessible internet that’s better for everyone.\nspotlight-peace-mind-header = We’ve got you covered\nspotlight-peace-mind-body = Every month, { -brand-short-name } blocks an average of over 3,000 trackers per user. Because nothing, especially privacy nuisances like trackers, should stand between you and the good internet.\nspotlight-pin-primary-button = { PLATFORM() ->\n    [macos] Keep in Dock\n   *[other] Pin to taskbar\n}\nspotlight-pin-secondary-button = Not now\n\n## MR2022 Background Update Windows native toast notification strings.\n##\n## These strings will be displayed by the Windows operating system in\n## a native toast, like:\n##\n## <b>multi-line title</b>\n## multi-line text\n## <img>\n## [ primary button ] [ secondary button ]\n##\n## The button labels are fitted into narrow fixed-width buttons by\n## Windows and therefore must be as narrow as possible.\n\nmr2022-background-update-toast-title = New { -brand-short-name }. More private. Fewer trackers. No compromises.\nmr2022-background-update-toast-text = Try the newest { -brand-short-name } now, upgraded with our strongest anti-tracking protection yet.\n\n# This button label will be fitted into a narrow fixed-width button by\n# Windows. Try to not exceed the width of the English text (compare it\n# using a variable font like Arial): the button can only fit 1-2\n# additional characters, exceeding characters will be truncated.\nmr2022-background-update-toast-primary-button-label = Open { -brand-shorter-name } Now\n\n# This button label will be fitted into a narrow fixed-width button by\n# Windows. Try to not exceed the width of the English text (compare it using a\n# variable font like Arial): the button can only fit 1-2 additional characters,\n# exceeding characters will be truncated.\nmr2022-background-update-toast-secondary-button-label = Remind Me Later\n\n## Firefox View CFR\n\nfirefoxview-cfr-primarybutton = Try it\n  .accesskey = T\nfirefoxview-cfr-secondarybutton = Not now\n  .accesskey = N\nfirefoxview-cfr-header-v2 = Quickly pick up where you left off\nfirefoxview-cfr-body-v2 = Get recently closed tabs back, plus seamlessly hop between devices with { -firefoxview-brand-name }.\n\n## Firefox View Spotlight\n\nfirefoxview-spotlight-promo-title = Say hello to { -firefoxview-brand-name }\n\n# “Poof” refers to the expression to convey when something or someone suddenly disappears, or in this case, reappears. For example, “Poof, it’s gone.”\nfirefoxview-spotlight-promo-subtitle = Want that open tab on your phone? Grab it. Need that site you just visited? Poof, it’s back with { -firefoxview-brand-name }.\nfirefoxview-spotlight-promo-primarybutton = See how it works\nfirefoxview-spotlight-promo-secondarybutton = Skip\n\n## Colorways expiry reminder CFR\n\ncolorways-cfr-primarybutton = Choose colorway\n  .accesskey = C\n\n# \"shades\" refers to the different color options available to users in colorways.\ncolorways-cfr-body = Color your browser with { -brand-short-name } exclusive shades inspired by voices that changed culture.\ncolorways-cfr-header-28days = Independent Voices colorways expire January 16\ncolorways-cfr-header-14days = Independent Voices colorways expire in two weeks\ncolorways-cfr-header-7days =  Independent Voices colorways expire this week\ncolorways-cfr-header-today = Independent Voices colorways expire today\n\n## Cookie Banner Handling CFR\n\ncfr-cbh-header = Allow { -brand-short-name } to reject cookie banners?\ncfr-cbh-body = { -brand-short-name } can automatically reject many cookie banner requests.\ncfr-cbh-confirm-button = Reject cookie banners\n  .accesskey = R\ncfr-cbh-dismiss-button = Not now\n  .accesskey = N\n\n## These strings are used in the Fox doodle Pin/set default spotlights\n\njuly-jam-headline = We’ve got you covered\njuly-jam-body = Every month, { -brand-short-name } blocks an average of 3,000+ trackers per user, giving you safe, speedy access to the good internet.\njuly-jam-set-default-primary = Open my links with { -brand-short-name }\nfox-doodle-pin-headline = Welcome back\n\n# “indie” is short for the term “independent”.\n# In this instance, free from outside influence or control.\nfox-doodle-pin-body = Here’s a quick reminder that you can keep your favorite indie browser just one click away.\nfox-doodle-pin-primary = Open my links with { -brand-short-name }\nfox-doodle-pin-secondary = Not now\n\n## These strings are used in the Set Firefox as Default PDF Handler for Existing Users experiment\n\nset-default-pdf-handler-headline = <strong>Your PDFs now open in { -brand-short-name }.</strong> Edit or sign forms directly in your browser. To change, search “PDF” in settings.\nset-default-pdf-handler-primary = Got it\n";

/***/ })

}]);