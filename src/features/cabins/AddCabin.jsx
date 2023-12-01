import { useState } from "react";

import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

function AddCabin() {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div>
      <Button onClick={() => setModalOpen((prev) => !prev)}>
        Add new Cabin
      </Button>
      {isModalOpen && (
        <Modal onClose={() => setModalOpen(false)}>
          <CreateCabinForm onCloseModal={() => setModalOpen(false)} />
        </Modal>
      )}
    </div>
  );
}

export default AddCabin;
