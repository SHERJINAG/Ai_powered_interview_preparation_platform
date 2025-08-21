import React, { useRef } from 'react';

const ERDesigner = () => {
  const canvasRef = useRef(null);

  const allowDrop = (ev) => {
    ev.preventDefault();
  };

  const drag = (ev) => {
    ev.dataTransfer.setData('text', ev.target.id);
  };

  const drop = (ev) => {
    ev.preventDefault();
    const data = ev.dataTransfer.getData('text');
    const original = document.getElementById(data);
    const clone = original.cloneNode(true);
    clone.classList.add('draggable');
    clone.style.left = `${ev.nativeEvent.offsetX}px`;
    clone.style.top = `${ev.nativeEvent.offsetY}px`;
    clone.setAttribute('draggable', 'true');
    clone.onmousedown = (e) => startDrag(e, clone);
    canvasRef.current.appendChild(clone);
  };

  const startDrag = (e, element) => {
    const canvas = canvasRef.current;
    const shiftX = e.clientX - element.getBoundingClientRect().left;
    const shiftY = e.clientY - element.getBoundingClientRect().top;

    const moveAt = (pageX, pageY) => {
      const canvasRect = canvas.getBoundingClientRect();
      element.style.left = `${pageX - canvasRect.left - shiftX}px`;
      element.style.top = `${pageY - canvasRect.top - shiftY}px`;
    };

    const onMouseMove = (event) => {
      moveAt(event.pageX, event.pageY);
    };

    document.addEventListener('mousemove', onMouseMove);

    element.onmouseup = () => {
      document.removeEventListener('mousemove', onMouseMove);
      element.onmouseup = null;
    };
  };

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', background: '#f1f2f6', padding: '20px' }}>
      <div style={styles.section}>
        <h1>📘 ER Diagrams (Entity-Relationship Diagrams)</h1>
        <p>ER diagrams help us design the structure of a database by showing:</p>
        <ul>
          <li><span style={styles.highlight}>Entities</span>: Objects or things (like <b>Student</b>, <b>Course</b>)</li>
          <li><span style={styles.highlight}>Attributes</span>: Properties of entities (like <b>Name</b>, <b>Age</b>)</li>
          <li><span style={styles.highlight}>Relationships</span>: How entities are related (like <b>Enrolled_In</b>)</li>
          <li><span style={styles.highlight}>Primary Key</span>: Unique identifier for an entity (like <b>Student_ID</b>)</li>
        </ul>
        <h2>🧠 Sample ER Diagram Concept</h2>
        <ul>
          <li><b>Student</b> entity with attributes: Student_ID (PK), Name, Age</li>
          <li><b>Course</b> entity with attributes: Course_ID (PK), Course_Name</li>
          <li><b>Enrollment</b> is a relationship between Student and Course</li>
        </ul>
      </div>

      <div style={styles.section}>
        <h1>🎮 ER Designer Game</h1>
        <p>🧲 Drag and drop the elements onto the canvas to build your own ER diagram!</p>
        <div>
          <div id="entity1" style={{ ...styles.box, ...styles.entity }} draggable onDragStart={drag}>Student</div>
          <div id="entity2" style={{ ...styles.box, ...styles.entity }} draggable onDragStart={drag}>Course</div>
          <div id="attr1" style={{ ...styles.box, ...styles.attribute }} draggable onDragStart={drag}>Student_ID</div>
          <div id="attr2" style={{ ...styles.box, ...styles.attribute }} draggable onDragStart={drag}>Name</div>
          <div id="attr3" style={{ ...styles.box, ...styles.attribute }} draggable onDragStart={drag}>Age</div>
          <div id="attr4" style={{ ...styles.box, ...styles.attribute }} draggable onDragStart={drag}>Course_ID</div>
          <div id="attr5" style={{ ...styles.box, ...styles.attribute }} draggable onDragStart={drag}>Course_Name</div>
          <div id="rel1" style={{ ...styles.box, ...styles.relationship }} draggable onDragStart={drag}>Enrolled_In</div>
        </div>
        <div
          id="canvas"
          ref={canvasRef}
          style={styles.canvas}
          onDrop={drop}
          onDragOver={allowDrop}
        />
      </div>
    </div>
  );
};

const styles = {
  section: {
    background: 'white',
    padding: '20px',
    marginBottom: '30px',
    borderRadius: '12px',
    boxShadow: '0 0 8px rgba(0,0,0,0.1)',
  },
  highlight: {
    fontWeight: 'bold',
    color: '#e67e22',
  },
  box: {
    display: 'inline-block',
    border: '2px dashed #ccc',
    padding: '10px',
    margin: '10px',
    borderRadius: '10px',
    cursor: 'grab',
  },
  entity: {
    backgroundColor: '#7ed6df',
    borderColor: '#22a6b3',
  },
  attribute: {
    backgroundColor: '#f9ca24',
    borderColor: '#f6e58d',
  },
  relationship: {
    backgroundColor: '#e17055',
    borderColor: '#f3a683',
  },
  canvas: {
    position: 'relative',
    border: '2px solid #2c3e50',
    height: '400px',
    marginTop: '20px',
    background: '#fff',
    borderRadius: '12px',
    overflow: 'hidden',
  },
};

export default ERDesigner;
