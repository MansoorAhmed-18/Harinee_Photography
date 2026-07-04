import fs from 'fs';
import path from 'path';

const dir = './public/images/portfolio_extracted';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpg')).sort((a, b) => {
  const numA = parseInt(a.replace('extracted_', '').replace('.jpg', ''), 10);
  const numB = parseInt(b.replace('extracted_', '').replace('.jpg', ''), 10);
  return numA - numB;
});

function getJpegSize(filePath) {
  try {
    const buffer = fs.readFileSync(filePath);
    let i = 0;
    while (i < buffer.length - 4) {
      if (buffer[i] === 0xFF && (buffer[i+1] === 0xC0 || buffer[i+1] === 0xC2)) {
        const height = (buffer[i+5] << 8) + buffer[i+6];
        const width = (buffer[i+7] << 8) + buffer[i+8];
        return { width, height };
      }
      i++;
    }
  } catch (e) {
    console.error(e);
  }
  return null;
}

for (const file of files) {
  const size = getJpegSize(path.join(dir, file));
  if (size) {
    console.log(`${file}: width=${size.width}, height=${size.height}`);
  } else {
    console.log(`${file}: size not found`);
  }
}
