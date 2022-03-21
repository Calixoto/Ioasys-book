import Modal from "react-modal";
import { BookModalProps } from "../../types";
import { Container } from "./style";

export function BookModal({
  isOpen,
  onRequestClose,
  data,
  index,
}: BookModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="reactBookModalOverlay"
      className="reactBookModalContent"
    >
      {isOpen ? (
        <Container>
          {/* <button className="closeModal">
            <img src="/images/closeModal.svg" alt="closemodal" />
          </button> */}
          <section className="bookContainer">
            <img
              src={data.data[index].imageUrl || "/images/unknowBook.svg"}
              alt="unknow"
            />
          </section>
          <section className="descriptionContainer">
            <div className="descriptionHeader">
              <h2>{data.data[index].title}</h2>
              <strong>
                {data.data[index].authors.map((item) => item + ", ")}
              </strong>
            </div>
            <div className="descriptionBody">
              <h2>Informações</h2>
              <span>
                <strong>Paginas</strong>
                {data.data[index].pageCount}
              </span>
              <span>
                <strong>Editora</strong>
                {data.data[index].publisher}
              </span>
              <span>
                <strong>Publicacao</strong>
                {data.data[index].published}
              </span>
              <span>
                <strong>Idioma</strong>
                {data.data[index].language}
              </span>
              <span>
                <strong>Titulo Original</strong>
                {data.data[index].title}
              </span>
              <span>
                <strong>ISBN-10</strong>
                {data.data[index].isbn10}
              </span>
              <span>
                <strong>ISBN-13</strong>
                {data.data[index].isbn13}
              </span>
            </div>
            <div className="descriptionFooter">
              <h2>resenha da editoria</h2>
              <span>{data.data[index].description}</span>
            </div>
          </section>
        </Container>
      ) : null}
    </Modal>
  );
}
