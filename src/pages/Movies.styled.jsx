import styled from 'styled-components';

export const Form = styled.form`
  margin-bottom: 16px;
`;

export const Input = styled.input`
  margin-right: 16px;
  padding: 4px;
`;

export const Button = styled.button`
  border: 1px solid orange;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  &:hover,
  &:focus {
    color: white;
    background-color: orange;
  }
`;
