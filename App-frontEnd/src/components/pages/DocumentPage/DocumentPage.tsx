import "./DocumentPage.css"
import {Button, Divider} from "semantic-ui-react";
import {SimpleTable, SimpleTableProps} from "../../Inputs/Table/SimpleTable";
import FormModal from "../../Modals/Dialog/FormModal/FormModal";
import {useState} from "react";
import {DocumentForm} from "../../Inputs/Forms/DocumentForm/DocumentForm";
import {DocumentTable, DocumentTableProps} from "../../Inputs/Table/DocumentTable";

export const DocumentPage = (props:any) => {
    const names = ["Position","Skills","Points of experince"];
    const [values,setValues] = useState([["SoftDev","Python,React","10/10"]])
    const data:DocumentTableProps = {deleteDocument: (index:number)=>{
            const newItems = values.filter((_, i) => i !== index);
            setValues(newItems)
        }, tableColumnNames: names, tableColumnValues:values}
    const [open,setOpen] = useState(false)
    const [,] = useState()
    //astea is exemplu de folosire

    return (
        <div className={"pageDiv"}>

            <div className={"title"}>
                {/*<label className={"titleLabel"}> {props.pageName}</label>*/}
                <label className={"titleLabel"}>Documents</label>
                <p className={"bodyTextDocuments"}>All essential info in your CV, listed below in an easy-to-read format!
                Add your updated versions anytime, and delete the ones that are no longer relevant for a clean search.</p>
                <FormModal form={<DocumentForm/>} modalTitle={"Document adding"} open={open} setOpen={setOpen} style={{ fontFamily: "'Comic-Sans', sans-serif", fontSize: "16px" }} />
            </div>

            <div className={"tableDiv"}>
                <Button onClick={()=>setOpen(true)} className={"activeTitleButton"}>Upload document CV</Button>
                <DocumentTable props={data}/>
            </div>
        </div>
    )
}