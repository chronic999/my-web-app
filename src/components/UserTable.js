import React, { useRef, useState } from "react";
import { Table } from "react-bootstrap";

const htmlStyles = {
  color: 'white',
  textShadow: '0px 3px 6px black',
  fontFamily: 'monospace',
  fontSize: '4vh'
}
const tableStyles = {
  fontFamily: 'monospace',
  fontSize: '2.5vh',
  color: 'white',
  width: '90%',
  margin: '0 auto',
  marginBottom: '2vh'
}

export default function UserTable(props) {
  const id = useRef()
  const name = useRef()
  const email = useRef()
  const tel = useRef()
  const { data } = props;
  const tableHeading = Object.keys(data[0]);
  const [tableDt, setTableDt] = useState(data)

  const onSubmitHandler = e =>{
    e.preventDefault();
      console.log(id, name, email, tel,);
      const newRow = {
        id: id.current.value,
        name: name.current.value,
        email: email.current.value,
        tel: tel.current.value
      }
      setTableDt(prevState=>[...prevState, newRow])
    
  }
  return (
    <>
      <h1 style={htmlStyles}>Add New User Info:</h1>
      <Table striped bordered hover variant="dark" style={tableStyles}>
        <thead>
          <tr>
            {tableHeading.map((heading, index) => (
              <th key={index}>{heading}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableDt.map((data, index) => (
            <tr key={index}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
              <td>{data.tel}</td>
            </tr>
          ))}
        </tbody>
      </Table> 
      <form className="mb-4" onSubmit={onSubmitHandler}>
        <label htmlFor="user-id">id</label>
        <input id="user-id" className="mb-3" ref={id} />
        <br />
        <label htmlFor="user-name">Name</label>
        <input id="user-name" className="mb-3"  ref={name}/>
        <br />
        <label htmlFor="user-email">Email</label>
        <input type="email" id="user-email" className="mb-3"  ref={email}/>
        <br />
        <label htmlFor="user-tel">Telephone</label>
        <input type="telephone" id="user-tel" className="mb-3"  ref={tel}/>
        <br />
        <button className="btn btn-primary">Add</button>
      </form>
    </>
  );
}
