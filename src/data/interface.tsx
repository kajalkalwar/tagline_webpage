import { ReactNode } from "react";
export interface TabInterface {
  id: string;
  label: ReactNode | string;
  title: string;
  para: string;
  pic1: string;
  pic2: string;
  btn: string;
}

export interface CardListInterface {
  id: string;
  paragraph: string;
  btn: string;
  color?: string;
}

export interface TestimonialsInterface {
  id: string;
  photo: string;
  para: string;
  name: string;
}
