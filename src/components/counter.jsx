import React, { Component } from 'react';
class Counter extends Component{
    state ={
        count:0,
        tags: ['tag1', 'tag2', 'tag3']
       // imageUrl: 'https://picsum.photos/200'
       //<img src ={this.state.imageUrl} alt =""/>
    };

   /* constructor(){
        super();
       this.handleIncrement=this.handleIncrement.bind(this);
    }*/

    renderTags(){
        if(this.state.tags.length===0) return <p>There are no tags!</p>
          return <ul>{this.state.tags.map(tag=><li key={tag}>{tag}</li>)}</ul>;

    }

   /* styles={
       fontSize: '15px',
       fontWeight: 'bold'
       {fontSize:30} --> paste it to the style {} down, to make it inline style
    };*/


    handleIncrement= () =>{ 
        // console.log(object)
        // console.log(product);
        this.setState({count: this.state.count+1});
        //obj.mathod();
        //function();
    };

  
    render(){
       
    return (

        <div> 
       <span className={this.getBagdeClasses()}>{this.formatCount()}</span>
            <button  onClick={ () => this.handleIncrement()} 
            className="btn btn-secondary btn-sm">Increment</button>

        </div>
            );
    }
    

    getBagdeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.state.count === 0) ? "warning" : "primary";
        return classes;
    }

     formatCount(){
         const {count} =this.state;
        
         return count === 0 ? "Zero" : count;
     }

}
export default Counter;
