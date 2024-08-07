'use client';

import {
  CheckCircle,
  Package,
  Tag,
  TrendingDown,
  TrendingUp,
} from "lucide-react";
import CardExpenseSummary from "./CardExpenseSummary";
import CardPopularProducts from "./CardPopularProducts";
import CardPurchaseSummary from "./CardPurchaseSummary";
import CardSalesSummary from "./CardSalesSummary";
import StatCard from "./StatCard";

const Dashboard = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 xl:overflow-auto gap-10 pb-4 custom-grid-rows'>
      <CardPopularProducts />
      <CardSalesSummary />
      <CardPurchaseSummary />
      <CardExpenseSummary />
      <StatCard 
      title='Clientes & Despesas'
      primaryIcon={<Package className='text-blue-600 w-6 h-6' />}
      dateRange='22 - 29 julho 2024'
      details={[
        {
          title: 'Crescimento de Clientes',
          amount: '175.00',
          changePercentage: 131,
          IconComponent: TrendingUp,
        },
        {
          title: 'Despesas',
          amount: '10.00',
          changePercentage: -56,
          IconComponent: TrendingDown,
        },
      ]}
      />
      <StatCard 
      title='Dividas & Pedidos Pendentes'
      primaryIcon={<CheckCircle className='text-blue-600 w-6 h-6' />}
      dateRange='22 - 29 Julho 2024'
      details={[
        {
          title: 'Dividas',
          amount: '250.00',
          changePercentage: 131,
          IconComponent: TrendingUp,
        },
        {
          title: 'Pedidos Pendentes',
          amount: '147',
          changePercentage: -56,
          IconComponent: TrendingDown,
        },
      ]}
      />
      <StatCard 
      title='Vendas & Discontos'
      primaryIcon={<Tag className='text-blue-600 w-6 h-6' />}
      dateRange='22 - 29 Julho 2024'
      details={[
        {
          title: 'Vendas',
          amount: '1000.00',
          changePercentage: 20,
          IconComponent: TrendingUp,
        },
        {
          title: 'Discontos',
          amount: '200.00',
          changePercentage: -10,
          IconComponent: TrendingDown,
        },
      ]}
      />
    </div>
  )
}

export default Dashboard