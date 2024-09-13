const Book = require('./Model');

const deleteAllBooks = async (request, response) => {
    try {
        const result = await Book.deleteMany({});
        response.send({ message: "All books deleted", result });
    } catch (error) {
        response.status(500).send({ message: "Error deleting all books", error });
    }
};

module.exports = deleteAllBooks;