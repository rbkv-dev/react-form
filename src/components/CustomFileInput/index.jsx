import React from 'react';
import { Field } from "formik";
import { StyledInputWrapper } from "./styled";

import { ReactComponent as CameraImg } from "assets/img/camera.svg";

export const CustomFileInput = ({name="name", onChange}) => {
  return (
    <StyledInputWrapper>
      <label htmlFor={name}><CameraImg /></label>
      <Field id={name} name={name}>
        {({ field }) => (
          <input id={name} type="file" {...field} accept="image/png, image/jpeg" onChange={onChange} />
          )}
      </Field>
    </StyledInputWrapper>
  )
}
