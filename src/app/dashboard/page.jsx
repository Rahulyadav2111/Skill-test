import React from "react";
import Link from "next/link";

const Dashboard = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-5 mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Rahul Yadav</h1>
      <div className="flex flex-col sm:flex-row gap-4">
        <Link href="/skilltest">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition">
            Skill Test
          </button>
        </Link>
        <Link href="/internship">
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-500 transition">
            Internship
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
