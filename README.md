## Three.js学习
### 一、学习教材：Three.js入门指南
### 二、工程内容：书中的例子
### 三、文件组织：按照章节顺序
### 四、内容
#### 1、three.js程序基本组成
* 一个典型的 Three.js 程序至少要包括渲染器(Renderer)、场景(Scene)、照相机 (Camera),以及在场景中创建的物体。
* 渲染器
    * 渲染器将和 Canvas 元素进行绑定
    * 绑定已存在的Canvas元素：
    
    ```
    var renderer = new THREE.WebGLRenderer({
        canvas: document.getElementById('mainCanvas')
    });
    ```
    * 渲染器生成Canvas元素：
    
    ```
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(400, 300); 
    document.getElementsByTagName('body')[0].appendChild(renderer.domElement);
    ```
    * 设置画面背景色：
    
    ```
    renderer.setClearColor(0x000000)
    ```
* 场景
    * 在Three.js中添加的**物体都是添加到场景中的**,因此它相当于一个大容器。一般说,场景 来没有很复杂的操作,在程序最开始的时候进行实例化,然后将物体添加到场景中即可。
    * 生成场景：
    
    ```
    var scene = new THREE.Scene();
    ```
* 照相机
    * three.js坐标系：右手坐标系
        * x（正向水平向右），y（正向垂直向上），z（垂直于屏幕向电脑屏幕内侧）
    * 透视投影照相机：
    
    ``` 
    var camera = new THREE.PerspectiveCamera(45, 4 / 3, 1, 1000); 
    camera.position.set(0, 0, 5);
    scene.add(camera);
    ```
* 几何学物体
    * 单位长度1
    
      这里的长度是在物体坐标系中的,其单位与屏幕分辨 率等无关,简单地说,它就是一个虚拟空间的坐标系, 代表多少并没有实际的意义,而 重要的是相对长度。

    * 长方体

    ```
    // 创建一个 x、y、z 方向长度分别为1、2、3的长方体,并将其设置为红色
    var cube = new THREE.Mesh(new THREE.CubeGeometry(1, 2, 3), 
        new THREE.MeshBasicMaterial({
            color: 0xff0000 
        })
    );
    scene.add(cube);  // 添加长方体到场景中
    ```
* 渲染
    * 在定义了场景中的物体,设置好的照相机之后,渲染器就知道如何渲染出二维的结果

    ```
    renderer.render(scene, camera);  // 调用渲染器的渲染函数,就能使其渲染一次
    ```

#### 2、照相机
* 照相机就是这样一个抽象,它定义了三维空间到二维屏幕 的投影方式,用“照相机”这样一个类比,可以使我们直观地理解这一投影方式。