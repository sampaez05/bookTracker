import books from "./App"

const script = document.querySelector('script');

let htmlBooks = "";

for (let i = 0; i<books.length; i++){
    htmlBooks += `<div>${i}</div>`
}