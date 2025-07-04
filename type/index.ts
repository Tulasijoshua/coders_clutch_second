import { StaticImageData } from "next/image";

export type ProjectProp = {
    id: string;
    img: StaticImageData,
    category: string;
    title: string;
    description: string;
}

export type TeamMember = {
    id: string;
    name: string;
    title: string;
    img: StaticImageData;
    bio?: string; 
    linkedIn?: string;
    description: string[]
  }