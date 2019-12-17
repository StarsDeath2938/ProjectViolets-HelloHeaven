# Less Un-Offical Docs -- MadeByViolet

***Less.js*** is an extension modification of ***Cascading Style Sheets***. It's EASY to geting start.

It could work on both Node and Browser.

------

## Runtime Environment

> By using Command Line via Node,You could access less.js and Download it. Less.js both works on third-party tools,and it widely used on Browser.
>
> **If you expect to use LESS on Browser Only, Get It On Online Server are Highly recommand. LESS might be pre-loaded by other website —— While these visitor are getting access your website,the improvement of loading speed might be Effective.*
>
> 通过在Node中使用命令可以访问并下载LESS文件。LESS通常被用于浏览器，但它也同样支持第三方工具。
>
> **如果你仅仅只是希望在浏览器端使用Less，那么高度推荐从其他服务器上调用它。在访问其他网页时，LESS文件可能已经被预加载了 —— 当这些用户访问你的网站时，这可能会大幅提升加载速度。*

>  ```html
>  <script src="//cdnjs.cloudflare.com/ajax/libs/less.js/2.5.3/less.min.js"></script>
>```

------

## Getting Start

Once you had install less.js form Node Package Manager,it can be invoke in Command Line.

```nginx
$ lessc styles.less
```

The re-compile css file can be found in ***/stdout*.** If you are aiming to compile an exist file,you can redirect outputs in Command Line.

```nginx
$ lessc styles.less > styles.css
```

-------

### Variables

> Origin Website have poor explaination HERE. 	*~~so I refused to add an explaination here.~~*

> Well,seems self-explanatory.It's very common in other language.
>
> *顾 名 思 义*
>
> ```less
> @var_name: var_value;	/*--- Define a Variable ---*/
> ```

-------

### Mixins

> It work in the same way as variables,must be defined by *Exist Element*.
>
> Includes bunch of CSS Style properties,Set including rules to other element.
>
> 混合器的运作原理与变量相同，必须由已被定义的样式定义。
>
> 混合器能够将其所包含的样式定义给其他元素。

> ```css
> .Mix {
> 	border-color: #4b4b4b;
>     border-radius: 25%;
> }
> ```
>
> An existing Elements.
>
> 一个已经被定义的样式。
>
> ```less
> .container {
> 	color: #cdcdcd;
> 	.Mix;	
>    /*--- Applied Including Style to .cotainer ---*/
>    /*--- 将.Mix所包含的样式应用至.container ---*/ 
> }
> ```
>
> As a Result,the ***.container*** will be rendered as this one:
>
> 最终，***.container*** 将会以此样式渲染。
>
> ```css
> .container {
> 	color: #cdcdcd;
>     
>    	/*--- From .Mix ---*/ 
> 	border-color: #4b4b4b;
>     border-radius: 25%;
> }
> ```

------

### Nested rules

> Less give you the ability to simplify the form of nesting,instead of writing so much times of parent level's name.
>
> Less提供了简化嵌套关系的格式，代替了需要多次书写父级元素名称的原有格式。

> ```css
> .outer {
>  background-color: #4b4b4b;
> }
> /*--- Father Level ---*/
> 
> .outer > .child01 {
>  color: #afafaf;
> }
> 
> .outer > .child02 {
>  color: #cdcdcd;
> }
> /*--- Child Level ---*/
> ```
>
> The nesting structure of css.whlie the nesting of elements are complex,It will be messy.
>
> ```less
> .outer {
>     background-color: #4b4b4b;
>     /*--- Father Level ---*/
>     
>     .child01 {
>         color: #afafaf;
>     }
>     .child02 {
>         color: #cdcdcd;
>     }
>    /*--- Child Level ---*/
> }
> ```
>
> The nesting structure of less.observably,It cleaned up a bit of un-necessary codes.

### Media query bubbling and nested media queries

> Nest *`@media`* or *`@supports`* that at-rules as selectors in the same way.
>
> At-rule placed on top,change relative elements in order,other elements inside remains unchanged.
>
> 以嵌套方式，在选择器内部定义 *`@media`* 或 *`@supports`* 及同类型元素在符合规则时的样式。
>
> 匹配规则通常被置于样式定义的顶部，改变匹配对应规则时的样式。其他在选择器内定义的样式将不会被应用。

> ```less
> .component {
>   width: 300px;
>   @media (min-width: 768px) {
>     width: 600px;
>     /*--- if (min-width: 768px) ---*/
>     @media  (min-resolution: 192dpi) {
>       background-image: url(/img/retina2x.png);
>    	}
>       /*--- if (min-resolution: 192dpi) ---*/
>   }
>   @media (min-width: 1280px) {
>     width: 800px;
>   	}
>     /*--- if (min-width: 1280px) ---*/
> }
> ```
>
> Now you see,It works just like *if... else...* for the purpose of understanding,I simplified the code as this one.		 ---Violet
>
> 很容易发现，这个嵌套规则的运作方式与 *if... else...* 很相似。为了易于理解，下文对其进行了简化：
>
> ```js
> let width = 300px;	//default value
> 
> if (min-width == 768px) {
>     width = 600px;
>     if (min-resolution: 192dpi) {
>         background-image-url = "/img/retina2x.png"；
>     }
>     
> if (min-width == 1280px) {
>     widt = 800px;
> 	}
> }
> ```
>
> The CSS output:
>
> ```css
> .component {
>   width: 300px;
> }
> @media (min-width: 768px) {
>   .component {
>     width: 600px;
>   	}
> }
> @media (min-width: 768px) and (min-resolution: 192dpi) {
>   .component {
>     background-image: url(/img/retina2x.png);
>   	}
> }
> @media (min-width: 1280px) {
>   .component {
>     width: 800px;
>   	}
> }
> ```

-------

### Operations

> Arithmetical Operations can calcutate the input mathematical conversions and export a result value.General operators,such as **+ - * /** ,can be recognized.
>
> Explicitly,the unit type of output has stated by leftmost one. 
>
> **BE WARNED**,*Units will be ignored while the conversions are meanless or impossible.*
>
> 输入数学运算表达式，将输出运算结果所得到的值。常规的运算符，例如 **+ - * /** ，都能够被识别。
>
> 当输入值的单位不同时，输出值的单位将由表达式最左侧的值决定，这是很明确的。
>
> **注意**，*当表达式无意义或无解时，输出值的单位将被忽略。*

> ```less
> // numbers are converted into the same units
> @conversion-1: 5cm + 10mm; // result is 6cm
> @conversion-2: 2 - 3cm - 5mm; // result is -1.5cm
> 
> // conversion is impossible
> @incompatible-units: 2 + 5px - 3cm; // result is 4px
> 
> // example with variables
> @base: 5%;
> @filler: @base * 2; // result is 10%
> @other: @base + @filler; // result is 15%
> ```
>
> Obviously, *variables are available*.
>
> ```less
> @base: 2cm * 3mm; // result is 6cm
> ```
>
> **BE CAREFUL**, Multiplication and division **DO NOT** convert numbers.
>
> It's an example -- a length multiplied a length -- gives an area,CSS does not support specifying areas.LESS will transform it into a units that can be identified : Coversions will be operated on numbers and output the result. As I had mentioned that,unit type is stated by leftmost one.
>
> **注意**，乘法和除法 **不会** 改变输出值单位。
>
> 这就是一个例子 -- 一个长度单位与另一个长度单位相乘 -- 得到了一个单位为面积的输出结果，CSS并不支持定义区域范围。LESS将把输出结果转换为一个可识别的单位：表达式的数值部分将进行运算并输出结果。正如上文所提及过的那样，输出值的单位取决于表达式最左侧的数值单位。
>
> ```less
> @color: #224488 / 2; //results in #112244
> background-color: #112244 + #111; // result is #223355
> ```
>
>  Arithmetic on colors are also available.
>
> 十六进制的颜色计算也是被允许的。

#### Calc() Exception

> *For CSS compatibility,`calc()` does not evaluate math expressions,but will evaluate variables and math in nested functions.*
>
> *为了兼容CSS，`calc()` 方法将不会识别数学表达式，但将会识别变量与被函数嵌套的计算式。*
>
> ```less
> @var: 50vh/2;
> width: calc(50% + (@var - 20px));  // result is calc(50% + (25vh - 20px))
> ```

------

### Escaping

> Escaping allow you to define the variable use any arbitrary string.
>
> The `String` inside `~'String'` or `~"String"` does specified as an value for variables.
>
> 转义允许你将任意字符串作为变量的值使用。
>
> 在`~'String'`或`~"String"`中定义的`String`将被识别为变量的值。

> ```less
> @min768: ~"(min-width: 768px)";
> .element {
>   @media @min768 {
>     font-size: 1.2rem;
>   	}
> }
> ```
>
> The CSS output :
>
> ```css
> @media (min-width: 768px) {
>   .element {
>     font-size: 1.2rem;
>   	}
> }
> /*--- Less BELOW 3.5 ---*/
> ```
>
> *Note : In Less 3.5 and Above,It could be defined in a simplify way. previously requiring `~''`are no longer needed in many case.*
>
> *提示：在Less 3.5以上的版本，上述写法可以被简化。多数情况下字符串前需要的`~''`将可以忽略。*
>
> ```less
> @min768: (min-width: 768px);
> .element {
>   @media @min768 {
>     font-size: 1.2rem;
>   	}
> }
> /*--- Less 3.5 and ABOVE ---*/
> ```

------

###  Functions

>  Less provides a variety of functions which transform colors, manipulate strings, and do maths. It's pretty straightforward to use.
>
> Less 提供了多种功能的函数，能够转换颜色，操作字符串，以及进行数学运算。这些函数是容易去使用的。

> ```less
> @base: #f04615;
> @width: 0.5;
> 
> .class {
>   width: percentage(@width);
>   //uses percentage to convert 0.5 to 50%
>   color: saturate(@base, 5%);
>   //increases the saturation of a base color by 5%
>   background-color: spin(lighten(@base, 25%), 8);
>   //sets the background color to one that is lightened by 25% and spun by 8 degrees
> }
> ```
>
> For example.

------

