port=4200
m=default message
run:
	 ng serve --watch;

pid:
	sudo lsof -i :$(port);

docs:
	sudo ng build --prod --base-href  https://l4crito.github.io/cheques/
	sudo rm -rf docs/*
	sudo cp -r dist/* docs/
	git add .
	git commit -m "$(m)"
	git push
	
build:
	ng build --prod --base-href  https://l4crito.github.io/cheques/
	rm -rf docs/*
	cp -r dist/* docs/
	git add .

serve:
	http-server /docs

ic:
	ngx-pwa-icons
