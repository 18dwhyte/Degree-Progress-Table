import { Component } from "react"
import EditForm from "./editForm"
import { WRITINGCOURSES } from "./productArray"
import TotalTransferCredits from "./totalTransferCredits"
//creates row for table
export default class WritingRow extends Component
{

    constructor(props)
    {
        super(props);
        this.state = 
        {
            ID:0,
            Description: '',
            Semester: '',
            Prefix: '',
            Number: '',
            Grade: '',
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick(e)
    {

        this.setState(
            {
                ID: e.ID,
                Description: e.Description,
                Semester: e.Semester,
                Prefix: e.Prefix,
                Number: e.Number,
                Grade: e.Grade,
            }
        );
    
        
    }
    render()
    {
    
        return (
                <tbody>
                {WRITINGCOURSES.map((item, index) => 
                (
                <tr scope="row" colSpan = "1" key = {item.ID}>
                    <td> {item.ID} </td>
                    <td> {item.Description} </td>
                    <td> {item.Semester} </td>
                    <td> {item.Prefix} </td>
                    <td> {item.Number} </td>
                    <td> {item.Grade} </td>
                    <td> 
                        <button type="button" class="btn btn-warning" onClick ={() => this.handleClick(item)}> Edit </button>
                    </td>
                </tr>
                ))}

            <EditForm 
            ID = {this.state.ID} 
            Description = {this.state.Description}
            Semester  = {this.state.Semester}
            Prefix = {this.state.Prefix}
            Number = {this.state.Number}
            Grade = {this.state.Grade}
            />
                </tbody>
                
            )
    }
}
