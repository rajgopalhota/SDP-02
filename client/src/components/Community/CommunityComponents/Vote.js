import React from 'react'
import './../Styles/Vote.css';

export default function Vote(props) {
  const {score, id, onVoteChange} = props;
  return (
    <div className="community-voteContainer">
    <button className="community-incrementButton" 
            onClick={() => onVoteChange(id, "up")}>
        <img src="images/icon-plus.svg" alt=""/>
    </button>
    <p className="community-votesNumber">{score}</p>
    <button className="community-decrementButton" 
            onClick={() => onVoteChange(id, "down")}>
        <img src="images/icon-minus.svg" alt="" />
    </button>
</div>
  )
}
