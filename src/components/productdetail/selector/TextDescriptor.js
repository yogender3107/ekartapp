import React from "react";
import { Modal, ModalHeader, ModalBody } from "reactstrap";

export default ({ desc = "", modalTitle = "" }) => {
  let short_desc = "";
  if (desc.length > 150) {
    short_desc = desc.slice(0, 150) + " .....";
  }
  const [modal, modalToggler] = React.useState(false);
  return (
    <>
      <p className="product-description__text text-secondary">{short_desc}</p>
      {short_desc.length && (
        <p className="product-description__more_text" onClick={modalToggler}>
          {" "}
          + MORE
        </p>
      )}
      <div>
        <Modal
          isOpen={modal}
          toggle={() => modalToggler(true)}
          centered
          onHide={() => modalToggler(false)}
          scrollable={true}
        >
          <ModalHeader toggle={() => modalToggler(false)}>{modalTitle}</ModalHeader>
          <ModalBody>
            <p className="product-description__text text-secondary">{desc}</p>
          </ModalBody>
        </Modal>
      </div>
    </>
  );
};
