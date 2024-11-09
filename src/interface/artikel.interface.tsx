import { Media } from "./media.interface";

  export interface Artikel {
    id: number;
    uuid: string;
    bannerId: string | null;
    title: string;
    description: string;
    date: Date;
    status: string;
    type: string;
    link: string;
    createdAt: string;
    updatedAt: string;
    media: Media[];
    banner: Media;
  }
  
  export interface GetAllArtikelResponse {
    message: string;
    status: number,
    total: number,
    per_page: number,
    current_page: number,
    last_page: number,
    from: number,
    to: number,
    data: Artikel[];
  }
  
  export interface GetDetailArtikelResponse {
    message: string;
    data: Artikel;
  }
  
  export interface FormState {
    id?: number; 
    name_note: string;
    description_note: string;
  }
  
  export interface ResponseActionArtikel {
    status: number;
    message: string;
  }
  