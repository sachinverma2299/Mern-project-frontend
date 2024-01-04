import React,{useEffect,useState} from "react"
import UsersList from "../components/UsersList"

import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";
import { useHttpClient } from "../../shared/hooks/http-hook";

const Users = () => {
    const [loadedUser,setLoadedUser] = useState();
    const {isLoading, error,sendRequest, clearError}=useHttpClient();
    useEffect(()=>{
        const fetchUsers = async() =>{
            try{
                const responseData = await sendRequest('http://localhost:5000/users')
                setLoadedUser(responseData.users);
            }
            catch(err)
            {
            }
        }
        fetchUsers();
    },[sendRequest])

    return (
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError}/>
            {isLoading && (
                <div className="center">
                    <LoadingSpinner/>
                </div>
            )}
            {!isLoading && loadedUser && <UsersList items={loadedUser}/> }
        </React.Fragment>)

}
export default Users