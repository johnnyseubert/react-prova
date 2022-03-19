import "./styles.css";

type Props = {
  lista: any[];
  tipo: boolean; //true == idioma, false == moeda
};

export default function Dropdown({ lista, tipo }: Props) {
  return (
    <select>
      {lista.map((item, index) => (
        <option key={index} value={tipo ? item.iso639_1 : item.code}>
          {tipo ? item.name : `${item.symbol} - ${item.name}`}
        </option>
      ))}
    </select>
  );
}
