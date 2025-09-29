import fs from 'fs/promises';
import path from 'path';

const dir = './test';

export default async function createRandomFiles() {
    try {
        try {
            await fs.access(dir);
            console.log('Directory and files already exist.');
            return;
        } catch {
            await fs.mkdir(dir);
        }

        const fileExtensions = ['txt', 'pdf', 'jpg', 'png', 'doc', 'docx', 'mp3', 'mov'];
        const filePromises = Array.from({ length: 150 }, async (_, i) => {
            const ext = fileExtensions[Math.floor(Math.random() * fileExtensions.length)];
            const filePath = path.join(dir, `${i}.${ext}`);

            const content = ""; 
            await fs.writeFile(filePath, content);
            console.log(`Random file created: ${filePath}`);
        });

        await Promise.all(filePromises);
        console.log('All files created.');
        
    } catch (err) {
        console.error('Error creating random files:', err);
    }
}
