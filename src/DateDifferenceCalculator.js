import { useState } from "react";
import "./DateDifferenceCalculator.css";

export default function DateDifferenceCalculator() {
  const [selectedDate, setSelectedDate] = useState("");
  const [daysDifference, setDaysDifference] = useState(null);

  const calculateDifference = (date) => {
    const today = new Date();
    const pickedDate = new Date(date);
    const timeDiff = today - pickedDate;
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    setDaysDifference(daysDiff);
  };

  return (
    <div className="date-calculator">
        <div className="container">
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
            <p className="result">{daysDifference} days</p>
        )}
        </div>
    </div>
  );
}
