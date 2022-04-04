import { useContext, useState } from "react";
import {  Navigate, useNavigate } from "react-router";
import { AlertContext } from "../../contexts/alert-context";
import { AuthContext } from "../../contexts/auth-context";
import { login } from "../../services/api-service";
import React from "react";



function Login() {
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const { handleLogin, user } = React.useContext(AuthContext);

    function handleChange(user) {
        setData({
            ...data,
            [user.target.id] : user.target.value,
        });
    }

    const { showAlert } = useContext(AlertContext);

    function handleSubmit(user) {
        user.preventDefault(user);

        login(data)
            .then((response) => {
                showAlert(`Bienvenido ${response.data.name}!`);
                console.log("logado")
                handleLogin(response.data);
                navigate ("/cars");
            })
            .catch((error) => {
                setError(error.response?.data.message || error.message);
            })
    }

    if (user) {
        return <Navigate to="/profile" />;
    }


    return (

        <>
        <div className="d-flex w-100 mt-3">
        <img src="https://cardive.app/_nuxt/img/handdrawn_attention.f70222c.svg" alt="hand rounded svg" className="icon-draw-11 position-absolute" />

        <h2 className="text-center m-auto"><b>¡Hello lo͝okər! <br/>Logéate</b></h2>

    </div>
        {error && <div className="alert alert-danger col-4 m-auto">{error}</div>}
        <form className="register-form" onSubmit={handleSubmit}>
                <img src="https://cardive.app/images/register.webp" alt="" className="form-bg" />

                <div className="m-auto col-4 mb-4">
                    <label htmlFor="email" className="form-label d-flex justify-content-center mb-3">
                        <strong>Email</strong>
                    </label>
                    <input
                        type="email"
                        className={`form-control text-center justify-content-center ${error?.email ? "is-invalid" : ""} `}
                        id="email"
                        value={data.email}
                        onChange={handleChange}
                        placeholder="lo͝okər@example.com"
                    />
                    <div class="invalid-feedback">{ error?.name }</div>
                </div>

                <div className="m-auto col-4">
                    <label htmlFor="password" className="form-label d-flex justify-content-center mb-3">
                        <strong>Password</strong>
                    </label>
                    <input
                        type="password"
                        className="form-control justify-content-center text-center"
                        id="password"
                        value={data.password}
                        onChange={handleChange}
                        placeholder="********"
                    />
                </div>
                <div className="m-auto col-4 mt-2">
                    <div className="d-grid">
                        <button type="submit" className="btn btn-outline-success mt-5">Login</button>
                    </div>
                </div>
            </form>
        
        
        </>
    );
}

export default Login;