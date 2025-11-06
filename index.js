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




const percentRead = (readbooks.length / filteredData.length) * 100;
console.log(`Percentage of books read: ${percentRead.toFixed(2)}%`);


for (let i = 0; i < filteredData.length; i++) {
  console.log(filteredData[i].category);
}

if()


console.log(ata.category)
const favGenre= (filteredData.category) 
console.log(favGenre);



// fetch('./rawBooks.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));
