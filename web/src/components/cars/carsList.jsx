
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
        
        {/* <div className="container-fluid d-flex justify-content-center">
    <div className="row mt-5">
        <div className="col-sm-4">
            <div className="card"> <img src="https://imgur.com/edOjtEC.png" className="card-img-top" width="100%"></img>
                <div className="card-body pt-0 px-0">
                    <div className="d-flex flex-row justify-content-between mb-0 px-3"> <small className="text-muted mt-1">STARTING AT</small>
                        <h6>&dollar;22,495&ast;</h6>
                    </div>
                    <hr className="mt-2 mx-3"></hr>
                    <div className="d-flex flex-row justify-content-between px-3 pb-4">
                        <div className="d-flex flex-column"><span className="text-muted">Fuel Efficiency</span><small className="text-muted">L/100KM&ast;</small></div>
                        <div className="d-flex flex-column">
                            <h5 className="mb-0">8.5/7.1</h5><small className="text-muted text-right">(city/Hwy)</small>
                        </div>
                    </div>
                    <div className="d-flex flex-row justify-content-between p-3 mid">
                        <div className="d-flex flex-column"><small className="text-muted mb-1">ENGINE</small>
                            <div className="d-flex flex-row"><img src="https://imgur.com/iPtsG7I.png" width="35px" height="25px"></img>
                                <div className="d-flex flex-column ml-1"><small className="ghj">1.4L MultiAir</small><small className="ghj">16V I-4 Turbo</small></div>
                            </div>
                        </div>
                        <div className="d-flex flex-column"><small className="text-muted mb-2">HORSEPOWER</small>
                            <div className="d-flex flex-row"><img src="https://imgur.com/J11mEBq.png"></img>
                                <h6 className="ml-1">135 hp&ast;</h6>
                            </div>
                        </div>
                    </div> <small className="text-muted key pl-3">Standard key Features</small>
                    <div className="mx-3 mt-3 mb-2"><button type="button" className="btn btn-danger btn-block"><small>BUILD & PRICE</small></button></div> <small className="d-flex justify-content-center text-muted">*Legal Disclaimer</small>
                </div>
            </div>
        </div>
        <div className="col-sm-4">
            <div className="card"> <img src="https://imgur.com/SKZolYE.png" className="card-img-top" width="100%"></img>
                <div className="card-body pt-0 px-0">
                    <div className="d-flex flex-row justify-content-between mb-0 px-3"> <small className="text-muted mt-1">STARTING AT</small>
                        <h6>&dollar;22,495&ast;</h6>
                    </div>
                    <hr className="mt-2 mx-3"></hr>
                    <div className="d-flex flex-row justify-content-between px-3 pb-4">
                        <div className="d-flex flex-column"><span className="text-muted">Fuel Efficiency</span><small className="text-muted">L/100KM&ast;</small></div>
                        <div className="d-flex flex-column">
                            <h5 className="mb-0">8.5/7.1</h5><small className="text-muted text-right">(city/Hwy)</small>
                        </div>
                    </div>
                    <div className="d-flex flex-row justify-content-between p-3 mid">
                        <div className="d-flex flex-column"><small className="text-muted mb-1">ENGINE</small>
                            <div className="d-flex flex-row"><img src="https://imgur.com/iPtsG7I.png" width="35px" height="25px"></img>
                                <div className="d-flex flex-column ml-1"><small className="ghj">1.4L MultiAir</small><small className="ghj">16V I-4 Turbo</small></div>
                            </div>
                        </div>
                        <div className="d-flex flex-column"><small className="text-muted mb-2">HORSEPOWER</small>
                            <div className="d-flex flex-row"><img src="https://imgur.com/J11mEBq.png"></img>
                                <h6 className="ml-1">135 hp&ast;</h6>
                            </div>
                        </div>
                    </div> <small className="text-muted key pl-3">Standard key Features</small>
                    <div className="mx-3 mt-3 mb-2"><button type="button" className="btn btn-danger btn-block"><small>BUILD & PRICE</small></button></div> <small className="d-flex justify-content-center text-muted">*Legal Disclaimer</small>
                </div>
            </div>
        </div>
        <div className="col-sm-4">
            <div className="card"> <img src="https://imgur.com/gUQNKPd.png" className="card-img-top" width="100%"></img>
                <div className="card-body pt-0 px-0">
                    <div className="d-flex flex-row justify-content-between mb-0 px-3"> <small className="text-muted mt-1">STARTING AT</small>
                        <h6>&dollar;22,495&ast;</h6>
                    </div>
                    <hr className="mt-2 mx-3"></hr>
                    <div className="d-flex flex-row justify-content-between px-3 pb-4">
                        <div className="d-flex flex-column"><span className="text-muted">Fuel Efficiency</span><small className="text-muted">L/100KM&ast;</small></div>
                        <div className="d-flex flex-column">
                            <h5 className="mb-0">8.5/7.1</h5><small className="text-muted text-right">(city/Hwy)</small>
                        </div>
                    </div>
                    <div className="d-flex flex-row justify-content-between p-3 mid">
                        <div className="d-flex flex-column"><small className="text-muted mb-1">ENGINE</small>
                            <div className="d-flex flex-row"><img src="https://imgur.com/iPtsG7I.png" width="35px" height="25px"></img>
                                <div className="d-flex flex-column ml-1"><small className="ghj">1.4L MultiAir</small><small className="ghj">16V I-4 Turbo</small></div>
                            </div>
                        </div>
                        <div className="d-flex flex-column"><small className="text-muted mb-2">HORSEPOWER</small>
                            <div className="d-flex flex-row"><img src="https://imgur.com/J11mEBq.png"></img>
                                <h6 className="ml-1">135 hp&ast;</h6>
                            </div>
                        </div>
                    </div> <small className="text-muted key pl-3">Standard key Features</small>
                    <div className="mx-3 mt-3 mb-2"><button type="button" className="btn btn-danger btn-block"><small>BUILD & PRICE</small></button></div> <small className="d-flex justify-content-center text-muted">*Legal Disclaimer</small>
                </div>
            </div>
        </div>
    </div>
</div> */}
    
        
    </div>;
}

export default CarList;