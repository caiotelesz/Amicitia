import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faUserDoctor } from '@fortawesome/free-solid-svg-icons';

import './index.scss';

export default function SidebarItem() {
  return (
    <section className='section-sideBar'>
      <div className='container-sideBar'>
        <div>
          <p>MÉDICOS</p>
          <FontAwesomeIcon icon={ faUserDoctor } className='icon-side' />
        </div>

        <div>
          <p>BLOGS</p>
          <FontAwesomeIcon icon={ faBook } className='icon-side' />
        </div>
      </div>
    </section>

  );
}

