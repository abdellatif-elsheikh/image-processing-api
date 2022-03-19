# image-processing-api

## scripts
- to start the server: npm run start / yarn start
- to compile typescript: npm run build / yarn build
- to test: npm run test / yarn test
- to use prettier to format the code: npm run format / yarn format
- to lint: npm run lint / yarn lint
- to fix: npm run fix / yarn fix

## how to use
start the server and then go to the localhost:3000 or follow the link from cmd

### how to see original images
go to http://localhost:3000/api/image?image_name=
and then type the name of any available image from names below
**bugatti**
**city**
**coffee**
**desk**
**porsche**
**snow**

### how to resize the image
after following the previous link you can now chain the width and height queries to image name query with **_&_** symbol
example: http://localhost:3000/api/image?image_name=snow&width=200&height=200
> if you leave both of them or one of them blank the original image will display instead of resizing
> you cant pass a value of zero or less

### where are the original images
they are in images/main

### where are thumbnails saved
after resizing the first image a new dir in **images** folder will be shown with name of thumbnails
inside this folder you will see all resized images

I hope an excellent experience for you
