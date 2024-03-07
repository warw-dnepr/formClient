

export default function Inputs(props){
   return (
      <>       
       <input placeholder='Name & Surname' type='text' value={props.name} onChange={e => props.inpName(e.target.value)}/>  
       <input type='number' placeholder='Number phone'  value={props.phone} onChange={e => props.inpPhone(e.target.value)}/>
       <button onClick={props.saveUser}>Save user</button>
      </>
   )
}
