import React, { Component } from "react";
import * as api from "../utils/api";
import PokeBox from "./PokeBox";

class Home extends Component {
  state = {
    input: 0,
    name: "",
  };
  render() {
    return (
      <div className="container">
        <form onSubmit={this.submitChoice}>
          <input
            id="inputBox"
            type="number"
            minLength="1"
            default=""
            value={this.state.input}
            onChange={(event) => {
              const input = event.target.value;
              this.updateInputValue(input);
            }}
          ></input>
          <button type="submit" id="submitButton">
            Submit Choice
          </button>
        </form>
        <PokeBox name={this.state.name} image={this.state.image} />
        <form onSubmit={this.submitChoice}>
          <input
            id="inputBox"
            type="number"
            minLength="1"
            default=""
            value={this.state.input}
            onChange={(event) => {
              const input = event.target.value;
              this.updateInputValue(input);
            }}
          ></input>
          <button type="submit" id="submitButton">
            Submit Choice
          </button>
        </form>
        <PokeBox name={this.state.name} image={this.state.image} />
      </div>
    );
  }

  updateInputValue(input) {
    this.setState({ input });
  }

  submitChoice = (event) => {
    event.preventDefault();

    api.getImage(this.state.input).then((image) => {
      console.log("IMAGE==", image);
      this.setState({ image });
    });
    api.getPokemonName(this.state.input).then((name) => {
      console.log("NAME--", name);
      this.setState({ name });
      console.log("state", this.state);
    });
  };
}

export default Home;
