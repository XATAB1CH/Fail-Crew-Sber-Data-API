package predicition

import (
	"encoding/json"
	"log"
	"os"
	"reflect"
)

func GetNNPredicition(modelPath string) float64 {
	jsonData, err := os.ReadFile(modelPath)
	if err != nil {
		log.Fatalf("Ошибка чтения файла: %v", err)
	}

	var f interface{}
	err = json.Unmarshal(jsonData, &f)
	if err != nil {
		log.Fatalf("Ошибка декодирования файла: %v", err)
	}

	var sum float64
	for _, v1 := range f.(map[string]interface{}) {
		for _, v2 := range v1.(map[string]interface{}) {
			if reflect.TypeOf(v2) == reflect.TypeOf("string") || reflect.TypeOf(v2) == reflect.TypeOf(true) {
				continue
			}

			sum += v2.(float64)
		}
	}

	if sum > 100.00 {
		sum = 100.00
	}
	return sum
}
