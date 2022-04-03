import './contact.css';

function Contact() {

    return (
        <>
            <div className="row ms-5 mt-5">

                <div className="col-5">
                    <img src="https://cardive.imgix.net/images/leafs-right.png?w=80&fm=webp" alt="" className="image-bg-contact position-absolute" />

                    <h4 className='mb-5 d-inline-block text-center'>¿Tienes alguna duda? <br />Contáctanos!!!</h4>
                    <ul className='list-unstyled mt-3 ms-3'>
                        <li><span><i className="icon me-3 mb-3 fa fa-phone"></i>937317311</span></li>
                        <li><span><i className="icon me-3 mb-3 fa fa-whatsapp"></i>600000666</span></li>
                        <li><span><i className="icon me-3 fa fa-map-marker"></i>Avda.Diagonal, 686 Barcelona (08034)</span></li>

                    </ul>
                    <div className="d-flex">
                        <div className="box-1 border rounded-3 p-3 mt-5 d-flex  text-center me-2">Lunes-Viernes <br />9-20h</div>
                        <div className="box-1 border rounded-3 p-3 mt-5 d-flex  text-center">Sábados-Domingos <br />9-15h</div>
                    </div>

                </div>

                <div className="mapouter d-flex col-7">
                    <div className="gmap-canvas position-absolute w-80">
                      <iframe width="532" height="345" src="https://maps.google.com/maps?width=532&amp;height=345&amp;hl=en&amp;q=Avda.%20diagonal%2C%20686%20Barcelona%2C%20Spain+(lo%CD%9Dok%C9%99r)&amp;ie=UTF8&amp;t=&amp;z=12&amp;iwloc=B&amp;output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
                    </div>
                </div>
            </div>
        </>

    )

}

export default Contact;