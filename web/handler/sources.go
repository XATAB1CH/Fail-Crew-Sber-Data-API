package handler

import (
	"github.com/XATAB1CH/Fail-Crew-Sber-Data-API/utils"
	"github.com/gin-gonic/gin"
)

func GetSourcesHandler(c *gin.Context) {
	var urls []string = []string{"./analytics/samples/федресурс.json", "./analytics/samples/ресурс_комитета_по_образованию.json", "./analytics/samples/объединенное_кредитное_бюро.json", "./analytics/samples/анкета_на_получение_кредита.json"}

	merged, _ := utils.MergeJSONFiles(urls)

	c.Data(200, "application/json", merged)
}
