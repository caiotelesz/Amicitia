import "./index.scss";

export default function Veterinario() {
  return (
    <div className="card-veterinario">
      <img src="assets/images/golden.jpg" alt="foto_medico" className="image"/>

      <div>
        <h3>Dr. Marcelo</h3>
        <div>
          <span>CRMV-PR 9942</span>
          <p>
            Médico veterinário formado pela UFPR, Aperfeiçoamento em oncologia - UNESP. Especialização em clínica e cirurgia de pequenos animais, especialização em oncologia veterinaria. Mestrado - UFFS. PDG em gestão na saúde veterinária - Fundação Dom Cabral. Membro da ABROVET - Associação brasileira de oncologia veterinária. Diretor Regional da ABHV - Associação brasileira de hospitais veterinários. Sócio fundador do grupo Vida Pets.
          </p>
        </div>
      </div>
    </div>
  );
}
