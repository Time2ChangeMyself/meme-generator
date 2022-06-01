import {useEffect, useState} from 'react';

export default function Hero () {

  useEffect(()=>{
    fetch('https://api.imgflip.com/get_memes')
    .then(res=>res.json())
    .then(res=>setAllMemes(res))
  }, [])

    
  const [meme, setMeme] = useState({
      topText: "",
      bottomText: "",
      randomImage: "http://i.imgflip.com/1bij.jpg"
  });
  
  const [allMemes, setAllMemes] = useState({})
  
  function getMemeImage() {
    const memesArray = allMemes.data.memes
    const randomNumber = Math.floor(Math.random() * memesArray.length)
    const url = memesArray[randomNumber].url

    setMeme((prevMeme)=>({
      ...prevMeme,
      randomImage:url
    }))
    
  }

  function handleChange (event) {
    const {name, value} = event.target;

    setMeme(prevMemeState => {
      return {
        ...prevMemeState,
        [name]:value
      }
    })
  }


  return (
    <main className="hero">
      <div className="container hero--container">
        <div className="hero--inputs">
          <input onChange={handleChange} 
                 name='topText' 
                 placeholder='Top text' 
                 className="input" 
                 type="text"
                 value={meme.topText} />
          <input onChange={handleChange} 
                 name='bottomText' 
                 placeholder='Bottom text' 
                 className="input" 
                 type="text"
                 value={meme.bottomText} />
        </div>
        <button onClick={getMemeImage} type="button" className="button">Get a new meme image</button>
        <div className="image-wrap">
          {meme.randomImage && <img className='meme' src={`${meme.randomImage}`} alt="meme" />}
          <h2 className="meme--text top">{meme.topText}</h2>
          <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      </div>
    </main>
  )
}