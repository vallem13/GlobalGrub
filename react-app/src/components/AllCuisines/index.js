import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCuisineThunk } from "../../store/cuisine";



const CuisineList = () => {
    const dispatch = useDispatch();
    const cuisines = Object.values(useSelector((state) => state.cuisine.allCuisines));


    useEffect(() => {
        dispatch(getCuisineThunk())
    }, [dispatch])




    const flagImages = {
        Korean: "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg",
        Japanese: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9e/Flag_of_Japan.svg/1024px-Flag_of_Japan.svg.png",
        Peruvian: "https://upload.wikimedia.org/wikipedia/commons/f/f1/Peru_flag_with_coat_of_arms_300.PNG",
        Vietnamese: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1200px-Flag_of_Vietnam.svg.png",
        Mexican: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1024px-Flag_of_Mexico.svg.png",
        Spanish: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1024px-Bandera_de_Espa%C3%B1a.svg.png",
        French: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
        Mediterranean: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Flag_of_Greece.svg/2000px-Flag_of_Greece.svg.png",
        Thai: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/1024px-Flag_of_Thailand.svg.png",
        Somali: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Flag_of_Somalia.svg/1024px-Flag_of_Somalia.svg.png",
        Jamaican: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Flag_of_Jamaica.svg/1024px-Flag_of_Jamaica.svg.png",
        Indian: "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1024px-Flag_of_India.svg.png"
    };
    return (
        <div >
            <div style={{ display: "flex" }}>
                {cuisines.map(cuisine => (
                    <div style={{ padding: "10px", border: "4px solid #F39C12" }}> {cuisine.type}     <img
                        src={flagImages[cuisine.type]}
                        alt={cuisine.type}
                        style={{ width: "100px", height: "100px", marginRight: "5px" }}
                    />
                    </div>
                ))}
            </div >
        </div>
    )
};

export default CuisineList;
