// Question 3
// Parsa Molahosseini 101491591


const fs = require('fs');
const path = require('path');


const removeLogs = () => {
    const logsDir = path.join(process.cwd(), 'Logs');


    if (fs.existsSync(logsDir)) {
      
        const files = fs.readdirSync(logsDir);


        files.forEach(file => {
            const filePath = path.join(logsDir, file);
            fs.unlinkSync(filePath);
            console.log(`delete files...${file}`);
        });


        fs.rmdirSync(logsDir);
        console.log('Logs directory removed');
    } else {
        console.log('Logs directory does not exist');
    }
};


removeLogs();
