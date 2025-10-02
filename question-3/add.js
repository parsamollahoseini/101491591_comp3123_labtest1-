// Question 3
// Parsa Molahosseini 101491591

const fs = require('fs');
const path = require('path');


const createLogs = () => {
    const logsDir = path.join(process.cwd(), 'Logs');


    if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir);
        console.log('Logs directory created');
    }


    process.chdir(logsDir);
    console.log(`Current directory: ${process.cwd()}`);


    for (let i = 0; i < 10; i++) {
        const fileName = `log${i}.txt`;
        const fileContent = `This is log file number ${i}\nCreated at: ${new Date().toISOString()}`;


        fs.writeFileSync(fileName, fileContent);


        console.log(fileName);
    }

    console.log('All log files created successfully');
};

// Execute the function
createLogs();