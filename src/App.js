import React,{useState} from 'react';
import AddUser from './components/Users/AddUsers';
import UsersList from './components/Users/UsersList';

function App() {
  const [usersList, setUsersList] = useState([]);

  const addUserHandler=(uName,uAge,uCollegename) => {
    setUsersList((prevUsersList)=>{
      return [...prevUsersList,{name: uName, age: uAge, collegename: uCollegename,id:Math.random().toString()}]
    });
  }
  
  return (
    <>
      <AddUser onAddUser={addUserHandler} />
      <UsersList users={usersList}/>
    </>
  );
}

export default App;
