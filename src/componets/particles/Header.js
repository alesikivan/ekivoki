import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'

import '../../assets/styles/css/particles/header.css'
import { showWinnder } from '../../redux/actions/gameActions';

import Notifications from './Notifications';

function Header() {
  const { members, positions, status } = useSelector(state => state.game)

  const rules = [
    {
      en: 'auction',
      ru: 'аукцион',
      description: 'Если ваша фишка попала на такую клетку, то слово отгадывают все команды. Вперед пойдет та, которая назовет ответ раньше всех.'
    },
    {
      en: 'harmful',
      ru: 'вредина',
      description: 'Если, находясь на такой клетке, ваша команда успешно справилась с заданием, то вы идете вперед, а ваши соперники на 1 клетку назад.'
    },
    {
      en: 'karma',
      ru: 'карма',
      description: 'Если задание выполненно успешно, команда идет вперед на то число, которое выпало на кубике. А если задание не выполненно, то команда идет на такое же количество клеток назад.'
    },
    {
      en: 'entropy',
      ru: 'энтропия',
      description: 'Попав на эту клетку, вы можете взять карточку из любой колоды и выбрать любое задание.'
    },
  ]

  const showHint = event => event.target.classList.add('active-item')

  const hideHint = event => event.target.classList.remove('active-item')

  return (
    <header className='main-header'>
      <div className='cover'>
        <Link to="/" className='logo'>
          Экивоки
        </Link>

        {
          status === 'started' ? (
            <ul className='game-info'>
              {
                rules.map((rule, index) => {
                  return <li 
                    onMouseOver={showHint}
                    onMouseOut={hideHint}
                    key={index}>
                      <span className='hint'>
                        { rule.description }
                      </span>
                      
                      <div className={rule.en}></div>
                      – { rule.ru }
                  </li>
                })
              }
            </ul>
          ) : ''
        }

        { // Вывести кнопку, если количество 
          // шагов участника совпало с кол-вом ходов в игре
          members.some(member => (member.steps + 1) === positions.length) ? (
            <button
              onClick={showWinnder}
              className='btn btn-success'>Игра закочена!</button>
          ) : ''
        }

        <Notifications />
      </div>
    </header>
  )
}

export default Header
