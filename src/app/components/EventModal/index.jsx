import { Modal } from "@mui/material";
import React from "react";
import {
  ModalContainer,
  ModalContent,
  ModalDescription,
  ModalTitle,
  ModalBtn,
} from "./Modal";
import "./modal.css";

function EventModal({ data, open, close }) {
  console.log(data)
  return (
    <Modal className='modalContainer' open={open} onClose={close}>
      <ModalContainer>
        <ModalContent>
          <ModalTitle>{data?.title}</ModalTitle>
          <ModalDescription><div>
            {data?.description?.map((e) => {
              return <p>{e}</p>
            })}</div></ModalDescription>
        </ModalContent>
      </ModalContainer>
    </Modal>
  );
}

export default EventModal;
