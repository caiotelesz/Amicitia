import CardFooter from "../../components/CardFooter";
import CardHeaderAdm from "../../components/CardHeaderAdm";
import "./index.scss";

export default function AdmPage() {
  return (
    <section className="section-welcomeAdm">
      <CardHeaderAdm />
      <div className="container-welcomeAdm">
        
        <h1>
          Bem vindo a área de administrador
        </h1>
      </div>
      <CardFooter />
    </section>
  );
}