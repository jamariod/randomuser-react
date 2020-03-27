import React, { Component } from "react";
import "bulma/css/bulma.css";
import {
  Card,
  CardContent,
  Content,
  CardImage,
  Image,
  Media,
  MediaLeft,
  MediaContent,
  Title
} from "bloomer";

class Cardusers extends Component {
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
        fName: data.results[0].name.first,
        lName: data.results[0].name.last,
        picture: data.results[0].picture.large,
        email: data.results[0].email,
        phone: data.results[0].phone
      });
    } catch (error) {
      console.error("Error", error);
      return error;
    }
  }
  render() {
    return (
      <Card className="cardStyle">
        <CardImage isSize={2}>
          <Image src={this.state.picture} />
        </CardImage>
        <CardContent>
          <Media>
            <MediaLeft isDisplay="flex" isFlex="center">
              <Image isSize="48x48" src={this.state.picture} />
            </MediaLeft>
            <MediaContent>
              <Title isSize={4}>
                {this.state.fname} {this.state.lname}
              </Title>
            </MediaContent>
          </Media>
          <Content hasTextAlign="left">
            <p>
              <b>Email:</b> {this.state.email}
            </p>
            <p>
              <b>Phone:</b> {this.state.phone}
            </p>
          </Content>
        </CardContent>
      </Card>
    );
  }
}

export default Cardusers;
