import React, { ChangeEvent, FocusEvent } from "react";

export interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  // 다른 버튼 관련 프로퍼티 추가
}

export interface InputProps {
  value: string;
  type: string;
  placeholder: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  errorLine?: boolean;
}