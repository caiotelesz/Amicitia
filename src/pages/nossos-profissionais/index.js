import CardHeader from "../../components/CardHeader";
import CardFooter from "../../components/CardFooter"
import Veterinario from "../../components/Veterinario";
import "./index.scss";

export default function NossosProfissionais() {
  return (
    <section className="section-nossosProfissionais">
      <CardHeader />

      <div className="card-nossosProfissionais">

        <h1>Nossos Profissionais</h1>
        <h2>Veterinários</h2>

        <Veterinario />
        <Veterinario />
        <Veterinario />

      </div>

      <CardFooter />
    </section>
  );
}