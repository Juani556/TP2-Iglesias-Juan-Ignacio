import fs from 'fs/promises';


Promise.all([fs.readFile('./package.json', 'utf-8'), fs.stat('./package.json')])
.then(([data, stats]) => {

    let info = {
        contenidoStr : data,
        contenidoObj : JSON.parse(data),
        size : stats.size
    };
    
    console.log(info);
    fs.writeFile('./info.txt',JSON.stringify(info, null, '\t'));
}).catch((error) => {
    console.log(error);
}) 