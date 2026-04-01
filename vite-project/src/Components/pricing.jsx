export const Pricing = () =>{
    return(
        <div className="pricing">
        <div className="pricing-container">
            <h1 className="pricing-headline"> Choose the best package for you</h1>
            <div className="pricing-cards">
                <div className="pricing-card">
                    <h2 className="pricing-card-title">Single edit</h2>
                    <p className="pricing-card-description">
                        A single short or long form video edit
                    </p>
                    <p className="pricing-card-price">$150 per video</p>
                    <button className="single-edit-add-to-cart">Add to cart</button>
                    <ul>
                        <li>One fully-edited video (short or long-form)</li>
                        <li>Fast 3–5 day turnaround</li>
                        <li>Captions/subtitles included</li>
                        <li>Custom intro/outro added</li>
                        <li>On-brand motion graphics</li>
                        <li>Royalty-free music + SFX</li>
                        <li>Color grading & sound mixing</li>
                        <li>Thumbnail or cover frame included</li>
                        <li>1 round of revisions</li> </ul>
                </div>
                <div className="pricing-card">
                    <h2 className="pricing-card-title">Monthly subscription</h2>

                    <p className="pricing-card-description">
                       Growing brands aiming for post regularly
                    </p>
                    <p className="pricing-card-price">$300 per month</p>
                    <button className="monthly-sub-add-to-cart">Add to cart</button>
                    <ul>
                        <li>Unlimited video edits</li>
                        <li>Unlimited revisions</li>
                        <li>Dedicated video editor</li>
                        <li>Custom intro/outro added</li>
                        <li>Priority 1–3 day delivery</li>
                        <li>Long-form video repurposing </li>
                        <li>Custom brand elements</li>
                        <li>Strategy support for content pacing</li>
                        <li>Captions styled for retention</li> 
                        <li>Unlimited short-form video edits</li></ul>
                </div>
                <div className="pricing-card">
                    <h2 className="pricing-card-title">Still can't decide?</h2>
                    <p className="pricing-card-description">
                       Let's figure out what you need and create a custom package that works for you.
                    </p>
                    <p className="pricing-card-price">Contact us for a quote</p>
                    <button className="contact-me-pricing" onClick={()=>window.location.href="mailto:workwithgreystudio@gmail.com"}>contact me</button>
                </div>
            </div>
        </div>
        </div>
    )
}