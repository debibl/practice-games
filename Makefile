install:
	npm ci

lint:
	npx eslint .

fix:
	npx eslint --fix .

pretty:
	npx prettier --write .