const Book = require('./Model');

const deleteBookByTitle = async (req, res) => {
    try {
        const deletedBook = await Book.deleteOne({ title: req.body.title });
        res.send({ message: "success", deletedBook });
    } catch (error) {
        res.status(500).send({ message: "Error deleting book", error });
    }
};

module.exports = deleteBookByTitle;
