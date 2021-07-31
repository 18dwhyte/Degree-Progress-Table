import React, { Component } from "react"

export default class TotalTransferCredits extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            creditNum: 0
        }
        this.handleCreditCount = this.handleCreditCount.bind(this)
    }

    handleCreditCount(e)
    {
        this.setState({creditNum: e.target.value})
        console.log(this.state.creditNum)
    }


    render()
    {
        return(
            <div>
            <form class = "text-center">
            <label for = "name"> Total Transfer Credit </label>
            <input type = "number" value={this.state.creditNum} onChange={this.handleCreditCount}> 
            </input>
            </form>
            </div>
        )
    }
}