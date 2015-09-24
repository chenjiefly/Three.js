require.config({
    baseUrl: 'js/lib',  // 默认的baseUrl为包含RequireJS的那个HTML页面的所属目录。
    paths: {
        // base: 基本功能
        base     : '../base/demo',  // 推测：如果这里配置的路径找不到，将会找默认路径下该文件是否存在
        // 库文件
        require  : 'require',
        jquery   : 'jquery-1.10.2.min',
        three    : 'three.min'
    },
    // shim用来引入不符合require.js规范的文件，
    // 如未用define()方法定义模块的，或类似jQuery插件(function(){})()这种形式的，
    // 又或是仅包含函数定义的普通文件。
    // 原本define了模块后可使用return返回一个对象，而不符合规范的模块没有暴露这个接口，
    // 因此需要在shim中定义引入文件需要暴露的接口。
    shim: {
        // property : {
        //     init: function() {  // 暴露两个及以上的接口需要使用init
        //         return {
        //             setColor: setColor,
        //             setLineWidth: setLineWidth
        //         }
        //     }
        // },
        // text : {
        //     drawText: {
        //         exports: 'drawText' // 只暴露一个接口，可使用exports，与init共存时，exports被忽略
        //     }
        // } 
    }
});