import './contact.css';

function Contact() {

    return (
        <>
            <div className="row ms-5 mt-5">

                <div className="col-5">
                    <img src="https://cardive.imgix.net/images/leafs-right.png?w=80&fm=webp" alt="" className="image-bg position-absolute" />

                    <h4 className='mb-5 d-inline-block text-center'>¿Tienes alguna duda? <br />Contáctanos!!!</h4>
                    <ul className='list-unstyled mt-3 ms-3'>
                        <li><span><i className="me-3 mb-3 fa fa-phone"></i>937317311</span></li>
                        <li><span><i className="me-3 mb-3 fa fa-whatsapp"></i>600000666</span></li>
                        <li><span><i className="me-3 fa fa-map-marker"></i>Avda.Diagonal, 686 Barcelona (08034)</span></li>
                        
                    </ul>
                    <div className="d-flex">
                        <div className="border rounded-3 p-3 mt-5 d-flex  text-center me-2">Lunes-Viernes <br />9-20h</div>
                        <div className="border rounded-3 p-3 mt-5 d-flex  text-center">Sábados-Domingos <br />9-15h</div>
                    </div>
                    
                </div>

                <div className="mapouter d-flex col-7">
                    <div className="gmap-canvas">
                        <iframe width="650" height="345" id="gmap_canvas" src="https://maps.google.com/maps?q=barcelona&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>

                    </div>
                </div>

            </div>
        </>

    )

}

export default Contact;