import React, { Component } from 'react';
import './App.css';

const MyContext = React.createContext();

class MyProvider extends Component {
  state = {
    name: "Rob",
    age: 35
  }
  
  render() {
    return (
      <MyContext.Provider value={{ 
        state: this.state,
        benjaminButton: () => this.setState({
          age: this.state.age - 1
        })
         }}>
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

class App extends Component {
  
  render() {
    return (
      <MyProvider>
        <div className="App">
          <h1>I'm the app</h1>
          <Family />
        </div>
      </MyProvider>
    );
  }
}

const Family = () => (
  <div>
    <h2>Family</h2>
    <Person />
  </div>
)

class Person extends Component {
  render() {
    return (
      <div>
        <MyContext.Consumer>
          {(context) => (
            <div>
              <p> Name: {context.state.name}</p>
              <p> Age: {context.state.age}</p>
              <button onClick={context.benjaminButton}>Try Me!</button>
            </div>
          )}
        </MyContext.Consumer>
      </div>
    )  
  }
}
export default App;
