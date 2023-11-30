"use strict";
(self["webpackChunkbrowser_storybook"] = self["webpackChunkbrowser_storybook"] || []).push([[8714],{

/***/ 68714:
/***/ ((module) => {

module.exports = "# This Source Code Form is subject to the terms of the Mozilla Public\n# License, v. 2.0. If a copy of the MPL was not distributed with this\n# file, You can obtain one at http://mozilla.org/MPL/2.0/.\n\nabout-telemetry-ping-data-source = Ping data source:\nabout-telemetry-show-current-data = Current data\nabout-telemetry-show-archived-ping-data = Archived ping data\nabout-telemetry-show-subsession-data = Show subsession data\nabout-telemetry-choose-ping = Choose ping:\nabout-telemetry-archive-ping-type = Ping Type\nabout-telemetry-archive-ping-header = Ping\nabout-telemetry-option-group-today = Today\nabout-telemetry-option-group-yesterday = Yesterday\nabout-telemetry-option-group-older = Older\nabout-telemetry-previous-ping = <<\nabout-telemetry-next-ping = >>\nabout-telemetry-page-title = Telemetry Data\nabout-telemetry-current-store = Current Store:\nabout-telemetry-more-information = Looking for more information?\nabout-telemetry-firefox-data-doc = The <a data-l10n-name=\"data-doc-link\">Firefox Data Documentation</a> contains guides about how to work with our data tools.\nabout-telemetry-telemetry-client-doc = The <a data-l10n-name=\"client-doc-link\">Firefox Telemetry client documentation</a> includes definitions for concepts, API documentation and data references.\nabout-telemetry-telemetry-dashboard = The <a data-l10n-name=\"dashboard-link\">Telemetry dashboards</a> allow you to visualize the data Mozilla receives via Telemetry.\nabout-telemetry-telemetry-probe-dictionary = The <a data-l10n-name=\"probe-dictionary-link\">Probe Dictionary</a> provides details and descriptions for the probes collected by Telemetry.\nabout-telemetry-show-in-Firefox-json-viewer = Open in the JSON viewer\nabout-telemetry-home-section = Home\nabout-telemetry-general-data-section = General Data\nabout-telemetry-environment-data-section = Environment Data\nabout-telemetry-session-info-section = Session Information\nabout-telemetry-scalar-section = Scalars\nabout-telemetry-keyed-scalar-section = Keyed Scalars\nabout-telemetry-histograms-section = Histograms\nabout-telemetry-keyed-histogram-section = Keyed Histograms\nabout-telemetry-events-section = Events\nabout-telemetry-simple-measurements-section = Simple Measurements\nabout-telemetry-slow-sql-section = Slow SQL Statements\nabout-telemetry-addon-details-section = Add-on Details\nabout-telemetry-late-writes-section = Late Writes\nabout-telemetry-raw-payload-section = Raw Payload\nabout-telemetry-raw = Raw JSON\nabout-telemetry-full-sql-warning = NOTE: Slow SQL debugging is enabled. Full SQL strings may be displayed below but they will not be submitted to Telemetry.\nabout-telemetry-fetch-stack-symbols = Fetch function names for stacks\nabout-telemetry-hide-stack-symbols = Show raw stack data\n# Selects the correct release version\n# Variables:\n#   $channel (string) - Represents the corresponding release data string\nabout-telemetry-data-type =\n    { $channel ->\n        [release] release data\n       *[prerelease] pre-release data\n    }\n# Selects the correct upload string\n# Variables:\n#   $uploadcase (string) - Represents a corresponding upload string\nabout-telemetry-upload-type =\n    { $uploadcase ->\n        [enabled] enabled\n       *[disabled] disabled\n    }\n# Example Output: 1 sample, average = 0, sum = 0\n# Variables:\n#   $sampleCount (number) - Amount of histogram samples\n#   $prettyAverage (number) - Average of histogram samples\n#   $sum (number) - Sum of histogram samples\nabout-telemetry-histogram-stats =\n    { $sampleCount ->\n        [one] { $sampleCount } sample, average = { $prettyAverage }, sum = { $sum }\n       *[other] { $sampleCount } samples, average = { $prettyAverage }, sum = { $sum }\n    }\n# Variables:\n#   $telemetryServerOwner (string) - the value of the toolkit.telemetry.server_owner preference. Typically \"Mozilla\"\nabout-telemetry-page-subtitle = This page shows the information about performance, hardware, usage and customizations collected by Telemetry. This information is submitted to { $telemetryServerOwner } to help improve { -brand-full-name }.\nabout-telemetry-settings-explanation = Telemetry is collecting { about-telemetry-data-type } and upload is <a data-l10n-name=\"upload-link\">{ about-telemetry-upload-type }</a>.\n# Variables:\n#   $name (string) - Ping name, e.g. “saved-session”\n#   $timestamp (string) - Ping localized timestamp, e.g. “2017/07/08 10:40:46”\nabout-telemetry-ping-details = Each piece of information is sent bundled into “<a data-l10n-name=\"ping-link\">pings</a>”. You are looking at the { $name }, { $timestamp } ping.\nabout-telemetry-data-details-current = Each piece of information is sent bundled into “<a data-l10n-name=\"ping-link\">pings</a>“. You are looking at the current data.\n# string used as a placeholder for the search field\n# More info about it can be found here:\n# https://firefox-source-docs.mozilla.org/toolkit/components/telemetry/telemetry/data/main-ping.html\n# Variables:\n#   $selectedTitle (string) - The section name from the structure of the ping.\nabout-telemetry-filter-placeholder =\n    .placeholder = Find in { $selectedTitle }\nabout-telemetry-filter-all-placeholder =\n    .placeholder = Find in all sections\n# Variables:\n#   $searchTerms (string) - The searched terms\nabout-telemetry-results-for-search = Results for “{ $searchTerms }”\n# More info about it can be found here: https://firefox-source-docs.mozilla.org/toolkit/components/telemetry/telemetry/data/main-ping.html\n# Variables:\n#   $sectionName (string) - The section name from the structure of the ping.\n#   $currentSearchText (string) - The current text in the search input\nabout-telemetry-no-search-results = Sorry! There are no results in { $sectionName } for “{ $currentSearchText }”\n# Variables:\n#   $searchTerms (string) - The searched terms\nabout-telemetry-no-search-results-all = Sorry! There are no results in any sections for “{ $searchTerms }”\n# This message is displayed when a section is empty.\n# Variables:\n#   $sectionName (string) - Is replaced by the section name.\nabout-telemetry-no-data-to-display = Sorry! There is currently no data available in “{ $sectionName }”\n# used as a tooltip for the “current” ping title in the sidebar\nabout-telemetry-current-data-sidebar = current data\n# used in the “Ping Type” select\nabout-telemetry-telemetry-ping-type-all = all\n# button label to copy the histogram\nabout-telemetry-histogram-copy = Copy\n# these strings are used in the “Slow SQL Statements” section\nabout-telemetry-slow-sql-main = Slow SQL Statements on Main Thread\nabout-telemetry-slow-sql-other = Slow SQL Statements on Helper Threads\nabout-telemetry-slow-sql-hits = Hits\nabout-telemetry-slow-sql-average = Avg. Time (ms)\nabout-telemetry-slow-sql-statement = Statement\n# these strings are used in the “Add-on Details” section\nabout-telemetry-addon-table-id = Add-on ID\nabout-telemetry-addon-table-details = Details\n# Variables:\n#   $addonProvider (string) - The name of an Add-on Provider (e.g. “XPI”, “Plugin”)\nabout-telemetry-addon-provider = { $addonProvider } Provider\nabout-telemetry-keys-header = Property\nabout-telemetry-names-header = Name\nabout-telemetry-values-header = Value\n# Variables:\n#   $lateWriteCount (number) - The number of the late writes\nabout-telemetry-late-writes-title = Late Write #{ $lateWriteCount }\nabout-telemetry-stack-title = Stack:\nabout-telemetry-memory-map-title = Memory map:\nabout-telemetry-error-fetching-symbols = An error occurred while fetching symbols. Check that you are connected to the Internet and try again.\nabout-telemetry-time-stamp-header = timestamp\nabout-telemetry-category-header = category\nabout-telemetry-method-header = method\nabout-telemetry-object-header = object\nabout-telemetry-extra-header = extra\n# Variables:\n#  $process (string) - Type of process in subsection headers ( e.g. \"content\", \"parent\" )\nabout-telemetry-process = { $process } process\n";

/***/ })

}]);