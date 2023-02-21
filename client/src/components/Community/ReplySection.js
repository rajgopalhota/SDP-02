import React,{useState} from 'react'
import './Styles/CommentSection.css';
export default function ReplySection({currentUser, currentUserProfilePic, onReply, replyto, replyUnder}) {
  const [reply, setReply] = useState("");

  const sendReply = (e) => {
      e.preventDefault();
      onReply(replyto, reply, replyUnder)
      setReply("")
  };
  return (
    <form className="community-form" onSubmit={sendReply}> 
            <img src={currentUserProfilePic} alt="" className="profilePic"/>
            <textarea name="comment" id="comment" rows="4" placeholder="Add your message.." 
                    value={reply} 
                    onChange={(e) => setReply(e.target.value)}>
            </textarea>
            <input type="submit" value="Reply" className="community-btn"/>
        </form>
  )
}
