import React from 'react'
import './post.css'

export default function Post() {
  return (
    <div className='post'>
       <div className="postContainer">
        <div className="postTop">
           <div className="postTopleft">
           <img src="/images/janith.jpg" alt="" className="postImage" />
             <span className="postUserName">Janith Nanayakkara</span>
             <span className="postTime">5 mins ago</span>
           </div>
        </div>
            <div className="postCenter">
                <div className="postCaption">Hellow I am Batman..! You understand..? I am Batman..!!</div>
                <img src="/images/janith.jpg" alt="" className="postedImage" />
            </div>
            <div className="postBottom">
                <div className="postBottomleft">
                    <img src="/images/like1.png" alt="" className="readctionPic" />
                    <img src="/images/heart1.png" alt="" className="readctionPic" />
                    <img src="/images/haha2.png" alt="" className="readctionPic" />
                    <span className="likeCount">Batman and 225 other</span>
                </div>
                    <div className="postBottomRight">
                        <span className="commentCount">
                            15 Comments
                        </span>
                    </div>
            </div>
       </div>
    </div>
  )
}
