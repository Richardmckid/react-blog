import React from 'react'
import { Link } from 'react-router-dom'

const Tag = ({tag}) => {
  return (
    <div className='tag__tag-item'>
        
        <Link to="">{tag.title}({tag.count})</Link>
        
        
    </div>
  )
}

export default Tag