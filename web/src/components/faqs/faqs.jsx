import './faqs.css';

function Faqs() {

    return (
        <>
        <div className="tittle d-flex justify-content-center fw-bolder m-auto"><b>What the FAQ?</b>
        <img src="https://cardive.imgix.net/images/leafs-right.png?w=80&fm=webp" alt="" className="image-bg-faqs position-absolute" />
        </div>
        <div className="text d-flex justify-content-center fw-bold fs-3">lo͝okər <br/>sal de dudas!! </div>

        <div className="accordion" id="accordionPanelsStayOpenExample">
            <div className="accordion-item">
                <h4 className="accordion-header" id="panelsStayOpen-headingOne">
                    <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                        <strong>¿Suscribirse?¿Eso no era para ver series?</strong>
                    </button>
                </h4>
                <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                    <div className="accordion-body">
                        Pues desde ahora la suscripción no es solo cosa de Netflix o Spotify, aunque funciona exactamente igual Looker puedes suscribirte a un vehículo de nuestro catálogo sin procupacuparte de nada más. Pagas una cuota mensual, y pista.
                    </div>
                </div>
            </div>

            <div className="accordion-item">
                <h4 className="accordion-header" id="panelsStayOpen-headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                        <strong>¿Cómo reservo un coche en Looker?</strong>
                    </button>
                </h4>
                <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                    <div className="accordion-body">
                        Elige el que más encaje contigo, regístrate y resérvalo. A nosotros también nos sorprende que sea tan fácil. Olvídate de papeleos y llamadas, ¡somos una plataforma 100% online!
                    </div>
                </div>
            </div>

            <div className="accordion-item">
                <h4 className="accordion-header" id="panelsStayOpen-headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        <strong>¿Qué incluye la suscripción?</strong>
                    </button>
                </h4>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                    <div className="accordion-body">
                        Incluye impuestos, seguro y mantenimiento. Excepto la gasolina, todo lo que puedas necesitar.
                    </div>
                </div>
            </div>

            <div className="accordion-item">
                <h4 className="accordion-header" id="panelsStayOpen-headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        <strong>¿Hay que pagar un depósito al contratar?</strong>
                    </button>
                </h4>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                    <div className="accordion-body">
                        ¡Nunca! Somos libres y entendemos que nuestro cliente también es libre, como el sol cuando amanece. Aunque seamos muy flexibles y  no pidamos depósito, ten en cuenta que el vehículo tienes que devolverlo en las mismas condiciones que te lo entregamos.
                    </div>
                </div>
            </div>

            <div className="accordion-item">
                <h4 className="accordion-header" id="panelsStayOpen-headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        <strong>¿Qué documentación tengo que aportar?</strong>
                    </button>
                </h4>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                    <div className="accordion-body">
                        Necesitamos saber quién eres (DNI/NIE), que tienes carnet de conducir (permiso de conducción válido para circular en España) y un recibo a tu nombre como comprobante de tu domicio.¡Nada más! Hasta para a puntarte algym te piden más cosas...
                    </div>
                </div>
            </div>

            <div className="accordion-item">
                <h4 className="accordion-header" id="panelsStayOpen-headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                        <strong>¿Qué condiciones tiene el seguro?</strong>
                    </button>
                </h4>
                <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                    <div className="accordion-body">
                        A todo riesgo, con franquicia de 500€ +IVA por cada parte. De los mejores del mercado, aunque siempre es mejor conducir con calma y no tener ningún problema.
                    </div>
                </div>
            </div>

        </div>
        </>
    );

}

export default Faqs;