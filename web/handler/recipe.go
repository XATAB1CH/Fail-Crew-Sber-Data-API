package handler

import (
	"context"
	"encoding/json"
	"fmt"
	"time"

	"github.com/XATAB1CH/Fail-Crew-Sber-Data-API/manager"
	"github.com/gin-gonic/gin"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"
)

func UploadRecipeHandler(c *gin.Context) {
	collection, err := connectToMongoDB("sources")
	if err != nil {
		c.JSON(500, gin.H{"error": "Failed to connect to the database"})
		return
	}

	var recipe []manager.IngredientJSON

	if err := c.BindJSON(&recipe); err != nil {
		fmt.Println(err)
	}

	bytes, _ := json.Marshal(recipe)
	rec := manager.ReadRecipyFromJson(bytes)
	r := manager.JsonDataToRecipy(rec)
	manager.Man.GiveRecipy(&manager.Recipy{1, r})

	// Создаем документ для вставки
	document := bson.M{
		"data": recipe,
	}

	// Вставляем документ в коллекцию
	_, err = collection.InsertOne(context.TODO(), document)
	if err != nil {
		c.JSON(500, gin.H{"error": "Failed to insert document"})
		return
	}

	var result []manager.Ingredient

	for i := 0; i < 5; i++ {
		res := manager.Man.GetResult()
		time.Sleep(1 * time.Second)
		if len(res) > 0 {
			for _, report := range res {
				for _, ing := range report.Data {
					result = append(result, ing)
				}
			}
		}
	}
	c.JSON(200, gin.H{"status": "File uploaded successfully", "reciepteResult": result})
	c.JSON(200, gin.H{"status": "File uploaded successfully", "reciepte": recipe})
}

func connectToMongoDB(collection string) (*mongo.Collection, error) {
	clientOptions := options.Client().ApplyURI("mongodb://localhost:27017/")
	client, err := mongo.Connect(context.TODO(), clientOptions)
	if err != nil {
		return nil, err
	}

	err = client.Ping(context.TODO(), nil)
	if err != nil {
		return nil, err
	}

	collect := client.Database("Fail-Crew-Sber-Data-API").Collection(collection)
	return collect, nil
}
