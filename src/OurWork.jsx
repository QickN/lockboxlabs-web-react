import React from 'react';

function OurWork() {
  const handleClick = () => {
    window.open('https://apps.apple.com/us/app/synapse-brain-games/id6457516219', '_blank');
  };

  return (
    <div>
      <div className="glass-effect">
        <div className="block">
          <div className="content">
            <img src="/public/Images/AppIconSynapse.png" alt="synapse-logo" className="nickimg"/>
            <h2>Synapse | Brain Games</h2>
            <p>A mini-game application that challenges your mind.</p>
            <button onClick={handleClick}>Link to App Store</button>
          </div>
        </div>
        <div className="block">
          <div className="content">
            <img src="" alt="Pebble-logo" className="nickimg"/>
            <h2>Pebble | Daily Savings</h2>
            <p>An upcoming savings application to help you grow your wealth daily.</p>
            <button disabled style={{opacity:0.7, cursor:'default'}}>In Development</button>
          </div>
        </div>
      </div>
      <footer>&copy; Copyright lockboxlabs, LLC.</footer>
    </div>
  );
}

export default OurWork;
