build:
	npx vite build

type:
	npx vue-tsc --noEmit $(WATCH)

type-watch: WATCH = --watch
type-watch: type

dev:
	npx vite

test:
	npx vitest

devpod:
	devpod up .
	devpod ssh superkube-vue

ssh:
	ssh superkube-vue.devpod

docs-dev:
	npx vitepress dev docs
