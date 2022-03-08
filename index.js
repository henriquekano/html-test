var elemDiv = document.createElement("div");
elemDiv.innerText = "Working I am";
document.body.appendChild(elemDiv);

var observer = new MutationObserver(console.log);
console.log(document.body);
observer.observe(document.body, {
  subtree: true,
  childList: true,
  attributes: true,
});
