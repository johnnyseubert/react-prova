import axios from "axios";
import { useEffect, useState } from "react";
import Filtros from "./components/Filtros";
import Tabela from "./components/Tabela";

export default function App() {
  const url = "https://restcountries.com/v2/all";

  const [loading, setLoading] = useState<boolean>(true);
  const [pais, setPais] = useState<any[]>([]);
  const [nomes, setNomes] = useState<any[]>([]);
  const [moedas, setMoedas] = useState<any[]>([]);
  const [idiomas, setIdiomas] = useState<any[]>([]);

  useEffect(() => {
    carregaItens();
  }, []);

  const carregaItens = async () => {
    let resposta = (await axios.get(url)).data;

    let nomes: any[] = [];
    let moedas: any[] = [];
    let idiomas: any[] = [];

    resposta.forEach((element: any) => {
      nomes.push(element);
    });

    resposta.forEach((element: any) => {
      if (element.currencies) {
        moedas.push(element.currencies[0]);
      }
    });

    resposta.forEach((element: any) => {
      if (element.languages) {
        if (element.languages.length > 0) {
          element.languages.forEach((language: string) => {
            idiomas.push(language);
          });
        }
      }
    });

    console.log("Nomes: ", nomes);
    console.log("Moedas: ", moedas);
    console.log("Linguas: ", idiomas);
    console.log("Resposta", resposta);

    setNomes(nomes);
    setMoedas(moedas);
    setIdiomas(idiomas);
    setPais(resposta);
    setLoading(false);
  };

  return (
    <>
      {loading && <h1 className="loading">Buscando dados da api...</h1>}
      {!loading && <Filtros idiomas={idiomas} moedas={moedas} nomes={nomes} />}
      {!loading && <Tabela pais={pais} />}
    </>
  );
}
