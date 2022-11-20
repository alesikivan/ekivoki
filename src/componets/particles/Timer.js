import { useEffect, useState } from 'react'
import '../../assets/styles/css/particles/timer.css'

import { formatMinutes, formatSeconds } from '../../utils/timer'

const initialState = {
  recordingMinutes: 0,
  recordingSeconds: 0,
  initRecording: false
}

function Timer() {
  const [recorderState, setRecorderState] = useState(initialState)
  
  useEffect(() => {
    const MAX_RECORDER_TIME = 2
    let recordingInterval = null

    if (recorderState.initRecording)
      recordingInterval = setInterval(() => {
        
        setRecorderState((prevState) => {
          // Выключить таймер
          if (
            prevState.recordingMinutes === MAX_RECORDER_TIME &&
            prevState.recordingSeconds === 0
          ) {
            clearInterval(recordingInterval)
            return prevState
          }

          if (prevState.recordingSeconds >= 0 && prevState.recordingSeconds < 59) {
            return {
              ...prevState,
              recordingSeconds: prevState.recordingSeconds + 1,
            }
          }

          if (prevState.recordingSeconds === 59)
            return {
              ...prevState,
              recordingMinutes: prevState.recordingMinutes + 1,
              recordingSeconds: 0,
            }
        })
      }, 1000)
    else clearInterval(recordingInterval)

    return () => clearInterval(recordingInterval)
  })

  function start() {
    setRecorderState(prevState => {
      return {
        ...prevState,
        initRecording: true
      }
    })
  }

  function finish() {
    setRecorderState(initialState)
  }

  return (
    <article className='timer'>
      <div className='time'>
        <span>{formatMinutes(recorderState.recordingMinutes)}</span>
        <span>:</span>
        <span>{formatSeconds(recorderState.recordingSeconds)}</span>
      </div>

      {
        !recorderState.initRecording ? (
          <button onClick={start} className='btn btn-success'>Запустить</button>
        ) : ''
      }

      {
        recorderState.initRecording ? (
          <button onClick={finish} className='btn btn-danger'>Остановить</button>
        ) : ''
      }

    </article>
  )
}

export default Timer