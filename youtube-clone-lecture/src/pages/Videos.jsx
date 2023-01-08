import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query'
import popular from '../videos/popular.json';
import search from '../videos/search.json';


export default function Videos() {
  const { keyword } = useParams();
  const { isLoading, error, data:videos} = useQuery(
    ['videos', keyword], async () => {return fetch(`/videos/${keyword ? 'search' : 'popular'}.json`)
    .then(res => res.json())
    .then(data => data.items);
  });

  return (
    <>
      <div>Videos for {keyword}</div>
      {isLoading && <p>Loading중...</p>}
      {error && <p>에러 발생...😅</p>}
      {videos && <ul>
        {videos.map((video) => (
          <li>
            {video.snippet.title}
          </li>
          
        ))}
        </ul>}


    </>

  )
}
