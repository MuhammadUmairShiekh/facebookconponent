import { useState } from "react"

function Custombtn(props) {
    const [like, setLike] = useState(0)
    const { btnName, comment,share } = props

    const likeBtn = () => {
        let likyBtn = like
        setLike(++likyBtn)
        alert("Thanks For Like")
    }
    return (
        <div>
            <div className="line">

            </div>
            <div className='Bttn'  >
                
                <div>
                    <p className="emoji" >🥰 😡 😪 😂</p>
                    <button onClick={likeBtn}>{btnName} {like}</button>
                </div>
                <div>
                   
                  <p className="comBtn" >{comment}</p>    

                </div>

                <div>

                    <p className="shareBtn">{share}</p>

                </div>

            </div>


        </div>
    )
}

export default Custombtn