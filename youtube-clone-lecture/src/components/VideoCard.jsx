import React from 'react'
import '../index.css'
import { formatAgo } from '../util/date';
import { useNavigate } from 'react-router-dom'

export default function VideoCard({video}) {
  const {title, thumbnails, channelTitle, publishedAt} = video.snippet;
  const navigate = useNavigate();

  return (
  <li onClick={() => {navigate(`/videos/watch/${video.id}`, {state: {video}})} }>
    <img className='cursor-pointer w-full' src={thumbnails.medium.url} alt={title}/>
    <div>
      <p className='cursor-pointer my-2 font-semibold line-clamp-2' >{title}</p>
      <p className='text-sm  opacity-80'>{channelTitle}</p>
      <p className='text-sm  opacity-80'>{formatAgo(publishedAt, 'ko')}</p>
    </div>

  </li>
  );
}
