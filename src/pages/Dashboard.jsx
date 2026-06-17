import React, { useMemo } from 'react';
import Header from '../components/Header';
import SummaryCard from '../components/SummaryCard';
import ISOChart from '../components/ISOChart';
import ResultCard from '../components/ResultCard';
import { dashboardData } from '../data/dashboardData';

export default function Dashboard({ onReportClick }) {
  const { metricsData, summaryStats } = dashboardData;

  // Optimize average score calculation with useMemo
  const averageScore = useMemo(() => {
    const totalScore = metricsData.reduce((sum, item) => sum + item.score, 0);
    return Math.round(totalScore / metricsData.length);
  }, [metricsData]);

  // Unified configuration array to map summary cards and avoid repeated JSX blocks
  const summaryCardsConfig = useMemo(() => [
    {
      key: 'totalCharacteristics',
      stats: summaryStats.totalCharacteristics,
      bgColor: 'bg-bqa-blue',
      iconName: 'MessageSquare',
      iconColorClass: 'text-amber-500',
      iconBgColorClass: 'bg-blue-50/70',
      valueColorClass: 'text-blue-900',
      delay: 0
    },
    {
      key: 'qualityStatus',
      stats: summaryStats.qualityStatus,
      bgColor: 'bg-bqa-green',
      iconName: 'Briefcase',
      iconColorClass: 'text-purple-600',
      iconBgColorClass: 'bg-green-50/70',
      valueColorClass: 'text-emerald-900',
      delay: 100
    },
    {
      key: 'testingTools',
      stats: summaryStats.testingTools,
      bgColor: 'bg-bqa-gray',
      iconName: 'Percent',
      iconColorClass: 'text-blue-600',
      iconBgColorClass: 'bg-slate-200/70',
      valueColorClass: 'text-slate-900',
      delay: 200
    },
    {
      key: 'averageScore',
      stats: {
        ...summaryStats.averageScore,
        value: `${averageScore}%`
      },
      bgColor: 'bg-bqa-tan',
      iconName: 'TrendingUp',
      iconColorClass: 'text-red-500',
      iconBgColorClass: 'bg-amber-50/70',
      valueColorClass: 'text-amber-900',
      delay: 300
    }
  ], [summaryStats, averageScore]);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col font-sans">
      {/* Header */}
      <Header activePage="dashboard" onReportClick={onReportClick} />

      {/* Main Content Area */}
      <main className="flex-1 p-4 md:p-8 lg:p-12 max-w-[1920px] mx-auto w-full">
        {/* Large Rounded Container Box */}
        <div className="bg-white border border-slate-200/60 rounded-[32px] shadow-sm p-6 md:p-8 space-y-8">
          
          {/* Summary Cards Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {summaryCardsConfig.map((card) => (
              <SummaryCard
                key={card.key}
                title={card.stats.title}
                subtext={card.stats.subtext}
                value={card.stats.value}
                bgColor={card.bgColor}
                iconName={card.iconName}
                iconColorClass={card.iconColorClass}
                iconBgColorClass={card.iconBgColorClass}
                valueColorClass={card.valueColorClass}
                delay={card.delay}
              />
            ))}
          </div>

          {/* ISO 25010 Chart Section */}
          <div>
            <ISOChart data={metricsData} />
          </div>

          {/* Result Cards Grid Section */}
          <div className="space-y-4">
            <h3 className="text-base font-bold text-slate-800 px-1">
              Detailed Evaluation Results per Characteristic
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {metricsData.map((item) => (
                <ResultCard
                  key={item.id}
                  name={item.name}
                  tool={item.tool}
                  score={item.score}
                  category={item.category}
                  description={item.description}
                  iconName={item.iconName}
                />
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}
