import React, { useState } from "react"
import './App.css';

const UserCrad = (props) => {

  const user = props.users.map(u => <div>
    <div><img src={u.picture} alt="avatar" /></div>
    <div>{u.name}</div>
    <div>{u.age}</div>
    <div>{u.gender}</div>
    <div>{u.balance}</div>
    <hr />
  </div>)
  return (
    <div>
      {user}
    </div>
  )
}

const Header = (props) => {

  const [users, setUsers] = useState(props.users);

  const sourseUsers = [...props.users];

  const handleSearchInput = (event) => {
    const inputValue = event.target.value;
    usersFiler(inputValue);
  }

  const usersFiler = (name) => {
    setUsers([]);

    if (!name) {
      setUsers(sourseUsers);
      return;
    }

    setUsers(sourseUsers.filter(user => {
      return user.name.toLowerCase().includes(name.toLowerCase());
    }));
  }

  const Sort = (event) => {
    const sortType = event.target.value;
    const sortedUsers = [...sourseUsers].sort((a, b) =>
    sortType == 'asc' ? a.age - b.age : b.age - a.age);
    setUsers(sortedUsers)
    if (sortType == 'default'){
      return;
    }
    setUsers([...sourseUsers])
  }

  return (
    <header>
      <select onChange={Sort}>
        <option value='asc'>Ascend</option>
        <option value='desc'>Descend</option>
        <option value='default'>Default</option>
      </select>
      FIND: <input onChange={handleSearchInput} />
      <UserCrad users={users} />
    </header>
  )
}



const App = (props) => {
  return (
    <div className="App">
      <Header users={props.users} />
    </div>
  );
}

export default App;
