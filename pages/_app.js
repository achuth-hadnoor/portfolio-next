import React  from 'react';
import { ThemeWrapper } from '../Theme';

const App = ({ Component, pageProps }) => {
    return (
        <ThemeWrapper>
            <Component {...pageProps} />
        </ThemeWrapper>
    );
};

export default App;