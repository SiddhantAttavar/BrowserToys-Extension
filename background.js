/**
 * Called when the user creates a new tab (usually Ctrl+Tab/Cmd+Tab)
 */
var activeTab = null;

chrome.tabs.onMoved.addListener(function () {
	chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
		activeTab = tabs[0];
	});
});

chrome.tabs.onActivated.addListener(function (activeInfo) {
	chrome.tabs.get(activeInfo.tabId, function (tabInfo) {
		activeTab = tabInfo;
	});
});

chrome.tabs.onCreated.addListener(function (newTab) {
	// Sanity check for whether there are tabs
	if (!activeTab) {
		return;
	}
	
	if (newTab.windowId != activeTab.windowId) {
		return;
	}
	
	var targetIndex = activeTab.index + 1;
	
	if (newTab.index == targetIndex) {
		return;
	}
	
	chrome.windows.getCurrent({'populate': true}, function (window) {
		if (newTab.index != window.tabs.length - 1) {
			return;
		}
		
		chrome.tabs.move(newTab.id, {index: targetIndex}, function (tab) {
			if (activeTab.groupId >= 0) {
				var groupOpts = {};
				groupOpts.groupId = activeTab.groupId;
				groupOpts.tabIds = createdTab.id;
				chrome.tabs.group(groupOpts);
			}
		});
	});
});

/**
 * Adds listeners to the Youtube and Youtube Music page 
 * to check for the confirm dialog menu and autoconfirm
 */
chrome.runtime.onInstalled.addListener(() => {
	chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
		chrome.declarativeContent.onPageChanged.addRules([{
			conditions: [
				new chrome.declarativeContent.PageStateMatcher({
					pageUrl: {hostEquals: 'www.youtube.com'}
				}),
				new chrome.declarativeContent.PageStateMatcher({
					pageUrl: {hostEquals: 'music.youtube.com'}
				})
			],
			actions: [new chrome.declarativeContent.ShowPageAction()]
		}]);
	});
});
