import React from 'react'
import UserImage from './UserImege'
import Comments from '../Home/Comments/Comments';
import  EnggBtns from  '../Home/Posts/EnggBtns';



export default function SingleUserPost(props) {
  // console.log(post.user.name);
  
  return (
    <div>
      <div className="single-post-wrapper">
      <div className="user-post-header">
            <div className="user-post-info">
              <UserImage username={ props.user.name } />
                <span> { props.user.name} </span>
            </div>
           <small className="user-handle"> @{props.user.username } </small>
      </div>
      <div className="post-body">

           <p>
             {
               props.post.postBody
             }
           </p>
          
          
            
          {
            <img src={`./uploads/posts/${props.post.postImage}`} alt=""/>
          }
      </div>
      <div className="post-footer">
        <EnggBtns 
                postId={ props.post.id } 
                userId={ props.user.id }
                likes={ props.post.postLikes ?  props.post.postLikes : [] } 
                commentsNumber={ props.post.comments ? props.post.comments : [] } />
        </div>
      <div className="comment-wrapper">
        <Comments postId={ props.post.id } comments={ props.post.comments }  />
      </div>
   </div>
      </div>
  )
}
 