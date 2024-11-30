package main

import (
	"bufio"
	"context"
	"log"
	"os"
	"os/signal"
	"github.com/XATAB1CH/Fail-Crew-Sber-Data-API/internal/app"
	"github.com/XATAB1CH/Fail-Crew-Sber-Data-API/utils"
	"sync"
)

func main() {
	config := utils.LoadConfig() // загружаем конфигурацию

	ctx, cancel := context.WithCancel(context.Background()) // создаем контекст
	var wg *sync.WaitGroup = new(sync.WaitGroup)            // создаем WaitGroup
	wg.Add(1)

	core, err := app.NewCore(config, ctx, wg) // инициализируем ядро приложения
	if err != nil {
		panic(err)
	}

	core.Run() // запускаем ядро приложения

	defer func(c context.CancelFunc) { // при внезапном завершении приложения дожидаемся завершения WaitGroup
		if err := recover(); err != nil {
			log.Println("PANIC:", err)
			cancel()
			wg.Wait()
		}
	}(cancel)

	go func() { // при нажатии Enter
		bufio.NewReader(os.Stdin).ReadBytes('\n')
		cancel()
	}()

	go func() { // при нажатии Ctrl+C
		signalCtrlC := make(chan os.Signal, 1)
		signal.Notify(signalCtrlC, os.Interrupt)

		<-signalCtrlC
		cancel()
	}()

	wg.Wait() // ожидаем завершения WaitGroup
}
