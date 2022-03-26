import React from "react";
import { useParams } from "react-router";
import { getCars } from "../../services/api-service";
import { Link } from 'react-router-dom';
import './cars.css';


function CarDetail({ brand, image }) {

    const [car, setCar] = React.useState(null);
    const { id } = useParams(car);

    React.useEffect(() => {
        getCars(id).then((response) => {
            setCar(response.data);
        });
    }, [id]);

    if (!car) {
        return null;
    }

    

    return <div>
        {car.map((image) =>
            <CarDetail {...image} key={car.image} />
        )}

        <div className="fullContainer w-100 m-auto position-relative overflow-hidden">

        

{/* (document).ready(function(ev){
        $('#custom_carousel').on('slide.bs.carousel', function (evt) {
          $('#custom_carousel .controls li.active').removeClass('active');
          $('#custom_carousel .controls li:eq(`+$(evt.relatedTarget).index()+`)').addClass('active');
        })
    }); */}

            <div className="row">
                <div className="col-12 mb-1">
                    <Link className="back-button link-active text-decoration-none" to="/api/cars">
                        <div>
                            <span>VER FLOTA</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>

        <div className="car target">
            <div className="container car">
                <div className="row">

                    <div className="col-md-6 col-lg-7">
                        <div className="mb-4">
                            <div className="brand fw-bold mb-8 text-align-left">
                                <h3 className="brand">citroen{brand}</h3>
                            </div>
                        </div>
                        {/* <!-- Carousel --> */}
                        <div className="container-fluid">
                            <div id="custom_carousel" className="carousel slide" data-ride="carousel" data-interval="2500">
                                {/* <!-- Wrapper for slides --> */}
                                <div className="carousel-inner">
                                    <div className="item active">
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-md-3"><img src={image[0]} alt="" className="img-responsive" /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-md-3"><img src={image[1]} alt="" className="img-responsive" /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-md-3"><img src={image[2]} alt="" className="img-responsive" /></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item">
                                        <div className="container-fluid">
                                            <div className="row">
                                                <div className="col-md-3"><img src={image[3]} alt="" className="img-responsive" /></div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* <!-- End Item --> */}
                                </div>
                                {/* <!-- End Carousel Inner --> */}
                                <div className="controls">
                                    <ul className="nav">
                                        <li data-target="#custom_carousel" data-slide-to="0" className="active"><Link to="#"><img src="http://placehold.it/50x50" alt="" /></Link></li>
                                        <li data-target="#custom_carousel" data-slide-to="1"><Link to="#"><img src="http://placehold.it/50x50" alt="" /></Link></li>
                                        <li data-target="#custom_carousel" data-slide-to="2"><Link to="#"><img src="http://placehold.it/50x50" alt="" /></Link></li>
                                        <li data-target="#custom_carousel" data-slide-to="3"><Link to="#"><img src="http://placehold.it/50x50" alt="" /></Link></li>
                                    </ul>
                                </div>
                            </div>
                            {/* <!-- End Carousel --> */}
                        </div>

                        {/* <div className="container images position-relative">
                            <div className="carousel position-relative">
                                <div className="planCarousel">
                                    <div className="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">
                                        "slide"
                                        <span className="current">1</span>
                                        " of 8"
                                    </div>
                                    <div id="tns1-mw" className="tns-ovh overflow-hidden">
                                        <div className="tns-inner" id="tns1-iw">
                                            <div className="  tns-slider tns-carousel tns-subpixel tns-calc tns-horizontal d-flex" id="tns1" style={{ transform: 'translate3d(0%, 0px, 0px)' }}>
                                                <div className="planCarousel-item tns-item tns-slide-active" id="tns1-item0">
                                                    <img src={image[0]} alt="" />
                                                </div>
                                                <div className="planCarousel-item tns-item" id="tns1-item1" aria-hidden="true" tabindex="-1">
                                                    <img src={image[1]} alt="" />
                                                </div>
                                                <div className="planCarousel-item tns-item" id="tns1-item2" aria-hidden="true" tabindex="-1">
                                                    <img src={image[2]} alt="" />
                                                </div>
                                                <div className="planCarousel-item tns-item" id="tns1-item3" aria-hidden="true" tabindex="-1">
                                                    <img src={image[3]} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> */}

                    </div>
                    <div className="col-md-6 col-lg-5">


                    </div>
                </div>

            </div>
        </div>
    </div>
}

export default CarDetail;