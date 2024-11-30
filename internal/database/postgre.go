package database

import (
	"database/sql"
	"fmt"

	"github.com/XATAB1CH/Fail-Crew-Sber-Data-API/utils"

	_ "github.com/lib/pq"
)

func PostgreConnect(config utils.Config) (*sql.DB, error) {
	db, err := sql.Open("postgres", postgreGetDNS(config))
	// todo: создание таблицы
	return db, err
}

func postgreGetDNS(config utils.Config) string {
	return fmt.Sprintf("host=%s port=%d user=%s password=%s dbname=%s sslmode=disable",
		config.Postgres.Host, config.Postgres.Port, config.Postgres.Username, config.Postgres.Password, config.Postgres.Database)
}
