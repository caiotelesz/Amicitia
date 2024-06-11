import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CardFooter from '../../components/CardFooter';
import CardHeaderAdm from '../../components/CardHeaderAdm';
import CardEditarMedico from '../../components/CardEditarMedico';
import SideBar from '../../components/SideBarItem';
import * as medicoApi from '../../api/medicoApi';
import './index.scss';

export default function EditarMedicos() {
  const [listDoctor, setListDoctor] = useState([]);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const doctors = await medicoApi.buscarMedico();
        setListDoctor(doctors);
      } catch (error) {
        console.error('Erro ao buscar médicos:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  const addDoctor = () => {
    navigate('/cadastrar_medicos');
  };

  const deleteDoctor = async (id) => {
    try {
      await medicoApi.removerMedico(id);
      setListDoctor(listDoctor.filter(doctor => doctor.id !== id));
    } catch (error) {
      console.error('Erro ao remover médico:', error);
    }
  };

  if (loading) {
    return <p>Carregando...</p>;
  }

  if (error) {
    return <p>Erro ao carregar médicos. Por favor, tente novamente mais tarde.</p>;
  }

  return (
    <section className="section-editarMedicos">
      <CardHeaderAdm />
      <div className="container-editarMedicos">
        <SideBar className="sidebar" />
        <div className="main">
          <h1>GERENCIAR MÉDICOS</h1>

          <div className="doctorList">
            {listDoctor && listDoctor.length > 0 ? (
              listDoctor.map(doctor => (
                <CardEditarMedico 
                  key={doctor.id} 
                  doctor={doctor} 
                  onDelete={() => deleteDoctor(doctor.id)}
                />
              ))
            ) : (
              <p>Nenhum médico encontrado.</p>
            )}
          </div>

          <button className="button" onClick={addDoctor}>
            Adicionar médico
          </button>
        </div>
      </div>
      <CardFooter />
    </section>
  );
}
