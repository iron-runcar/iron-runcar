import react from "react";
import { useState, useEffect } from "react";
import { AuthContext } from "../../contexts/auth-context";
import { getBooking } from "../../services/api-service";
import './profile.css';

function Profile({ brand, day, month, year}) {
  const { user, handleLogout } = react.useContext(AuthContext);
  const [booking, setBooking] = useState()

  useEffect(() => {
    getBooking()
      .then((response) => {
        setBooking(response.data[0])
      })
      .catch(error => console.error(error))
  }, []);

  if (!booking) return <>
  <div className="na mx-auto mt-5">
                <div className="row">
                  <div className="text-center">
                    <h3>{user.name}</h3>
                    <h4>{user.email}</h4>
                  </div>
                </div>
                <div className="qr d-flex justify-content-center">
                  <img src="https://generator.flowcode.com/v1/flowcode?opts=%7B%22cmyk%22%3Afalse%2C%22data%22%3A%22https%3A%2F%2Fflowcode.com%2Fp%2FbeQQD2sec%22%2C%22qrrotate%22%3Atrue%2C%22logoWidth%22%3A48%2C%22logoHeight%22%3A27%2C%22radiusMask%22%3A89%2C%22logoImageUrl%22%3A%22https%3A%2F%2Fcdn.flowcode.com%2Fprodassets%2FFirst_Day_of_SpringSpring_A_Logo.svg%3Fts%3D1645556469544787274%22%2C%22containerText%22%3A%5B%7B%22font%22%3A%22inter_medium%22%2C%22text%22%3A%22PRIVACY.FLOWCODE.COM%22%2C%22fontSize%22%3A9%2C%22position%22%3A%7B%22property%22%3A7%2C%22offsetPercentage%22%3A5.8%7D%2C%22fontColor%22%3A%22%23054301%22%7D%5D%2C%22containerShape%22%3A1%2C%22gridModuleColor%22%3A%22%23000000%22%2C%22gridModuleShape%22%3Anull%2C%22containerImageUrl%22%3A%22https%3A%2F%2Fcdn.flowcode.com%2Fprodassets%2FFirst_Day_of_SpringSpring_A_Container.svg%3Fts%3D1645556462940204765%22%2C%22logoModulePadding%22%3A1%2C%22gridModuleImageUrl%22%3A%22https%3A%2F%2Fcdn.flowcode.com%2Fprodassets%2FFirst_Day_of_SpringSpring_A_Data.svg%3Fts%3D1645556475616873248%22%2C%22containerBorderSize%22%3A0%2C%22gridBackgroundColor%22%3A%22%23ffffff00%22%2C%22containerBorderColor%22%3A%22%23ffffff00%22%2C%22errorCorrectionLevel%22%3A2%2C%22gridModuleRandomSizes%22%3A%2290%22%2C%22dataGridPercentageSize%22%3A64%2C%22gridModuleColorFillSvg%22%3Afalse%2C%22positionElementTopLeft%22%3A%7B%22fillSvg%22%3Afalse%2C%22innerShape%22%3A2%2C%22outerShape%22%3A2%2C%22backgroundColor%22%3A%22%23ffffff00%22%2C%22innerShapeColor%22%3A%22%23054301%22%2C%22innerShapeWidth%22%3A45%2C%22outerShapeColor%22%3A%22%23054301%22%2C%22outerShapeWidth%22%3A15%2C%22innerShapeOutlineSize%22%3A0%2C%22outerShapeOutlineSize%22%3A0%2C%22innerShapeOutlineColor%22%3A%22%23054301%22%2C%22outerShapeOutlineColor%22%3A%22%23054301%22%7D%2C%22containerEmptySpaceSize%22%3A6%2C%22positionElementTopRight%22%3A%7B%22text%22%3A%7B%22font%22%3A%22inter_black%22%2C%22text%22%3A%22FLOWCODE%22%2C%22fontSize%22%3A12%2C%22position%22%3A%7B%22property%22%3A1%2C%22offsetPercentage%22%3A0%7D%2C%22fontColor%22%3A%22%23054301%22%2C%22fontOutlineSize%22%3A0%2C%22fontOutlineColor%22%3A%22%23054301%22%7D%2C%22fillSvg%22%3Afalse%2C%22innerShape%22%3A2%2C%22outerShape%22%3A5%2C%22backgroundColor%22%3A%22%23ffffff00%22%2C%22innerShapeColor%22%3A%22%23054301%22%2C%22innerShapeWidth%22%3A45%2C%22outerShapeColor%22%3A%22%23054301%22%2C%22outerShapeWidth%22%3A15%2C%22innerShapeOutlineSize%22%3A%22%23000000%22%2C%22outerShapeOutlineSize%22%3A0%2C%22innerShapeOutlineColor%22%3A%22%23054301%22%2C%22outerShapeOutlineColor%22%3A%22%23054301%22%7D%2C%22containerBackgroundColor%22%3A%22%23ffffff00%22%2C%22containerImageUrlOpacity%22%3A1%2C%22positionElementBottomLeft%22%3A%7B%22fillSvg%22%3Afalse%2C%22innerShape%22%3A2%2C%22outerShape%22%3A2%2C%22backgroundColor%22%3A%22%23ffffff00%22%2C%22innerShapeColor%22%3A%22%23054301%22%2C%22innerShapeWidth%22%3A45%2C%22outerShapeColor%22%3A%22%23054301%22%2C%22outerShapeWidth%22%3A15%2C%22innerShapeOutlineSize%22%3A%22%23000000%22%2C%22outerShapeOutlineSize%22%3A0%2C%22innerShapeOutlineColor%22%3A%22%23054301%22%2C%22outerShapeOutlineColor%22%3A%22%23054301%22%7D%2C%22containerOuterPatternColor%22%3A%22%23000000%22%2C%22containerImageBackgroundOnly%22%3Afalse%2C%22containerImageOverlayPrivacy%22%3Atrue%2C%22containerOuterPatternImageUrl%22%3A%22https%3A%2F%2Fcdn.flowcode.com%2Fprodassets%2FFirst_Day_of_SpringSpring_A_Data.svg%3Fts%3D1645556475616873248%22%2C%22containerBackgroundInsetExtend%22%3A0%2C%22containerOuterPatternRandomSizes%22%3A%2290%22%2C%22containerOuterPatternColorFillSvg%22%3Afalse%7D&density=120&imageType=png"
                    className="qr-img" />

                </div>
              </div></>

    console.log(booking, "ey")

  return (
    
    <>
  
      <div className="box-row d-flex flex-wrap-wrap">
        <div className="col-12 position-relative w-100">
          <div className="d-flex mb-4">
            <h2 className="m-auto mb-5">Mi suscripción</h2>
            <img src="https://cardive.app/_nuxt/img/handdrawn_arrow.496d746.svg" alt="hand rounded svg" className="icon-draw-10 position-absolute" />

          </div>
          <div className="row d-flex ">
            <div className="caja d-flex">
              <div className="cards">

                <div className="vehicle d-flex flex-direction-column">
                  <div className="card1">
                    <p className="CarName text-white fs-3">{booking?.car?.brand}</p>
                    <img clasName="btn my-car" src={booking?.car?.image[0]} alt={brand} />
                  </div>
                </div>

                <div className="others flex-direction-column">
                  <div className="first-row d-flex">
                    <div className="totales text-center ms-3">
                      <span className="total-price text-center">{booking?.price}€</span>
                      <p className="info text-center">CUOTA MENSUAL</p>
                    </div>
                    <div className="date text-center mb-4 ">
                      <span className="total-price text-center">{booking?.startDate.slice(0, 10)}</span>
                      <p className="info">FECHA DE RENOVACIÓN</p>
                    </div>
                  </div>
                  <div className="second-row d-flex">
                    <div className="totales-1 text-center ms-3">
                      <span className="total-price text-center">{booking?.permanence}</span>
                      <p className="info text-center">MESES PERMANENCIA</p>
                    </div>
                    <div className="date text-center me-3">
                      <span className="total-price text-center">{booking?.kilometersIncludes}</span>
                      <p className="info">KILÓMETROS AL MES</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="na mx-auto mt-5">
                <div className="row-profile">
                  <div className="text-center">
                    <h3 className="mb-3">{user.name}</h3>
                    <h4>{user.email}</h4>
                  </div>
                </div>
                <div className="qr d-flex justify-content-center mt-4">
                  <img src="https://generator.flowcode.com/v1/flowcode?opts=%7B%22cmyk%22%3Afalse%2C%22data%22%3A%22https%3A%2F%2Fflowcode.com%2Fp%2FbeQQD2sec%22%2C%22qrrotate%22%3Atrue%2C%22logoWidth%22%3A48%2C%22logoHeight%22%3A27%2C%22radiusMask%22%3A89%2C%22logoImageUrl%22%3A%22https%3A%2F%2Fcdn.flowcode.com%2Fprodassets%2FFirst_Day_of_SpringSpring_A_Logo.svg%3Fts%3D1645556469544787274%22%2C%22containerText%22%3A%5B%7B%22font%22%3A%22inter_medium%22%2C%22text%22%3A%22PRIVACY.FLOWCODE.COM%22%2C%22fontSize%22%3A9%2C%22position%22%3A%7B%22property%22%3A7%2C%22offsetPercentage%22%3A5.8%7D%2C%22fontColor%22%3A%22%23054301%22%7D%5D%2C%22containerShape%22%3A1%2C%22gridModuleColor%22%3A%22%23000000%22%2C%22gridModuleShape%22%3Anull%2C%22containerImageUrl%22%3A%22https%3A%2F%2Fcdn.flowcode.com%2Fprodassets%2FFirst_Day_of_SpringSpring_A_Container.svg%3Fts%3D1645556462940204765%22%2C%22logoModulePadding%22%3A1%2C%22gridModuleImageUrl%22%3A%22https%3A%2F%2Fcdn.flowcode.com%2Fprodassets%2FFirst_Day_of_SpringSpring_A_Data.svg%3Fts%3D1645556475616873248%22%2C%22containerBorderSize%22%3A0%2C%22gridBackgroundColor%22%3A%22%23ffffff00%22%2C%22containerBorderColor%22%3A%22%23ffffff00%22%2C%22errorCorrectionLevel%22%3A2%2C%22gridModuleRandomSizes%22%3A%2290%22%2C%22dataGridPercentageSize%22%3A64%2C%22gridModuleColorFillSvg%22%3Afalse%2C%22positionElementTopLeft%22%3A%7B%22fillSvg%22%3Afalse%2C%22innerShape%22%3A2%2C%22outerShape%22%3A2%2C%22backgroundColor%22%3A%22%23ffffff00%22%2C%22innerShapeColor%22%3A%22%23054301%22%2C%22innerShapeWidth%22%3A45%2C%22outerShapeColor%22%3A%22%23054301%22%2C%22outerShapeWidth%22%3A15%2C%22innerShapeOutlineSize%22%3A0%2C%22outerShapeOutlineSize%22%3A0%2C%22innerShapeOutlineColor%22%3A%22%23054301%22%2C%22outerShapeOutlineColor%22%3A%22%23054301%22%7D%2C%22containerEmptySpaceSize%22%3A6%2C%22positionElementTopRight%22%3A%7B%22text%22%3A%7B%22font%22%3A%22inter_black%22%2C%22text%22%3A%22FLOWCODE%22%2C%22fontSize%22%3A12%2C%22position%22%3A%7B%22property%22%3A1%2C%22offsetPercentage%22%3A0%7D%2C%22fontColor%22%3A%22%23054301%22%2C%22fontOutlineSize%22%3A0%2C%22fontOutlineColor%22%3A%22%23054301%22%7D%2C%22fillSvg%22%3Afalse%2C%22innerShape%22%3A2%2C%22outerShape%22%3A5%2C%22backgroundColor%22%3A%22%23ffffff00%22%2C%22innerShapeColor%22%3A%22%23054301%22%2C%22innerShapeWidth%22%3A45%2C%22outerShapeColor%22%3A%22%23054301%22%2C%22outerShapeWidth%22%3A15%2C%22innerShapeOutlineSize%22%3A%22%23000000%22%2C%22outerShapeOutlineSize%22%3A0%2C%22innerShapeOutlineColor%22%3A%22%23054301%22%2C%22outerShapeOutlineColor%22%3A%22%23054301%22%7D%2C%22containerBackgroundColor%22%3A%22%23ffffff00%22%2C%22containerImageUrlOpacity%22%3A1%2C%22positionElementBottomLeft%22%3A%7B%22fillSvg%22%3Afalse%2C%22innerShape%22%3A2%2C%22outerShape%22%3A2%2C%22backgroundColor%22%3A%22%23ffffff00%22%2C%22innerShapeColor%22%3A%22%23054301%22%2C%22innerShapeWidth%22%3A45%2C%22outerShapeColor%22%3A%22%23054301%22%2C%22outerShapeWidth%22%3A15%2C%22innerShapeOutlineSize%22%3A%22%23000000%22%2C%22outerShapeOutlineSize%22%3A0%2C%22innerShapeOutlineColor%22%3A%22%23054301%22%2C%22outerShapeOutlineColor%22%3A%22%23054301%22%7D%2C%22containerOuterPatternColor%22%3A%22%23000000%22%2C%22containerImageBackgroundOnly%22%3Afalse%2C%22containerImageOverlayPrivacy%22%3Atrue%2C%22containerOuterPatternImageUrl%22%3A%22https%3A%2F%2Fcdn.flowcode.com%2Fprodassets%2FFirst_Day_of_SpringSpring_A_Data.svg%3Fts%3D1645556475616873248%22%2C%22containerBackgroundInsetExtend%22%3A0%2C%22containerOuterPatternRandomSizes%22%3A%2290%22%2C%22containerOuterPatternColorFillSvg%22%3Afalse%7D&density=120&imageType=png"
                    className="qr-img" />

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


     

    </>
  );

}

export default Profile;