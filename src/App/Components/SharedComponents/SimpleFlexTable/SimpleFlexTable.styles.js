import styled from "styled-components";

export const FlexTable = styled.div`
  margin-top: 0.75em;
  width: 90%;
  height: 50%;
  display: flex;
  font-size: 1.25em;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background: #fff;
`;

export const FlexRow = styled.div`
  box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
  flex: 1 1 auto;
  background: #fff;
  width: 100%;
  margin: 0;
  display: flex;
  flex-direction: row;
  color: #000;
  z-index: 100;
  span {
    padding: 10px;
  }
  span:first-child {
    flex: 0 0 35%;
    background: #cccccc;
    border: 1px #929292 solid;
  }
  span:last-child {
    flex: 0 0 65%;
  }
  p {
    margin: 0;
  }
`;
