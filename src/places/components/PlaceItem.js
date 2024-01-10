import React, {useState, useContext} from "react";


import Card from "../../shared/components/UIElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UIElements/Modal";
import './PlaceList.css'
import { AuthContext } from "../../shared/context/auth-context";
import { useHttpClient } from "../../shared/hooks/http-hook";
import ErrorModal from "../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../shared/components/UIElements/LoadingSpinner";

const PlaceItem = (props) => {
    const auth = useContext(AuthContext);
    const [showMap,setShowMap] = useState(false);
    const [showConfirmedModal, setShowConfirmedModal] = useState(false)
    const {isLoading, error,sendRequest, clearError}=useHttpClient();


    const openMapHandler = () => setShowMap(true);

    const closeMapHandler =() => setShowMap(false);

    const showDeleteWarningHandler = () => {
        setShowConfirmedModal(true)
    }

    const cancelDeleteHandler = () => {
        setShowConfirmedModal(false)
    }

    const confirmeDeleteHandler = async() => {
        setShowConfirmedModal(false)
        console.log(props);
        try{
            await sendRequest(`http://localhost:5000/places/${props.id}`,
            'DELETE',)
            props.onDelete(props.id);
        }
        catch(err)
        {

        }
    }
    return (
        <React.Fragment>
            <ErrorModal error={error} onClear={clearError}/>
            <Modal 
                show={showMap}
                onCancel={closeMapHandler}
                header={props.address}
                contentClass="place-item__modal-content"
                footerClass="place-item__modal-actions"
                footer={<Button onClick={closeMapHandler}>CLOSE</Button>}>
                <div className="map-container">
                    <h2> THE MAP!</h2>
                </div>
            </Modal>
            <Modal
                show={showConfirmedModal}
                onCancel={cancelDeleteHandler}
                header="Are you sure?" 
                footerClass="place-item__modal-actions" 
                footer={
                    <React.Fragment>
                        <Button inverse onClick={cancelDeleteHandler}>CANCEL</Button>
                        <Button danger onClick={confirmeDeleteHandler}>DELETE</Button>
                    </React.Fragment>}>
                <p>DO you want to proceed and delete this place? Please note that it can't be undone thereafter.</p>
            </Modal>
            <li className="place-item">
                <Card className="place-item__content">
                    {isLoading && <LoadingSpinner asOverlay/>}
                    <div className="place-item__image">
                        <img src={`http://localhost:5000/${props.image}`} alt={props.title}></img>
                    </div>
                    <div className="place-item__info">
                        <h2>{props.title}</h2>
                        <h3>{props.address}</h3>
                        <p>{props.description}</p>
                    </div>
                    <div className="place-item__actions">
                        <Button inverse onClick={openMapHandler}>VIEW ON MAP</Button>
                        {auth.userId===props.creatorId && <Button to={`/places/${props.id}`}>EDIT</Button>}
                        {auth.isLoggedIn && <Button danger onClick={showDeleteWarningHandler}>DELETE</Button>}
                        
                        

                    </div>
                </Card>
            </li>
        </React.Fragment>
    )

       

}
export default PlaceItem    