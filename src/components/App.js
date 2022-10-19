import React from 'react'
import BodyText from './BodyText'
import Image from './Image'
import { List } from './List'
import SignIn from './SignIn'
import UnorderedList from './UnorderedList'
import '../App.css'
import InputText from './InputText'
import Counter from './Counter'
import UserTable from './UserTable'
const users = [
  {
    id: '00001',
    name: 'John',
    email: 'JohnJohn@gmail.com',
    tel: '000-999-1254'
  },
  {
    id: '00002',
    name: 'Jason',
    email: 'JasonJohn@gmail.com',
    tel: '555-334-9878'
  },
  {
    id: '00003',
    name: 'Jimmy',
    email: 'JimmyJohn@gmail.com',
    tel: '000-999-7582'
  }
]
const items = ['hello', 'good evening', 'goodbye']
export function App() {
  return (
    <div>
        <h1 className='headerTitle'>This is my react app</h1>
        <h2 className='hdrh2'>Click button to sign in</h2>
        <SignIn />
        <List text={'Hello World'}/>
        <hr/>
        <Image src={'logo512.png'} alt={'React Logo SVG'} height={'150px'} width={'150px'} />
        <BodyText text={'lorem ipsum ipsu'}/>
        <UnorderedList items={items}/>
        <InputText />
        <fieldset>
          <Counter />
        </fieldset>
        <UserTable data={users} />
    </div>
  )
}

