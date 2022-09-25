// background script can get listened to on the dev tools inspector
// background scripts perform some action when adding a bookmark
// or navigating to a new page. you have to program that

const color: string = '#2ea6cf'

// let the user know via the console that the extension has succesfully 
// here you can do something like fetch data from a database or server
chrome.runtime.onStartup.addListener(() => {
    console.log("extension firing up")
  }
)



// background.js
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ 'color': color })
})