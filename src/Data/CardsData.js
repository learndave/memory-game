import uniqid from "uniqid";

import dutertePhoto from "../Assets/Photos/duterte.jpg";
import marcosPhoto from "../Assets/Photos/marcos.jpg";
import aguinaldoPhoto from "../Assets/Photos/aguinaldo.jpg";
import quezonPhoto from "../Assets/Photos/quezon.jpg";


const CardsData = 
    [{
        id: uniqid(),
        title: "Duterte",
        className: "duterte",
        imgSrc: {dutertePhoto},
        touched: false,
    },
    {
        id: uniqid(),
        title: "Marcos",
        className: "marcos",
        imgSrc: {marcosPhoto},
        touched: false,
    },
    {
        id: uniqid(),
        title: "Aguinaldo",
        className: "aguinaldo",
        imgSrc: {aguinaldoPhoto},
        touched: false,
    },
    {
        id: uniqid(),
        title: "Quezon",
        className: "quezon",
        imgSrc: {quezonPhoto},
        touched: false,
    }];

export default CardsData;