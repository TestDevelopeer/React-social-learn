(this["webpackJsonpreact-tutorial"]=this["webpackJsonpreact-tutorial"]||[]).push([[1],{141:function(e,t,n){},17:function(e,t,n){e.exports={nav:"Navbar_nav__3IjsN",item:"Navbar_item__31vpL",activeLink:"Navbar_activeLink__16vqg"}},224:function(e,t,n){"use strict";n.r(t);var r=n(2);n(66),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var a=n(0),c=n.n(a),s=n(44),i=n.n(s),u=n(33),o=n(34),l=n(36),d=n(35),f=(n(141),n(17)),p=n.n(f),b=n(15),j=function(){return Object(r.jsxs)("nav",{className:p.a.nav,children:[Object(r.jsx)("div",{className:p.a.item,children:Object(r.jsx)(b.b,{to:"/profile",activeClassName:p.a.activeLink,children:"Profile"})}),Object(r.jsx)("div",{className:p.a.item,children:Object(r.jsx)(b.b,{to:"/dialogs",activeClassName:p.a.activeLink,children:"Messages"})}),Object(r.jsx)("div",{className:p.a.item,children:Object(r.jsx)(b.b,{to:"/users",activeClassName:p.a.activeLink,children:"Users"})}),Object(r.jsx)("div",{className:p.a.item,children:Object(r.jsx)(b.b,{to:"#",children:"News"})}),Object(r.jsx)("div",{className:p.a.item,children:Object(r.jsx)(b.b,{to:"#",children:"Music"})}),Object(r.jsx)("div",{className:p.a.item,children:Object(r.jsx)(b.b,{to:"#",children:"Settings"})})]})},h=n(7),O=n(3),g=n(54),v=n.n(g),m=function(e){return Object(r.jsxs)("header",{className:v.a.header,children:[Object(r.jsx)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/8/85/Logo-Test.png",alt:"Logo"}),Object(r.jsx)("div",{className:v.a.loginBlock,children:e.isAuth?Object(r.jsxs)("div",{children:[" ",e.login," ",Object(r.jsx)("button",{onClick:e.logout,children:"Logout"})," "]}):Object(r.jsx)(b.b,{to:"/login",children:"Login"})})]})},w=n(25),x=n(28),y=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(r.jsx)(m,Object(O.a)({},this.props))}}]),n}(c.a.Component),_=Object(x.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login}}),{logout:w.d})(y),S=n(19),k="/react-social/auth/INITIALIZED_SUCCESS",T={initialized:!1},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(O.a)(Object(O.a)({},e),{},{initialized:!0});default:return e}},E=n(64),I=n(58),C=n(76),N={},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:N;return e},U=n(83),A=n(86),M=n(82),z=Object(S.c)({profilePage:I.b,dialogsPage:C.a,sidebar:L,usersPage:U.a,auth:w.a,form:M.a,app:P}),F=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||S.d,R=Object(S.e)(z,F(Object(S.a)(A.a))),G=function(e){return function(t){return Object(r.jsx)(a.Suspense,{fallback:Object(r.jsx)("div",{children:"Loading..."}),children:Object(r.jsx)(e,Object(O.a)({},t))})}},D=c.a.lazy((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,298))})),B=c.a.lazy((function(){return Promise.all([n.e(0),n.e(4)]).then(n.bind(null,296))})),W=c.a.lazy((function(){return n.e(5).then(n.bind(null,297))})),H=c.a.lazy((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,295))})),J=function(e){Object(l.a)(n,e);var t=Object(d.a)(n);function n(){return Object(u.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.props.initializeApp()}},{key:"render",value:function(){return this.props.initialized?Object(r.jsxs)("div",{className:"app-wrapper",children:[Object(r.jsx)(_,{}),Object(r.jsx)(j,{}),Object(r.jsxs)("div",{className:"app-wrapper-content",children:[Object(r.jsx)(h.b,{path:"/dialogs",render:G(D)}),Object(r.jsx)(h.b,{path:"/profile/:userId?",render:G(B)}),Object(r.jsx)(h.b,{path:"/users",render:G(W)}),Object(r.jsx)(h.b,{path:"/login",render:G(H)})]})]}):Object(r.jsx)(E.a,{})}}]),n}(c.a.Component),K=Object(S.d)(h.f,Object(x.b)((function(e){return{initialized:e.app.initialized}}),{initializeApp:function(){return function(e){var t=e(Object(w.b)());Promise.all([t]).then((function(){e({type:k})}))}}}))(J),X=function(e){return Object(r.jsx)(b.a,{children:Object(r.jsx)(x.a,{store:R,children:Object(r.jsx)(K,{})})})};i.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(X,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},25:function(e,t,n){"use strict";n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return p})),n.d(t,"d",(function(){return b}));var r=n(6),a=n.n(r),c=n(13),s=n(3),i=n(9),u=n(45),o="/react-social/auth/SET_USER_DATA",l={userId:null,email:null,login:null,isAuth:!1},d=function(e,t,n,r){return{type:o,payload:{userId:e,email:t,login:n,isAuth:r}}},f=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){var n,r,c,s,u;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.me();case 2:0===(n=e.sent).data.resultCode&&(r=n.data.data,c=r.id,s=r.login,u=r.email,t(d(c,u,s,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},p=function(e,t,n){return function(){var r=Object(c.a)(a.a.mark((function r(c){var s,o;return a.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,i.a.login(e,t,n);case 2:0===(s=r.sent).data.resultCode?c(f()):(o=s.data.messages.length>0?s.data.messages[0]:"Some error",c(Object(u.a)("login",{_error:o})));case 4:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}()},b=function(){return function(){var e=Object(c.a)(a.a.mark((function e(t){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,i.a.logout();case 2:0===e.sent.data.resultCode&&t(d(null,null,null,!1));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(s.a)(Object(s.a)({},e),t.payload);default:return e}}},54:function(e,t,n){e.exports={header:"Header_header__T2YGU",loginBlock:"Header_loginBlock__Ksov9"}},58:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"d",(function(){return j})),n.d(t,"c",(function(){return O})),n.d(t,"e",(function(){return g}));var r=n(6),a=n.n(r),c=n(13),s=n(26),i=n(3),u=n(9),o="/react-social/auth/ADD_POST",l="/react-social/auth/DELETE_POST",d="/react-social/auth/SET_USER_PROFILE",f="/react-social/auth/SET_STATUS",p={posts:[{id:1,message:"Test msg 1",likesCount:5},{id:2,message:"Test msg 2",likesCount:6},{id:3,message:"Test msg 3",likesCount:7},{id:4,message:"Test msg 4",likesCount:8}],profile:null,status:""},b=function(e){return{type:o,newPostText:e}},j=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.c.getProfile(e);case 2:r=t.sent,n((a=r.data,{type:d,profile:a}));case 4:case"end":return t.stop()}var a}),t)})));return function(e){return t.apply(this,arguments)}}()},h=function(e){return{type:f,status:e}},O=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){var r;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.getStatus(e);case 2:r=t.sent,n(h(r.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},g=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.b.updateStatus(e);case 2:t.sent.data.resultCode||n(h(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.b=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:p,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:var n={id:5,message:t.newPostText,likesCount:0};return Object(i.a)(Object(i.a)({},e),{},{posts:[].concat(Object(s.a)(e.posts),[n]),newPostText:""});case l:return Object(i.a)(Object(i.a)({},e),{},{posts:e.posts.filter((function(e){return e.id!==t.postId}))});case d:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case f:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});default:return e}}},64:function(e,t,n){"use strict";var r=n(2),a=n.p+"static/media/loader.6f8e2689.svg";n(0),t.a=function(e){return Object(r.jsx)("div",{style:{background:"white"},children:Object(r.jsx)("img",{src:a,alt:"Preloader"})})}},66:function(e,t,n){},76:function(e,t,n){"use strict";n.d(t,"b",(function(){return i}));var r=n(26),a=n(3),c="/react-social/auth/SEND_MESSAGE",s={dialogs:[{id:1,name:"Test1"},{id:2,name:"Test2"},{id:3,name:"Test3"},{id:4,name:"Test4"}],messages:[{id:1,message:"Msg1"},{id:2,message:"Msg2"},{id:3,message:"Msg3"},{id:4,message:"Msg4"}]},i=function(e){return{type:c,newMessageBody:e}};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c:var n=t.newMessageBody;return Object(a.a)(Object(a.a)({},e),{},{messages:[].concat(Object(r.a)(e.messages),[{id:11,message:n}])});default:return e}}},83:function(e,t,n){"use strict";n.d(t,"d",(function(){return m})),n.d(t,"e",(function(){return x})),n.d(t,"c",(function(){return y})),n.d(t,"b",(function(){return S})),n.d(t,"f",(function(){return k}));var r=n(6),a=n.n(r),c=n(13),s=n(26),i=n(3),u=n(9),o=function(e,t,n,r){return e.map((function(e){return e[n]===t?Object(i.a)(Object(i.a)({},e),r):e}))},l="/react-social/auth/FOLLOW",d="/react-social/auth/UNFOLLOW",f="/react-social/auth/SET_USERS",p="/react-social/auth/SET_CURRENT_PAGE",b="/react-social/auth/SET_TOTAL_USERS_COUNT",j="/react-social/auth/TOGGLE_IS_FETCHING",h="/react-social/auth/TOGGLE_IS_FOLLOWING_PROGRESS",O={users:[],pageSize:10,totalUsersCount:0,currentPage:1,isFetching:!1,followingInProgress:[]},g=function(e){return{type:l,userId:e}},v=function(e){return{type:d,userId:e}},m=function(e){return{type:p,currentPage:e}},w=function(e){return{type:j,isFetching:e}},x=function(e,t){return{type:h,isFetching:e,userId:t}},y=function(e,t){return function(){var n=Object(c.a)(a.a.mark((function n(r){var c;return a.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r(w(!0)),r(m(e)),n.next=4,u.c.getUsers(e,t);case 4:c=n.sent,r(w(!1)),r((s=c.items,{type:f,users:s})),r((a=c.totalCount,{type:b,totalUsersCount:a}));case 8:case"end":return n.stop()}var a,s}),n)})));return function(e){return n.apply(this,arguments)}}()},_=function(){var e=Object(c.a)(a.a.mark((function e(t,n,r,c){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(x(!0,n)),e.next=3,r(n);case 3:0===e.sent.data.resultCode&&t(c(n)),t(x(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,r,a){return e.apply(this,arguments)}}(),S=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:_(n,e,u.c.follow.bind(u.c),g);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},k=function(e){return function(){var t=Object(c.a)(a.a.mark((function t(n){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:_(n,e,u.c.unfollow.bind(u.c),v);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return Object(i.a)(Object(i.a)({},e),{},{users:o(e.users,t.userId,"id",{followed:!0})});case d:return Object(i.a)(Object(i.a)({},e),{},{users:o(e.users,t.userId,"id",{followed:!1})});case f:return Object(i.a)(Object(i.a)({},e),{},{users:t.users});case p:return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.currentPage});case b:return Object(i.a)(Object(i.a)({},e),{},{totalUsersCount:t.totalUsersCount});case j:return Object(i.a)(Object(i.a)({},e),{},{isFetching:t.isFetching});case h:return Object(i.a)(Object(i.a)({},e),{},{followingInProgress:t.isFetching?[].concat(Object(s.a)(e.followingInProgress),[t.userId]):e.followingInProgress.filter((function(e){return e!==t.userId}))});default:return e}}},9:function(e,t,n){"use strict";n.d(t,"c",(function(){return c})),n.d(t,"b",(function(){return s})),n.d(t,"a",(function(){return i}));var r=n(84),a=r.create({baseURL:"https://social-network.samuraijs.com/api/1.0/",withCredentials:!0,headers:{"API-KEY":"9358a999-e675-463d-b4f6-2f8378a87dfa"}}),c={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return a.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},follow:function(e){return a.post("follow/".concat(e))},unfollow:function(e){return a.delete("follow/".concat(e))},getProfile:function(e){return console.warn("Obsolete method. Please use profileAPI object."),s.getProfile(e)}},s={getProfile:function(e){return a.get("profile/".concat(e))},getStatus:function(e){return a.get("profile/status/".concat(e))},updateStatus:function(e){return a.put("profile/status/",{status:e})}},i={me:function(){return a.get("auth/me")},login:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return a.post("auth/login",{email:e,password:t,rememberMe:n})},logout:function(e,t){return a.delete("auth/login")}}}},[[224,2,3]]]);
//# sourceMappingURL=main.108502cf.chunk.js.map