import React , { useState , useContext } from 'react';

const themes = {
    light : {
        foreground:'#000',
        background:'#eee'
    },
    dark : {
        foreground:'#fff',
        background:'#222'
    }
};

const ThemeContext = React.createContext({
    theme:themes.light,
    toggle : () => {
        
    }
})

const ThemeButton = () => {
    const context = useContext(ThemeContext);

    const toggle = () => {
        context.toggle()
    }

    return <button style={{
        fontSize:'32px',
        color : context.theme.foreground,
        backgroundColor : context.theme.background
    }} onClick={
        toggle
    }>click me</button>
}

const ToolBar = () => {
    return <ThemeButton />
}

export default function ContextExample(){
    const [theme,setTheme] = useState(themes.light);

    return <ThemeContext.Provider value={{
        theme,
        toggle : () => {
            setTheme( (theme) => {
                return theme == themes.light ? themes.dark : themes.light
            })
        }
    }}>
        <ToolBar />
    </ThemeContext.Provider>
}

