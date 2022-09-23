// background script can get listened to on the dev tools inspector
// background scripts perform some action when adding a bookmark
// or navigating to a new page. you have to program that

const color: string = '#2ea6cf'


// background.js
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({'color': color})
})