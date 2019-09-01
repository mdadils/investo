import React, { Component } from "react";
import Header from "../../components/Header";
import CardListContainer from "../../components/CardListContainer";

class ContactsPage extends Component {
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

export default ContactsPage;
