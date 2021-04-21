import React from 'react';
import { ErrorMessage } from "formik";
import { StyledInputWrapper, StyledTextInput } from "./styled";

export const CustomTextInput = ({name="name", placeholder=""}) => {
  return (
    <StyledInputWrapper>
      <label htmlFor={name}>{name && (name[0].toUpperCase() + name.slice(1)).replace("_", " ")}</label>
      <StyledTextInput id={name} name={name} placeholder={placeholder} />
      <span className="error-msg"><ErrorMessage name={name} /></span>
    </StyledInputWrapper>
  )
}
