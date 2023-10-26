import './InputStyles.css'

/*

Really simple component which handles the input

*/

export default function Input({onSubmit}:{onSubmit: (weatherQuery:string) => void}) {
  return(
    <div className='input-wrapper'>
      <h1 className='weather-input-title'>Insert location</h1>
      <input className='weather-input' onKeyUp={(e) => e.key=='Enter' && onSubmit(e.currentTarget.value)}/>
    </div>
  )
}