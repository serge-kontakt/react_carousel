(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var i=n(9),a=n.n(i),s=n(2),r=n(8),o=n(3),c=n(4),l=n(6),u=n(5),h=n(1),m=n.n(h),b=(n(14),n(15),n(0)),d=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={disableRightButton:!1,disableLeftButton:!0,oneStep:0},t.scrollRight=function(){var e=t.props,n=e.itemWidth,i=e.step,a=e.infinite,s=e.images,r=e.frameSize,o=t.state,c=o.disableRightButton,l=o.oneStep,u=s.length-r;if(!c||!1!==a){var h=l-n*i;h=Math.max(h,-n*u),c&&a&&(h=0),t.setState({disableRightButton:h===-n*u,disableLeftButton:0===h,oneStep:c&&a?0:h})}},t.scrollLeft=function(){var e=t.props,n=e.itemWidth,i=e.step,a=e.infinite,s=e.images,r=e.frameSize,o=t.state,c=o.disableLeftButton,l=o.oneStep;if(!c||!1!==a){var u=l+n*i;u=Math.min(u,0),c&&a&&(u=-n*(s.length-r)),t.setState({disableLeftButton:0===u,disableRightButton:u===-n*(s.length-r),oneStep:c&&a?-n*(s.length-r):u})}},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.props,e=t.images,n=t.itemWidth,i=t.frameSize,a=t.animationDuration,s=t.infinite,r=this.state,o=r.disableRightButton,c=r.disableLeftButton,l=r.oneStep,u=Math.max(0,-Math.floor(l/n)),h=Math.min(e.length-1,u+i-1);return Object(b.jsxs)("div",{className:"Carousel",children:[Object(b.jsx)("div",{style:{width:n*i,overflow:"hidden"},children:Object(b.jsx)("ul",{className:"Carousel__list",style:{width:n*e.length,transform:"translate(".concat(l,"px)"),transition:"transform ".concat(a,"ms")},children:e.map((function(t,e){var i=e>=u&&e<=h;return Object(b.jsx)("li",{style:{visibility:i?"visible":"hidden",transition:"visibility ".concat(a,"ms")},children:Object(b.jsx)("img",{src:t,alt:(e+1).toString(),width:n})},t)}))})}),Object(b.jsxs)("div",{className:"Carousel__buttons",style:{width:n*i},children:[Object(b.jsx)("button",{type:"button","aria-label":"Prev",className:"Carousel__button Carousel__button--left ".concat(c&&!1===s?"Carousel__button--disable":""),onClick:this.scrollLeft}),Object(b.jsx)("button",{type:"button","aria-label":"Next","data-cy":"next",className:"Carousel__button Carousel__button--right ".concat(o&&!1===s?"Carousel__button--disable":""),onClick:this.scrollRight})]})]})}}]),n}(h.Component),p=function(t){Object(l.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(o.a)(this,n);for(var i=arguments.length,a=new Array(i),c=0;c<i;c++)a[c]=arguments[c];return(t=e.call.apply(e,[this].concat(a))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],step:3,frameSize:3,itemWidth:130,animationDuration:1e3,infinite:!1},t.changeInput=function(e){var n=e.target,i=n.name,a=n.value,o=n.type,c=n.checked;t.setState((function(t){return Object(r.a)(Object(r.a)({},t),{},Object(s.a)({},i,"checkbox"===o?c:a))}))},t}return Object(c.a)(n,[{key:"render",value:function(){var t=this.state,e=t.images,n=t.step,i=t.frameSize,a=t.itemWidth,s=t.animationDuration,r=t.infinite;return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)("h1",{"data-cy":"title",children:"Carousel with ".concat(e.length," images")}),Object(b.jsxs)("label",{htmlFor:"itemId",children:["Item Width",Object(b.jsx)("input",{type:"number",id:"itemId",name:"itemWidth",value:a,onChange:this.changeInput,required:!0})]}),Object(b.jsxs)("label",{htmlFor:"frameId",children:["Frame Size",Object(b.jsx)("input",{type:"number",id:"frameId",name:"frameSize",value:i,onChange:this.changeInput,required:!0})]}),Object(b.jsxs)("label",{htmlFor:"stepId",children:["Step",Object(b.jsx)("input",{type:"number",id:"stepId",name:"step",value:n,onChange:this.changeInput,required:!0})]}),Object(b.jsxs)("label",{htmlFor:"animationId",children:["Animation Duration",Object(b.jsx)("input",{type:"number",id:"animationId",name:"animationDuration",value:s,onChange:this.changeInput,required:!0})]}),Object(b.jsxs)("label",{htmlFor:"infiniteId",children:["Infinite",Object(b.jsx)("input",{type:"checkbox",id:"infiniteId",name:"infinite",checked:r,onChange:this.changeInput})]}),Object(b.jsx)(d,{images:e,step:n,frameSize:i,itemWidth:a,animationDuration:s,infinite:r})]})}}]),n}(m.a.Component),g=p;a.a.render(Object(b.jsx)(g,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.489ce8d6.chunk.js.map