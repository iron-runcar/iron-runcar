import { useState, useContext } from "react";
import './register.css';
import { AlertContext } from "../../contexts/alert-context";
import { register } from "../../services/api-service";

function Register() {
    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    });

    const [error, setError] = useState();
    const { showAlert } = useContext(AlertContext);


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

            })
            .catch((error) => {
                setError(error.response.data.message);
            })

    }


    return (
        <>
            {error && <div className="alert alert-danger col-4 m-auto">{error}</div>}
            <form className="register-form" onSubmit={handleSubmit}>
                <img src="https://cardive.app/images/register.webp" alt="" className="form-bg" />


                <div className="m-auto col-4 mb-4">
                    <label htmlFor="name" className="form-label d-flex justify-content-center ">Name</label>
                    <input
                        type="text"
                        className={`form-control justify-content-center ${error?.name ? "is-invalid" : ""} `}
                        id="name"
                        value={data.name}
                        onChange={handleChange}
                    />
                     <div class="invalid-feedback">{ error?.name }</div>
                </div>

                <div className="m-auto col-4 mb-4">
                    <label htmlFor="email" className="form-label d-flex justify-content-center">Email</label>
                    <input
                        type="email"
                        className={`form-control justify-content-center ${error?.email ? "is-invalid" : ""} `}
                        id="email"
                        value={data.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="m-auto col-4">
                    <label htmlFor="password" className="form-label d-flex justify-content-center">Password</label>
                    <input
                        type="password"
                        className={`form-control justify-content-center ${error?.password ? "is-invalid" : ""} `}
                        id="password"
                        value={data.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="m-auto col-4 mt-2">
                    <div className="d-grid">
                        <button type="submit" className="btn btn-primary">Registro</button>
                    </div>
                </div>
            </form>
        </>
    );
}

export default Register;