// src/pages/Dashboard.jsx
import React from 'react';
import {
    BarChart,
    Bar,
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
    Legend,
    PieChart,
    Pie,
    Cell
} from 'recharts';

const dataLevel = [
    { name: 'Volume', uv: 400 },
    { name: 'Service', uv: 300 },
];

const visitorData = [
    { name: 'Jan', value: 50 }, { name: 'Feb', value: 100 },
    { name: 'Mar', value: 200 }, { name: 'Apr', value: 250 },
    { name: 'May', value: 400 }, { name: 'Jun', value: 500 },
    { name: 'Jul', value: 300 }, { name: 'Aug', value: 320 },
    { name: 'Sep', value: 350 }, { name: 'Oct', value: 300 },
    { name: 'Nov', value: 200 }, { name: 'Dec', value: 220 },
];

const Dashboard = () => {
    return (
        <div className="p-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 h-[93vh] text-white overflow-y-scroll scrollbar-custom">
            {/* Today's Sales Summary */}
            <div className="bg-[#1e293b] p-4 rounded-lg shadow col-span-1 md:col-span-2 xl:col-span-3">
                <h2 className="text-lg font-bold mb-4">Today's Sales</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { title: '$5k', subtitle: 'Total Sales', trend: '+10%' },
                        { title: '500', subtitle: 'Total Order', trend: '+8%' },
                        { title: '9', subtitle: 'Product Sold', trend: '+2%' },
                        { title: '12', subtitle: 'New Customer', trend: '+3%' },
                    ].map((item, index) => (
                        <div key={index} className="bg-[#111827] p-4 rounded-lg">
                            <h3 className="text-2xl font-bold">{item.title}</h3>
                            <p>{item.subtitle}</p>
                            <small className="text-green-400">{item.trend} from yesterday</small>
                        </div>
                    ))}
                </div>
            </div>

            {/* Level Bar Chart */}
            <div className="bg-[#1e293b] p-4 rounded-lg shadow">
                <h3 className="font-semibold mb-2">Level</h3>
                <ResponsiveContainer width="100%" height={150}>
                    <BarChart data={dataLevel}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="uv" fill="#60a5fa" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Customer Fulfillment Line Chart */}
            <div className="bg-[#1e293b] p-4 rounded-lg shadow">
                <h3 className="font-semibold mb-2">Customer Fulfilment</h3>
                <ResponsiveContainer width="100%" height={150}>
                    <LineChart data={visitorData}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="value" stroke="#a78bfa" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
                <div className="flex justify-between text-sm text-gray-400 mt-2">
                    <span>Last Month: $4,087</span>
                    <span>This Month: $5,506</span>
                </div>
            </div>

            {/* Top Products */}
            <div className="bg-[#1e293b] p-4 rounded-lg shadow col-span-1 md:col-span-2">
                <h3 className="font-semibold mb-2">Top Products</h3>
                <div className="space-y-2">
                    {["Home Decore Range", "Disney Princess Dress", "Bathroom Essentials", "Apple Smartwatch"].map((item, index) => (
                        <div key={index} className="flex justify-between text-sm">
                            <span>{`0${index + 1}`} {item}</span>
                            <div className="flex gap-2 items-center">
                                <div className="w-32 h-2 bg-gray-700 rounded-full">
                                    <div className={`h-2 rounded-full ${index === 0 ? 'bg-yellow-400 w-[46%]' : index === 1 ? 'bg-blue-400 w-[17%]' : index === 2 ? 'bg-pink-400 w-[19%]' : 'bg-purple-400 w-[29%]'}`}></div>
                                </div>
                                <span>{index === 0 ? '46%' : index === 1 ? '17%' : index === 2 ? '19%' : '29%'}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Earnings Pie */}
            <div className="bg-[#1e293b] p-4 rounded-lg shadow">
                <h3 className="font-semibold mb-2">Earnings</h3>
                <p className="text-green-400 text-xl">$6078.76</p>
                <small>Profit is 48% More than last Month</small>
                <PieChart width={150} height={150} className="mx-auto">
                    <Pie
                        data={[{ value: 80 }, { value: 20 }]}
                        cx="50%"
                        cy="50%"
                        innerRadius={40}
                        outerRadius={60}
                        fill="#8884d8"
                        paddingAngle={5}
                        dataKey="value"
                    >
                        <Cell key={`cell-0`} fill="#10b981" />
                        <Cell key={`cell-1`} fill="#374151" />
                    </Pie>
                </PieChart>
                <p className="text-center text-lg font-semibold">80%</p>
            </div>

            {/* Visitor Insights Line Chart */}
            <div className="bg-[#1e293b] p-4 rounded-lg shadow col-span-1 md:col-span-2">
                <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">Visitor Insights</h3>
                    <span className="bg-yellow-500 px-2 rounded-full text-sm">New Visitors</span>
                </div>
                <ResponsiveContainer width="100%" height={200}>
                    <LineChart data={visitorData}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="value" stroke="#38bdf8" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Dashboard;
