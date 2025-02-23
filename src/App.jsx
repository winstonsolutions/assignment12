import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import {
  Button,
  Card, 
  Label,
  Dropdown,
  Table,
} from '@winstonsolutions/my-component-library'

function App() {
  const [count, setCount] = useState(0)
  const [selectedOption, setSelectedOption] = useState('')
  const [radioValue, setRadioValue] = useState('')

  const dropdownOptions = ['Option 1', 'Option 2', 'Option 3']
  const columns = ["name", "age", "email"];
  const data = [
    { name: "Alice", age: 25, email: "alice@example.com" },
    { name: "Bob", age: 30, email: "bob@example.com" },
    { name: "Charlie", age: 28, email: "charlie@example.com" }
];


  return (
    
   




    <div>
    <Button label="Test" disabled={false}></Button>
    <Button label="Test" disabled={true}></Button>
    <Card title="My Card" content="This is the content of my card." />
    <Label text="Welcome Label" disabled={false}/>
    
    <div> 
    <Dropdown options={['Apple', 'Banana', 'Orange']}  />
    </div>
    <div>
    <Table data={data} columns={columns} disabled={false} />
    </div>
    
  
    
    </div>
    
    
    
  )
}

export default App
