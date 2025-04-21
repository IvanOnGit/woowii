import {
    RadarChart,
    PolarGrid,
    PolarAngleAxis,
    PolarRadiusAxis,
    Radar,
    Tooltip,
    ResponsiveContainer,
    Legend,
  } from "recharts"
  
import type { DataPoint } from "../../types"
import { ContainerRadarToMobile, TooltipContainer } from "./styles"

interface RadarChartProps {
  data: DataPoint[]
}  
  
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <TooltipContainer>
        <p className="label">{`${payload[0].name}: ${payload[0].value}`}</p>
      </TooltipContainer>
    )
  }
  
  return null
}
  
const RadarChartComponent = ({ data }: RadarChartProps) => {
  return (
    <ContainerRadarToMobile>
    <ResponsiveContainer width="90%" height={300}>
      <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 100]} />
        <Radar name="Perfil" dataKey="value" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
        <Tooltip content={<CustomTooltip />} />
        <Legend />
      </RadarChart>
    </ResponsiveContainer>
    </ContainerRadarToMobile>
  )
}
  
export default RadarChartComponent
  
  