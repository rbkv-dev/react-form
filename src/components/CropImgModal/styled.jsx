import styled from "styled-components";

export const StyledModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

export const StyledModal = styled.div`
  padding: 30px 15px;
  width: 40%;
  height: fit-content;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  position: relative;
  border-radius: 14px;
`;

export const StyledHeader = styled.h1`
  margin: 30px 0 40px;
`;

export const StyledCropperWrapper = styled.div`
  width: 90%;
  height: 400px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  border-radius: 14px;
  overflow: hidden;
`;

export const StyledButton = styled.button`
  margin: 50px 14px 20px;
  cursor: pointer;
  width: 120px;
  height: 34px;
  border: 1px solid #515151;
  border-radius: 7px;
  font-size: 14px;
  border-radius: 7px;
  font-size: 16px;
  background-color: transparent;
  color: #515151;
  outline: none;
`;