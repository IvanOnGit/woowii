import { useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

import { Button, ChartContainer, Column, Container } from "./styles";

interface DataPoint {
  subject: string;
  value: number;
}

const getRandomValue = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const generateRandomData = (): DataPoint[] => {
  const sociable = getRandomValue(30, 100);
  const instintivo = getRandomValue(30, 100);
  const seguridad = getRandomValue(30, 100);
  const siaes = getRandomValue(30, 100);
  const liderazgo = getRandomValue(30, 100);
  
  return [
    { subject: "Sociable", value: sociable },
    { subject: "Reservado", value: 100 - sociable },
    { subject: "Instintivo", value: instintivo },
    { subject: "Perceptivo", value: 100 - instintivo },
    { subject: "Seguridad", value: seguridad },
    { subject: "Cuidadoso", value: 100 - seguridad },
    { subject: "SIAES", value: siaes },
    { subject: "RPREC", value: 100 - siaes },
    { subject: "Liderazgo", value: liderazgo },
    { subject: "Autoexpresión", value: 100 - liderazgo }
  ];
};

const BarChartsMobile = () => {
  const [data, setData] = useState(generateRandomData);

  const regenerateData = () => setData(generateRandomData());

  const verticalBars = data.filter(d => d.subject === "Liderazgo" || d.subject === "Autoexpresión");
  const groupedData = [
    { title: "Vinculación", data: ["Sociable", "Reservado"] },
    { title: "Motivación", data: ["Instintivo", "Perceptivo"] },
    { title: "Individualidad", data: ["Seguridad", "Cuidadoso"] },
    { title: "Trabajo en equipo", data: ["SIAES", "RPREC"] }
  ];

  return (
    <Container>
    <Container>
      <Column id="vertical">
        
        <ChartContainer>
          <h2>Habilidades de Liderazgo y Autoexpresión</h2>
          <ResponsiveContainer width="70%" height={300}>
            <BarChart data={verticalBars}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="subject" />
              <YAxis />
              <Tooltip contentStyle={{ backgroundColor: '#FFF', color: '#000' }} itemStyle={{ color: '#000' }}/>
              <Bar dataKey="value" fill="#8FFF00" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </Column>
      <Column id="horizontal">
        {groupedData.map((group, index) => (
          <ChartContainer key={index}>
            <h3>{group.title}</h3>
            <div className="division">
                <h4>{group.data[0]}</h4>
                <h4>{group.data[1]}</h4>
            </div>
            <ResponsiveContainer width="80%" height={50}>
              <BarChart layout="vertical" data={[{}]}>
                <CartesianGrid strokeDasharray="3 3" />
                <YAxis type="category" dataKey="title" hide />
                <XAxis type="number" />
                <Tooltip contentStyle={{ backgroundColor: '#fff', color: '#000' }} itemStyle={{ color: '#000' }}/>
                {group.data.map((subject, idx) => (
                  <Bar key={idx} dataKey={() => data.find(d => d.subject === subject)?.value || 0} name={subject} stackId="a" fill={idx % 2 === 0 ? "#8FFF00" : "#460BFF"} />
                ))}
              </BarChart>
            </ResponsiveContainer>
          </ChartContainer>
        ))}
        <Button onClick={regenerateData}>Generar Nuevos Datos</Button>
      </Column>
    </Container>
    </Container>
  );
};

export default BarChartsMobile;
