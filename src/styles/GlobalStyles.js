import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  :root {
    --bg: #f6f1e7;
    --card: #ffffff;
    --primary: #1f7a8c;
    --primary-dark: #022b3a;
    --accent: #ff7f50;
    --text: #2b3a42;
    --muted: #7a8a92;
    --border: #e1d9c8;
    --visited: #2a9d8f;
    --planned: #e9a03b;
    --wishlist: #c9638a;
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    min-height: 100vh;
    font-family: "Chilanka", cursive;
    font-size: 18px;
    line-height: 1.5;
    color: var(--text);
    background: linear-gradient(180deg, #e3f1f4 0%, var(--bg) 280px);
  }

  h1, h2, h3, h4 {
    font-family: "Autour One", system-ui;
    color: var(--primary-dark);
    margin: 0;
    line-height: 1.25;
  }

  p {
    margin: 0;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  input, select, button {
    font-family: inherit;
    font-size: 17px;
  }
`;
