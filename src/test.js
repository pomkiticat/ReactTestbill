import React from "react";
import "./styles.css";

class Car extends React.Component {
  render() {
    return (
      <div class="Signup">
        <h1>Please Sign in</h1>
        <table>
          <tr>
            <td>Name : </td>
            <td>
              <input type="text" />
            </td>
          </tr>
          <tr>
            <td>Email : </td>
            <td>
              <input type="Email" />
            </td>
          </tr>

          <tr>
            <td>Password : </td>
            <td>
              <input type="password" />
            </td>
          </tr>

          <tr>
            <td>Confirm Password : </td>
            <td>
              <input type="password" />
            </td>
          </tr>
          <tr>
            <td>
              <input type="submit" value="Sign Up" />
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Car;
