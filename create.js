import fs from "fs";
const dir = './test';

export default function createRandomFiles() {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
        const fileExtensions = ['txt', 'pdf', 'jpg', 'png', 'doc', 'docx', 'mp3', 'mov'];

        for (let i = 0; i < 150; i++) {
            const fileExtension = fileExtensions[Math.floor(Math.random() * fileExtensions.length)]
            const filePath = `${dir}/${i}.${fileExtension}`;

            fs.writeFile(filePath, "", (err) => {
                if (err) {
                    console.error('Error creating random file:', err);
                    return;
                }
                console.log(`Random file created: ${filePath}`);
            });
        }
    } else {
        console.log('directory and files already exist.');
    }
}