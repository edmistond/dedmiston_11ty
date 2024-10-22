import { createHash } from 'crypto';
import { readFileSync } from 'fs';
import path from 'path';
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function digest(filePath) {
    var absolutePath = path.join(__dirname, '..', filePath);
    console.log(absolutePath);

    const buff = readFileSync(absolutePath);
    const hash = createHash('md5').update(buff).digest('hex');

    return filePath + '?v=' + hash;
}

function cacheBustConfig(eleventyConfig) {
    eleventyConfig.addFilter('digest', digest);
}   

export { cacheBustConfig };