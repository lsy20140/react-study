import React from 'react'
import '../index.css'
import { formatAgo } from '../util/date';

export default function VideoCard({video}) {
  const {title, thumbnails, channelTitle, publishedAt} = video.snippet;

  return (
  <li>
    <img className='w-full' src={thumbnails.medium.url} alt={title}/>
    <div>
      <p className='my-2 font-semibold line-clamp-2' >{title}</p>
      <p className='text-sm  opacity-80'>{channelTitle}</p>
      <p className='text-sm  opacity-80'>{formatAgo(publishedAt, 'ko')}</p>
    </div>

  </li>
  );
}
