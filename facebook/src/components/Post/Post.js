import React from 'react'
import './post.css'

export default function Post() {
  return (
    <div className='post'>
       <div className="postContainer">
        <div className="postTop">
            <img src="/images/janith.jpg" alt="" className="postImage" />
             <span className="postUserName">Janith Nanayakkara</span>
             <span className="postTime">5 mins ago</span>
        </div>
            <div className="postCenter">
                <div className="postCaption">Hellow I am Batman..! You understand..? I am Batman..!!</div>
                <img src="/images/janith.jpg" alt="" className="postedImage" />
            </div>
            <div className="postBottom">
                <div className="postBottomleft">
                    <img src="" alt="" className="readctionPic" />
                    <img src="" alt="" className="readctionPic" />
                    <img src="" alt="" className="readctionPic" />
                    <span className="likeCount">Batman and 225 other</span>
                </div>
                    <div className="postBottomRight"></div>
            </div>
       </div>
    </div>
  )
}
