(function($) {
    $(function() {
        // requestAnimationFrame()方法在不同浏览器下的方法名称
        var requestAnimationFrame = window.requestAnimationFrame || // 检查浏览器支持的方法名称
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.msRequestAnimationFrame;
        window.requestAnimationFrame = requestAnimationFrame;

        var cancelAnimationFrame = window.cancelAnimationFrame || // 检查浏览器支持的方法名称
            window.mozCancelAnimationFrame ||
            window.webkitCancelAnimationFrame ||
            window.msCancelAnimationFrame;
        window.cancelAnimationFrame = cancelAnimationFrame;

        // 渲染器
        var renderer = new THREE.WebGLRenderer({
            canvas: $('#myCanvas')[0]
        });

        renderer.setClearColor(0x00000); // 渲染器背景
        renderer.shadowMap.enabled = true;

        // 场景
        var scene = new THREE.Scene();

        // 正交投影照相机
        var camera = new THREE.OrthographicCamera(-5, 5, 3.75, -3.75, 0.1, 100);

        camera.position.set(5, 15, 25);
        camera.lookAt(new THREE.Vector3(0, 0, 0));
        scene.add(camera);

        // 平面
        var plane = new THREE.Mesh(new THREE.PlaneGeometry(8, 8, 16, 16),
            new THREE.MeshLambertMaterial({
                color: 0xcccccc
            }));
        plane.rotation.x = -Math.PI / 2;
        plane.position.y = -1;
        plane.receiveShadow = true;
        scene.add(plane);

        // 创建长方体
        var cube = new THREE.Mesh(new THREE.CubeGeometry(1, 1, 1),
            new THREE.MeshLambertMaterial({
                color: 0x00ff00
            }));
        cube.position.x = 2;
        // cube.castShadow = true;
        scene.add(cube);

        // light
        var light = new THREE.SpotLight(0xffff00, 1, 100, Math.PI / 6, 25);
        light.position.set(2, 5, 3);
        light.target = cube;
        light.castShadow = true;
        scene.add(light);

        // ambient light
        var ambient = new THREE.AmbientLight(0x666666);
        scene.add(ambient);

        var alpha = 0;

        requestAnimationFrame(draw);

        function draw() {
            alpha += 0.01;
            if (alpha > Math.PI * 2) {
                alpha -= Math.PI * 2;
            }

            cube.position.set(2 * Math.cos(alpha), 0, 2 * Math.sin(alpha));

            renderer.render(scene, camera);

            requestAnimationFrame(draw);
        }
    });
})(jQuery)