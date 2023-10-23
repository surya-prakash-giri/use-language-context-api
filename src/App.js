import React, { useState } from "react";
import "./App.css";
import { useLanguage } from "./context/LanguageContext";
import languages from "./model/Language";

function App() {
  const { currentLanguage, toggleLanguage } = useLanguage();
  const [ currentIndex, setCurrentIndex ] = useState(0);
  const listItem = 'item list-item';
  const activeListItem = 'item list-item active';
  
  const handleClick = () => {
    toggleLanguage();
    setCurrentIndex((oldIdx) => ((oldIdx + 1) % languages.length));
  }
  
  return (
    <div className="App">
      {/* Toggle Favorite Language Section */}
      <div className="fav-language">
        <div>
          <h4 className="title" id="favoriteLanguage">Favorite Programing Language: </h4>
          <input id="currentLanguage" className="item" type="text" value={currentLanguage} readOnly></input>
        </div>
        <button
          id="changeFavoriteBtn"
          className="changeFavoriteBtn"
          onClick={handleClick}
        >
          Toggle Language
        </button>
      </div>
      {/* Languages List */}
      <div className="fav-language">
        <h3 className="title">Languages</h3>
        <ul>
          {languages.map((language, index) => (
            <li className={currentIndex === index ? activeListItem : listItem} key={index}>{language}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
