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

        camera.position.set(20, 20, 25);
        camera.lookAt(new THREE.Vector3(0, 0, 0));
        scene.add(camera);

        var material = new THREE.MeshBasicMaterial({  // MeshLambertMaterial
            color: 0xffff00
            , wireframe: true
        });

        // 初始化几何形状
        var geometry = new THREE.Geometry();
        // 设置顶点位置
        // 顶部4顶点
        geometry.vertices.push(new THREE.Vector3(-1, 2, -1));
        geometry.vertices.push(new THREE.Vector3(1, 2, -1));
        geometry.vertices.push(new THREE.Vector3(1, 2, 1));
        geometry.vertices.push(new THREE.Vector3(-1, 2, 1)); // 底部4顶点
        geometry.vertices.push(new THREE.Vector3(-2, 0, -2));
        geometry.vertices.push(new THREE.Vector3(2, 0, -2));
        geometry.vertices.push(new THREE.Vector3(2, 0, 2));
        geometry.vertices.push(new THREE.Vector3(-2, 0, 2));
        // 设置顶点连接情况
        // 顶面
        face4(geometry, 0, 1, 2, 3);
        // 底面
        face4(geometry, 4, 5, 6, 7);
        // 四个侧面
        face4(geometry, 0, 1, 5, 4);
        face4(geometry, 1, 2, 6, 5);
        face4(geometry, 2, 3, 7, 6);
        face4(geometry, 3, 0, 4, 7);

        var cylinder = new THREE.Mesh(geometry, material);
        scene.add(cylinder);

        // 灯光
        // var light = new THREE.DirectionalLight(0xffffff);
        // light.position.set(-5, 10, 5);
        // scene.add(light);

        // render
        renderer.render(scene, camera);
    });
    
    /**
     * [face4 创建四个顶点的平面]
     * @param  {[Object]} geometry [自定义形状对象]
     * @param  {[Number]} dot1     [平面端点1]
     * @param  {[Number]} dot2     [平面端点2]
     * @param  {[Number]} dot3     [平面端点3]
     * @param  {[Number]} dot4     [平面端点4]
     */
    function face4(geometry, dot1, dot2, dot3, dot4) {
        geometry.faces.push(new THREE.Face3(dot1, dot2, dot3));
        geometry.faces.push(new THREE.Face3(dot2, dot3, dot4));
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