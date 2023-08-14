const fs = require('fs').promises;
async function readFile(filepath){
    try{
        const data=await fs.readFile(filepath);
        console.log(data.toString());
        const data1=data.toString();
        fs.writeFile('hii1.html', data1)

    }
    catch(error){
        console.error('Got an error trying to read the file: ${error.message}');
    }
}
readFile('Max.html')