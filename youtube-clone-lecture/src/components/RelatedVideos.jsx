import React from 'react'
import { useYoutubeApi } from '../context/YoutubeApiContext'
import {useQuery} from '@tanstack/react-query'
import VideoCard from './VideoCard';

export default function RelatedVideos({id}) {
  const {youtube} = useYoutubeApi();
  const {error, isLoading, data: videos} = useQuery(['related', id], () => youtube.relatedVideos(id)); 
  return (
    <>
      {isLoading && <p>Loading중...</p>}
      {error && <p>에러 발생...😅</p>}
      <div className='display-grid col-span-2 md:col-span-6'>
        {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} type='list'/>
          ))}
          </ul>
          )}
      </div>
    </>
  )
}
