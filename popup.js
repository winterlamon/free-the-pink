let pinkSubmit = document.getElementById('pinkSubmit')

pinkSubmit.onclick = () => {
  const tabParams = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(tabParams, tab => {
    chrome.tabs.executeScript(tab.id, {
    	file: 'content.js'
    });
  });
};
