import styled from 'styled-components';

export const Button = styled.button`
  background-color: #e8c8fa;
  margin-right: 10px;
  color: #2c2430;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 18px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s ease;
  cursor: pointer;
  border: none;
  :hover {
    background-color: #2c2430;
    color: #e8c8fa;
  }
`;
