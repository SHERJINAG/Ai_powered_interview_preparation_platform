import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const HTMLPage = () => {
  const { concept } = useParams();  // Capture the dynamic part of the URL (e.g., "cssanimation")
  const [htmlContent, setHtmlContent] = useState('');

  useEffect(() => {
    // Fetch the corresponding HTML file based on the 'concept' captured from the URL
    fetch(`/html/web/${concept}.html`)  // Ensure the HTML files are stored in 'public/html/web/{concept}.html'
      .then(response => response.text())
      .then(data => setHtmlContent(data))
      .catch(error => console.error('Error loading HTML:', error));
  }, [concept]);  // Re-run the effect when the 'concept' changes

  return (
    <div>
      {htmlContent ? (
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      ) : (
        <p>Loading content...</p>  // Display a loading message while the content is being fetched
      )}
    </div>
  );
};

export default HTMLPage;
