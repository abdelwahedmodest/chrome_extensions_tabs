// background.js
chrome.tabs.onActivated.addListener(function(activeInfo) {
  chrome.tabs.query({currentWindow: true}, function(tabs) {
    tabs.forEach(function(tab) {
      if (tab.id !== activeInfo.tabId) {
        chrome.tabs.update(tab.id, {pinned: true});
      } else {
        chrome.tabs.update(tab.id, {pinned: false});
      }
    });
  });
});


