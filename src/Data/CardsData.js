import uniqid from "uniqid";

import dutertePhoto from "../Assets/Photos/duterte.jpg";
import marcosPhoto from "../Assets/Photos/marcos.jpg";



const CardsData = 
    [{
        id: uniqid(),
        title: "Duterte",
        className: "duterte",
        imgSrc: {dutertePhoto},
    },
    {
        id: uniqid(),
        title: "Marcos",
        className: "marcos",
        imgSrc: {marcosPhoto},
    }];

export default CardsData;