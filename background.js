chrome.commands.onCommand.addListener(function (command) {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		if (tabs[0]) {
			var createOpts = {};
			createOpts.index = tabs[0].index + 1;
			createOpts.openerTabId = tabs[0].id;
			chrome.tabs.create(createOpts, (createdTab) => {
				if (tabs[0].groupId >= 0) {
					var groupOpts = {};
					groupOpts.groupId = tabs[0].groupId;
					groupOpts.tabIds = createdTab.id;
					chrome.tabs.group(groupOpts);
				}
			});
		}
	});
});

chrome.runtime.onInstalled.addListener(() => {
	chrome.declarativeContent.onPageChanged.removeRules(undefined, () => {
	  chrome.declarativeContent.onPageChanged.addRules([{
		  conditions: [
			new chrome.declarativeContent.PageStateMatcher({
			  pageUrl: { hostEquals: 'www.youtube.com' }
			}),
			new chrome.declarativeContent.PageStateMatcher({
			  pageUrl: { hostEquals: 'music.youtube.com' }
			})
		  ],
		  actions: [new chrome.declarativeContent.ShowPageAction()]
		}
	  ]);
	});
  });
