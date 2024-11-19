export function extractTime(dateString) {
	const date = new Date(dateString);
	let hours = padZero(date.getHours());
	const minutes = padZero(date.getMinutes());
	const period = hours >= 12 ? "PM" : "AM";
    
    // Convert to 12-hour format
    hours = hours % 12 || 12; // Convert 0 hour to 12 (for 12 AM)
    
    // Pad hours to ensure 2 digits for single-digit hours (optional)
    hours = padZero(hours);

    return `${hours}:${minutes} ${period}`;
}

// Helper function to pad single-digit numbers with a leading zero
function padZero(number) {
	return number.toString().padStart(2, "0");
}