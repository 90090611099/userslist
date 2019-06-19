import React from 'react';
import './list.css';

export default class List extends React.Component {
    constructor(){
        super();
        this.state = { 
            data: [] 
                };
    }
   
    

    onSort = (e, ip) => {
        this.props.sorting(ip)
    }

    render() {
     
        let users = this.props.listOfUsers;
       
     
        if (users.length === 0) {
            return (
            <div>
                <p>List of users is empty!</p>
            </div>
                )
        } else {
          
            return (
                <div>
                <table className="tbl">
                    <thead>
                        <tr>
                            <th>No</th>
                            <th>name</th>
                            <th>mail</th>
                            <th onClick={(e) => this.onSort(e, 'ip')}>ip (sorting)</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                    
                    { users.map((user, index) => {
                    return (
                            <tr key={Math.random()}>
                                <td>{index+1}</td>
                                <td>{user.name} </td>
                                <td>{user.email}</td>
                                <td>{user.ip}</td>
                                <td>
                                    <button onClick={ () => this.props.removeUser(user.name) }> X </button>
                                </td>
                            </tr>
                    )
            
        })}
                    </tbody>
                    </table>
                  
                    <button className="removeBtn" onClick={this.props.removeAll}>Remove All</button>
                </div>
      
            )
        }
    }
}