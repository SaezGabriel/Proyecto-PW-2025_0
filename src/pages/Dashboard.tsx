import { useEffect, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";



const Dashboard = () => {
  // Referencias para los elementos canvas
  const gastosMensualesRef = useRef(null);
  const gastosCategoriaRef = useRef(null);

  useEffect(() => {
    // Gráfico de Gastos Mensuales
    if (gastosMensualesRef.current) {
      new Chart(gastosMensualesRef.current, {
        type: "bar",
        data: {
          labels: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"],
          datasets: [
            {
              label: "Gastos ($)",
              data: [3000, 2500, 2000, 2700, 3200, 1500, 1800, 2200, 2400, 3100, 2900, 1200],
              backgroundColor: "rgba(59, 130, 246, 0.8)",
              borderColor: "rgba(37, 99, 235, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: false },
          },
          scales: {
            y: { beginAtZero: true },
          },
        },
      });
    }

    // Gráfico de Gastos por Categoría
    if (gastosCategoriaRef.current) {
      new Chart(gastosCategoriaRef.current, {
        type: "bar",
        data: {
          labels: ["Servicios", "Ocio", "Alimentación"],
          datasets: [
            {
              label: "Gastos ($)",
              data: [5000, 2000, 3500],
              backgroundColor: "rgba(59, 130, 246, 0.8)",
              borderColor: "rgba(37, 99, 235, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          plugins: {
            legend: { display: false },
          },
          scales: {
            y: { beginAtZero: true },
          },
        },
      });
    }
  }, []);

  return (
    <div className="container mt-5">
      <div className="row">
        {/* Gráfico de Gastos Mensuales */}
        <div className="col-12">
          <div className="chart-card">
            <h5>Gastos mensuales</h5>
            <canvas ref={gastosMensualesRef}></canvas>
          </div>
        </div>
        {/* Gráfico de Gastos por Categoría */}
        <div className="col-12 mt-4">
          <div className="chart-card">
            <h5>Gastos por categoría</h5>
            <canvas ref={gastosCategoriaRef}></canvas>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
