import { Component} from "react";


export default class WritingHeader extends Component
{
    render()
    {
        return(
            <div class="text-center navbar-dark text-white bg-primary m-2">
                <h1>Writing Emphasis for {this.props.data} </h1>
            </div>
        )
    }
}