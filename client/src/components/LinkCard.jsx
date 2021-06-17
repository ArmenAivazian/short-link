import React from "react";

export const LinkCard = ({ link }) => {
  return (
    <ul className="collection with-header" style={{ marginTop: "40px" }}>
      <li className="collection-header">
        <h4>Інформація про посилання</h4>
      </li>
      <li className="collection-item">
        Оригінал:
        <a href={link.from} target="_blank" rel="noopener noreferrer" style={{ marginLeft: "10px" }}>
          {link.from}
        </a>
      </li>
      <li className="collection-item">
        Скорочення:
        <a href={link.to} target="_blank" rel="noopener noreferrer" style={{ marginLeft: "10px" }}>
          {link.to}
        </a>
      </li>
      <li className="collection-item">
        Кількість кліків: <strong>{link.clicks}</strong>
      </li>
      <li className="collection-item">
        Дата створення: <strong>{new Date(link.date).toLocaleDateString()}</strong>
      </li>
    </ul>
  );
};
