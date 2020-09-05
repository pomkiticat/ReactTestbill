import React from "react";

const Rest = ({ rest }) => {
  return (
    <div>
      <table>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Full Name</th>
          <th>Login </th>
        </tr>
        {rest.map((restdata) => (
          <tr>
            <td>{restdata.id}</td>
            <td>{restdata.name}</td>
            <td>{restdata.full_name}</td>

            <td>{restdata.owner.id}</td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default Rest;
