import React, { Component } from "react";
import { render } from "react-dom";
import NavBar from './nav/Navbar';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      loaded: false,
      placeholder: "Loading"
    };
  }

  componentDidMount() {
    fetch("api/app")
      .then(response => {
        if (response.status > 400) {
          return this.setState(() => {
            return { placeholder: "Something went wrong!" };
          });
        }
        return response.json();
      })
      .then(data => {
        this.setState(() => {
          return {
            data,
            loaded: true
          };
        });
      });
  }

  render() {
      return (
          <div>
              <NavBar />
              
      <ul>
        {this.state.data.map(contact => {
            return (
            
                <li key={contact.id}>
                    
                    <h1>Sender:{contact.name}</h1>
                    <br />
                    <span>Email: </span> {contact.email}
                    <br />
                    <b>Message: {contact.message} </b>
            </li>
          );
        })}
              </ul>
              </div>
    );
  }
}

export default App;

const container = document.getElementById("app");
render(<App />, container);