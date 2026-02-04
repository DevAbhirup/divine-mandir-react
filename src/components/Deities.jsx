import React, { useState } from 'react';

const Deities = () => {
  const [selectedDeity, setSelectedDeity] = useState(null);
  const [showBlessingMessage, setShowBlessingMessage] = useState(false);
  const fallbackImage = "/mandir-favicon.svg";

  // The Data (Easily expandable)
  const gods = [
    { 
      name: "Lord Shiva", 
      desc: "The Destroyer & Transformer",
      icon: "fa-om",
      color: "#f0faff",
      image: "/lordshiva.jpg",
      fullDesc: "Lord Shiva, the cosmic dancer, represents destruction and transformation. He is the supreme consciousness that dissolves the universe to recreate it.",
      mantra: "ॐ नमः शिवाय",
      offerings: "Flowers, Milk, Fruits"
    },
    { 
      name: "Lord Ram", 
      desc: "Maryada Purushottam",
      icon: "fa-hand-peace",
      color: "#fff5e6",
      image: "/lordram.jpg",
      fullDesc: "Lord Rama, the ideal man and king, epitomizes righteousness, duty, and moral values. He is the seventh avatar of Lord Vishnu.",
      mantra: "ॐ राम रामाय नमः",
      offerings: "Sugarcane, Fruits, Sweets"
    },
    { 
      name: "Maa Durga", 
      desc: "The Divine Mother",
      icon: "fa-sun",
      color: "#fff0f0",
      image: "/maadurga.jpg",
      fullDesc: "Maa Durga, the supreme goddess, embodies power, protection, and feminine energy. She destroys negativity and evil.",
      mantra: "ॐ देवी दुर्गा नमः",
      offerings: "Flowers, Red Vermilion, Coconut"
    },
    { 
      name: "Lord Ganesha", 
      desc: "Remover of Obstacles",
      icon: "fa-leaf",
      color: "#f0fff0",
      image: "/lordganesha.jpg",
      fullDesc: "Lord Ganesha, the elephant-headed deity, is worshipped at the beginning of all endeavors. He removes obstacles and brings success.",
      mantra: "ॐ गं गणपतये नमः",
      offerings: "Modak, Coconut, Flowers"
    }
  ];

  const handleVisitTemple = (god) => {
    setSelectedDeity(god);
  };

  const handlePray = () => {
    setShowBlessingMessage(true);
    setTimeout(() => {
      setShowBlessingMessage(false);
    }, 3000);
  };

  const closeModal = () => {
    setSelectedDeity(null);
  };

  const handleImageError = (event) => {
    event.currentTarget.src = fallbackImage;
  };

  return (
    <>
      <section id="deities" className="section-padding">
        <div className="section-header">
          <h2>The Divine Deities</h2>
          <p>Seek blessings from the eternal guardians.</p>
        </div>
        
        <div className="deity-grid container">
          {/* React Magic: Mapping through data */}
          {gods.map((god, index) => (
            <div key={index} className="deity-card">
              <div className="card-img" style={{ backgroundColor: god.color }}>
                <img
                  src={god.image}
                  alt={god.name}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  crossOrigin="anonymous"
                  onError={handleImageError}
                  className="deity-card-image"
                />
              </div>
              <div className="card-info">
                <h3>{god.name}</h3>
                <p>{god.desc}</p>
                <button className="btn-text" onClick={() => handleVisitTemple(god)}>
                  Visit Temple &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Deity Details Modal */}
      {selectedDeity && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content deity-modal" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>×</button>
            
            {/* Deity Image */}
            <div className="deity-image-container">
              <img
                src={selectedDeity.image}
                alt={selectedDeity.name}
                loading="lazy"
                decoding="async"
                referrerPolicy="no-referrer"
                crossOrigin="anonymous"
                onError={handleImageError}
                className="deity-image"
              />
            </div>

            <div className="modal-body">
              <h2>{selectedDeity.name}</h2>
              <p className="modal-description">{selectedDeity.fullDesc}</p>
              
              <div className="deity-details">
                <div className="detail-section">
                  <h4>🕉️ Sacred Mantra</h4>
                  <p className="mantra-text">{selectedDeity.mantra}</p>
                </div>
                
                <div className="detail-section">
                  <h4>🌸 Offerings</h4>
                  <p>{selectedDeity.offerings}</p>
                </div>
              </div>

              <div className="modal-actions">
                <button className="btn btn-primary" onClick={handlePray} style={{flex: 1}}>
                  <i className="fas fa-heart"></i> Pray
                </button>
                <button className="btn btn-secondary" style={{flex: 1}}>
                  <i className="fas fa-gift"></i> Offer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Blessing Message */}
      {showBlessingMessage && (
        <div className="blessing-notification">
          <div className="blessing-content">
            <i className="fas fa-spa"></i>
            <h3>Received Online Blessing</h3>
            <p>May {selectedDeity?.name} bless you with peace and prosperity</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Deities;
