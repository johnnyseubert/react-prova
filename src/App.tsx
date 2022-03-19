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
  const [total, setTotal] = useState<number>(0);

  useEffect(() => {
    carregaItens();
  }, []);

  const carregaPorPais = async (event: any) => {
    let nomePais = event.target.value;

    if (nomePais) {
      let resposta = (
        await axios.get(`https://restcountries.com/v2/name/${nomePais}`)
      ).data;

      setPais(resposta);
      setTotal(resposta.length);
    } else {
      carregaItens();
    }
  };

  const carregaPorMoeda = async (event: any) => {
    let nomeMoeda = event.target.value;

    if (nomeMoeda) {
      let resposta = (
        await axios.get(`https://restcountries.com/v2/currency/${nomeMoeda}`)
      ).data;

      setPais(resposta);
      setTotal(resposta.length);
    } else {
      carregaItens();
    }
  };

  const carregaPorIdioma = async (event: any) => {
    let nomeIdioma = event.target.value;

    if (nomeIdioma) {
      let resposta = (
        await axios.get(`https://restcountries.com/v2/lang/${nomeIdioma}`)
      ).data;

      setPais(resposta);
      setTotal(resposta.length);
    } else {
      carregaItens();
    }
  };

  const carregaItens = async () => {
    setLoading(true);
    let resposta = (await axios.get(url)).data;

    let nomes: any[] = [];
    let moedas: any[] = [];
    let idiomas: any[] = [];

    resposta.forEach((element: any) => {
      nomes.push(element);

      if (element.currencies) {
        moedas.push(element.currencies[0]);
      }

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
    setTotal(resposta.length);
    setLoading(false);
  };

  return (
    <>
      {loading && (
        <div className="loading_wrapper">
          <div className="loading"></div>
        </div>
      )}
      {!loading && (
        <Filtros
          idiomas={idiomas}
          moedas={moedas}
          nomes={nomes}
          carregaPorPais={carregaPorPais}
          carregaPorMoeda={carregaPorMoeda}
          carregaPorIdioma={carregaPorIdioma}
          total={total}
        />
      )}
      {!loading && <Tabela pais={pais} />}
    </>
  );
}
