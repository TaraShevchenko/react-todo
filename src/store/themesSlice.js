import { createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        theme: {
            description: "theme name",
            value: "light"
        },
        colors: [
            {
                description: "Primary color",
                variable: "--primary",
                value: "#00365a"
            },
            {
                description: "Secondary color",
                variable: "--secondary",
                value: "#001e31"
            },
            {
                description: "Body background",
                variable: "--bodyBackground",
                value: "#f8f8f8"
            },
            {
                description: "Todo background",
                variable: "--todoBackground",
                value: "#ffffff"
            },
            {
                description: "Splitter",
                variable: "--splitter",
                value: "#d7d7d7"
            },
            {
                description: "Text Main color",
                variable: "--textMain",
                value: "#3a3a3a"
            },
            {
                description: "Text Muted color",
                variable: "--textMuted",
                value: "#808080"
            },
            {
                description: "Text White color",
                variable: "--textWhite",
                value: "#ffffff"
            },
            {
                description: "Todo item box-shadow",
                variable: "--todoShadow",
                value: "#e6e6e6"
            },
            {
                description: "Modal underlay",
                variable: "--modalUnderlay",
                value: "rgba(0, 0, 0, 0.5)"
            },
        ]
    },
    {
        theme: {
            description: "theme name",
            value: "dark"
        },
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
    },
]

export const themesSlice = createSlice({
    name: 'themes',
    initialState,
    reducers: {
        addTheme: (state, newTheme) => {
            state.push(newTheme.payload)
        }
    },
})

export const { addTheme } = themesSlice.actions

export default themesSlice.reducer