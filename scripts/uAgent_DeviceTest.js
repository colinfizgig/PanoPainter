// detect the playback device in order to setup new controls using the device accelerometer as the controller
	var uAgent = navigator.userAgent.toLowerCase();
	
	// check the uAgent text returned by the navigator.userAgent call to see which device is rendering this app.
	function uAgentTest() {
		/*
		// if the devices have a gyroscope then use Device orientationConttrols.... should be able to test for something
		// specific to Argon here as well, like version of webkit or some string Argon can pass to uAgent.
		*/
		
		if(/android|webos|iphone|ipad/i.test(uAgent)) {
				
			if(uAgent.search("ipad") > -1){
				//  device orientation controls provided by Three.js that work in Safari or any device with a gyroscope
				//  controls = new THREE.DeviceOrientationControls( camera );
				//  width = screen.width;
				//  height = screen.height;
				return "ipad";
			}

			if(uAgent.search("iphone") > -1){
				return "iphone";
			}


			if(uAgent.search("android") > -1){
				return "android";
			}


			if(uAgent.search("webos") > -1){
				return "webos";
			}
		
		// if the device doesn't have a gyroscope, ie a computer then use the standard OrbitControls
		} else {
			// standard orbit controls with mouse or touch for computers
			// controls = new THREE.OrbitControls(camera);
			// controls.noPan = true;
			// controls.noZoom = true; 
			// controls.autoRotate = true;
			// controls.autoRotateSpeed = 0.0;
			// width = window.innerWidth;
			// height = window.innerHeight;
			
			return "computer browser"
		}
	}
	
	// run the device test
	// uAgentTest();