import './Reversi.css'


function Reversi({ isActive,toggle }){
  return <div className='Reversi' style={{ backgroundColor: isActive ? 'white' : 'black'}} onClick={toggle}></div>
}

export default Reversi;