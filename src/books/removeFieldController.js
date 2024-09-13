const Book = require('./Model');

const removeFieldFromBook = async (request, response) => {
    const { title, field } = request.body;

    try {
        const updatedBook = await Book.findOneAndUpdate(
            { title },
            { $unset: { [field]: "" } },
            { new: true }
        );
        response.send({ message: "success", book: updatedBook || {} });
    } catch (error) {
        response.status(500).send({ message: "Error removing field", error });
    }
};

module.exports = removeFieldFromBook;