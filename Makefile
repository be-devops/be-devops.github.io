BASE_HREF=https://bedevops.edu.vn/
ROOT_DIR=dist/angular-base

deploy:
	npm i -g angular-cli-ghpages
	ng build --prod --vendor-chunk=true
	ng build --prod --base-href ${BASE_HREF}
	ng build --prod --base-href=/
	ngh --dir=${ROOT_DIR}
