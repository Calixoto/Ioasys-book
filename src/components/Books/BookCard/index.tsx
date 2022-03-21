import { BooksProps } from "../../../types";
import { Container } from "./style";

type DataBooksProps = {
  data: BooksProps[];
  openModal: (i: number) => void;
};

export function BookCard({ data, openModal }: DataBooksProps) {
  return (
    <>
      {data?.map((item, i) => (
        <Container key={item.id} onClick={() => openModal(i)}>
          <section className="bookContainer">
            <img
              src={item.imageUrl || "/images/unknowBook.svg"}
              alt={item.title}
              width={81}
              height={122}
            />
          </section>
          <section className="descriptionContainer">
            <div>
              <h2>{item.title}</h2>
              <strong>{item.authors[0]}</strong>
            </div>
            <span>
              {item.pageCount} páginas <br />
              {item.publisher} <br />
              Publicado em {item.published}
            </span>
          </section>
        </Container>
      ))}
    </>
  );
}
