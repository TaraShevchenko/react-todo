import React from 'react';
import './TodoModal.scss'
import {useDispatch, useSelector} from "react-redux";
import {addTheme} from "../../store/themesSlice";

const TodoModal = ({setOpened, activeTheme, setTheme}) => {

    const themes = useSelector((state) => state.themesReducer);
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault()
        const newTheme = {
            theme: {},
            colors: []
        }
        for (let i = 0; i < e.target.length - 1; i++) {
            if (i === 0) {
                newTheme.theme = {
                    description: "theme name",
                    value: e.target[i].value
                }
            }
            if (i !== 0) {
                newTheme.colors = [...newTheme.colors, {
                    ...themes[0].colors[i - 1],
                    value: e.target[i].value
                }]
            }
        }
        dispatch(addTheme(newTheme))
    }

    const changeTheme = (themeName, themes, setTheme) => {
        for (let i = 0; i < themes.length; i++) {
            if (themes[i].theme.value === themeName) {
                const activeTheme = themes[i].colors;
                for (let j = 0; j < activeTheme.length; j++) {
                    document.body.style.setProperty(activeTheme[j].variable, activeTheme[j].value);
                }
            }
        }
        setTheme(themeName);
    }

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
                        {themes.map((theme, index) => <li>
                            <span key={index + theme.theme.value}
                                  className={`${activeTheme === theme.theme.value ? "active" : ""} dropdown-item`}
                                  onClick={() => changeTheme(theme.theme.value, themes, setTheme)}>{theme.theme.value}</span>
                        </li>)}
                    </ul>
                </div>
                <div className="todoModal__block">
                    <div className="todoModal__block-title">New Theme</div>
                    <form onSubmit={(e) => handleSubmit(e)}>
                        {themes.map((theme, index) => index === 0 ? <div>
                            <div key={index + theme.theme.description} className="todoModal__block-input">
                                <label>{theme.theme.description}</label>
                                <input type="text" className="form-control"/>
                            </div>
                            {theme.colors.map((color, index) => <div key={index + color.description}
                                                                     className="todoModal__block-input">
                                <label>{color.description}</label>
                                <input type="text" className="form-control"/>
                            </div>)}
                        </div> : '')}
                        <button type="submit" className="mt-3 btn btn-primary">
                            Create new theme
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default TodoModal;