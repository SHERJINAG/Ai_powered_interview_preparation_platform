// quizData.js

const quizData = {
  "Programming Basics": [
    {
      question: "What is a variable in programming?",
      options: ["A storage location", "A data type", "A function", "A loop"],
      correctAnswer: "A storage location",
    },
    {
      question: "What is an array?",
      options: ["A single variable", "A type of loop", "A collection of data", "A data type"],
      correctAnswer: "A collection of data",
    },
    {
      question: "What is a loop in programming?",
      options: ["A conditional statement", "A repetition structure", "A type of array", "A data type"],
      correctAnswer: "A repetition structure",
    },
    {
      question: "Define a function in programming.",
      options: ["A named block of code", "A variable", "A loop", "A condition"],
      correctAnswer: "A named block of code",
    },
    {
      question: "What is recursion?",
      options: ["A loop", "A method calling itself", "A data type", "A conditional statement"],
      correctAnswer: "A method calling itself",
    },
  ],

  "Object-Oriented Programming": [
    {
      question: "What is a class in object-oriented programming?",
      options: ["A function", "A data type", "A blueprint for objects", "A variable"],
      correctAnswer: "A blueprint for objects",
    },
    {
      question: "What is inheritance in object-oriented programming?",
      options: ["The process of passing properties and methods from one class to another", "A way to create variables", "A way to call functions", "A way to initialize a program"],
      correctAnswer: "The process of passing properties and methods from one class to another",
    },
    {
      question: "What is polymorphism in object-oriented programming?",
      options: ["A method calling itself", "Multiple classes sharing the same name", "The ability of different objects to respond to the same method in different ways", "A collection of data"],
      correctAnswer: "The ability of different objects to respond to the same method in different ways",
    },
    {
      question: "What is encapsulation in object-oriented programming?",
      options: ["Hiding the internal state of an object", "A function returning values", "A type of variable", "A loop that repeats until a condition is met"],
      correctAnswer: "Hiding the internal state of an object",
    },
    {
      question: "What is abstraction in object-oriented programming?",
      options: ["Hiding unnecessary implementation details", "The process of creating variables", "A method that runs repeatedly", "A type of loop"],
      correctAnswer: "Hiding unnecessary implementation details",
    },
  ],

  "Web Development": [
    {
      question: "Which of the following is used for database management?",
      options: ["HTML", "CSS", "JavaScript", "SQL"],
      correctAnswer: "SQL",
    },
    {
      question: "What is the purpose of CSS in web development?",
      options: ["To structure content", "To add interactivity", "To style the webpage", "To handle server-side logic"],
      correctAnswer: "To style the webpage",
    },
    {
      question: "What is JavaScript used for in web development?",
      options: ["To structure the webpage", "To style the webpage", "To add interactivity", "To manage databases"],
      correctAnswer: "To add interactivity",
    },
    {
      question: "What is HTML used for?",
      options: ["To style the webpage", "To structure the content on a webpage", "To manage user interactions", "To handle backend logic"],
      correctAnswer: "To structure the content on a webpage",
    },
    {
      question: "What is the purpose of a web server?",
      options: ["To store static files", "To handle the logic of the web application", "To serve requests from the client", "To connect to a database"],
      correctAnswer: "To serve requests from the client",
    },
  ],
 "Artificial Intelligence": [
    {
      question: "What is the main goal of Artificial Intelligence?",
      options: ["Simulating human intelligence", "Building robots", "Improving hardware", "Speeding up computation"],
      correctAnswer: "Simulating human intelligence",
    },
    {
      question: "Which of the following is an example of supervised learning?",
      options: ["Clustering", "Classification", "Dimensionality reduction", "Reinforcement learning"],
      correctAnswer: "Classification",
    },
    {
      question: "What is the purpose of the activation function in a neural network?",
      options: ["To decide whether a neuron should be activated", "To normalize the data", "To initialize weights", "To compute the output"],
      correctAnswer: "To decide whether a neuron should be activated",
    },
    {
      question: "What is a decision tree in machine learning?",
      options: ["A linear regression model", "A data structure for sorting", "A model used for classification or regression", "A type of neural network"],
      correctAnswer: "A model used for classification or regression",
    },
    {
      question: "Which algorithm is commonly used for reinforcement learning?",
      options: ["K-means clustering", "Q-learning", "Support vector machine", "Linear regression"],
      correctAnswer: "Q-learning",
    },
  ],

  "Data Science": [
    {
      question: "What is the purpose of exploratory data analysis (EDA)?",
      options: ["To build predictive models", "To clean and preprocess data", "To understand patterns in the data", "To validate hypotheses"],
      correctAnswer: "To understand patterns in the data",
    },
    {
      question: "What does the term 'feature engineering' refer to?",
      options: ["Converting raw data into usable features", "Cleaning the dataset", "Building models", "Visualizing data"],
      correctAnswer: "Converting raw data into usable features",
    },
    {
      question: "What is overfitting in a machine learning model?",
      options: ["When a model performs well on training data but poorly on new data", "When a model performs well on testing data", "When a model is too simple", "When a model uses too many features"],
      correctAnswer: "When a model performs well on training data but poorly on new data",
    },
    {
      question: "Which Python library is commonly used for data manipulation and analysis?",
      options: ["NumPy", "TensorFlow", "Pandas", "Scikit-learn"],
      correctAnswer: "Pandas",
    },
    {
      question: "What is the purpose of cross-validation in machine learning?",
      options: ["To split data into training and test sets", "To improve model accuracy", "To check the generalizability of a model", "To normalize data"],
      correctAnswer: "To check the generalizability of a model",
    },
  ],

  "Chemistry": [
    {
      question: "What is the atomic number of carbon?",
      options: [12, 6, 8, 14],
      correctAnswer: "6",
    },
    {
      question: "What is the pH value of pure water?",
      options: [7, 0, 14, 10],
      correctAnswer: "7",
    },
    {
      question: "Which of the following is an alkali metal?",
      options: ["Sodium", "Chlorine", "Oxygen", "Helium"],
      correctAnswer: "Sodium",
    },
    {
      question: "What is the chemical formula of methane?",
      options: ["CH4", "CO2", "H2O", "C2H6"],
      correctAnswer: "CH4",
    },
    {
      question: "What is the name of the process in which a solid turns directly into a gas?",
      options: ["Sublimation", "Evaporation", "Condensation", "Deposition"],
      correctAnswer: "Sublimation",
    },
  ],

  "Physics": [
    {
      question: "What is Newton's second law of motion?",
      options: ["Force equals mass times acceleration", "Energy equals mass times the speed of light squared", "For every action, there is an equal and opposite reaction", "An object in motion will stay in motion unless acted upon"],
      correctAnswer: "Force equals mass times acceleration",
    },
    {
      question: "What is the unit of electrical resistance?",
      options: ["Volt", "Ampere", "Ohm", "Watt"],
      correctAnswer: "Ohm",
    },
    {
      question: "What is the speed of light in a vacuum?",
      options: ["3 x 10^8 m/s", "3 x 10^6 m/s", "1 x 10^8 m/s", "5 x 10^8 m/s"],
      correctAnswer: "3 x 10^8 m/s",
    },
    {
      question: "What is the force that opposes motion between two objects in contact?",
      options: ["Friction", "Gravity", "Magnetism", "Electromagnetic force"],
      correctAnswer: "Friction",
    },
    {
      question: "Which principle states that energy cannot be created or destroyed?",
      options: ["The Law of Conservation of Mass", "The Law of Conservation of Energy", "The Theory of Relativity", "Heisenberg's Uncertainty Principle"],
      correctAnswer: "The Law of Conservation of Energy",
    },
  ],

  "English": [
    {
      question: "Which of the following is a synonym for 'happy'?",
      options: ["Sad", "Angry", "Joyful", "Tired"],
      correctAnswer: "Joyful",
    },
    {
      question: "What is the plural form of 'child'?",
      options: ["Children", "Childs", "Childes", "Childrens"],
      correctAnswer: "Children",
    },
    {
      question: "Which sentence is grammatically correct?",
      options: ["She can sings well.", "She can sing well.", "She can singing well.", "She sing well."],
      correctAnswer: "She can sing well.",
    },
    {
      question: "What is an antonym of 'generous'?",
      options: ["Selfish", "Kind", "Charitable", "Helpful"],
      correctAnswer: "Selfish",
    },
    {
      question: "What is the past tense of 'go'?",
      options: ["Went", "Going", "Gone", "Goes"],
      correctAnswer: "Went",
    },
  ],

  "Database": [
    {
      question: "What is a primary key in a database?",
      options: ["A key used to unlock the database", "A unique identifier for records", "A foreign key reference", "A password for users"],
      correctAnswer: "A unique identifier for records",
    },
    {
      question: "Which SQL statement is used to retrieve data from a database?",
      options: ["SELECT", "INSERT", "DELETE", "UPDATE"],
      correctAnswer: "SELECT",
    },
    {
      question: "What is normalization in a database?",
      options: ["Reducing redundancy", "Encrypting data", "Creating indexes", "Storing large datasets"],
      correctAnswer: "Reducing redundancy",
    },
    {
      question: "What does 'ACID' stand for in database transactions?",
      options: ["Atomicity, Consistency, Isolation, Durability", "Application, Consistency, Integration, Design", "Aggregation, Collection, Insertion, Deletion", "Active, Committed, Integrated, Deleted"],
      correctAnswer: "Atomicity, Consistency, Isolation, Durability",
    },
    {
      question: "What is a foreign key in a database?",
      options: ["A unique identifier", "A key used to link tables", "A password for security", "An index for faster queries"],
      correctAnswer: "A key used to link tables",
    },
  ],

  "Operating System": [
    {
      question: "Which of the following is an example of an operating system?",
      options: ["Linux", "Google", "Python", "Intel"],
      correctAnswer: "Linux",
    },
    {
      question: "What is a process in an operating system?",
      options: ["A running program", "A part of memory", "A user input", "A system file"],
      correctAnswer: "A running program",
    },
    {
      question: "What does the 'kernel' do in an operating system?",
      options: ["Handles user input", "Manages hardware resources", "Provides network services", "Runs applications"],
      correctAnswer: "Manages hardware resources",
    },
    {
      question: "What is virtual memory in an operating system?",
      options: ["Memory stored on disk", "A temporary storage space", "An area of RAM", "A type of cache memory"],
      correctAnswer: "Memory stored on disk",
    },
    {
      question: "Which of the following is NOT an operating system?",
      options: ["Windows", "Linux", "Android", "Java"],
      correctAnswer: "Java",
    },
  ],

  "Networking": [
    {
      question: "What does 'IP' stand for in networking?",
      options: ["Internet Protocol", "Internal Process", "Instant Messaging Protocol", "Internet Package"],
      correctAnswer: "Internet Protocol",
    },
    {
      question: "Which device is used to connect multiple computers in a network?",
      options: ["Router", "Hard Drive", "Monitor", "Printer"],
      correctAnswer: "Router",
    },
    {
      question: "What is the main purpose of DNS in networking?",
      options: ["To translate domain names into IP addresses", "To encrypt network data", "To store files", "To speed up network traffic"],
      correctAnswer: "To translate domain names into IP addresses",
    },
    {
      question: "Which protocol is used to transfer web pages over the Internet?",
      options: ["HTTP", "FTP", "SMTP", "SNMP"],
      correctAnswer: "HTTP",
    },
    {
      question: "What is the full form of 'LAN'?",
      options: ["Local Area Network", "Long Area Network", "Large Area Network", "Local Access Node"],
      correctAnswer: "Local Area Network",
    },
  ],

  "IoT": [
    {
      question: "What does IoT stand for?",
      options: ["Internet of Things", "Interface of Technology", "Integration of Tools", "Input Output Technology"],
      correctAnswer: "Internet of Things",
    },
    {
      question: "Which of the following is an example of an IoT device?",
      options: ["Smartphone", "Smartwatch", "Smart thermostat", "All of the above"],
      correctAnswer: "All of the above",
    },
    {
      question: "What is the primary purpose of IoT?",
      options: ["To collect and share data", "To create web applications", "To manage networks", "To store data"],
      correctAnswer: "To collect and share data",
    },
    {
      question: "Which protocol is commonly used in IoT for communication?",
      options: ["HTTP", "MQTT", "FTP", "SMTP"],
      correctAnswer: "MQTT",
    },
    {
      question: "What is a smart home device?",
      options: ["A device that can be controlled remotely", "A device used for data storage", "A wireless router", "A personal computer"],
      correctAnswer: "A device that can be controlled remotely",
    },
  ],

  "Computer Vision": [
    {
      question: "What does computer vision allow computers to do?",
      options: ["Understand images and videos", "Calculate large datasets", "Create animations", "Store image files"],
      correctAnswer: "Understand images and videos",
    },
    {
      question: "Which of the following is a popular Python library for computer vision?",
      options: ["TensorFlow", "Pandas", "OpenCV", "Matplotlib"],
      correctAnswer: "OpenCV",
    },
    {
      question: "What is an object detection task in computer vision?",
      options: ["Classifying an image", "Identifying and locating objects in an image", "Filtering image noise", "Improving image resolution"],
      correctAnswer: "Identifying and locating objects in an image",
    },
    {
      question: "Which of the following is used for image classification?",
      options: ["Convolutional Neural Networks (CNN)", "Recurrent Neural Networks (RNN)", "Support Vector Machines", "Decision Trees"],
      correctAnswer: "Convolutional Neural Networks (CNN)",
    },
    {
      question: "What is the purpose of feature extraction in computer vision?",
      options: ["To select the most important parts of an image", "To increase image size", "To add color to an image", "To reduce the complexity of an image"],
      correctAnswer: "To select the most important parts of an image",
    },
  ],
};

export default quizData;
