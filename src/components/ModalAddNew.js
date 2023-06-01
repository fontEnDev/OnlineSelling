import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap'
import { postCreateUsers } from '../services/UserService';
import { toast } from 'react-toastify';

const ModalAddNew = (props) => {
    const { show, handleClose, handleUpdateTable } = props;
    const [name, setName] = useState("");
    const [job, setJob] = useState("");

    const handelSaveUser = async () => {
        let res = await postCreateUsers(name, job);
        if (res && res.id) {
            handleClose();
            setName('');
            setJob('');
            toast.success("Create new user succesful")
            handleUpdateTable({ first_name: name, id: res.id })
        }
        else { }
    }
    return (<>
        <Modal show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}>
            <Modal.Header closeButton>
                <Modal.Title>Add New User</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='Input New User'>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">User Name</label>
                        <input type="text"
                            className="form-control"
                            value={name}
                            onChange={(event) => setName(event.target.value)}
                        />

                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Job</label>
                        <input type="text" className="form-control"
                            value={job}
                            onChange={(event) => setJob(event.target.value)}
                        />
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={() => handelSaveUser()}>
                    Save Changes
                </Button>
            </Modal.Footer>
        </Modal>
    </>)
}
export default ModalAddNew;
