import AdoptCard from "../../components/AdoptCard"

import { useState, useEffect } from "react"


export default function AdoptDogs(){
    const [dogs, setDogs] = useState([]);

    useEffect(()=>{
        const getDogs = async(link)=>{
            let res =  await fetch(link),
                json = await res.json(),
                reverse = await json.reverse();

                for(let i = 0; i < reverse.length; i++){
                    if(reverse[i].categories[0] === 3){
                        setDogs(dogs => [...dogs, reverse[i]])
                    }
                }
        }

        getDogs("https://perritos.cervantesdeveloper.com/wp-json/wp/v2/posts?_embed");
    }, [])

    return(
        <article className="adopt-article">
            <h1 className="adopt-article__header"> Nuestros perros</h1>
            {
                dogs.length === 0 
                ? <h3>cargando</h3>
                : (
                    <div className="adopt-dogs__gallery clear">
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
                                    color="green"
                                    plusIconColor="green"
                                />
                            )
                            
                        }
                    </div>
                )
            }
        </article>
    )
}