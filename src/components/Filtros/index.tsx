import { Key, ReactChild, ReactFragment, ReactPortal, useEffect, useState } from 'react';
import axios from 'axios';
import './style.css'

export default function Filtros() {

   const baseUrl = 'https://restcountries.com/v2/all';

   const [loading, setLoading] = useState<boolean>(true);
   const [nomes, setNomes] = useState<string[]>([]);
   const [moedas, setMoedas] = useState<any>();
   const [idiomas, setIdiomas] = useState<string[]>([]);


   useEffect(() => {
      carregaItens();
   }, [])

   const carregaItens = async () => {
      let resposta = (await axios.get(baseUrl)).data;

      let nomes: string[] = [];
      let objmoedas: any = [];
      let moedas: any = [];
      let idiomas = [];

      resposta.forEach((element: any) => {
         nomes.push(element.name);
      });

      resposta.forEach((element: any) => {
         objmoedas.push(element.currencies);
      });

      for (let i = 0; i < objmoedas.length; i++) {
         moedas.push(objmoedas[i]);
      }

      console.log('Nomes: ', nomes);
      console.log('Moedas: ', moedas);

      setNomes(nomes);
      setMoedas(moedas);
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
                        <option key={index}>{item}</option>
                     ))}
                  </select>
               </div>


            </div>
         }
      </>
   );
}