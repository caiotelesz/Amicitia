import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CardHeader from "../../components/CardHeader";
import CardFooter from "../../components/CardFooter"
import Veterinario from "../../components/Veterinario";
import "./index.scss";

import * as medicoApi from '../../api/medicoApi';

export default function NossosProfissionais() {
  const [listDoctor, setListDoctor] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDoctors() {
      try {
        const info = await medicoApi.buscarMedico();
        setListDoctor(info);
      } catch (error) {
        console.error('Erro ao buscar médicos:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <section className="section-nossosProfissionais">
      <CardHeader />

      <div className="card-nossosProfissionais">

        <h1>Nossos Profissionais</h1>
        <h2>Veterinários</h2>

        {listDoctor.map((doctor) => (
          <Veterinario key={doctor.id} doctor={doctor} />
        ))}

      </div>

      <CardFooter />
    </section>
  );
}