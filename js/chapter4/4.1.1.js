(function($) {
    $(function() {
        // 渲染器
        var renderer = new THREE.WebGLRenderer({
            canvas: $('#myCanvas')[0]
        });

        renderer.setClearColor(0x00000); // 渲染器背景

        // 场景
        var scene = new THREE.Scene();
        drawAxes(scene); // 绘制坐标系

        // 透视投影照相机
        var camera = new THREE.OrthographicCamera(-5, 5, 3.75, -3.75, 0.1, 100);

        camera.position.set(25, 25, 25);
        camera.lookAt(new THREE.Vector3(0, 0, 0));
        scene.add(camera);

        // Basic材质
        // var material = new THREE.MeshBasicMaterial({
        //     color: 0xffff00,
        //     wireframe: true
        // });

        // Lambert材质，打开球体模型
        // var material = new THREE.MeshLambertMaterial({
        //     color: 0xffff00,
        //     emissive: 0xff0000,  // 打开可表现太阳自发光的红色，关闭可表现地球半阴影效果
        //     // wireframe: true
        // });

        // Phong材质，打开球体模型
        // var material = new THREE.MeshPhongMaterial({
        //     // color: 0xff0000,
        //     // emissive: 0xff0000,  // 打开可表现太阳自发光的红色，关闭可表现地球半阴影效果
        //     specular: 0xff0000,  // 高光
        //     shininess: 100,     // 高光斑点，值越大，斑点越小

        //     // wireframe: true
        // });
         
        // 法向材质，打开长方体模型，更改照相机视角可发现各面颜色变化
        var material = new THREE.MeshNormalMaterial();

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
        light.position.set(-5, 10, 5);
        scene.add(light);

        // render
        renderer.render(scene, camera);
    });

    function drawCube(scene, material) {
        var cube = new THREE.Mesh(new THREE.CubeGeometry(1, 2, 3, 2, 2, 3), material);
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

    /**
     * [drawAxes 绘制坐标系函数，x轴红色，y轴绿色，z轴蓝色]
     * @param  {[Object]} scene [场景]
     */
    function drawAxes(scene) {
        // x-axis
        var xGeo = new THREE.Geometry();
        xGeo.vertices.push(new THREE.Vector3(0, 0, 0));
        xGeo.vertices.push(new THREE.Vector3(1, 0, 0));
        var xMat = new THREE.LineBasicMaterial({
            color: 0xff0000
        });
        var xAxis = new THREE.Line(xGeo, xMat);
        scene.add(xAxis);

        // y-axis
        var yGeo = new THREE.Geometry();
        yGeo.vertices.push(new THREE.Vector3(0, 0, 0));
        yGeo.vertices.push(new THREE.Vector3(0, 1, 0));
        var yMat = new THREE.LineBasicMaterial({
            color: 0x00ff00
        });
        var yAxis = new THREE.Line(yGeo, yMat);
        scene.add(yAxis);

        // z-axis
        var zGeo = new THREE.Geometry();
        zGeo.vertices.push(new THREE.Vector3(0, 0, 0));
        zGeo.vertices.push(new THREE.Vector3(0, 0, 1));
        var zMat = new THREE.LineBasicMaterial({
            color: 0x00ccff
        });
        var zAxis = new THREE.Line(zGeo, zMat);
        scene.add(zAxis);
    }
})(jQuery)