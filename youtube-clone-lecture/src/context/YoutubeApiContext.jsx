import { createContext, useContext } from "react";
import FakeYoutubeClient from "../api/fakeYoutubeClient";
import Youtube from "../api/youtube";
import YoutubeClient from "../api/youtubeClient";

export const YoutubeApiContext = createContext();

const client = new FakeYoutubeClient();
const youtube= new Youtube(client);

export function YoutubeApiProvider({children}) {
  return <YoutubeApiContext.Provider value={{youtube}}>{children}</YoutubeApiContext.Provider>
}

// Provider 안에 있는 어떤 자식 컴포넌트에서도 useYoutubeApi 함수 이용하면 value에 접근 가능
export function useYoutubeApi() {
  return useContext(YoutubeApiContext)
}