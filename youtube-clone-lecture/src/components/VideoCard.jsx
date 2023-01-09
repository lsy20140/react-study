import React from 'react'
import '../index.css'
import { formatAgo } from '../util/date';

export default function VideoCard({video}) {
  const {title, thumbnails, channelTitle, publishedAt} = video.snippet;

  return (
  <li className='m-1 mb-4'>
    <img className='w-full' src={thumbnails.medium.url} alt={title}/>
    <div>
      <p className='mt-2 font-semibold' >{title}</p>
      <p className='mt-3 text-sm  text-zinc-400'>{channelTitle}</p>
      <p className='mt-1 text-sm  text-zinc-400'>{formatAgo(publishedAt, 'ko')}</p>
    </div>

  </li>
  );
}
