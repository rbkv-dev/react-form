import styled from "styled-components";

export const StyledInputWrapper = styled.div`
  width: 44px;
  height: 44px;
  background-color: #ffffffBF;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 8px;
  label {
    cursor: pointer;
    width: 32px;
    height: 32px;
  }
  input {
    width: 0;
    height: 0;
    opacity: 0;
    position: absolute;
    z-index: -1;
  }
`;
