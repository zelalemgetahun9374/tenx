import Styled from "styled-components";

export const Button = Styled.button`
  width: 100px;
`;

export const BoxContainer = Styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Box = Styled.div`
  width: 100%;
  margin: 1px;
  min-height: 20px;
  background-color: ${({ bg }) => bg || "gray"};
`;

export const FormContainer = Styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  height: auto;
  max-width: 400px;
`;

export const Input = Styled.input`
  text-align: right;
`;

export const Main = Styled.div`
  display: flex;
  justify-content: center;
  /* max-height: 100vh; */
`;

