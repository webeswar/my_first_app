import React,{Component} from 'react';

//class component start
class sample extends Component{
    constructor(){
        super();
        this.state={
            name:"eswar",
            age:"19",
            count:0
        }
    }
    change=()=>{
         this.setState({
             name:"Eswara Rao"
         })
    }
    increment=()=>{
        this.setState({
        count:this.state.count+1
        })
    }
    render(){
        return(
            <div style={{textAlign:"center"}}>
                {/* JSX---> javascript extension */}
                <h2>set concept</h2>
                <h2> {this.state.count} </h2>
                <button onClick={this.increment}>Increment</button>   
            </div>
        )
    }
}
//class component end


//function component is below
// let sample=()=>{
//   return(
//         <div>
//             <h2 style={{textAlign:"center"}}>sample component</h2>
//         </div>
//     )
// }
//function component end
export default sample;