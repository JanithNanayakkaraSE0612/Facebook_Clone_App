import React from 'react'
import './addPost.css'
import PhotoCameraBackIcon from '@mui/icons-material/PhotoCameraBack';
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import LiveTvIcon from '@mui/icons-material/LiveTv';

export default function AddPost() {
  return (
    <div className='addPost'>
        <div className="addPostContainer">
            <div className="addPostTop">
                <img src="/images/janith.jpg" alt="" className="addPostPic" />
                <input type="text" placeholder='whats in your mind .?' className="addPostInput" />
            </div>
            <hr className='postHr'/>
               <div className="addPostBottom">
                    <div className="addPostOptions">
                        <div className="addPostOption">
                        <PhotoCameraBackIcon className='addPhoto'/>
                        <span className="addPhotoOptionText">Add Photo/Video</span>
                        </div>
                        <div className="addPostOption">
                        <AddLocationAltIcon className='addPhoto'/>
                        <span className="addPhotoOptionText">Add Location</span>
                        </div>
                        <div className="addPostOption">
                        <LocalOfferIcon className='addPhoto'/>
                        <span className="addPhotoOptionText">Add Tag</span>
                        </div>
                        <div className="addPostOption">
                        <LiveTvIcon className='addPhoto'/>
                        <span className="addPhotoOptionText">Go Live</span>
                        </div>
                    </div>
               </div>
        </div>
    </div>
  )
}
