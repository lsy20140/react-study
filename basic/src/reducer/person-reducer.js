export default function personReducer(person, action){
  switch(action.type){
    case 'updated': {
      const {prev, current} = action;
      return {
        ...person, 
        mentors: person.mentors.map((mentor) => {
          if(mentor.name === prev){
            return{...mentor, name:current};
          }
          return mentor;
        }),
      };   
    }
    case 'added':
      const {addName, addTitle} = action;
      return {
        ...person, 
        mentors: [
          ...person.mentors, 
          {name:addName, title:addTitle}
        ]
      };

    case 'deleted':
      return {
        ...person, 
        mentors: person.mentors.filter((mentor) => mentor.name !== action.name)
      };
    
    default: {
      throw Error(`알수없는 액션 타입이다: ${action.type}`);
    }


  }
}