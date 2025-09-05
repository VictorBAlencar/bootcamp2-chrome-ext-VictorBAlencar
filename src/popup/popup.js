const focusButton = document.getElementById('focus-button');

focusButton.addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });


  await chrome.scripting.insertCSS({
    target: { tabId: tab.id },
    files: ['src/styles/zen-style.css']
  });


  await chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['src/content/content.js']
  });
});