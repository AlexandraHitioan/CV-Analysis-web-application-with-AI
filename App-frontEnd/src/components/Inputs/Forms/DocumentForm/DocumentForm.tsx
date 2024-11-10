import "./DocumentForm.css"
import {Divider, Form, Input} from "semantic-ui-react";
import {useState} from "react";
import {UploadButton} from "../../Buttons/UploadButton/UploadButton";

export const DocumentForm = () =>{

    const [documentName,setDocumentName] = useState("")
    const [file,setFile] = useState("")
    return (
        <div>
            <Input placeholder={"Document Name"} value={documentName}/>
            <Divider/>
            <UploadButton settingFunction={setFile} fileType={".pdf"}></UploadButton>
        </div>
    )
}