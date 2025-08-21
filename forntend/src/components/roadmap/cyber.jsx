import React, { useState } from 'react';
import { Card, Modal, Button, Container, Row, Col } from 'react-bootstrap';

const CybersecurityRoadmap = () => {
  const [show, setShow] = useState(false);
  const [selectedWeek, setSelectedWeek] = useState(null);

  const handleClose = () => setShow(false);
  const handleShow = (week) => {
    setSelectedWeek(week);
    setShow(true);
  };

  const weeks = [
    {
      title: "Introduction to Cybersecurity & Basic Concepts",
      focus: "Understand basic concepts like networks, threats, vulnerabilities, risk management, and security principles.",
      video: "https://www.youtube.com/watch?v=GRcTT_S7eA8",
      resource: "https://www.cybrary.it/",
      assignment: "Write a report on different types of cybersecurity threats.",
      dataset: "https://www.kaggle.com/datasets",
      project: "Create a simple network security model.",
      projectResource: "https://www.cisecurity.org/white-papers/"
    },
    {
      title: "Network Security Basics",
      focus: "Learn about firewalls, VPNs, intrusion detection systems, and secure network design.",
      video: "https://www.youtube.com/watch?v=fK-k0J5lnVo",
      resource: "https://www.cloudflare.com/learning/ddos/",
      assignment: "Set up a basic firewall using pfSense.",
      dataset: "https://www.kaggle.com/datasets/cybersecuritystudents/network-data",
      project: "Create a secure network topology for a small business.",
      projectResource: "https://www.pfsense.org/"
    },
    {
      title: "Cryptography and Encryption",
      focus: "Learn about cryptographic techniques, hashing, public key infrastructure (PKI), and how encryption is used in securing data.",
      video: "https://www.youtube.com/watch?v=3QnD2c4XovI",
      resource: "https://www.crypto101.io/",
      assignment: "Encrypt and decrypt a file using AES.",
      dataset: "https://www.kaggle.com/datasets/julian3833/data-encryption",
      project: "Create a file encryption tool using Python.",
      projectResource: "https://pycryptodome.readthedocs.io/en/latest/"
    },
    {
      title: "Web Application Security",
      focus: "Learn about web vulnerabilities like SQL injection, XSS, and CSRF, and how to secure web applications.",
      video: "https://www.youtube.com/watch?v=ggLuGmeVNr4",
      resource: "https://www.owasp.org/index.php/Main_Page",
      assignment: "Perform a security audit on a sample web application.",
      dataset: "https://www.kaggle.com/datasets/jessicali9530/web-application-security",
      project: "Build a secure login system with input validation and encryption.",
      projectResource: "https://owasp.org/www-project-top-ten/"
    },
    {
      title: "Ethical Hacking and Penetration Testing",
      focus: "Learn the fundamentals of ethical hacking, penetration testing, and how to perform security assessments.",
      video: "https://www.youtube.com/watch?v=sB9QOt2HhtI",
      resource: "https://www.kali.org/",
      assignment: "Perform a basic penetration test using Kali Linux tools.",
      dataset: "https://www.kaggle.com/datasets/nethanel/penetration-testing",
      project: "Simulate a penetration testing scenario and create a report.",
      projectResource: "https://www.kali.org/"
    },
    {
      title: "Incident Response & Forensics",
      focus: "Learn how to handle security incidents and analyze breaches using forensics tools.",
      video: "https://www.youtube.com/watch?v=j7sVwPzB7F0",
      resource: "https://www.sans.org/cyber-security-courses/incident-response/",
      assignment: "Analyze a security incident and recommend remediation steps.",
      dataset: "https://www.kaggle.com/datasets/justinlmiller/network-forensics",
      project: "Build a forensic analysis toolkit and simulate an incident response.",
      projectResource: "https://www.sans.org/cyber-security-courses/incident-response/"
    },
    {
      title: "Cloud Security",
      focus: "Learn how to secure cloud environments, including AWS, Azure, and Google Cloud Platform.",
      video: "https://www.youtube.com/watch?v=mNV9b8wzZBs",
      resource: "https://aws.amazon.com/security/",
      assignment: "Set up a secure virtual private cloud (VPC) on AWS.",
      dataset: "https://www.kaggle.com/datasets/arnabchatterjee/secure-cloud-data",
      project: "Build a secure cloud infrastructure for a business using AWS.",
      projectResource: "https://aws.amazon.com/security/"
    },
    {
      title: "Cybersecurity Governance & Compliance",
      focus: "Understand cybersecurity laws, policies, and frameworks like GDPR, HIPAA, and NIST.",
      video: "https://www.youtube.com/watch?v=jb4M0Meq3Zc",
      resource: "https://www.iso.org/isoiec-27001-information-security.html",
      assignment: "Write a compliance report based on a chosen security framework.",
      dataset: "https://www.kaggle.com/datasets/johnnygrande/cybersecurity-compliance-data",
      project: "Create a cybersecurity compliance plan for a small business.",
      projectResource: "https://www.iso.org/isoiec-27001-information-security.html"
    },
    {
      title: "Security Operations & Monitoring",
      focus: "Learn how to monitor security events, use SIEM tools, and respond to security incidents in real-time.",
      video: "https://www.youtube.com/watch?v=d1BXi3c6y0A",
      resource: "https://www.splunk.com/en_us/resources.html",
      assignment: "Configure a Security Information and Event Management (SIEM) system.",
      dataset: "https://www.kaggle.com/datasets/harrywang/security-logs",
      project: "Build a security monitoring dashboard using Splunk.",
      projectResource: "https://www.splunk.com/en_us/resources.html"
    },
    {
      title: "Capstone Project: Complete Security Assessment",
      focus: "Apply everything you've learned to perform a comprehensive security assessment of an organization.",
      video: "https://www.youtube.com/watch?v=V1gF37s5DJw",
      resource: "https://www.cybrary.it/",
      assignment: "Complete a security audit for an organization's network and systems.",
      dataset: "https://www.kaggle.com/datasets",
      project: "Develop a full security report with vulnerabilities, risks, and recommendations.",
      projectResource: "https://www.cybrary.it/"
    }
  ];

  return (
    <Container>
      <h1 className="text-center my-4">Cybersecurity Roadmap</h1>
  <div>
  <h1>💡 Why Learn Cyber Security?</h1>
  <p>
    Cybersecurity is essential to protect information, systems, and networks from digital threats. With the rise of cyber-attacks targeting businesses, governments, and individuals, the need for skilled cybersecurity professionals has never been more critical.
  </p>
  <ul>
    <li><strong>High Demand Across Industries:</strong> From finance to healthcare, every industry requires cybersecurity experts to safeguard sensitive information and maintain trust.</li>
    <li><strong>Lucrative Salaries & Job Stability:</strong> Due to the growing frequency of cyber-attacks, cybersecurity roles offer excellent pay and job security.</li>
    <li><strong>Impactful Work:</strong> Cybersecurity professionals protect businesses and individuals from cybercriminals, contributing to safer digital experiences.</li>
    <li><strong>Endless Opportunities for Growth:</strong> As new technologies like AI, IoT, and cloud computing evolve, the field of cybersecurity offers continuous learning and new challenges.</li>
  </ul>

  <h2>🏢 Top Companies Hiring Cybersecurity Professionals</h2>
  <ul>
    <li><strong>Google:</strong> Cybersecurity teams focus on securing products and services at the forefront of technology.</li>
    <li><strong>Microsoft:</strong> Protecting cloud infrastructure and ensuring safe digital experiences for users worldwide.</li>
    <li><strong>Amazon:</strong> Cybersecurity specialists protect the vast amount of data across the AWS cloud platform and other services.</li>
    <li><strong>IBM:</strong> Securing enterprise solutions with a focus on cybersecurity, threat intelligence, and incident response.</li>
    <li><strong>Meta (Facebook):</strong> Ensuring platform safety by safeguarding user data and preventing malicious attacks.</li>
    <li><strong>Tesla:</strong> Securing digital systems that control vehicles, energy, and manufacturing processes.</li>
    <li><strong>Uber:</strong> Ensuring the safety of user data and transactions in their global ridesharing platform.</li>
    <li><strong>Netflix:</strong> Protecting user data and streaming services from potential cyber threats.</li>
    <li><strong>Spotify:</strong> Securing user accounts and ensuring a safe music streaming experience.</li>
    <li><strong>Airbnb:</strong> Protecting user data and financial transactions across the platform.</li>
  </ul>

  <h2>🔍 Find Cybersecurity Jobs On</h2>
  <ul>
    <li><a href="https://www.linkedin.com/jobs/" target="_blank" rel="noopener noreferrer">LinkedIn Cybersecurity Jobs</a></li>
    <li><a href="https://www.indeed.com/q-Cybersecurity-jobs.html" target="_blank" rel="noopener noreferrer">Indeed Cybersecurity Jobs</a></li>
    <li><a href="https://www.glassdoor.com/Job/cybersecurity-jobs-SRCH_KO0,15.htm" target="_blank" rel="noopener noreferrer">Glassdoor Cybersecurity Jobs</a></li>
    <li><a href="https://careers.google.com/jobs/results/?category=cybersecurity" target="_blank" rel="noopener noreferrer">Google Cybersecurity Careers</a></li>
    <li><a href="https://www.kaggle.com/jobs" target="_blank" rel="noopener noreferrer">Kaggle Cybersecurity Jobs</a></li>
    <li><a href="https://angel.co/jobs" target="_blank" rel="noopener noreferrer">AngelList Cybersecurity Jobs</a></li>
  </ul>

  <h2>🔑 Skills to Build for Cybersecurity</h2>
  <ul>
    <li><strong>Networking Fundamentals:</strong> Understanding of TCP/IP, DNS, HTTP, VPNs, and protocols essential to securing networks.</li>
    <li><strong>Cryptography:</strong> Knowledge of encryption algorithms, SSL/TLS, hashing, and public key infrastructure (PKI).</li>
    <li><strong>Threat Detection & Analysis:</strong> Proficiency in detecting malicious activity, using tools like SIEM and intrusion detection systems (IDS).</li>
    <li><strong>Ethical Hacking:</strong> Skills in penetration testing, vulnerability assessment, and exploitation techniques.</li>
    <li><strong>Incident Response:</strong> Ability to manage security incidents, identify threats, and mitigate the impact of a breach.</li>
    <li><strong>Security Auditing & Compliance:</strong> Understanding of regulatory standards such as GDPR, HIPAA, and PCI-DSS.</li>
    <li><strong>Programming/Scripting:</strong> Knowledge of scripting languages like Python, Bash, and PowerShell for automating tasks and vulnerability scanning.</li>
    <li><strong>Cloud Security:</strong> Expertise in securing cloud platforms like AWS, Azure, and Google Cloud.</li>
    <li><strong>Security Tools:</strong> Familiarity with firewall configurations, intrusion detection/prevention systems (IDS/IPS), and anti-virus software.</li>
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
            <h5>📹 Video:</h5>
            <a href={selectedWeek.video} target="_blank" rel="noopener noreferrer">Watch Video</a>
            <h5>🔗 Resource:</h5>
            <a href={selectedWeek.resource} target="_blank" rel="noopener noreferrer">View Resource</a>
            <h5>📅 Assignment:</h5>
            <p>{selectedWeek.assignment}</p>
            <h5>🗂 Dataset:</h5>
            <a href={selectedWeek.dataset} target="_blank" rel="noopener noreferrer">Access Dataset</a>
            <h5>🔧 Project:</h5>
            <p>{selectedWeek.project}</p>
            <h5>📚 Project Resource:</h5>
            <a href={selectedWeek.projectResource} target="_blank" rel="noopener noreferrer">View Resource</a>
          </Modal.Body>
        </Modal>
      )}
    </Container>
  );
};

export default CybersecurityRoadmap;
