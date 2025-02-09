import React, { Component } from 'react'

class PersonalProfile extends Component{
    render(){
        return(
            <div class="resume">

            <div class="resumepart">
              <h3>{this.props.profile.title}</h3>
            </div>
    
            <div class="resumedesc">
              <p>{this.props.profile.content}</p>
            </div>
          </div>
        );
    }
}

export default PersonalProfile