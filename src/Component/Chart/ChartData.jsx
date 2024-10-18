import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { format } from "date-fns";
import PropTypes from 'prop-types';

const ChartData = ({ data, isFullscreen }) => {
  console.log(isFullscreen)
  return (
    <div className="absolute top-[300px]">
   <LineChart 
      data={data} 
      width={isFullscreen ? window.innerWidth : 839} 
      height={isFullscreen ? window.innerHeight : 400}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="date" tickFormatter={(timestamp) => format(new Date(timestamp), "MMM dd")} />
      <YAxis domain={["auto", "auto"]} tickFormatter={(value) => `$${value.toLocaleString()}`} />
      <Tooltip labelFormatter={(label) => format(new Date(label), "MMM dd, yyyy HH:mm")} formatter={(value) => [`$${value.toFixed(2)}`, "Price"]} />
      <Legend />
      <Line type="monotone" dataKey="price" stroke="#4B40EE" strokeWidth={2} dot={false} />
    </LineChart>
    </div>
 
  );
};

ChartData.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    date: PropTypes.instanceOf(Date).isRequired,
    price: PropTypes.number.isRequired,
  })).isRequired,
  isFullscreen: PropTypes.bool.isRequired,  
};

export default ChartData;
