package web

import (
	"io"
	"log"

	"github.com/XATAB1CH/Fail-Crew-Sber-Data-API/utils"
	"github.com/XATAB1CH/Fail-Crew-Sber-Data-API/web/handler"

	"github.com/gin-gonic/gin"
)

type Web struct {
	router  *gin.Engine
	handler *handler.Handler
}

func NewWeb(config utils.Config) *Web {
	var router *gin.Engine
	gin.SetMode(gin.ReleaseMode)

	serverHandler := handler.NewHandler(config)

	if config.DebugMode {
		router = gin.Default()
	} else {
		gin.DefaultWriter = io.Discard
		router = gin.New()
	}

	// router.GET("/", serverHandler.IndexHandler)
	// router.GET("/auth", serverHandler.AuthHandler)
	// router.Static("/js", "./game/js")

	return &Web{router: router, handler: serverHandler}
}

func (w *Web) Run() {
	if err := w.router.Run(":443"); err != nil {
		log.Println("error running web:", err)
	}
}
