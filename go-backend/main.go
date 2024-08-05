package main

import (
	"log"
	"net/http"
	"os"

	router "github.com/its-dev24/MCA-E-Learn/Router"
	"github.com/joho/godotenv"
)

func main() {
	err := godotenv.Load()
	if err != nil {
		log.Fatal("Could not Load env : main.go : ", err)
	}
	port := os.Getenv("PORT")
	mux := router.Router()
	server := http.Server{
		Addr:    port,
		Handler: mux,
	}
	err = server.ListenAndServe()
	if err != nil {
		log.Fatal("Failed To Connect To Server : main.go : ", err)
	}
}
