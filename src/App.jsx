import { useEffect, useState } from 'react' 

import './App.css'
import Users from './Users';
import Inputs from './Inputs';

function App() {
  const [users, setUsers] = useState([]);
  const [isShow, showWindow] = useState(true);
  const [name, inpName] = useState('');
  const [phone, inpPhone] = useState('');

    useEffect(() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setUsers(data);
        });
    }, []);

    function deleteUser(id){
      const newArritem=users.filter(users=>users.id!==id);
      setUsers(newArritem);
    }
    function openWind(){showWindow(!isShow)}

    function saveUser(){
      if (!name || !phone ) return alert('add name & phone');

      const newUser = {
        id:Math.floor(Math.random()*1000),
        name:name,
        phone:phone
      }
  
      setUsers(oldList=>[...oldList,newUser])
      inpName('');
      inpPhone('');
      showWindow(!isShow)
    }
    return (

      <>
        {users.length===0 && <div className='div-load'>Loading...</div>}
        {users.map((user) => (
          <Users key={user.id} user={user} deleteUser={deleteUser}/>
        ))}
        {users.length!==0 && <button onClick={openWind}> {isShow ?  'New user': "Cancel " }</button>}

        {!isShow && <Inputs saveUser={saveUser} name={name} phone={phone} inpName={inpName} inpPhone={inpPhone}/>}
       
      </>

    );


}
  

export default App
