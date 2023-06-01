import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'
import { postCreateUsers } from '../services/UserService';
import { toast } from 'react-toastify';

const ModalConfirm = (props) => {
    const { show, handleClose, dataUserDelete } = props;
    const confirmDelete = () => { }
    return (<>
        <Modal show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>Delete User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='Input New User'>
                    This action can't be undone!<br />
                    Do want to delete this user? <b>email ={dataUserDelete.email}</b>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => confirmDelete()}>
                    Confirm
                </Button>
            </Modal.Footer>
        </Modal>
    </>)
}
export default ModalConfirm;
