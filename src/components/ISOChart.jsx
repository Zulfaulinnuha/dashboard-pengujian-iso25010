import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from 'recharts';
import { getCategoryColor } from '../utils/colorHelper';

const ISOChart = React.memo(function ISOChart({ data }) {
  // Format tooltip content
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const dataPoint = payload[0].payload;
      return (
        <div className="bg-slate-800 text-white p-3 rounded-lg shadow-lg border border-slate-700 text-xs">
          <p className="font-bold mb-1">{dataPoint.name}</p>
          <p>Tool: <span className="font-semibold text-blue-300">{dataPoint.tool}</span></p>
          <p>Skor: <span className="font-extrabold text-white text-sm">{dataPoint.score}%</span></p>
          <p>Kategori: <span className="font-semibold text-emerald-400">{dataPoint.category}</span></p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="bg-white rounded-[24px] border border-slate-100 p-6 md:p-8 shadow-sm">
      {/* Title */}
      <h3 className="text-base font-bold text-slate-800 mb-4">
        Evaluasi 8 Karakteristik ISO 25010
      </h3>

      {/* Custom Legend */}
      <div className="flex flex-wrap items-center gap-6 mb-8 text-xs font-bold text-slate-600">
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-[#52B766] rounded-sm"></div>
          <span>Sangat Baik</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-[#3B82F6] rounded-sm"></div>
          <span>Baik</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-[#FB923C] rounded-sm"></div>
          <span>Cukup</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-[#EF4444] rounded-sm"></div>
          <span>Perlu Perbaikan</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 bg-[#7F1D1D] rounded-sm"></div>
          <span>Kritis</span>
        </div>
      </div>

      {/* Recharts Container */}
      <div className="w-full h-80 md:h-96">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            barSize={32}
          >
            <CartesianGrid 
              vertical={false} 
              stroke="#F1F5F9" 
              strokeDasharray="4 4" 
            />
            <XAxis
              dataKey="shortName"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#94A3B8', fontSize: 11, fontWeight: 600 }}
              dy={10}
            />
            <YAxis
              domain={[0, 100]}
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#94A3B8', fontSize: 11, fontWeight: 600 }}
              dx={-10}
            />
            <Tooltip content={<CustomTooltip />} cursor={{ fill: '#F8FAFC', opacity: 0.5 }} />
            <Bar 
              dataKey="score" 
              radius={[12, 12, 0, 0]}
              isAnimationActive={true}
              animationDuration={1500}
              animationEasing="ease-out"
            >
              {data.map((entry, index) => {
                const barColor = getCategoryColor(entry.category).hex;
                return (
                  <Cell 
                    key={`cell-${index}`} 
                    fill={barColor} 
                  />
                );
              })}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
});

export default ISOChart;
