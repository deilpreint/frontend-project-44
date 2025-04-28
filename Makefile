.PHONY: brain-games publish install

brain-games-alternative:
	./bin/brain-games.js

brain-games-original:
	bin/brain-games.js

publish:
	npm publish --dry-run

install:
	npm link