import type { DataPoint } from "../types"

// Función para generar un número aleatorio entre min y max
const getRandomValue = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

// Función para generar datos aleatorios para el gráfico
export const generateRandomData = (): DataPoint[] => {
  const categories = [
    "Sociable",
    "Reservado",
    "Instintivo",
    "Perceptivo",
    "Razonamiento",
    "Afectivo",
    "Evaluador",
    "Exploración",
    "Seguridad",
    "Cuidadoso",
    "SIAES",
    "RPREC",
    "Liderazgo",
    "Autoexpresión",
  ]

  return categories.map((category) => ({
    subject: category,
    value: getRandomValue(30, 100),
  }))
}

// Exportar los datos como JSON para uso externo si es necesario
export const dataJSON = JSON.stringify(generateRandomData(), null, 2)

