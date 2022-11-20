import { useSelector } from 'react-redux'
import '../../assets/styles/css/particles/members-nav.css'
import { changeMemberSteps, nextQueue } from '../../redux/actions/gameActions'

function MembersNav() {
  const { 
    members, 
    queuePosition, 
    cube, 
    positions
  } = useSelector(state => state.game)

  // Номера клеток с аукционом
  const auctions = positions
    .map((position, index) => {
      if (position.mode === 'auction') {
        return index
      }

      return NaN
    })
    .filter(position => !!position === true)

  // Номера клеток с энтропией
  const entropies = positions
    .map((position, index) => {
      if (position.mode === 'entropy') {
        return index
      }

      return NaN
    })
    .filter(position => !!position === true)

  function changeSteps(member, step, isAuction) {
    changeMemberSteps(member, step)

    // Если дейсвие было произведенно на аукционе и кубик не равен 6, то сл. ход
    if (cube !== 6 && isAuction) {
      console.log(isAuction)
      nextQueue()
    }
  }

  return <article className='members-nav'>
    <ul className="list-group members">
      {
        members.map((member, index) => {
          return <li className={queuePosition === index + 1 ? 'list-group-item member active' : 'list-group-item member'} key={index}>
            <div className='member-info'>
              <b>{index + 1}</b>. {member.name}
            </div>

            { // Показывать функционал касмотных шагов, если кубик равен 6 или
              // если хотя бы один игрок стоит на аункционе или энтропии и сейчас его ход
              cube === 6 || 
                ( 
                  members.some((m, i) => auctions.includes(m.steps) && (queuePosition === i + 1))
                ) || (
                  members.some((m, i) => entropies.includes(m.steps) && (queuePosition === i + 1))
                ) ? (
                <div className='steps'>
                  <div onClick={() => changeSteps(index, 1, members.some((m, i) => auctions.includes(m.steps) && (queuePosition === i + 1)))} className='add-step'>+1</div>
                  <div onClick={() => changeSteps(index, 6, members.some((m, i) => auctions.includes(m.steps) && (queuePosition === i + 1)))} className='add-step'>+6</div>
                  <div onClick={() => changeSteps(index, -1, members.some((m, i) => auctions.includes(m.steps) && (queuePosition === i + 1)))} className='add-step'>-1</div>
                  <div onClick={() => changeSteps(index, -6, members.some((m, i) => auctions.includes(m.steps) && (queuePosition === i + 1)))} className='add-step'>-6</div>
                </div>
              ) : ''
            }

          </li>
        })
      }
    </ul>
  </article>
}

export default MembersNav