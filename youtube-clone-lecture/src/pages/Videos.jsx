import React from 'react'
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query'
import FakeYoutube from '../api/fakeYoutube';
import VideoCard from '../components/VideoCard';

export default function Videos() {
  const { keyword } = useParams();
  const { isLoading, error, data:videos} = useQuery(
    ['videos', keyword], () => {
      const youtube = new FakeYoutube();
      return youtube.search(keyword);
    });

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
