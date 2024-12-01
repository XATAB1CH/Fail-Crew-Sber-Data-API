package database

import (
	"context"
	"fmt"

	"github.com/XATAB1CH/Fail-Crew-Sber-Data-API/utils"
	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/v2/mongo"
	"go.mongodb.org/mongo-driver/v2/mongo/options"
)

func MongoConnect(config utils.Config) (*mongo.Client, error) {
	db, err := mongo.Connect(options.Client().ApplyURI(mongoGetDNS(config)))
	// todo: создание таблицы
	return db, err
}

func mongoGetDNS(config utils.Config) string {
	return fmt.Sprintf("mongodb://%s:%d", config.Mongo.Host, config.Mongo.Port)
}

func InsertDocument(ctx context.Context, collection *mongo.Collection, document interface{}) error {
	// Вставка документа в коллекцию
	_, err := collection.InsertOne(ctx, document)
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
