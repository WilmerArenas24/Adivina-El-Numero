import React from 'react';
import Swal from 'sweetalert2';


export const Numero = () => {

    const lanzar = () => {

                let inputElement = document.getElementById('numeroJugador');
                let numero = inputElement.value;
                let numeroAzar = Math.round(Math.random() * 10);
        
                if (numero == numeroAzar) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "!Has adivinado!",
                        showConfirmButton: false,
                        timer: 1500
                      });
                      inputElement.value = '';
                } else {
                    Swal.fire({
                        title: 'Upss!',
                        text: 'No has adivinado...',
                        icon: 'error',
                        confirmButtonText: 'Intenta otra vez'
                      });
                    inputElement.value = '';
                }

        
    };

    return (
        <div id="contenedorJuego">
            <input id='numeroJugador' type='number' min={0} max={9}></input>
            <button onClick={lanzar}>Lanzar</button>
        </div>
    );
}
