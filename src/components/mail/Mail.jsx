import './mail.css'

const Mail = () => {
  return (
    <div className='mail'>
        <h1  className='mailTitle'>Save Time, Save Money</h1>
        <span> Signup , We will give you best deal</span>
        <div className='mailInputContainer'>
            < input placeholder='Enter your email'/>
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default Mail