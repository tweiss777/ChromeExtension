export function changeColor() {
  chrome.storage.sync.get("color", ({color}) => {
    console.log("changing background color")
    document.body.style.backgroundColor = color
  })
  
}
