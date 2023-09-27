import fs from 'fs';

fs.readFile('./package.json', 'utf-8', (error, data) => {

    if (error) {
        console.log(error);
        return;
    }

    fs.stat('./package.json', (error, stats) => {

        if (error) {
            console.log(error);
            return;
        }

        let info = {
            contenidoStr : data,
            contenidoObj : JSON.parse(data),
            size : stats.size
        };

        console.log(info);
        fs.writeFile('./info.txt',JSON.stringify(info, null, '\t'), err => {
            if (err) {
                console.log(err);
            }
        });
    });

    
});