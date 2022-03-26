import React from "react";
import './register.css';
import { AlertContext } from "../../contexts/alert-context";
import { register } from "../../services/api-service";

function Register() {
    const [data, setData] = React.useState({
        name: "",
        email: "",
        password: "",
    });

    const [error, setError] = React.useState();
    const { showAlert } = React.useContext(AlertContext);


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
            showAlert("successfully registered");
            
          })
            .catch((error) => {
            setError(error.response.data.message);
      });

    }
            

     return (
         <div>         
            {error && <div className="alert alert-danger">{error}</div>}
                <form onSubmit= {handleSubmit}>   
            
                    <div className="m-auto col-4 mb-4">
                            <label for="name" className="form-label d-flex justify-content-center">
                             Name
                            </label>
                        <input
                            type="text"
                        className="form-control"
                        id="name"
                        value={data.name}
                        onChange={handleChange}
                        />
                    </div>

                    <div className="m-auto col-4 mb-4">
                     <label for="name" className="form-label d-flex justify-content-center">
                        Email
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={data.email}
                        onChange={handleChange}
                    />
                </div>

                <div className="m-auto col-4">
                    <label for="name" className="form-label d-flex justify-content-center">
                    Password
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="name"
                        value={data.password}
                        onChange={handleChange}
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                Register
                </button>
                
            </form>
            
            <div className="col-4"><img src= "https://cardive.app/images/register.webp" alt="" className="img" /></div>
            
        </div>
    );
}

export default Register;

