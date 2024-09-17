function ProfilePicture(){
    const imageUrl = "./src/assets/yaya.jpg"
    const handleClick = (e) => e.target.style.display = "none";
    return(
        <img className="img" src={imageUrl} alt=""  onClick={(e) => {handleClick(e)}}/>
    );
}

export default ProfilePicture