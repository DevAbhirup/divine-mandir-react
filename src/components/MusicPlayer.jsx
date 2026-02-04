import React, { useState, useRef } from 'react';
import './MusicPlayer.css';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const audioRef = useRef(new Audio());

  const playlists = [
    { name: "Om Chant", duration: "5:30" },
    { name: "Gayatri Mantra", duration: "6:15" },
    { name: "Mahamantra", duration: "7:45" },
    { name: "Krishna Chants", duration: "8:20" }
  ];

  const togglePlayPause = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {
        alert("Audio file not available. This is a demo feature.");
      });
    }
    setIsPlaying(!isPlaying);
  };

  const playNext = () => {
    setCurrentTrack((prev) => (prev + 1) % playlists.length);
    setIsPlaying(false);
  };

  const playPrev = () => {
    setCurrentTrack((prev) => (prev - 1 + playlists.length) % playlists.length);
    setIsPlaying(false);
  };

  return (
    <div className="music-player-section" id="darshan">
      <div className="music-container">
        <h3>🎵 Divine Chants & Mantras</h3>
        
        <div className="player-display">
          <div className="track-info">
            <h4>{playlists[currentTrack].name}</h4>
            <p>{playlists[currentTrack].duration}</p>
          </div>
        </div>

        <div className="player-controls">
          <button 
            className="control-btn prev-btn" 
            onClick={playPrev}
            title="Previous Track"
          >
            <i className="fas fa-step-backward"></i>
          </button>

          <button 
            className="music-btn" 
            onClick={togglePlayPause}
            title={isPlaying ? "Pause" : "Play"}
          >
            <i className={`fas fa-${isPlaying ? 'pause' : 'play'}`}></i>
          </button>

          <button 
            className="control-btn next-btn" 
            onClick={playNext}
            title="Next Track"
          >
            <i className="fas fa-step-forward"></i>
          </button>
        </div>

        <div className="playlist">
          <h5>📜 Playlist</h5>
          <ul>
            {playlists.map((track, index) => (
              <li 
                key={index}
                className={currentTrack === index ? 'active' : ''}
                onClick={() => {
                  setCurrentTrack(index);
                  setIsPlaying(false);
                }}
              >
                <span className="track-num">{index + 1}</span>
                <span className="track-name">{track.name}</span>
                <span className="track-duration">{track.duration}</span>
              </li>
            ))}
          </ul>
        </div>

        <p>Experience sacred mantras and divine music for meditation and spiritual awakening.</p>
      </div>
    </div>
  );
};

export default MusicPlayer;
