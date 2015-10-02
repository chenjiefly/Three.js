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

        // 正交投影照相机
        var camera = new THREE.OrthographicCamera(-5, 5, 3.75, -3.75, 0.1, 100);

        camera.position.set(25, 25, 25);
        camera.lookAt(new THREE.Vector3(0, 0, 0));
        scene.add(camera);

        // 材质
        var material = new THREE.MeshLambertMaterial({
            color: 0xffff00,
            wireframe: true
        });

        // 创建长方体
        var geometry = new THREE.CubeGeometry(1, 2, 3, 2, 2, 3);
        var cube = new THREE.Mesh(geometry, material);
        scene.add(cube);

        // 更改网格属性
        cube.material = new THREE.MeshLambertMaterial({
            color: 0xffff00
        });

        // light：环境光
        var light = new THREE.AmbientLight(0xffffff);  // 更改参数可观察物体反射环境光的能力
        light.position.set(10, 15, 20);
        scene.add(light);

        /***************** animation *****************/
        var id;

        // 绑定事件
        $('button').on('click', function() {
            var self = $(this);

            if (!id && self.hasClass('startBtn')) {
                // id = setInterval(drawByInterval, 20);
                id = requestAnimationFrame(drawByRequestAnimationFrame);
            } else if (id && self.hasClass('stopBtn')) {
                // clearInterval(id);
                cancelAnimationFrame(id);
                id = null;
            }
        })

        // setInterval()方法实现
        // id = setInterval(drawByInterval, 20);  // 开始执行动画

        // function drawByInterval() {
        //     cube.rotation.x = (cube.rotation.x + 0.01) % (Math.PI * 2);
        //     cube.rotation.y = (cube.rotation.y + 0.01) % (Math.PI * 2);
        //     renderer.render(scene, camera);
        // }

        // requestAnimationFrame()方法实现
        var requestAnimationFrame = window.requestAnimationFrame ||   // 检查浏览器支持的方法名称
                                    window.mozRequestAnimationFrame || 
                                    window.webkitRequestAnimationFrame || 
                                    window.msRequestAnimationFrame;
        window.requestAnimationFrame = requestAnimationFrame;

        var cancelAnimationFrame = window.cancelAnimationFrame ||   // 检查浏览器支持的方法名称
                                    window.mozCancelAnimationFrame || 
                                    window.webkitCancelAnimationFrame || 
                                    window.msCancelAnimationFrame;
        window.cancelAnimationFrame = cancelAnimationFrame;

        id = requestAnimationFrame(drawByRequestAnimationFrame);  // 开始执行动画

        function drawByRequestAnimationFrame() {
            cube.rotation.x = (cube.rotation.x + 0.01) % (Math.PI * 2);
            cube.rotation.y = (cube.rotation.y + 0.01) % (Math.PI * 2);
            renderer.render(scene, camera);

            id = requestAnimationFrame(drawByRequestAnimationFrame);
        }
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