import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCuisineThunk } from "../../store/cuisine";
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


    useEffect(() => {
        dispatch(getCuisineThunk())
    }, [dispatch])




    const flagImages = {
        Korean, Japanese, Peruvian, Vietnamese, Mexican, Spanish, French, Mediterranean, Thai, Somali, Jamaican, Indian
    }

    return (
        <div >
            <div style={{ display: "flex" }}>
                {cuisines.map(cuisine => (
                    <div style={{ padding: "10px"}}>
                        <img
                            src={flagImages[cuisine.type]}
                            alt={cuisine.type}
                            style={{ width: "70px", height: "70px", marginRight: "40px" }}
                        />
                    </div>
                ))}
            </div >
        </div>
    )
};

export default CuisineList;
