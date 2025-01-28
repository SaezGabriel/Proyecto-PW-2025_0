import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Registrar los componentes de Chart.js que necesitamos
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const Dashboard = () => {
  // Datos para el gráfico de Gastos Mensuales
  const dataMensuales = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    datasets: [
      {
        label: 'Gastos ($)',
        data: [3000, 2500, 2000, 2700, 3200, 1500, 1800, 2200, 2400, 3100, 2900, 1200],
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
        borderColor: 'rgba(37, 99, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const optionsMensuales = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: { beginAtZero: true },
    },
  };

  // Datos para el gráfico de Gastos por Categoría
  const dataCategoria = {
    labels: ['Servicios', 'Ocio', 'Alimentación'],
    datasets: [
      {
        label: 'Gastos ($)',
        data: [5000, 2000, 3500],
        backgroundColor: 'rgba(59, 130, 246, 0.8)',
        borderColor: 'rgba(37, 99, 235, 1)',
        borderWidth: 1,
      },
    ],
  };

  const optionsCategoria = {
    responsive: true,
    plugins: {
      legend: { display: false },
    },
    scales: {
      y: { beginAtZero: true },
    },
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
              <Bar data={dataMensuales} options={optionsMensuales} />
            </div>
          </div>
        </div>

        {/* Fila para el gráfico de gastos por categoría */}
        <div className="row justify-content-center g-4">
          <div className="col-12 col-md-12">
            <h5 className="text-left mb-3">Gastos por categoría</h5>
            <div className="p-3 rounded-3 bg-light" style={{ height: '40vh', minHeight: '250px', width: '100%' }}>
              <Bar data={dataCategoria} options={optionsCategoria} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
