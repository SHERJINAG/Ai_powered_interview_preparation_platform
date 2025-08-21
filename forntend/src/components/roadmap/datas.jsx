import React, { useState } from 'react';
import { Card, Modal, Button, Container, Row, Col } from 'react-bootstrap';

const DataScienceRoadmap = () => {
  const [show, setShow] = useState(false);
  const [selectedWeek, setSelectedWeek] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (week) => {
    setSelectedWeek(week);
    setShow(true);
  };

  const weeks = [
    {
      title: "Introduction to Data Science",
      focus: "Understand what Data Science is, its applications, and its role in the tech industry.",
      video: "https://www.youtube.com/watch?v=xx6uhD7a4q4",
      resource: "https://www.coursera.org/articles/what-is-data-science",
      assignment: "Write a summary about Data Science and its importance in today’s world.",
      dataset: "https://www.kaggle.com/datasets/timoboz/auto-sales-forecasting",
      project: "Create a report explaining Data Science with visuals.",
      projectResource: "https://www.analyticsvidhya.com/blog/2020/10/a-complete-guide-to-learn-data-science-in-2021/"
    },
    {
      title: "Python for Data Science",
      focus: "Learn Python for Data Science, covering basics like data types, loops, functions, and libraries.",
      video: "https://www.youtube.com/watch?v=rfscVS0vtbw",
      resource: "https://realpython.com/tutorials/data-science/",
      assignment: "Write a Python script that loads a dataset and performs basic data exploration.",
      dataset: "https://www.kaggle.com/datasets/hugomathien/soccer",
      project: "Write a Python program to clean and visualize a dataset.",
      projectResource: "https://www.datacamp.com/courses/intro-to-python-for-data-science"
    },
    {
      title: "Data Cleaning & Preprocessing",
      focus: "Learn techniques for cleaning and preprocessing raw data, handling missing values, and transforming data.",
      video: "https://www.youtube.com/watch?v=7YnpKbF1a3E",
      resource: "https://www.kaggle.com/learn/data-cleaning",
      assignment: "Clean a raw dataset by handling missing data and outliers.",
      dataset: "https://www.kaggle.com/datasets/rohanrao/air-quality-data-in-india",
      project: "Preprocess and clean the 'Air Quality' dataset.",
      projectResource: "https://www.freecodecamp.org/news/data-cleaning-with-python/"
    },
    {
      title: "Data Visualization with Python",
      focus: "Learn how to visualize data using libraries like Matplotlib and Seaborn.",
      video: "https://www.youtube.com/watch?v=0P0WmSTtBbA",
      resource: "https://matplotlib.org/stable/tutorials/introductory/pyplot.html",
      assignment: "Create several visualizations for a given dataset.",
      dataset: "https://www.kaggle.com/datasets/uciml/mushroom-classification",
      project: "Create a data visualization project with plots and graphs.",
      projectResource: "https://www.datacamp.com/courses/intro-to-data-visualization-with-python"
    },
    {
      title: "Introduction to Machine Learning",
      focus: "Understand the basic concepts of Machine Learning, including supervised and unsupervised learning.",
      video: "https://www.youtube.com/watch?v=Cr6VqTRO1v0",
      resource: "https://www.coursera.org/learn/machine-learning",
      assignment: "Build a simple linear regression model to predict house prices.",
      dataset: "https://www.kaggle.com/datasets/housepriceprediction",
      project: "Build a regression model for predicting prices based on multiple variables.",
      projectResource: "https://scikit-learn.org/stable/supervised_learning.html"
    },
    {
      title: "Deep Learning Basics",
      focus: "Learn about neural networks, deep learning, and frameworks like TensorFlow and PyTorch.",
      video: "https://www.youtube.com/watch?v=aircAruvnKk",
      resource: "https://www.tensorflow.org/tutorials",
      assignment: "Build a simple neural network to classify images.",
      dataset: "https://www.kaggle.com/datasets/stanfordsentimenttreebank/stanford-sentiment-treebank",
      project: "Build a deep learning model to classify sentiment from text.",
      projectResource: "https://www.udacity.com/course/intro-to-deep-learning-with-pytorch--ud188"
    },
    {
      title: "Natural Language Processing (NLP)",
      focus: "Learn NLP techniques like tokenization, stemming, lemmatization, and sentiment analysis.",
      video: "https://www.youtube.com/watch?v=8k3l36JKZT4",
      resource: "https://realpython.com/natural-language-processing-spacy-python/",
      assignment: "Perform sentiment analysis on a text dataset.",
      dataset: "https://www.kaggle.com/datasets/rtatman/sentiment-analysis",
      project: "Build a sentiment analysis model using a text dataset.",
      projectResource: "https://www.datacamp.com/courses/natural-language-processing-fundamentals-in-python"
    },
    {
      title: "Model Evaluation and Tuning",
      focus: "Learn about model evaluation techniques such as cross-validation, accuracy, and precision.",
      video: "https://www.youtube.com/watch?v=85dtiMz9Gg4",
      resource: "https://scikit-learn.org/stable/modules/cross_validation.html",
      assignment: "Tune your model for optimal performance and evaluate its effectiveness.",
      dataset: "https://www.kaggle.com/datasets/uciml/pima-indians-diabetes-database",
      project: "Build and evaluate a machine learning model for diabetes prediction.",
      projectResource: "https://towardsdatascience.com/step-by-step-guide-to-tuning-and-evaluating-your-models-df7c3b88c1a5"
    },
    {
      title: "Capstone Project: Predictive Analytics",
      focus: "Work on a real-world predictive analytics project applying your learned skills.",
      video: "https://www.youtube.com/watch?v=Kd2jAnco0pQ",
      resource: "https://www.kaggle.com/learn/predictive-modeling",
      assignment: "Create a full machine learning pipeline from data collection to prediction.",
      dataset: "https://www.kaggle.com/datasets/ryanxcharles/sales-dashboard-dataset",
      project: "Create a model to predict sales based on historical data.",
      projectResource: "https://www.udemy.com/course/python-for-data-science-and-machine-learning-bootcamp/"
    }
  ];

  return (
    <Container>
      <h1 className="text-center my-4">Data Science Roadmap</h1>
      <div>
        <h1>💡 Why Learn Data Science?</h1>
        <p>
          Data Science is one of the most in-demand fields today. It involves extracting insights and knowledge from vast amounts of structured and unstructured data, making data-driven decisions, and applying machine learning techniques to predict outcomes.
        </p>
        <ul>
          <li><strong>High Demand:</strong> Companies are increasingly relying on data for business decisions, leading to a rise in demand for data scientists.</li>
          <li><strong>Lucrative Salaries:</strong> Data scientists are among the highest-paid professionals in the tech industry.</li>
          <li><strong>Impactful Work:</strong> Data scientists solve real-world problems and impact industries like healthcare, finance, marketing, and technology.</li>
        </ul>

        <h2>🏢 Top Companies Hiring Data Scientists</h2>
        <ul>
          <li><strong>Google:</strong> Data scientists work on cutting-edge machine learning algorithms and AI systems.</li>
          <li><strong>Amazon:</strong> Work on predictive analytics, recommendation engines, and big data applications.</li>
          <li><strong>Facebook (Meta):</strong> Data scientists analyze user data and help optimize user experience.</li>
          <li><strong>Netflix:</strong> Data scientists work on content recommendation algorithms, viewing patterns, and customer segmentation.</li>
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

export default DataScienceRoadmap;
