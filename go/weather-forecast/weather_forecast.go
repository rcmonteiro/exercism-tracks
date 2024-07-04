// Package weather provides weather forecasts.
package weather

// CurrentCondition describes the current weather condition.
var CurrentCondition string

// CurrentLocation indicates the current location for which the weather forecast is provided.
var CurrentLocation string

// Forecast returns the weather forecast based on the provided city and condition.
func Forecast(city, condition string) string {
	CurrentLocation, CurrentCondition = city, condition
	return CurrentLocation + " - current weather condition: " + CurrentCondition
}
