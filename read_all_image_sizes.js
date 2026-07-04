import fs from 'fs';
import path from 'path';

const dir = './public/images';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jpg') || f.endsWith('.png'));

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
  } catch (e) {}
  return null;
}

// Simple PNG size parser
function getPngSize(filePath) {
  try {
    const fd = fs.openSync(filePath, 'r');
    const buffer = Buffer.alloc(8);
    fs.readSync(fd, buffer, 0, 8, 16); // PNG width/height are at offset 16
    fs.closeSync(fd);
    const width = buffer.readInt32BE(0);
    const height = buffer.readInt32BE(4);
    return { width, height };
  } catch (e) {}
  return null;
}

for (const file of files) {
  const filePath = path.join(dir, file);
  let size = null;
  if (file.endsWith('.jpg')) {
    size = getJpegSize(filePath);
  } else if (file.endsWith('.png')) {
    size = getPngSize(filePath);
  }
  if (size) {
    console.log(`${file}: width=${size.width}, height=${size.height}`);
  }
}
