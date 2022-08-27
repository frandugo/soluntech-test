import { CardList } from './components/Cards'
import { DataContextProvider } from './context/DataContextProvider'

function App() {
  return (
      <DataContextProvider>
          <CardList />
      </DataContextProvider>
  )
}

export default App
