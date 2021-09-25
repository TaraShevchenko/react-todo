import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './reactTodo.scss'

import Header from "./components/Header/Header";
import TodoItem from "./components/TodoItem/TodoItem";
import TodoModal from "./components/TodoModal/TodoModal";

const ReactTodo = () => {
    return (
        <div className="dark">
            <div className="container">
                <Header />
                <main className="main">
                    <TodoItem />
                </main>
                <TodoModal />
            </div>
        </div>
    );
};

export default ReactTodo;