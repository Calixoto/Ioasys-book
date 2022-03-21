import { useEffect, useState } from "react";
import { BooksContainer } from "../../components/Books/BookContainer";
import { Header } from "../../components/Header";
import { api } from "../../services/api";
import { DataProps } from "../../types";
import { getToken } from "../../utils/getToken";

export function Books() {
  const [books, setBooks] = useState<DataProps>();
  const [page, setPage] = useState(1);

  async function getBooks(res: any) {
    const { data } = await api.get("books", {
      headers: {
        Authorization: `Bearer ${JSON.parse(res.token)}`,
      },
      params: {
        page,
        amount: 12,
      },
    });
    setBooks(data);
  }
  useEffect(() => {
    const resToken = getToken();
    getBooks(resToken);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  function handleNextPage() {
    if (books && page <= books.totalPages) {
      setPage(page + 1);
    }
  }

  function handlePrevPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  return (
    <>
      <Header />
      <BooksContainer
        data={books ? books : ({} as DataProps)}
        nextPage={handleNextPage}
        prevPage={handlePrevPage}
      />
    </>
  );
}
