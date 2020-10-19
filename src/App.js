import React, { Component } from "react";
import "./style.css";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: []
    };
  }

  componentDidMount() {
    let promesa = fetch("https://jsonplaceholder.typicode.com/posts");

    /*promesa.then((response) => {
      response.json().then((data) => {
        console.log(data);
      })
    });*/

    promesa
      .then(response => response.json())
      .then(data => {
        //console.log(data);
        this.setState({
          articles: data
        });
      });
  }

  render() {
    return (
      <div>
        {this.state.articles.map(article => {
          return (
            <div
              className="card"
              style={{ backgroundColor: "red", color: "yellow" }}
            >
              <p>{article.title}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default function App() {
  return (
    <div>
      <Blog />
    </div>
  );
}
