import FbImageLibrary from 'react-fb-image-grid'
import Custombtn from './Custombtn'



function Facebook(props) {

    const { tittle, userName, profilePic, date } = props
    return (
        <div className="data" >
            <div className="main" >

                <div className="profile"  >
                    <img
                        className="avatar"
                        src="https://images.unsplash.com/profile-fb-1696100282-96b1e7fed8de.jpg?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
                        alt="Post"
                        width={60}
                        height={60}
                    />
                    <p>{userName}</p>
                    <p className="date" >{date}</p>
                </div>
                <div className="post" >
                    <p> {tittle}</p>
                    {/* <p>{date}</p> */}
                </div>
                <div className="images-post" >

                    <FbImageLibrary images={profilePic} />

                    {/* <img  src={profilePic} /> */}
                </div>

                <div>
                    <Custombtn btnName= "Like" comment="Comment" share="Share" />
                </div>
            </div>

        </div>

    )
}

export default Facebook