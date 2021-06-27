import React from 'react';
import ItemCount from './ItemCount';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './CartWidget';

const zapatos = [
    {
        imagen: <CartWidget/>,
        title: "Fashion",
        reference: "Blanco y negro",
        price: "55.000 COP",
        id: 1,
        boton: <ItemCount />,
    },

    {
        title: "Alexander",
        reference: "Blanco, negro y multicolor",
        price: "55.000 COP",
        id: 2,
        boton: <ItemCount />,
    },

    {
        title: "Skechers",
        reference: "Multicolor",
        price: "55.000 COP",
        id: 3,
        boton: <ItemCount />,
    },

    {
        title: "Raptor Vaquita",
        reference: "Blancon con negro",
        price: "60.000 COP",
        id: 4,
        boton: <ItemCount />,
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