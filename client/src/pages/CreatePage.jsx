import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useHttp } from "../hooks/http.hook";
import { useHistory } from "react-router-dom";

export const CreatePage = () => {
  const history = useHistory();
  const auth = useContext(AuthContext);
  const { request } = useHttp();
  const [link, setLink] = useState("");

  const pressHandler = async (event) => {
    if (event.key === "Enter") {
      try {
        const data = await request(
          "/api/link/generate",
          "POST",
          { from: link },
          {
            Authorization: `Bearer ${auth.token}`,
          }
        );
        history.push(`/detail/${data.link._id}`);
      } catch (e) {}
    }
  };

  return (
    <div className="row">
      <div className="col s8 offset-2" style={{ paddingTop: "20px" }}>
        <div className="input-field">
          <input id="link" type="text" value={link} onChange={(e) => setLink(e.target.value)} onKeyPress={pressHandler} />
          <label htmlFor="link">Вставте посилання</label>
        </div>
      </div>
    </div>
  );
};
