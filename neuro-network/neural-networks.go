package neural_networks

import (
	"encoding/json"
	"fmt"
	"log"
	"os"
	"reflect"
)

func GetNeuroScore() {
	jsonData, err := os.ReadFile("model.json")
	if err != nil {
		log.Fatalf("Ошибка чтения файла: %v", err)
	}

	var f interface{}
	err = json.Unmarshal(jsonData, &f)
	if err != nil {
		log.Fatalf("Ошибка декодирования файла: %v", err)
	}

	// теперь нужно перебрать все значения map и сложить только числовые значения float32
	var sum float64
	for _, v1 := range f.(map[string]interface{}) {
		for _, v2 := range v1.(map[string]interface{}) {
			if reflect.TypeOf(v2) == reflect.TypeOf("string") || reflect.TypeOf(v2) == reflect.TypeOf(true) {
				continue
			}

			sum += v2.(float64)
		}
	}

	fmt.Print(sum)
}
