## CSS兼容

### 如何定位错误

1. css单词拼错了;css值赋值错了

2. 通过背景颜：如果有颜色，代表物体是有样式的

3. 通过代码颜色

###  元素高度为0

1. 样式没有设置成功

2. 父元素没有高度，子元素浮动会导致父元素没有高度

3. 父元素没有高度，资源色设置绝对定位会导致父元素没有高度


###  margin叠加、嵌套

1.  当两个元素为兄弟关系的时候：一个有下边距，一个有上边距，那么这两个间距中，较大的保留，较小的消失

2.  对内部元素设置margin-top时，内部对于外部的元素并没有产生一个margin值，而是外部元素相对于上面的元素产生了一个margin值

###  图片下间距

1.  在任何情况下，图片下面都会有三个像素的间距

2.  解决方法：

    ```css
        display:block || vertical-align: top/middle/bottom;
    ```

### inline-block

1. inline-block在ie6和ie7下无效

2. 解决方法：

   ```css
    *display:inline;
    *zoom:1;
   ```

### 浮动

1. ie6同方向的浮动+margin会产生双边距

2. 解决方法：

   ```css
    *display:inline;
   ```

3. ie6下li里面有元素是浮动的话，li就会产生莫名的下边距

4. 解决办法：

   ```css
   vertical-align: top/middle/bottom
   ```

### input问题

1. 在ie8下，光标上下不居中

   line-height:height;

2. 在ie高版本下的特殊展示问题

   -ms-clear   -ms-reveal

3. 在ie6下，背景脱离

   把背景加给父级元素，包裹一个input

4. 在ie6中，padding会无效的问题

   把背景加给父级元素，包裹一个input

### css hack

1. _针对ie6

2. ＊针对ie7

3. \0针对ie8以上（包含8，9，10）

4. \9针对ie6-ie10



### 条件注释语句

1. <--[if IE6]--> <![endif]-->

   ​


### vertical-align

1. 只有inline或者inline-block元素才可以使用


2. 不能有任何的其它状态（float、positon:absolute、fixed）
3. 对齐规则：
   1. 默认以基线对齐：两个都有内容，以文字下的基线对齐；有一个没有内容，没有内容的元素的底部会对齐到有元素内容的基线。
   2. 使用vertical-align对齐：两个元素对齐时，两个元素会互相参考；多个元素对齐时，使用一个元素作为参考线对齐















