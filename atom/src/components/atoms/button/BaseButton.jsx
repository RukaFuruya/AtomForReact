import styled from "styled-components";

export const BaseButton =  styled.button`
//   background-color: #40514e;
  color: #fff;
  padding: 6px 24px;
  border: none;
  border-radius: 9999px;
  outline: none;
  cursor: pointer;
  opacity: 0.8;
  &:hover {
    opacity: 0.9; /* Hover時に少し透明度を変える */
  }
`;
