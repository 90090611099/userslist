import React from 'react';
import './App.css';
import Forms from './components/form';
import List from './components/list'



class App extends React.Component {

constructor(){
  super();
  this.state = {
    users: []
  }

}

addToList = (newUser) => {
  if(newUser.name === undefined || newUser.name === '' ) {
    newUser.name = `anonimus ${newUser.ip}`
    console.log(newUser.name)
  }
  let updatedUsers = [...this.state.users];
  if (updatedUsers.find(user => user.name === newUser.name)){
    alert('you can\'t add the same user name!')
  
  }else{
    updatedUsers.push(newUser);
  }

  this.setState({
  users: updatedUsers
  })
  
}
removeUser = (userToRemove) => {
  
  this.setState({
    users: this.state.users.filter( user => user.name !== userToRemove)
  })

}
removeAll = () => {
  
  if(window.confirm("Remove All Users?")){
    this.setState({
      users: []
    })
  }
}
sorting = (ip) => {
  const data = this.state.users;
  data.sort((a,b) => a[ip].localeCompare(b[ip]))
  this.setState({ data: data })

}
  render(){
    return (
    <div className="App">
      <header className="App-header">
        <p>
          Users List
        </p>
      </header>
     <section className='formsSection'>
        <Forms addUser={this.addToList}></Forms>
      </section>
      <section className='listSection'>
        <List listOfUsers={this.state.users} removeUser={this.removeUser} removeAll={this.removeAll} sorting={this.sorting}></List>
      </section>
    </div>
    
  );
}
}
export default App;
