import React, {useState} from 'react'

export default function AppMentor() {
  const [person, setPerson] = useState(initialPerson);

  const handleNameChange = () =>{
    const name = prompt(`바꿀 멘토의 이름을 입력하세요.`)
    setPerson({...person, mentor: {...person.mentor, name:name}});
  };

  const handleTitleChange = () =>{
    const title = prompt(`바꿀 멘토 타이틀을 입력하세요.`)
    setPerson({...person, mentor: {...person.mentor, title:title}});
  };


  return (
    <div>
      <h1>
        {person.name}은 {person.title}
      </h1>
      <p>
        {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
      </p>
      <button
        onClick={handleNameChange}
      >
        멘토 이름 바꾸기
      </button>

      <button
        onClick={handleTitleChange}
      >
        멘토 타이틀 바꾸기
      </button>
    </div>
  )
}

const initialPerson= {
  name: '세윤',
  title: '개발자',
  mentor: [
    {
    name: '밥',
    title: '시니어 개발자',
    },
  ],
};
