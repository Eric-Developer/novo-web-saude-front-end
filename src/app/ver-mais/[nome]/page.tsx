import Header from "@/components/UI/Header";
import "@/app/style.css"
import Footer from "@/components/UI/Footer";
import Card from "@/components/UI/Card";
import CardHorario from "@/components/private/CardHorario";
import CardEspecialidades from "@/components/private/CardEspecialidades";
import CardSobre from "@/components/private/CardSobre";
import Galeria from "@/components/private/Galeria";
import Comentarios from "@/components/UI/Comentarios";
export default function VerMais(){
    const imagens = [
        "/image-login-register.png",
        "/image-login-register.png",
        "/image-login-register.png",
        "/image-login-register.png",
        "/image-login-register.png",
        "/image-login-register.png"

      ];
    return(
        <>
        <Header/>
         <section className="card-vermais">
            <div className="div-card">
            <Card/>
            <CardEspecialidades/>
            <CardSobre/>
            </div>
            <CardHorario/>
         </section>
         <Galeria images={imagens}/>
         <Comentarios/>
        <Footer/>
        </>
    )
}