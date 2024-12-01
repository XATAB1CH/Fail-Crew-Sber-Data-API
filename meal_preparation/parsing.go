package parsing

import (
	"encoding/json"
	"errors"

	//"errors"
	"fmt"
	"io/ioutil"
	"os"
)

type IngredientJSON struct {
	Itype string      `json:"type"`
	Name  string      `json:"name"`
	Value interface{} `json:"val"`
}

// type IngredientJSON map[string]interface{}

func readJsonFromPath(path string) ([]byte, error) {
	jsonFile, err := os.Open(path)
	if err != nil {
		return make([]byte, 0), err
	}
	defer jsonFile.Close()

	bytes, err := ioutil.ReadAll(jsonFile)

	if err != nil {
		return make([]byte, 0), err
	}

	return bytes, nil
}

func readRecipyFromJson(jsonBytes []byte) []IngredientJSON {
	var recipe []IngredientJSON

	err := json.Unmarshal(jsonBytes, &recipe)
	if err != nil {
		fmt.Println("Can't unmarshal json")
	}
	return recipe
}

func jsonDataToRecipy(data []IngredientJSON) (recipy []Ingredient) {
	for _, ingredient := range data {
		recipy = append(recipy, JsonModToIngredient(&ingredient))
	}
	return recipy
}

func JsonModToIngredient(jsdata *IngredientJSON) Ingredient {
	var obj Ingredient
	if jsdata.Itype == "val" {
		if jsdata.Name == "int" || jsdata.Name == "float" || jsdata.Name == "string" {
			d := Data{jsdata.Value}
			obj = &d
		} else if jsdata.Name == "array" {
			data, _ := ConvertToFloat64Slice(jsdata.Value)
			d := Data{data}
			obj = &d
		} else if jsdata.Name == "arrayStr" {
			data, _ := ConvertToStringSlice(jsdata.Value)
			d := Data{data}
			obj = &d
		}
	} else {
		f := Function{Name: jsdata.Name}
		obj = &f
	}
	return obj
}

func ConvertToFloat64Slice(input interface{}) (interface{}, error) {
	values := input.([]interface{})
	output := make([]float64, len(values))
	for i, v := range values {
		switch val := v.(type) {
		case float64:
			output[i] = val
		case int:
			output[i] = float64(val)
		case int64:
			output[i] = float64(val)
		case int32:
			output[i] = float64(val)
		case int16:
			output[i] = float64(val)
		case int8:
			output[i] = float64(val)
		case uint:
			output[i] = float64(val)
		case uint64:
			output[i] = float64(val)
		case uint32:
			output[i] = float64(val)
		case uint16:
			output[i] = float64(val)
		case uint8:
			output[i] = float64(val)
		default:
			return nil, errors.New("unexpected type in array")
		}
	}
	return output, nil
}

func ConvertToStringSlice(input interface{}) (interface{}, error) {
	values := input.([]interface{})
	output := make([]string, len(values))
	for i, v := range values {
		switch val := v.(type) {
		case string:
			output[i] = val
		default:
			return nil, errors.New("unexpected type in array")
		}
	}
	return output, nil
}
