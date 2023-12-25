import React from 'react';
import Header from './Header';
import Users from './Users';
import AddUser from './AddUser';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: [
        {
          id: 1,
          firstname: 'Bob',
          lastname: 'Marley',
          bio: 'lorem ipsum dolor sit amet',
          age: 40,
          isHappy: true,
        },
        {
          id: 2,
          firstname: 'John',
          lastname: 'Doe',
          bio: 'lorem ipsum dolor sit amet',
          age: 22,
          isHappy: false,
        },
      ]
    }
    this.addUser = this.addUser.bind(this)
  }
 
  helpText = 'Help text';


  render() {
    return (
      <div>
        <Header title="Список пользователей" />

        <main>
          <Users users = {this.state.users} />
        </main>

        <aside>
          <AddUser onAdd={this.addUser}/>
        </aside>

      </div>
    );
  }

  addUser(user){
     const id = this.state.users.length + 1
     this.setState({users:[...this.state.users, {id, ...user}]})
  }
 
}

export default App;
