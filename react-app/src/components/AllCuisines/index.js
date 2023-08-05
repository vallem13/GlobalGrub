import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCuisineThunk } from "../../store/cuisine";
import { useHistory } from "react-router-dom"
import Korean from "./flags/korea.png"
import Japanese from "./flags/japan.png"
import Peruvian from "./flags/peru.png"
import Vietnamese from "./flags/vietnam.png"
import Mexican from "./flags/mexico.png"
import Spanish from "./flags/spain.png"
import French from "./flags/france.png"
import Mediterranean from "./flags/greece.png"
import Thai from "./flags/thailand.png"
import Somali from "./flags/somalia.png"
import Jamaican from "./flags/jamaica.png"
import Indian from "./flags/india.png"


const CuisineList = () => {
    const dispatch = useDispatch();
    const cuisines = Object.values(useSelector((state) => state.cuisine.allCuisines));
    const history = useHistory()


    useEffect(() => {
        dispatch(getCuisineThunk())
    }, [dispatch])

    const onClick = (cuisineId) => {
        history.push(`/cuisine/${cuisineId}`)
    }


    const flagImages = {
        Korean, Japanese, Peruvian, Vietnamese, Mexican, Spanish, French, Mediterranean, Thai, Somali, Jamaican, Indian
    }

    return (
        <div className="cuisine-nav-bar">
          <div style={{ display: "flex" }}>
            {cuisines.map((cuisine) => (
              <div key={cuisine.id} style={{ padding: "7px", display: "flex", flexDirection: "column", alignItems: "center" }} onClick={() => onClick(cuisine.id)}>
                <img
                  src={flagImages[cuisine.type]}
                  alt={cuisine.type}
                  style={{ width: "60px", height: "60px", marginBottom: "2px", marginLeft: '5px', marginTop:'10px' }}
                />
                <div className="cuisine-type">{cuisine.type}</div>
              </div>
            ))}
          </div>
        </div>
      );


};

export default CuisineList;
