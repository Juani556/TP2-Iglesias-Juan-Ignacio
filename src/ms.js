import fs from 'fs';

try {
    const data = fs.readFileSync('./package.json', 'utf-8');
    const stats = fs.statSync('./package.json');
    
    let info = {
        contenidoStr : data,
        contenidoObj : JSON.parse(data),
        size : stats.size
    };
    
    console.log(info);
    fs.writeFileSync('./info.txt',JSON.stringify(info, null, '\t'));
} catch(error) {
    console.log(error);
}

