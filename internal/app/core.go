package app

import (
	"context"
	"database/sql"
	"log"
	"sync"

	"github.com/XATAB1CH/Fail-Crew-Sber-Data-API/internal/database"
	"github.com/XATAB1CH/Fail-Crew-Sber-Data-API/utils"
	"github.com/XATAB1CH/Fail-Crew-Sber-Data-API/web"
	"go.mongodb.org/mongo-driver/v2/mongo"
)

type Core struct {
	*web.Web
	Postgre *sql.DB
	Mongo   *mongo.Client
	ctx     context.Context
	wg      *sync.WaitGroup
}

func NewCore(config utils.Config, ctx context.Context, wg *sync.WaitGroup) (*Core, error) { // инициализация ядра
	PostgreSQL, err := database.PostgreConnect(config) // подключение к БД PostgreSQL
	if err != nil {
		return nil, err
	}

	MongoDB, err := database.MongoConnect(config) // подключение к БД MongoDB
	if err != nil {
		return nil, err
	}

	web := web.NewWeb(config) // инициализация web сервера

	return &Core{
		Web:     web,
		Postgre: PostgreSQL,
		Mongo:   MongoDB,
		ctx:     ctx,
		wg:      wg,
	}, nil
}

func (core *Core) Run() { // запуск ядра
	go core.Web.Run()

	go core.stop()
	log.Println("Core started")
}

func (core *Core) stop() { // остановка ядра
	<-core.ctx.Done()

	err := core.Postgre.Close() // закрытие postgresql
	if err != nil {
		log.Println("error closing postgresql: ", err)
	}

	if err := core.Mongo.Disconnect(core.ctx); err != nil { // закрытие mongodb
		log.Println("error closing mongodb: ", err)
	}

	core.wg.Done() // разблокировка WaitGroup для завершения работы
}