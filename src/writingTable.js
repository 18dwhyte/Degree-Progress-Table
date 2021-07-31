import React, { Component } from "react"
import WritingHeader from "./writingHeader"
import WritingRow from "./writingRow"

export default class WritingTable extends Component

{
    render()
    {
        return(
            <div>
        <table className ="table table-striped m-2">
            <thead>
                <tr>
                    <th>
                        ID
                    </th>
                    <th>
                        Description
                    </th>
                    <th>
                        Semester
                    </th>
                    <th>
                        Prefix
                    </th>
                    <th>
                        Number
                    </th>
                    <th>
                        Grade
                    </th>
                    <th>
                        Editing
                    </th>
                </tr>
            </thead>
            <WritingRow/>
        </table>
        </div>
        )
    }
}