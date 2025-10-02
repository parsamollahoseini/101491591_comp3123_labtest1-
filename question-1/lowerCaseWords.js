// Question 1
// Parsa Molahosseini 101491591


const lowerCaseWords = (mixedArray) => {
    return new Promise((resolve, reject) => {
        // Validate input
        if (!Array.isArray(mixedArray)) {
            reject("Error: Input must be an array");
            return;
        }


        const result = mixedArray
            .filter(item => typeof item === 'string')
            .map(str => str.toLowerCase());


        resolve(result);
    });
};


const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

lowerCaseWords(mixedArray)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.log(error);
    });