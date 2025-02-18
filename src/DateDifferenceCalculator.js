import { useState, useEffect } from "react";
import "./DateDifferenceCalculator.css";

export default function DateDifferenceCalculator() {
  // Initialize state with default values from localStorage if available
  const [selectedDate, setSelectedDate] = useState(() => {
    const savedDate = localStorage.getItem("selectedDate");
    return savedDate ? savedDate : ""; // If there's no saved date, return an empty string
  });

  const [daysDifference, setDaysDifference] = useState(() => {
    const savedDaysDifference = localStorage.getItem("daysDifference");
    return savedDaysDifference ? parseInt(savedDaysDifference, 10) : null; // Parse the saved days difference, or null if not found
  });

  const calculateDifference = (date) => {
    const today = new Date();
    const pickedDate = new Date(date);
    const timeDiff = today - pickedDate;
    const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
    setDaysDifference(daysDiff);
  };

  useEffect(() => {
    // Store the selected date and the calculated days difference in localStorage whenever they change
    if (selectedDate) {
      localStorage.setItem("selectedDate", selectedDate);
      localStorage.setItem("daysDifference", daysDifference);
    }
  }, [selectedDate, daysDifference]);

  useEffect(() => {
    // Recalculate days difference if there's a saved date and daysDifference is null
    if (selectedDate && daysDifference === null) {
      calculateDifference(selectedDate);
    }
  }, [selectedDate, daysDifference]);

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
