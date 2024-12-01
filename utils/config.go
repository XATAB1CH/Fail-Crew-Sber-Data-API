package utils

import (
	"log"
	"os"

	"github.com/pelletier/go-toml"
)

type Config struct {
	DebugMode bool
	Mongo
}

type Mongo struct {
	Host     string
	Port     int
	Username string
	Password string
	Database string
}

func LoadConfig() Config {
	config := Config{
		DebugMode: true,
		Mongo: Mongo{
			Host:     "127.0.0.1",
			Port:     27017,
			Username: "admin",
			Password: "",
			Database: "",
		},
	}

	var configFile *os.File
	var data []byte
	if _, err := os.Stat("config.toml"); os.IsNotExist(err) {
		configFile, err = os.Create("config.toml")
		if err != nil {
			log.Fatalf("error creating config: %v", err)
		}

		data, err = toml.Marshal(config)
		if err != nil {
			log.Fatalf("error encoding default config: %v", err)
		}

		if _, err := configFile.Write(data); err != nil {
			log.Fatalf("error writing encoded default config: %v", err)
		}
	} else {
		configFile, err = os.Open("config.toml")
		if err != nil {
			log.Fatalf("error open config: %v", err)
		}

		_, err := configFile.Read(data)
		if err != nil {
			log.Fatalf("error reading config: %v", err)
		}

		if err := toml.Unmarshal(data, &config); err != nil {
			log.Fatalf("error decoding config: %v", err)
		}
	}

	configFile.Close()
	return config
}
