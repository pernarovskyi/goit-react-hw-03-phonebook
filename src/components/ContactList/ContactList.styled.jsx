import styled from 'styled-components';

export const List = styled.ul`
  margin: 0 auto;
  padding: 0;
  list-style: none;
  width: 400px;
`;

export const Item = styled.li`
  margin: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Button = styled.button`
  font-size: 11px;
  font-weight: 200;
  padding: 8px 20px;
  border-radius: 4px;
  border: 0.5px solid lightgrey;
  color: grey;
  &:hover {
    border: 0.5px solid grey;
    color: #000;
    background-color: #c4c3c3;
    font-weight: 400;
  }
`;
