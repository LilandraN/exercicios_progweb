import React, { useState, useEffect } from 'react';
import './style.css';
import api from '../services/api';

function Livro() {
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        api.get('books',{}).then(response => {
            setLivros(response.data);
        });
    }, []);

    return (
        <div>
            <h1>Livros</h1>
            <ul className="lista">
                {
                    livros.map(livro => (
                        <li>
                            <p>Id: {livro.idlivro}</p>
                            <p>Nome: {livro.nome}</p>
                            <p>Editora: {livro.editora}</p>
                            <p>ISBN: {livro.isbn}</p>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
}

export default Livro;