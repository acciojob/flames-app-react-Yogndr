import React, {Component} from "react";
import '../styles/App.css';

class App extends Component {
    state={
            name1:"",
            name2:"",
            output:""
        }

         handleChange=(e)=>{
            this.setState({[e.target.name]:e.target.value})
                
            

        }

         findRelationshipStatus=()=>{
            let { name1, name2 } = this.state;
            name1 = name1.replace(/\s+/g, "").toLowerCase();
            name2 = name2.replace(/\s+/g, "").toLowerCase();
            let arr1 = name1.split("");
            let arr2 = name2.split("");
            arr1.forEach((char) => {
            const index = arr2.indexOf(char);
           if (index !== -1) {
            arr2.splice(index, 1);
           arr1.splice(arr1.indexOf(char), 1);
            }
            });
            const count = arr1.length + arr2.length;
            if (count === 0) {
  this.setState({ output: "Siblings" });
  return;
}
const relations = ["Friends", "Love", "Affection", "Marriage", "Enemy", "Siblings"];
// let index = 0;

// while (relations.length > 1) {
//   index = (index + count - 1) % relations.length;
//   relations.splice(index, 1);
// }
// this.setState({ output: relations[0] });
 const ans=relations[(count%relations.length)-1]


this.setState({ output: ans });




            
        }

         clearFields=()=>{
            this.setState({
                name1:"",
                name2:"",
                output:""
            })

        }

    render() {
        
        return(
            <div id="main">
                
                <input type="text" data-testid="input1" name="name1" placeholder="Enter first name" value={this.state.name1} onChange={this.handleChange} required/>
                <input type="text" data-testid="input2" name="name2" placeholder="Enter second name" value={this.state.name2} onChange={this.handleChange} required/>
                <button onClick={this.findRelationshipStatus} data-testid="calculate_relationship" name="calculate_relationship">Calculate Relationship Future</button>
                <button onClick={this.clearFields} data-testid="clear" name="clear">Clear</button>
                <h3 data-testid="answer">{this.state.output}</h3>
            </div>
        )
    }
}


export default App;
