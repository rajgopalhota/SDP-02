import React,{useState} from 'react'
import './Styles/CommentSection.css';
export default function CommentSection({currentUser, currentUserProfilePic, onComment}) {
  const [comment, setComment] = useState("");

  const sentdata = (e) => {
      e.preventDefault();
      onComment(comment)
      setComment("")
  };
  return (
    <form className="community-form" onSubmit={sentdata}> 
    <img src={currentUserProfilePic} alt="" className="community-profilePic"/>
    <textarea name="comment" id="comment" rows="4" placeholder="Add a comment.." 
        value={comment} 
        onChange={(e) => setComment(e.target.value)}>
    </textarea>
    <input type="submit" value="Send" className="community-btn"/>
</form>
  )
}
