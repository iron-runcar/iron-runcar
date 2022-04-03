import './home.css';
import homeimg from '../images/Homeimg.png'


function Home() {


    return (

        <>
            <div className="d-flex w-100">
                <img src={homeimg} alt="home_img" className="image-bg m-auto" />
            </div>
            <div className="d-flex w-100">
            </div>

            <div className="d-flex w-100">
                <h1 className="text-center m-auto"><b>Suscríbete a tu próximo coche</b></h1>
            </div>
            <div className="d-flex w-100 mt-2">
                <h4 className="text-center m-auto fw-light mb-5">La nueva forma de tener coche con todo incluido</h4>
            </div>

            <div className="d-flex row text-center mt-5 mb-4">
                <div className="col-12 steps mb-4">
                    <h3 className="">¿Cómo funciona Looker?</h3>
                </div>
            </div>

            <ul className="row justify-content-between list-unstyled mt-5">
                <li className="col-2 subscribeSteps__item mb-3 text-center">
                    <span class="badge rounded-pill bg-success w-20 mb-4 m-auto">1</span>

                    <p className="title fw-bold">Elige tu coche, Looker </p>
                    <p>Elige el coche que más se adapte a tus necesidades, y configura el kilometraje y la duración de tu suscripción.</p>

                </li>

                <li className="col-2 subscribeSteps__item mb-3 text-center">
                    <span class="badge rounded-pill bg-success w-20 mb-4 m-auto">2</span>

                    <p className="title fw-bold ">Regístrate, suscríbete</p>
                    <p>Regístrate, y a continuación sube tu documentación y sigue en tiempo real el estado de tu solicitud.</p>

                </li>

                <li className="col-2 subscribeSteps__item mb-3 text-center">
                    <span class="badge rounded-pill bg-success w-20 mb-4 m-auto">3</span>

                    <p className="title fw-bold">Entrega de tu vehículo</p>
                    <p>Aprobada tu suscripción, recoje el coche en unos de nuestros puntos de entrega o te lo llevamos a donde quieras.</p>

                </li>

                <li className="col-2 subscribeSteps__item mb-3 text-center">
                    <span class="badge rounded-pill bg-success w-20 mb-4 m-auto">4</span>

                    <p className="title fw-bold">Cambiamos contigo siempre</p>
                    <p>Cambia de categoría o modelo según cambien tus necesidades. Con Looker, siempre tienes el coche que necesitas.</p>

                </li>

            </ul>

            <section className="why-container me-5">
                <div className="row all mb-5">
                    <div className="col-4">
                        <h3 className='title-section fw-bolder'>¿Por qué Looker?</h3>
                    </div>
                    <div className="col-4">
                        <img src="https://cardive.app/_nuxt/img/handdrawn_rounded.2b2f014.svg" alt="hand rounded svg" className="icon-draw position-absolute" />

                        <h5 className='mb-3'>100% flexible, <br /> tú decides</h5>
                        <p className='me-5'>Cambia de coche si quieres, a partir del sexto mes según tus necesidades.</p>

                    </div>
                    <div className="col-4">
                        <img src="https://cardive.app/_nuxt/img/handdrawn_arrow.496d746.svg" alt="hand rounded svg" className="icon-draw-1 position-absolute" />

                        <h5 className='mb-3'>Te lo llevamos <br />a la puerta de tu casa</h5>
                        <p className='me-5'>O si te viene mejor, puedes pasar a recogerlo totalmente gratis</p>
                    </div>
                </div>

                <div className="row all mt-2">
                    <div className="col-4">
                    </div>
                    <div className="col-4">

                        <h5 className='mb-3'>Lo que ves <br />es lo que pagas</h5>
                        <div className="pr">
                            <img src="https://cardive.app/_nuxt/img/handdrawn_underline.9ebf664.svg" alt="hand rounded svg" className="icon-draw-2 position-absolute" />
                        </div>
                        <p>Sin trampa ni cartón, sin letra pequeña, ni gastos inesperados, tu cuota y nada más.</p>
                    </div>
                    <div className="col-4">
                        <h5 className='mb-3'>En las buenas y en las<br /> "no tan buenas"</h5>
                        <p>Seguro a todo riesgo con franquicia y asistencia en carretera 24/7, aunque ojalá no lo necesites nunca.</p>
                    </div>
                </div>


            </section>

        </>


    );
}

export default Home;