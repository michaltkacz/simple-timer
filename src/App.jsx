import { createGlobalStyle } from 'styled-components';
import Timer from './Timer';

const GlobalStyle = createGlobalStyle`
  html, body {
    padding: 0;
    margin: 0;
    font-family: 'Roboto Mono', monospace;
    font-size: 1em;

    width: 100vw;
    min-height: 100vh;

    /* background: linear-gradient(to right, #2c3e50, #fd746c); */
    background: linear-gradient(to bottom, #0f0c29, #302b63, #24243e);

    display: flex;
    flex-flow: column;
    place-content: center;
    place-items: center;
    gap: 1rem;
  }

  * {
    box-sizing: border-box;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Timer />
    </>
  );
}

export default App;
