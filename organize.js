import fs from 'fs/promises';
import path from 'path';

const sourceDir = './test';
const resultDir = './result';

export default async function organizeFiles() {
    try {
        await fs.mkdir(resultDir, { recursive: true });
        const files = await fs.readdir(sourceDir);
        const moveOperations = files.map(async (file) => {
            const fileExtension = path.extname(file).slice(1); 
            const targetDir = path.join(resultDir, fileExtension);
            await fs.mkdir(targetDir, { recursive: true });
            const oldPath = path.join(sourceDir, file);
            const newPath = path.join(targetDir, file);
            await fs.rename(oldPath, newPath);
            console.log(`File moved: ${file} → ${targetDir}`);
        });
        await Promise.all(moveOperations);
        console.log('All files organized successfully.');

    } catch (err) {
        console.error('Error organizing files:', err);
    }
}
