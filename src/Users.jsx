

export default function Users(props){

   return (
      <>
         <ul className='ul-main'>
          <li>{props.user.name}</li>
          <li>{props.user.phone}</li>
          <li><button id={props.user.id} onClick={()=>props.deleteUser(props.user.id)}>Delete</button></li>
        </ul>

      </>
   )
}