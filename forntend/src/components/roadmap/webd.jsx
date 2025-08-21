import React, { useState } from 'react';
import { Card, Modal, Button, Container, Row, Col } from 'react-bootstrap';

const WebDevelopmentRoadmap = () => {
  const [show, setShow] = useState(false);
  const [selectedWeek, setSelectedWeek] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (week) => {
    setSelectedWeek(week);
    setShow(true);
  };

  const weeks = [
    {
      title: "HTML Basics",
      focus: "Learn the fundamentals of HTML, including elements, attributes, and structure of a web page.",
      video: "https://www.youtube.com/watch?v=UB1O30fR-EE",
      resource: "https://developer.mozilla.org/en-US/docs/Web/HTML",
      assignment: "Create a simple webpage with headings, paragraphs, and images.",
      dataset: "https://www.kaggle.com/datasets/camnugent/sandp500",
      project: "Build a personal webpage with your bio and hobbies.",
      projectResource: "https://www.freecodecamp.org/learn/responsive-web-design/#basic-html-and-html5"
    },
    {
      title: "CSS Basics",
      focus: "Learn how to style a webpage using CSS, including text styling, layout, and responsive design.",
      video: "https://www.youtube.com/watch?v=1Rs2YlxL1GQ",
      resource: "https://developer.mozilla.org/en-US/docs/Web/CSS",
      assignment: "Style your personal webpage from the previous week using CSS.",
      dataset: "https://www.kaggle.com/datasets/awesomedata/countries-of-the-world",
      project: "Create a webpage with a responsive design.",
      projectResource: "https://www.freecodecamp.org/learn/responsive-web-design/#basic-css"
    },
    {
      title: "JavaScript Basics",
      focus: "Learn the basics of JavaScript, including variables, functions, and DOM manipulation.",
      video: "https://www.youtube.com/watch?v=hdI2bqOjy3c",
      resource: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Introduction",
      assignment: "Add JavaScript functionality to your webpage, like a simple calculator.",
      dataset: "https://www.kaggle.com/datasets/rtatman/american-airlines-flight-delays",
      project: "Build a to-do list with add, delete, and edit functionality.",
      projectResource: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#basic-javascript"
    },
    {
      title: "Advanced JavaScript: ES6 and Beyond",
      focus: "Learn advanced JavaScript features such as arrow functions, classes, promises, and async/await.",
      video: "https://www.youtube.com/watch?v=NCwa_hG6WwY",
      resource: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class",
      assignment: "Refactor your to-do list project to use ES6+ features.",
      dataset: "https://www.kaggle.com/datasets/sbhatti/automobile-dataset",
      project: "Create a weather app that fetches data from a public API.",
      projectResource: "https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/#es6"
    },
    {
      title: "Responsive Web Design",
      focus: "Learn how to design websites that adapt to different screen sizes using media queries.",
      video: "https://www.youtube.com/watch?v=s6P6KdtY3Kk",
      resource: "https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries",
      assignment: "Make your weather app responsive on different devices.",
      dataset: "https://www.kaggle.com/datasets/sbhatti/automobile-dataset",
      project: "Build a personal portfolio website with a responsive layout.",
      projectResource: "https://www.freecodecamp.org/learn/responsive-web-design/#responsive-web-design-principles"
    },
    {
      title: "Version Control with Git and GitHub",
      focus: "Learn version control concepts, how to use Git, and how to host projects on GitHub.",
      video: "https://www.youtube.com/watch?v=SWYqp7iY_Tc",
      resource: "https://git-scm.com/book/en/v2",
      assignment: "Push your projects to GitHub and practice version control.",
      dataset: "https://www.kaggle.com/datasets/ryanxcharles/sales-dashboard-dataset",
      project: "Create a GitHub repository for your portfolio website and push your code.",
      projectResource: "https://www.freecodecamp.org/learn/"
    },
    {
      title: "Introduction to Front-End Frameworks (React)",
      focus: "Learn the basics of React, a front-end JavaScript framework for building user interfaces.",
      video: "https://www.youtube.com/watch?v=Ke90Tje7VS0",
      resource: "https://reactjs.org/docs/getting-started.html",
      assignment: "Create a simple React app with components.",
      dataset: "https://www.kaggle.com/datasets/camnugent/sandp500",
      project: "Build a movie search app using the OMDB API.",
      projectResource: "https://reactjs.org/docs/getting-started.html"
    },
    {
      title: "Backend Development with Node.js and Express",
      focus: "Learn backend development with Node.js and Express, including routing and creating APIs.",
      video: "https://www.youtube.com/watch?v=TlB_eWDSMt4",
      resource: "https://expressjs.com/en/starter/installing.html",
      assignment: "Create a simple API that returns JSON data.",
      dataset: "https://www.kaggle.com/datasets/sbhatti/automobile-dataset",
      project: "Create a REST API to manage a list of users.",
      projectResource: "https://www.freecodecamp.org/learn/apis-and-microservices/#basic-node-and-express"
    },
    {
      title: "Connecting Front-End and Back-End",
      focus: "Learn how to connect the front-end React app to the backend API with HTTP requests.",
      video: "https://www.youtube.com/watch?v=lmqS4ZuljPY",
      resource: "https://reactjs.org/docs/faq-ajax.html",
      assignment: "Fetch data from your API and display it in your React app.",
      dataset: "https://www.kaggle.com/datasets/ryanxcharles/sales-dashboard-dataset",
      project: "Build a task manager app with a backend API and a React front-end.",
      projectResource: "https://www.freecodecamp.org/learn/apis-and-microservices/#connecting-to-apis"
    },
    {
      title: "Introduction to Databases (SQL)",
      focus: "Learn the basics of SQL, database design, and how to interact with databases.",
      video: "https://www.youtube.com/watch?v=HXV3zeQKqGY",
      resource: "https://www.w3schools.com/sql/",
      assignment: "Design a database to store user data for your task manager app.",
      dataset: "https://www.kaggle.com/datasets/uciml/mushroom-classification",
      project: "Build a simple blog application with a database to store blog posts.",
      projectResource: "https://www.w3schools.com/sql/sql_intro.asp"
    },
    {
      title: "Advanced JavaScript: Asynchronous Programming",
      focus: "Learn how to handle asynchronous tasks using promises, async/await, and callbacks.",
      video: "https://www.youtube.com/watch?v=PoRJizFvTSE",
      resource: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Asynchronous_Programming",
      assignment: "Refactor your task manager app to handle asynchronous operations.",
      dataset: "https://www.kaggle.com/datasets/ryanxcharles/sales-dashboard-dataset",
      project: "Create a chat application that uses WebSocket for real-time communication.",
      projectResource: "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Asynchronous_Programming"
    },
    {
      title: "Capstone Project: Full-Stack Web Application",
      focus: "Build a full-stack web application using the skills you've learned throughout the roadmap.",
      video: "https://www.youtube.com/watch?v=1NrHkjlWVhM",
      resource: "https://www.freecodecamp.org/learn/full-stack/",
      assignment: "Build and deploy a full-stack web app that includes front-end and back-end functionality.",
      dataset: "https://www.kaggle.com/datasets/rtatman/american-airlines-flight-delays",
      project: "Create a blog platform where users can create, edit, and delete posts.",
      projectResource: "https://www.freecodecamp.org/learn/full-stack/"
    }
  ];

  return (
    <Container>
      <h1 className="text-center my-4">Web Development Roadmap</h1>
      <div>
        <h1>💡 Why Learn Web Development?</h1>
        <p>
          Web development is essential in today’s digital world. Every business and service needs a strong online presence, and web developers are responsible for building those sites and applications.
        </p>
        <ul>
          <li><strong>High Demand for Web Developers:</strong> The job market for web developers is constantly growing as more businesses go online.</li>
          <li><strong>Creative and Problem-Solving Work:</strong> Web development involves creative thinking and problem-solving to create intuitive, interactive websites and applications.</li>
          <li><strong>Lucrative Career Opportunities:</strong> As a web developer, you can work for top tech companies, start-ups, or even freelance.</li>
        </ul>

        <h2>🏢 Top Companies Hiring Web Developers</h2>
        <ul>
          <li><strong>Google:</strong> Web developers at Google work on cutting-edge projects across various platforms.</li>
          <li><strong>Facebook (Meta):</strong> Work on Facebook’s front-end, back-end, and mobile applications.</li>
          <li><strong>Amazon:</strong> Amazon hires web developers to improve their customer-facing websites and internal tools.</li>
          <li><strong>Netflix:</strong> Web developers build the interfaces and functionality that power Netflix’s user experience.</li>
        </ul>
      </div>

      <Row>
        {weeks.map((week, index) => (
          <Col md={4} key={index}>
            <Card className="my-2">
              <Card.Body>
                <Card.Title>{week.title}</Card.Title>
                <Card.Text>{week.focus}</Card.Text>
                <Button variant="primary" onClick={() => handleShow(week)}>
                  Learn More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{selectedWeek?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h5>Focus:</h5>
                    <p>{selectedWeek?.focus}</p>
          <h5>Video Tutorial:</h5>
          <a href={selectedWeek?.video} target="_blank" rel="noopener noreferrer">
            Watch the video
          </a>
          <h5>Learning Resource:</h5>
          <a href={selectedWeek?.resource} target="_blank" rel="noopener noreferrer">
            Visit the resource
          </a>
          <h5>Assignment:</h5>
          <p>{selectedWeek?.assignment}</p>
          <h5>Dataset:</h5>
          <a href={selectedWeek?.dataset} target="_blank" rel="noopener noreferrer">
            Explore the dataset
          </a>
          <h5>Project Idea:</h5>
          <p>{selectedWeek?.project}</p>
          <h5>Project Resource:</h5>
          <a href={selectedWeek?.projectResource} target="_blank" rel="noopener noreferrer">
            Access the project guide
          </a>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default WebDevelopmentRoadmap;

