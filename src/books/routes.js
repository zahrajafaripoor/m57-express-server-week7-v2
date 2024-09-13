const { Router } = require("express");
const bookRouter = Router();
const { addBook, getAllBooks, updateBookAuthor, deleteBookByTitle, deleteAllBooks, removeFieldFromBook } = require("./controllers");

// POST - Add a book
bookRouter.post("/books/addbook", addBook);

// GET - Get all books
bookRouter.get("/books/getallbooks", getAllBooks);

// PUT - Update book author
bookRouter.put("/books/updateauthor", updateBookAuthor);

// DELETE - Delete a book by title
bookRouter.delete("/books/deletebookbytitle", deleteBookByTitle);

// DELETE - Delete all books
bookRouter.delete("/books/deleteallbooks", deleteAllBooks);

// PUT - Remove a specific field from a book
bookRouter.put("/books/removefield", removeFieldFromBook);

module.exports = bookRouter;
