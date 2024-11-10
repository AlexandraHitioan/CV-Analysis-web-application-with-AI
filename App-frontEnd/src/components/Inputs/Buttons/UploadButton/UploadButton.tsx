import {Button} from "semantic-ui-react";
import {useEffect, useRef, useState} from "react";


export interface UploadButtonInterface {
    settingFunction:any,
    fileType:string
}
export const UploadButton = (props:UploadButtonInterface) => {

    const [fileBase64,setFileBase64] = useState("")
    const fileInputRef = useRef(null);

    const handleButtonClick = () => {
        // @ts-ignore
        fileInputRef.current.click();
    };

    useEffect(()=>{
        if(fileBase64 !== "")
            console.log(fileBase64)
    },[fileBase64])

    const handleFileChange = (event:any) => {
        const file = event.target.files[0];
        if (file) {
            const data = convertToBase64(file)
            console.log(`Selected file: ${file.name}`);
        }
    };

    const convertToBase64 = (file: File) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            setFileBase64(reader.result as string); // Set the base64 string
        };
        reader.onerror = (error) => {
            console.error('Error converting file to base64:', error);
        };
        return ""
    };

    return (
        <div>
            <input
                type="file"
                ref={fileInputRef}
                id="upload"
                hidden
                onChange={handleFileChange}
                accept={props.fileType}
            />
            <Button icon={"upload"} label={"Upload File"} style={{width: "100%",left: "3vw", position: "relative"}} onClick={handleButtonClick} primary>

            </Button>
        </div>
    );
}