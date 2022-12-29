import logo from './logo.svg';
import './App.css';
import Profile from './components/Profile';

function AppProfile() {
  return (
    <>
      <Profile 
        name="JY" 
        title="디자이너" 
        url="https://images.unsplash.com/photo-1672187455503-70bafac016ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4NHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
        isNew={true}
      />

      <Profile 
        name="SY" 
        title="프론트엔드 개발자" 
        url="https://images.unsplash.com/photo-1672193964688-443f2a5353d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw4OXx8fGVufDB8fHx8&auto=format&fit=crop&w=600&q=60"
        isNew={false}
      />
      <Profile 
        name="SB" 
        title="백엔드 개발자" 
        url="https://images.unsplash.com/photo-1672169537148-2e221c483ea4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxMDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60"
        isNew={true}
      />
    </>
  );
}

export default AppProfile;
