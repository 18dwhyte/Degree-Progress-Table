import React, { Component } from "react"
import WritingHeader from "./writingHeader";
import TotalTransferCredits from "./totalTransferCredits";
export var activeName

export default class StudentName extends Component
{
    
    constructor(props)
    {
        super(props);
        this.state = 
        {
           name: ''
        }
        this.handleStudentName = this.handleStudentName.bind(this);
    }
    
    handleStudentName(e) 
    {
    this.setState
    (
      {name: e.target.value},
    )
    }


    render()
    {
        return(
            <div>
            <form class = "text-center">
            <label for = "name"> Student Name </label>
            <input type = "text" value = {this.state.name} onChange={this.handleStudentName}>
            </input>
            </form>
            <TotalTransferCredits/>
            <WritingHeader data = {this.state.name}/>
            </div>
        )
    }
}

