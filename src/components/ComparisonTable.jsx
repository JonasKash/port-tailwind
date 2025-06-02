import React from 'react';
import { AlertTriangle, X, Check } from 'lucide-react';

const ComparisonTable = () => {
  return (
    <div className="w-full max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#00F0FF] to-[#9442FE] bg-clip-text text-transparent">
        Ugarit vs. Mercado
      </h2>
      
      <div className="relative overflow-hidden rounded-2xl bg-black/40 backdrop-blur-sm border border-white/10">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="p-6 text-left text-gray-400">Característica</th>
                <th className="p-6 text-center text-gray-400">Chatbots Genéricos</th>
                <th className="p-6 text-center text-gray-400">Plataformas No-Code</th>
                <th className="p-6 text-center bg-gradient-to-r from-[#00F0FF]/10 to-[#9442FE]/10">
                  <span className="bg-gradient-to-r from-[#00F0FF] to-[#9442FE] bg-clip-text text-transparent">
                    Ugarit Digital
                  </span>
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((row, index) => (
                <tr 
                  key={index} 
                  className="neon-table-row border-b border-white/10"
                >
                  <td className="p-6 text-white neon-cell">{row.feature}</td>
                  {Object.entries(row.comparison).map(([key, value], idx) => (
                    <td 
                      key={idx} 
                      className={`p-6 text-center neon-cell ${
                        key === 'ugarit' ? 'bg-gradient-to-r from-[#00F0FF]/10 to-[#9442FE]/10' : ''
                      }`}
                    >
                      <div className="flex items-center justify-center space-x-2">
                        {renderValue(value)}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

const tableData = [
  {
    feature: 'Personalização real com código',
    comparison: {
      chatbots: { type: 'limited', text: 'Limitada' },
      nocode: { type: 'limited', text: 'Limitada' },
      ugarit: { type: 'yes', text: 'Sim' }
    }
  },
  {
    feature: 'Infraestrutura dedicada (VPS + BD)',
    comparison: {
      chatbots: { type: 'no', text: 'Não' },
      nocode: { type: 'no', text: 'Não' },
      ugarit: { type: 'yes', text: 'Sim' }
    }
  },
  {
    feature: 'Suporte técnico + estratégico',
    comparison: {
      chatbots: { type: 'no', text: 'Não' },
      nocode: { type: 'depends', text: 'Depende' },
      ugarit: { type: 'native', text: 'Nativo' }
    }
  },
  {
    feature: 'Cultura hacker ética',
    comparison: {
      chatbots: { type: 'limited', text: '' },
      nocode: { type: 'limited', text: '' },
      ugarit: { type: 'dna', text: 'DNA da marca' }
    }
  }
];

const renderValue = (value) => {
  const baseClasses = "transition-all duration-300 group-hover:scale-110";
  
  switch (value.type) {
    case 'yes':
      return (
        <span className="text-emerald-400">
          <Check className={baseClasses} />
          <span className="ml-1">{value.text}</span>
        </span>
      );
    case 'no':
      return (
        <span className="text-red-400">
          <X className={baseClasses} />
          <span className="ml-1">{value.text}</span>
        </span>
      );
    case 'limited':
      return (
        <span className="text-yellow-400">
          <AlertTriangle className={baseClasses} />
          <span className="ml-1">{value.text}</span>
        </span>
      );
    case 'depends':
      return (
        <span className="text-yellow-400">
          <AlertTriangle className={baseClasses} />
          <span className="ml-1">{value.text}</span>
        </span>
      );
    case 'native':
      return (
        <span className="bg-gradient-to-r from-[#00F0FF] to-[#9442FE] bg-clip-text text-transparent font-medium">
          {value.text}
        </span>
      );
    case 'dna':
      return (
        <span className="bg-gradient-to-r from-[#00F0FF] to-[#9442FE] bg-clip-text text-transparent font-medium">
          {value.text}
        </span>
      );
    default:
      return value.text;
  }
};

export default ComparisonTable; 