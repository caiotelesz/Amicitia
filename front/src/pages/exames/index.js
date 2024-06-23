import CardHeader from "../../components/CardHeader";
import CardFooter from "../../components/CardFooter";
import "./index.scss";

export default function Exames() {
  return (
    <section className="section-exames">
      <CardHeader />
      <div className="container-exames">
        <h1>Exames</h1>
        <p>
          Os exames laboratoriais são indicados de acordo com a análise clínica do
          Médico Veterinário e são realizados por nossa equipe.
        </p>
        <p>
          Muitas vezes, os resultados são disponibilizados em menos de 12 horas
          pós-coleta (dependendo do tipo de exame), a fim de obter um diagnóstico
          preciso e dar início ao tratamento mais adequado para diversas doenças
          dos pets.
        </p>
        <p>
          Horário de coleta (a coleta pode ser realizada em qualquer Unidade Dr.
          Hato): 24 horas por dia, todos os dias da semana. (exames que necessitam
          de acompanhamento por imagem, deverão ser agendados previamente).
        </p>
        <h2>Preparo da Coleta</h2>
        <ol>
          <li>Recomenda-se jejum alimentar de 8 horas para coletas de sangue.</li>
          <li>Para coleta de urina por cistocentese e exames que necessitem de acompanhamento por imagem, entrar em contato com a Unidade Dr. Hato mais próxima para saber sobre o procedimento.</li>
          <li>Para exames dermatológicos, evitar o uso de medicamentos tópicos, previamente ao exame. Exceto em caso de orientação médica.</li>
          <li>Para exames de fezes, acondicionar a amostra fresca em coletor universal (que pode ser retirado em qualquer Unidade Dr. Hato) e manter sob refrigeração até o envio ao laboratório. O envio deve ser feito no mesmo dia da coleta.</li>
          <li>Para análises microbiológicas e exames de biologia molecular, evitar o uso de antimicrobianos se possível. Exceto em caso de orientação médica.</li>
          <li>Para os exames de citologia e histopatologia, é importante fornecer informações clínicas como tempo de evolução, recidiva de quadro, tratamento utilizado ou em andamento, dentre outros.</li>
          <li>Para quaisquer dúvidas ou esclarecimentos, entrar em contato com a Unidade Dr. Hato mais próxima.</li>
        </ol>
        <h3>
          Importante: Para retirada de exames realizados na unidade Campestre, entre em contato direto com a recepção.
        </h3>

        <div>
          <h4>NOSSAS UNIDADES</h4>
          <button>Unidade Jandira</button>
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1827.9682138977614!2d-46.66705184237904!3d-23.606612780353053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5b54ec097e39%3A0x43ef4a40762d845a!2sVet%20Kat%20-%20Medicina%20Felina%20-%20Dra.%20Katiana%20Tavernari%20Bignardi%20-%20Especializada%20em%20gatos%20-%20Consult%C3%B3rio%20exclusivo%20para%20felinos!5e0!3m2!1sen!2sbr!4v1719100156600!5m2!1sen!2sbr"
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade" />
          <span>Rua Jandira, 123 - Indianópolis  04080-002</span>
        </div>
      </div>
      <CardFooter />
    </section>
  );
}
