# Usa a imagem oficial do Playwright com navegadores e dependências
FROM mcr.microsoft.com/playwright:v1.46.0-jammy

WORKDIR /app

# Copia e instala as dependências (otimizado para cache)
COPY package*.json ./
RUN npm ci

# Copia o restante do código
COPY . .

# Comando padrão para rodar os testes
CMD ["npm", "test"]