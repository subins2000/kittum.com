package main

import (
	"io"
	"net/http"
	"text/template"

	"github.com/labstack/echo/v4"
)

type TemplateRegistry struct {
	templates *template.Template
}

func (t *TemplateRegistry) Render(w io.Writer, name string, data interface{}, c echo.Context) error {
	return t.templates.ExecuteTemplate(w, name, data)
}

func Index(c echo.Context) error {
	return c.Render(http.StatusOK, "index.html", map[string]interface{}{
		"title": "HOME",
	})
}

func main() {
	e := echo.New()

	e.Renderer = &TemplateRegistry{
		templates: template.Must(template.ParseGlob("dist/*.html")),
	}

	e.GET("/", Index)
	e.Static("/", "dist")

	e.Logger.Fatal(e.Start(":1323"))
}
