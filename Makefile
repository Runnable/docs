###################
# Makefile for docs
###################

help:
	@echo ""
	@echo "Usage: make <command>"
	@echo ""
	@echo "  install        Install dependencies."
	@echo "  build          Update dependencies and build project."
	@echo "  serve          Serve documentation locally."
	@echo "  start          Build & Serve Livereload."
	@echo "  deploy         Deploy to gh-pages branch."
	@echo ""

install:
	bundle install

start: build serve

build:
	bundle exec jekyll build

serve:
	bundle exec jekyll serve

deploy:
	@echo "Deploy to gh-pages"
