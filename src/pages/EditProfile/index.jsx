import React, { useState, useEffect } from 'react';

import { Formik, Field } from "formik";
import * as Yup from "yup";

import { CropImgModal } from "components/CropImgModal";

import { CustomTextInput } from "components/CustomTextInput";
import { CustomTextArea } from "components/CustomTextArea";
import { CustomFileInput } from "components/CustomFileInput";

import { StyledPageWrapper, StyledForm, StyledHeader, StyledAvatar, StyledButtonsContainer, StyledDeleteButton } from "./styled";
import { ReactComponent as DeleteImg } from "assets/img/delete.svg";


export const EditProfile = () => {
  const initialValues = {
    username: "",
    email: "",
    phone: "",
    height: "",
    weight: "",
    city: "",
    country: "",
    about_me: "",
    allow_contact: false,
  };
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
  const numberRegExp = /^[1-9]{1,5}$/;
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("This field is required!"),
    email: Yup.string().required("This field is required!").email("Invalid email!"),
    phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid!'),
    height: Yup.string().matches(numberRegExp, "A height must be a number"),
    weight: Yup.string().matches(numberRegExp, "A weight must be a number"),
    city: Yup.string(),
    about_me: Yup.string(),
  });

  const [imageSrc, setImageSrc] = useState(null);
  const [avatarImg, setAvatarImg] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const readFile = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.addEventListener('load', () => resolve(reader.result), false);
      reader.readAsDataURL(file);
    })
  }
  const onFileChange = async (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      let imageDataUrl = await readFile(file);
      setImageSrc(imageDataUrl);
      setShowModal(true);
      e.target.value = '';
    }
  }

  useEffect(() => {
    document.body.style.overflow = showModal ? "hidden" : "auto";
  }, [showModal])

  const onFormSubmit = (arg) => {
    let submitFormData = `avatar: ${avatarImg}\n`;
    // let data = Object.entries(arg);
    Object.entries(arg).map((elem) => {
      submitFormData += `${elem[0]}: ${elem[1]}\n`
    })
    
    alert(submitFormData);

  }

  return (
    <StyledPageWrapper>
      { imageSrc && showModal ? 
        ( <CropImgModal 
          imageSrc={imageSrc} 
          closeModal={() => {setImageSrc(null); setShowModal(false)}} 
          setAvatarImg={setAvatarImg} 
        /> ) : null }


      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        isInitialValid={false}
        onSubmit={onFormSubmit}
        validateOnChange={false}
      >
        <StyledForm>
          <StyledHeader>Edit profile</StyledHeader>

          <StyledAvatar avatar={!!avatarImg}>
            { avatarImg ? (<img src={avatarImg} alt=""/>) : null }

            <StyledButtonsContainer>
              <CustomFileInput name="avatar" onChange={onFileChange} />
              { avatarImg ? 
                ( <StyledDeleteButton onClick={() => setAvatarImg(null)}>
                    <DeleteImg />
                </StyledDeleteButton> ) : null }
              
            </StyledButtonsContainer>
          </StyledAvatar>

          <CustomTextInput name="username" placeholder="John" />
          <CustomTextInput name="email" placeholder="example@mail.com" />
          <CustomTextInput name="phone" placeholder="0123456789" />
          <CustomTextInput name="height" placeholder="175" />
          <CustomTextInput name="weight" placeholder="75" />
          <CustomTextInput name="city" placeholder="Denver"/>
          <CustomTextInput name="country" placeholder="USA" />
          <CustomTextArea name="about_me" />

          <label className="checkbox">
            <Field type="checkbox" name="allow_contact" />
            <span>Allow Session Girls to contact me</span>
          </label>


          <button className="submit-btn" type="submit">Save profile</button>
        </StyledForm>
      </Formik>
    </StyledPageWrapper>
  );
}