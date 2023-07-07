const fs = require('fs')
const path = require('path')
/**
 * static randomNumer
 */
function randomNumer(max: number, min: number): number {
    return Math.round(Math.random() * (min - max) + max);
}
export function ImagerPicker(basePath: String, prifex: String, count: number) {
    const files = fs.readdirSync(path.join(basePath, prifex));
    const k = randomNumer(files.length - count, 0);
    return files.slice(k, k + count)
}