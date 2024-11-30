package basicmath

import (
	"errors"
	"math"

	"golang.org/x/exp/constraints"
)

type Numeric interface {
	constraints.Integer | constraints.Float
}

// return sum of array
func arraySum[numeric Numeric](values []numeric) (numeric, error) {
	var sumOfValues numeric

	sumOfValues = 0

	if len(values) == 0 {
		return sumOfValues, errors.New("array is empty")
	}

	for _, value := range values {
		sumOfValues += value
	}

	return sumOfValues, nil
}

// return mean of array
func arrayMean[numeric Numeric](values []numeric) (numeric, error) {
	arraysum, err := arraySum(values)
	if err != nil {
		return 0, err
	}
	return arraysum / numeric(len(values)), nil
}

// expected [value1, value2], substract values[0] - values[1]
func substract[numeric Numeric](values []numeric) (numeric, error) {
	if len(values) != 2 {
		return 0, errors.New("number of values != 2")
	}
	return values[0] - values[1], nil
}

// multiply all elements of array
func arrayMultiply[numeric Numeric](values []numeric) (numeric, error) {
	var prodOfValues numeric

	prodOfValues = 1

	if len(values) == 0 {
		return prodOfValues, errors.New("array is empty")
	}

	for _, value := range values {
		prodOfValues *= value
	}

	return prodOfValues, nil
}

// expected [value1, value2], division values[0] / values[1]
func divide[numeric Numeric](values []numeric) (numeric, error) {

	if len(values) != 2 {
		return 0, errors.New("number of values != 2")
	}
	return values[0] / values[1], nil
}

// expected [value1], abs(values[0])
func abs[numeric Numeric](values []numeric) (numeric, error) {

	if len(values) != 1 {
		return 0, errors.New("number of values != 1")
	}
	return numeric(math.Abs(float64(values[0]))), nil
}
