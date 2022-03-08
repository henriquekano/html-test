var observer = new MutationObserver(console.log);

observer.observe(document.body, {
  subtree: true,
  childList: true,
  attributes: true,
});
