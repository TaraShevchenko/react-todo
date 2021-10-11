import React, {useState} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './reactTodo.scss'

import Header from "./components/Header/Header";
import TodoItem from "./components/TodoItem/TodoItem";
import TodoModal from "./components/TodoModal/TodoModal";

const ReactTodo = () => {


    const newTheme = {
        theme: {description: "theme name", value: "dark"},
        colors: [
            {
                description: "Primary color",
                variable: "--primary",
                value: "#236591"
            },
            {
                description: "Secondary color",
                variable: "--secondary",
                value: "#1b4e70"
            },
            {
                description: "Body background",
                variable: "--bodyBackground",
                value: "#18191b"
            },
            {
                description: "Todo background",
                variable: "--todoBackground",
                value: "#1e2022"
            },
            {
                description: "Splitter",
                variable: "--splitter",
                value: "#424242"
            },
            {
                description: "Text Main color",
                variable: "--textMain",
                value: "#8f8f8f"
            },
            {
                description: "Text Muted color",
                variable: "--textMuted",
                value: "#d0d0d0"
            },
            {
                description: "Text White color",
                variable: "--textWhite",
                value: "#d0d0d0"
            },
            {
                description: "Todo item box-shadow",
                variable: "--todoShadow",
                value: "#1b1d1f"
            },
            {
                description: "Modal underlay",
                variable: "--modalUnderlay",
                value: "rgba(0, 0, 0, 0.5)"
            },
        ]
    }

    const [theme, setTheme] = useState('light');
    const [open, setOpened] = useState(false);

    const changeTheme = (newTheme) => {
        for (let i = 0; i < newTheme.colors.length; i++) {
            document.body.style.setProperty(newTheme.colors[i].variable, newTheme.colors[i].value);
        }
        setTheme(newTheme.theme.value);
    }


    return (
        <div className={theme + "-theme"}>

            <button onClick={() => setOpened(true)} className="settings">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                     className="bi bi-gear" viewBox="0 0 16 16">
                    <path
                        d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492zM5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0z"/>
                    <path
                        d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52l-.094-.319zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115l.094-.319z"/>
                </svg>
            </button>

            <div className="container">
                <Header/>
                <main className="main">
                    <TodoItem/>
                </main>
                {open && <TodoModal setOpened={setOpened} initialTheme={newTheme} changeTheme={changeTheme}/>}

                {/*<button className="btn btn-primary" onClick={() => changeTheme(newTheme)}>set dark</button>*/}
            </div>
        </div>
    );
};

export default ReactTodo;