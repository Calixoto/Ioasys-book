import styled from "styled-components";

export const Container = styled.a`
  display: flex;
  width: 17rem;
  border-radius: 0.25rem;
  box-shadow: 0px 6px 24px rgba(84, 16, 95, 0.13);
  background: var(--shape);
  cursor: pointer;

  .bookContainer {
    padding: 1.1875rem 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .descriptionContainer {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    div {
      display: flex;
      flex-direction: column;
      h2 {
        font-size: 0.875rem;
        font-weight: 500;
        line-height: 1.25rem;
        color: var(--text-title);
      }

      strong {
        font-size: 0.75rem;
        font-weight: 400;
        line-height: 1.25rem;
        color: var(--pink);
      }
    }
    span {
      font-size: 0.75rem;
      font-weight: 400;
      line-height: 1.25rem;
      color: var(--text-body);
    }
  }
`;
