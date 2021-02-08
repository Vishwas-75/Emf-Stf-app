import React from "react";

function FullStfDetails(props) {
  if (props.stfDetails.length == 1) {
    return (
      <div class="main_div_details">
        <h1 class="main_div_details_h1">Full Details</h1>
        <table rules="all" border="1px">
          <tr class="fd_data">
            <th>StfID:</th>
            <td>{props.stfDetails[0].StfId}</td>{" "}
          </tr>
          <tr class="fd_data">
            <th>FirstName:</th>
            <td>{props.stfDetails[0].Fname}</td>
          </tr>
          <tr class="fd_data">
            <th> LastName:</th>
            <td>{props.stfDetails[0].Lname}</td>
          </tr>
          <tr class="fd_data">
            <th>Email:</th>
            <td>{props.stfDetails[0].Email}</td>
          </tr>
          <tr class="fd_data">
            <th>Phone:</th>
            <td>{props.stfDetails[0].ph}</td>
          </tr>
          <tr class="fd_data">
            <th> Place:</th>
            <td>{props.stfDetails[0].place}</td>
          </tr>
        </table>
      </div>
    );
  }

  return null;
}

export default FullStfDetails;
