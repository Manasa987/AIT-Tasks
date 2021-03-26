import React from 'react';

class mystate extends React.Component{
    constructor(props){
        super(props);
        this.state={
            InstituteName:"AchieversIT",
            FName:"manasa",
            InstituteName1:"9globes",
            LName:"manas"
        };
    }
    render() {
      return (
        <div>
            <h1>{this.state.FName} </h1>
          <p>
              {this.state.InstituteName} 
          </p>
          <h1>{this.state.LName} </h1>
          <p>
              {this.state.InstituteName1} 
          </p>
        </div>
      );
    }
  }
export default mystate;
