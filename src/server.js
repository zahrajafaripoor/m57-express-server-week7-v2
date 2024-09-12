require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const connection = require("./db/connection")
 
const app = express();
 
app.use(express.json());
 
connection();
 

 
//routes
 
app.post("/books/addbook", async (request, response) => {
    console.log("request.body: ", request.body.genre );
 
    const book = await Book.create({
        title: request.body.title,
        author: request.body.author,
        genre: request.body.genre,
    });
 
    response.send({ message:  "success", book: book });
});
 
// get all the books
 
app.get("/book/getallbooks", async (request, response) => {
    try {
    const books = await Book.find({});
    response.send({ message:  "success", allbooks: books });
    } catch (error) {
    console.log(error)
    }
})
 
 
// delete on book by title
 
app.delete("/book/deletebookbytitle", async (request, response) => {
 
    const deletedBook = await Book.deleteOne({bookName: request.body.bookName});
 
response.send({message: "success", deletedBook: deletedBook});
 
    // try {
    // const book = await Book.deleteOne({ name: 'book 1' });
    // response.send({ message: "success", bookbytitle, book});
    // } catch (error) {
    //     console.log(error)
    // }
});
 
app.get("/books/addbook", (request, response) => {
 
    response.send({message: "success" });
});
 
app.get("/books/allbooks" , (request, response) => {
    response.send( "success" );
})
 
 
 
app.listen(5001, () => {
    console.log("Server is listening on port 5001")
});
 
// import express from "express";