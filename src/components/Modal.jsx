import React, { useEffect, useState } from "react";
import HTMLLOGO from "../assets/html.png";
import Image from "next/image";

const Modal = ({ isOpen, onClose, onUpdate }) => {
  const [rank, setRank] = useState("");
  const [percentile, setPercentile] = useState("");
  const [currentScore, setCurrentScore] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validation for current score
    if (
      !currentScore ||
      isNaN(currentScore) ||
      currentScore < 0 ||
      currentScore > 15
    ) {
      newErrors.currentScore = "Required | Should be a number between 0 and 15";
    }
    // Validation for rank
    if (!rank || isNaN(rank) || rank < 1 || rank > 4) {
      newErrors.rank = "Required | Should be a number between 1 and 4";
    }
    // Validation for percentile
    if (
      !percentile ||
      isNaN(percentile) ||
      percentile < 0 ||
      percentile > 100
    ) {
      newErrors.percentile = "Required | Should be a number between 0 and 100";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Pass the values directly
      onUpdate(parseInt(rank), parseInt(percentile), parseInt(currentScore));
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1]">
      <div className="bg-white p-6 sm:p-8 rounded shadow-lg w-11/12 sm:w-1/2">
        <div className="flex items-center mb-4">
          <Image src={HTMLLOGO} alt="icon" width={30} height={30} />
          <h2 className="text-md sm:text-lg font-semibold">Update Scores</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="flex flex-col mb-4">
            <div className="flex justify-between mb-2">
              <label className="block font-bold text-sm sm:text-base">
                1. Update Your Rank
              </label>
              <input
                type="number"
                value={rank}
                onChange={(e) => setRank(e.target.value)}
                className={`border rounded p-2 w-1/2 ${
                  errors.rank ? "border-red-500" : "border-gray-300"
                }`}
                required
              />
            </div>
            {errors.rank && (
              <p className="text-red-500 text-xs">{errors.rank}</p>
            )}
          </div>
          <div className="flex flex-col mb-4">
            <div className="flex justify-between mb-2">
              <label className="block font-bold text-sm sm:text-base">
                2. Update Your Percentile
              </label>
              <input
                type="number"
                value={percentile}
                onChange={(e) => setPercentile(e.target.value)}
                className={`border rounded p-2 w-1/2 ${
                  errors.percentile ? "border-red-500" : "border-gray-300"
                }`}
                required
              />
            </div>
            {errors.percentile && (
              <p className="text-red-500 text-xs">{errors.percentile}</p>
            )}
          </div>
          <div className="flex flex-col mb-6">
            <div className="flex justify-between mb-2">
              <label className="block font-bold text-sm sm:text-base">
                3. Update Your Current Score (out of 15)
              </label>
              <input
                type="number"
                value={currentScore}
                onChange={(e) => setCurrentScore(e.target.value)}
                className={`border rounded p-2 w-1/2 ${
                  errors.currentScore ? "border-red-500" : "border-gray-300"
                }`}
                required
              />
            </div>
            {errors.currentScore && (
              <p className="text-red-500 text-xs">{errors.currentScore}</p>
            )}
          </div>
          <div className="flex justify-end mt-4">
            <button
              onClick={onClose}
              className="bg-gray-300 text-black px-4 py-2 rounded mr-2"
            >
              Close
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
