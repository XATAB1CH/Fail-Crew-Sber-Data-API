package handler

import (
	predicition "github.com/XATAB1CH/Fail-Crew-Sber-Data-API/prediction"
	"github.com/gin-gonic/gin"
)

func GetNNPredicitionHandler(c *gin.Context) {
	
	modelPath := "analytics/samples/модель.json"

	pred := predicition.GetNNPredicition(modelPath)

	c.JSON(200, pred)
}
