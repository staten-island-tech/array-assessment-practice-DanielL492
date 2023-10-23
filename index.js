const books = [
  {
    name: "To Kill a Mockingbird",
    authorFirst: "Harper",
    authorLast: "Lee",
    publishDate: 1960,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Great Gatsby",
    authorFirst: "F. Scott",
    authorLast: "Fitzgerald",
    publishDate: 1925,
    genre: ["mystery", "historical", "fiction"],
  },
  {
    name: "The Hobbit",
    authorFirst: "JRR",
    authorLast: "Tolkien",
    publishDate: 1937,
    genre: ["fantasy", "fiction"],
  },
  {
    name: "Harry Potter and the Deathly Hallows",
    authorFirst: "JK",
    authorLast: "Rowling",
    publishDate: 1997,
    genre: ["fantasy", , "fiction"],
  },
  {
    name: "Ulysses",
    authorFirst: "James",
    authorLast: "Joyce",
    publishDate: 1918,  //1918
    genre: ["historical", "non-fiction"],
  },
  {
    name: "War and Peace",
    authorFirst: "Leo",
    authorLast: "Tolstoy",
    publishDate: 1867,  //1867
    genre: ["historical", "fiction"],
  },
  {
    name: "Pride and Prejudice",
    authorFirst: "Jane",
    authorLast: "Austen",
    publishDate: 1813,  //1813
    genre: ["fiction"],
  },
  {
    name: "The Catcher in the Rye",
    authorFirst: "JD",
    authorLast: "Salinger",
    publishDate: 1951,
    genre: ["fiction"],
  },
  {
    name: "Great Expectations",
    authorFirst: "Charles",
    authorLast: "Dickens",
    publishDate: 1861, //1861
    genre: ["historical", "fiction"],
  },
  {
    name: "Little Women",
    authorFirst: "Lousia May",
    authorLast: "Alcott",
    publishDate: 1868, //1868
    genre: ["womens", "historical", "fiction"],
  },
];

const titles = [
  "To Kill a Mockingbird",
  "The Great Gatsby",
  "The Hobbit",
  "Harry Potter and the Deathly Hallows",
  "Ulysses",
  "War and Peace",
  "Pride and Prejudice",
  "The Catcher in the Rye",
  "Great Expectations",
  "Little Women",
];

//FINISHED?
const findarray = books.forEach((books) => console.log(books.authorFirst + " " + books.authorLast + 
  " wrote " + books.name + " in " + books.publishDate));

//const makearray = books.filter(())

console.log(findarray);

//Array of authors and the book they wrote
//"--- wrote --- in ---"

/*const orderbydate = books.filter((books) => books.publishDate);
orderbydate.sort();
console.log(orderbydate);*/

function sortbydate(a, b) {
  return a - b;
}
const sortedbook = books.sort((books) => sortbydate(books.publishDate - books.publishDate));
console.log(sortedbook);

//Sort books from oldest to most recent

//FINISHED
titles.sort();
const sortedbooks = titles.forEach((book) => console.log(book));
//replace ^^  with  "console.log(titles);" if you want to keep it as an array

//sort books alphabetically

//FINISHED
const mysauthor = books.filter((find) => find.name === "War and Peace");

const authname = mysauthor.forEach((author) => console.log(author.authorFirst + " " + author.authorLast + " wrote War and Peace."))

//Find who wrote War and Peace

//FINISHED
const howmany = books.filter((find) => find.publishDate < 1900);
console.log(howmany.length + " books were written before 1900.");

//how many books were written before 1900?

//was there at least one book published within the last 100 years?

/*const date = new Date().getFullYear();

function finddate() {
  if (books.forEach((books) => ((date - books.publishDate) < 100))) {
    console.log('true');
  }
  else 
  {
    console.log('false');
  }
}

finddate();*/

//was every book published within the last 100 years?

//FINISHED
const checkif = books.filter((books) => books.genre.includes("historical"));

const makelist = checkif.forEach((checkif) => console.log(checkif.name + " has a historical genre."))

//print a list of books that "includes" the genre historical
