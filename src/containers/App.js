import React from 'react';
import CardList from '../components/CardList';
//import {robots} from '../robots';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';


class App extends React.Component{
    constructor(){
        super();
        this.state={
            robots: [],
            searchfield:''
            
        }
        console.log("constructor");
    }

    componentDidMount() {
        console.log("did mount");
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response =>response.json())
        .then(user =>this.setState({robots:user}))
        
        
    }

    onsearchchange =(event)=>{
        this.setState({searchfield:event.target.value});
        
        

    }
    render(){
        console.log("render");
        console.log(this.state.robots.length);
        const filteredrobot =this.state.robots.filter(robot =>{
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
            })

        if(this.state.robots.length ===0){
            return <h1> loading...</h1>
        }
        else{
        return(
            <div className="tc">
            <h1> Robo Friends</h1>
            <SearchBox searchchange={this.onsearchchange}/>
            <Scroll>
            <CardList robots={filteredrobot}/>
            </Scroll>
            </div>
            )
        }
    }
}



export default App;