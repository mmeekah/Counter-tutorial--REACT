import React, { Component } from 'react';
class Counter extends Component{

    
   // state ={
     //   value: this.props.counter.value
     
       // imageUrl: 'https://picsum.photos/200'
       //<img src ={this.state.imageUrl} alt =""/>
   // };

   /* constructor(){
        super();
       this.handleIncrement=this.handleIncrement.bind(this);
    }*/

  /*  renderTags(){
        if(this.state.tags.length===0) return <p>There are no tags!</p>
          return <ul>{this.state.tags.map(tag=><li key={tag}>{tag}</li>)}</ul>;

    }
    */

   /* styles={
       fontSize: '15px',
       fontWeight: 'bold'
       {fontSize:30} --> paste it to the style {} down, to make it inline style
    };*/


  /*  handleIncrement= () =>{ 
        // console.log(object)
        // console.log(product);
        this.setState({value: this.state.value+1});
        //obj.mathod();
        //function();
    };
*/
  
    render(){
     console.log(this.props);
    return (
        
//<h4> {this.props.id} </h4>
        <div> 
            
         
       <span className={this.getBagdeClasses()}>{this.formatCount()}</span>
            <button  onClick={ () => this.props.onIncrement(this.props.counter)} 
            className="btn btn-secondary btn-sm">Increment</button>
            <button   onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2"> Delete</button>

        </div>
            );
    }
    

    getBagdeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }

     formatCount(){
         const {value} =this.props.counter;
        
         return value === 0 ? "Zero" : value;
     }

}
export default Counter;
