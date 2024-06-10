import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBook,
  faUserDoctor,
  faRightToBracket,
  faList,
  faX
} from '@fortawesome/free-solid-svg-icons'

import './index.scss'
import { Link } from 'react-router-dom'

export default function SidebarItem() {
  // a sidebar é dividida em dois elementos, um com a aparência de fechado e outra com a aparência de aberto

  // função para trocar as classes dos elementos e acontecer a troca de fechado <> aberto
  function closeOpen() {
    document
      .querySelector('.section-sideBar #sideBar-closed')
      .classList.toggle('closed')
    document
      .querySelector('.section-sideBar #sideBar-open')
      .classList.toggle('closed')
  }

  return (
    <section className="section-sideBar">
      {/* sessão sidebar fechada || se quiser que esteja aberta quando carregar a página é só adicionar a className="closed" */}
      <section id="sideBar-closed" className="">
        <button onClick={closeOpen}>
          <FontAwesomeIcon icon={faList} className="icon-side" />
        </button>
      </section>

      {/* sidebar aberta. || quando carrega a página inicia com className="closed" para aparecer fechada */}
      <nav id="sideBar-open" className="closed">
        <div className="btn-close">
          <FontAwesomeIcon icon={faX} className='icon-side' onClick={closeOpen}/>
        </div>

        <div className="opt-nav">
          <p>MÉDICOS</p>
          <FontAwesomeIcon icon={faUserDoctor} className="icon-side" />
        </div>

        <div className="opt-nav">
          <p>BLOGS</p>
          <FontAwesomeIcon icon={faBook} className="icon-side" />
        </div>

        <div className="btn-exit">
          <Link to="/" className='link'>
            <p>SAIR</p>
            <FontAwesomeIcon icon={faRightToBracket} className="icon-side" />
          </Link>
        </div>
      </nav>
    </section>
  )
}
