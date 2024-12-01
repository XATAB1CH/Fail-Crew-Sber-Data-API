package operations

import (
	"time"
)

// expected [value1, value2], substract values[0] - values[1]
func Substract(operands []interface{}) interface{} {
	var value1 interface{} = operands[0]
	var value2 interface{} = operands[1]
	result := value1.(float64) - value2.(float64)
	return result
}

func TimeFromNow(operands []interface{}) interface{} {
	var startTime interface{} = operands[0]
	nowTime := float64(time.Now().Unix())
	return Substract([]interface{}{nowTime, startTime})
}

func ArraySum(operands []interface{}) interface{} {
	var values interface{} = operands[0]
	var sumOfValues float64
	sumOfValues = 0

	v := values.([]float64)
	for _, value := range v {
		sumOfValues += value
	}
	return sumOfValues
}

func ArrayCount(operands []interface{}) interface{} {
	var values interface{} = operands[0]
	return float64(len(values.([]float64)))
}

func ArrayMean(values []interface{}) interface{} {
	arraySum := ArraySum(values)
	value := arraySum.(float64)
	length := ArrayCount(values).(float64)
	return value / length
}

func ConcatStrings(operands []interface{}) interface{} {
	var in interface{} = operands[0]
	var res string
	for _, value := range in.([]string) {
		res += value
	}
	return res
}
