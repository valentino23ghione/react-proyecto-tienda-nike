import Airforce1 from "../Assets/img/AirforceWhite.png"
import Airforce2 from "../Assets/img/Airforce2.png"
import Airforce3 from "../Assets/img/Airforce3.png"
import Airforce4 from "../Assets/img/Airforce4.png"
import NikeDunk1 from "../Assets/img/NikeDunk1.png"
import NikeDunk2 from "../Assets/img/NikeDunk2.png"
import Airforce5 from "../Assets/img/Airforce5.png" 

const productos = [

    {
        id: 1,
        name: "AirforceWhite",
        img: {Airforce1},
        year: "2015",
        price: 600,
        description: "Airforcewhite con tonos fuertes blancos"
    },

    {
        id: 2,
        name: "Airforce2",
        img: {Airforce2},
        year: "2016",
        price: 400,
        description: "Airforcewhite con pipa color negro"
    },

    {
        id: 3,
        name: "Airforce3",
        img: {Airforce3},
        year: "2018",
        price: 800,
        description: "Airforcewhite con tonos fuertes celestes y bordes"
    },

    {
        id: 4,
        name: "Airforce4",
        img: {Airforce4},
        year: "2014",
        price: 900,
        description: "Airforcewhite con tonos fuertes y bordes rojos"
    },

    {
        id: 5,
        name: "Airforce5",
        img: {Airforce5},
        year: "2019",
        price: 1200,
        description: "Airforcewhite con tonos fuertes blancos y pipa de nike metalizada"
    },

    {
        id: 6,
        name: "NikeDunk1",
        img: {NikeDunk1},
        year: "2020",
        price: 1000,
        description: "NikeDunk color naranja con tonos fuertes blancos"
    },

    {
        id: 7,
        name: "NikeDunk2",
        img: {NikeDunk2},
        year: "2022",
        price: 950,
        description: "NikeDunk color carmesi con tonos fuertes blancos, pipa celeste y contorno beige"
    },

]

const getFetch = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(productos)
        reject(err => console.log(err))

    }, 3000)




})

export default getFetch