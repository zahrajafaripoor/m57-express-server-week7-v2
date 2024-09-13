const addBook = require('./AddController');
const getAllBooks = require('./getController');
const updateBookAuthor = require('./updateController');
const deleteBookByTitle = require('./DeleteController');
const deleteAllBooks = require('./DeleteAllController');
const removeFieldFromBook = require('./removeFieldController');

module.exports = {
    addBook,
    getAllBooks,
    updateBookAuthor,
    deleteBookByTitle,
    deleteAllBooks,
    removeFieldFromBook
};