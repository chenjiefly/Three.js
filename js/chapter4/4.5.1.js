(function($) {
    $(function() {
        // 渲染器
        var renderer = new THREE.WebGLRenderer({
            canvas: $('#myCanvas')[0]
        });

        renderer.setClearColor(0x00000); // 渲染器背景

        // 场景
        var scene = new THREE.Scene();

        // 透视投影照相机
        var camera = new THREE.OrthographicCamera(-5, 5, 3.75, -3.75, 0.1, 100);

        camera.position.set(25, 25, 25);
        camera.lookAt(new THREE.Vector3(0, 0, 0));
        scene.add(camera);

        // 导入纹理图像
        var texture = THREE.ImageUtils.loadTexture('../../img/0.png', {}, function() {
            renderer.render(scene, camera);
        });

        // Basic材质
        // var material = new THREE.MeshBasicMaterial({
        //     color: 0xffff00,
        //     wireframe: true
        // });

        // Lambert材质，打开球体模型
        var material = new THREE.MeshLambertMaterial({
            map: texture
        });

        drawCube(scene, material);     // 长方体
        // drawPlane(scene, material);    // 平面
        // drawSphere(scene, material);    // 球体
        // drawCircle(scene, material);    // 圆形、扇形
        // drawCylinder(scene, material);  // 圆柱体、圆台
        // drawTetra(scene, material);     // 正四面体
        // drawOcta(scene, material);      // 正八面体
        // drawIcosa(scene, material);     // 正十二面体
        // drawTorus(scene, material);     // 圆环面
        // drawTorusKnot(scene, material); // 圆环节

        // light
        var light = new THREE.DirectionalLight(0xffffff);
        light.position.set(5, 10, 5);
        scene.add(light);

        // render
        renderer.render(scene, camera);
    });

    function drawCube(scene, material) {
        var cube = new THREE.Mesh(new THREE.CubeGeometry(3, 3, 3, 2, 2, 2), material);
        scene.add(cube);
    }

    function drawPlane(scene, material) {
        var plane = new THREE.Mesh(new THREE.PlaneGeometry(2, 4), material);
        scene.add(plane);
    }

    function drawSphere(scene, material) {
        // var sphere = new THREE.Mesh(new THREE.SphereGeometry(3, 18, 12,
        //     Math.PI / 6, Math.PI / 3), material);

        var sphere = new THREE.Mesh(new THREE.SphereGeometry(3, 18, 18, 
               0, Math.PI * 2, 0, Math.PI * 2), material);
       
        // var sphere = new THREE.Mesh(new THREE.SphereGeometry(3, 18, 12,
        //        Math.PI / 2, Math.PI, Math.PI / 6, Math.PI / 2), material);
        
        scene.add(sphere);
    }

    function drawCircle(scene, material) {
        var circle = new THREE.Mesh(new THREE.CircleGeometry(3, 18, Math.PI / 3, Math.PI / 3 * 4), material);
        scene.add(circle);
    }

    function drawCylinder(scene, material) {
        var cylinder = new THREE.Mesh(new THREE.CylinderGeometry(2, 2, 4, 18, 3), material);  // 标准圆柱体
        // var cylinder = new THREE.Mesh(new THREE.CylinderGeometry(2, 3, 4, 18, 3), material);  // 圆台
        // var cylinder = new THREE.Mesh(new THREE.CylinderGeometry(2, 3, 4, 18, 3, true), material);  // 无上下底的圆台
        scene.add(cylinder);
    }

    function drawTetra(scene, material) {
        var tetra = new THREE.Mesh(new THREE.TetrahedronGeometry(3), material);
        scene.add(tetra);
    }

    function drawOcta(scene, material) {
        var octa = new THREE.Mesh(new THREE.OctahedronGeometry(3), material);
        scene.add(octa);
    }

    function drawIcosa(scene, material) {
        var icosa = new THREE.Mesh(new THREE.IcosahedronGeometry(3), material);
        scene.add(icosa);
    }

    function drawTorus(scene, material) {
        var torus = new THREE.Mesh(new THREE.TorusGeometry(3, 1, 14, 18, Math.PI  * 2), material);
        scene.add(torus);
    }

    function drawTorusKnot(scene, material) {
        var torus = new THREE.Mesh(new THREE.TorusKnotGeometry(2, 0.5, 32, 8), material);
        scene.add(torus);
    }

    function drawTube(scene, material) {
        var tube = new THREE.Mesh(new THREE.TubeGeometry(1, 0.5), material);
        scene.add(tube);
    }
})(jQuery)