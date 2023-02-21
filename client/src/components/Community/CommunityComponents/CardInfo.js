import React,{useState} from 'react'
import './../Styles/CardInfo.css';

export default function CardInfo({cardata, currentUser, onReply, onDelete, onUpdate}) {

  const {content, createdAt, user: {username, image: {webp}}, id, replyingTo} = cardata;
    const [isEdit, setIsEdit] = useState(false);
    const [message, setMessage] = useState(content);

    const updateData = (e) => {
        e.preventDefault();
        onUpdate(id, message);
        setIsEdit(false)
    };
  return (
    <div className="community-cardInfoContainer">
            <div className="community-cardHeader">
                <div className="community-cardHeaderText">
                    <img src={webp} alt="" className="community-profilePicture"/>
                    <p>{username}</p>
                    {username === currentUser ? <p className="community-badge">You</p> : null}
                    <p>{createdAt}</p>
                </div>
                <div className="community-cardHeaderBtns">
                    {username === currentUser ? 
                        <>
                            <button className="community-btndelete" onClick={() => onDelete(cardata.id)}>
                                <img src="images/icon-delete.svg" alt="" className="community-btnIcon"/>
                                Delete
                            </button>
                            <button className="community-btn" onClick={() => setIsEdit(prev => !prev)}>
                                <img src="images/icon-edit.svg" alt="" className="community-btnIcon"/>
                                Edit
                            </button>
                        </> : 
                            <button className="community-btn" onClick={onReply}>
                                <img src="images/icon-reply.svg" alt="" className="community-btnIcon"/>
                                Reply
                            </button>
                    }

                </div>
            </div>
            <div className="community-cardText">
                {isEdit ? 
                    <form onSubmit={updateData}>
                        <textarea 
                            value={message} 
                            onChange={(e) => setMessage(e.target.value)}>
                        </textarea>
                        <button>UPDATE</button>
                    </form>
                        : 
                    <>{replyingTo ? <span className="community-replyto">@{replyingTo} </span> : null}{content}</>
                }
            </div>
        </div>
  )
}
