import { test, expect, chromium } from '@playwright/test';
import path from 'node:path';

const extensionPath = path.resolve(__dirname, '..', 'dist');

test('deve ativar o Modo Zen e limpar a página', async () => {
  // Inicia um contexto de navegador persistente com a extensão carregada
  const context = await chromium.launchPersistentContext('', {
    headless: false, // Mantenha false para depuração local
    args: [
      `--disable-extensions-except=${extensionPath}`,
      `--load-extension=${extensionPath}`,
    ],
  });

  // Encontra o Service Worker da extensão
  const serviceWorker = context.serviceWorkers().find(sw => sw.url().includes('service-worker'));
  if (!serviceWorker) {
    throw new Error("Service Worker da extensão não encontrado.");
  }

  // Encontra o ID da extensão
  const extensionId = serviceWorker.url().split('/')[2];

  // Abre o popup da extensão
  const popupPage = await context.newPage();
  await popupPage.goto(`chrome-extension://${extensionId}/src/popup/popup.html`);

  // Abre uma página de teste em outra aba
  const testPage = await context.newPage();
  await testPage.goto('https://www.bbc.com/sport/scotland/58448986', { waitUntil: 'domcontentloaded' });

  // Traz a aba de teste para o foco para que a extensão possa atuar sobre ela
  await testPage.bringToFront();

  // Clica no botão "Ativar Modo Foco" no popup
  await popupPage.locator('button#focus-button').click();

  // Aguarda a injeção do container do modo zen na página de teste
  const zenContainer = testPage.locator('#zen-mode-container');
  await zenContainer.waitFor({ state: 'visible', timeout: 5000 });

  // Verifica se o container do modo zen está visível
  await expect(zenContainer).toBeVisible();

  // Verifica se o corpo (body) da página agora tem a classe 'zen-mode-active'
  await expect(testPage.locator('body')).toHaveClass('zen-mode-active');

  // Fecha o contexto do navegador
  await context.close();
});