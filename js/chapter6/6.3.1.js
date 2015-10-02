(function($) {
    var isDamp = true;  // 是否阻尼运动

    $(function() {
        // requestAnimationFrame()方法在不同浏览器下的方法名称
        var requestAnimationFrame = window.requestAnimationFrame || // 检查浏览器支持的方法名称
            window.mozRequestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.msRequestAnimationFrame;
        window.requestAnimationFrame = requestAnimationFrame;

        var cancelAnimationFrame = window.cancelAnimationFrame || // 检查浏览器支持的方法名称
            window.mozCancelAnimationFrame ||
            window.webkitCancelAnimationFrame ||
            window.msCancelAnimationFrame;
        window.cancelAnimationFrame = cancelAnimationFrame;

        // 渲染器
        var renderer = new THREE.WebGLRenderer({
            canvas: $('#myCanvas')[0]
        });

        renderer.setClearColor(0x00000); // 渲染器背景

        // 场景
        var scene = new THREE.Scene();

        // 正交投影照相机
        var camera = new THREE.PerspectiveCamera(45, 400 / 300, 1, 100);//OrthographicCamera(-5, 5, 3.75, -3.75, 0.1, 100);

        camera.position.set(5, 3, 8);
        camera.lookAt(new THREE.Vector3(0, 0, 0));
        scene.add(camera);

        // 材质
        var material = new THREE.MeshLambertMaterial({
            color: 0xffff00
        });

        // 创建球体
        var ballMesh = null;
        var ballRadius = 0.5;
        ballMesh = new THREE.Mesh(new THREE.SphereGeometry(ballRadius, 16, 8),
            material
        );
        ballMesh.position.y = ballRadius;
        scene.add(ballMesh);

        // 创建平面
        var texture = THREE.ImageUtils.loadTexture('../../img/chess.png', {}, function() {
            renderer.render(scene, camera);
        });
        texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
        texture.repeat.set(4, 4);
        var plane = new THREE.Mesh(new THREE.PlaneGeometry(5, 5),
            new THREE.MeshLambertMaterial({
                map: texture
            }));
        plane.rotation.x = -Math.PI / 2;
        scene.add(plane);

        // light
        var light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(10, 15, 20);
        scene.add(light);

        /***************** animation *****************/
        var id;
        var v = 0; // 初速度
        var a = 0.01; // 加速度
        var isMoving = false;
        var initHeight = 4;
        var maxHeight = 4;

        var t = 0;  // 虚拟时间
        var v0 = 0;  // 每次反弹起始速度
        var isDown = true; // 标记是否向下
        var f = 0.01;  // 阻尼

        // 绑定事件
        $('button.dropBtn').on('click', function() {
            isMoving = true;
            ballMesh.position.y = initHeight;
            maxHeight = initHeight;
            v = 0;
            t = 0;
            isDown = true;
            isMoving = true;
        });

        id = requestAnimationFrame(draw); // 开始执行动画

        function draw() {
            if (isMoving) {
                if (isDown) {  // 向下自由落体运动
                    ballMesh.position.y = maxHeight - a * t * t / 2;
                    v = a * t;

                    if (isDamp) {  // 加上是阻尼运动，去掉是不损失能量的理想运动
                        v -= f;
                    }
                    
                    v0 = v + a;  // 即v0=a*(t+1) 下一时刻的速度
                } else {  // 向上反弹运动
                    ballMesh.position.y = v0 * t - a * t * t / 2;
                    v = v0 - a * t;
                    maxHeight = ballMesh.position.y;
                }

                // 到达底部
                if (isDown && (ballMesh.position.y <= ballRadius)) {
                    isDown = false;
                    t = 0;
                }

                // 到达顶部
                if ( !isDown && (v < 0)) {
                    isDown = true;
                    t = 0;
                }

                // 接近静止状态
                if ((ballMesh.position.y <= ballRadius) && (Math.abs(v) <= 0.01)) {
                    ballMesh.position.y = ballRadius;
                    isMoving = false;
                }
                t += 1;
            }

            renderer.render(scene, camera);

            id = requestAnimationFrame(draw);
        }
    });
})(jQuery)