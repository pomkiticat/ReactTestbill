import React from "react";
import Rest from "./restdata";

class FectchRest extends React.Component {
  state = { restData: [] };

  componentDidMount() {
    fetch("https://api.github.com/users/hacktivist123/repos")
      .then((res) => res.json())
      .then((data) => {
        this.setState({ restData: data });
      })
      .catch(console.log);
  }
  render() {
    return <Rest rest={this.state.restData} />;
  }
}

export default FectchRest;
