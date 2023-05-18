import { useEffect } from "react";
import { fetchAllUser } from "../services/UserService";

const TableUsers = (props) => {
    useEffect(() => {
        //call API
        getUsers();
    }, [])
    const getUsers = async () => {
        let res = await fetchAllUser();
        console.log(">>>Check read pint", res)

    }
    return (<>TableUsers...</>)
}

export default TableUsers;