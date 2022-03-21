import styled from "styled-components";

export const Container = styled.div`
  max-width: 1136px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  position: relative;
  padding-bottom: 3rem;

  .paginationContainer {
    display: flex;
    align-items: center;
    gap: 1rem;
    position: absolute;
    right: 1px;
    bottom: 1px;

    span {
      font-size: 0.75rem;
      font-weight: 400;
      line-height: 1.25rem;

      strong {
        font-weight: 500;
      }
    }

    div {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      button {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 2rem;
        height: 2rem;
        border: 1px solid rgba(51, 51, 51, 0.2);
        border-radius: 50%;
        background: transparent;
        cursor: pointer;

        color: var(--text-title);

        &:first-child {
          transform: matrix(-1, 0, 0, 1, 0, 0);
        }

        &:disabled {
          opacity: 0.5;
          cursor: default;
        }
      }
    }
  }

  @media (max-width: 1140px) {
    grid-template-columns: repeat(3, 1fr);
    margin: 0 1rem;
  }

  @media (max-width: 830px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 530px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
