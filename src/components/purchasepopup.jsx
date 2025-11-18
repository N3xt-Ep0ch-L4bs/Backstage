import React from "react";
import { X, CheckCircle, Lock } from "lucide-react";
import "./purchasepopup.css";

const PurchasePopup = ({ content, onClose }) => {
  if (!content) return null;

  return (
    <div className="purchase-overlay">
      <div className="purchase-popup">
        <button className="close-btn" onClick={onClose}>
          <X size={22} />
        </button>

        <h2 className="purchase-title">Confirm Your Purchase</h2>
        <p className="purchase-sub">Review your order before completing the transaction</p>

        <div className="purchase-box">

          <div className="purchase-content">
            <h4>{content.title}</h4>
            <p className="creator">By {content.creator.name}</p>
            <span className="access-tag">{content.price.paymenttype}</span>
          </div>

          <div className="purchase-price">
            <div className="row">
              <p>Content Price</p>
              <span>{content.price.sui} SUI</span>
              
            </div>

            <div className="row">
              <p>Platform Fee</p>
              <span>{content.price.sui} SUI</span>
            </div>

            <div className="total-row">
              <p>Total</p>
              <div>
                <h3>{content.price.sui} SUI</h3>
                <span>${content.price.usd}</span>
              </div>
            </div>
          </div>

          <div className="access-rights">
            <h4>Your Access Rights</h4>
            <p><CheckCircle className="checkcircle" size={16}/> Lifetime streaming access</p>
            <p><CheckCircle size={16}/> Bound to this wallet only</p>
            <p><CheckCircle size={16}/> Non-transferable access pass</p>
            <p><CheckCircle size={16}/> Secured on Sui blockchain</p>
          </div>

          <div className="checks">
            <label>
              <input type="checkbox" />
              I agree to the Terms of Service & Content Policy
            </label>
            <label>
              <input type="checkbox" />
              I understand blockchain transactions are irreversible
            </label>
          </div>

          <button className="confirm-btn">Confirm Purchase</button>
          <button className="cancel-btn" onClick={onClose}>Cancel</button>

          <div className="secure-footer">
            <Lock size={18} />
            <p>Your transaction is secured by Sui blockchain.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PurchasePopup;
