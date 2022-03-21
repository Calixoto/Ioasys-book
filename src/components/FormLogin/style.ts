import styled from "styled-components";

export const Container = styled.div`
  max-width: 23rem;
  margin: 17rem auto 17rem 7.1875rem;
  color: #ffffff;
  position: relative;

  .logoContainer {
    display: flex;
    gap: 1rem;
    margin-bottom: 3.125rem;

    img {
      width: 6.5rem;
      height: 2.25rem;
    }

    h1 {
      font-size: 1.75rem;
      font-weight: 300;
      line-height: 2.5rem;
    }
  }

  form {
    display: grid;
    gap: 1rem;

    label {
      position: relative;

      span {
        position: absolute;
        opacity: 0.5;
        z-index: 1;
        font-size: 0.75rem;
        margin: 0.5rem auto auto 1rem;
      }

      input {
        width: 100%;
        padding: 1.75rem 8rem 0.5rem 1rem;
        background: rgba(0, 0, 0, 0.32);
        border-radius: 4px;
        border: none;
        backdrop-filter: blur(2px);
        color: #ffffff;

        font-size: 1rem;
        line-height: 1.5rem;

        &:focus-visible {
          outline: none;
        }
      }

      button {
        position: absolute;

        right: 12px;
        bottom: 12px;
        padding: 0.5rem 1.25rem;
        background: #ffffff;
        border: none;
        border-radius: 2.75rem;

        font-size: 1rem;
        line-height: 1.25rem;
        font-weight: 500;
        color: var(--pink);

        cursor: pointer;

        transition: linear 0.2s;

        &:hover {
          background: var(--pink);
          color: #ffffff;
        }
      }
    }
  }

  @media (max-width: 720px) {
    margin-left: 3rem;
  }

  @media (max-width: 600px) {
    margin-left: 1rem;
  }

  @media (max-width: 375px) {
    margin-right: 1rem;
  }
`;

export const tooltipError = styled.span`
  display: block;
  position: relative;
`;

export const Error = styled.div`
  &::before {
    content: "";
    position: absolute;
    left: 1rem;
    top: -0.5rem;
    width: 0;
    height: 0;
    border-left: 0.5rem solid transparent;
    border-right: 0.5rem solid transparent;
    border-bottom: 0.5rem solid rgba(255, 255, 255, 0.4);
  }
  padding: 1rem;
  background: rgba(255, 255, 255, 0.4);
  border-radius: 4px;
  position: relative;
  margin-top: 1.5rem;
  font-family: Heebo;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 16px;
  width: 240px;
  color: #ffffff;
`;
