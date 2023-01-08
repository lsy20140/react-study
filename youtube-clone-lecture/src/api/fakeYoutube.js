import axios from 'axios'

export default class FakeYoutube {
  constructor() {

  }

  // popular.json의 id 형태(문자열) search.json의 id 형태가(객체) 다름
  // 두 가지 경우 나눠서 코드 작성
  // # -> private 클래스 접근 시 사용
  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }

  // 객체 형태인 id videoId로 변환 후 반환
  // why? 네트워크 통신 시 필요한 동일한 형태로 만들기 위해
  async #searchByKeyword() {
    return axios
      .get(`/videos/search.json`)
      .then((res) => res.data.items)
      .then(items => items.map((item) => ({...item, id: item.id.videoId})));
  }

  async #mostPopular() {
    return axios
      .get(`/videos/popular.json`)
      .then((res) => res.data.items);
  }
}