import { Component } from "react";
import { createPortal } from "react-dom";
import { FiXCircle } from "react-icons/fi";
import styles from "./Modal.module.css";

const modalRoot = document.querySelector("#modal-root");

class Modal extends Component {
    componentDidMount() {
        window.addEventListener("keydown", this.handleKeydownClose);
    }

    componentWillUnmount() {
        window.removeEventListener("keydown", this.handleKeydownClose);
    }

    handleKeydownClose = (event) => {
        if (event.code === "Escape") {
            this.props.onClose();
        }
    };

    handleBackdropClick = (event) => {
        if (event.currentTarget === event.target) {
            this.props.onClose();
        }
    };

    render() {
        const { largeImage, type, tag, onClose } = this.props;
        console.log(tag);
        return createPortal(
          <div onClick={this.handleBackdropClick} className={styles.ModalBackdrop}>
            <div className={styles.ImageModal}>
              <button onClick={onClose} className={styles.ButtonModal} type="button">
                <FiXCircle size="50px" />
              </button>
              <img src={largeImage} alt={type} />
              <span className={styles.TextImage}>{tag}</span>
            </div>
          </div>,
          modalRoot
        );
      }    
}

export default Modal;