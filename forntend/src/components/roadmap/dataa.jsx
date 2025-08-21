import React, { useState } from 'react';
import { Card, Modal, Button, Container, Row, Col } from 'react-bootstrap';

const DataAnalyticsRoadmap = () => {
  const [show, setShow] = useState(false);
  const [selectedWeek, setSelectedWeek] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (week) => {
    setSelectedWeek(week);
    setShow(true);
  };

  const weeks = [
    {
      title: "Introduction to Data Analytics & Excel Basics",
      focus: "Learn the basics of data analytics and Excel, including data entry, formatting, and basic functions.",
      video: "https://www.youtube.com/watch?v=kdg0ozzZ2V0",
      resource: "https://support.microsoft.com/en-us/excel",
      assignment: "Practice creating basic Excel spreadsheets, using SUM, AVERAGE, and IF functions.",
      dataset: "https://www.kaggle.com/datasets/jeffd23/world-university-rankings",
      project: "Create a basic dashboard using Excel to analyze university rankings.",
      projectResource: "https://www.excel-easy.com/"
    },
    {
      title: "Advanced Excel Techniques",
      focus: "Learn advanced Excel techniques like pivot tables, VLOOKUP, data validation, and conditional formatting.",
      video: "https://www.youtube.com/watch?v=RWW7t9_MXvA",
      resource: "https://www.excel-easy.com/",
      assignment: "Analyze sales data and create pivot tables to summarize the data.",
      dataset: "https://www.kaggle.com/datasets/justinas/sales-data",
      project: "Create a report that uses pivot tables to analyze monthly sales performance.",
      projectResource: "https://www.excel-easy.com/"
    },
    {
      title: "Introduction to SQL and Database Basics",
      focus: "Learn the basics of SQL, including SELECT queries, filtering, and sorting data.",
      video: "https://www.youtube.com/watch?v=HXV3zeQKqGY",
      resource: "https://www.w3schools.com/sql/",
      assignment: "Write basic SQL queries to retrieve data from a sample database.",
      dataset: "https://www.kaggle.com/datasets/ahmedbesbes/amazon-movies-and-tv-shows",
      project: "Build a small movie database and query it using SQL.",
      projectResource: "https://www.w3schools.com/sql/sql_intro.asp"
    },
    {
      title: "Data Cleaning and Preprocessing",
      focus: "Learn how to clean and preprocess raw data for analysis, including handling missing values and outliers.",
      video: "https://www.youtube.com/watch?v=Pb1Z37le9h4",
      resource: "https://pandas.pydata.org/pandas-docs/stable/getting_started/index.html",
      assignment: "Clean a raw dataset by handling missing data and outliers.",
      dataset: "https://www.kaggle.com/datasets/sbhatti/automobile-dataset",
      project: "Create a cleaned dataset from raw sales data.",
      projectResource: "https://realpython.com/pandas-python-explore-dataset/"
    },
    {
      title: "Data Visualization with Excel & Power BI",
      focus: "Learn data visualization techniques using Excel and Power BI to represent data effectively.",
      video: "https://www.youtube.com/watch?v=njZ9tv6A0wM",
      resource: "https://powerbi.microsoft.com/en-us/learning/",
      assignment: "Create a Power BI dashboard based on a provided dataset.",
      dataset: "https://www.kaggle.com/datasets/rtatman/american-airlines-flight-delays",
      project: "Build a flight delay analysis dashboard in Power BI.",
      projectResource: "https://www.powerbi.com/learn/"
    },
    {
      title: "Advanced SQL Queries and Joins",
      focus: "Learn how to perform complex SQL queries, including joins, subqueries, and aggregations.",
      video: "https://www.youtube.com/watch?v=6g2d8g3rtms",
      resource: "https://www.w3schools.com/sql/sql_join.asp",
      assignment: "Write SQL queries that join multiple tables and filter results based on complex conditions.",
      dataset: "https://www.kaggle.com/datasets/sootersaalu/amazon-top-50-bestsellers",
      project: "Build a SQL-based query system to analyze Amazon bestsellers.",
      projectResource: "https://www.w3schools.com/sql/sql_join.asp"
    },
    {
      title: "Exploratory Data Analysis (EDA)",
      focus: "Learn the process of EDA, including statistical summaries, distributions, and correlations.",
      video: "https://www.youtube.com/watch?v=1g8t0v1fA-I",
      resource: "https://pandas.pydata.org/pandas-docs/stable/reference/frame.html",
      assignment: "Perform an EDA on a dataset to summarize its main characteristics.",
      dataset: "https://www.kaggle.com/datasets/dgomonov/new-york-city-airbnb-open-data",
      project: "Analyze the Airbnb dataset and generate insights.",
      projectResource: "https://www.kaggle.com/datasets/dgomonov/new-york-city-airbnb-open-data"
    },
    {
      title: "Introduction to Machine Learning Algorithms",
      focus: "Learn basic machine learning algorithms and their application in data analytics.",
      video: "https://www.youtube.com/watch?v=ukzFI9rgwfU",
      resource: "https://scikit-learn.org/stable/supervised_learning.html",
      assignment: "Implement a basic machine learning model for classification.",
      dataset: "https://www.kaggle.com/datasets/uciml/mushroom-classification",
      project: "Build a classifier to predict mushroom types.",
      projectResource: "https://scikit-learn.org/stable/tutorial/basic/tutorial.html"
    },
    {
      title: "Time Series Analysis",
      focus: "Learn how to analyze time series data using Excel and SQL.",
      video: "https://www.youtube.com/watch?v=9dR9yDxj_mA",
      resource: "https://www.analyticsvidhya.com/blog/2020/02/time-series-forecasting-methods-in-machine-learning/",
      assignment: "Forecast future values from historical data using SQL and Excel.",
      dataset: "https://www.kaggle.com/datasets/robikscube/hourly-weather-data",
      project: "Build a time series forecast of weather conditions.",
      projectResource: "https://www.analyticsvidhya.com/blog/2020/02/time-series-forecasting-methods-in-machine-learning/"
    },
    {
      title: "Data Analytics Dashboard in Excel",
      focus: "Learn to create dashboards in Excel that summarize key performance indicators.",
      video: "https://www.youtube.com/watch?v=iw2pNzAajAA",
      resource: "https://exceljet.net/excel-dashboard",
      assignment: "Create a sales performance dashboard in Excel.",
      dataset: "https://www.kaggle.com/datasets/ryanxcharles/sales-dashboard-dataset",
      project: "Build a dashboard to track business performance metrics.",
      projectResource: "https://exceljet.net/excel-dashboard"
    },
    {
      title: "Capstone Project: Data Analytics for Business Insights",
      focus: "Apply everything you've learned to build a data analytics project that provides business insights.",
      video: "https://www.youtube.com/watch?v=2gV6XYjA59k",
      resource: "https://www.kaggle.com/",
      assignment: "Build a complete data analysis project using SQL and Excel.",
      dataset: "https://www.kaggle.com/datasets/harvard/coffee-consumption",
      project: "Create a business insights report based on data analytics.",
      projectResource: "https://www.kaggle.com/"
    }
  ];

  return (
    <Container>
      <h1 className="text-center my-4">Data Analytics Roadmap (Including Excel & SQL)</h1>
<div>
      <h1>💡 Why Learn Data Analytics?</h1>
      <p>
        Data Analytics is at the heart of decision-making in nearly every industry. With the increasing reliance on data to drive business strategy, product development, and customer engagement, data analysts are critical for organizations to interpret raw data and turn it into actionable insights.
      </p>
      <ul>
        <li><strong>High Demand Across Industries:</strong> Every sector, from healthcare to finance, is in need of skilled data analysts to make data-driven decisions.</li>
        <li><strong>Lucrative Salaries & Job Stability:</strong> Data analysts enjoy competitive salaries and job stability due to the increasing demand for data-driven insights.</li>
        <li><strong>Opportunity to Solve Real-World Problems:</strong> You’ll work on impactful problems, from improving healthcare systems to optimizing supply chains and customer experience.</li>
        <li><strong>Endless Opportunities for Growth:</strong> With the rise of AI, machine learning, and automation, the data analytics field offers continuous learning and growth prospects.</li>
      </ul>

      <h2>🏢 Top Companies Hiring Data Analysts</h2>
      <ul>
        <li><strong>Google:</strong> Analytics roles in a global leader of technology and data-driven products.</li>
        <li><strong>Microsoft:</strong> Working on projects that enhance products and services with business intelligence.</li>
        <li><strong>Amazon:</strong> Data analytics plays a major role in refining logistics, marketing, and customer experience.</li>
        <li><strong>IBM:</strong> Focuses on data analytics, AI, and machine learning to innovate business solutions.</li>
        <li><strong>Meta (Facebook):</strong> Advanced data-driven decisions around user behavior and content strategies.</li>
        <li><strong>Tesla:</strong> A key player in automotive data, from vehicle telemetry to energy consumption.</li>
        <li><strong>Uber:</strong> Uses data to optimize ridesharing logistics, driver incentives, and pricing models.</li>
        <li><strong>Netflix:</strong> Data analysts at Netflix drive personalized recommendations, content optimization, and business strategies.</li>
        <li><strong>Spotify:</strong> Uses data analytics for music recommendation systems and improving user experience.</li>
        <li><strong>Airbnb:</strong> Data-driven decisions on pricing strategies, market expansion, and customer engagement.</li>
      </ul>

      <h2>🔍 Find Data Analyst Jobs On</h2>
      <ul>
        <li><a href="https://www.linkedin.com/jobs/" target="_blank" rel="noopener noreferrer">LinkedIn AI Engineer Jobs</a></li>
        <li><a href="https://www.indeed.com/q-Data-Analyst-jobs.html" target="_blank" rel="noopener noreferrer">Indeed Data Analyst Jobs</a></li>
        <li><a href="https://www.glassdoor.com/Job/data-analyst-jobs-SRCH_KO0,13.htm" target="_blank" rel="noopener noreferrer">Glassdoor Data Analyst Jobs</a></li>
        <li><a href="https://www.amazon.jobs/en/" target="_blank" rel="noopener noreferrer">Amazon Data Analyst Jobs</a></li>
        <li><a href="https://careers.google.com/jobs/results/" target="_blank" rel="noopener noreferrer">Google Careers - Data Analyst Jobs</a></li>
        <li><a href="https://www.kaggle.com/jobs" target="_blank" rel="noopener noreferrer">Kaggle Jobs</a></li>
        <li><a href="https://angel.co/jobs" target="_blank" rel="noopener noreferrer">AngelList Data Analyst Jobs</a></li>
      </ul>

      <h2>🔑 Skills to Build for Data Analytics</h2>
      <ul>
        <li><strong>Excel (Advanced):</strong> Pivot Tables, VLOOKUP, Advanced Functions (IF, INDEX-MATCH), Power Query, Data Visualization.</li>
        <li><strong>SQL (Advanced):</strong> JOINs, Subqueries, Aggregations, Window Functions, Data Modeling, and Database Design.</li>
        <li><strong>Data Visualization Tools:</strong> Power BI, Tableau, Excel Dashboards, and advanced graphing techniques.</li>
        <li><strong>Data Preprocessing & Cleaning:</strong> Handling missing values, outliers, and data normalization/standardization.</li>
        <li><strong>Statistical Analysis & EDA:</strong> Understanding statistical tests, distributions, hypothesis testing, and exploratory data analysis (EDA).</li>
        <li><strong>Python (Data Analysis Libraries):</strong> Pandas, NumPy, Matplotlib, Seaborn for data manipulation, statistical analysis, and visualization.</li>
        <li><strong>Machine Learning (Optional):</strong> Basic knowledge of machine learning algorithms for predictive analytics (regression, classification, clustering).</li>
      </ul>
    </div>
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

export default DataAnalyticsRoadmap;
