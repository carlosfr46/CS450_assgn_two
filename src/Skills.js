import React, {Component} from 'react'

class Skills extends Component{
    render(){
        return(
          
          <div class="resume">

            <div class="resumepart">
              <h3>{this.props.keySkills.title}</h3>
            </div>
    
            <div class="skills">
              <ul>
                <li>{this.props.keySkills.content1}</li>
                <li>{this.props.keySkills.content1}</li>
                <li>{this.props.keySkills.content1}</li>
              </ul>
            
              <ul>
                <li>{this.props.keySkills.content1}</li>
                <li>{this.props.keySkills.content1}</li>
                <li>{this.props.keySkills.content1}</li>
              </ul>
    
              <ul>
                <li>{this.props.keySkills.content1}</li>
                <li>{this.props.keySkills.content1}</li>
                <li>{this.props.keySkills.content1}</li>
              </ul>
            </div>
          </div>
        )
    }
}

export default Skills