import { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap'
// import { postCreateUsers } from '../services/UserService';
// import { toast } from 'react-toastify';
import { putUpdatetUser } from '../services/UserService';
import { toast } from 'react-toastify';

const ModalEditUser = (props) => {
    const { show, handleClose, dataUserEdit, handleEditUserFromModal } = props;
    const [name, setName] = useState("");
    const [job, setJob] = useState("");
    const handelEditUser = async () => {
        let res = await putUpdatetUser(dataUserEdit.id, name, job)
        if (res && res.updatedAt) {
            handleEditUserFromModal({
                first_name: name,
                id: dataUserEdit.id
            })
            handleClose();
            toast.success("Update User success")
        }

    }

    useEffect(() => {
        if (show) {
            setName(dataUserEdit.first_name);
        }
    }, [dataUserEdit])

    return (<>
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Edit User Box</Modal.Title>
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
                <Button variant="primary" onClick={() => handelEditUser()}>
                    Confirm
                </Button>
            </Modal.Footer>
        </Modal>
    </>)
}
export default ModalEditUser;