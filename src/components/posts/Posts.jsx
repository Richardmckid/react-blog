import { useEffect, useState } from 'react'
import { supabase } from '../../supabase/supabaseClient'
import Post from './Post'

const Posts = ({posts}) => {

   
  return (
    <>
        <div className='posts_posts-container'>

            { posts &&
                posts.map(post => (
                    <Post post={post} key={post.id}/>
                ))
            }
            
            
        </div>
    
    </>
  )
}

export default Posts