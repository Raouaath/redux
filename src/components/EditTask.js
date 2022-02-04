import React, { useState } from "react";
import Modal from "react-modal";
import { useDispatch } from "react-redux";
import { editTask } from "../redux/actions";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const EditTask = ({ task }) => {
  console.log("task is", task);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [oldAction, setOldAction] = useState(task.action);
  const dispatch = useDispatch();

  const edit = (newText) => {
    const editedTask = {
      id: task.id,
      action: newText,
      isDone: task.isDONE,
    };
    dispatch(editTask(editedTask));
    closeModal();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div>
      <button onClick={openModal}>Edit</button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
      >
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={oldAction}
            onChange={(e) => setOldAction(e.target.value)}
          />
          <button type="submit" onClick={() => edit(oldAction)}>
            Confrim
          </button>
          <button onClick={closeModal}>Cancel</button>
        </form>
      </Modal>
    </div>
  );
};

export default EditTask;
