
import ProfilePic from './assets/pp.jpg'


function Card(){
    return(
        <div className="card">
            <img className='card-image'  src={ProfilePic} alt="Profile Picture" />
            <h2 className='card-title'>Yared Tesfaye</h2>
            <p className='card-text'>I am Fullstack Web developer and play football</p>
        </div>
    );
}

export default Card