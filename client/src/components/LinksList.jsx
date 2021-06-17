import React from "react";
import { Link } from "react-router-dom";

export const LinksList = ({ links }) => {
  if (!links.length) {
    return (
      <h4 className="center" style={{ marginTop: "40px" }}>
        Посилань зараз немає
      </h4>
    );
  }

  return (
    <table className="striped highlight" style={{ marginTop: "40px" }}>
      <thead>
        <tr>
          <th>№</th>
          <th>Оригінал</th>
          <th>Скорочення</th>
          <th>Відкрити</th>
        </tr>
      </thead>

      <tbody>
        {links.map((link, index) => {
          return (
            <tr key={link._id}>
              <td>{index + 1}</td>
              <td>{link.from}</td>
              <td>{link.to}</td>
              <td>
                <Link to={`/detail/${link._id}`}>Детально</Link>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
