// // Footer.js
// import React from 'react';

// const Footer = () => {
//   return (
//     <footer style={{ backgroundColor: '#071952', color: '#ffffff', padding: '30px 0' }}>
//       <div className="container text-center">
//         <p>&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
//         <p>
//           <a href="/terms" style={{ color: '#ffffff', textDecoration: 'none' }}>
//             Terms & Conditions
//           </a> |{' '}
//           <a href="/privacy" style={{ color: '#ffffff', textDecoration: 'none' }}>
//             Privacy Policy
//           </a>
//         </p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.footerContent}>
        <div style={styles.brand}>
          <h2 style={styles.brandTitle}>Job board</h2>
          <p style={styles.brandDescription}>
            Empowering Careers, Connecting Opportunities.
          </p>
        </div>

        <div style={styles.links}>
          <h4 style={styles.linkTitle}>Quick Links</h4>
          <ul style={styles.linkList}>
            <li><a href="#home" style={styles.link}>Home</a></li>
            <li><a href="#about" style={styles.link}>About Us</a></li>
            <li><a href="#contact" style={styles.link}>Contact Us</a></li>
            <li><a href="#jobs" style={styles.link}>Job Details</a></li>

          </ul>
        </div>

        <div style={styles.social}>
          <h4 style={styles.linkTitle}>Follow Us</h4>
          <div style={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>🌐 Facebook</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>🌐 Twitter</a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={styles.socialIcon}>🌐 LinkedIn</a>
          </div>
        </div>
      </div>

      <div style={styles.footerBottom}>
        <p style={styles.copyright}>
          © {new Date().getFullYear()} Job board. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    backgroundColor: '#071952',
    color: '#ffffff',
    padding: '40px 10%',
    fontFamily: 'Poppins, Arial, sans-serif',
  },
  footerContent: {
    display: 'flex',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: '20px',
    marginBottom: '20px',
  },
  brand: {
    flex: 1,
    minWidth: '200px',
  },
  brandTitle: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  brandDescription: {
    fontSize: '14px',
    lineHeight: '1.5',
  },
  links: {
    flex: 1,
    minWidth: '200px',
  },
  linkTitle: {
    fontSize: '16px',
    fontWeight: '600',
    marginBottom: '10px',
  },
  linkList: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  link: {
    textDecoration: 'none',
    color: '#ffffff',
    fontSize: '14px',
    lineHeight: '1.8',
    transition: 'color 0.3s',
  },
  social: {
    flex: 1,
    minWidth: '200px',
  },
  socialIcons: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  socialIcon: {
    textDecoration: 'none',
    color: '#ffffff',
    fontSize: '14px',
    transition: 'color 0.3s',
  },
  footerBottom: {
    textAlign: 'center',
    borderTop: '1px solid #ffffff33',
    paddingTop: '15px',
    marginTop: '20px',
  },
  copyright: {
    fontSize: '14px',
    margin: 0,
  },
};

export default Footer;
