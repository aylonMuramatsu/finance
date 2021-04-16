import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  transition: all 0.3s;
  grid-template-columns: ${(props) => (props.minimal ? "45px" : "230px")} 1fr;
  grid-template-rows: 50px 1fr;
  grid-template-areas:
    "sidebar header"
    "sidebar main";
  height: 100vh;
`;
