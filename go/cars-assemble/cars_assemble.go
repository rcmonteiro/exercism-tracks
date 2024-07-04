// Package cars provides functions for assembling cars.
package cars

// CalculateWorkingCarsPerHour calculates how many working cars are
// produced by the assembly line every hour.
func CalculateWorkingCarsPerHour(productionRate int, successRate float64) float64 {
	return float64(productionRate) * successRate / 100.0
}

// CalculateWorkingCarsPerMinute calculates how many working cars are
// produced by the assembly line every minute.
func CalculateWorkingCarsPerMinute(productionRate int, successRate float64) int {
	return int(CalculateWorkingCarsPerHour(productionRate, successRate) / 60)
}

// CalculateCost works out the cost of producing the given number of cars,
// given the costs for a group of 10 cars is $95,000 and a single car is $10,000.
func CalculateCost(carsCount int) uint {
	return uint(carsCount/10)*95000 + uint(carsCount%10)*10000
}
