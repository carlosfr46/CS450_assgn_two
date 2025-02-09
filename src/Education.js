import React, {Component} from 'react'

class Education extends Component {

    render(){
        return(
        <div class="resume">
            <div class="resumepart">
            <h3>{this.props.education.title}</h3>
            </div>

            <div class="resumedesc">
            <h3>{this.props.education.bsInstitution}</h3>
            <p>{this.props.education.bsdegree}</p>
            <p>{this.props.education.bsDates}</p>
            <p>{this.props.education.bsGpa}</p>
            </div>
        </div>
        )
    }
}

export default Education