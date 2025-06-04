import { StaticImageData } from "next/image";

export type ProjectProp = {
    id: string;
    img: StaticImageData,
    category: string;
    title: string;
    description: string;
}