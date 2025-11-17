import React from "react";
import { useParams } from "react-router-dom";
import "./contentdetails.css";
import { Play, Check, Download, Lock, Star, Clock } from "lucide-react";

const dummyData = [
  {
    id: 1,
    title: "VFX Masterclass: Epic Battle Breakdown",
    creator: {
      name: "Luna Films",
      subscribers: "24k subscribers",
      avatar:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=150&q=80",
    },
    price: {
      sui: 150,
      usd: 225,
    },
    description:
      "Dive deep into the making of “Echoes of Tomorrow”. Jane Doe’s latest sci-fi masterpiece...",
    includes: [
      "Full BTS Documentary (4K)",
      "Director’s Exclusive Commentary",
      "Downloadable Concept Art",
      "Early Access to Next Project",
      "Cast & Crew Interviews",
    ],
    activity: [
      "User347 purchased access",
      "User129 watched 45 minutes",
      "User002 completed course",
      "User984 downloaded package",
    ],
  },
  {
    id: 2,
    title: "Cosmic Dawn: VFX Breakdown",
    creator: {
      name: "Nova Studios",
      subscribers: "18k subscribers",
      avatar:
        "https://images.unsplash.com/photo-1517511620798-cec17d428bc0?auto=format&fit=crop&w=150&q=80",
    },
    price: {
      sui: 120,
      usd: 180,
    },
    description: "A behind-the-scenes look at Cosmic Dawn VFX process...",
    includes: ["Full VFX Breakdown", "Project Files", "Early Access"],
    activity: ["User002 watched 30 minutes", "User384 purchased access"],
  },
];

const ContentDetails = () => {
  const { id } = useParams(); // get ID from URL
  const content = dummyData.find((item) => item.id === parseInt(id));

  if (!content) return <p>Content not found!</p>;

  return (
    <div className="details-page">
      <div className="details-left">
        <div className="video-container">
          <img
            src="https://images.unsplash.com/photo-1581091215367-59ab6b365952?auto=format&fit=crop&w=1200&q=80"
            alt="Preview"
          />
          <button className="play-btn">
            <Play size={40} />
          </button>
        </div>

        <h2 className="details-title">{content.title}</h2>

        <div className="creator-row">
          <img src={content.creator.avatar} className="creator-avatar" />
          <div>
            <h4>{content.creator.name}</h4>
            <p>{content.creator.subscribers}</p>
          </div>
          <button className="follow-btn">+ Follow</button>
        </div>

        <div className="section">
          <h3>Description</h3>
          <p>{content.description}</p>
        </div>

        <div className="section">
          <h3>What You Get</h3>
          <ul className="what-you-get">
            {content.includes.map((item, index) => (
              <li key={index}>
                <Check size={18} /> {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="section">
          <h3>Activity Log</h3>
          <ul className="activity-log">
            {content.activity.map((item, i) => (
              <li key={i}>
                <Clock size={16} /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="details-right">
        <div className="price-card">
          <h1>{content.price.sui} Sui</h1>
          <p className="usd">{content.price.usd} USD</p>

          <div className="features">
            <p><Check size={16} /> Stream in Full HD anytime</p>
            <p><Download size={16} /> Download project files (2.4 GB)</p>
            <p><Check size={16} /> Lifetime access – never expires</p>
            <p><Check size={16} /> 30-day satisfaction guarantee</p>
          </div>

          <button className="buy-btn">Buy Access for {content.price.sui} Sui</button>
        </div>

        <div className="creator-box">
          <img src={content.creator.avatar} className="creator-profile" />
          <h3>{content.creator.name}</h3>
          <p>LX Film Educator · 110+ VFX deep-dive videos · 1.8M+ utility downloads worldwide</p>
          <button className="view-profile-btn">View Full Profile</button>
        </div>

        <div className="stats-box">
          <h4>Content Stats</h4>
          <p><Star size={16} /> 4.8 / 5 rating</p>
          <p><Download size={16} /> 12K Downloads</p>
          <p><Clock size={16} /> Last Updated: Jan 5, 2025</p>
        </div>

        <div className="technical-box">
          <h4>Technical Details</h4>
          <p>Video: 4K HDR</p>
          <p>Files: ZIP bundle (2.4 GB)</p>
          <p>Creator: {content.creator.name}</p>
        </div>
      </div>
    </div>
  );
};

export default ContentDetails;
