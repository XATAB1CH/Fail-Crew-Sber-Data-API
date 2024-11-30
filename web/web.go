package web

import (
	"io"
	"log"
	"net/http"
	"time"

	"github.com/XATAB1CH/Fail-Crew-Sber-Data-API/utils"
	"github.com/XATAB1CH/Fail-Crew-Sber-Data-API/web/handler"

	"github.com/gin-contrib/cors"
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

	// Настройка CORS
	router.Use(cors.New(cors.Config{
		AllowOrigins:     []string{"http://localhost:3000"}, // Укажите здесь разрешенные источники
		AllowMethods:     []string{"GET", "POST", "PUT", "DELETE"},
		AllowHeaders:     []string{"Origin", "Content-Type", "Accept"},
		ExposeHeaders:    []string{"Content-Length"},
		AllowCredentials: true,
		MaxAge:           12 * time.Hour,
	}))

	router.GET("/sources", func(c *gin.Context) {
		var jsonData map[string]interface{}

		// Привязываем JSON из тела запроса к переменной jsonData
		if err := c.BindJSON(&jsonData); err != nil {
			c.JSON(http.StatusOK, gin.H{"correct": "кайф"})
			return
		}

		// Возвращаем полученные данные обратно клиенту
		c.JSON(http.StatusOK, jsonData)
	})
	// router.GET("/funcs", serverHandler.GetFuncsHandler)

	// router.POST("/recipes", serverHandler.GetNNPredicition)
	// router.POST("/save-recipe", serverHandler.SaveRecipe)
	// router.POST("/save-source", serverHandler.SaveSource)

	return &Web{router: router, handler: serverHandler}
}

func (w *Web) Run() {

	if err := w.router.Run("192.168.0.105:443"); err != nil {
		log.Println("error running web:", err)
	}
}
