(function(){"use strict";var t={2968:function(t,e,o){var s=o(8935),i=o(2809),a=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("Header"),o("Loader"),o("Notification"),o("PosterBg",{attrs:{poster:t.Poster}}),o("MoviesList",{attrs:{list:t.moviesList},on:{changePoster:t.onChangePoster}}),o("MoviesPagination",{attrs:{"current-page":t.currentPage,"per-page":t.moviesPerPage,total:t.moviesLength},on:{pageChanged:t.onPageChanged}})],1)},r=[],n=o(4665),l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("BContainer",[o("h3",{staticClass:"list-title"},[t._v(t._s(t.listTitle))]),o("BRow",[t.isExist?t._l(t.list,(function(e,s){return o("BCol",{key:s,attrs:{cols:"3"}},[o("MovieItem",{attrs:{movie:e},on:{removeItem:t.onRemoveItem,showModal:t.onShowMovieInfo},nativeOn:{mouseover:function(o){return t.onMouseOver(e.Poster)}}})],1)})):[o("div",[t._v("Empty List")])]],2),o("BModal",{attrs:{"body-class":"movie-modal-body",id:t.movieInfoModalID,size:"xl","hide-footer":"","hide-header":""}},[o("ModalInfoContent",{attrs:{movie:t.selectedMovie},on:{closeModal:t.onCloseModal}})],1)],1)],1)},c=[],u=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"movie-item mb-3"},[o("div",{staticClass:"movie-item-poster",style:t.posterBg}),o("div",{staticClass:"movie-info-wrap d-flex flex-column justify-content-between"},[o("div",{staticClass:"movie-item-info"},[o("h3",{staticClass:"movie-title"},[t._v(t._s(t.movie.Title))]),o("span",{staticClass:"movie-year"},[t._v(t._s(t.movie.Year))])]),o("div",{staticClass:"movie-item-controls row no-gutters"},[o("div",{staticClass:"col pr-2"},[o("BButton",{staticClass:"movie-buttons",attrs:{block:"",size:"md",variant:"outline-light"},on:{click:t.showInfoModalEvent}},[t._v("Info")])],1),o("div",{staticClass:"col pl-2"},[o("BButton",{staticClass:"movie-buttons",attrs:{block:"",size:"md",variant:"outline-light"},on:{click:t.emitRemoveEvent}},[t._v("Remove")])],1)])])])},v=[],m={name:"MovieItem",props:{movie:{type:Object,required:!0}},computed:{posterBg(){return{"background-image":`url(${this.movie.Poster})`}}},methods:{emitRemoveEvent(){this.$emit("removeItem",{id:this.movie.imdbID,title:this.movie.Title})},showInfoModalEvent(){this.$emit("showModal",this.movie.imdbID)}}},d=m,h=o(1001),g=(0,h.Z)(d,u,v,!1,null,"59c6d548",null),p=g.exports,f=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"movie-info-wrap"},[o("header",{staticClass:"movie-info-header"},[o("h6",{staticClass:"movie-header-title"},[t._v("Movie view")]),o("BIconX",{staticClass:"close-icon",on:{click:t.closeModal}})],1),o("div",{staticClass:"movie-info-content"},[o("BRow",[o("BCol",{attrs:{sm:"4"}},[o("div",{staticClass:"movie-poster-wrap"},[o("div",{staticClass:"movie-poster",style:t.posterStyle})])]),o("BCol",{attrs:{sm:"8"}},[o("h3",{staticClass:"movie-title"},[t._v(t._s(t.movie.Title))]),o("BFormRating",{staticClass:"movie-rating",attrs:{color:"gold",readonly:"","show-value":"",precision:"1",stars:"10","show-value-max":"","no-border":""},model:{value:t.movie.imdbRating,callback:function(e){t.$set(t.movie,"imdbRating",e)},expression:"movie.imdbRating"}}),o("p",{staticClass:"movie-description"},[t._v(t._s(t.movie.Plot))]),o("div",[o("BBadge",{staticClass:"movie-badge mr-2"},[t._v(t._s(t.movie.Year))]),o("BBadge",{staticClass:"movie-badge mr-2"},[t._v(t._s(t.movie.Runtime))]),o("BBadge",{staticClass:"movie-badge mr-2"},[t._v(t._s(t.movie.Genre))]),o("BBadge",{staticClass:"movie-badge mr-2"},[t._v(t._s(t.movie.Language))])],1),o("table",{staticClass:"table small"},[o("tbody",[o("tr",[o("th",[t._v("Production")]),o("td",[t._v(t._s(t.movie.Production))])]),o("tr",[o("th",[t._v("Country")]),o("td",[t._v(t._s(t.movie.Country))])]),o("tr",[o("th",[t._v("Director")]),o("td",[t._v(t._s(t.movie.Director))])]),o("tr",[o("th",[t._v("Writer")]),o("td",[t._v(t._s(t.movie.Writer))])]),o("tr",[o("th",[t._v("Actors")]),o("td",[t._v(t._s(t.movie.Actors))])]),o("tr",[o("th",[t._v("Awards")]),o("td",[t._v(t._s(t.movie.Awards))])])])])],1)],1)],1)])},_=[],b={name:"ModalInfoContent",props:{movie:{type:Object,requred:!0}},data:()=>({defaultPosterBg:"linear-gradient(45deg, rgba(0, 3, 38) 0%, rgba(82, 15, 117) 100%);"}),computed:{posterStyle(){return{"background-image":this.posterBg}},posterBg(){return this.movie?`url(${this.movie.Poster})`:this.defaultPosterBg}},methods:{closeModal(){this.$emit("closeModal")}}},P=b,M=(0,h.Z)(P,f,_,!1,null,"f09e62c4",null),C=M.exports,y={name:"MoviesList",props:{list:{type:Object,default:()=>({})}},data:()=>({movieInfoModalID:"movie-info",selectedMovieID:""}),components:{MovieItem:p,ModalInfoContent:C},methods:{...(0,n.nv)("movies",["removeMovie"]),...(0,n.nv)(["showNotify"]),onMouseOver(t){this.$emit("changePoster",t)},async onRemoveItem({id:t,title:e}){const o=await this.$bvModal.msgBoxConfirm(`Do you want to delete ${e}?`);o&&(this.removeMovie(t),this.showNotify({msg:"Movie deleted successful",variant:"success",title:"Success"}))},onShowMovieInfo(t){this.selectedMovieID=t,console.log(this.selectedMovie),this.$bvModal.show(this.movieInfoModalID)},onCloseModal(){this.selectedMovieID=null,this.$bvModal.hide(this.movieInfoModalID)}},computed:{...(0,n.Se)("movies",["isSearch"]),isExist(){return Boolean(Object.keys(this.list).length)},listTitle(){return this.isSearch?"Search result":"IMDB Top 250"},selectedMovie(){return this.selectedMovieID?this.list[this.selectedMovieID]:null}}},w=y,S=(0,h.Z)(w,l,c,!1,null,"24553f29",null),E=S.exports,I=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"poster-page-bg",style:t.currentPoster})},O=[],B={name:"PosterBg",props:{poster:{Type:String,default:""}},data:()=>({defaultPosterBg:"linear-gradient(45deg, rgba(0, 3, 38) 0%, rgba(82, 15, 117) 100%);"}),computed:{currentPoster(){return{"background-image":this.posterBg}},posterBg(){return this.poster?`url(${this.poster})`:this.defaultPosterBg}}},L=B,T=(0,h.Z)(L,I,O,!1,null,"7bc4b9b4",null),x=T.exports,D=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"movies-pagination d-flex justify-content-center"},[o("BPagination",{attrs:{align:"center","per-page":t.perPage,"total-rows":t.total,"prev-text":"prev","next-text":"next"},model:{value:t.currentPageModel,callback:function(e){t.currentPageModel=e},expression:"currentPageModel"}})],1)},R=[],$={name:"MoviesPagination",props:{currentPage:{type:Number,default:1},perPage:{type:Number,default:1},total:{type:Number,default:1}},computed:{currentPageModel:{get(){return this.currentPage},set(t){this.$emit("pageChanged",t)}}}},N=$,k=(0,h.Z)(N,D,R,!1,null,"3486bbf3",null),A=k.exports,G=function(){var t=this,e=t.$createElement,o=t._self._c||e;return t.isShowLoader?o("div",{staticClass:"loader-wrap"},[o("b-spinner",{staticStyle:{width:"3rem",height:"3rem"},attrs:{type:"grow",variant:"light"}})],1):t._e()},j=[],V={name:"Loader",computed:{...(0,n.Se)(["isShowLoader"])}},Z=V,H=(0,h.Z)(Z,G,j,!1,null,"ec69d30e",null),F=H.exports,q=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"header"},[o("BNavbar",{staticClass:"navbar",attrs:{type:"dark",variant:"dark"}},[o("BContainer",[o("BNavbarBrand",{attrs:{href:"#"}},[t._v("MovieDB")]),o("BNavForm",[o("BFormInput",{staticClass:"mr-sm-2 search-input",attrs:{placeholder:"Search",debounce:"800"},model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}})],1)],1)],1)],1)},W=[],Y={name:"Header",data:()=>({searchValue:""}),watch:{searchValue:"onSearchValueChanged"},methods:{...(0,n.nv)("movies",["searchMovies","fetchMovies","toggleSearchState"]),onSearchValueChanged(t){t?(this.searchMovies(t),this.toggleSearchState(!0)):(this.fetchMovies(),this.toggleSearchState(!1))}}},U=Y,z=(0,h.Z)(U,q,W,!1,null,"b16cc28c",null),Q=z.exports,X=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div")},J=[],K={name:"Notification",computed:{...(0,n.Se)(["messagePool"])},watch:{messagePool:"showNotification"},methods:{showNotification({variant:t,msg:e,title:o}){this.$bvToast.toast(e,{title:o||"default",variant:t,noCloseButton:!0,autoHideDelay:9e3})}}},tt=K,et=(0,h.Z)(tt,X,J,!1,null,null,null),ot=et.exports,st={name:"App",components:{MoviesList:E,PosterBg:x,MoviesPagination:A,Loader:F,Header:Q,Notification:ot},data:()=>({Poster:""}),watch:{"$route.query":{handler:"onPageQueryChange",immediate:!0,deep:!0}},methods:{...(0,n.nv)("movies",["changeCurrentPage"]),onPageQueryChange({page:t=1}){this.changeCurrentPage(Number(t))},onChangePoster(t){this.Poster=t},onPageChanged(t){this.$router.push({query:{page:t}})}},computed:{...(0,n.Se)("movies",["moviesList","currentPage","moviesPerPage","moviesLength"])}},it=st,at=(0,h.Z)(it,a,r,!1,null,null,null),rt=at.exports,nt=(o(1703),["tt0111161","tt0068646","tt0071562","tt0468569","tt0050083","tt0108052","tt0167260","tt0110912","tt0060196","tt0137523","tt0120737","tt0109830","tt0080684","tt1375666","tt0167261","tt0073486","tt0099685","tt0133093","tt0047478","tt0114369","tt0317248","tt0076759","tt0102926","tt0038650","tt0118799","tt4633694","tt0114814","tt0245429","tt0120815","tt0110413","tt0120689","tt0816692","tt0054215","tt0120586","tt0021749","tt0064116","tt0034583","tt0027977","tt0253474","tt1675434","tt0407887","tt0088763","tt0103064","tt2582802","tt0047396","tt0082971","tt0110357","tt0172495","tt0482571","tt0078788","tt0209144","tt0078748","tt0095765","tt0032553","tt0095327","tt0043014","tt0405094","tt0057012","tt4154756","tt0050825","tt0081505","tt1853728","tt0910970","tt0119698","tt0051201","tt0364569","tt1345836","tt0169547","tt0090605","tt0087843","tt2380307","tt0082096","tt0033467","tt0112573","tt0052357","tt0053125","tt0105236","tt0086190","tt5311514","tt0022100","tt0086879","tt5074352","tt0180093","tt0986264","tt0056172","tt1187043","tt0338013","tt0062622","tt0066921","tt0114709","tt0211915","tt0036775","tt0045152","tt0075314","tt0361748","tt0093058","tt0040522","tt0056592","tt0012349","tt0070735","tt0119217","tt0435761","tt2106476","tt0208092","tt0086250","tt0071853","tt0059578","tt0053604","tt0017136","tt0119488","tt1832382","tt0097576","tt0042876","tt1049413","tt0042192","tt0372784","tt0055630","tt0053291","tt0105695","tt0363163","tt0095016","tt0040897","tt0113277","tt8108198","tt0044741","tt1255953","tt0081398","tt0057115","tt0118849","tt0457430","tt0476735","tt0071315","tt0041959","tt0096283","tt0347149","tt0089881","tt0055031","tt1305806","tt0015864","tt0050212","tt0268978","tt1727824","tt0120735","tt0112641","tt0047296","tt5027774","tt0050976","tt2096673","tt0080678","tt0993846","tt3170832","tt0434409","tt0031679","tt1291584","tt0083658","tt0046912","tt0050986","tt0017925","tt0477348","tt0117951","tt0469494","tt0167404","tt0031381","tt0084787","tt0116282","tt1205489","tt0077416","tt0266543","tt0091251","tt0015324","tt0118715","tt1130884","tt0266697","tt0061512","tt0032976","tt0046438","tt0978762","tt2119532","tt2267998","tt0892769","tt0018455","tt3011894","tt0107290","tt0758758","tt0120382","tt0107207","tt2278388","tt0025316","tt0079470","tt0092005","tt0091763","tt0079944","tt0116231","tt0074958","tt0353969","tt0060827","tt0052618","tt0395169","tt2024544","tt0405159","tt0060107","tt0019254","tt0046268","tt0112471","tt1979320","tt1392190","tt0053198","tt1392214","tt1028532","tt1895587","tt3315342","tt0245712","tt0405508","tt0093779","tt0264464","tt0087544","tt1201607","tt0064115","tt0075148","tt0072684","tt0198781","tt0032551","tt0033870","tt0097165","tt0088247","tt0246578","tt0083987","tt0046911","tt0113247","tt0107048","tt0050783","tt0032138","tt0118694","tt0073195","tt1454029","tt4016934","tt2991224","tt4430212","tt0056443","tt0381681","tt0070510","tt0087884","tt0092067","tt1954470","tt0036868","tt0083922","tt2338151","tt2015381","tt0169102","tt0056801"]),lt=o(6166),ct=o.n(lt);function ut(t){const e=t.params||{};return t.params=Object.assign(e,{apikey:"6f0cccc6",plot:"full"}),t}function vt(t){return t.data}function mt(t){t.interceptors.request.use(ut),t.interceptors.response.use(vt)}const dt=ct().create({baseURL:"https://www.omdbapi.com"});mt(dt);var ht=dt,gt={MOVIES:"MOVIES",CURRENT_PAGE:"CURRENT_PAGE",TOGGLE_LOADER:"TOGGLE_LOADER",REMOVE_MOVIE:"REMOVE_MOVIE",TOGGLE_SEARCH:"TOGGLE_SEARCH",SHOW_TOAST_NOTIFY:"SHOW_TOAST_NOTIFY"};function pt(t){return t.reduce(((t,e)=>(t[e.imdbID]=e,t)),{})}const{MOVIES:ft,CURRENT_PAGE:_t,REMOVE_MOVIE:bt,TOGGLE_SEARCH:Pt}=gt,Mt={namespaced:!0,state:{top250IDs:nt,moviesPerPage:12,currentPage:1,movies:{},isSearch:!1},getters:{moviesList:({movies:t})=>t,slicedIDs:({top250IDs:t})=>(e,o)=>t.slice(e,o),currentPage:({currentPage:t})=>t,moviesPerPage:({moviesPerPage:t})=>t,moviesLength:({top250IDs:t})=>Number(Object.keys(t).length),isSearch:({isSearch:t})=>t},mutations:{[ft](t,e){t.movies=e},[_t](t,e){t.currentPage=e},[bt](t,e){t.top250IDs.splice(e,1)},[Pt](t,e){t.isSearch=e}},actions:{async fetchMovies({getters:t,commit:e,dispatch:o}){try{o("toggleLoader",!0,{root:!0});const{currentPage:s,moviesPerPage:i,slicedIDs:a}=t,r=s*i-i,n=s*i,l=a(r,n),c=l.map((t=>ht.get(`/?i=${t}`))),u=await Promise.all(c),v=pt(u);e(ft,v)}catch(s){console.log(s)}finally{o("toggleLoader",!1,{root:!0})}},changeCurrentPage({commit:t,dispatch:e},o){t(_t,o),e("fetchMovies")},removeMovie({commit:t,dispatch:e,state:o},s){const i=o.top250IDs.findIndex((t=>t===s));-1!==i&&(t(bt,i),e("fetchMovies"))},async searchMovies({commit:t,dispatch:e},o){try{e("toggleLoader",!0,{root:!0});const s=await ht.get(`/?s=${o}`);if(s.Error)throw Error(s.Error);console.log(s);const i=pt(s.Search);t(ft,i)}catch(s){e("showNotify",{msg:s.message,title:"Error",variant:"danger"},{root:!0})}finally{e("toggleLoader",!1,{root:!0})}},toggleSearchState({commit:t},e){t(Pt,e)}}};var Ct=Mt;const{TOGGLE_LOADER:yt}=gt,wt={state:{isShowLoader:!1},getters:{isShowLoader:({isShowLoader:t})=>t},mutations:{[yt](t,e){t.isShowLoader=e}},actions:{toggleLoader({commit:t},e){t(yt,e)}}};var St=wt;const{SHOW_TOAST_NOTIFY:Et}=gt,It={state:{messagePool:[]},getters:{messagePool:({messagePool:t})=>t[t.length-1]},mutations:{[Et](t,e){t.messagePool.push(e)}},actions:{showNotify({commit:t},e){t(Et,e)}}};var Ot=It;s["default"].use(n.ZP);const Bt=new n.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{movies:Ct,loader:St,notification:Ot}});var Lt=Bt,Tt=o(8262),xt=o(3266);o(44);s["default"].use(Tt.XG7),s["default"].use(xt.A7),s["default"].config.productionTip=!1,s["default"].use(i.Z);const Dt=new i.Z({mode:"history",base:"/movies-app/",routes:[{path:"/",name:"root",component:rt}]});new s["default"]({router:Dt,store:Lt,render:t=>t(rt)}).$mount("#app")}},e={};function o(s){var i=e[s];if(void 0!==i)return i.exports;var a=e[s]={exports:{}};return t[s](a,a.exports,o),a.exports}o.m=t,function(){var t=[];o.O=function(e,s,i,a){if(!s){var r=1/0;for(u=0;u<t.length;u++){s=t[u][0],i=t[u][1],a=t[u][2];for(var n=!0,l=0;l<s.length;l++)(!1&a||r>=a)&&Object.keys(o.O).every((function(t){return o.O[t](s[l])}))?s.splice(l--,1):(n=!1,a<r&&(r=a));if(n){t.splice(u--,1);var c=i();void 0!==c&&(e=c)}}return e}a=a||0;for(var u=t.length;u>0&&t[u-1][2]>a;u--)t[u]=t[u-1];t[u]=[s,i,a]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var s in e)o.o(e,s)&&!o.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};o.O.j=function(e){return 0===t[e]};var e=function(e,s){var i,a,r=s[0],n=s[1],l=s[2],c=0;if(r.some((function(e){return 0!==t[e]}))){for(i in n)o.o(n,i)&&(o.m[i]=n[i]);if(l)var u=l(o)}for(e&&e(s);c<r.length;c++)a=r[c],o.o(t,a)&&t[a]&&t[a][0](),t[a]=0;return o.O(u)},s=self["webpackChunkmovies_app"]=self["webpackChunkmovies_app"]||[];s.forEach(e.bind(null,0)),s.push=e.bind(null,s.push.bind(s))}();var s=o.O(void 0,[998],(function(){return o(2968)}));s=o.O(s)})();
//# sourceMappingURL=app.b9efeb5f.js.map