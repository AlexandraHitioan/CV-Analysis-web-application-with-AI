import {Icon} from "semantic-ui-react";

export interface DocumentTableProps{
    tableColumnNames:string[];
    tableColumnValues:Array<string[]>;
    deleteDocument:any;
}

export const DocumentTable = (props:any) => {
    const data = props.props.tableColumnNames;
    const info = props.props.tableColumnValues;
    return (
        <table className="ui celled table">
            <thead>
            <tr>
                {
                    data!=undefined?data.map((item:any, index:any) => (
                        <th>{data[index]}</th>
                    )):(<div/>)
                }
                <th>Actions</th>
            </tr>
            </thead>
            <tbody>

            {
                info!=undefined?info.map((item:any, index:any) => (
                    <tr>
                        {
                            info[index]!=undefined?info[index].map((item1:any, index1:any) => (
                                <td data-label = {data[index1]}>{item1}</td>
                            )):(<div/>)
                        }
                        <td>
                            {/*<Icon style={{cursor:"pointer"}} size={"big"} color={"blue"} name={"edit"}></Icon>*/}
                            <Icon style={{cursor:"pointer"}} size={"big"} color={"red"} name={"remove"}
                                  onClick={()=>{props.props.deleteDocument(index)}}
                            ></Icon>
                        </td>
                    </tr>
                )):(<div/>)
            }
            </tbody>
        </table>
    )
}