function Carousel({ id, images }) {

    return (
        <div id={id} className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                {images.map((image, i) => {
                    const active = i === 0 ? "active" : ""
                    return(
                        <button type="button" data-bs-target={`#${id}`} data-bs-slide-to={i} key={i} className={active}></button>
                    )
                })}
                
            </div>
            <div className="carousel-inner">
                {images.map((image, i) => {
                    const active = i === 0 ? "active" : ""
                    return (
                        <div className={`carousel-item ${active}`} key={i}>
                            <img src={image} className="d-block w-100" alt={i} />
                        </div>
                    )
                })}
               
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target={`#${id}`} data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target={`#${id}`} data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}


export default Carousel;