import React  from 'react'
import { DefaultSeo } from 'next-seo';
import styled from 'styled-components'
import { MDXProvider } from '@mdx-js/react';
import { ThemeProvider, createGlobalStyle } from 'styled-components';
import SEO from './next-seo.config';

import Icon from 'react-icons-kit'
import { moon,sun } from 'react-icons-kit/feather'

import MDXComponents from './components/MDXComponents'

export const ThemeContext = React.createContext();

export const theme = {
    light: {
        background: '#fefefe',
        color: '#121212'
    },
    dark: {
        background: '#001321',
        color: '#fefefe'
    }
}
const GlobalStyle = createGlobalStyle`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
            background:${props=>props.theme.background}
        } 
        * {
          box-sizing: border-box;
        }
        a{
            text-decoration:none;
            color:inherit;
        }
`
export const ThemeWrapper = ({ children }) => {
    const [themed, setThemed] = React.useState(theme.dark);
    
    React.useEffect(()=>{
        const _theme = localStorage.getItem('theme'); 
        if(_theme === 'light'){
           setThemed(theme.light)
            localStorage.setItem('theme','light')
        }
        else{
            setThemed(theme.dark)
            localStorage.setItem('theme','dark')
        }
    },[themed])
    
    return <> 
        <ThemeContext.Provider value={{ themed, setThemed }}>
            <ThemeProvider theme={themed}>
                <MDXProvider components={MDXComponents}>
                    <GlobalStyle />
                    <DefaultSeo {...SEO} />
                    <Wrapper>
                    {children}
                    </Wrapper>
                </MDXProvider>
            </ThemeProvider>
        </ThemeContext.Provider>
    </>
}
export const ThemedButton = () => <ThemeContext.Consumer>
    {
        ({ themed, setThemed }) => <Button onClick={() => {
            themed === theme.light ? localStorage.setItem('theme','dark'): localStorage.setItem('theme','light')
            setThemed(themed === theme.light ? theme.dark : theme.light)
        }}> {themed === theme.light ? <Icon icon={moon} /> : <Icon icon={sun} />}</Button>
    }
</ThemeContext.Consumer>
const Button = styled.button`
            background:inherit;
            outline:none;
            border:none;
            color:${props => props.theme.color};
            padding:10px;
            cursor:pointer;
            border-radius:5px;
            transition:all .1s ease-in-out;  

` 

const Wrapper = styled.div`
background : ${props => props.theme.background};
color:${props => props.theme.color};
 max-width:800px;
 margin:auto;
          min-height: 100vh;
          padding: 0 0.5rem; 
`
