
import { useRoutes } from 'react-router'
import routes from '~react-pages'



function App() {
  

  return (
    <>
    {/* vi henter routes fra main */}
      {useRoutes(routes)}
       
    </>
  )
}

export default App