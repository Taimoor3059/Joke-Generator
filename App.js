import React, { Component } from 'react';
import './App.css'


class App extends Component {
  constructor(props) {
      super(props);
      this.state = {
          jokes:[],
          loading: true,
          joke:''

      }

      this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch('http://api.icndb.com/jokes/random/10')
        .then(response => response.json())
        .then(data => {
            
            this.setState({
                jokes: data.value,
                loading: true
            })
            //console.log(this.state.jokes)
        })
  }

  handleSubmit() {
      let rand = Math.floor(Math.random() * this.state.jokes.length);
      this.setState({
          loading: false,
          joke: this.state.jokes[rand]
      })
      console.log(this.state.joke.joke);
  }
  
  render() {
      return (
          <div className='dabba'>
            <button onClick={this.handleSubmit}>Request Joke</button>
            <br />
            <br />
            {
                this.state.loading ? '   loading...' : <p>{this.state.joke.joke}</p>
            }
             
          </div>
      );
  }
      
  
}
export default App;







