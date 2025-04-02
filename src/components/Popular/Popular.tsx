import PopularCard, { BeggingOnHerKneesToBePopularType } from '../popularCard/PopularCard'
import './popular.css'
import { useEffect, useState } from 'react'

const Popular = () => {
  {/*Fetcheld be a popular.json-ból az adatokat és tárold le egy állapotváltozóban*/ }

  {/*Hozz létre egy popularcard komponenst és a lementett adatokat ezen keresztül jelenítsd meg*/ }

  const [populars, setPopular] = useState<BeggingOnHerKneesToBePopularType[]>();

  useEffect(() => {
    fetch('popular.json')
      .then(G => G.json())
      .then(G => setPopular(G))
  }, [])


  return (
    <section className="popular">
      <h1 className="section__title">POPULAR CREATIONS</h1>
      <div className="popular__coffees">
        {
          populars?.map((G, i) => <PopularCard key={i} {...G} />)
        }
      </div>
    </section>
  )
}

export default Popular
