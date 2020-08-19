import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    }

    html {
        --clr-bg: ${({ theme }) => theme.colors.bg};
        --clr-bg-light: ${({ theme }) => theme.colors.bgLight};
        --clr-text: ${({ theme }) => theme.colors.text};
        --clr-accent: ${({ theme }) => theme.colors.accent};
        font-size: 62.5%;

        @media ${props => props.theme.mq.tab} {
            font-size: 71.85%;
        }
    }

    body {
        font-family: 'Merriweather', sans-serif;
        box-sizing: border-box;
        background-color: var(--clr-bg);
        color: var(--clr-text);
    }

    button {
        font-family: 'Merriweather', sans-serif;
        background: none;
        color: var(--clr-text);
        border: none;
        outline: none;
        cursor: pointer;
    }

    a {
        text-decoration: none;
        color: var(--clr-text);
        /* cursor: pointer; */
    }
`

export default GlobalStyles
