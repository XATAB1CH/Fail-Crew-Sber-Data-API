package utils

import (
	"encoding/json"
	"io/ioutil"
	"log"
	"os"
)

func ParseJson(URL string) (interface{}, error) {
	jsonData, err := os.ReadFile(URL)
	if err != nil {
		log.Fatalf("Ошибка чтения файла: %v", err)
		return nil, err
	}

	var f interface{}
	err = json.Unmarshal(jsonData, &f)
	if err != nil {
		log.Fatalf("Ошибка декодирования файла: %v", err)
		return nil, err
	}

	return f, nil
}

func MergeJSONFiles(files []string) ([]byte, error) {
	var combined []map[string]interface{}

	for _, file := range files {
		// Чтение содержимого файла
		content, err := ioutil.ReadFile(file)
		if err != nil {
			return nil, err
		}

		var temp map[string]interface{}
		// Парсинг JSON содержимого
		if err := json.Unmarshal(content, &temp); err != nil {
			return nil, err
		}

		combined = append(combined, temp) // Добавление объекта в срез
	}

	return json.Marshal(combined) // Преобразование среза обратно в JSON
}
