import { FaMapMarkerAlt } from "react-icons/fa";
import { MdOutlineAccessTime } from "react-icons/md";
import Button from "./Button";

export default function Card() {
  return (
    <section className="section-card">
      
      <div className="card">
        <div className="card-header">
          <div className="card-image">
            <div className="status-indicator"></div>
          </div>
          <div className="card-info">
            <div className="card-name">
              <h3>Casa de Saúde e Maternidade Nossa Senhora dos Remédios</h3>
            </div>

            <div className="card-status">
              <MdOutlineAccessTime size={20} />
              <p>Aberto</p>
            </div>

            <div className="card-address">
              <FaMapMarkerAlt size={20} />
              <p>Avenida Nossa Senhora de Fátima, 670, Centro.</p>
            </div>
          </div>
        </div>

        <div className="card-footer">
          <div className="days">
            <span className="day">DOM</span>
            <span className="day">SEG</span>
            <span className="day">TER</span>
            <span className="day">QUA</span>
            <span className="day">QUI</span>
            <span className="day">SEX</span>
            <span className="day">SAB</span>
          </div>
        </div>
        <div className="card-button">
            <Button>Ver Mais</Button>
        </div>
      </div>
    </section>
  );
}
