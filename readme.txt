Pano Painting app by Colin Freeman.  https://github.com/colinfizgig?tab=repositories
StreetView three.js loader by 
Code by @thespite · Built with three.js · Tweaking and optimisations by Mr.doob · Inspired on Paul Lewis' Create your own environment maps article.
https://www.clicktorelease.com/code/streetViewReflectionMapping/#50.09072314148827,14.393133454556278

Note the modified Three.js version used by the PanoPaintApp_v2.html called "three.colin.min.js".  It takes UV raycasting code from the latest dev release of three.js and incorporates it within three.js r.71 in order to detect UV locations with raycasting.

The goal of the application is to allow 3d spherical map painting without having to accomodate the normal equirectangular distortions needed to map images to a sphere.

Here is an example of what the viewer outputs as a png.

![alt text](https://github.com/colinfizgig/PanoPainter/blob/master/Marietta%20Square.png)

Instructions:

You can paint by tracing google streetview images as references or you can swap over to the grid view and use a grid to paint an equirectangular image.
