import React, { Component } from "react";
import "./App.css";
import Header from "./templates/components/Header";
import CardListContainer from "./templates/components/CardListContainer";

class App extends Component {
  componentDidMount() {
    setTimeout(() => {
      this.props.fetchData();
    }, 3000);
  }

  render() {
    return (
      <div className="App">
        <Header data={this.props.contactList} />
        <div className="container">
          <CardListContainer data={this.props.contactList} />
        </div>
      </div>
    );
  }
}

export default App;
