import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

import HeroPages from "../components/HeroPages"

export default function NewsSingle(){
    const params = useParams();
    const [note, setNote] = useState({
        title: "",
        date: "",
        image: "",
        content: ""
    });
    console.log(note)

    useEffect(()=>{
        const getNote = async(link)=>{
            let res = await fetch(link),
                json =  await res.json();
                for(let i = 0; i < json.length; i ++){
                    if(json[i].id === parseInt(params.id)){
                        setNote(note =>{
                            return{
                                ...note,
                                title: json[i].title.rendered,
                                date: json[i].date,
                                image: json[i]._embedded["wp:featuredmedia"][0].source_url,
                                content: json[i].content.rendered
                            }
                        })
                    }
                }  
        }

        getNote("https://perritos.cervantesdeveloper.com/wp-json/wp/v2/posts?_embed");

    }, [params.id])
    
    console.log(note);
    return(
        <>
            <HeroPages image="news" alt={note.title}/>
            <article className="container article-news">
                <div className="contain">
                    <h2>{note.title}</h2>
                    <p className="article-news__date">
                        <b>fecha: {note.date.slice(0, 10)}</b>
                    </p>
                    <div className="article-news__content">
                        <img src={note.image} alt="" />
                        <p>{note.content.slice(4, -5)}</p>
                    </div>
                </div>
            </article>
            
        </>
    )
}