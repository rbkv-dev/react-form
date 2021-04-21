import styled from "styled-components";
import { Field } from "formik";

export const StyledInputWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

export const StyledTextInput = styled(Field)`
  margin: 4px 0px 0px;
  padding: 0 12px;
  width: 100%;
  height: 34px;
  border: 1px solid #515151;
  border-radius: 7px;
  font-size: 14px;
  line-height: 16px;
  color: #515151;
  outline: none;
  &::placeholder {
    color: #b1b1b1;
  }
`;