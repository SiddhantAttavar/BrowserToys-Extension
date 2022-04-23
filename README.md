# BrowserToys-Extension:
A browser extension that contains many tools to help you while browsing and extend the functionality of your browser. It runs on any browser that supports the [Extensions API](https://developer.chrome.com/docs/extensions/reference/) (i.e. pretty much every Chromium browser). The name for this extension was inspired from [Microsoft Powertoys](https://github.com/microsoft/PowerToys) which povides many useful tools for power users.

This extension adds the following features to your browser:
 - Creates a new tab to the immediate right of the current tab and in the same tab group when using Ctrl+T
 - Autoconfirms the `Video paused. Continue watching?` message when using Youtube or Youtube Music (Original source code from [YoutubeNonStop](https://github.com/lawfx/YoutubeNonStop))
 - Replaces every mention of `"plane"` in a webpage with `"spider"`. Inspired by [r/xkcd](https://www.reddit.com/r/xkcd/) reaction to the [What if 2 countdown](https://munvoseli.github.io/xkcd-countdown/)

# How to install:
## Chromium:
 - Download the `BrowserToys-Extension.crx` file from the [releases page](https://github.com/SiddhantAttavar/BrowserToys-Extension/releases)
 - Open the browser and go to `chrome://extensions`
 - Drag and drop the file onto the page
 - Restart the browser

You may get a warning on Windows saying that the extension is disabled. To remove this warning, do the following:
 - Go to the `chrome://extensions` page
 - Navigate to the extension page
 - Copy the extension ID
 - Open regedit.msc and navigate to SOFTWARE\Policies\Microsoft\Edge\ExtensionInstallAllowlist
 - Add the extension ID to the list (change value 1 to the extension ID)
 - Close regedit.msc and restart the browser

## Firefox:
 - Download the `BrowserToys-Extensions.xpi` file from the [release page](https://github.com/SiddhantAttavar/BrowserToys-Extension/releases)
 - Open the browser and go to `about:addons`
 - Click the settings button and select `Install Add-on From File`
 - Upload the file to the page
 - Restart the browser
