package operations

import (
	"math"
)

// return sum of array
func ArraySum(values interface{}) interface{} {

	var result = make([]float64, 1)
	var sumOfValues float64
	sumOfValues = 0

	v := values.([]float64)
	for _, value := range v {
		sumOfValues += value
	}
	result[0] = sumOfValues
	return result
}

// return mean of array
func ArrayMean(values interface{}) interface{} {

	var result = make([]float64, 1)
	v := values.([]float64)
	arraysum := ArraySum(v)
	value := arraysum.([]float64)[0]
	result[0] = value / float64(len(v))
	return result
}

// expected [value1, value2], substract values[0] - values[1]
func Substract(values interface{}) interface{} {
	var result = make([]float64, 1)
	v := values.([]float64)
	result[0] = v[0] - v[1]
	return result
}

// multiply all elements of array
func ArrayMultiply(values interface{}) interface{} {

	var result = make([]float64, 1)
	var prodOfValues float64

	prodOfValues = 1
	v := values.([]float64)
	for _, value := range v {
		prodOfValues *= value
	}
	result[0] = prodOfValues
	return result
}

// expected [value1, value2], division values[0] / values[1]
func Divide(values interface{}) interface{} {
	var result = make([]float64, 1)
	v := values.([]float64)
	result[0] = v[0] / v[1]
	return result
}

// expected [value1], abs(values[0])
func Abs(values interface{}) interface{} {
	var result = make([]float64, 1)
	v := values.([]float64)
	result[0] = math.Abs(float64(v[0]))
	return result
}

func Count(values interface{}) interface{} {
	var result = make([]float64, 1)
	v := values.([]float64)
	result[0] = float64(len(v))
	return result
}
