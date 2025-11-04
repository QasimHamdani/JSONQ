import data from './rawBooks.json' with { type: 'json' };
const filteredData = data.filter(obj => obj.title !== "");

console.log(filteredData);
const readbooks = filteredData.filter(obj => obj['read?'] =="Yes" )
console.log(readbooks)

console.log(data[57]);
console.log(data[57].title);
console.log(data[57]['# Pages']);

//data.forEach(book=> {
//    console.log(book.title);
//});


function calculateAverageReadingTime(readbooks) {
    if (readbooks.length === 0) {
        return 0; // Avoid division by zero
    }

    // Use reduce to sum all the values for the specified key
    const totalDays = readbooks.reduce((accumulator, currentBook) => {
        return accumulator + currentBook["Time on TBR (days)"];
    }, 0); // Start the sum at 0

    // Calculate the average by dividing the total sum by the number of books
    const averageDays = totalDays / readbooks.length;

    return averageDays;
}

const averageTime = calculateAverageReadingTime(readbooks);
console.log(`The average time to read a book is: ${averageTime} days`);
// fetch('./rawBooks.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));
