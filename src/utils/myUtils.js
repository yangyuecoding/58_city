/*
 * @Description: 希望KEEP REAL
 * @Version: 版本更新中...
 * @Autor: AKAYangYi
 * @Date: 2020-07-19 01:02:40
 * @LastEditors: YangYi
 * @LastEditTime: 2020-07-19 01:04:35
 */ 
function getStyle(ele, attr) {
    if (ele.currentStyle) {
        return ele.currentStyle[attr];
    } else {
        return getComputedStyle(ele)[attr];
    }
}
//缓冲运动  根据iNow  的位置，不断重新计算速度
export function animate(ele, options, movement_mode, callback) {
    //获取元素当前的位置  初始是默位置 ，这个之不断该表
    for (var attr in options) {
        options[attr] = {
            iNow: attr === "opacity" ? 100 * getStyle(ele, attr) : parseInt(getStyle(ele, attr)),
            target: attr === "opacity" ? 100 * options[attr] : options[attr]
        }
    }
    // speed 参数可以不传，默认为5
    var speed = speed ? speed : 3;
    clearInterval(ele.timer);

    ele.timer = setInterval(function () {
        for (var attr in options) {
            // 还得判断速度的方向问题  当目标 大于 初始 即是往正方向走， 速度应该为正  否则速度为负  100 -- 200 初始位置不断 +5    200 -100    初始位置不断-5
            speed = options[attr].target > options[attr].iNow ? Math.abs(speed) : -Math.abs(speed);
            //movement_mode  控制运动的方式  swing  缓冲运动  constant  匀速运动   还得判断 大于0 和小于0 的因素  
            //大于0  随着越除越小  最后 一直到了0.0几，这个时候就需要  向上取整 ，保证每次运动都为1，否则最后很慢达到目标  小于0 一样，不过需要向下取整保证渠道的是 -1
            if (movement_mode && movement_mode === "swing") {
                speed = speed >= 0 ? Math.ceil((options[attr].target - options[attr].iNow) / 20) : Math.floor((options[attr].target - options[attr].iNow) / 20);
            }
            //判断边界 当目标 - 当前小于速度，则代表 运动结束，再推一把  
            if (Math.abs(Math.abs(options[attr].target) - Math.abs(options[attr].iNow)) <= Math.abs(speed)) {
                if (attr === "opacity") {
                    ele.style[attr] = options[attr].target / 100;
                } else {
                    ele.style[attr] = options[attr].target + "px";
                }
                //因为只有一个定时器，同时执行3个运动，最先到达的会直接关闭定时器
                //谁先到了就删除这个属性
                delete options[attr];
                //如果还能循环，我就不关闭定时器
                for (var attr in options) {
                    return false;
                }
                clearInterval(ele.timer);
                callback && callback();
            } else {
                if (attr === "opacity") {
                    options[attr].iNow += speed;
                    ele.style[attr] = options[attr].iNow / 100;
                } else {
                    options[attr].iNow += speed;
                    ele.style[attr] = options[attr].iNow + "px";
                }
            }
        }
    }, 30)
}