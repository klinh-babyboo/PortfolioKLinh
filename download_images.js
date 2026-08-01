import fs from 'fs';
import path from 'path';
import https from 'https';

const imagesDir = path.join(process.cwd(), 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

const files = [
  { id: '1CZBE3NSos0jYlWul89-9SxuCV35gqQ2X', filename: 'acca-cert.jpg' },
  { id: '1x2KexX4PND6ktaqYGIjTfIAApesiBv4c', filename: 'champion-2026.jpg' },
  { id: '1BNTTDH2gho3fDl9H7Scbua8BYLcGlWC_', filename: 'esg-research.jpg' },
  { id: '1y8A07TF9SuDajfu_kEadBgCLPAggPp-D', filename: 'cfaa-head-media.jpg' },
];

function downloadFile(fileId, targetPath) {
  return new Promise((resolve, reject) => {
    const url = `https://lh3.googleusercontent.com/d/${fileId}`;
    const file = fs.createWriteStream(targetPath);
    https.get(url, (response) => {
      if (response.statusCode === 302 || response.statusCode === 301) {
        https.get(response.headers.location, (redirectResponse) => {
          redirectResponse.pipe(file);
          file.on('finish', () => {
            file.close();
            console.log(`Downloaded ${targetPath}`);
            resolve();
          });
        }).on('error', reject);
      } else {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Downloaded ${targetPath}`);
          resolve();
        });
      }
    }).on('error', reject);
  });
}

async function main() {
  for (const item of files) {
    const targetPath = path.join(imagesDir, item.filename);
    try {
      await downloadFile(item.id, targetPath);
    } catch (err) {
      console.error(`Failed to download ${item.filename}:`, err);
    }
  }
}

main();
