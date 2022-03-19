import "./style.css";

type Props = {
  nomes: any[];
  moedas: any[];
  idiomas: any[];
};

export default function Filtros({ idiomas, moedas, nomes }: Props) {
  return (
    <>
      <div className="filtros">
        <div className="filtro">
          <p>Nome País</p>
          <select id="pais">
            <option value="">--Selecione--</option>
            {nomes.map((item, index) => (
              <option key={index}>{item.name}</option>
            ))}
          </select>
        </div>

        <div className="filtro">
          <p>Moedas</p>
          <select id="moeda">
            <option value="">--Selecione--</option>
            {moedas.map((item, index) => (
              <option key={index} value={item.code}>
                {item.symbol} - {item.name}
              </option>
            ))}
          </select>
        </div>

        <div className="filtro">
          <p>Idiomas</p>
          <select id="idioma">
            <option value="">--Selecione--</option>
            {idiomas.map((item, index) => (
              <option key={index} value={item.iso639_1}>
                {item.nativeName}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  );
}
