/**
 * 本demo展示了矩形、线条、圆弧、圆和文本的绘制及属性操作方法
 */
(function ($) {
    $(function () {
        // 渲染器
        var renderer = new THREE.WebGLRenderer({
            canvas: $('#myCanvas')[0]
        });

        renderer.setClearColor(0x00000);  // 渲染器背景

        // 场景
        var scene = new THREE.Scene();
        // 照相机
        var camera = new THREE.PerspectiveCamera(45, 4/3, 1, 1000);

        camera.position.set(0, 0, 5);
        camera.lookAt(new THREE.Vector3(0, 0, 0));
        scene.add(camera);

        var material = new THREE.MeshBasicMaterial({
            color: 0xffffff
        });

        // plane
        var planeGeo = new THREE.PlaneGeometry(1.5, 1.5);
        var plane = new THREE.Mesh(planeGeo, material);

        plane.position.x = 1;
        scene.add(plane);

        // triangle
        var triGeo = new THREE.Geometry();

        triGeo.vertices = [
            new THREE.Vector3(0, -0.8, 0), 
            new THREE.Vector3(-2, -0.8, 0),
            new THREE.Vector3(-1, 0.8, 0)
        ];
        triGeo.faces.push(new THREE.Face3(0, 2, 1));

        var triangle = new THREE.Mesh(triGeo, material);

        scene.add(triangle);
        renderer.render(scene, camera);
    });
})(jQuery)