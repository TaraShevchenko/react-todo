import React from 'react';
import './TodoModal.scss'

const TodoModal = () => {
    return (
        <div className="todoModal__wrapper">
            <div className="todoModal__background"></div>
            <div className="todoModal">
                <div className="todoModal__header">
                    <div className="todoModal__header-title">
                        Add New Todo
                    </div>
                    <div className="todoModal__header-close">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                             viewBox="0 0 16 16">
                            <path
                                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TodoModal;