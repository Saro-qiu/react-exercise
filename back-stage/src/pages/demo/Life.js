import React, { Component } from 'react'

export default class Life extends Component{
    constructor(props){
        super(props);
        this.state={
            count:0
        }
    }

    
    render(){
        return (
            <div>
                <p>Hello World</p>
            </div>
        )
        
    }
}