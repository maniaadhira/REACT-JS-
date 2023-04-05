import './App.css';
import './table';
// import Table from './table';
import './inputbox';
// import Input from './inputbox';
import { useState } from 'react';

function App() {
  const details =[
    {
    name:"Mani",
    age:22,
    email:"mani143@gmail.com",
    address:"Tirupur"
  },
  {
    name:"Aadhira",
    age:19,
    email:"aadhira143@gmail.com",
    address:"Theni"
  },
  {
    name:"Kaja",
    age:20,
    email:"kaja341@gmail.com",
    address:"coimbatore"
  }
]
const [newdetails,setnewdetails] = useState(details)
const [name,setname] = useState('')
const [age,setage] = useState('')
const [email,setemail] = useState('')
const [address,setaddress] = useState('')

function added(){
const index1 = newdetails.length // At any index//
const newdata = [...newdetails.slice(0,index1),
  
{
  name:name,
  age:age,
  email:email,
  address:address
},
...newdetails.slice(index1)
];
setnewdetails(newdata);
setname('');
setage('');
setemail('');
setaddress('');
}

  return (
    <div className='style'>
      <h1><u>STUDENT DATA LIST</u></h1>

        <lable>student name: <input type="text" placeholder="Name Here" value={name} onChange={x=>setname(x.target.value)} id="name"></input></lable>
        <br/><br/>
        <lable>student age: <input type="number" placeholder="Age Here" value={age} onChange={x=>setage(x.target.value)} id="age"></input></lable>
        <br/><br/>
        <lable>student email: <input type="text" placeholder="Email Here" value={email} onChange={x=>setemail(x.target.value)} id="email"></input></lable>
        <br/><br/>
        <lable>student address: <input type="text" placeholder="Address Here" value={address} onChange={x=>setaddress(x.target.value)} id="address"></input></lable>
        <br/><br/>
        <button onClick={added} id="submit">SUBMIT</button>


      <table>
      <tr>
        <th>NAME</th>
        <th>AGE</th>
        <th>EMAIL</th>
        <th>ADDRESS</th>
        <th>EDIT</th>
        <th>DELETE</th>
      </tr>
      {
        newdetails.map((index,key)=>{
          return (
         <tr key={key}>
         <td>{index.name}</td>
         <td>{index.age}</td>
         <td>{index.email}</td>
         <td>{index.address}</td>
        <td> <button id="edit">edit</button></td>
         <td><button onClick={() => {
          setnewdetails(newdetails.filter(a =>
          a !== index))
          }
          }
           id="delete">delete</button></td>
         </tr>
          )
        }

        )

        }
         {/* <Table/>  */}
        
      </table>
     
    </div>
  );
}

export default App;
