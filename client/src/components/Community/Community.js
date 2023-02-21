import React,{useState} from 'react'
import CardComponent from './CardComponent';
import CommentSection from './CommentSection';
import data from './data.json';
import DeleteMessageBox from './DeleteMessage';

const saveToLocalStorage = (data) => {
    localStorage.setItem("data", JSON.stringify(data))
  }
  
  // fetch data from local storage or local data file 
  data = JSON.parse(localStorage.getItem("data")) || data;


export default function Community() {
    const [database, setdatabase] = useState(data);
  const {username, image: {webp}} = data.currentUser;
  const [showDialog, setShowDialog] = useState(false);
  const [deleleteItemId, setDeleteItemId] = useState(null)

  const handleAddComment = (comment) => {
    const obj = {
      "id": Math.floor(Math.random() * 99999999999),
      "content": comment,
      "createdAt": "1 month ago",
      "score": 0,
      "user": {
        "image": {
          "webp": webp
        }, 
        "username": username
      },
      "replies": []
    }

    setdatabase((prevdata) => {
      const database = {...prevdata};
      database.comments.push(obj);
      saveToLocalStorage(database);
      return database;
    })

  };

  const handleAddReply = (replyto, reply, replyUnder) => {
    const obj = {
      "id": Math.floor(Math.random() * 9999999999999),
      "content": reply,
      "createdAt": "2 week ago",
      "score": 0,
      "replyingTo": replyUnder || replyto,
      "user": {
        "image": {
          "webp": webp
        },
        "username": username
      }
    }
    setdatabase((prevdata) => {
      const database = {...prevdata};
      database.comments.forEach((item) => {
        if (item.user.username === replyto || (item.user.username === replyUnder)){
          item.replies.push(obj)
        }
      })
      saveToLocalStorage(database);
      return database;
    })
  };

  const handleVote = (id , voteType) => {
    setdatabase(prevdata => {

      // make a deep copy 
      const database =JSON.parse(JSON.stringify(prevdata));
      let userdata = database.comments.filter(item => item.id === id)
      if (userdata.length === 0) {
        database.comments.forEach(item => {  
          userdata = item.replies.filter(item => item.id === id)
        })
      }

      let score = Number(userdata[0].score);
      if (voteType === "up") {
        score++;
      }

      if (voteType === "down") {
        score--;
      }
      userdata[0].score = score;
      saveToLocalStorage(database);
      return database;
    })
  };

  const handleDelete = (id) => {
    setShowDialog(true)
    setDeleteItemId(id)
  }

  const handleDeleteCard = () => {
    const id = deleleteItemId
    setdatabase(prevdata => {
      const database =JSON.parse(JSON.stringify(prevdata));
      database.comments = database.comments.filter(item => item.id !== id);

      if (database.comments.length === prevdata.comments.length) {
        database.comments.forEach((item, idx) => {
          item.replies = item.replies.filter(item => item.id !== id)
        })
      }

      setShowDialog(false);
      saveToLocalStorage(database);
      return database;
    })
  }

  const handleUpdata = (id, message) => {
    setdatabase(prevdata => {
      const database =JSON.parse(JSON.stringify(prevdata));
      let userdata = database.comments.filter(item => item.id === id)
      if (userdata.length === 0) {
        database.comments.forEach(item => {  
          userdata = item.replies.filter(item => item.id === id)
        })
      }
      userdata[0].content = message;
      saveToLocalStorage(database);
      return database;
    })
  }
  return (
    <div className="App">
      {database && database.comments.map(item => 
        <CardComponent 
          cardata={item} 
          key={item.id} 
          currentUser={[username, webp]} 
          onReply={handleAddReply}
          onVoteChange={handleVote}
          onDelete={handleDelete}
          onUpdate={handleUpdata}/>
      )}
      
      <CommentSection 
        currentUser={username} 
        currentUserProfilePic={webp} 
        onComment={handleAddComment}
      />

      <DeleteMessageBox showDialog={showDialog} onDeleteBoxCancel={() => {
        setShowDialog(false)}} confirmDelete={handleDeleteCard}/>
    </div>
  )
}
