const { response } = require('express');
const Book = require('./Model');

const getAllBooks = async (request, response) => {
    try {
        const books = await Book.find({});
        response.send({ message: "success", allbooks: books });
    } catch (error) {
        response.status(500).send({ message: "Error fetching books", error });
    }
};

module.exports = getAllBooks;