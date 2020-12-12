import { FC } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Home from './components/Home';

interface Props {}
const App: FC<Props> = () => {
  return (
    <>
      <Router>
        <Route component={Home} path="/" exact />
      </Router>
      <GlobalStyle />
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: black;
    font-family: Roboto;
  }
`;

export default App;
