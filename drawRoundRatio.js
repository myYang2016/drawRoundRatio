/**
 * Created by yang on 2017/2/27.
 */
CanvasRenderingContext2D.prototype.sector = function (x, y, radius, sDeg, eDeg, color) {
    sDeg = Math.PI / 180 * sDeg;
    eDeg = Math.PI / 180 * eDeg;
    this.save();
    this.translate(x, y);
    this.beginPath();
    this.arc(0, 0, radius, sDeg, eDeg);
    this.save();
    this.rotate(eDeg);
    this.moveTo(radius, 0);
    this.lineTo(0, 0);
    this.restore();
    this.rotate(sDeg);
    this.lineTo(radius, 0);
    this.closePath();
    this.restore();
    this.fillStyle = color;
    return this;
};
(function ($) {
    $.extend($.fn, {
        /**
         *根据数据画百分圆
         * @param data
         * @param option
         * @returns {string}
         */
        drawRoundRatio: function (data, option) {
            var W = $(this).css('width').match(/\d+/);
            var H = $(this).css('height').match(/\d+/);
            var r, x, y;
            var o = {
                //可以在这里设定自己需要的颜色
                color: ['#000', '#B3EE3A', '#B22222', '#20B2AA'],
                //决定是否显示中间圆，true时显示，false时隐藏
                hadCenterRound: false,
                //设置中间圆相对直径，为0-1
                centerRoundSize: 0.5,
                //设定中间圆的颜色
                centerRoundColor:'#fff',
                //设定起始角度，为0-2
                startAngle:1.5
            };
            $.extend(o, option);
            if (W[0]==0 || H[0]==0) {
                throw('必须设定宽度和高度');
                return;
            } else {
                W = W[0];
                H = H[0];
            }
            W > H ? r = H / 2 : r = W / 2;
            x = W / 2;
            y = H / 2;

            var scale = [], total = 0;
            for (var i in data) {
                total += parseFloat(data[i]);
            }
            for (var j in data) {
                scale[j] = data[j] / total * 360;
            }
            var id = new Date().getTime();
            var myCanvas = $('<canvas id='+id+' width=' + W + ' height=' + H + '>Your browser does not support the canvas element.</canvas>');
            $(this).append(myCanvas);
            var c = $('#'+id)[0].getContext('2d');
            for (var k in scale) {
                var start = o.startAngle*180, end = o.startAngle*180;
                for (var a = 0; a <= k; a++) {
                    end += scale[a];
                    if (a != k) start += scale[a];
                }
                c.sector(x, y, r, start, end, o.color[k]).fill();
                c.sector(x,y,r,end-1,end,'#fff').fill();
            }

            if(o.hadCenterRound){
                c.save();
                c.beginPath();
                c.arc(x,y,r*o.centerRoundSize,0,2*Math.PI);
                c.closePath();
                c.restore();
                c.fillStyle = o.centerRoundColor;
                c.fill();
            }
        }
    })
})(jQuery);