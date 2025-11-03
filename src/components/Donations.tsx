'use client';

import { useState } from 'react';

export default function Donations() {
  const [activeTab, setActiveTab] = useState('traditional');
  const [copiedAddress, setCopiedAddress] = useState('');

  const cryptoAddresses = {
    bitcoin: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
    usdt: '0x742d35Cc6634C0532925a3b8C0506f72F',
    ethereum: '0x742d35Cc6634C0532925a3b8C0506f72F',
  };

  const copyToClipboard = async (address: string, currency: string) => {
    try {
      await navigator.clipboard.writeText(address);
      setCopiedAddress(currency);
      setTimeout(() => setCopiedAddress(''), 2000);
    } catch (err) {
      console.error('Error copying to clipboard:', err);
    }
  };

  const donationAmounts = [
    { amount: 5, emoji: '☕', label: 'Un café' },
    { amount: 15, emoji: '🍕', label: 'Una pizza' },
    { amount: 30, emoji: '📚', label: 'Un libro tech' },
    { amount: 50, emoji: '🎮', label: 'Un juego indie' },
  ];

  return (
    <section className="nerd-donations" aria-labelledby="donations-title">
      <div className="nerd-donations-container">
        <h2 id="donations-title" className="nerd-section-title">
          💝 Apoya la comunidad
        </h2>
        <p className="nerd-donations-subtitle">
          Tu apoyo nos ayuda a mantener eventos, recursos y hacer crecer nuestra
          tribu nerd
        </p>

        {/* Quick Amounts */}
        <div className="nerd-donation-amounts">
          <h3 className="nerd-donation-amounts-title">Sugerencias de apoyo:</h3>
          <div className="nerd-donation-amounts-grid">
            {donationAmounts.map((item, index) => (
              <div key={index} className="nerd-donation-amount">
                <span className="nerd-donation-emoji">{item.emoji}</span>
                <span className="nerd-donation-price">${item.amount}</span>
                <span className="nerd-donation-label">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Methods Tabs */}
        <div className="nerd-donations-tabs">
          <div className="nerd-tabs-header">
            <button
              className={`nerd-tab ${
                activeTab === 'traditional' ? 'active' : ''
              }`}
              onClick={() => setActiveTab('traditional')}
            >
              💳 Métodos tradicionales
            </button>
            <button
              className={`nerd-tab ${activeTab === 'crypto' ? 'active' : ''}`}
              onClick={() => setActiveTab('crypto')}
            >
              ₿ Crypto
            </button>
          </div>

          {/* Traditional Methods */}
          {activeTab === 'traditional' && (
            <div className="nerd-tab-content">
              <div className="nerd-payment-methods">
                <a
                  href="https://paypal.me/abitnerd"
                  target="_blank"
                  rel="noopener"
                  className="nerd-payment-method paypal"
                >
                  <div className="nerd-payment-icon">💰</div>
                  <div className="nerd-payment-info">
                    <h4>PayPal</h4>
                    <p>Donación única o recurrente</p>
                  </div>
                </a>

                <a
                  href="https://ko-fi.com/abitnerd"
                  target="_blank"
                  rel="noopener"
                  className="nerd-payment-method kofi"
                >
                  <div className="nerd-payment-icon">☕</div>
                  <div className="nerd-payment-info">
                    <h4>Ko-fi</h4>
                    <p>Cómprame un café virtual</p>
                  </div>
                </a>

                <a
                  href="https://mpago.la/abitnerd"
                  target="_blank"
                  rel="noopener"
                  className="nerd-payment-method mercadopago"
                >
                  <div className="nerd-payment-icon">💙</div>
                  <div className="nerd-payment-info">
                    <h4>Mercado Pago</h4>
                    <p>Para usuarios de Argentina/LATAM</p>
                  </div>
                </a>
              </div>
            </div>
          )}

          {/* Crypto Methods */}
          {activeTab === 'crypto' && (
            <div className="nerd-tab-content">
              <div className="nerd-crypto-methods">
                <div className="nerd-crypto-method">
                  <div className="nerd-crypto-header">
                    <span className="nerd-crypto-icon">₿</span>
                    <span className="nerd-crypto-name">Bitcoin (BTC)</span>
                  </div>
                  <div className="nerd-crypto-address">
                    <input
                      type="text"
                      value={cryptoAddresses.bitcoin}
                      readOnly
                      className="nerd-address-input"
                    />
                    <button
                      onClick={() =>
                        copyToClipboard(cryptoAddresses.bitcoin, 'bitcoin')
                      }
                      className="nerd-copy-btn"
                    >
                      {copiedAddress === 'bitcoin' ? '✅' : '📋'}
                    </button>
                  </div>
                </div>

                <div className="nerd-crypto-method">
                  <div className="nerd-crypto-header">
                    <span className="nerd-crypto-icon">💰</span>
                    <span className="nerd-crypto-name">USDT (Tether)</span>
                  </div>
                  <div className="nerd-crypto-address">
                    <input
                      type="text"
                      value={cryptoAddresses.usdt}
                      readOnly
                      className="nerd-address-input"
                    />
                    <button
                      onClick={() =>
                        copyToClipboard(cryptoAddresses.usdt, 'usdt')
                      }
                      className="nerd-copy-btn"
                    >
                      {copiedAddress === 'usdt' ? '✅' : '📋'}
                    </button>
                  </div>
                </div>

                <div className="nerd-crypto-method">
                  <div className="nerd-crypto-header">
                    <span className="nerd-crypto-icon">⚡</span>
                    <span className="nerd-crypto-name">Ethereum (ETH)</span>
                  </div>
                  <div className="nerd-crypto-address">
                    <input
                      type="text"
                      value={cryptoAddresses.ethereum}
                      readOnly
                      className="nerd-address-input"
                    />
                    <button
                      onClick={() =>
                        copyToClipboard(cryptoAddresses.ethereum, 'ethereum')
                      }
                      className="nerd-copy-btn"
                    >
                      {copiedAddress === 'ethereum' ? '✅' : '📋'}
                    </button>
                  </div>
                </div>

                <div className="nerd-crypto-note">
                  <p>
                    💡 <strong>Tip:</strong> También puedes usar Binance Pay o
                    cualquier wallet que soporte estas direcciones
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Thank You Message */}
        <div className="nerd-donations-thanks">
          <h3>🙏 ¡Gracias por apoyar A Bit Nerd!</h3>
          <p>
            Tu contribución nos ayuda a mantener la comunidad activa, organizar
            eventos increíbles y crear contenido de calidad para todos los nerds
            de LATAM.
          </p>
        </div>
      </div>
    </section>
  );
}
