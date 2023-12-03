import { useState } from 'react'
import TableHight from './components/tables/tableHight';

function App() {
  const [count, setCount] = useState(0)

  return (
    <TableHight />
  );
}

export default App
