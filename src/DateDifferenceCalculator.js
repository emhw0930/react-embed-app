import { useState } from "react";
import "./DateDifferenceCalculator.css";

export default function DateDifferenceCalculator() {
  const [selectedDate, setSelectedDate] = useState("");
  const [daysDifference, setDaysDifference] = useState(null);

  const calculateDifference = (date) => {
    const today = new Date();
    const pickedDate = new Date(date);
    const timeDiff = pickedDate - today;
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    setDaysDifference(daysDiff);
  };

  return (
    <div className="date-calculator">
        <div className="container">
        <h2 className="title">Days Until Selected Date</h2>
        <input
            type="date"
            className="input-date"
            value={selectedDate}
            onChange={(e) => {
            setSelectedDate(e.target.value);
            calculateDifference(e.target.value);
            }}
        />
        {daysDifference !== null && (
            <p className="result">{daysDifference} days left</p>
        )}
        </div>
    </div>
  );
}
