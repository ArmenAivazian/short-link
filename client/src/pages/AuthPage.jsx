import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { useHttp } from "../hooks/http.hook";
import { useMessage } from "../hooks/message.hook";

export const AuthPage = () => {
  const auth = useContext(AuthContext);
  const message = useMessage();
  const { loading, error, request, clearError } = useHttp();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    message(error);
    clearError();
  }, [error, message, clearError]);

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  const registerHandler = async () => {
    try {
      const data = await request("/api/auth/register", "POST", { ...form });
      message(data.message);
    } catch (e) {}
  };

  const loginHandler = async () => {
    try {
      const data = await request("/api/auth/login", "POST", { ...form });
      auth.login(data.token, data.userId);
    } catch (e) {}
  };

  return (
    <div className="row">
      <div className="col s6 offset-s3">
        <h1>Скороти посилання</h1>
        <div className="card blue-grey darken-1">
          <div className="card-content white-text">
            <span className="card-title" style={{ marginBottom: 30 }}>
              Авторизація
            </span>
            <div>
              <div className="input-field">
                <input id="email" type="email" name="email" style={{ color: "#fff" }} onChange={changeHandler} value={form.email} />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field">
                <input id="password" type="password" name="password" style={{ color: "#fff" }} onChange={changeHandler} value={form.password} />
                <label htmlFor="password">Пароль</label>
              </div>
            </div>
          </div>
          <div className="card-action">
            <button className="waves-effect waves-light btn" style={{ marginRight: "10px" }} onClick={loginHandler} disabled={loading}>
              Увійти
            </button>
            <button className="waves-effect light-blue darken-1 btn" onClick={registerHandler} disabled={loading}>
              Регістрація
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
