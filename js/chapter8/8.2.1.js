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
        var camera = new THREE.OrthographicCamera(-5, 5, 3.75, -3.75, 0.1, 100);

        camera.position.set(25, 25, 25);
        camera.lookAt(new THREE.Vector3(0, 0, 0));
        scene.add(camera);

        // 材质
        var material = new THREE.MeshLambertMaterial({
            color: 0xff0000,
            ambient: 0xff0000  // 更改材质的ambient参数可观察物体反射环境光的能力
            // wireframe: true
        });

        // 创建长方体
        var geometry = new THREE.CubeGeometry(1, 2, 3, 2, 2, 3);
        var cube1 = new THREE.Mesh(geometry, material);
        var cube2 = new THREE.Mesh(geometry, material);
        scene.add(cube1);
        scene.add(cube2);

        // 更改网格属性
        cube1.material = new THREE.MeshLambertMaterial({
            color: 0xffff00,
            ambient: 0x00ff00
        });

        cube1.position.x = -2;
        cube2.position.x = 2;

        // light：环境光
        var light = new THREE.AmbientLight(0xffffff);
        light.position.set(10, 15, 20);
        scene.add(light);

        renderer.render(scene, camera);
    });
})(jQuery)