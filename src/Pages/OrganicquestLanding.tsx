
import './organicQuestLanding.css';
import logo from '../assets/projects/questlogo.png';
const QuestifyLandingPage = () => {
  return (
    <div className="questify-container">
      {/* Header */}
      <header className="questify-header">
      
        <div className="questify-logo">
          <img src={logo} alt="Questify Logo" className="questify-logo-image" />
        
        </div>
        <nav className="questify-nav">
          <a href="#features" className="questify-nav-link">Features</a>
          <a href="#testimonials" className="questify-nav-link">Testimonials</a>
          <a href="#download" className="questify-nav-link">Download</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="questify-hero">
        <h1 className="questify-hero-title">
          Conquer A/L Organic Chemistry with <span className="questify-highlight">Organic Quest</span>
        </h1>
        <p className="questify-hero-description">
          Turn complex concepts into exciting challenges. Master organic chemistry for your A/L exams with our fun, gamified mobile app.
        </p>
        <div className="questify-hero-buttons">
          <button className="questify-btn questify-btn-primary">Get the App</button>

        </div>
      </section>

      {/* Features */}
      <section id="features" className="questify-features">
        <h2 className="questify-section-title">Why Questify is Your Ultimate A/L Chemistry Companion</h2>
        <div className="questify-feature-list">
          {[
            { title: "Master Reactions", description: "Learn organic reactions through interactive exercises and visualizations.", icon: "⚗️" },
            { title: "Challenge Your Mind", description: "Solve complex organic chemistry problems in a fun, game-like environment.", icon: "🧠" },
            { title: "Compete & Collaborate", description: "Join study groups, challenge friends, and climb the national leaderboard.", icon: "🤝" },
            { title: "Ace Your A/Ls", description: "Solidify your understanding of syllabus topics required for Advanced Level exams.", icon: "🎓" },
          ].map((feature, index) => (
            <div key={index} className="questify-feature-item">
              <div className="questify-feature-icon">{feature.icon}</div>
              <h3 className="questify-feature-title">{feature.title}</h3>
              <p className="questify-feature-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="questify-testimonials">
        <h2 className="questify-section-title">Success Stories from A/L Students</h2>
        <div className="questify-testimonial-list">
          {[
            { name: "Fathima Riaz", quote: "My A/L chemistry scores improved significantly after using Questify. Highly recommended!", avatar: "https://thumbs.dreamstime.com/b/person-gray-photo-placeholder-man-shirt-white-background-person-gray-photo-placeholder-man-136701243.jpg", rating: 5 },
            { name: "David Silva", quote: "Competing with friends on the leaderboard kept me motivated throughout my studies.", avatar: "https://media.licdn.com/dms/image/v2/C5612AQEAga3EY1jZtw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1520044526840?e=2147483647&v=beta&t=XoRO8OJ3b9lL_YUbFV7CxY-NM2qVnQOocsYXjFAHjBo", rating: 5 },
            { name: "Lakshani Fernando", quote: "The visual explanations for mechanisms are fantastic. Finally understood isomerism!", avatar: "https://images.indianexpress.com/2022/05/Internships.jpg?w=414", rating: 5 },
          ].map((testimonial, index) => (
            <div key={index} className="questify-testimonial-item">
              <img src={testimonial.avatar} alt={testimonial.name} className="questify-testimonial-avatar" />
              <p className="questify-testimonial-rating">{"★".repeat(testimonial.rating)}</p>
              <p className="questify-testimonial-quote">"{testimonial.quote}"</p>
              <p className="questify-testimonial-name">{testimonial.name}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Download Section */}
      <section id="download" className="questify-download">
        <h2 className="questify-section-title">Ready to Ace Your Chemistry Exam?</h2>
        <p className="questify-download-description">
          Download Questify today and start your journey to mastering organic chemistry.
        </p>
        <div className="questify-download-buttons">
          <button className="questify-btn questify-btn-primary">Google Play Store</button>
          <button className="questify-btn questify-btn-secondary">Download for Desktop</button>
        </div>
        <div className="questify-download-preview">
          <img src="https://via.placeholder.com/150" alt="Phone Preview" className="questify-download-image" />
          <img src="https://via.placeholder.com/150" alt="Desktop Preview" className="questify-download-image" />
        </div>
      </section>

      {/* Footer */}
      <footer className="questify-footer">
        <span>© 2025 Questify. All rights reserved.</span>
        <div className="questify-footer-links">
          <a href="#" className="questify-footer-link">Privacy Policy</a>
          <a href="#" className="questify-footer-link">Terms of Service</a>
        </div>
      </footer>
    </div>
  );
};

export default QuestifyLandingPage;