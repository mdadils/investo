(window.webpackJsonpinvesto=window.webpackJsonpinvesto||[]).push([[0],{53:function(e,n,t){e.exports=t(82)},62:function(e,n,t){},82:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(18),c=t.n(o),i=t(23),l=t(48),s=t(11),m=(t(62),t(19)),u=t(20),p=t(24),d=t(21),b=t(25),f=t(5),h=t(6),v="#ed1965",E="#53d581",y="#333333",g="#000000",w="#00000066",O="#f3f3f3",N="#6c6c6c",j="#333333cc";function k(){var e=Object(f.a)(['\n  && {\n    background-color: #334a5e !important;\n\n    .navbar-brand {\n      font-family: "Pacifico", cursive;\n    }\n    .button.navbar-brand.btn.btn-link:hover {\n      color: #ed1a64;\n    }\n  }\n']);return k=function(){return e},e}var D=h.a.nav(k()),x=function(){return r.a.createElement(D,{className:"navbar navbar-expand-md bg-dark navbar-dark"},r.a.createElement("button",{onClick:function(){window.location.href="/"},className:"navbar-brand btn btn-link",type:"button"},"investo"),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#collapsibleNavbar"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"collapsibleNavbar"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("button",{className:"nav-link btn btn-link",type:"button"},"About US")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("button",{className:"nav-link btn btn-link",type:"button"},"Payment")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("button",{className:"nav-link btn btn-link",type:"button"},"Reports")))))};function C(){var e=Object(f.a)(["\n  border: 16px solid ",";\n  border-top: 16px solid ",";\n  border-radius: 50%;\n  width: 120px;\n  height: 120px;\n  margin: 100px auto;\n  animation: spin 2s linear infinite;\n\n  @keyframes spin {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n"]);return C=function(){return e},e}function A(){var e=Object(f.a)([""]);return A=function(){return e},e}h.a.div(A());var _=h.a.div(C(),O,v),L=t(2),I=t.n(L),S=t(50);function P(){var e=Object(f.a)(['\n  max-width: 400px;\n  font-family: "Montserrat", sans-serif;\n  &:hover {\n    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;\n  }\n  .edit-icon {\n    width: 24px;\n    height: auto;\n    position: absolute;\n    top: 20px;\n    right: 20px;\n    cursor: pointer;\n  }\n  .name {\n    font-family: "montserrat-semibold";\n    font-size: 1.5rem;\n    line-height: 1.5rem;\n    color: ',";\n    display: inline-block;\n    width: 100%;\n    overflow: hidden;\n  }\n\n  .contact {\n    font-size: 1rem;\n    line-height: 1.1rem;\n    height: 3rem;\n    overflow: hidden;\n    letter-spacing: -0.5px;\n    .email,\n    .phone {\n      color: ",";\n      display: block;\n    }\n  }\n\n  .city-container {\n    font-size: 1.1rem;\n    color: ",";\n  }\n\n  .website-container {\n    transition: all 0.3s;\n    border: 1px dashed ",";\n    border-radius: 8px;\n    cursor: pointer;\n    display: inline-block;\n\n    padding: 0px 12px;\n  }\n  .website {\n    font-size: 0.8rem;\n    color: ",";\n  }\n  .website-container:hover {\n    background: ",";\n  }\n  .website:hover {\n    text-decoration: none;\n  }\n"]);return P=function(){return e},e}var T=h.a.div(P(),v,y,j,y,j,E),F={CITY_LABEL:"From: ",ORG_LABEL:"Company: "},H=t(17),M=t(16);function z(){var e=Object(f.a)(["\n  &.modal {\n    display: block;\n    position: fixed;\n    z-index: 1;\n    padding-top: 5rem;\n    left: 0;\n    top: 0;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    background-color: ","; /** Fallback for old browsers**/\n    background-color: ",";\n  }\n  .modal-content {\n    background-color: #fefefe;\n    margin: auto;\n    padding: 1.8rem;\n    border: 1px solid ",";\n    width: 70%;\n    border-radius: 0.6rem;\n  }\n"]);return z=function(){return e},e}function B(){var e=Object(f.a)([""]);return B=function(){return e},e}var R=h.a.form(B()),V=h.a.div(z(),g,w,N);function X(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,a)}return t}function G(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?X(t,!0).forEach(function(n){Object(H.a)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):X(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var U=function(){},J=function(e){function n(e){var t;return Object(m.a)(this,n),(t=Object(p.a)(this,Object(d.a)(n).call(this,e))).state={name:t.props.name,email:t.props.email,phone:t.props.phone,city:t.props.address&&t.props.address.city,website:t.props.website,company:t.props.company&&t.props.company.name},t.handleInputChange=t.handleInputChange.bind(Object(M.a)(t)),t.handleSubmitAndMergeData=t.handleSubmitAndMergeData.bind(Object(M.a)(t)),t}return Object(b.a)(n,e),Object(u.a)(n,[{key:"handleInputChange",value:function(e){var n=e.target,t=n.id;this.setState(Object(H.a)({},t,n.value))}},{key:"handleSubmitAndMergeData",value:function(e){e.preventDefault();var n=this.state,t=n.name,a=n.email,r=n.phone,o=n.city,c=n.website,i=n.company;(this.props&&this.props.onSubmit||U)(G({},this.props,{name:t,email:a,phone:r,website:c,address:G({},this.props.address,{city:o}),company:G({},this.props.company,{name:i})}))}},{key:"render",value:function(){var e=this.props&&this.props.onCancel||U;return r.a.createElement(r.a.Fragment,null,r.a.createElement(V,{className:" card modal"},r.a.createElement(R,{className:"edit-form modal-content shadow-lg"},r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"name"},"Name:"),r.a.createElement("input",{type:"name",value:this.state.name,className:"form-control",id:"name",onChange:this.handleInputChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"email"},"Email address:"),r.a.createElement("input",{type:"email",value:this.state.email,className:"form-control",id:"email",onChange:this.handleInputChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"phone"},"Phone"),r.a.createElement("input",{type:"phone",value:this.state.phone,className:"form-control",id:"phone",onChange:this.handleInputChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"city"},"city"),r.a.createElement("input",{type:"city",value:this.state.city,className:"form-control",id:"city",onChange:this.handleInputChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"website"},"website"),r.a.createElement("input",{type:"url",value:this.state.website,className:"form-control",id:"website",onChange:this.handleInputChange})),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"company"},"company"),r.a.createElement("input",{type:"company",value:this.state.company,className:"form-control",id:"company",onChange:this.handleInputChange})),r.a.createElement("button",{type:"button",onClick:e,className:"btn btn-secondary my-1"},"Cancel"),r.a.createElement("button",{onClick:this.handleSubmitAndMergeData,type:"submit",className:"btn btn-primary mt-1"},"Submit"))))}}]),n}(a.Component);J.defaultProps={name:"",email:"",phone:"",address:{},website:"",company:{}};var W=J,Y=function(e){var n=e.name,t=e.email,o=e.phone,c=e.address,i=e.website,l=e.company,s=Object(a.useState)(!1),m=Object(S.a)(s,2),u=m[0],p=m[1],d=function(){document.body.style.overflow=u?"scroll":"hidden",p(!u)};return r.a.createElement(T,{className:"card shadow m-3"},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"card-title"},r.a.createElement("span",{className:"name"},n)),r.a.createElement("div",{className:"contact"},r.a.createElement("a",{href:"mailto:".concat(t,"?subject=Mail from Our Site"),className:"email",rel:"noreferrer noopener",target:"_blank"},t),r.a.createElement("span",{className:"phone mt-1"},o)),c&&c.city&&r.a.createElement("div",{className:"city-container"},r.a.createElement("span",{className:"city label"},F.CITY_LABEL),r.a.createElement("span",{className:"city"},c.city)),i&&r.a.createElement("div",{className:"website-container"},r.a.createElement("a",{className:"website",href:i,rel:"noreferrer noopener",target:"_blank"},i)),l&&l.name&&r.a.createElement("div",{className:"org-container my-3"},r.a.createElement("span",{className:"org-label"},F.ORG_LABEL," "),r.a.createElement("span",{className:"org"},l.name)),r.a.createElement("div",{className:"edit"},r.a.createElement("input",{onClick:d,type:"button",className:"btn btn-primary rounded-pill",value:"Edit","data-toggle":"modal","data-target":"#exampleModalLong"}))),u?r.a.createElement(W,Object.assign({},e,{onSubmit:function(n){e.submitHandler&&e.submitHandler(n),d()},onCancel:d})):null)},$=function(e){var n=e.data,t=e.submitHandler;return n.length>0?function(e,n){return r.a.createElement("div",{className:"row"},e.map(function(e){return r.a.createElement("div",{key:e.id,className:"col-sm-12 col-md-6 col-lg-4"},r.a.createElement(Y,Object.assign({},e,{submitHandler:n})))}))}(n,t):r.a.createElement(_,null)};$.defaultProps={data:[]},$.propTypes={data:I.a.array};var q=$,K=function(e){function n(){return Object(m.a)(this,n),Object(p.a)(this,Object(d.a)(n).apply(this,arguments))}return Object(b.a)(n,e),Object(u.a)(n,[{key:"componentDidMount",value:function(){var e=this;setTimeout(function(){e.props.fetchData()},2e3)}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(x,{data:this.props.contactList}),r.a.createElement("div",{className:"container"},r.a.createElement(q,{data:this.props.contactList,submitHandler:this.props.updateItem})))}}]),n}(a.Component),Q=t(14),Z=t.n(Q),ee=t(22),ne={SAVE_DATA:"SAVE_DATA",FETCH_DATA:"FETCH_DATA",HANDLE_EDIT:"HANDLE_EDIT"},te=t(46),ae=t.n(te),re=function(){var e=Object(ee.a)(Z.a.mark(function e(){var n;return Z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,"./data.json",e.next=4,ae.a.get("./data.json");case 4:return n=e.sent,e.abrupt("return",n);case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",{error:!0});case 11:case"end":return e.stop()}},e,null,[[0,8]])}));return function(){return e.apply(this,arguments)}}(),oe={fetchData:function(){var e=Object(ee.a)(Z.a.mark(function e(n){var t;return Z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re();case 2:t=e.sent,n({type:ne.SAVE_DATA,contactList:t.data});case 4:case"end":return e.stop()}},e)}));return function(n){return e.apply(this,arguments)}}(),updateItem:function(e,n){e({type:ne.HANDLE_EDIT,item:n})}},ce=Object(i.b)(function(e){return{contactList:e.contactList}},function(e){return{fetchData:function(){oe.fetchData(e)},updateItem:function(n){oe.updateItem(e,n)}}})(K);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(80);function ie(){var e=Object(f.a)(["\n  font-family: montserrat-semibold;\n  background-color: #ed1965;\n  margin-top: 2.5rem;\n  outline: none;\n  color: #fff;\n  text-align: center;\n  border-radius: 2.5rem;\n  min-width: 16rem;\n  transition: all 0.3s;\n  font-size: 1.3rem;\n  line-height: 1.3rem;\n  padding: 1.1rem 3rem;\n  &:hover {\n    box-shadow: 0px 5px 19px 1px rgba(237, 25, 101, 0.5);\n  }\n"]);return ie=function(){return e},e}function le(){var e=Object(f.a)(['\n  min-height: 30rem;\n  .container {\n    margin: 8rem auto;\n    text-align: center !important;\n  }\n  .pitch {\n    font-size: 2rem;\n    font-family: "montserrat-semibold";\n  }\n  img {\n    display: block;\n    margin: 0rem auto;\n  }\n']);return le=function(){return e},e}var se=h.a.div(le()),me=h.a.input(ie()),ue=function(){return r.a.createElement(se,{className:"body"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"pitch"},"Reach Out to Great Investors"),r.a.createElement("div",{className:"mb-4"},"Fund your dream-project"),r.a.createElement("img",{src:"/investo.png",className:"my-1",alt:"ima"}),r.a.createElement(me,{onClick:function(){window.location.href="/connect-me-now"},type:"button",value:"Connect me now"})))},pe=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(x,null),r.a.createElement(ue,null))},de=t(13);function be(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,a)}return t}function fe(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?be(t,!0).forEach(function(n){Object(H.a)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):be(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var he=t(47),ve=Object(de.d)(function(e,n){switch(n.type){case ne.SAVE_DATA:return fe({},e,{contactList:n.contactList});case ne.HANDLE_EDIT:var t=e.contactList.map(function(e){return e.id===n.item.id?n.item:e});return fe({},e,{contactList:t});default:return e}},{contactList:[]},Object(de.c)(Object(de.a)(he.a),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()));c.a.render(r.a.createElement(function(){return r.a.createElement(i.a,{store:ve},r.a.createElement(l.a,{basename:"/investo"},r.a.createElement(s.a,{path:"/",exact:!0,component:pe}),r.a.createElement(s.a,{path:"/connect-me-now",component:ce})))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[53,1,2]]]);
//# sourceMappingURL=main.1cb3107b.chunk.js.map