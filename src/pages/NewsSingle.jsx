import { useParams } from "react-router-dom"
import { useEffect, useState } from "react";

import HeroPages from "../components/HeroPages"
import NewsFooter from "../components/NewsFooter";

export default function NewsSingle(){
    const params = useParams();
    
    const [currentIndex, setCurrentIndex] = useState();
    const [notesLength,  setNotesLength] = useState(0);
    const [note, setNote] = useState({
        title: "",
        date: "",
        image: "",
        content: ""
    });
    const [notePrev, setNotePrev] = useState(false);
    const [noteProx, setNoteProx] = useState(false);

    const getNote = async(link)=>{
        let res = await fetch(link),
            json =  await res.json(),
            newsArray = await json.filter(element => element.categories[0] === 4),
            indexArray = [];
            
            newsArray.forEach(el=>{
                indexArray.push(el.id);
            })

            setCurrentIndex(indexArray.indexOf(parseInt(params.id)))
            setNotesLength(parseInt(newsArray.length));
          
            for(let i = 0; i < newsArray.length; i ++){
                if(newsArray[i].id === parseInt(params.id)){
                    setNote(note =>{
                        return{
                            ...note,
                            title: newsArray[i].title.rendered,
                            date: newsArray[i].date,
                            image: newsArray[i]._embedded["wp:featuredmedia"][0].source_url,
                            content: newsArray[i].content.rendered,
                        }
                    });
                    setNoteProx(newsArray[i - 1] ? newsArray[i - 1].id : 0);
                    setNotePrev(newsArray[i + 1] ? newsArray[i + 1].id : 0);
                }
            }
            
    }

    useEffect(()=>{
        getNote("https://perritos.cervantesdeveloper.com/wp-json/wp/v2/posts?_embed");
    }, [params.id])

    console.log(notePrev, noteProx);

    return(
        <>
            <HeroPages image="news" alt={note.title} text="Noticias"/>
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
        
            <NewsFooter 
                totalNotes={notesLength}
                currentNote={currentIndex}
                prevNews={`/news/${notePrev}`}
                proxNews={`/news/${noteProx}`}
            />
            
        </>
    )
}