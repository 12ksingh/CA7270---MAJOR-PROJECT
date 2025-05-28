  import React from 'react';
  import './HoverCardGrid.css';

  const cards = [
    {
      id: 1,
      title: 'Lorem Ipsum',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
      id: 2,
      title: 'Lorem Ipsum',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
    {
      id: 3,
      title: 'Lorem Ipsum',
      description:
        'Lorem Ipsum is simply dummy text of the printing and typesetting industry when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
    },
  ];

  export default function HoverCardGrid() {
    return (
      <div className="container flex my-10">
        {cards.map((card, index) => (
          <div key={card.id} className="card">
            <div className="face face1">
              <div className="content">
                <h2>{card.title}</h2>
                <p>{card.description}</p>
              </div>
            </div>
            <div className={`face face2 face-color-${index + 1}`}>
              <h2>{`0${index + 1}`}</h2>
            </div>
          </div>
        ))}
      </div>
    );
  }
