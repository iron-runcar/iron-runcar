
import React, { useEffect, useState } from "react";
import { getCars } from "../../services/api-service";


function CarList() {
    const [cars, setCars] = useState();

    useEffect(() => {
        getCars()
            .then((response) => {
                setCars(response.data)
            })
            .catch(error => console.error(error))
    }, []);
    

    return <div>
        {JSON.stringify(cars)}

        {/* {cars.map((car) => (
            <div></div>
        ))}
        
    
        <div className="col-md-4">
        <div className="card rounded">
            <div className="card-image">
                <span className="card-notify-badge">Low KMS</span>
                <span className="card-notify-year">{car.year}</span>
                <img className="img-fluid" src={car.image} />
            </div>
            <div className="card-image-overlay m-auto">
                <span className="card-detail-badge">Used</span>
                <span className="card-detail-badge">{car.price}</span>
                <span className="card-detail-badge">{car.kilometers}</span>
            </div>
            <div className="card-body text-center">
                <div className="ad-title m-auto">
                    <h5>{car.brand}</h5>
                </div>
                <a className="ad-btn" href="#">View</a>
            </div>
        </div>
    </div> */}




        {/* <div classNameName="container-fluid d-flex justify-content-center">
    <div classNameName="row mt-5">
        <div classNameName="col-sm-4">
            <div classNameName="card"> <img src={cars.image} classNameName="card-img-top" width="100%"></img>
                <div classNameName="card-body pt-0 px-0">
                    <div classNameName="d-flex flex-row justify-content-between mb-0 px-3"> <small classNameName="text-muted mt-1">STARTING AT</small>
                        <h6>&dollar;22,495&ast;</h6>
                    </div>
                    <hr classNameName="mt-2 mx-3"></hr>
                    <div classNameName="d-flex flex-row justify-content-between px-3 pb-4">
                        <div classNameName="d-flex flex-column"><span classNameName="text-muted">Fuel Efficiency</span><small classNameName="text-muted">L/100KM&ast;</small></div>
                        <div classNameName="d-flex flex-column">
                            <h5 classNameName="mb-0">8.5/7.1</h5><small classNameName="text-muted text-right">(city/Hwy)</small>
                        </div>
                    </div>
                    <div classNameName="d-flex flex-row justify-content-between p-3 mid">
                        <div classNameName="d-flex flex-column"><small classNameName="text-muted mb-1">ENGINE</small>
                            <div classNameName="d-flex flex-row"><img src="https://imgur.com/iPtsG7I.png" width="35px" height="25px"></img>
                                <div classNameName="d-flex flex-column ml-1"><small classNameName="ghj">1.4L MultiAir</small><small classNameName="ghj">16V I-4 Turbo</small></div>
                            </div>
                        </div>
                        <div classNameName="d-flex flex-column"><small classNameName="text-muted mb-2">HORSEPOWER</small>
                            <div classNameName="d-flex flex-row"><img src="https://imgur.com/J11mEBq.png"></img>
                                <h6 classNameName="ml-1">135 hp&ast;</h6>
                            </div>
                        </div>
                    </div> <small classNameName="text-muted key pl-3">Standard key Features</small>
                    <div classNameName="mx-3 mt-3 mb-2"><button type="button" classNameName="btn btn-danger btn-block"><small>BUILD & PRICE</small></button></div> <small classNameName="d-flex justify-content-center text-muted">*Legal Disclaimer</small>
                </div>
            </div>
        </div>*/}
    
        
    </div>;
}

export default CarList;