import uniqid from "uniqid";

import dutertePhoto from "../Assets/Photos/duterte.jpg";
import marcosSrPhoto from "../Assets/Photos/marcos-sr.jpg";
import aguinaldoPhoto from "../Assets/Photos/aguinaldo.jpg";
import quezonPhoto from "../Assets/Photos/quezon.jpg";
import aquinoCorPhoto from "../Assets/Photos/aquino-cor.webp";
import aquinoNoyPhoto from "../Assets/Photos/aquino-noy.webp";
import arroyoPhoto from "../Assets/Photos/arroyo.webp";
import estradaPhoto from "../Assets/Photos/estrada.jpg";
import garciaPhoto from "../Assets/Photos/garcia.jpg";
import macapagalPhoto from "../Assets/Photos/macapagal.jpg";
import magsaysayPhoto from "../Assets/Photos/magsaysay.jpg";
import marcosJrPhoto from "../Assets/Photos/marcos-jr.webp";
import osmeñaPhoto from "../Assets/Photos/osmeña.jpg";
import quirinoPhoto from "../Assets/Photos/quirino.jpg";
import ramosPhoto from "../Assets/Photos/ramos.jpg";
import roxasPhoto from "../Assets/Photos/roxas.jpg";
import laurelPhoto from "../Assets/Photos/laurel.webp";

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
        title: "Marcos, Sr.",
        className: "marcos-sr",
        imgSrc: {marcosSrPhoto},
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
    },
    {
        id: uniqid(),
        title: "Aquino, Cory",
        className: "aquino-cor",
        imgSrc: {aquinoCorPhoto},
        touched: false,
    },
    {
        id: uniqid(),
        title: "Aquino, Noy",
        className: "aquino-noy",
        imgSrc: {aquinoNoyPhoto},
        touched: false,
    },
    {
        id: uniqid(),
        title: "Arroyo",
        className: "arroyo",
        imgSrc: {arroyoPhoto},
        touched: false,
    },
    {
        id: uniqid(),
        title: "Estrada",
        className: "estrada",
        imgSrc: {estradaPhoto},
        touched: false,
    },
    {
        id: uniqid(),
        title: "Garcia",
        className: "garcia",
        imgSrc: {garciaPhoto},
        touched: false,
    },
    {
        id: uniqid(),
        title: "Macapagal",
        className: "macapagal",
        imgSrc: {macapagalPhoto},
        touched: false,
    },
    {
        id: uniqid(),
        title: "Magsaysay",
        className: "magsaysay",
        imgSrc: {magsaysayPhoto},
        touched: false,
    },
    {
        id: uniqid(),
        title: "Marcos, Jr.",
        className: "marcos-jr",
        imgSrc: {marcosJrPhoto},
        touched: false,
    },
    {
        id: uniqid(),
        title: "Osmeña",
        className: "osmeña",
        imgSrc: {osmeñaPhoto},
        touched: false,
    },
    {
        id: uniqid(),
        title: "Quirino",
        className: "quirino",
        imgSrc: {quirinoPhoto},
        touched: false,
    },
    {
        id: uniqid(),
        title: "Ramos",
        className: "ramos",
        imgSrc: {ramosPhoto},
        touched: false,
    },
    {
        id: uniqid(),
        title: "Roxas",
        className: "roxas",
        imgSrc: {roxasPhoto},
        touched: false,
    },
    {
        id: uniqid(),
        title: "Laurel",
        className: "laurel",
        imgSrc: {laurelPhoto},
        touched: false,
    }];

export default CardsData;