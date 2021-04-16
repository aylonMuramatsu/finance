import styled from "styled-components";
import appConfig from "../../system/app.config";

export const Card = styled.div`
  display: flex;
  width: auto;
  box-sizing: border-box;
  background-color: ${appConfig.theme.cardBG};
  padding: 10px 25px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  border-radius: 20px 20px 20px 20px;

  ${(props) =>
    props.single
      ? `
    min-height: 80px;
    max-width: ${props.maxWidth}px;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    flex-basis:100%;
    text-align:center;
    color: ${appConfig.theme.grey1};
    margin: 5px;
    `
      : ``}
`;

export const CardSingleTitle = styled.h3`
  font-weight: 600;
  font-size: 0.88rem;
  display: table;
  width: 100%;
  margin: 2px;
  color: ${appConfig.theme.primaryColor};
`;
export const CardSingleValue = styled.small`
  font-size: 1.1rem;
  text-align: center;
  width: 100%;
  color: ${appConfig.theme.secondaryColor};
`;
