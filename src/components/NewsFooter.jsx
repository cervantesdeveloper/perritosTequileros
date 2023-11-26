import PrevNextLink from "./PrevNextLink";

export default function NewsFooter({
    prevNews, 
    proxNews, 
    currentNote,
    totalNotes
}){

    return (
        <footer className="news-footer">
            <PrevNextLink 
                className={currentNote < 1 && "inactive"}
                text="Noticia siguiente"
                link={proxNews}
                direction="left"
            />

            <PrevNextLink 
                className={(currentNote + 1) === totalNotes && "inactive"}
                text="Noticia previa"
                link={prevNews}
                direction="right"
            />
        </footer>
    )
}