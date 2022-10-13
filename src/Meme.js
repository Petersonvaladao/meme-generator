import React from 'react';

const Meme = () => {
  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: 'http://i.imgflip.com/1bij.jpg',
  });

  const [allMemes, setAllMemes] = React.useState([]);

  React.useEffect(() => {
    fetch('https://api.imgflip.com/get_memes')
      .then((resp) => resp.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function textChange(event) {
    const { name, value } = event.target;
    setMeme((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  return (
    <main>
      <div className="form">
        <input
          placeholder="Top text"
          className="form--input"
          type="text"
          name="topText"
          value={meme.topText}
          onChange={textChange}
        />
        <input
          placeholder="Bottom text"
          className="form--input"
          type="text"
          name="bottomText"
          value={meme.bottomText}
          onChange={textChange}
        />
        <button onClick={getMemeImage} className="form--btn">
          Get a new meme image 🖼
        </button>
      </div>
      <div className="meme--display">
        <h2 className="text top">{meme.topText}</h2>
        <h2 className="text bottom">{meme.bottomText}</h2>
        <img className="meme--img" src={meme.randomImage} alt="meme" />
      </div>
    </main>
  );
};

export default Meme;
