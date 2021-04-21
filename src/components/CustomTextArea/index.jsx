import React from 'react';
import { Field, ErrorMessage } from "formik";
import { StyledInputWrapper,StyledTextArea } from "./styled";

export const CustomTextArea = ({name="name"}) => {
  return (
    <StyledInputWrapper>
      <label htmlFor={name}>{name && (name[0].toUpperCase() + name.slice(1)).replace("_", " ")}</label>
      <Field id={name} name={name}>
        {({ field }) => (<StyledTextArea id={name} type="text" {...field} />)}
      </Field>
      <span className="error-msg"><ErrorMessage name={name} /></span>
    </StyledInputWrapper>
  )
}
