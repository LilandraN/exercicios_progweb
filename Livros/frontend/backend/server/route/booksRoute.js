const express = require('express');
const router = express.Router();
const booksService = require('../service/booksService');

// retorna os todos os livros inseridos no banco de dados
router.get('/books', async function(req, res) {
    const books = await booksService.getBooks();
    res.json(books);
});

//retorna o livro do id passado na URL
router.get('/book/:id', async function(req, res) {
    const book = await booksService.getBook(req.params.id);
    res.json(book);
});

router.delete('/book/:id', async function(req, res){
    const book = await booksService.deleteBook(req.params.id);
    return res.json([{message: 'registro excluido com sucesso'}]);
});

router.put('/book', async function(req, res){
    const book = req.body;
    const newBook = await booksService.saveBook(book.book);
    res.json(newBook);
});

module.exports = router;

