import './contact.css';

function Contact() {

    return (
        <>
            <div className="row ms-5 mt-5">

                <div className="d-flex col-5">
                    <img src="https://cardive.imgix.net/images/leafs-right.png?w=80&fm=webp" alt="" className="image-bg position-absolute" />

                    <ul className='list-unstyled mt-3 ms-3'>
                        <h4 className='mb-5'>¿Tienes alguna duda? <br />Contáctanos!!!</h4>
                        <li><span><i className="me-3 mb-3 fa fa-phone"></i>937317311</span></li>
                        <li><span><i className="me-3 mb-3 fa fa-whatsapp"></i>600000666</span></li>
                        <li><span><i className="me-3 fa fa-map-marker"></i>Avda.Diagonal, 686 Barcelona (08034)</span></li>
                        <div className="border rounded-3 p-3 mt-5 d-flex position-absolute text-align-center">Lunes-Viernes <br />9-20h</div>
                        <div className="border rounded-3 p-3 mt-5 d-flex position-absolute text-align-center">Sábados-Domingos <br />9-15h</div>
                    </ul>

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