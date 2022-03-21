import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  /* flex-direction: column; */

  @media(max-width: 780px) {
    flex-direction: column;

  }

  .closeModal {
  position: absolute;
  top: -140px;
  right: -340px;
  width: 50px;
  border: none;
  }

  .bookContainer {
    padding: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 21.8125rem; //349px

      @media(max-width: 780px) {
    width: 15rem;
    
  }
    }
  }

  .descriptionContainer {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 3rem;
    

    max-height: 666px;
      overflow: auto;
    

    &::-webkit-scrollbar {
        width: 4px;
        height: 4px;
      }

      &::-webkit-scrollbar-track {
        background: inherit;
      }

      &::-webkit-scrollbar-thumb {
        background-color: var(--pink);    
        border-radius: 1.875rem;       
        border: 3px solid var(--pink);
        
      }

    .descriptionHeader {
      h2 {
        font-size: 1.75rem;
        font-weight: 500;
        line-height: 2.5rem;
        color: var(--text-title);
        text-transform: uppercase;
      }

      strong {
        font-size: 0.75rem;
        font-weight: 400;
        line-height: 1.25rem;
        color: var(--pink);
      }
    }

    .descriptionBody {
      display: flex;
      flex-direction: column;

      h2 {
        font-size: 0.75rem;
        line-height: 1.875rem;
        font-weight: 500;
        color: var(--text-title);
        text-transform: uppercase;
      }

      span {
        display: flex;
        /* gap: auto; */
        font-size: 0.75rem;
        line-height: 1.25rem;
        font-weight: 400;
        color: var(--text-body);
      }
        strong {
        font-size: 0.75rem;
        line-height: 1.25rem;
        font-weight: 500;
        color: var(--text-title);
        margin-right: auto;
        
      }
        }
      }
    }

    .descriptionFooter {
      
      h2 {
        font-size: 0.75rem;
        line-height: 1.25rem;
        font-weight: 500;
        color: var(--text-title);
        text-transform: uppercase;
      }
      span {
        font-size: 0.75rem;
        line-height: 1.875rem;
        font-weight: 400;
        color: var(--text-title);
      }
`;
