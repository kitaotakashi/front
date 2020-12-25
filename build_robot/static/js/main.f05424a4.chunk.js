(this["webpackJsonprobot-proto"]=this["webpackJsonprobot-proto"]||[]).push([[0],{5472:function(e,t,n){e.exports=n(5527)},5527:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(9),c=n.n(i),o=n(37),l=n(30),u=n(13),s=n(44),m=function(e){var t=e.children,n=Object(u.f)();return r.a.createElement(s.a,{domain:"robot.jp.auth0.com",clientId:"rx6vE0DzzEKEyKxw340nRPkMTj9lTdIQ",redirectUri:window.location.origin,onRedirectCallback:function(e){n.push((null===e||void 0===e?void 0:e.returnTo)||window.location.pathname)}},t)},d=n(21),p=n(41),f=n(32),g=n.n(f),E=n(45),h=n(46),b=n.n(h),v={units:[],isFetching:!1,lastUpdated:void 0,error:void 0},y=Object(p.b)({name:"units",initialState:v,reducers:{getUnitsRequest:function(e){e.isFetching=!0},getUnitsSuccess:function(e,t){e.units=t.payload.map((function(e){return{id:e.unit_id,requiredAction:e.required_action,profile:{productTypeName:"null",modelNumber:e.profile.unit_type,location:e.profile.location},isCharging:e.is_charging,isPowerOn:e.is_working,soc:e.soc}})),e.isFetching=!1,e.lastUpdated=Date.now(),e.error=void 0},getUnitsFailure:function(e,t){e.isFetching=!0,e.error=t.payload}}}),O=y.reducer,w=y.actions,x=w.getUnitsRequest,j=w.getUnitsSuccess,C=w.getUnitsFailure,k={unit:{id:"",errorCode:0,requiredAction:void 0,profile:{modelNumber:"",productTypeName:"",location:{latitude:0,longitude:0}},status:{isCharging:!1,isPowerOn:!1,soc:0,soh:0,capacity:0,current:0,voltage:0},timestamps:{registeredAt:new Date(0),lastUpdatedAt:new Date(0)},customerId:""},isFetching:!1,lastUpdated:void 0,error:void 0},N=Object(p.b)({name:"unit",initialState:k,reducers:{getUnitRequest:function(e){e.isFetching=!0},getUnitSuccess:function(e,t){e.unit={id:t.payload.unit.unit_id,errorCode:t.payload.unit.error_code.Int32,requiredAction:void 0,profile:{modelNumber:t.payload.unit.unit_type,productTypeName:t.payload.unit.purpose,location:{latitude:t.payload.unit.latitude,longitude:t.payload.unit.longitude}},status:{isCharging:t.payload.is_charging,isPowerOn:!1,soc:t.payload.unit.soc,soh:t.payload.unit.soh,capacity:t.payload.unit.capacity,current:t.payload.unit.current,voltage:t.payload.unit.voltage},timestamps:{registeredAt:new Date(0),lastUpdatedAt:t.payload.unit.time},customerId:t.payload.customer.account_id},e.isFetching=!1},getUnitFailure:function(e,t){e.isFetching=!0,e.error=t.payload}}}),I=N.reducer,z=N.actions,U=z.getUnitRequest,A=z.getUnitSuccess,F=z.getUnitFailure,P=Object(d.c)({units:O,unit:I}),S=Object(p.a)({reducer:P,middleware:Object(p.c)({serializableCheck:!1})}),K=n(5586),T=n(5585),q=n(7),W=n(121);function D(e){var t=e.component,n=Object(W.a)(e,["component"]);return r.a.createElement(u.a,Object.assign({component:Object(s.c)(t,{})},n))}var R=n(120),_=Object(R.a)({palette:{primary:{main:"#000000",light:"#242423"},secondary:{main:"#f5cb5c"},error:{main:"#dd1c1a"}},shape:{}}),L=n(63),M=n(8);function B(){var e=Object(M.a)(["\n    flex-grow: 1;\n    padding: ","px;\n    transition: ",";\n    margin-left: -","px;\n    ","\n"]);return B=function(){return e},e}function H(){var e=Object(M.a)(["\n    display: flex;\n"]);return H=function(){return e},e}var J=q.b.div(H()),V=q.b.main(B(),(function(e){return e.theme.spacing(3)}),(function(e){return e.theme.transitions.create("margin",{easing:e.theme.transitions.easing.sharp,duration:e.theme.transitions.duration.leavingScreen})}),(function(e){return e.drawerWidth}),(function(e){return e.isOpen&&"\n        transition: ".concat(e.theme.transitions.create("margin",{easing:e.theme.transitions.easing.easeOut,duration:e.theme.transitions.duration.enteringScreen}),";\n        margin-left: 0;\n    ")})),G=n(5575),Q=n(5587),Y=n(5569),Z=n(5567);function $(){var e=Object(M.a)(["\n    width: ","px;\n    flex-shrink: 0;\n"]);return $=function(){return e},e}function X(){var e=Object(M.a)(["\n    margin-right: ","px;\n    ","\n"]);return X=function(){return e},e}function ee(){var e=Object(M.a)(["\n    transition: ",";\n    ","\n"]);return ee=function(){return e},e}var te=Object(q.b)(Z.a)(ee(),(function(e){return e.theme.transitions.create(["margin","width"],{easing:e.theme.transitions.easing.sharp,duration:e.theme.transitions.duration.leavingScreen})}),(function(e){return e.isOpen&&"\n        width: calc(100% - ".concat(e.drawerWidth,"px);\n        margin-left: ").concat(e.drawerWidth,"px;\n        transition: ").concat(e.theme.transitions.create(["margin","width"],{easing:e.theme.transitions.easing.easeOut,duration:e.theme.transitions.duration.enteringScreen}),";\n    ")})),ne=Object(q.b)(Y.a)(X(),(function(e){return e.theme.spacing(2)}),(function(e){return e.isOpen&&"\n        display: none;\n    "})),ae=Object(q.b)(Q.a)($(),(function(e){return e.drawerWidth})),re=n(5570),ie=n(5574),ce=n(38),oe=n(105),le=n.n(oe),ue=n(106),se=n.n(ue),me=n(72),de=n(5590),pe=Object(re.a)((function(e){return Object(de.a)({drawerHeader:Object(me.a)(Object(me.a)({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar),{},{justifyContent:"flex-end"})})})),fe=function(e){var t=pe();return r.a.createElement("div",{className:t.drawerHeader},e.children)},ge=n(5529),Ee=n(5531),he=n(5571),be=n(5572),ve=n(101),ye=n.n(ve),Oe=n(102),we=n(103),xe=n.n(we),je=n(104),Ce=n.n(je),ke=[{text:"Home",icon:r.a.createElement(ye.a,null),link:"/"},{text:"Battery Unts",icon:r.a.createElement(Oe.a,null),link:"/units"},{text:"Customers",icon:r.a.createElement(xe.a,null),link:"/"},{text:"Add Customer",icon:r.a.createElement(Ce.a,null),link:"/"}],Ne=function(){return r.a.createElement(ge.a,null,ke.map((function(e){return r.a.createElement(Ee.a,{component:l.b,to:e.link,key:e.text},r.a.createElement(he.a,null,e.icon),r.a.createElement(be.a,{primary:e.text}))})))},Ie=n(5573);var ze=function(e){var t=Object(s.b)(),n=t.isAuthenticated,a=t.loginWithRedirect,i=t.logout;return n?r.a.createElement(Ie.a,Object.assign({variant:"outline-primary",onClick:function(){i({returnTo:window.location.origin})}},e),"Log out"):r.a.createElement(Ie.a,{onClick:a},"Log in")},Ue=Object(re.a)({drawerPaper:{width:function(e){return e.drawerWidth}}}),Ae=function(e){var t=Ue(e);return r.a.createElement(r.a.Fragment,null,r.a.createElement(te,{position:"fixed",drawerWidth:e.drawerWidth,isOpen:e.isOpen},r.a.createElement(ie.a,null,r.a.createElement(ne,{color:"inherit","aria-label":"open drawer",onClick:e.drawerOpener,edge:"start",isOpen:e.isOpen},r.a.createElement(le.a,null)),r.a.createElement(ce.a,{variant:"h6",noWrap:!0},"RoBOT"))),r.a.createElement(ae,{variant:"persistent",anchor:"left",open:e.isOpen,drawerWidth:e.drawerWidth,classes:{paper:t.drawerPaper}},r.a.createElement(fe,null,r.a.createElement(Y.a,{onClick:e.drawerCloser},r.a.createElement(se.a,null))),r.a.createElement(ze,null),r.a.createElement(Ne,null)))},Fe=function(e){var t=r.a.useState(!1),n=Object(L.a)(t,2),a=n[0],i=n[1];return r.a.createElement(J,null,r.a.createElement(G.a,null),r.a.createElement(Ae,{isOpen:a,drawerOpener:function(){i(!0)},drawerCloser:function(){i(!1)},drawerWidth:240}),r.a.createElement(V,{isOpen:a,drawerWidth:240},r.a.createElement(fe,null),e.children))},Pe=n(5581),Se=n(109),Ke=n.n(Se),Te=n(110),qe=n.n(Te),We=n(5589),De=n(107),Re=n.n(De);function _e(){var e=Object(M.a)(["\n    color: inherit;\n    padding: ",";\n    padding-left: ",";\n    transition: ",";\n    width: 100%;\n"]);return _e=function(){return e},e}function Le(){var e=Object(M.a)(["\n    margin: ",";\n    height: 100%;\n    position: absolute;\n    pointer-events: none;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n"]);return Le=function(){return e},e}function Me(){var e=Object(M.a)(["\n    position: relative;\n    border-radius: ","px;\n    border: 1px solid ",";\n    background-color: ",";\n    margin: auto;\n    width: 100%;\n    /* margin: ","; */\n    ","{\n        margin-left: ","px;\n        width: auto;\n    }\n"]);return Me=function(){return e},e}var Be=q.b.div(Me(),(function(e){return e.theme.shape.borderRadius}),(function(e){return e.theme.palette.primary.light}),(function(e){return e.theme.palette.common.white}),(function(e){return e.theme.spacing(0,0,0,2)}),(function(e){return e.theme.breakpoints.up("md")}),(function(e){return e.theme.spacing(1)})),He=Object(q.b)(Re.a)(Le(),(function(e){return e.theme.spacing(0,0,0,2)})),Je=Object(q.b)(We.a)(_e(),(function(e){return e.theme.spacing(1,0,1,0)}),(function(e){return"calc(1em + ".concat(e.theme.spacing(4),"px)")}),(function(e){return e.theme.transitions.create("width")})),Ve=function(e){return r.a.createElement(Be,null,r.a.createElement(He,{color:"primary"}),r.a.createElement(Je,{placeholder:"Search by ID",inputProps:{"aria-label":"search"}}))},Ge=n(5579),Qe=n(5578),Ye=n(123),Ze=n(5577),$e=n(5576),Xe=n(5580),et=function(e){var t=r.a.useState(!1),n=Object(L.a)(t,2),a=n[0],i=n[1],c=r.a.useRef(null),o=function(e){c.current&&c.current.contains(e.target)||i(!1)};function l(e){"Tab"===e.key&&(e.preventDefault(),i(!1))}var u=r.a.useRef(a);r.a.useEffect((function(){!0===u.current&&!1===a&&c.current.focus(),u.current=a}),[a]);var s=e.menuItems.map((function(e){return r.a.createElement($e.a,{onClick:o},e)}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(Ie.a,{ref:c,"aria-controls":a?"menu-list-grow":void 0,"aria-haspopup":"true",onClick:function(){i((function(e){return!e}))},color:"primary",variant:"outlined",disableElevation:!0,startIcon:e.buttonIcon},e.buttonText),r.a.createElement(Ze.a,{open:a,anchorEl:c.current,role:void 0,transition:!0,disablePortal:!0},(function(e){var t=e.TransitionProps,n=e.placement;return r.a.createElement(Qe.a,Object.assign({},t,{style:{transformOrigin:"bottom"===n?"center top":"center bottom"}}),r.a.createElement(Ye.a,null,r.a.createElement(Ge.a,{onClickAway:o},r.a.createElement(Xe.a,{autoFocusItem:a,id:"menu-list-grow",onKeyDown:l},s))))})))},tt=function(){var e={sortMenuItemList:["ID","Customer","Status"],filterMenuItemList:["ID","Customer","Status"]};return r.a.createElement(Pe.a,{container:!0,justify:"center",spacing:1},r.a.createElement(Pe.a,{item:!0,xs:12,md:6},r.a.createElement(Ve,null)),r.a.createElement(Pe.a,{item:!0,xs:!0,md:!0},r.a.createElement(et,{buttonText:"Sort by",buttonIcon:r.a.createElement(Ke.a,null),menuItems:e.sortMenuItemList})),r.a.createElement(Pe.a,{item:!0,xs:!0,md:!0},r.a.createElement(et,{buttonText:"Filter by",buttonIcon:r.a.createElement(qe.a,null),menuItems:e.filterMenuItemList})),r.a.createElement(Pe.a,{item:!0,md:2,lg:3}))},nt=n(5582),at=n(5583);function rt(){var e=Object(M.a)(["\n    text-align: center;\n    margin: auto;\n    padding-left: 20px;\n"]);return rt=function(){return e},e}function it(){var e=Object(M.a)(["\n    font-size: 16px;\n    font-weight: 700;\n"]);return it=function(){return e},e}function ct(){var e=Object(M.a)(["\n    border-radius: 3px;\n    width: 50%;\n    padding: 2px 5px;\n    background: transparent;\n    color: ",";\n    border: 2px solid ",";\n"]);return ct=function(){return e},e}function ot(){var e=Object(M.a)(["\n    font-size: 12px;\n    color: gray;\n    margin: 0;\n    padding-left: 2px;\n"]);return ot=function(){return e},e}function lt(){var e=Object(M.a)(["\n    font-size: 18px;\n    font-weight: 700;\n    margin: 0;\n"]);return lt=function(){return e},e}function ut(){var e=Object(M.a)(["\n    display: flex;\n    flex: 1 0 auto;\n"]);return ut=function(){return e},e}function st(){var e=Object(M.a)(["\n    border: ",";\n    margin: 10px auto;\n    padding: 3px 14px;\n    max-width: 345px;\n"]);return st=function(){return e},e}var mt=Object(q.b)(nt.a)(st(),(function(e){return void 0===e.requiredAction?"inherit":"1px solid red"})),dt=Object(q.b)(at.a)(ut()),pt=q.b.h1(lt()),ft=q.b.p(ot()),gt=q.b.a(ct(),(function(e){return e.status?"lightgreen":"gray"}),(function(e){return e.status?"lightgreen":"gray"})),Et=q.b.p(it()),ht=q.b.div(rt()),bt=n(5584),vt=n(111),yt=n.n(vt),Ot=n(112),wt=n.n(Ot),xt=n(113),jt=n.n(xt),Ct=n(114),kt=n.n(Ct),Nt=n(115),It=n.n(Nt),zt=n(116),Ut=n.n(zt),At=n(117),Ft=n.n(At),Pt=n(118),St=n.n(Pt);function Kt(){var e=Object(M.a)(["\n    font-size: ","px;\n"]);return Kt=function(){return e},e}var Tt=function(e,t){return e>=95?r.a.createElement(Wt,{htmlColor:"green",size:t}):e>=85?r.a.createElement(Dt,{htmlColor:"green",size:t}):e>=75?r.a.createElement(Rt,{htmlColor:"lightgreen",size:t}):e>=55?r.a.createElement(_t,{htmlColor:"lightgreen",size:t}):e>=45?r.a.createElement(Lt,{htmlColor:"yellow",size:t}):e>=25?r.a.createElement(Mt,{htmlColor:"orange",size:t}):e>=10?r.a.createElement(Bt,{htmlColor:"red",size:t}):r.a.createElement(Ht,{htmlColor:"red",size:t})},qt=q.b.div(Kt(),(function(e){return e.size})),Wt=qt.withComponent(yt.a),Dt=qt.withComponent(wt.a),Rt=qt.withComponent(jt.a),_t=qt.withComponent(kt.a),Lt=qt.withComponent(It.a),Mt=qt.withComponent(Ut.a),Bt=qt.withComponent(Ft.a),Ht=qt.withComponent(St.a),Jt=function(e){return Tt(e.soc,e.size)},Vt=function(e){var t="location: "+e.profile.location.latitude.toString()+"...";return r.a.createElement(mt,{requiredAction:e.requiredAction},r.a.createElement(bt.a,{title:e.requiredAction,titleTypographyProps:{align:"center",variant:"body1",color:"error"}}),r.a.createElement(dt,null,r.a.createElement("div",null,r.a.createElement(pt,null,e.id),r.a.createElement(ft,null,e.profile.modelNumber),r.a.createElement(Et,null,e.profile.productTypeName),r.a.createElement(Et,null,t),r.a.createElement(gt,{status:e.isPowerOn},e.isPowerOn?"ON":"OFF")),r.a.createElement(ht,null,r.a.createElement(Jt,{soc:e.soc,size:80}),r.a.createElement(Et,null,e.soc,"%"))))};function Gt(){var e=Object(M.a)(["\n    text-decoration: none;\n\n    &:focus, &:hover, &:visited, &:link, &:active {\n        text-decoration: none;\n    }\n"]);return Gt=function(){return e},e}var Qt=Object(q.b)(l.b)(Gt()),Yt=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return e.units.units}));Object(a.useEffect)((function(){console.log("units data should be fetched at this point"),e(function(){var e=Object(E.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t(x()),e.abrupt("return",b.a.get("https://jugem.live/api/v1/units/").then((function(e){t(j(e.data))})).catch((function(e){console.log(e),t(C(e))})));case 5:e.prev=5,e.t0=e.catch(0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})));return function(t){return e.apply(this,arguments)}}())}),[]);var n=t.map((function(e){return r.a.createElement(Pe.a,{item:!0,xs:12,sm:6,md:4,key:e.id},r.a.createElement(Qt,{to:"/units/".concat(e.id)},r.a.createElement(Vt,{id:e.id,requiredAction:e.requiredAction,profile:e.profile,isPowerOn:e.isPowerOn,isCharging:e.isCharging,soc:e.soc})))}));return r.a.createElement(r.a.Fragment,null,r.a.createElement(tt,null),r.a.createElement(Pe.a,{container:!0,spacing:1},n))},Zt=n(5588);function $t(){var e=Object(M.a)(["\n    border-radius: 3px;\n    width: 55%;\n    text-align: center;\n    padding: 2px 5px;\n    background: transparent;\n    color: ",";\n    border: 2px solid ",";\n"]);return $t=function(){return e},e}function Xt(){var e=Object(M.a)(["\n    font-size: 17px;\n    word-wrap: break-word;\n"]);return Xt=function(){return e},e}function en(){var e=Object(M.a)(["\n    font-size: 14px;\n    color: gray;\n"]);return en=function(){return e},e}function tn(){var e=Object(M.a)(["\n    font-size: 20px;\n    margin:0;\n"]);return tn=function(){return e},e}function nn(){var e=Object(M.a)(["\n    /* text-align: center; */\n    margin: auto;\n    padding: 20px;\n"]);return nn=function(){return e},e}var an=Object(q.b)(Ye.a)(nn()),rn=q.b.h2(tn()),cn=q.b.h4(en()),on=q.b.h3(Xt()),ln=q.b.h3($t(),(function(e){return e.status?"lightgreen":"gray"}),(function(e){return e.status?"lightgreen":"gray"})),un=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(Pe.a,{item:!0,xs:5},r.a.createElement(cn,null,e.itemKey)),r.a.createElement(Pe.a,{item:!0,xs:7},e.children))},sn=function(e){return r.a.createElement(an,null,r.a.createElement(Pe.a,{container:!0,spacing:0},r.a.createElement(Pe.a,{item:!0,xs:12},r.a.createElement(rn,null,"Unit Info")),r.a.createElement(un,{itemKey:"ID"},r.a.createElement(on,null,e.id)),r.a.createElement(un,{itemKey:"Model Numbe"},r.a.createElement(on,null,e.modelNumber)),r.a.createElement(un,{itemKey:"Product Type"},r.a.createElement(on,null,e.productTypeName)),r.a.createElement(un,{itemKey:"Battery Status"},r.a.createElement(ln,{status:e.isPowerOn},e.isPowerOn?"ON":"Off"))))},mn=function(e){return r.a.createElement(an,null,r.a.createElement(Pe.a,{container:!0,spacing:0},r.a.createElement(Pe.a,{item:!0,xs:12},r.a.createElement(rn,null,"Unit Performance")),r.a.createElement(un,{itemKey:"Capacity"},r.a.createElement(on,null,e.capacity," Ah")),r.a.createElement(un,{itemKey:"Current"},r.a.createElement(on,null,e.current," Ah")),r.a.createElement(un,{itemKey:"Voltage"},r.a.createElement(on,null,e.voltage," Ah")),r.a.createElement(un,{itemKey:"SoC"},r.a.createElement(on,null,r.a.createElement(Pe.a,{container:!0,spacing:0},r.a.createElement(Pe.a,{item:!0,xs:5},r.a.createElement(Jt,{soc:e.soc,size:60})),r.a.createElement(Pe.a,{item:!0,xs:7},r.a.createElement(on,null,e.soc,"%"))))),r.a.createElement(un,{itemKey:"SoH"},r.a.createElement(on,null,r.a.createElement(Pe.a,{container:!0,spacing:0},r.a.createElement(Pe.a,{item:!0,xs:5},r.a.createElement(Jt,{soc:e.soh,size:60})),r.a.createElement(Pe.a,{item:!0,xs:7},r.a.createElement(on,null,e.soh,"%")))))))},dn=function(e){return r.a.createElement(an,null,r.a.createElement(Pe.a,{container:!0,spacing:1},r.a.createElement(Pe.a,{item:!0,xs:12},r.a.createElement(rn,null,"Customer Info")),r.a.createElement(un,{itemKey:"Company"},r.a.createElement(on,null,e.companyName)),r.a.createElement(un,{itemKey:"Industry"},r.a.createElement(on,null,e.industry)),r.a.createElement(un,{itemKey:"Personnel"},r.a.createElement(on,null,e.personnelName)),r.a.createElement(un,{itemKey:"Email"},r.a.createElement(on,null,e.email)),r.a.createElement(un,{itemKey:"Phone Number"},r.a.createElement(on,null,e.phoneNumber)),r.a.createElement(Pe.a,{item:!0,xs:6},r.a.createElement(Ie.a,{variant:"contained",color:"primary"},"Customer Detail")),r.a.createElement(Pe.a,{item:!0,xs:6},r.a.createElement(Ie.a,{variant:"contained",color:"secondary"},"View Contract"))))},pn=n(119),fn=n.n(pn),gn=function(e){return r.a.createElement("div",null,e.text)},En=function(e){return r.a.createElement(an,null,r.a.createElement(Pe.a,{container:!0,spacing:0},r.a.createElement(Pe.a,{item:!0,xs:12},r.a.createElement(rn,null,"Location")),r.a.createElement(Pe.a,{item:!0,xs:12,style:{height:"50vh"}},r.a.createElement(fn.a,{bootstrapURLKeys:{key:"AIzaSyDGVrzNW2FhUWk0-ompNE_KNcJdUT9_z4c"},defaultCenter:{lat:e.location.latitude,lng:e.location.longitude},defaultZoom:11},r.a.createElement(gn,{lat:e.location.latitude,lng:e.location.longitude,text:e.id})))))},hn=function(e){var t=Object(o.b)(),n=Object(o.c)((function(e){return e.unit.unit})),i=e.match.params.id;Object(a.useEffect)((function(){console.log("fetching unit data"),t(function(e){return console.log("in init units"),function(){var t=Object(E.a)(g.a.mark((function t(n){return g.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,console.log("dispatching getUnitsRequest"),n(U()),t.abrupt("return",b.a.get("https://jugem.live/api/v1/detaile?unit_id="+e).then((function(e){console.log(e.data),n(A(e.data[0]))})).catch((function(e){console.log(e),n(F(e))})));case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})));return function(e){return t.apply(this,arguments)}}()}(i))}),[]);var c=null;if(""===n.id)c=r.a.createElement("p",null,"loading...");else{var l=null;void 0!==n.requiredAction&&(l=r.a.createElement(Zt.a,{severity:"error"},n.requiredAction)),c=r.a.createElement(Pe.a,{container:!0,spacing:1},r.a.createElement(Pe.a,{item:!0,xs:12,sm:12},l),r.a.createElement(Pe.a,{item:!0,xs:12,sm:6},r.a.createElement(sn,{requiredAction:n.requiredAction,id:n.id,modelNumber:n.profile.modelNumber,productTypeName:n.profile.productTypeName,isPowerOn:n.status.isPowerOn})),r.a.createElement(Pe.a,{item:!0,xs:12,sm:6},r.a.createElement(mn,{isCharging:n.status.isCharging,capacity:n.status.capacity,current:n.status.current,voltage:n.status.voltage,soc:n.status.soc,soh:n.status.soh})),r.a.createElement(Pe.a,{item:!0,xs:12,sm:6},r.a.createElement(dn,{companyName:"Komatsu",industry:"Heavy Machinery",personnelName:"Taro Yamada",email:"tyamada@hogehoge.co.jp",phoneNumber:"06-2345-1234"})),r.a.createElement(Pe.a,{item:!0,xs:12,sm:6},r.a.createElement(En,{location:n.profile.location,id:n.id})))}return r.a.createElement(r.a.Fragment,null,c)},bn=Object(u.g)((function(){var e=r.a.createElement(u.c,null,r.a.createElement(D,{exact:!0,path:"/units",component:Yt}),r.a.createElement(D,{path:"/units/:id",component:hn}));return r.a.createElement(K.b,{injectFirst:!0},r.a.createElement(T.a,{theme:_},r.a.createElement(q.a,{theme:_},r.a.createElement(Fe,null,e))))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(o.a,{store:S},r.a.createElement(l.a,null,r.a.createElement(m,null,r.a.createElement(bn,null))))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[5472,1,2]]]);
//# sourceMappingURL=main.f05424a4.chunk.js.map