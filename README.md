###百分圆
可以根据输入的数据，自动生成百分圆。主要利用h5的canvas实现。如图
![](http://i.imgur.com/CiZNYtE.png)

代码如下

	$('#test').drawRoundRatio([23,56,98,76],{
        color:['#548B54','#00FF00','#8E388E','#B8860B'],
        hadCenterRound:true,
        centerRoundSize:0.7
    });

第一个参数为你要展现的数字，第二个参数为图形的相关设定。第二个数据说明如下：

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

这是我自己没事写的，还可以扩展出更多内容，你可以在我的代码基础上随意更改。