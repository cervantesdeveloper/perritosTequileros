import {React, useEffect, useState} from "react";

import NewsCard from "../components/NewsCard";

export default function News(){
    const [news, setNews] = useState([]);

    useEffect(()=>{
        const getNews = async(link)=>{
            let res =  await fetch(link),
                json = await res.json();

            for(let i = 0; i < json.length; i ++){
                if(json[i].categories[0] === 4){
                    setNews(news => [...news, json[i]])
                }
            }
        }
        getNews("https://perritos.cervantesdeveloper.com/wp-json/wp/v2/posts?_embed");
    }, [])

    function findDate(string){
        let endString = string.indexOf("<br />");
        return string.slice(7, endString)
    }

    function findHour(string){
        let startString = string.indexOf("<br />");
        return string.slice(startString + 13).replace("</p>", "");
    }

    return (
        <section className="container">
            <div className="contain news-list">
                
                {
                    news.length === 0
                        ? <h3>Cargando noticias</h3>
                        : news.map((element)=> 
                            <NewsCard 
                                key={element.id}
                                picture={element._embedded["wp:featuredmedia"][0].source_url}
                                title={element.title.rendered}
                                date={findDate(element.excerpt.rendered)}
                                hour={findHour(element.excerpt.rendered)}
                                id={element.id}
                            />
                        )
                }
                
            </div>
        </section>
    )
}