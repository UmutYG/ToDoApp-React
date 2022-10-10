import Axios from "axios";
import React from "react";

export default class Blockquote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: [],
    };
  }
  // getting json with this method as render method is called every sec.
  componentDidMount() {
    Axios.get(
      "https://programming-quotes-api.herokuapp.com/quotes/random"
    ).then((res) => this.setState({ quote: res.data }));
  }
  render() {
    return (
      <div>
        <blockquote className="blockquote text-center">
          <p className="mt-1" id="quote">
            {this.state.quote.en}
          </p>
          <footer className="blockquote-footer mt-2" id="author">
            <cite title="Source Title">{this.state.quote.author}</cite>
          </footer>
        </blockquote>
      </div>
    );
  }
}