package handler

import (
	"context"
	"encoding/json"
	"net/http"
	"os"

	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
)

type JSONFile struct {
	ID      string          `json:"id"`
	Content json.RawMessage `json:"content"`
}

func GetSourcesHandler(c *gin.Context) {
	urls := []string{
		"./analytics/samples/федресурс.json",
		"./analytics/samples/ресурс_комитета_по_образованию.json",
		"./analytics/samples/объединенное_кредитное_бюро.json",
		"./analytics/samples/анкета_на_получение_кредита.json",
	}

	var jsonFiles []JSONFile

	for id, url := range urls {
		content, err := os.ReadFile(url)
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

func UploadSourceHandler(c *gin.Context) {
	collection, err := connectToMongoDB("sources")
	if err != nil {
		c.JSON(500, gin.H{"error": "Failed to connect to the database"})
		return
	}

	file, err := c.FormFile("file")
	if err != nil {
		c.JSON(400, gin.H{"error": "File not found"})
		return
	}

	data, err := json.Marshal(file)
	if err != nil {
		c.JSON(400, gin.H{"error": "Failed to convert file to JSON"})
		return
	}

	// Создаем документ для вставки
	document := bson.M{
		"filename": file.Filename,
		"data":     data,
	}

	// Вставляем документ в коллекцию
	_, err = collection.InsertOne(context.TODO(), document)
	if err != nil {
		c.JSON(500, gin.H{"error": "Failed to insert document"})
		return
	}

	c.JSON(200, gin.H{"status": "File uploaded successfully", "fileData": data})
}
