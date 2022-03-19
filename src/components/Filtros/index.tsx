import "./style.css";

type Props = {
  nomes: any[];
  moedas: any[];
  idiomas: any[];
  carregaPorPais: any;
  carregaPorMoeda: any;
  carregaPorIdioma: any;
  total: number;
};

export default function Filtros({
  idiomas,
  moedas,
  nomes,
  carregaPorPais,
  carregaPorMoeda,
  carregaPorIdioma,
  total,
}: Props) {
  return (
    <>
      <div className="conteudo">
        <div className="filtros">
          <div className="filtro">
            <p>Nome País</p>
            <select id="pais" onChange={carregaPorPais}>
              <option value="">--Selecione--</option>
              {nomes.map((item, index) => (
                <option key={index} value={item.name}>
                  {item.translations.br}
                </option>
              ))}
            </select>
          </div>

          <div className="filtro">
            <p>Idiomas</p>
            <select id="idioma" onChange={carregaPorIdioma}>
              <option value="">--Selecione--</option>
              {idiomas.map((item, index) => (
                <option key={index} value={item.iso639_1}>
                  {item.nativeName}
                </option>
              ))}
            </select>
          </div>

          <div className="filtro">
            <p>Moedas</p>
            <select id="moeda" onChange={carregaPorMoeda}>
              <option value="">--Selecione--</option>
              {moedas.map((item, index) => (
                <option key={index} value={item.code}>
                  {item.symbol} - {item.name}
                </option>
              ))}
            </select>
          </div>
        </div>
        <h1>Total Países encontrados: {total}</h1>
      </div>
    </>
  );
}
