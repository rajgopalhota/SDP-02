import React from 'react'
import './../Styles/DeleteMessage.css';
export default function DeleteMessage(props) {
  const display = {
    true: "block",
    false: "none"
}
  return (
    <div className="community-deleteBoxBody" style={{display: display[props.showDialog]}}>
            <div className="community-deleteBox">
                <p className="community-deleteBoxHeader">Delete Comment</p>
                <p className="community-deleteBoxDescription">Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>
                <div className="community-deleteBoxButtonContainer">
                    <button className="community-deleteBoxCanclebtn" 
                            onClick={props.onDeleteBoxCancel}>
                        NO, CANCEL
                    </button>
                    <button className="community-deleteBoxDeletebtn" 
                            onClick={props.confirmDelete}>
                        YES, DELETE
                    </button>
                </div>
            </div>
        </div>
  )
}
