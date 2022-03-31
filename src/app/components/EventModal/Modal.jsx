export const ModalContainer = ({ children }) => (
  <div className="modal">{children}</div>
);

export const TitleImage = ({ img }) => (
  <div className="modal-left">
    <img src={img} alt="event image" className="modal-img" />
  </div>
);

export const ModalContent = ({ children }) => (
  <div className="right">{children}</div>
);

export const ModalTitle = ({ children }) => (
  <div className="modal-title">
    <h2>{children}</h2>
  </div>
);

export const ModalDescription = ({ children }) => (
  <div className="modal-desc">{children}</div>
);

export const ModalBtn = ({ onClick }) => (
  <div onClick={onClick} className="modal-btn">
    Register Yourself
  </div>
);
