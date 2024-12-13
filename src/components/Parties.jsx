import React from 'react';
import './Style.css'; 

const parties = [
  {
    id: 1,
    name: 'Party A',
    image: 'vimg1.jpeg', 
    description: 'This is Party A.',
    date: '2024-12-20',
  },
  {
    id: 2,
    name: 'Party B',
    image: 'vimg2.jpeg',
    description: 'This is Party B.',
    date: '2024-12-21',
  },
  {
    id: 3,
    name: 'Party C',
    image: 'vimg3.jpeg',
    description: 'This is Party C.',
    date: '2024-12-22',
  },
  {
    id: 4,
    name: 'Party D',
    image: 'vimg3.jpeg',
    description: 'This is Party D.',
    date: '2024-12-23',
  },
  {
    id: 5,
    name: 'Party D',
    image: 'vimg3.jpeg',
    description: 'This is Party D.',
    date: '2024-12-23',
  },
  {
    id: 6,
    name: 'Party D',
    image: 'vimg3.jpeg',
    description: 'This is Party D.',
    date: '2024-12-23',
  },
  {
    id: 7,
    name: 'Party D',
    image: 'vimg3.jpeg',
    description: 'This is Party D.',
    date: '2024-12-23',
  },
  {
    id: 8,
    name: 'Party D',
    image: 'vimg3.jpeg',
    description: 'This is Party D.',
    date: '2024-12-23',
  },
  
];

const Parties = () => {
  const handleVote = (partyName) => {
    alert(`You have voted for ${partyName}`);
    
  };

  return (
    <div className="parties-container">
      {parties.map((party) => (
        <div key={party.id} className="party-card">
          <img src={party.image} alt={party.name} className="party-image" />
          <h3>{party.name}</h3>
          <p>Date: {party.date}</p>
          <div className="buttons-container">
            <button
              className="about-button"
              onClick={() => alert(party.description)}
            >
              About
            </button>
            <button
              className="vote-button"
              onClick={() => handleVote(party.name)}
            >
              Mark Vote
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Parties;
