import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import axios from 'axios';
import ResidentCard from './componentes/ResidentCard';

function App() {
  const [location, setLocation] = useState({});
  const [searchId, setSearchId] = useState("");

  useEffect(() => {
    const randomId = Math.floor(Math.random() * 126) + 1;
    axios.get(`https://rickandmortyapi.com/api/location/${randomId}`)
      .then(res => setLocation(res.data));
  }, [])

  console.log(location);

  const searchIdLocation = () => {
    axios.get(`https://rickandmortyapi.com/api/location/${searchId}`)
      .then(res => setLocation(res.data));
  }

  return (
    <div className="App">
      <img
        className='image-app'
        src="https://s3-alpha-sig.figma.com/img/f757/e216/34f8ffb34b0055d2a2a34bc10390c23c?Expires=1675036800&Signature=Swa49LMeSMsfsDLUm8QfL2l7LRxjAv~8lo1N4feanNKgrqhX4rqVQNNHsAyylRCQbzQmyApjDsDpIf2nA6O17dEV8MTBWFjuXxx83T-7Pp4SqTt3qozOj9ktRPPOORsi0KuhfBM5O9wPHMfWan7iGzA3QfpPH0WsepjaIYzuEJGXJZYv9yigdMdBpd3UI0t69GuAX~mZp0ocV3b-2vK0QYLyPod~a0NBNnho-D9GPO8aFXrXGoiskVNiG~M7p2cnNgHXyDdXrRBhO25mA7QTfKQ5AMTWGp0Ix0zixAW7F1tc1RuYCI9-ERptT5A7E85k3PdOySkrMinZX7mcbdi1Gg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" />
      <div className='App-location'>
        <div className='search-id'>
          <input
          type="text"
          placeholder='type a id'
          value={searchId}
          onChange={e => setSearchId(e.target.value)}
        />
        <button onClick={searchIdLocation}> search location</button>
        </div>
        <div className='location-information'>
          <ul className='location-list'>
            <li><b>Nombre: </b><span>{location.name}</span></li>
            <li><b>Tipo: </b><span>{location.type}</span></li>
            <li><b>Dimension: </b><span>{location.dimension}</span></li>
            <li><b>Poblacion: </b><span>{location.residents?.length}</span></li>
          </ul>
        </div>

        <ul className='resident-list'>
          {
            location.residents?.map(residents => (
              <ResidentCard
                url={residents}
                key={residents}
              />
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default App
