(function($) {
    $(function() {
        // 渲染器
        var renderer = new THREE.WebGLRenderer({
            canvas: $('#myCanvas')[0]
        });

        renderer.setClearColor(0x00000); // 渲染器背景

        // 场景
        var scene = new THREE.Scene();

        // 正交投影照相机
        var camera = new THREE.OrthographicCamera(-10, 10, 7.5, -7.5, 0.1, 100);

        camera.position.set(0, 0, 25);
        camera.lookAt(new THREE.Vector3(0, 0, 0));
        scene.add(camera);

        // light
        var light = new THREE.PointLight(0xffffff, 1, 1000);
        light.position.set(10, 15, 20);
        scene.add(light);

        // 导入纹理图像
        var texture = THREE.ImageUtils.loadTexture('../../img/chess.png', {}, function() {
            renderer.render(scene, camera);
        });
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(4, 4);
        var material = new THREE.MeshLambertMaterial({
            map: texture
        });

        var plane = new THREE.Mesh(new THREE.PlaneGeometry(12, 12), material);
        scene.add(plane);

        // render
        renderer.render(scene, camera);
    });

    function drawCube(scene, materials) {
        var cube = new THREE.Mesh(new THREE.CubeGeometry(3, 3, 3),
            new THREE.MeshFaceMaterial(materials)
        );

        scene.add(cube);
    }
})(jQuery)