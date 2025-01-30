import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

const Grafica_admin = () => {
    interface Dataset {
        label: string;
        data: number[];  // Array de números
        backgroundColor: string;
        borderColor: string;
        borderWidth: number;
      }
  const dataMensuales = {
    labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
    datasets: [
      {
        label: '# Usuarios:',
        data: [3, 2, 2, 7, 3, 5, 1, 2, 4, 3, 9, 1],

        backgroundColor: 'red',
        borderColor: 'white',
        borderWidth: 1,
      },
    ],
  };

  const sumarDatos = (data: { datasets: Dataset[] }): number => {
    // Accedemos al primer dataset
    const dataset = data.datasets[0];
  
    // Sumamos los elementos del array 'data' usando reduce
    const suma = dataset.data.reduce((acc, curr) => acc + curr, 0);
  
    return suma;
  };

  const totalUsuarios = sumarDatos(dataMensuales);

  const optionsMensuales = {
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
            <h5 className="text-left mb-3">Total de usuarios:</h5>
            <div className="p-3 rounded-3 bg-light">
              {totalUsuarios}
            </div>
          </div>
        </div>
        <div className="row justify-content-center g-4 mb-4">
          <div className="col-12 col-md-12">
            <h5 className="text-left mb-3">Nuevos usuarios por mes:</h5>
            <div className="p-3 rounded-3 bg-light" style={{ height: '40vh', minHeight: '250px', width: '100%' }}>
              <Bar data={dataMensuales} options={optionsMensuales} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Grafica_admin
