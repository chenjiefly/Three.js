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
        var camera = new THREE.OrthographicCamera(-2, 2, 1.5, -1.5, 1, 10);

        camera.position.set(4, -3, 7);
        camera.lookAt(new THREE.Vector3(0, 0, 0));
        scene.add(camera);

        // 创建正方体
        var cube = new THREE.Mesh(new THREE.CubeGeometry(1, 1, 1),
            new THREE.MeshBasicMaterial({
                color: 0xff0000,
                wireframe: true
            })
        );

        scene.add(cube);
        renderer.render(scene, camera);
    });
})(jQuery)