import fs from 'node:fs';
import path from 'node:path';
import archiver from 'archiver';

const distDir = 'dist';

// Limpa o diretório de build
fs.rmSync(distDir, { recursive: true, force: true });
fs.mkdirSync(distDir);

// Lista de arquivos e pastas a serem copiados para o build
const filesToCopy = [
    'manifest.json',
    'src',
    'icons'
];

// Copia os arquivos da extensão
for (const file of filesToCopy) {
    const destPath = path.join(distDir, path.basename(file));
    if (fs.lstatSync(file).isDirectory()) {
        fs.cpSync(file, destPath, { recursive: true });
    } else {
        fs.copyFileSync(file, destPath);
    }
}

// Gera o arquivo ZIP
const output = fs.createWriteStream(path.join(distDir, 'leitor-zen.zip'));
const archive = archiver('zip', { zlib: { level: 9 } });

archive.pipe(output);
archive.directory(distDir, false, (entry) => {
    // Não inclui o próprio zip dentro dele mesmo
    return entry.name !== 'leitor-zen.zip' ? entry : false;
});

await archive.finalize();

console.log('Build da extensão gerado em dist/');
console.log('Pacote criado em dist/leitor-zen.zip');