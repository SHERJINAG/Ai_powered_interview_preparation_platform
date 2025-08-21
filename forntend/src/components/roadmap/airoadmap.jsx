import React, { useState } from 'react';
import { Card, Modal, Button, Container, Row, Col } from 'react-bootstrap';

const AIEngineerRoadmap = () => {
  const [show, setShow] = useState(false);
  const [selectedWeek, setSelectedWeek] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (week) => {
    setSelectedWeek(week);
    setShow(true);
  };

  const weeks = [
  {
    title: "Introduction to AI & Python",
    focus: "Learn Python basics and understand AI fundamentals.",
    video: "https://www.youtube.com/watch?v=kLZuut1fYzQ",
    resource: "https://www.w3schools.com/python/",
    assignment: "Practice basic Python exercises.",
    dataset: "https://www.kaggle.com/datasets/uciml/iris",
    project: "Create a simple calculator in Python.",
    projectResource: "https://realpython.com/python-basics/"
  },
  {
    title: "Python Libraries for AI",
    focus: "Learn NumPy, Pandas, and Matplotlib.",
    video: "https://www.youtube.com/watch?v=r-uOLxNrNk8",
    resource: "https://numpy.org/learn/",
    assignment: "Analyze a small dataset using Pandas.",
    dataset: "https://www.kaggle.com/datasets/spscientist/students-performance-in-exams",
    project: "Visualize student performance data.",
    projectResource: "https://realpython.com/pandas-python-explore-dataset/"
  },
  {
    title: "Data Analysis & Visualization with Python",
    focus: "Learn data analysis techniques and how to visualize data effectively.",
    video: "https://www.youtube.com/watch?v=5xNNG2iYqZM",
    resource: "https://matplotlib.org/stable/users/installing.html",
    assignment: "Perform data analysis and create visualizations using Matplotlib.",
    dataset: "https://www.kaggle.com/datasets/uciml/mushroom-classification",
    project: "Create data visualizations for a given dataset.",
    projectResource: "https://realpython.com/python-data-visualization/"
  },
  {
    title: "Introduction to Machine Learning Algorithms",
    focus: "Understand machine learning algorithms and their applications.",
    video: "https://www.youtube.com/watch?v=ukzFI9rgwfU",
    resource: "https://scikit-learn.org/stable/supervised_learning.html",
    assignment: "Build a classification model using a dataset.",
    dataset: "https://www.kaggle.com/datasets/uciml/mushroom-classification",
    project: "Build a model to classify mushrooms as edible or poisonous.",
    projectResource: "https://scikit-learn.org/stable/tutorial/basic/tutorial.html"
  },
  {
    title: "Deep Learning Basics",
    focus: "Learn the basics of neural networks and deep learning.",
    video: "https://www.youtube.com/watch?v=aircAruvnKk",
    resource: "https://www.deeplearning.ai/",
    assignment: "Build a neural network to solve a classification problem.",
    dataset: "https://www.kaggle.com/datasets/jerryzhu/earthquakes-dataset",
    project: "Build a simple neural network using TensorFlow.",
    projectResource: "https://www.tensorflow.org/tutorials"
  },
  {
    title: "Natural Language Processing (NLP)",
    focus: "Learn the fundamentals of NLP and its applications in AI.",
    video: "https://www.youtube.com/watch?v=FLZvOKsR1Yw",
    resource: "https://realpython.com/natural-language-processing-spacy-python/",
    assignment: "Build a basic NLP model to analyze sentiment.",
    dataset: "https://www.kaggle.com/datasets/julian3833/sentiment140",
    project: "Create a text sentiment analyzer using Python.",
    projectResource: "https://realpython.com/sentiment-analysis-python/"
  },
  {
    title: "Computer Vision with OpenCV",
    focus: "Learn computer vision techniques and apply them with OpenCV.",
    video: "https://www.youtube.com/watch?v=Ro6Dq5sM4Qk",
    resource: "https://opencv.org/",
    assignment: "Create a simple object detection program using OpenCV.",
    dataset: "https://www.kaggle.com/datasets/atulanandjha/covid-19-chest-x-ray-dataset",
    project: "Build an object detection program with OpenCV.",
    projectResource: "https://realpython.com/face-recognition-with-python/"
  },
  {
    title: "Reinforcement Learning Basics",
    focus: "Learn the foundations of reinforcement learning.",
    video: "https://www.youtube.com/watch?v=2pWv7GOvuf0",
    resource: "https://www.coursera.org/learn/reinforcement-learning",
    assignment: "Create a basic RL agent to solve a simple problem.",
    dataset: "https://www.kaggle.com/datasets/andrewmvd/competitive-data-science-predict-future-sales",
    project: "Create an RL agent to play a simple game.",
    projectResource: "https://www.freecodecamp.org/news/an-intuitive-guide-to-reinforcement-learning-9f0b5f93d56a/"
  },
  {
    title: "AI Ethics and Bias in Machine Learning",
    focus: "Understand the ethical implications and biases in AI systems.",
    video: "https://www.youtube.com/watch?v=J6L1ZyBjy7k",
    resource: "https://www.turing.com/kb/ethical-ai-and-bias",
    assignment: "Write an essay on AI ethics and biases in ML systems.",
    dataset: "https://www.kaggle.com/datasets/julian3833/sentiment140",
    project: "Create a report on bias in a machine learning model.",
    projectResource: "https://www.researchgate.net/publication/332266938_The_Ethical_Implications_of_Machine_Learning"
  },
  {
    title: "Advanced Machine Learning Techniques",
    focus: "Learn advanced ML algorithms like ensemble methods and SVM.",
    video: "https://www.youtube.com/watch?v=J4W6OBCXj3w",
    resource: "https://scikit-learn.org/stable/modules/ensemble.html",
    assignment: "Build an ensemble model using decision trees.",
    dataset: "https://www.kaggle.com/datasets/uciml/mushroom-classification",
    project: "Implement a Random Forest classifier to predict mushroom types.",
    projectResource: "https://scikit-learn.org/stable/modules/generated/sklearn.ensemble.RandomForestClassifier.html"
  },
  {
    title: "Deployment of AI Models",
    focus: "Learn how to deploy machine learning models to production.",
    video: "https://www.youtube.com/watch?v=smiyv3bP6N0",
    resource: "https://towardsdatascience.com/deploying-your-first-machine-learning-model-in-production-ea2de12c2ee6",
    assignment: "Deploy a simple ML model on a web server.",
    dataset: "https://www.kaggle.com/datasets/andrewmvd/competitive-data-science-predict-future-sales",
    project: "Create an AI-powered web app using Flask or FastAPI.",
    projectResource: "https://www.fullstackpython.com/"
  },
  {
    title: "AI for Big Data",
    focus: "Learn to handle big data with AI tools and techniques.",
    video: "https://www.youtube.com/watch?v=6f0lXjrq8kg",
    resource: "https://www.databricks.com/solutions/machine-learning",
    assignment: "Process and analyze a large dataset using Spark.",
    dataset: "https://www.kaggle.com/datasets/uciml/mushroom-classification",
    project: "Implement machine learning on big data with Apache Spark.",
    projectResource: "https://spark.apache.org/docs/latest/api/python/"
  },
  {
    title: "Final Project: AI-Powered Chatbot",
    focus: "Create a real-world AI project like a chatbot using NLP and machine learning.",
    video: "https://www.youtube.com/watch?v=R7Xtr3M1FsM",
    resource: "https://realpython.com/build-a-chatbot-python/",
    assignment: "Design an AI-powered chatbot for a specific domain.",
    dataset: "https://www.kaggle.com/datasets/marklvl/sentiment-labelled-sentences",
    project: "Build an intelligent chatbot using machine learning.",
    projectResource: "https://realpython.com/python-chatbot/"
  }
];

  return (
    <Container>
      <h1 className="text-center my-4">AI Engineer 3-Month Roadmap (Free + Practical)</h1>
       <section style={{ marginBottom: '2rem' }}>
        <h2>💡 Why Learn AI Engineering?</h2>
        <p>
          AI Engineers are at the forefront of innovation—developing models and systems that enable machines to
          simulate human intelligence. From self-driving cars and voice assistants to personalized recommendations
          and medical diagnosis tools, AI is transforming industries.
        </p>
        <ul>
          <li>High Demand in Every Industry</li>
          <li>Lucrative Salaries & Job Stability</li>
          <li>Solving Real-World Problems</li>
          <li>Opportunities in Research & Innovation</li>
        </ul>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>🏢 Top Companies Hiring AI Engineers</h2>
        <ul>
          <li>Google DeepMind</li>
          <li>Microsoft</li>
          <li>Meta (Facebook AI Research)</li>
          <li>Amazon (Alexa AI)</li>
          <li>Apple</li>
          <li>OpenAI</li>
          <li>NVIDIA</li>
          <li>IBM Research</li>
          <li>Tesla</li>
          <li>Baidu, Tencent, Alibaba</li>
        </ul>
      </section>

      <section style={{ marginBottom: '2rem' }}>
        <h2>🔍 Find AI Engineer Jobs On</h2>
        <ul>
          <li><a href="https://www.linkedin.com/jobs/ai-engineer-jobs/" target="_blank">LinkedIn AI Engineer Jobs</a></li>
          <li><a href="https://www.indeed.com/q-AI-Engineer-jobs.html" target="_blank">Indeed AI Engineer Jobs</a></li>
          <li><a href="https://www.glassdoor.com/Job/ai-engineer-jobs-SRCH_KO0,12.htm" target="_blank">Glassdoor AI Engineer Jobs</a></li>
          <li><a href="https://hiring.amazon.com/" target="_blank">Amazon Careers</a></li>
          <li><a href="https://careers.google.com/jobs/results/?q=ai%20engineer" target="_blank">Google Careers</a></li>
        </ul>
      </section>
      <Row className="mb-4">
        {weeks.map((week, index) => (
          <Col md={6} lg={4} key={index} className="mb-4">
            <Card style={{ height: '100%' }}>
              <Card.Body>
                                <Card.Title>{week.title}</Card.Title>
                <Card.Text>
                  <strong>Focus:</strong> {week.focus}
                </Card.Text>
                <Button variant="primary" onClick={() => handleShow(week)}>
                  View Week Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {selectedWeek && (
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedWeek.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h5>💡 Focus:</h5>
            <p>{selectedWeek.focus}</p>
            <h5>📹 YouTube Video</h5>
            <a href={selectedWeek.video} target="_blank" rel="noopener noreferrer">
              Watch Video
            </a>
            <h5>📖 Resource</h5>
            <a href={selectedWeek.resource} target="_blank" rel="noopener noreferrer">
              {selectedWeek.resource}
            </a>
            <h5>📝 Assignment</h5>
            <p>{selectedWeek.assignment}</p>
            <h5>📊 Dataset</h5>
            <a href={selectedWeek.dataset} target="_blank" rel="noopener noreferrer">
              {selectedWeek.dataset}
            </a>
            <h5>💼 Project</h5>
            <p>{selectedWeek.project}</p>
            <h5>📚 Project Resource</h5>
            <a href={selectedWeek.projectResource} target="_blank" rel="noopener noreferrer">
              {selectedWeek.projectResource}
            </a>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
};

export default AIEngineerRoadmap;

