import "./Achievement.css";

import IMO210Img from "../../assets/images/achievements/IMO_210.png";
import MABARImg from "../../assets/images/achievements/MABAR.png";

function Achievement() {
  return (
    <section className="achievement" id="achievement">
      <div className="achievement-container">
        <div className="achievement-header">
          <p className="section-eyebrow">ACHIEVEMENT</p>
          <h2 className="section-title">Pencapaian</h2>
        </div>

        <div className="achievement-grid">
          <div className="achievement-card">
            <h3 className="achievement-title">IMO 210</h3>
            <div className="achievement-media">
              <img src={IMO210Img} alt="IMO 210" />
            </div>
          </div>

          <div className="achievement-card">
            <h3 className="achievement-title">MABAR</h3>
            <div className="achievement-media">
              <img src={MABARImg} alt="MABAR" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Achievement;