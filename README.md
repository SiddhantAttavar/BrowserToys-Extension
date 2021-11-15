# BrowserToys-Extension
A browser extension that contains many tools to help you while browsing and extend the functionality of your browser. It runs on any browser that supports the [WebExtensions API](https://developer.mozilla.org/en-US/Add-ons/WebExtensions) (i.e. pretty much every Chromium browser). The name for this extension was inspired from [Microsoft Powertoys](https://github.com/microsoft/PowerToys) which povides many useful tools for power users.

This extension adds the following features to your browser:
 - Creates a new tab to the immediate right of the current tab and in the same tab group when using Ctrl+T
 - Autoconfirms the `Video paused. Continue watching?` message when using Youtube or Youtube Music (Original source code from [YoutubeNonStop](https://github.com/lawfx/YoutubeNonStop))

# How to install
 - Download the BrowserToys-Extension.crx file from the [releases page](https://github.com/SiddhantAttavar/BrowserToys-Extension/releases)
 - Open the browser and go to `chrome://extensions`
 - Drag and drop the file onto the page
 - Restart the browser

You may get a warning that the extension is disabled. To remove this warning, do the following:
 - Go to the `chrome://extensions` page
 - Navigate to the extension page
 - Copy the extension ID
 - Open regedit.msc and navigate to SOFTWARE\Policies\Microsoft\Edge\ExtensionInstallAllowlist
 - Add the extension ID to the list (change value 1 to the extension ID)
 - Close regedit.msc and restart the browser
