 import React, {Component }from 'react';
 import CardsList from './CardsList';
//  import {robots} from './Robots';
 import SearchBox from './SearchBox';
 import 'tachyons';
 import './App.css';

 class App extends Component {
    constructor(){
        super()
        this.state = {
            robots : [],
            searchfield  : ''
        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json()).then(users => this.setState({robots: users}));
    }
    
    onsearchchange = (event) => {
        this.setState ({searchfield: event.target.value})
    }
     render(){
            const filterRobots = this.state.robots.filter(robots=>{
            return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
            })
     return(
            <div className = 'tc'>
                <h1>RoboFriends</h1>
                <SearchBox searchchange = {this.onsearchchange}/>
                <CardsList robots = {filterRobots} />
            </div>
     );
    }
 }
 export default App;