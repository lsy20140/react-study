import { createContext, useContext } from "react";
import FakeYoutube from "../api/fakeYoutube";
import Youtube from "../api/youtube";

export const YoutubeApiContext = createContext();

const youtube= new FakeYoutube();

export function YoutubeApiProvider({children}) {
  return <YoutubeApiContext.Provider value={{youtube}}>{children}</YoutubeApiContext.Provider>
}

// Provider 안에 있는 어떤 자식 컴포넌트에서도 useYoutubeApi 함수 이용하면 value에 접근 가능
export function useYoutubeApi() {
  return useContext(YoutubeApiContext)
}