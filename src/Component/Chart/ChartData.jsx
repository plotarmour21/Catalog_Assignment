import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts";
import { format } from "date-fns";
import PropTypes from 'prop-types';

const ChartData = ({ data, isFullscreen }) => {
  console.log(isFullscreen)
 
  return (
    <div className="absolute top-[300px] z-50">
      <AreaChart 
        data={data} 
        width={isFullscreen ? window.innerWidth : 839} 
        height={isFullscreen ? 550 : 400}
      >
        <CartesianGrid strokeDasharray="1 1" fill="#FFFFFF" horizontal={false} />
        <XAxis dataKey="date" tickFormatter={(timestamp) => format(new Date(timestamp), "MMM dd")} />
        <YAxis domain={["auto", "auto"]} tickFormatter={(value) => `$${value.toLocaleString()}`} />
        <Tooltip labelFormatter={(label) => format(new Date(label), "MMM dd, yyyy HH:mm")} formatter={(value) => [`$${value.toFixed(2)}`, "Price"]} />
        <Legend />
   
        <Area 
          type="monotone" 
          dataKey="price" 
          stroke="#4B40EE"  
          fill="#4B40EE"  
          fillOpacity={0.06} 
          strokeWidth={2}
        />
  
      </AreaChart>
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
