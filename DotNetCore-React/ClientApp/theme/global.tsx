import { injectGlobal } from 'styled-components';
import { color } from './colors';

injectGlobal`
html {
font-size: 16px;
}

body {
color: ${color.secondary};
font-family: 'Rubik', sans-serif;
}

a:hover, a:visited, a:active, a:focus {
color: white;
text-decoration: none;
}
`