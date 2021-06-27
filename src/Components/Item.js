import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const zapatos = [
    {
        title: "Fashion",
        reference: "Blanco y negro",
        price: "55.000 COP",
        id: 1,
    },

    {
        title: "Alexander",
        reference: "Blanco, negro y multicolor",
        price: "55.000 COP",
        id: 2,
    },

    {
        title: "Skechers",
        reference: "Multicolor",
        price: "55.000 COP",
        id: 3,
    },

    {
        title: "Raptor Vaquita",
        reference: "Blancon con negro",
        price: "60.000 COP",
        id: 4,
    }
];


function Item() {

    let promesa = new Promise((resolve, reject) => {
        setTimeout(function () {
            const error = false;
            if (!error) {
                resolve(zapatos);
            } else {
                reject("Hubo un error");
            }
        }, 1500);
    });

    promesa.then(function (valor) {
        console.log(valor)
    }).catch(
        function (error) {
            console.log(error);
        }
    )

    return (
        <div>
            {
                zapatos.map((zapato, index) => { return <p id={index}>{zapato.imagen}, {zapato.title},  {zapato.reference}, {zapato.price}, {zapato.boton}
                </p> })
            }
        </div>
    )
}

export default Item