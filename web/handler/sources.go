package handler

import (
	"net/http"

	"github.com/gin-gonic/gin"
)

func GetSourcesHandler(c *gin.Context) {
	var jsonData map[string]interface{}

	// Привязываем JSON из тела запроса к переменной jsonData
	if err := c.BindJSON(&jsonData); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Возвращаем полученные данные обратно клиенту
	c.JSON(http.StatusOK, jsonData)
}
