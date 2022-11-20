import { useSelector } from 'react-redux'

import TrashCan from './TrashCan'
import { createMember, removeMember, startGame } from '../../redux/actions/gameActions'

import '../../assets/styles/css/particles/members.css'
import { createNotification } from '../../redux/actions/notificationsActions'
import { useState } from 'react'

function Members() {
  const [name, setName] = useState('')
  const { members } = useSelector(state => state.game)

  function create(e) {
    // Имя не пустое 
    if (name.trim()) {
      // Проверяем существует ли уже такое имя участника
      if (!checkName(name.trim())) {
        // Создаем и обнуляем поле с именем
        createMember(name)
        setName('')
      } else {
        createNotification('Такой участник уже есть', 'error')
      }
      
      setName('')
    } else {
      createNotification('Поле не должно быть пустым', 'error')
    }
  }

  function start() {
    if (members.length > 1) {
      startGame()
    } else {
      createNotification('Нужно как минимум 2 участника', 'error')
    }
  }

  // Проверка: есть ли команда с таким же именем
  function checkName(name) {
    return members.some(member => member.name === name)
  }

  return <article className='team'>
    <h4>
      Создать игроков
    </h4>

    {/* Вывод участников */}
    <ul className="list-group members">
      {
        members.map((member, index) => {
          return <li className="list-group-item member" key={index}>
            {index + 1}. {member.name}
            <TrashCan callback={() => removeMember(member.id)} />
          </li>
        })
      }
    </ul>

    {/* Создание участников */}
    <div className="form-inline">
      <input 
        value={name} 
        onChange={e => setName(e.target.value)} 
        type="text" className="form-control" 
        placeholder="Название игрока или команды" />
      
      <button 
        onClick={create}
        type="button" 
        className="btn btn-primary mb-2">Создать</button>
    </div>

    <button 
      onClick={start}
      className='btn btn-success max'>Начать игру</button>
  </article>
}

export default Members
