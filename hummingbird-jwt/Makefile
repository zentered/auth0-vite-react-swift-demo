#!make
MAKEFLAGS += --silent
include .env
export $(shell sed 's/=.*//' .env)

start:
	swift run Server

build:
	swift build -c release

install:
	swift package resolve