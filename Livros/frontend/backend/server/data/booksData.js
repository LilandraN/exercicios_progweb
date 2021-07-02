const database = require('../database/database');

exports.getBooks = function() {
    return database.query('select * from livro');
}

exports.getBook = function(bookID) {
    return database.query('select * from livro where idlivro = $1',[bookID]);
}

exports.deleteBook = function(bookID) {
    return database.none('delete from livro where idlivro = $1',[bookID]);
}

exports.saveBook = function(book) {
    return database.one('insert into livro (idlivro, nome, editora, isbn, quantidade, assunto, autor) values ($1, $2, $3, $4, $5, $6, $7) returning *',
    [book.id, book.nome, book.editora, book.isbn, book.editora, book.editora, book.editora]);
}

