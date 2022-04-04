import { useState, useContext } from "react";
import './register.css';
import { AlertContext } from "../../contexts/alert-context";
import { register } from "../../services/api-service";
import {AuthContext} from "../../contexts/auth-context";
import { Navigate, useNavigate } from "react-router-dom";



function Register() {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [error, setError] = useState();
    const { showAlert } = useContext(AlertContext);
    const { user } = useContext(AuthContext);
    const navigate = useNavigate();


    function handleChange(user) {
        const key = user.target.id;
        const value = user.target.value;

        setData({
            ...data,
            [key]: value,
        });
    }

    function handleSubmit(user) {
        user.preventDefault();

        register(data)
            .then((response) => {
                showAlert("Bienvenido Looker");
                navigate ("/login");

            })
            .catch((error) => {
                setError(error.response.data.message);
            })

    }
    if (user) {
        return <Navigate to="/login" />;
    }


    return (
        <>
        <div className="d-flex w-100 mt-1">

        <h2 className="text-center m-auto"><b>Estas a un paso de ser un lo͝okər!!<br/> Regístrate</b></h2>

    </div>
    <img src="https://cardive.app/_nuxt/img/handdrawn_attention.f70222c.svg" alt="hand rounded svg" className="icon-draw-12 position-absolute" />

            {error && <div className="alert alert-danger col-4 m-auto">{error}</div>}
            <form className="register-form" onSubmit={handleSubmit}>
                <img src="https://cardive.app/images/register.webp" alt="" className="form-bg" />


                <div className="m-auto col-4 mb-4">
                    <label htmlFor="name" className="form-label d-flex justify-content-center mb-3"><strong>Name</strong></label>
                    <input
                        type="text"
                        className={`form-control text-center justify-content-center ${error?.name ? "is-invalid" : ""} `}
                        id="name"
                        value={data.name}
                        onChange={handleChange}
                        placeholder="Pepe looker Soy"
                    />
                     <div class="invalid-feedback">{ error?.name }</div>
                </div>

                <div className="m-auto col-4 mb-4">
                    <label htmlFor="email" className="form-label d-flex justify-content-center mb-3"><strong>Email</strong></label>
                    <input
                        type="email"
                        className={`form-control text-center justify-content-center ${error?.email ? "is-invalid" : ""} `}
                        id="email"
                        value={data.email}
                        onChange={handleChange}
                        placeholder="lo͝okər@example.com"
                    />
                </div>

                <div className="m-auto col-4">
                    <label htmlFor="password" className="form-label d-flex justify-content-center mb-3"><strong>Password</strong></label>
                    <input
                        type="password"
                        className={`form-control text-center justify-content-center ${error?.password ? "is-invalid" : ""} `}
                        id="password"
                        value={data.password}
                        onChange={handleChange}
                        placeholder="********"
                    />
                </div>
                <div className="m-auto col-4 mt-2">
                    <div className="d-grid">
                        <button type="submit" className="btn btn-outline-success mt-5">Crear cuenta</button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Register;