"use client";
import React, { useState } from "react";
import HTMLIMAGE from "../../assets/html.png";
import Image from "next/image";
import ProgressBar from "../../components/ProgtessBar";
import LineChartComponent from "../../components/LineChart";
import ProgressPieChart from "../../components/PieChart";
import Modal from "../../components/Modal";
import { FaBook, FaLine, FaTicketAlt, FaTrophy } from "react-icons/fa";

const Skilltext = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [rank, setRank] = useState(1); 
  const [percentile, setPercentile] = useState(10); 
  const [currentScore, setCurrentScore] = useState(1); 
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const [value, setValue] = useState(currentScore); 
  const total = 15;

  const handleUpdate = (newRank, newPercentile, newCurrentScore) => {
    setRank(newRank);
    setPercentile(newPercentile);
    setCurrentScore(newCurrentScore);
    setValue(newCurrentScore); 
    handleClose();
  };

  return (
    <div className="px-3 py-3">
      <p className="text-gray-700 text-lg">Skill Test</p>
      <div className="flex flex-col md:flex-row gap-4 justify-center px-0 py-5">
        <div className="flex-1">
          <div className="border-2 rounded-lg flex justify-center items-center gap-2 px-2 py-3 mb-3">
            <div className="relative w-14 h-14">
              <Image
                src={HTMLIMAGE}
                alt="icon"
                layout="fill"
                objectFit="cover"
              />
            </div>
            <div className="text-sm">
              <h3 className="font-bold">Hyper Text Markup Language</h3>
              <p className="text-gray-600">
                Questions: 15 | Duration: 15min | Submitted on 5 Jun 2021
              </p>
            </div>
            <div>
              <button
                onClick={handleOpen}
                className="border-2 border-black px-3 py-1 bg-blue-800 text-white font-semibold rounded-lg hover:bg-sky-400"
              >
                Update
              </button>
              <Modal
                isOpen={isOpen}
                onClose={handleClose}
                onUpdate={handleUpdate}
              />
            </div>
          </div>
          <div className="border-2 rounded-lg px-2 py-2 mb-3">
            <p className="font-bold">Quick Statistics</p>
            <div className="flex justify-center items-center gap-2 mb-4">
              <div className="flex justify-center items-center gap-2 px-2 border-r">
                <div className="bg-gray-100 p-1 rounded-full text-xl text-yellow-400">
                  <FaTrophy />
                </div>
                <div className="text-sm">
                  <h3 className="font-bold text-lg">{rank}</h3>
                  <p className="text-gray-600">YOUR RANK</p>
                </div>
              </div>
              <div className="flex justify-center items-center gap-2 px-2 border-r">
                <div className="bg-gray-100 p-1 rounded-full text-xl text-red-500">
                  <FaBook />
                </div>
                <div className="text-sm">
                  <h3 className="font-bold text-lg">{percentile}%</h3>
                  <p className="text-gray-600">PERCENTILE</p>
                </div>
              </div>
              <div className="flex justify-center items-center gap-2 px-2">
                <div className="bg-gray-100 p-1 rounded-full text-xl text-green-500">
                  <FaTicketAlt />
                </div>
                <div className="text-sm">
                  <h3 className="font-bold text-lg">{currentScore}/15</h3>
                  <p className="text-gray-600">CORRECT ANSWERS</p>
                </div>
              </div>
            </div>
          </div>
          <div className="border-2 rounded-lg px-2 py-2 mb-3">
            <div className="flex justify-between items-center">
              <div className="text-sm">
                <p className="font-bold">Comparison Graph</p>
                <p className="text-gray-400 mt-2">
                  <span className="font-bold">You scored {percentile}%</span>,
                  which is{" "}
                  <span className="font-bold">
                    {percentile < 72 ? "Lower" : "Higher"}
                  </span>{" "}
                  than the
                </p>
                <p className="text-gray-400">
                  average percentile 72% of all engineers who took this
                  assessment
                </p>
              </div>
              <div className="bg-gray-100 p-1 rounded-full text-xl text-yellow-400">
                <FaLine />
              </div>
            </div>
            <div className="mt-2">
              <div className="w-full mx-auto">
                {" "}
                <LineChartComponent percentile={percentile} />
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1 md:mt-0 mt-5">
          <div className="border-2 rounded-lg px-4 py-4 mb-5">
            <div className="mb-5">
              <h3 className="font-bold text-lg">Syllabus Wise Analysis</h3>
            </div>
            {[
              "HTML Tools, Forms, History",
              "Tags & References in HTML",
              "Tables & References in HTML",
              "Tables & CSS Basics",
            ].map((item, index) => (
              <div className="mb-4" key={index}>
                <h3 className="text-gray-500 font-semibold">{item}</h3>
                <div className="flex justify-between items-center">
                  <ProgressBar
                    color={
                      index % 2 === 0
                        ? "blue"
                        : index === 1
                        ? "orange"
                        : index === 2
                        ? "red"
                        : "green"
                    }
                    percentage={[80, 60, 24, 96][index]}
                  />
                  <p
                    className={`text-${
                      index % 2 === 0
                        ? "blue"
                        : index === 1
                        ? "orange"
                        : index === 2
                        ? "red"
                        : "green"
                    }-600 font-bold`}
                  >
                    {[80, 60, 24, 96][index]}%
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="border-2 rounded-lg px-2 py-3 mb-3">
            <div>
              <div className="flex justify-between items-center">
                <p className="font-bold">Question Analysis</p>
                <p className="font-bold text-blue-500">{currentScore}/15</p>
              </div>
              <p className="text-gray-400">
                <span className="font-bold">{currentScore}</span> questions
                correct out of 15. However, it still needs some improvements.
              </p>
            </div>
            <div className="flex justify-center items-center px-0 py-5">
              <div className="w-full max-w-xs mx-auto">
                {" "}
                <ProgressPieChart value={value} total={total} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skilltext;
