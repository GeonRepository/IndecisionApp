import React from "react";
import Modal from "react-modal";


const OptionModal = (props) => (
    <Modal
        isOpen = {!!props.selectedOption}
        onRequestClose = {props.handleClear}
        contentLabel = "Selected Option"
    >
        <h3>Selcted Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button onClick = {props.handleClear}>Okay</button>
    </Modal>
);

export default OptionModal;

