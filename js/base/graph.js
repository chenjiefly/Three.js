/**
 * 绘制基本图形模块
 * 绘制矩形、直线、圆弧和圆
 */
define('graph', [], function() {
    return {
        /**
         * [drawRect 绘制矩形函数]
         * @param  {[Object]} context      [canvas绘图上下文]
         * @param  {[Number]} cfg.x        [矩形左上角原点横坐标]
         * @param  {[Number]} cfg.x        [矩形左上角原点纵坐标]
         * @param  {[Number]} cfg.width    [矩形宽度]
         * @param  {[Number]} cfg.height   [矩形高度]
         * @param  {[Booean]} cfg.isStroke [是否空心]
         */
        drawRect: function (context, cfg) {
            if (cfg.isStroke) {
                // 绘制矩形边框
                // param: x, y, width, height
                context.strokeRect(cfg.x, cfg.y, cfg.width, cfg.height);
            } else {
                // 绘制实心矩形
                // param: x, y, width, height
                context.fillRect(cfg.x, cfg.y, cfg.width, cfg.height);
            }
        },
        /**
         * [drawRect 擦除矩形函数]
         * @param  {[Object]} context      [canvas绘图上下文]
         * @param  {[Number]} cfg.x        [擦除矩形区域左上角原点横坐标]
         * @param  {[Number]} cfg.x        [擦除矩形区域左上角原点纵坐标]
         * @param  {[Number]} cfg.width    [擦除矩形区域宽度]
         * @param  {[Number]} cfg.height   [擦除矩形区域高度]
         */
        clearRect: function (context, cfg) {
            context.clearRect(cfg.x, cfg.y, cfg.width, cfg.height);
        },

        /**
         * [drawLine 绘制直线函数]
         * @param  {[Object]} context      [canvas绘图上下文]
         * @param  {[Number]} cfg.x1       [绘制直线的起点x坐标]
         * @param  {[Number]} cfg.y1       [绘制直线的起点y坐标]
         * @param  {[Number]} cfg.x2       [绘制直线的终点x坐标]
         * @param  {[Number]} cfg.y2       [绘制直线的终点y坐标]
         * @param  {[Booean]} cfg.isStroke [是否空心]
         */
        drawLine: function (context, cfg) {
            context.beginPath();  // 开始路径
            context.moveTo(cfg.x1, cfg.y1);  // 设置路径原点
            context.lineTo(cfg.x2, cfg.y2);  // 设置路径终点
            context.closePath();  // 结束路径
            context.stroke();     // 绘制直线路径
        },

        /**
         * [drawArc 绘制圆弧方法]
         * @param  {[Object]} context           [canvas绘图上下文]
         * @param  {[Number]} cfg.x             [圆心横坐标]
         * @param  {[Number]} cfg.y             [圆心纵坐标]
         * @param  {[Number]} cfg.radius        [半径]
         * @param  {[Number]} cfg.startAngle    [开始角度]
         * @param  {[Number]} cfg.endAngle      [结束角度]
         * @param  {[Booean]} cfg.anticlockwise [是否逆时针]
         * @param  {[Booean]} cfg.isStroke      [是否空心]
         */
        drawArc: function (context, cfg) {
            context.beginPath();  // 开始路径
            context.arc(cfg.x, cfg.y, cfg.radius, cfg.startAngle, cfg.endAngle, cfg.anticlockwise);  // 设置圆弧路径
            context.closePath();  // 结束路径

            if (cfg.isStroke) {
                context.stroke();  // 绘制空心路径
            } else {
                context.fill();  // 绘制实心路径
            }
        },

        /**
         * [drawCircle 绘制圆形函数]
         * @param  {[Object]} context           [canvas绘图上下文]
         * @param  {[Number]} cfg.x             [圆心横坐标]
         * @param  {[Number]} cfg.y             [圆心纵坐标]
         * @param  {[Number]} cfg.radius        [半径]
         * @param  {[Booean]} cfg.isStroke      [是否空心]
         */
        drawCircle: function (context, cfg) {
            this.drawArc(context, {  // 绘制圆形
                x: cfg.x, 
                y: cfg.y, 
                isStroke: cfg.isStroke,
                radius: cfg.radius, 
                startAngle: 0, 
                endAngle: 2 * Math.PI, 
                anticlockwise: false
            });
        }
    }
});