(this["webpackJsonpreact_list-of-goods"]=this["webpackJsonpreact_list-of-goods"]||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),a=n(7),s=n.n(a),c=n(5),u=n(1),l=n(2),i=n(4),p=n(3),b=(n(13),function(t){Object(i.a)(n,t);var e=Object(p.a)(n);function n(){return Object(u.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){var t=this.props.goods;return o.a.createElement("ul",null,t.map((function(t){return o.a.createElement("li",{key:t},t)})))}}]),n}(o.a.Component)),d=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],h=function(t){Object(i.a)(n,t);var e=Object(p.a)(n);function n(){var t;Object(u.a)(this,n);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];return(t=e.call.apply(e,[this].concat(o))).state={startIsActive:!1,goods:d},t.activeButton=function(){t.setState({startIsActive:!0})},t.sortHandler=function(e){var n=Object(c.a)(t.state.goods);switch(e){case"length":return n.sort((function(t,e){return t.length-e.length}));case"alphabet":return n.sort((function(t,e){return t.localeCompare(e)}));default:return 0}},t.reverseGoods=function(){t.setState((function(t){return{goods:Object(c.a)(t.goods).reverse()}}))},t.reset=function(){t.setState({goods:d})},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this,e=this.state,n=e.goods,r=e.startIsActive;return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"Goods"),!r&&o.a.createElement("button",{type:"button",onClick:this.activeButton},"Start"),o.a.createElement("button",{type:"button",onClick:this.reverseGoods},"Reverse"),o.a.createElement("button",{type:"button",onClick:function(){return t.setState({goods:t.sortHandler("alphabet")})}},"Sort alphabetically"),o.a.createElement("button",{type:"button",onClick:function(){return t.setState({goods:t.sortHandler("length")})}},"Sort by length"),o.a.createElement("button",{type:"button",onClick:this.reset},"Reset"),r&&o.a.createElement(b,{goods:n}))}}]),n}(o.a.Component);s.a.render(o.a.createElement(h,null),document.getElementById("root"))},8:function(t,e,n){t.exports=n(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.0d9d840c.chunk.js.map