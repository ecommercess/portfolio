import { useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * Custom Head component for managing document metadata
 * @param {string} title - Page title
 * @param {string} description - Page description
 * @param {string} [canonical] - Canonical URL
 */
const Head = ({ title, description, canonical }) => {
  useEffect(() => {
    // Set document title
    if (title) {
      document.title = title;
    }

    // Set or update description meta tag
    let descriptionTag = document.querySelector('meta[name="description"]');
    if (description) {
      if (!descriptionTag) {
        descriptionTag = document.createElement('meta');
        descriptionTag.name = 'description';
        document.head.appendChild(descriptionTag);
      }
      descriptionTag.content = description;
    }

    // Set or update canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.rel = 'canonical';
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.href = canonical;
    }

    // Cleanup function
    return () => {
      // Reset title if needed
      document.title = 'Default Title'; // Set your default title here
    };
  }, [title, description, canonical]);

  return null;
};

Head.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  canonical: PropTypes.string
};

export default Head;