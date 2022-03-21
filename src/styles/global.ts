import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --pink: #B22E6F;
    --blue: #5429CC;
    --green: #33CC95;
    
    --blue-light: #6933FF;
    --text-title: #333333;
    --text-authors: #AB2680;
    --text-body: #999999;
    --background: #FAEEEE;
    --shape: #FFFFFF;
      }
      
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    @media (max-width: 1080px) {
      font-size: 93.75%; 
    }
    @media (max-width: 720px) {
      font-size: 87.5%; 
    }
  }
  body {
    background: var(--background)
  }
  body, input, textarea, button {
    font-family: 'Heebo', sans-serif;
    font-weight: 400;
  }
  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  .reactBookModalOverlay {
    background: rgba(0, 0, 0, 0.4);
    backdrop-filter: blur(2px);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .reactBookModalContent {
    width: 100%;
    max-width: 769px;
    
    background: var(--shape);
    position: relative;
    border-radius: 0.25rem;

    @media(max-width: 780px) {
    max-height: 970px;
    max-width: 18rem;
    margin-top: 10rem;
  }

    &:focus-visible {
    outline-style: none;
    }
  }
`;
