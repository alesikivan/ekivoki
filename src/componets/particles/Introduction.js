import '../../assets/styles/css/particles/introduction.css'

import { fillMembers } from '../../redux/actions/gameActions'

function Introduction() {
  
  return <article className='intro'>
    <h1>Добро пожаловать в игру <b>"Экивоки"</b></h1>
    
    <span>Разработчик: Огиевич Ольга</span>

    <button onClick={fillMembers} className='btn btn-success'>Начать игру</button>
  </article>
}

export default Introduction
