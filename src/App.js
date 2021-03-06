import React, { Component } from 'react';
import './App.css';

const MyContext = React.createContext();

class App extends Component {
  state = {
    name: "Rob",
    age: 35
  }
  
  render() {
    return (
      <MyContext.Provider value={{
        state: this.state,
        benjaminButton: () => this.setState({ age: this.state.age - 1})
      }}>
        <div className="App">
          <h1>I'm the app</h1>
          <Family />
        </div>
      </MyContext.Provider>

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
              <p>Name: {context.state.name}</p>
              <p>Age: {context.state.age}</p>
              <button onClick={context.benjaminButton}>Try me!</button>
            </div>
          )}
        </MyContext.Consumer>
      </div>
    )
  }
}
export default App;
