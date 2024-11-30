package operations

import (
	"time"

	"golang.org/x/exp/constraints"
)

type Integers interface {
	constraints.Integer
}

func TimeFromNow(values interface{}) interface{} {
	var result = make([]float64, 1)
	v := values.([]float64)
	v = append(v, float64(time.Now().Unix()))
	value := Substract(v).([]float64)
	result[0] = value[0]
	return result
}

func DeltaTime(values interface{}) interface{} {
	v := values.([]float64)
	value := Substract(v).([]float64)[0]
	var result = make([]float64, 1)
	result[0] = value
	return result
}
