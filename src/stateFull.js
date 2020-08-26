import React from "react";

class StateFull extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        {
          id: 1,
          name: "Foo",
          age: "20",
          salary: 46546
        },
        {
          id: 2,
          name: "Bar",
          age: "30",
          salary: 45450
        },
        {
          id: 3,
          name: "Baz",
          age: "40",
          salary: 56246
        }
      ],
      data1: [
        {
          catId: 1,
          name: "Vujo",
          type: "Desi"
        },
        {
          catId: 11,
          name: "Hamba",
          type: "Parsi"
        },
        {
          catId: 12,
          name: "Baghira",
          type: "black panther"
        }
      ]
    };
  }
  render() {
    return (
      <div>
        <Header />
        <table>
          <tbody>
            {this.state.data.map((person, i) => (
              <TableRow key={i} data={person} />
            ))}
          </tbody>
        </table>
        <br />
        <table>
          <tbody>
            {this.state.data1.map((cat, i) => (
              <TableCat key={i} data={cat} />
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Header</h1>
      </div>
    );
  }
}
class TableRow extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.data.id}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.age}</td>
        <td>{this.props.data.salary}</td>
      </tr>
    );
  }
}

class TableCat extends React.Component {
  render() {
    return (
      <tr>
        <td>{this.props.data.catId}</td>
        <td>{this.props.data.name}</td>
        <td>{this.props.data.type}</td>
        <td>{this.props.data.salary}</td>
      </tr>
    );
  }
}
export default StateFull;
