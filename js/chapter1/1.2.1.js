/**
 * 本demo展示了矩形、线条、圆弧、圆和文本的绘制及属性操作方法
 */
(function ($) {
    $(function () {
        // 渲染器renderer
        var renderer = new THREE.WebGLRenderer({
            canvas: $('#myCanvas')[0]
        });

        renderer.setClearColor(0x00000);  // 渲染器背景

        // 场景scene
        var scene = new THREE.Scene();

        // 照相机camera
        var camera = new THREE.PerspectiveCamera(45, 4/3, 1, 1000);

        camera.position.set(0, 0, 5);
        camera.lookAt(new THREE.Vector3(0, 0, 0));
        scene.add(camera);

        var material = new THREE.MeshBasicMaterial({
            color: 0xffffff
        });

        // 长方体cube
        var cube = new THREE.Mesh(new THREE.CubeGeometry(1, 2, 3),
            new THREE.MeshBasicMaterial({
                color: 0xff0000
            })
        );

        scene.add(cube);  // 添加物体到场景

        // 渲染render
        renderer.render(scene, camera);
    });
})(jQuery)