import React, { Component } from "react"
import Routes from "../../Navigation/MainStack"
export default class HomePage extends Component {
    constructor() {
        super()
        this.state = {
            abc: "abc"
        }
    }
    render() {
        return (
            <Routes />
        )
    }

}