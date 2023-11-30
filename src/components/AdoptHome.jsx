import AdoptCard from "./AdoptCard";
import ButtonLink from "./ButtonLink";

import { useEffect, useState } from "react";



export default function AdoptHome(){
    const [dogs, setDogs] = useState([])

    useEffect(()=>{

        const getDogs = async(link)=>{
            let res = await fetch(link),
                json = await res.json(),
                reverse = await json.reverse();
                for(let i = 0; i < 3; i++){
                    if(reverse[i].categories[0] === 3){
                        setDogs(dogs => [...dogs, reverse[i]])
                    }
                }
        }

        getDogs("https://perritos.cervantesdeveloper.com/wp-json/wp/v2/posts?_embed");
            
    }, [])
    
    
    return(
        <div className="container black adopt-home">
            <div className="contain">
                <div className="adopt-home__title">
                    <h2>Perros en adopción</h2>
                </div>
                {
                    dogs.length === 0 
                        ? <h3>cargando</h3>
                        : (
                            <div className="adopt-home__gallery">
                            {
                                dogs.map(dog=>
                                    <AdoptCard 
                                        key={dog.id}
                                        name={dog.title.rendered}
                                        age={dog.content.rendered.replace("<p>", " ").split(" ")[1]}
                                        size={dog.content.rendered.replace("<p>", " ").split(" ")[2]}
                                        genre={dog.content.rendered.replace("<p>", " ").split(" ")[3]}
                                        id={dog.content.rendered.replace("<p>", " ").replace("</p>", "").split(" ")[4]}
                                        picture={dog._embedded["wp:featuredmedia"][0].source_url}
                                        excerpt={dog.excerpt.rendered.replace("<p>", " ").replace("</p>", "")}
                                        color="orange"
                                        plusIconColor="orange"
                                    />
                                )
                                
                            }
                        </div>
                        )
                }
                
                <ButtonLink text="Verlos a todos" link="/adopt/dogs"/>
            </div>
        </div>
    )
}