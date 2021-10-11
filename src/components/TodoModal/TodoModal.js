import React from 'react';
import './TodoModal.scss'

const TodoModal = ({setOpened, initialTheme, changeTheme}) => {

    const themes = [
        initialTheme,
    ]

    return (
        <div className="todoModal__wrapper">
            <div className="todoModal__background"></div>
            <div className="todoModal">
                <div className="todoModal__header">
                    <div className="todoModal__header-title">
                        Setting
                    </div>
                    <div onClick={() => setOpened(false)} className="todoModal__header-close">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor"
                             viewBox="0 0 16 16">
                            <path
                                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </div>
                </div>

                <div className="todoModal__block">
                    <div className="todoModal__block-title">Themes</div>
                    <ul className="dropdown-menu show">
                        <li>
                            <div className="dropdown-item active">Dark</div>
                        </li>
                        <li>
                            <div className="dropdown-item">Title</div>
                        </li>
                        <li>
                            <div className="dropdown-item">Title</div>
                        </li>
                        <li>
                            <div className="dropdown-item">Title</div>
                        </li>
                    </ul>
                </div>
                <div className="todoModal__block">
                    <div className="todoModal__block-title">New Theme</div>

                    <div className="todoModal__block-input">
                        <label>Title</label>
                        <input type="text" className="form-control"/>
                    </div>

                    <button className="mt-3 btn btn-primary">
                        Create new theme
                    </button>

                </div>
            </div>
        </div>
    );
};

export default TodoModal;