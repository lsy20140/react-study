import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query'
import VideoCard from '../components/VideoCard';
import axios from 'axios'


export default function Videos() {
  const { keyword } = useParams();
  const { isLoading, error, data:videos} = useQuery(
    ['videos', keyword], async () => {
      return axios
      .get(`/videos/${keyword ? 'search' : 'popular'}.json`)
      .then((res) => res.data.items)
  });

  return (
    <>
      <div>Videos for {keyword}</div>
      {isLoading && <p>Loading중...</p>}
      {error && <p>에러 발생...😅</p>}
      {videos && <ul>
        {videos.map((video) => (
          <VideoCard key={video.id} video={video} />
        ))}
        </ul>}


    </>

  )
}
