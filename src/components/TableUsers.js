import { useEffect, useState } from "react";
import { fetchAllUser } from "../services/UserService";
import { Table } from "react-bootstrap";
import ReactPaginate from "react-paginate";
import ModalAddNew from "./ModalAddNew";

const TableUsers = (props) => {
    const [listUsers, setListUsers] = useState([]);
    // const [totalUsers, setTotalUsers] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const [isShowModalAddNew, setIsShowModalAddNew] = useState(false)
    const handleClose = () => {
        setIsShowModalAddNew(false);
    }
    const handleUpdateTable = (user) => {
        setListUsers([user, ...listUsers]);
    }
    useEffect(() => {
        getUsers();
    }, [])
    const getUsers = async (page) => {
        let res = await fetchAllUser(page);
        if (res && res.data) {
            setListUsers(res.data)
            setListUsers(res.data)
            setTotalPages(res.total_pages)
        }
        console.log(">>>Check read pint", res)

    }
    const handlePageClick = (event) => {
        getUsers(+event.selected + 1)
    }
    return (<>
        <div className='table-user'>
            <span><b>List - User</b></span>
            <button className='btn btn-success'
                onClick={() => setIsShowModalAddNew(true)}> Add New User</button>
        </div>
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Email</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Images</th>
                </tr>
            </thead>
            <tbody>
                {listUsers && listUsers.length > 0 && listUsers.map((item, index) => {
                    return (
                        <tr key={`user - ${index}`}>
                            <td>{item.id}</td>
                            <td>{item.email}</td>
                            <td>{item.first_name}</td>
                            <td>{item.last_name}</td>
                            <td>{item.avatar}</td>

                        </tr>
                    )
                })}
            </tbody>


        </Table>
        <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={totalPages}
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="page-item"
        />
        <ModalAddNew
            show={isShowModalAddNew}
            handleClose={handleClose}
            handleUpdateTable={handleUpdateTable} />

    </>)
}

export default TableUsers;