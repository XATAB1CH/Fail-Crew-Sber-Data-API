package handler

import (
	"encoding/json"
	"io/ioutil"
	"net/http"

	"github.com/gin-gonic/gin"
)

type JSONFile struct {
	ID      string `json:"id"`
	Content json.RawMessage `json:"content"`
}

func GetSourcesHandler(c *gin.Context, ) {
	urls := []string{
		"./analytics/samples/федресурс.json",
		"./analytics/samples/ресурс_комитета_по_образованию.json",
		"./analytics/samples/объединенное_кредитное_бюро.json",
		"./analytics/samples/анкета_на_получение_кредита.json",
	}

	var jsonFiles []JSONFile

	for id, url := range urls {
		content, err := ioutil.ReadFile(url)
		if err != nil {
			c.JSON(http.StatusInternalServerError, gin.H{"error": err.Error()})
			return
		}

		jsonFiles = append(jsonFiles, JSONFile{
			ID:      string(id),
			Content: content,
		})
	}

	c.JSON(http.StatusOK, jsonFiles)
}
