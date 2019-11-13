let pinkSubmit = document.getElementById('pinkSubmit')

pinkSubmit.onclick = () => {
  const tabParams = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(tabParams, tabs => {
    chrome.tabs.sendMessage(tabs[0].id, {});
  });
};
