import React from "react";
import { useParams } from "react-router";
import { getCars } from "../../services/api-service";


function CarDetail() {

    const [car, setCar] = React.useState(null);
    const { id } = useParams(car);

    React.useEffect(() => {
        getCars(id).then((response) => {
            setCar(response.data);
        });
    }, []);

    if (!car) {
        return null;
      }



    return <div>CarDetail{JSON.stringify(id)}</div>
}

export default CarDetail;