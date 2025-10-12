import { defineConfig, devices } from '@playwright/test';
import path from 'node:path';

// O Playwright carregará a extensão a partir da pasta 'dist' gerada pelo script de build
const extensionPath = path.join(__dirname, '..', 'dist');

export default defineConfig({
  testDir: './',
  reporter: [['html', { outputFolder: 'playwright-report', open: 'never' }]],
  use: {
    headless: true, // Mude para 'false' para ver o navegador durante o teste local
  },
  projects: [
    {
      name: 'chromium-with-extension',
      use: {
        ...devices['Desktop Chrome'],
        launchOptions: {
          args: [
            `--disable-extensions-except=${extensionPath}`,
            `--load-extension=${extensionPath}`
          ]
        }
      }
    }
  ]
});