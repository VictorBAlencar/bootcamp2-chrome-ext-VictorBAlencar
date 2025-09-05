# bootcamp2-chrome-ext-VictorBAlencar
# 🧘 Leitor Zen

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Extensão para Google Chrome (Manifest V3) que limpa a poluição visual de artigos e posts de blog, proporcionando uma experiência de leitura limpa, focada e sem distrações.

Este projeto foi desenvolvido como parte do Desafio Inicial do Bootcamp II.

---

## 🚀 Demonstração

> **[Visite a Landing Page](https://victorbalencar.github.io/bootcamp2-chrome-ext-VictorBAlencar/)**

---

## ✨ Recursos

-   **Limpeza com um clique**: Ative o modo de leitura focado a partir de um popup simples.
-   **Foco total no conteúdo**: Remove cabeçalhos, rodapés, barras laterais, anúncios e outros elementos que distraem.
-   **Layout agradável**: Aplica um estilo limpo com fontes legíveis e espaçamento confortável.
-   **Construído com Manifest V3**: Utiliza as tecnologias mais recentes para extensões do Chrome, garantindo segurança e performance.

---

## 🛠️ Instalação Manual

Como esta extensão não está na Chrome Web Store, ela pode ser instalada manualmente no modo de desenvolvedor:

1.  Vá até a [página de Releases](https://github.com/VictorBAlencar/bootcamp2-chrome-ext-VictorBAlencar/releases) e baixe a versão mais recente (`leitor-zen.zip`).
2.  Descompacte o arquivo `.zip` em uma pasta no seu computador.
3.  Abra o Google Chrome e acesse `chrome://extensions`.
4.  Ative o **"Modo de desenvolvedor"** no canto superior direito.
5.  Clique em **"Carregar sem compactação"** e selecione a pasta que você acabou de descompactar.
6.  Pronto! O ícone do Leitor Zen aparecerá na sua barra de extensões.

---

## 📂 Estrutura do Projeto

O repositório está organizado da seguinte forma para seguir as boas práticas de desenvolvimento de extensões:

bootcamp2-chrome-ext-VictorBAlencar/
├─ icons/              # Ícones da extensão (16, 32, 48, 128px)
├─ src/
│  ├─ background/
│  │  └─ service-worker.js
│  ├─ content/
│  │  └─ content.js
│  ├─ popup/
│  │  ├─ popup.html
│  │  ├─ popup.js
│  │  └─ popup.css
│  └─ styles/
│     └─ zen-style.css
├─ docs/               # Arquivos para o GitHub Pages
│  ├─ images/
│  └─ index.html
├─ manifest.json       # O coração da extensão
├─ README.md           # Este arquivo
└─ LICENSE             # Licença MIT

---

## 📜 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.