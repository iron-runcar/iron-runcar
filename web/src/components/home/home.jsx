import './home.css';
// import {Homeimg }from './images'


function Home (){

    // const Homeimg = require.context("./images", true);

    

    return (

        <>
            <div className="d-flex w-100 mt-5">
            {/* <img src={Homeimg.png} alt="" className="image-bg m-auto" /> */}
            {/* <img src={Homeimg(`./${ Homeimg }.png`)} alt={Homeimg} className="image-bg m-auto"/> */}

            </div>
            <div className="d-flex w-100 mt-5">
            </div>

            <div className="d-flex w-100 mt-5">
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
                <span class="badge rounded-pill bg-success w-20 mb-4">1</span>
                   
                    <p className="title">Elige tu coche</p>
                    <p>Elige el coche que más se adapte a tus necesidades, y configura el kilometraje y la duración de tu suscripción.</p>
                  
                </li>

                <li className="col-2 subscribeSteps__item mb-3 text-center">
                <span class="badge rounded-pill bg-success w-20 mb-4">2</span>
                   
                    <p className="title">Regístrate y suscríbete</p>
                    <p>Regístrate, y a continuación sube tu documentación y sigue en tiempo real el estado de tu solicitud.</p>
                  
                </li>

                <li className="col-2 subscribeSteps__item mb-3 text-center">
                <span class="badge rounded-pill bg-success w-20 mb-4">3</span>
                   
                    <p className="title">Entrega de tu vehículo</p>
                    <p>Aprobada tu suscripción, recoje el coche en unos de nuestros puntos de entrega o te lo llevamos a donde quieras.</p>
                  
                </li>

                <li className="col-2 subscribeSteps__item mb-3 text-center">
                <span class="badge rounded-pill bg-success w-20 mb-4">4</span>
                   
                    <p className="title">Cambiamos contigo</p>
                    <p>Cambia de categoría o modelo según cambien tus necesidades. Con Looker, siempre tienes el coche que necesitas.</p>
                  
                </li>
                
            </ul>

            <section className="why">
                <div className="all d-flex">
                    <h3>Porqué Looker</h3>
                </div>
                <div className="column d-flex">
                    <div className="">
                        <div className="">ppp</div>
                        <div className="">wwww</div>
                    </div>

                </div>
            </section>

            </>
       

    );
}

export default Home;