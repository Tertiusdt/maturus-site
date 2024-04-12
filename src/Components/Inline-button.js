import './Inline-button.css'
const InlineButton = ({buttonName,setModalActive }) =>{
    return (
        <div className='inline-button-wrapper'>
            <button className="inline-button" onClick={()=> setModalActive(true) }>
            {buttonName}
            </button>
        </div>
    )
}

export default InlineButton