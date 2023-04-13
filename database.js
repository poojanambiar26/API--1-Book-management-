const books =[
    {
    ISBN: "12345Book",
    title: "Aura",
    pubDate: "2022-08-05",
    language: "en",
    numPage: 256,
    author: [1,2], //ids
    publications: [1], //id
    category: ["tech","space","eduaction"]
}
]

const author = [
    {
        id: 1,
        name: "Pooja",
        books: ["12345Book","xyzbook"]
    },
    {
        id:2,
        name: "Anu",
        books:["12345Book"]
    }
]

const publication = [
    {
        id: 1,
        name: "writex",
        books: ["12345Book"]
    }
]

module.exports = {books, author, publication};