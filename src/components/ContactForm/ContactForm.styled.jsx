import styled from 'styled-components';

export const InnerWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  max-width: 400px;
`;

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
  border: 1px solid #000;
  padding: 20px;
  border-radius: 4px;
  width: 250px;
  margin: 0 auto;
  text-align: left;
`;

export const Label = styled.label`
  margin-bottom: 10px;
  color: grey;
  &:last-child {
    margin-bottom: 0px;
  }
`;

export const Input = styled.input`
  width: 100%;
`;

export const Button = styled.button`
  margin: 0 auto;
  width: 200px;
  background-color: grey;
  color: #fff;
  border: none;
  border-radius: 20px;
  padding: 5px 10px;
  font-size: 18px;
  &:hover {
    background-color: #0a0a23;
  }
`;
