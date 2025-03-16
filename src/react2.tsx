import React, { useState } from 'react';

function Show() {
  
  const [showText, setShowText] = useState(false);

  return (
    <div>
      <button onClick={() => setShowText(!showText)}>
        {showText ? 'Mətni Gizlət' : 'Mətni Göster'}
      </button>
      {showText && <p>Salam, bu mətn görünür!</p>}
    </div>
  );
}

export default Show;