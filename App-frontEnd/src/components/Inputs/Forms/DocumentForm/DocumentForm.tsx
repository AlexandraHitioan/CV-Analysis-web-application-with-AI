import "./DocumentForm.css"
import {Divider, Form, Input} from "semantic-ui-react";
import {useEffect, useState} from "react";
import {UploadButton} from "../../Buttons/UploadButton/UploadButton";

export const DocumentForm = (setFileForward:any) =>{

    const [documentName,setDocumentName] = useState("")
    const [file,setFile] = useState("")


    useEffect(()=>{
        if(file != "")
            setFileForward(file)
    },[file])
    return (
        <div style={{display:"grid",width:"17vw"}}>
            <Input placeholder={"Document Name"} value={documentName} onChange={(e)=>{setDocumentName(e.target.value)}}/>
            <Divider/>
            <UploadButton settingFunction={setFile} fileType={".pdf"}></UploadButton>
        </div>
    )
}