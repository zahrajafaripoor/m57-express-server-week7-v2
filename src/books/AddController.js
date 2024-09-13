const Book = require('./Model');

const addBook = async (request, response) => {
    try {
        const book = await Book.create(req.body);
        response.send({ message: "success", book });
    } catch (error) {
        response.status(500).send({ message: "Error adding book", error });
    }
};

module.exports = addBook;