import React, {useReducer} from 'react';
import personReducer from './reducer/person-reducer';

export default function AppMentorsButton() {
  const [person, dispatch] = useReducer(personReducer, initialPerson);

  const handleNameChange = () =>{
    const prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    const current = prompt(`바꾸고 싶은 이름을 입력해주세요.`);

    dispatch({type:'updated', prev, current});
  };

  const handleAdd = () => {
    const addName = prompt(`추가할 멘토의 이름을 입력하세요.`);
    const addTitle = prompt(`추가할 멘토의 타이틀을 입력하세요.`);

    dispatch({type: 'added', addName, addTitle});
  }

  const handleDelete = () => {
    const name = prompt(`삭제할 멘토의 이름을 입력하세요.`);

    dispatch({type:'deleted', name});
  }


  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는:</p>
      <ul>
        {person.mentors && !!person.mentors.length && person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <Button text='멘토 이름 바꾸기' onClick={handleNameChange}/>

      {/* 멘토 추가/삭제 하기 */}
      <Button text='멘토 추가하기' onClick={handleAdd}/>

      <Button text='멘토 삭제하기' onClick={handleDelete}/>
    </div>
  )
}

function Button({text, onClick}){
  console.log('Button', text, 're-rendering!!');

  return(
    <button
      onClick={onClick}
      style={{
        backgroundColor: 'black',
        color:'white',
        borderRadius: '20px',
        margin:'0.4rem',

      }}
    >
      {text}
    </button>
  )
}

const initialPerson= {
  name: '세윤',
  title: '개발자',
  mentors: [
    {
    name: '밥',
    title: '시니어 개발자',
    },
    {
      name: '준',
      title: '랄랄 개발자',
      },
  ],
};
