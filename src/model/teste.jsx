import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';


export default function Teste()  {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  


  useEffect(() => { 
    
         fetch('http://localhost:3000/atendimentos')
          .then((response) => response.json())
          .then((json) => {
             console.log(json.atendimento);
          })
          .catch((error) => {
            console.error(error);
          });
      
    

  }, []);

  return (
<text> oi </text>
  );
};