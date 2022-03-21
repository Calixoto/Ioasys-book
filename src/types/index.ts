export interface BooksProps {
  authors: string[];
  caregory: string;
  description: string;
  id: string;
  imageUrl: string;
  isbn10: string;
  isbn13: string;
  language: string;
  pageCount: number;
  published: number;
  publisher: string;
  title: string;
}

export type DataProps = {
  data: BooksProps[];
  page: number;
  totalPages: number;
};

export interface BookModalProps {
  data: DataProps;
  index: number;
  isOpen: boolean;
  onRequestClose: () => void;
}
