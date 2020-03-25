import React, { Component } from "react";

class Card extends Component {
  state = {
    fName: "First Name",
    lName: "Last Name",
    pic: "pic",
    email: "email",
    phone: "phone"
  };
  async componentDidMount() {
    try {
      const response = await fetch(`https://randomuser.me/api/?results=1`);
      const data = await response.json();
      console.log("data is=>", data);
      this.setState({
        fName: data.results[0].name.f,
        lName: data.results[0].name.l,
        pic: data.results[0].picture.large,
        email: data.results[0].email,
        phone: data.results[0].phone
      });
    } catch (error) {
      console.error("Error", error);
      return error;
    }
  }
  render() {
    const { fName } = this.state;
    const { pic } = this.state;
    const { lName } = this.state;
    const { email } = this.state;
    const { phone } = this.state;
    return (
      <div>
        <div>
          <img src={pic} alt="pic"></img>
          <p>{fName}</p>
          <p>{lName}</p>
          <p>{email}</p>
          <p>{phone}</p>
        </div>
      </div>
    );
  }
}

export default Card;
