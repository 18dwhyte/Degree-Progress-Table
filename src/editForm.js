import { Component } from "react";

export default class EditForm extends Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {
           Description: this.props.Description,
           Semester: this.props.Semester,
           Prefix: this.props.Prefix,
           Number: this.props.Number,
           Grade: this.props.Grade,
    
        }
        this.handleStudentData = this.handleStudentData.bind(this);
        this.handleStudentDesc = this.handleStudentDesc.bind(this);
        this.saveData = this.saveData.bind(this);
    }
    
    handleStudentData(a,b,c,d,e) 
    {
    console.log(a,b,c,d,e,);

    this.setState
    (
        {Description: a},
        {Semester: b},
        {Prefix:c},
        {Number:d},
        {Grade:e},

    )
    }

    handleStudentDesc(desc)
    {
        this.setState
        (
            {Description: desc.target.value}
        )
    }

    saveData()
    {
        console.log("saved")
    }

    cancelData()
    {
        console.log("cancelled")
    }

    render()
    {
        return(
        <div>
            <form class = "text-left">
            <label for = "ID"> ID </label>
            <input class="form-control" type="text" name = "ID" value = {this.props.ID} readOnly>
            </input>
            </form>

            <br/>

            <form class = "text-left">
            <label for = "Desc"> Description </label>
            <input class="form-control" type = "text" name = "Description" placeholder = {this.props.Description} value = {this.state.Description} onChange = {this.handleStudentDesc}>
            </input>
            </form>

            <br/>

            <form class = "text-left">
            <label for = "Semester"> Semester </label>
            <input class="form-control" type = "text" name = "Semester" value = {this.props.Semester}>
            </input>
            </form>

            <br/>

            <form class = "text-left">
            <label for = "Prefix"> Prefix </label>
            <input class="form-control" type = "text" name = "Prefix" value = {this.props.Prefix} >
            </input>
            </form>

            <br/>

            <form class = "text-left">
            <label for = "Number"> Number </label>
            <input class="form-control" type = "text" name = "Number" value = {this.props.Number} >
            </input>
            </form>

            <br/>

            <form class = "text-left">
            <label for = "ID"> Grade </label>
            <input class="form-control" type = "text" name = "Grade" value = {this.props.Grade} >
            </input>
            </form>

            <div class = "text-center">
            {/* 
            save onclick should overwrite data
            Cancel onclick should go back to main screen
            () => this.handleStudentData(this.props.Description,this.props.Semester,this.props.Prefix,this.props.Number,this.props.Grade)
            */}
            
            <button type="button" class="btn btn-primary m-1" onClick={this.saveData}> Save </button> 
            <button type="button" class="btn btn-secondary" onClick = {this.cancelData}> Cancel </button>
            </div>

        </div>
        )
    }
}