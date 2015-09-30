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

        // 导入纹理图像
        var materials = [];
        for (var i = 0; i < 6; i++) {
            materials.push(new THREE.MeshBasicMaterial({
                map: THREE.ImageUtils.loadTexture('../../img/' + i + '.png', {}, function() {
                    renderer.render(scene, camera);
                }),
                overdraw: true
            }));
        }

        drawCube(scene, materials); // 长方体

        // light
        var light = new THREE.DirectionalLight(0xffffff);
        light.position.set(5, 10, 5);
        scene.add(light);

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