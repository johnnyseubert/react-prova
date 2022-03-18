import { Key, ReactChild, ReactFragment, ReactPortal, useEffect, useState } from 'react';
import axios from 'axios';
import './style.css'

export default function Filtros() {

   const baseUrl = 'https://restcountries.com/v2/all';

   const [loading, setLoading] = useState<boolean>(true);
   const [nomes, setNomes] = useState<any[]>([]);
   const [moedas, setMoedas] = useState<any[]>([]);
   const [idiomas, setIdiomas] = useState<any[]>([]);

   useEffect(() => {
      carregaItens();
   }, [])

   const carregaItens = async () => {
      let resposta = (await axios.get(baseUrl)).data;

      let nomes: any[] = [];
      let moedas: any[] = [];
      let idiomas: any[] = [];

      resposta.forEach((element: any) => {
         nomes.push(element);
      });

      resposta.forEach((element: any) => {
         if (element.currencies) {
            moedas.push(element.currencies[0])
         }
      });

      resposta.forEach((element: any) => {
         if (element.languages) {
            if (element.languages.length > 0) {
               element.languages.forEach((language: any) => {
                  idiomas.push(language);
               })
            }
         }
      });


      console.log('Nomes: ', nomes);
      console.log('Moedas: ', moedas);
      console.log("Linguas: ", idiomas);

      setNomes(nomes);
      setMoedas(moedas);
      setIdiomas(idiomas);
      setLoading(false);
   }


   return (
      <>
         {!loading &&
            <div className='filtros'>

               <div className='filtro'>
                  <p>Nome País</p>
                  <select>
                     {nomes.map((item, index) => (
                        <option key={index}>{item.name}</option>
                     ))}
                  </select>
               </div>

               <div className='filtro'>
                  <p>Moedas</p>
                  <select>
                     {moedas.map((item, index) => (
                        <option key={index} value={item.code}>{item.symbol} - {item.name}</option>
                     ))}
                  </select>
               </div>

               <div className='filtro'>
                  <p>Moedas</p>
                  <select>
                     {idiomas.map((item, index) => (
                        <option key={index} value={item.iso639_1}>{item.name}</option>
                     ))}
                  </select>
               </div>

            </div>
         }
      </>
   );
}