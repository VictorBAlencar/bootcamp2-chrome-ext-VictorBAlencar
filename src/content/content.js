function findMainContent() {
  const selectors = ['article', 'main', '#content', '#main', '.post', '.entry'];
  for (const selector of selectors) {
    const element = document.querySelector(selector);
    if (element) return element;
  }
  return document.body; 
}


function toggleZenMode() {
  const zenModeId = 'zen-mode-container';
  const existingZenMode = document.getElementById(zenModeId);

  
  if (existingZenMode) {
    window.location.reload();
    return;
  }

  const mainContent = findMainContent();
  if (!mainContent) return;

  
  const zenContainer = document.createElement('div');
  zenContainer.id = zenModeId;
  zenContainer.innerHTML = mainContent.innerHTML; 

  
  document.body.innerHTML = '';
  document.body.appendChild(zenContainer);
  document.body.classList.add('zen-mode-active'); 
}


toggleZenMode();