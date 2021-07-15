import styled from "styled-components";

export const Table = styled.table`
  caption-side: top;
  border: none;
  border-collapse: collapse;
  width: 75%;
  color: #330000;
  font-size: 1.5rem;

  caption-side: bottom;
  td,
  th {
    border: none;
  }
  /* td,
  th {
    border: 1px solid;
  } */

  td {
    padding: 5px 10px;
  }
  tr td:first-child {
    border-top-left-radius: 15px;
    border-bottom-left-radius: 15px;
  }
  tr td:last-child {
    border-top-right-radius: 15px;
    border-bottom-right-radius: 15px;
  }
  tbody tr {
    :hover {
      color: #ffffff;
      background: linear-gradient(
        120deg,
        rgba(255, 102, 0, 1) 47%,
        rgba(0, 0, 0, 1) 47%
      );
    }
  }
`;
