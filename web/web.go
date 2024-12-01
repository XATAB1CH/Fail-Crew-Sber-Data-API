package web

import (
	"io"
	"log"
	"time"

	"github.com/XATAB1CH/Fail-Crew-Sber-Data-API/utils"
	"github.com/XATAB1CH/Fail-Crew-Sber-Data-API/web/handler"

	"github.com/gin-contrib/cors"
	"github.com/gin-gonic/gin"
)

type Web struct {
	router *gin.Engine
}

func NewWeb(config utils.Config) *Web {
	var router *gin.Engine
	gin.SetMode(gin.ReleaseMode)

	if config.DebugMode {
		router = gin.Default()
	} else {
		gin.DefaultWriter = io.Discard
		router = gin.New()
	}

	// Настройка CORS
	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://192.168.0.106:3000"}, // Укажите здесь разрешенные источники
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Accept"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

	router.GET("/sources", handler.GetSourcesHandler)
	router.GET("/prediction", handler.GetNNPredicitionHandler)

	router.POST("/sources", handler.UploadSourceHandler)
	router.POST("/recipes", handler.UploadRecipeHandler)


	return &Web{router: router}
}

func (w *Web) Run() {

	if err := w.router.Run("192.168.0.105:443"); err != nil {
		log.Println("error running web:", err)
	}
}
