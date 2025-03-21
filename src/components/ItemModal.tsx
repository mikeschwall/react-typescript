import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

interface ModalProps {
    desc: string;
}

const ItemModal:React.FC<ModalProps>= ({desc}) => {
    const [show, setShow] = useState(false);
    
      const handleClose = () => setShow(false);
      const handleShow = () => setShow(true);

    return (
        <>
        <Button style={{margin:"5px"}} variant="primary" onClick={handleShow}>
                Info
              </Button>
        
              <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                  <Modal.Title>Package Description</Modal.Title>
                </Modal.Header>
                <Modal.Body>{desc}</Modal.Body>
                <Modal.Footer>
                  <Button variant="secondary" onClick={handleClose}>
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
        </>
    )
}

export default ItemModal;