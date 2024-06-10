import CardFooter from '../../components/CardFooter'
import CardHeaderAdm from '../../components/CardHeaderAdm'
import SideBar from '../../components/SideBarItem'
import './index.scss'

export default function AdmPage() {
  return (
    <section className="section-welcomeAdm">
      <CardHeaderAdm />
      <div className="container-welcomeAdm">
        <SideBar className="sidebar" />
        <div className="main">
          <h1>Bem vindo a área de administrador</h1>
        </div>
      </div>
      <CardFooter />
    </section>
  )
}
