import { useRef, useState,useEffect } from "react";
import React from "react";
import Button from "./Button";

import './ImageUpload.css';

const ImageUpload =(props) =>
{
    const [file, setFile]=useState();
    const [previewUrl, setPreviewUrl] = useState();
    const [isValid, setIsValid] = useState(false);
    const filePickerRef=useRef();

    useEffect(()=>{
        if(!file)
        {
            return;
        }
        const fileReader = new FileReader();
        fileReader.onload = ()=>{
            setPreviewUrl(fileReader.result)
        }
        fileReader.readAsDataURL(file);

    },[file])

    const pickedHandler = (event) =>
    {
        console.log(event.target.files);
        let pickedFile;
        let fileIsValid;
        if(event.target.files && event.target.files.length ===1)
        {
            pickedFile = event.target.files[0];
            setFile(pickedFile);
            setIsValid(true);
            fileIsValid=true;
        }
        else{
            setIsValid(false);
            fileIsValid=false;
        }
        props.onInput(props.id,pickedFile,fileIsValid)

    }
    const pickImageHandler = () =>
    {
        console.log(filePickerRef)
        filePickerRef.current.click()
    }
    return (
        <div className="form-control">
            <input 
                id={props.id}
                style={{display: 'none'}} 
                type="file" 
                accept=".jpg,.png,.jpeg"
                ref={filePickerRef}
                onChange={pickedHandler}>
            </input>
            <div className={`image-upload ${props.center && 'center'}`}>
                <div className="image-upload__preview">
                    {previewUrl && <img src={previewUrl} alt="preview"></img>}
                    {!previewUrl && <p>Please pick an image.</p>}
                </div>
                <Button type="button" onClick={pickImageHandler}>PICK IMAGE</Button>
            </div>
            {!isValid && <p>{props.errorText}</p>}
       </div>
    )

}
export default ImageUpload