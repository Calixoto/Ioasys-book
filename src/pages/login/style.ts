import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  height: 100vh;
  width: 100vw;
  .imageBackground {
    position: absolute;
    object-fit: cover;
    width: 100%;
    height: 100% !important;
    height: 98vh;
    z-index: -1;
  }
`;
