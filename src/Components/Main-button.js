import './Main-button.css'
const MainButton = ({id,buttonName,active,setActiveService }) =>{
    const buttonClasses = `main-button ${active ? 'active' : ''}`
    const removeClass = (id)=> {
        setActiveService(id)
        document.querySelector(".services-wrapper")?.classList?.remove('animate-fade-in-up')
    }
    return (
        <div className='main-button-wrapper'>
            <button className={buttonClasses} onClick={()=> { removeClass(id)}}>
            {buttonName}
            </button>
        </div>
    )
}

export default MainButton