import React, { useState, useCallback } from 'react';
import { StyledModalWrapper, StyledModal, StyledHeader, StyledCropperWrapper, StyledButton } from "./styled";

import Cropper from 'react-easy-crop';
import getCroppedImg from 'helpers/cropImg'

export const CropImgModal = ({imageSrc, closeModal, setAvatarImg}) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels)
  }, []);

  const showCroppedImage = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        imageSrc,
        croppedAreaPixels,
      )
      setAvatarImg(croppedImage)
    } catch (e) {
      console.error(e)
    }
  }, [croppedAreaPixels, imageSrc, setAvatarImg]);

  return (
    <StyledModalWrapper>
      <StyledModal>
        <StyledHeader>Crop image</StyledHeader>
        <StyledCropperWrapper>
          <Cropper
            image={imageSrc}
            crop={crop}
            cropShape="round"
            zoom={zoom}
            zoomSpeed="0.2"
            aspect={1 / 1}
            showGrid={false}
            onCropChange={setCrop}
            onCropComplete={onCropComplete}
            onZoomChange={setZoom}
          />
        </StyledCropperWrapper>
        <div>
          <StyledButton onClick={() => {showCroppedImage(); closeModal();}}>Save</StyledButton>
          <StyledButton onClick={closeModal}>Cancel</StyledButton>
        </div>
      </StyledModal>
    </StyledModalWrapper>
  )
}
