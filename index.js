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
    if (readbooks.length === 0) return 0; // Avoid division by zero
    
    let totalDays=0;
    let count = 0;
    // Use reduce to sum all the values for the specified key
    readbooks.forEach(book => {

   
    const days = Number(book["Time on TBR (days)"]);

        
 })
    // Calculate the average by dividing the total sum by the number of books
    const averageDays = totalDays / readbooks.length;

    return averageDays;
}

const averageTime = calculateAverageReadingTime(readbooks);
console.log(`The average time to read a book is: ${averageTime} days`);




const percentRead = (readbooks.length / filteredData.length) * 100;
console.log(`Percentage of books read: ${percentRead.toFixed(2)}%`);


//for (let i = 0; i < filteredData.length; i++) {
//  console.log(filteredData[i].category);
//}

console.log("finding unique genres")


console.log(data.category)
const favCategory= (filteredData.category) 
console.log(favCategory);

const uniqueSet = new Set(favCategory);
const uniqueArray = [];
filteredData.forEach(book => {
    if(!uniqueArray.includes(book.category))
        
        
       {
        console.log(book.category);
        uniqueArray.push(book.category);
    }

});
let highestCount = 0;
let mostPopular = "";
console.log(uniqueArray)
for(let x=0; x < uniqueArray.length; x=x+1){
let counter=0;

for (let i = 0; i < filteredData.length; i++) {
    if (filteredData[i].category === uniqueArray[x]) {
      counter++;
    }


}

console.log(`${uniqueArray[x]}: ${counter}`);
if (counter > highestCount) {
    highestCount = counter;
    mostPopular = uniqueArray[x];
  }
  console.log(`\nMost popular category: ${mostPopular} (${highestCount} books)`);
  console.log(counter)
}

const yearCounter ={};
filteredData.forEach(book => {
    const date = book["Date Bought"];
    if(date && date !== "N/A"){
        const year = new Date(date).getFullYear();
    if (!isNaN(year)) {
      // 👇 this line actually counts the books per year
      yearCounter[year] = (yearCounter[year] || 0) + 1;
    }
    }
});
let highestyear=0;
let topyear = null;
for (const year in yearCounter){
    if (yearCounter[year]> highestyear){
        highestyear=yearCounter[year]
        topyear=year;
    }
}


  console.log(`\nYou acquired the most books in ${topyear} (${highestyear} books).`);

console.log(`Total number of books in your collection: ${filteredData.length}`);
//console.log(fantasy)






// fetch('./rawBooks.json')
//     .then((response) => response.json())
//     .then((json) => console.log(json));
