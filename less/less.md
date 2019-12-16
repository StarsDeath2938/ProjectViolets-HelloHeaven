# Less Un-Offical Docs -- MadeByViolet

***Less.js*** is an extension modification of ***Cascading Style Sheets***. It's EASY to geting start.

It could work on both Node and Browser.

------

## Runtime Environment

> By using Command Line via Node,You could access less.js and Download it. Less.js both works on third-party tools,and it widely used on Browser.
>
> *If you expect to use LESS on Browser Only, *Get It On Online Server* are Highly recommand. LESS might be pre-loaded by other website —— While these visitor are getting access your website,the improvement of loading speed might be Effective.	---Violet
>
> 通过在Node中使用命令可以访问并下载LESS文件。LESS通常被用于浏览器，但它也同样支持第三方工具。
>
> 如果你仅仅只是希望在浏览器端使用Less，那么我高度推荐从其他服务器上调用它。在访问其他网页时，LESS文件可能已经被预加载了 —— 当这些用户访问你的网站时，这可能会大幅提升加载速度。---Violet
>

>  ```html
>  <script src="//cdnjs.cloudflare.com/ajax/libs/less.js/2.5.3/less.min.js"></script>
>```

------

## Getting Start

Once you had install less.js,it can be invoke in Command Line.

```node
$ lessc styles.less
```

The re-compile css file can be found in ***/stdout*.** If you are aiming to compile an exist file,you can also redirect Outputs in Command Line.

```node
$ lessc styles.less > styles.css
```

-------

### Variables

> Origin Website have no-many-explaination. 	*~~so I refused to add an explaination here.~~*	--Violet

> Well,seems self-explanatory.it's Very Common in other language.
>
> 顾 名 思 义 (确信)
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
>     /*--- Applied Including Style to .cotainer ---*/
>    	/*--- 将.Mix所包含的样式应用至.container ---*/ 
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
>     /*--- Father Level ---*/
>     background-color: #4b4b4b;
>     
>     /*--- Child Level ---*/
>     .child01 {
>         color: #afafaf;
>     }
>     .child02 {
>         color: #cdcdcd;
>     }
> }
> ```
>
> The nesting structure of less.observably,It cleaned up a bit of un-necessary codes.

-------

