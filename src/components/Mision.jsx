import ButtonLink from "./ButtonLink";

export default function Mision(){
    return(
        <div className="container mision black">
            <div className="contain">
                <h2>Nuestra visión para el <span>futuro</span></h2>
                <blockquote>
                    Nuestra meta es clara y profundamente motivada por nuestro deseo de mantener a los perros en sus amados hogares: 
                    Buscamos mejorar las vidas y bienestar de los perros y personas, colectivamente y quizás lo más importante, una vida, una necesidad, un perro a la vez.
                </blockquote>
                <ButtonLink text="Conocenos"/>
            </div>
        </div>
    )
}