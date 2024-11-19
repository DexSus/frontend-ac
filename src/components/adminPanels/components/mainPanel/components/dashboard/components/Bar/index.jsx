import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Держ. службовці', percentage: 40 },
  { name: 'Бізнесмени', percentage: 25 },
  { name: 'Політики', percentage: 20 },
  { name: 'Правоохоронці', percentage: 10 },
  { name: 'Інші', percentage: 5 },
];

export const CorruptionParticipantsChart = () => {
  return (
    <div style={{ width: "100%", height: "380px", margin: "3rem" , fontFamily: "'UAF Sans', sans-serif", fontWeight: "500" }}>
      <h2 style={{ fontSize: '1.5rem', fontWeight: '500', fontFamily: "'UAF Sans', sans-serif" }}>Структура учасників корупційних схем</h2>
      <ResponsiveContainer>
        <BarChart layout="vertical" data={data}>
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" width={100} />
          <Tooltip />
          <Bar dataKey="percentage" fill="#c9b99b" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};
