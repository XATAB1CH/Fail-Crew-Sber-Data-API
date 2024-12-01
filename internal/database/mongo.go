package database

import (
	"context"
	"fmt"

	"github.com/XATAB1CH/Fail-Crew-Sber-Data-API/utils"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/v2/mongo"
	"go.mongodb.org/mongo-driver/v2/mongo/options"
)

func MongoConnect(dsn string) (*mongo.Client, error) {
	db, err := mongo.Connect(options.Client().ApplyURI(dsn))
	// todo: создание таблицы
	return db, err
}

func GetDNS(config utils.Config) string {
	return fmt.Sprintf("mongodb://%s:%d", config.Mongo.Host, config.Mongo.Port)
}

func InsertSource(client *mongo.Client, ctx context.Context, document interface{}) error {
	// Создание коллекции
	collection := client.Database("Fail-Crew-Sber-Data-API").Collection("sources")

	// Вставка документа в коллекцию
	_, err := collection.InsertOne(context.TODO(), document)
	if err != nil {
		return err
	}
	return nil
}

func GetDocumentByID(ctx context.Context, collection *mongo.Collection, id string) (interface{}, error) {
	// Получение документа из коллекции по id
	var result interface{}
	err := collection.FindOne(ctx, bson.M{"_id": id}).Decode(&result)
	if err != nil {
		return nil, err
	}
	return result, nil
}

func GetAllDocuments(ctx context.Context, collection *mongo.Collection) ([]interface{}, error) {
	// Получение всех документов из коллекции
	var result []interface{}
	cursor, err := collection.Find(ctx, bson.M{})
	if err != nil {
		return nil, err
	}
	defer cursor.Close(ctx)
	for cursor.Next(ctx) {
		var elem interface{}
		err := cursor.Decode(&elem)
		if err != nil {
			return nil, err
		}
		result = append(result, elem)
	}
	return result, nil
}
