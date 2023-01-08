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
      <div>Videos for {keyword}</div>
      {isLoading && <p>Loading중...</p>}
      {error && <p>에러 발생...😅</p>}
      {videos && (<ul>
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
        </ul>
        )}
    </>

  )
}
