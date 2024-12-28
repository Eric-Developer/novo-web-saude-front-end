export default function CardHorario() {
    const horarios = [
      { dia: "DOMINGO", data: "08/12/2024", horario: "FECHADO", destaque: true },
      { dia: "SEGUNDA", data: "09/12/2024", horario: "06:00 - 23:30" },
      { dia: "TERÇA", data: "10/12/2024", horario: "06:00 - 23:30" },
      { dia: "QUARTA", data: "FERIADO", horario: "00:00 - 00:00" },
      { dia: "QUINTA", data: "12/12/2024", horario: "06:00 - 23:30" },
      { dia: "SEXTA", data: "13/12/2024", horario: "06:00 - 23:30" },
      { dia: "SÁBADO", data: "14/12/2024", horario: "06:00 - 11:30" },
    ];
  
    return (
      <section className="card-horario">
        <h2>Horários</h2>
        <p className="data-atual">
          <strong>DATA ATUAL:</strong> 08/12/2024
        </p>
        <ul>
          {horarios.map((item, index) => (
            <li key={index} className={item.destaque ? "destaque" : ""}>
              <span className="dia">{item.dia}</span>
              <span className="data">{item.data}</span>
              <span className="horario">{item.horario}</span>
            </li>
          ))}
        </ul>
      </section>
    );
  }
  