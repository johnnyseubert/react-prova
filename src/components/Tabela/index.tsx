import Dropdown from "../Dropdown";
import "./style.css";

type Props = {
  pais: any[];
};

export default function Tabela({ pais }: Props) {
  return (
    <>
      <table className="container">
        <thead>
          <tr>
            <th>Nome País</th>
            <th>Capital</th>
            <th>Idioma</th>
            <th>Moeda</th>
            <th>Bandeira</th>
          </tr>
        </thead>
        <tbody>
          {pais.map((item, index) => (
            <tr key={index}>
              <td>{item.translations.br}</td>
              <td>{item.capital}</td>
              <td>
                <Dropdown lista={item.languages} tipo={true} />
              </td>
              <td>
                <Dropdown lista={item.currencies} tipo={false} />
              </td>
              <td>
                <img src={item.flag} className="bandeira" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
