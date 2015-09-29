(function($) {
    $(function() {
        // 渲染器
        var renderer = new THREE.WebGLRenderer({
            canvas: $('#myCanvas')[0]
        });

        renderer.setClearColor(0x00000); // 渲染器背景

        // 场景
        var scene = new THREE.Scene();
        drawAxes(scene);  // 绘制坐标系

        // 透视投影照相机
        var camera = new THREE.OrthographicCamera(-2.5, 2.5, 1.875, -1.875, 0.1, 100);

        camera.position.set(5, 5, 20);
        camera.lookAt(new THREE.Vector3(1, 0, 0));
        scene.add(camera);

        var material = new THREE.MeshLambertMaterial({
            color: 0xffff00
            // , wireframe: true
        });

        var mesh = new THREE.Mesh(new THREE.TextGeometry('Hello', {
            size: 1
            , height: 1
            // , bevelEnabled: true
        }), material);
        scene.add(mesh);
        
        var light = new THREE.DirectionalLight(0xffffff);
        light.position.set(-5, 10, 5);
        scene.add(light);
        
        // render
        renderer.render(scene, camera);
    });

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