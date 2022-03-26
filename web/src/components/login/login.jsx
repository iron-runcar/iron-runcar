import { useContext, useState } from "react";
import { Navigate, useNavigate } from "react-router";
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
                handleLogin(response.data);
                navigate("/");
            })
            .catch((error) => {
                setError(error.response.data.message);
            })
    }

    if (user) {
        return <Navigate to="/" />;
    }


    return (
        <>
        {error && <div className="alert alert-danger col-4 m-auto">{error}</div>}
        <form className="register-form" onSubmit={handleSubmit}>
                <img src="https://cardive.app/images/register.webp" alt="" className="form-bg" />

                <div className="m-auto col-4 mb-4">
                    <label htmlFor="email" className="form-label d-flex justify-content-center">
                        Email
                    </label>
                    <input
                        type="email"
                        className={`form-control justify-content-center ${error?.email ? "is-invalid" : ""} `}
                        id="email"
                        value={data.email}
                        onChange={handleChange}
                    />
                    <div class="invalid-feedback">{ error?.name }</div>
                </div>

                <div className="m-auto col-4">
                    <label htmlFor="password" className="form-label d-flex justify-content-center">
                        Password
                    </label>
                    <input
                        type="password"
                        className="form-control justify-content-center"
                        id="password"
                        value={data.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="m-auto col-4 mt-2">
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">Login</button>
                    </div>
                </div>
            </form>
        
        
        </>
    );
}

export default Login;