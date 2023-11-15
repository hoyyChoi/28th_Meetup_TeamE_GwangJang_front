import styled from "styled-components";

import { ButtonProps } from "@/types/index.ts";

export const KakaoBtn = styled.button<ButtonProps>`
  cursor: pointer;
  box-sizing: border-box;

  display: flex;
  justify-content: center;
  align-items: center;
  width: 370px;
  height: 56px;
  border-radius: 5px;
  background: #ffe812;
  gap: 4px;
  border: none;
  font-size: var(--text_b1);
  font-weight: 600;
`;

export const TestBtn = styled.button<ButtonProps>`
  cursor: pointer;

  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  width: 370px;
  height: 56px;
  border-radius: 5px;
  border: none;

  //
  background: var(--Main_Blue, #0084ff);
  color: #fff;
  text-align: center;
  font-size: var(--text_b1);
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 100% */
  margin-top: 40px;
`;

export const SubscribeBtn = styled.button`
  border-radius: 85px;
  border: 1px solid var(--Main_Blue, #0084ff);
  display: flex;
  padding: 15px 17px 15px 20px;
  justify-content: center;
  align-items: center;
  color: var(--Main_Blue, #0084ff);
  background-color: var(--White);
  font-size: var(--text_b1);
  font-weight: 600;
  line-height: 18px;
  gap: 5px;
  box-sizing: content-box;
  cursor: pointer;
`;
