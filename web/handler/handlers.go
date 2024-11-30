package handler

import "github.com/XATAB1CH/Fail-Crew-Sber-Data-API/utils"

type Handler struct {
	config utils.Config
}

func NewHandler(config utils.Config) *Handler {
	return &Handler{config: config}
}
