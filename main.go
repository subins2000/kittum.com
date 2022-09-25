package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
	"strings"

	"github.com/labstack/echo/v4"
	v8 "rogchap.com/v8go"
)

type PageInfo struct {
	title       string
	description string
}

var jsContext *v8.Context

func makeJSContext() {
	scriptBytes, err := ioutil.ReadFile("dist/utils.js")
	if err != nil {
		log.Fatalln(err.Error())
	}

	iso := v8.NewIsolate()
	jsContext = v8.NewContext(iso)

	script := string(scriptBytes)

	// dummy module object
	jsContext.RunScript("var module = {}", "module.js")

	_, err = jsContext.RunScript(script, "index.js")
	if err != nil {
		fmt.Println(err)
	}
}

func getPageInfo(host string) PageInfo {
	jsContext.RunScript("var siteInfo = getSiteInfo('"+host+"')", "call.js")
	title, _ := jsContext.RunScript("siteInfo.title", "retrieval.js")
	description, _ := jsContext.RunScript("siteInfo.description", "retrieval.js")

	return PageInfo{title.String(), description.String()}
}

var html string

func loadHTML() {
	fileBytes, err := ioutil.ReadFile("dist/index.html")
	if err != nil {
		log.Fatalln(err.Error())
	}
	html = string(fileBytes)
}

// HandleIndex path "/" handler
func HandleIndex(c echo.Context) error {
	hostname := c.Request().Host
	pageInfo := getPageInfo(hostname)

	formattedHTML := strings.Replace(html, "${title}", pageInfo.title, 50)
	formattedHTML = strings.Replace(formattedHTML, "${description}", pageInfo.description, 50)

	return c.HTML(http.StatusOK, formattedHTML)
}

func main() {
	makeJSContext()
	loadHTML()

	e := echo.New()

	e.GET("/", HandleIndex)
	e.Static("/", "dist")

	e.Logger.Fatal(e.Start(":1323"))
}
