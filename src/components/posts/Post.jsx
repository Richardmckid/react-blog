import React from 'react'

const Post = ({post}) => {
  return (
    <div className='post__post-item'>
        {/* https://w0.peakpx.com/wallpaper/228/113/HD-wallpaper-forest-vacation-bavaria-forest-vacation-grass-germany-trees-clouds-sky-nature-moonlight-hill-meadow.jpg */}

        <img className='post_post-image' src={post.image} alt={post.title} />
        <div className="post__post-text-container">
            <p className='post_post-text-tag'>{post.Tags.title}</p>
            <p className='post_post-text-title'>{post.title}</p>
            <div className="post__post-users">
                <img src="https://randomuser.me/api/portraits/lego/6.jpg" alt="" />
                <img src="https://randomuser.me/api/portraits/lego/1.jpg" alt="" />
                <img src="https://randomuser.me/api/portraits/lego/3.jpg" alt="" />
            </div>
        </div>

    </div>
  )
}

export default Post