import React from 'react';

function OurWork() {
  const handleClick = () => {
    window.open('https://apps.apple.com/us/app/synapse-brain-games/id6457516219', '_blank');
  }

  return (
    <div>
    <div class="glass-effect">
        <div class="block">
           <div class="content">
               <img src="/public/Images/AppIconSynapse.png" alt='synapse-logo' class="nickimg"/>
               <h2>Synapse | Brain Games</h2>
               <p>a minigame application</p>
               <button onClick={handleClick}>link to app store.</button>
           </div>
       </div>
   </div>
    <div>
      <footer>&copy; Copyright lockboxlabs, LLC.</footer>

    </div>
</div>
  );
}

export default OurWork;
