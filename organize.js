import fs from "fs";
const dir = './result';
export default function organizeFiles() {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
        fs.readdir('./test', (err, files) => {
            if (err) {
                console.error('Error reading directory:', err);
                return;
            } else {
                files.forEach(file => {
                    const fileExtension = file.split('.').pop();
                    const extensionDir = `${dir}/${fileExtension}`;
                    if (!fs.existsSync(extensionDir)) {
                        fs.mkdirSync(extensionDir);
                    }
                    fs.rename(`./test/${file}`, `${extensionDir}/${file}`, (err) => {
                        if (err) {
                            console.error('Error moving file:', err);
                            return;
                        }

                        console.log(`File moved: ${file} to ${extensionDir}`);
                    });
                })
            }
        });
    } else {
        console.log('files already organized.');
    }

}