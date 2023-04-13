const express = require("express");
//database
const database = require("./database");


const booky = express();

/*
Route                       /
Description                Get all the books
Access                     PUBLIC
Parameter                  None
Methods                    Get

 */

//npm i nodemon
//nodemon index.js 
booky.get("/",(req,res) => {
    return res.json({books: database.books});
});
/*
Route                       /is
Description                Get pecific books on ISBN
Access                     PUBLIC
Parameter                  isbn
Methods                    Get

 */
booky.get("/is/:isbn",(req,res) => {
   const getSpecificBook = database.books.filter(
    (book) => book.ISBN === req.params.isbn
   );

   if(getSpecificBook.length === 0){
    return res.json({error: `No Book found for the ISBN of ${req.params.isbn}`});
   }

   return res.json({book: getSpecificBook});
});

/*
Route                       /c
Description                Get specific books based on category
Access                     PUBLIC
Parameter                  category
Methods                    Get

 */
 booky.get("/c/:category", (req,res) =>{
    const getSpecificBook = database.books.filter(
        (book) => book.category.includes(req.params.category)
    )
    if(getSpecificBook.length === 0)
    {
        return res.json({error: `No book found for category of ${req.params.category}`});
    }
    return res.json({book: getSpecificBook});

 });
 /*
Route                       /l
Description                Get specific books based on lanuages
Access                     PUBLIC
Parameter                  lan
Methods                    Get

 */
booky.get("/l/:lan",(req,res) => {
    const getSpecificBook = database.books.filter(
     (book) => book.language === req.params.lan
    );
 
    if(getSpecificBook.length === 0){
     return res.json({error: `No Book found for the language of ${req.params.lan}`});
    }
 
    return res.json({book: getSpecificBook});
 });
 
/*
Route                       /authors
Description                Get all authors
Access                     PUBLIC
Parameter                  none
Methods                    Get

 */
booky.get("/authors",(req,res) => {
    return res.json({authors: database.author});
});
/*
Route                       /authors
Description                Get a specific authors
Access                     PUBLIC
Parameter                  id
Methods                    Get

 */
booky.get("/authors/:id",(req,res) => {
    const getSpecificAuthor = database.author.filter(
     (author) => author.id === parseInt(req.params.id)
    );
 
    if(getSpecificAuthor.length === 0){
     return res.json({error: `No author found for id ${req.params.id}`});
    }
 
    return res.json({author: getSpecificAuthor});
 });

 /*
Route                       /authors/book
Description                Get all authors based on books
Access                     PUBLIC
Parameter                  isbn
Methods                    Get

 */
booky.get("/authors/book/:isbn", (req,res) =>{
    const getSpecificAuthor = database.author.filter(
        (author) => author.books.includes(req.params.isbn)
    );
    if(getSpecificAuthor.length === 0)
    {
       return res.json({erroe: `No author found for the bood ${req.params.isbn}`}); 
    }
    return res.json({authors: getSpecificAuthor})
});

/*
Route                       /publication
Description                Get all publication
Access                     PUBLIC
Parameter                  none
Methods                    Get

 */

booky.get("/publications",(req,res) => {
    return res.json({publications: database.publication})
});
booky.listen(3000,() => {
    console.log("Server is running");
});
