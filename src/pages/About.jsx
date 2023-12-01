import React from "react"
import HeroPages from "../components/HeroPages"

export default function About(){
    return (
        <>
            <HeroPages image="about" text="Sobre nosotros"/>
            <section className="container">
                <div className="contain about">
                    <h1 className="adopt-article__header">¿Quiénes somos?</h1>
                    <p className="adopt-article__text">
                         Perritos tequileros es un refugio que provee hogar y cuidado veterinario a perros en estado de calle. Hemos estado cuidando de los perros de nuestra comunidad por más de 4 años.
                    </p>
                    <br />
                    <p className="adopt-article__text">
                        Creemos que la relación entre humanos y animales tiene un profundo significado y hacemos un llamado a nuestra ciudad y a todos los demás para que tomen medidas. Juntos formamos un frente unido contra la crueldad y negligencia.
                    </p>
                    

                </div>
            </section>
        </>
        
    )
}