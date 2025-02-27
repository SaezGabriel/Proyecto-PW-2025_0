import { useEffect, useState } from "react";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registrar los componentes de Chart.js que necesitamos
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [DataCategoria, setDataCategoria] = useState({
    labels: [],
    datasets: [
      {
        label: "Gastos ($)",
        data: [],
        backgroundColor: "rgba(59, 130, 246, 0.8)",
        borderColor: "rgba(37, 99, 235, 1)",
        borderWidth: 1,
      },
    ],
  });
  const [egresosMensuales, setEgresosMensuales] = useState(Array(12).fill(0));

  interface EgresoPorMes {
    Mes: string;  // Asumimos que el backend devuelve la fecha como string
    total: number;
  }


  //
  useEffect(() => {
    fetch("http://localhost:3000/egresos/egresos-por-mes")
      .then((response) => response.json())
      .then((data) => {
        const nuevosEgresos = Array(12).fill(0);
  
        (data.egresosPorMes as EgresoPorMes[]).forEach(({ Mes, total }) => {
          const mes = new Date(Mes).getMonth(); // Extraer el número del mes (0-11)
          nuevosEgresos[mes] = total;
        });
  
        setEgresosMensuales(nuevosEgresos);
      })
      .catch((error) => console.error("Error al obtener egresos por mes:", error));
  }, []);

  //
  useEffect(() => {
    fetch("http://localhost:3000/egresos/egresos-por-categoria")
      .then((response) => response.json())
      .then((data) => {
        console.log("🔹 Datos de la API:", data); // Verifica qué llega desde la API
  
        if (data.egresosPorCategoria && Array.isArray(data.egresosPorCategoria)) {
          const labels = data.egresosPorCategoria.map((item: any) => {
            console.log("Procesando item:", item); // Muestra cada objeto de la lista
            return item.Categoria; // Usa exactamente la propiedad que llega desde la API
          });
  
          const values = data.egresosPorCategoria.map((item: any) => parseFloat(item.total));
  
          console.log("✅ Labels Finales:", labels);
          console.log("✅ Valores Finales:", values);
  
          setDataCategoria({
            labels,
            datasets: [
              {
                label: "Gastos ($)",
                data: values,
                backgroundColor: "rgba(59, 130, 246, 0.8)",
                borderColor: "rgba(37, 99, 235, 1)",
                borderWidth: 1,
              },
            ],
          });
        } else {
          console.error("⚠️ La API no devolvió un array válido:", data.egresosPorCategoria);
        }
      })
      .catch((error) => console.error("❌ Error al obtener egresos por categoría:", error));
  }, []);

  // Datos para el gráfico de Gastos Mensuales
  const dataMensuales = {
    labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
    datasets: [
      {
        label: "Gastos ($)",
        data: egresosMensuales,
        backgroundColor: "rgba(59, 130, 246, 0.8)",
        borderColor: "rgba(37, 99, 235, 1)",
        borderWidth: 1,
      },
    ],
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center overflow-hidden"
      style={{ minHeight: '100vh', backgroundColor: '#f0f0f0', margin: '0', padding: '0' }}
    >
      <div className="container">
        {/* Fila para el gráfico de gastos mensuales */}
        <div className="row justify-content-center g-4 mb-4">
          <div className="col-12 col-md-12">
            <h5 className="text-left mb-3">Gastos mensuales</h5>
            <div className="p-3 rounded-3 bg-light" style={{ height: '40vh', minHeight: '250px', width: '100%' }}>
              <Bar data={dataMensuales}/>
            </div>
          </div>
        </div>

        {/* Fila para el gráfico de gastos por categoría */}
        <div className="row justify-content-center g-4">
          <div className="col-12 col-md-12">
            <h5 className="text-left mb-3">Gastos por categoría</h5>
            <div className="p-3 rounded-3 bg-light" style={{ height: '40vh', minHeight: '250px', width: '100%' }}>
            <Bar data={DataCategoria} options={{ responsive: true, plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } } }} />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;

