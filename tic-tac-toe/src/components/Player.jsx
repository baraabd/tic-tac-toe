import { useState } from 'react';

const Player = ({ name, symbol }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing((editing) => !editing);
  };

  let playerName = <span className="player-name">{name}</span>
  if (isEditing) {
    playerName = <input type='text' required value={name}/>;
  }
  return (
    <li>
      <span>
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  );
};
export default Player;
