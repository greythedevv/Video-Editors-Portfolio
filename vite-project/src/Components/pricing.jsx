const WinWindow = ({ title, icon = "🖥️", children, id }) => (
  <div className="win-window" id={id} style={{ marginBottom: "8px" }}>
    <div className="win-titlebar">
      <div className="win-titlebar-title">
        <span>{icon}</span>
        <span>{title}</span>
      </div>
      <div className="win-titlebar-buttons">
        <div className="win-titlebar-btn" title="Minimize">_</div>
        <div className="win-titlebar-btn" title="Maximize">□</div>
        <div className="win-titlebar-btn" title="Close" style={{ fontWeight: "bold" }}>✕</div>
      </div>
    </div>
    <div className="win-content">{children}</div>
  </div>
);

export const Pricing = () => {
  return (
    <WinWindow title="Pricing — Choose Your Package" icon="💰" id="pricing">
      <div className="pricing">
        <div className="pricing-container">
          <h1 className="pricing-headline">Choose the best package for you</h1>

          <div className="pricing-cards">
            {/* Single Edit */}
            <div className="pricing-card">
              <h2 className="pricing-card-title">🎬 Single Edit</h2>
              <p className="pricing-card-description">A single short or long form video edit</p>
              <p className="pricing-card-price">$150 per video</p>
              <button className="single-edit-add-to-cart" style={{ marginBottom: "10px", width: "100%" }}>
                🛒 Add to Cart
              </button>
              <ul>
                <li>One fully-edited video (short or long-form)</li>
                <li>Fast 3–5 day turnaround</li>
                <li>Captions/subtitles included</li>
                <li>Custom intro/outro added</li>
                <li>On-brand motion graphics</li>
                <li>Royalty-free music + SFX</li>
                <li>Color grading &amp; sound mixing</li>
                <li>Thumbnail or cover frame included</li>
                <li>1 round of revisions</li>
              </ul>
            </div>

            {/* Monthly Subscription */}
            <div className="pricing-card" style={{ position: "relative" }}>
              {/* "Best Value" label */}
              <div style={{
                position: "absolute",
                top: "-1px",
                right: "-1px",
                background: "#000080",
                color: "#fff",
                fontSize: "9px",
                padding: "2px 6px",
                fontWeight: "bold"
              }}>
                ★ BEST VALUE
              </div>
              <h2 className="pricing-card-title">📅 Monthly Subscription</h2>
              <p className="pricing-card-description">Growing brands aiming to post regularly</p>
              <p className="pricing-card-price">$300 per month</p>
              <button className="monthly-sub-add-to-cart" style={{ marginBottom: "10px", width: "100%" }}>
                🛒 Add to Cart
              </button>
              <ul>
                <li>Unlimited video edits</li>
                <li>Unlimited revisions</li>
                <li>Dedicated video editor</li>
                <li>Custom intro/outro added</li>
                <li>Priority 1–3 day delivery</li>
                <li>Long-form video repurposing</li>
                <li>Custom brand elements</li>
                <li>Strategy support</li>
                <li>Captions styled for retention</li>
                <li>Unlimited short-form edits</li>
              </ul>
            </div>

            {/* Custom */}
            <div className="pricing-card">
              <h2 className="pricing-card-title">🤔 Custom Package</h2>
              <p className="pricing-card-description">
                {"Let's"} figure out what you need and create a custom package that works for you.
              </p>
              <p className="pricing-card-price">Contact us for a quote</p>
              <button
                className="contact-me-pricing"
                style={{ width: "100%" }}
                onClick={() => window.location.href = "mailto:workwithgreystudio@gmail.com"}
              >
                📧 Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </WinWindow>
  );
};
