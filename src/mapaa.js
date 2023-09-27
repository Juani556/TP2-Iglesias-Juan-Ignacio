import fs from 'fs/promises';


try {
const data = await fs.readFile('./package.json', 'utf-8');
const stats = await fs.stat('./package.json');

    let info = {
        contenidoStr : data,
        contenidoObj : JSON.parse(data),
        size : stats.size
    };
    
    console.log(info);

    fs.writeFile('./info.txt',JSON.stringify(info, null, '\t'));

} catch(error) {
    console.log(error);
}
