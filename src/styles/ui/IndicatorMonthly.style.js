import styled from "styled-components";

export const IndicatorMonthly = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-basis: 100%;
  flex-direction: row;
  width: 100%;
  & div {
    margin: 5px;
    width: auto;
    min-height: 300px;
    flex-basis: calc(50% - 10px);
  }
`;
