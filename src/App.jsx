import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import Card from './Card'

function App() {
  const [data, SetData] = useState([])

  useEffect(() => {
    async function DataFetch() {
      const jsondata = await fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false")
      const actuallData = await jsondata.json()
      console.log(actuallData)
      SetData(actuallData)
    }
    DataFetch()
  }, [])

  return (
    <>
     <div className="container">
      {
        data.map(e=>{
          return <Card name={e.name} id={e.id} image={e.image} symbol={e.symbol} current={e.current_price} volume={e.total_volume} />
        })
      }
      </div>
    </>
  
  )
}

export default App
