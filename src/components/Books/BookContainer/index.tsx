import { useState } from "react";
import { DataProps } from "../../../types";
import { BookModal } from "../../Modal";
import { BookCard } from "../BookCard";
import { Container } from "./style";

type DataBooksProps = {
  data: DataProps;
  nextPage: () => void;
  prevPage: () => void;
};

export function BooksContainer({ data, nextPage, prevPage }: DataBooksProps) {
  const [isOpenBookModal, setIsOpenBookModal] = useState(false);
  const [bookIndex, setBookIndex] = useState(0);

  function handleOpenBookModal(i: number) {
    setIsOpenBookModal(true);
    setBookIndex(i);
  }

  function handleCloseBookModal() {
    setIsOpenBookModal(false);
  }
  return (
    <Container>
      <BookCard data={data?.data} openModal={handleOpenBookModal} />
      <div className="paginationContainer">
        <span>
          Página <strong>{data?.page}</strong> de{" "}
          <strong>{Math.round(data?.totalPages)}</strong>
        </span>
        <div>
          <button
            onClick={() => prevPage()}
            disabled={data?.page === 1 ? true : false}
          >
            <img
              src="/images/chevron.svg"
              alt="chevron"
              width={16}
              height={16}
            />
          </button>
          <button
            onClick={() => nextPage()}
            disabled={
              data?.page === Math.round(data?.totalPages) ? true : false
            }
          >
            <img
              src="/images/chevron.svg"
              alt="chevron"
              width={16}
              height={16}
            />
          </button>
        </div>
      </div>

      <BookModal
        index={bookIndex}
        data={data}
        isOpen={isOpenBookModal}
        onRequestClose={handleCloseBookModal}
      />
    </Container>
  );
}
