import React from 'react'
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query'
import VideoCard from '../components/VideoCard';
import { useYoutubeApi } from '../context/YoutubeApiContext';

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();

  const { isLoading, error, data:videos} = useQuery(
    ['videos', keyword], () => youtube.search(keyword));

  return (
    <>
      {isLoading && <p>Loading중...</p>}
      {error && <p>에러 발생...😅</p>}
      <div className='display-grid col-span-2 md:col-span-6'>
        {videos && (
        <ul className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4'>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video}/>
          ))}
          </ul>
          )}
      </div>

    </>

  )
}
