import styled from "styled-components";
import { Form } from "formik";

export const StyledPageWrapper = styled.div`

`;

export const StyledForm = styled(Form)`
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 30px 0px;
  margin: 0 auto;
  & .checkbox {
    align-self: flex-start;
    display: flex;
    justify-content: center;
    align-items: center;
    & > input {
      width: 20px;
      height: 20px;
      margin: 0;
      margin-right: 14px;
    }
  }
  & .submit-btn {
    margin-top: 30px;
    width: 40%;
    height: 34px;
    outline: none;
    border: none;
    background-color: #e1e1e1;
    color: #515151;
    border-radius: 7px;
    font-size: 16px;
    text-transform: uppercase;
    cursor: pointer;
  }
`;

export const StyledHeader = styled.h1`
  margin: 10px 0 0 0;
`;

export const StyledAvatar = styled.div`
  margin: 14px 0px;
  width: 200px;
  height: 200px;
  border: 1px solid #515151;
  border-radius: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  & img {
    width: 100%;
    height: 100%;
  }
  ${({avatar}) => avatar ? `
    &:hover {
      & > div {
        opacity: 1;
      }
    }
  ` : `
      & > div {
        opacity: 1;
      }
  `};
`;

export const StyledButtonsContainer = styled.div`
  width: fit-content;
  height: fit-content;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0;
  transition: all .2s;
`;

export const StyledDeleteButton = styled.button`
  cursor: pointer;
  width: 44px;
  height: 44px;
  background-color: #ffffffBF;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 8px;
  border: none;
  outline: none;
  & svg {
    width: 32px;
    height: 32px;
  }
`;