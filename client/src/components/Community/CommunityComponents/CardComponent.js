import React from 'react'
import Card from './Card';
import './../Styles/CardComponent.css';

export default function CardComponent({cardata, currentUser, onReply, onVoteChange, onDelete, onUpdate}) {
  const {replies} = cardata;
  return (
    <>
            <Card cardata={cardata} isreply={false} currentUser={currentUser} onReply={onReply} onVoteChange={onVoteChange} onDelete={onDelete} onUpdate={onUpdate}/>

            {replies && (
                <div className="community-cardReply">
                    <div className="community-verticalLine"></div>
                    <div className="community-replyContainer">            
                        {replies.map(item => 
                            <Card cardata={item} 
                                isreply={true} 
                                key={item.id} 
                                currentUser={currentUser} 
                                onReply={onReply} 
                                onVoteChange={onVoteChange} 
                                onDelete={onDelete} 
                                onUpdate={onUpdate}
                            />
                        )}
                    </div>
                </div>
            )}
        </>
  )
}
