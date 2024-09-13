const { response, request } = require('express');
const Book = require('./Model');

const updateBookAuthor = async (request, response) => {
    try {
        const { title, author } = request.body;
        const updatedBook = await Book.findOneAndUpdate(
            { title },
            { author },
            { new: true }
        );
        if (!updatedBook) return response.status(404).send({ message: "Book not found" });
        response.send({ message: "success", book: updatedBook });
    } catch (error) {
        response.status(500).send({ message: "Error updating book author", error });
    }
};

module.exports = updateBookAuthor;