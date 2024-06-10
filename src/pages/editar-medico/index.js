import { useNavigate } from 'react-router-dom';
import CardFooter from '../../components/CardFooter';
import CardHeaderAdm from '../../components/CardHeaderAdm';
import CardEditarMedico from '../../components/CardEditarMedico';
import SideBar from '../../components/SideBarItem';
import './index.scss';

export default function EditarMedicos() {
  const navigate = useNavigate();

  const addDoctor = () => {
    navigate('/cadastrar_medicos');
  };

  return (
    <section className="section-editarMedicos">
      <CardHeaderAdm />
      <div className="container-editarMedicos">
        <SideBar className="sidebar" />
        <div className="main">
          <h1>GERENCIAR MEDICOS</h1>

          <CardEditarMedico />
          <CardEditarMedico />
          <CardEditarMedico />

          <button className="button" onClick={addDoctor}>
            Adicionar médico
          </button>
        </div>
      </div>
      <CardFooter />
    </section>
  );
}
