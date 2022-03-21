import styled from "styled-components";

export const Container = styled.nav`
  max-width: 1136px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 2rem;
  margin-bottom: 2.75rem;

  .logoContainer {
    display: flex;
    gap: 1rem;

    h1 {
      font-size: 1.75rem;
      font-weight: 300;
      line-height: 2.5rem;
    }
  }

  .userContainer {
    display: flex;
    align-items: center;
    gap: 1rem;
    span {
      text-align: right;
      font-size: 0.75rem;
      line-height: 1rem;

      strong {
        font-weight: 500;
      }

      @media (max-width: 409px) {
        display: none;
      }
    }
    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 2rem;
      height: 2rem;
      border: 1px solid rgba(51, 51, 51, 0.2);
      border-radius: 50%;
      cursor: pointer;

      transition: linear 0.2s;

      &:hover {
        background: rgba(255, 0, 0, 0.2);
        border-color: rgba(255, 0, 0, 0.9);
      }
    }
  }

  @media (max-width: 1140px) {
    margin: 0 1rem;
  }
`;
