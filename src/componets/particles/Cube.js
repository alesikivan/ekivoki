import { useSelector } from 'react-redux'
import '../../assets/styles/css/particles/cube.css'
import { changeCube, showEkivokiCard, showUsuallCard } from '../../redux/actions/gameActions'
import { random } from '../../utils/math'

import images from '../../assets/images/imgs'
import { useState } from 'react'

function Cube() {
  const [cubeRoration, serCubeRoration] = useState(1)
  const { cube } = useSelector(state => state.game)

  function generate() {
    // Анимация (поворот) кубика
    let angle = cubeRoration + 1
    serCubeRoration(angle < 5 ? angle : 1)

    // Генерация числа от 1 до 6
    const number = random(1, 6)
    
    // Показать соответствующую карточку
    if (number < 6) showUsuallCard()
      else showEkivokiCard()
    
    changeCube(number)
  }

  return (
    <article className='cube'>
      <button onClick={generate}>
        <img className={'rotated-' + cubeRoration} src={images.cube} alt='cube'/>
      </button>:
      <input 
        value={cube}
        type="text" className="form-control" disabled></input>
    </article>
  )
}

export default Cube