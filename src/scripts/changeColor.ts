chrome.runtime.onMessage.addListener(
  (request, sender, sendResponse) => {
    if(request.action == "setBackground") document.body.style.background = "red";
  });