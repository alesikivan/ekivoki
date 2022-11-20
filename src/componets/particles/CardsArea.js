import { useState } from 'react'
import { useSelector } from 'react-redux'
import '../../assets/styles/css/particles/cards-area.css'
import { hideCard, showUsuallCard, showEkivokiCard } from '../../redux/actions/gameActions'

function CardsArea() {
  const [isRotated, setIsRotated] = useState(false)
  const { card } = useSelector(state => state.game)

  return (
    <article className='cards-area'>
      <span>Карточки</span>

      <div className='buttons'>
        <button
          onClick={showUsuallCard}
          className="btn btn-light special">Обычная</button>
        
        <button 
          onClick={showEkivokiCard}
          className="btn btn-light special">"Экивоки"</button>
        
        {
          card ? (
            <button 
              onClick={hideCard}
              className="btn btn-light">&times;</button>
          ) : ''
        }

      </div>

      {
        card ? (
          <img 
            src={card} 
            onClick={() => setIsRotated(!isRotated)}
            className={isRotated ? "card rotated" : "card"}
            alt='card'/>
        ) : ''
      }
    </article>
  )
}

export default CardsArea