import Stat from "./Stat"


export default function StatsGrid(){
    return(
        <div className="stats-grid">
            <Stat 
                number={"150"}
                text={"Perros a nuestro Cuidado"}
                image={"stats_1"}
                alt={"a crowd of happy dogs"}
            >
            </Stat>

            <Stat 
                number={"168"}
                text={"Costales de croquetas al mes"}
                image={"stats_2"}
                alt={"they eat a lot"}
            >
            </Stat>

            <Stat 
                number={"$16,000MXN"}
                text={"En gastos veterinarios por mes"}

                image={"stats_3"}
                alt={"sometimes they get sick"}
            >
            </Stat>

            <Stat 
                number={"30"}
                text={"Perros dados en adopción"}

                image={"stats_4"}
                alt={"they will be a happpy family"}
            >
            </Stat>

        </div>
        
    )
}