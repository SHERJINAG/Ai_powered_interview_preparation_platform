import React, { useState } from 'react';

const MatchGame = () => {
  const [items, setItems] = useState([
    { id: 'item1', text: 'Predicting student grades based on past scores', type: 'Supervised', dropped: false },
    { id: 'item2', text: 'Grouping customers by shopping habits', type: 'Unsupervised', dropped: false },
    { id: 'item3', text: 'Email spam detection using labeled data', type: 'Supervised', dropped: false },
    { id: 'item4', text: 'Clustering songs by audio similarity', type: 'Unsupervised', dropped: false }
  ]);

  const allowDrop = (e) => e.preventDefault();

  const onDragStart = (e, id) => {
    e.dataTransfer.setData('id', id);
  };

  const onDrop = (e, category) => {
    e.preventDefault();
    const id = e.dataTransfer.getData('id');
    setItems(prevItems =>
      prevItems.map(item =>
        item.id === id ? { ...item, dropped: true, result: item.type === category ? 'correct' : 'wrong' } : item
      )
    );
  };

  return (
    <div style={{ fontFamily: 'Segoe UI, sans-serif', backgroundColor: '#f9f9f9', padding: '20px' }}>
      <h1 style={{ textAlign: 'center' }}>Supervised vs Unsupervised Learning</h1>

      <div style={{
        maxWidth: '800px', margin: '0 auto 30px auto', background: '#fff',
        padding: '20px', borderRadius: '12px', boxShadow: '0 0 10px rgba(0,0,0,0.1)'
      }}>
        <h2>📘 Introduction</h2>
        <p><strong>Supervised Learning:</strong> Trained using labeled data. Example: Predicting house prices based on features.</p>
        <p><strong>Unsupervised Learning:</strong> Finds hidden patterns in data without labels. Example: Grouping customers by behavior.</p>
      </div>

      <h2 style={{ textAlign: 'center' }}>🎯 Match the examples to their category</h2>

      <div style={{ display: 'flex', justifyContent: 'space-around', flexWrap: 'wrap', marginTop: '20px' }}>
        {['Supervised', 'Unsupervised'].map(cat => (
          <div
            key={cat}
            onDragOver={allowDrop}
            onDrop={(e) => onDrop(e, cat)}
            style={{
              width: '45%', minHeight: '200px', padding: '10px', backgroundColor: '#e3f2fd',
              border: '2px dashed #2196f3', borderRadius: '10px', textAlign: 'center'
            }}
          >
            <h3>{cat}</h3>
            {items.filter(item => item.result && item.type === cat).map(item => (
              <div
                key={item.id}
                style={{
                  padding: '10px', margin: '10px', borderRadius: '6px',
                  backgroundColor: item.result === 'correct' ? '#c8e6c9' : '#ffcdd2',
                  border: '1px solid #ccc'
                }}
              >
                {item.text}
              </div>
            ))}
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', marginTop: '40px' }}>
        {items.filter(item => !item.result).map(item => (
          <div
            key={item.id}
            draggable
            onDragStart={(e) => onDragStart(e, item.id)}
            style={{
              padding: '10px', backgroundColor: '#fff', border: '1px solid #ccc',
              margin: '10px', cursor: 'grab', borderRadius: '6px'
            }}
          >
            {item.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MatchGame;
