import React from "react";

export default function CommunityTable() {
  return (
    <div>
      <div className="admintables">
        <h1>Community section</h1>
        <div className="overview-card text-center">
          <table className="table table-hover">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">CarName</th>
                <th scope="col">Date</th>
                <th scope="col">City</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Name</td>
                <td>CarName</td>
                <td>Date</td>
                <td>City</td>
                <td className="service-delete">
                  <i className="fa fa-trash-o fa-lg"></i>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
