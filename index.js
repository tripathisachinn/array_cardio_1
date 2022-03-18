const inventors = [
    {first: 'Albert', last: 'Einstein', year: 1879, passed: 1955},
    {first: 'Isasc', last: 'Newton', year: 1643, passed: 1727},
    {first: 'Galelio', last: 'Galilei', year: 1564, passed: 1642},
    {first: 'Marie', last: 'Curie', year: 1867, passed: 1934},
    {first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630},
    {first: 'Nicolous', last: 'Copernicus', year: 1473, passed: 1543},
    {first: 'Max', last: 'Planck', year: 1858, passed: 1947},

];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel' , 'Beddos, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chestor', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton'];

// Array.prototype.filter()
// filter the list of inventors for those who were born in the 1500's

const fifteen = inventors.filter(function(inventor){
    if(inventor.year >= 1500 && inventor.year <=1600){
        return true;
    }
    
});
// using console.log()
console.log(fifteen);

// using console.table()
console.table(fifteen)

// Array.prototype.map()
// give us an array of inventoryfirst and last date
const fullNames = inventors.map(inventor => inventor.first + ' ' + inventor.last);
console.log(fullNames);
console.table(fullNames);

// Array.prototype.sort()
// sort the inventors by birth date , oldest to youngest.
const orderedd = inventors.sort(function(a,b){
    if(a.year > b.year){
        return 1;
    } else{
        return -1;
    }
});

// also the same code can be done by terniary operator
const ordered = inventors.sort((a,b)=> a.year > b.year ? 1 : -1);
console.log(orderedd);
console.table(ordered);

// Array.prototype.reduce()
// how many years did all the inventors live?
const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);

console.log(totalYears);

// sort the inventors by the years lived

const oldest = inventors.sort(function(a,b){
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;
    // using ternary operator
    return lastGuy > nextGuy ? -1 : 1;
    // if(lastGuy > nextGuy){
    //     return -1;
    // } else{
    //     return 1;
    // }
});

console.table(oldest);

// create a list of boulewards in paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

// this piece of code is not working will fix it soon
// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll(''));
// const de = links
//             .map(link => link.textContent)
//             .filter(streetName => streetName.includes('de'));

// sort exercise
// sort the people albhabetically by the last name 
const alpha = people.sort(function(lastOne, nextOne){

    // destructuring
    const [aLast , aFirst] = lastOne.split(', ');
    const [bLast , bFirst] = nextOne.split(', ');
    return aLast > bLast ? 1 : -1;

});

console.table(alpha);

// reduce exercise
// sum up the instances of each of these 
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];  

const transportation = data.reduce(function(obj, item){
    if(!obj[item]){
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
    
}, {});
console.log(transportation);