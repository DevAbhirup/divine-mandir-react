import React, { useState } from 'react';

const Hero = () => {
  const [showDarshanModal, setShowDarshanModal] = useState(false);
  const [showSevaModal, setShowSevaModal] = useState(false);

  const handleDarshanClick = (e) => {
    e.preventDefault();
    setShowDarshanModal(true);
  };

  const handleSevaClick = (e) => {
    e.preventDefault();
    setShowSevaModal(true);
  };

  const closeModal = (setModal) => {
    setModal(false);
  };

  return (
    <>
      <header id="home" className="hero">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <span className="sanskrit-shloka">|| ॐ नमः शिवाय ||</span>
          <h1>Connecting Devotees to the Divine</h1>
          <p>Experience the sanctity of Sanatan Dharma, Anytime, Anywhere.</p>
          <div className="cta-buttons">
              <button onClick={handleDarshanClick} className="btn btn-primary">Online Darshan</button>
              <button onClick={handleSevaClick} className="btn btn-secondary">Offer Seva</button>
          </div>
        </div>
      </header>

      {/* Darshan Modal */}
      {showDarshanModal && (
        <div className="modal-overlay" onClick={() => closeModal(setShowDarshanModal)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => closeModal(setShowDarshanModal)}>×</button>
            <h2>📹 Live Darshan</h2>
            <div className="modal-body">
              <div className="live-stream-placeholder">
                <i className="fas fa-video fa-3x"></i>
                <p>Live Stream Coming Soon</p>
              </div>
              <p className="modal-description">
                Join us for sacred prayers and blessings. Our live darshan sessions allow you to connect with the divine from anywhere in the world.
              </p>
              <div className="modal-timings">
                <h4>Darshan Timings:</h4>
                <ul>
                  <li>🌅 Morning: 5:00 AM - 8:00 AM</li>
                  <li>☀️ Afternoon: 12:00 PM - 2:00 PM</li>
                  <li>🌆 Evening: 6:00 PM - 9:00 PM</li>
                </ul>
              </div>
              <button className="btn btn-primary" style={{marginTop: '1.5rem', width: '100%'}}>
                <i className="fas fa-bell"></i> Notify Me
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Seva Modal */}
      {showSevaModal && (
        <div className="modal-overlay" onClick={() => closeModal(setShowSevaModal)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => closeModal(setShowSevaModal)}>×</button>
            <h2>🙏 Offer Seva/Donate</h2>
            <div className="modal-body">
              <p className="modal-description">
                Your contributions help us maintain the temple and support our community. Every donation is a blessing.
              </p>
              <div className="seva-options">
                <div className="seva-card">
                  <h4>💰 Monetary Donation</h4>
                  <p>Support temple maintenance and services</p>
                  <button className="btn btn-primary">Donate</button>
                </div>
                <div className="seva-card">
                  <h4>🎁 Prasad Offering</h4>
                  <p>Offer flowers and sacred items</p>
                  <button className="btn btn-primary">Offer</button>
                </div>
                <div className="seva-card">
                  <h4>🤝 Volunteer</h4>
                  <p>Join our community service</p>
                  <button className="btn btn-primary">Join</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;