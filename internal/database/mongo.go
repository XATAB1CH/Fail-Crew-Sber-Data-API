package database

import (
	"fmt"

	"github.com/XATAB1CH/Fail-Crew-Sber-Data-API/utils"
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
