/**
 * Called when the user uses the keyboard shortcut for
 * creating a new tab (usually Ctrl+Tab/Cmd+Tab)
 */
chrome.commands.onCommand.addListener(function (command) {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		// Sanity check for whether there are tabs
		if (!tabs[0]) {
			return;
		}

		// Create new tab to the right of current one (index is 1 greater)
		var createOpts = {};
		createOpts.index = tabs[0].index + 1;
		createOpts.openerTabId = tabs[0].id;
		chrome.tabs.create(createOpts, (createdTab) => {
			// Add the newly created tab to the same tab group
			if (tabs[0].groupId >= 0) {
				var groupOpts = {};
				groupOpts.groupId = tabs[0].groupId;
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
