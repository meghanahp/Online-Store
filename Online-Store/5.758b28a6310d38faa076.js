(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{WLUK:function(t,e,r){"use strict";r.r(e),r.d(e,"ProductsModule",(function(){return X}));var i=r("ofXK"),a=r("tyNb"),o=r("VHTt"),n=r("dR4o"),s=r("3Pt+"),c=r("fXoL"),l=r("H+bZ"),u=r("tk/3");let d=(()=>{class t extends l.a{constructor(t){super(),this.httpClient=t,this.productsUrl=this.baseApiUrl+"/products"}getAllProducts(t){return this.httpClient.get(`${this.productsUrl}?limit=${t}`)}addProduct(t){return this.httpClient.post(""+this.productsUrl,t)}deleteProduct(t){return this.httpClient.delete(`${this.productsUrl}/${t}`)}getProduct(t){return this.httpClient.get(`${this.productsUrl}/${t}`)}updateProduct(t,e){return this.httpClient.put(`${this.productsUrl}/${e}`,t)}getCategories(){return this.httpClient.get(this.productsUrl+"/categories")}}return t.\u0275fac=function(e){return new(e||t)(c.Ob(u.b))},t.\u0275prov=c.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var b=r("XNiG"),p=r("zx2A");class h{constructor(t){this.notifier=t}call(t,e){const r=new f(t),i=Object(p.c)(this.notifier,new p.a(r));return i&&!r.seenValue?(r.add(i),e.subscribe(r)):r}}class f extends p.b{constructor(t){super(t),this.seenValue=!1}notifyNext(){this.seenValue=!0,this.complete()}notifyComplete(){}}let g=(()=>{class t{constructor(t){this.ngControl=t,this.destroy$=new b.a,this.formatter=new Intl.NumberFormat("en-US",{maximumFractionDigits:2})}ngAfterViewInit(){var t;this.setValue(this.formatPrice(this.ngControl.value)),this.ngControl.control.valueChanges.pipe((t=this.destroy$,e=>e.lift(new h(t)))).subscribe(this.updateValue.bind(this))}updateValue(t){let e=t||"";this.setValue(e?this.validateDecimalValue(e.replace(/[^0-9.]/g,"")):"")}onFocus(){this.setValue(this.unformatValue(this.ngControl.value))}onBlur(){let t=this.ngControl.value||"";t&&this.setValue(this.formatPrice(t))}formatPrice(t){return this.formatter.format(t)}unformatValue(t){return t.replace(/,/g,"")}validateDecimalValue(t){if(Number.isNaN(Number(t))){const e=t.slice(0,t.length-1);return Number.isNaN(Number(e))?"":e}return t}setValue(t){this.ngControl.control.setValue(t,{emitEvent:!1})}ngOnDestroy(){this.setValue(this.unformatValue(this.ngControl.value)),this.destroy$.next(),this.destroy$.complete()}}return t.\u0275fac=function(e){return new(e||t)(c.Hb(s.g,2))},t.\u0275dir=c.Cb({type:t,selectors:[["","format-currency",""]],hostBindings:function(t,e){1&t&&c.Rb("focus",(function(){return e.onFocus()}))("blur",(function(){return e.onBlur()}))}}),t})();function m(t,e){1&t&&(c.Kb(0,"span",23),c.hc(1," Title is required "),c.Jb())}function v(t,e){1&t&&(c.Kb(0,"span",23),c.hc(1," Description is required "),c.Jb())}function D(t,e){if(1&t&&(c.Kb(0,"option",24),c.hc(1),c.Jb()),2&t){const t=e.$implicit;c.Yb("value",t),c.xb(1),c.jc(" ",t," ")}}function y(t,e){1&t&&(c.Kb(0,"span",23),c.hc(1," Category is required "),c.Jb())}function C(t,e){1&t&&(c.Kb(0,"span",23),c.hc(1," Price is required "),c.Jb())}function I(t,e){if(1&t&&(c.Kb(0,"form",8,9),c.Kb(2,"div",10),c.Kb(3,"div",11),c.Kb(4,"label",12),c.hc(5,"Title"),c.Jb(),c.Ib(6,"input",13),c.gc(7,m,2,0,"span",14),c.Jb(),c.Kb(8,"div",11),c.Kb(9,"label",15),c.hc(10,"Description"),c.Jb(),c.Ib(11,"textarea",16),c.gc(12,v,2,0,"span",14),c.Jb(),c.Kb(13,"div",11),c.Kb(14,"label",17),c.hc(15,"Category"),c.Jb(),c.Kb(16,"select",18),c.Kb(17,"option",19),c.hc(18,"--select--"),c.Jb(),c.gc(19,D,2,2,"option",20),c.Jb(),c.gc(20,y,2,0,"span",14),c.Jb(),c.Kb(21,"div",11),c.Kb(22,"label",21),c.hc(23,"Price"),c.Jb(),c.Ib(24,"input",22),c.gc(25,C,2,0,"span",14),c.Jb(),c.Jb(),c.Jb()),2&t){const t=c.Tb();c.Yb("formGroup",t.productFormGroup),c.xb(7),c.Yb("ngIf",t.isSubmitted&&(null==t.productFormGroup.get("title").errors?null:t.productFormGroup.get("title").errors.required)),c.xb(5),c.Yb("ngIf",t.isSubmitted&&(null==t.productFormGroup.get("description").errors?null:t.productFormGroup.get("description").errors.required)),c.xb(7),c.Yb("ngForOf",t.categories),c.xb(1),c.Yb("ngIf",t.isSubmitted&&(null==t.productFormGroup.get("category").errors?null:t.productFormGroup.get("category").errors.required)),c.xb(5),c.Yb("ngIf",t.isSubmitted&&(null==t.productFormGroup.get("price").errors?null:t.productFormGroup.get("price").errors.required))}}let T=(()=>{class t{constructor(t,e,r,i){this.productService=t,this.formBuilder=e,this.router=r,this.route=i,this.isSubmitted=!1}ngOnInit(){this.route.queryParams.subscribe(t=>{this.productId=t.productId,this.productId?this.loadProductDetails():(this.productDetails=new o.d,this.buildForm())}),this.loadCategories()}buildForm(){var t,e,r,i;this.productFormGroup=this.formBuilder.group({title:new s.c(null===(t=this.productDetails)||void 0===t?void 0:t.title,s.p.required),description:new s.c(null===(e=this.productDetails)||void 0===e?void 0:e.description,s.p.required),category:new s.c(null===(r=this.productDetails)||void 0===r?void 0:r.category,s.p.required),price:new s.c(null===(i=this.productDetails)||void 0===i?void 0:i.price,s.p.required)})}loadProductDetails(){this.productService.getProduct(this.productId).subscribe(t=>{this.productDetails=t,this.buildForm()})}save(){this.isSubmitted=!0,this.productFormGroup.valid&&(this.productId?this.productService.updateProduct(this.productFormGroup.getRawValue(),this.productId).subscribe(t=>{alert("Successfully updated Product Information"),this.navigateToProducts()}):this.productService.addProduct(this.productFormGroup.getRawValue()).subscribe(t=>{alert("Successfully saved Product Information"),this.navigateToProducts()}))}loadCategories(){this.productService.getCategories().subscribe(t=>{this.categories=t})}get f(){return this.productFormGroup.controls}navigateToProducts(){this.router.navigateByUrl(o.c.PRODUCTS)}reset(){this.productFormGroup.reset(),this.productFormGroup.markAsUntouched()}}return t.\u0275fac=function(e){return new(e||t)(c.Hb(d),c.Hb(s.b),c.Hb(a.f),c.Hb(a.a))},t.\u0275cmp=c.Bb({type:t,selectors:[["app-add-edit"]],decls:11,vars:1,consts:[[1,"container"],[1,"box","min-500"],[1,""],["type","button",1,"btn","btn-outline-secondary","mr-2",3,"click"],[1,"fa","fa-chevron-left"],["type","reset",1,"btn","btn-secondary","mr-2",3,"click"],["type","submit",1,"btn","btn-success","mr-2",3,"click"],[3,"formGroup",4,"ngIf"],[3,"formGroup"],["f","ngForm"],[1,"row","min-500"],[1,"form-group"],["for","title"],["type","text","name","title","formControlName","title",1,"form-control"],["class","form-text text-danger",4,"ngIf"],["for","desc"],["rows","3","name","desc","formControlName","description",1,"form-control"],["for","category"],["name","category","formControlName","category","name","category",1,"form-control"],["selected","","disabled","",3,"value"],[3,"value",4,"ngFor","ngForOf"],["for","price"],["type","text","formControlName","price","format-currency","",1,"form-control"],[1,"form-text","text-danger"],[3,"value"]],template:function(t,e){1&t&&(c.Kb(0,"div",0),c.Kb(1,"div",1),c.Kb(2,"div",2),c.Kb(3,"button",3),c.Rb("click",(function(){return e.navigateToProducts()})),c.Ib(4,"i",4),c.hc(5," All Products"),c.Jb(),c.Kb(6,"button",5),c.Rb("click",(function(){return e.reset()})),c.hc(7,"Clear"),c.Jb(),c.Kb(8,"button",6),c.Rb("click",(function(){return e.save()})),c.hc(9,"Save"),c.Jb(),c.Jb(),c.gc(10,I,26,6,"form",7),c.Jb(),c.Jb()),2&t&&(c.xb(10),c.Yb("ngIf",e.productFormGroup))},directives:[i.j,s.r,s.i,s.e,s.a,s.h,s.d,s.o,s.l,s.q,i.i,g],styles:[""]}),t})();class P{constructor(t){this.title=null==t?void 0:t.title,this.headers=null==t?void 0:t.headers,this.data=null==t?void 0:t.data,this.addEditCallback=null==t?void 0:t.addEditCallback,this.deleteCallback=null==t?void 0:t.deleteCallback,this.getDataCallback=null==t?void 0:t.getDataCallback}}var w=r("a5hE");const F=["anchor"],J=["*"];let x=(()=>{class t{constructor(t){this.host=t,this.options={},this.loadMore=new c.n}ngOnInit(){}ngAfterViewInit(){const t=Object.assign({root:this.isHostScrollable()?this.anchor.nativeElement:null},this.options);this.observer=new IntersectionObserver(([t])=>{t.isIntersecting&&this.loadMore.emit(!0)},t),this.observer.observe(this.anchor.nativeElement)}isHostScrollable(){const t=window.getComputedStyle(this.element);return"auto"===t.getPropertyValue("overflow")||"scroll"===t.getPropertyValue("overflow-y")}get element(){return this.host.nativeElement}}return t.\u0275fac=function(e){return new(e||t)(c.Hb(c.l))},t.\u0275cmp=c.Bb({type:t,selectors:[["infinite-scroll"]],viewQuery:function(t,e){var r;1&t&&c.kc(F,!0),2&t&&c.ac(r=c.Sb())&&(e.anchor=r.first)},inputs:{options:"options"},outputs:{loadMore:"loadMore"},ngContentSelectors:J,decls:3,vars:0,consts:[["anchor",""]],template:function(t,e){1&t&&(c.Xb(),c.Wb(0),c.Ib(1,"div",null,0))},styles:[""]}),t})(),K=(()=>{class t{transform(t){return null!=t&&t>0?new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(t):"--"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=c.Gb({name:"currency",type:t,pure:!0}),t})();var S=r("jhN1");let O=(()=>{class t{constructor(t){this.sanitizer=t}transform(t,...e){let r="";if(null!=t&&t>0){let e=Math.floor(t),i=t-Math.floor(t)>0?4-e:5-e;for(let t=0;t<e;t++)r+='<i class="fa fa-star"></i>';e>0&&(r+='<i class="fa fa-star-half-o"></i>');for(let t=0;t<i;t++)r+='<i class="fa fa-star-o"></i>'}return this.sanitizer.bypassSecurityTrustHtml(r)}}return t.\u0275fac=function(e){return new(e||t)(c.Hb(S.b))},t.\u0275pipe=c.Gb({name:"rating",type:t,pure:!0}),t})();function k(t,e){if(1&t&&(c.Kb(0,"th"),c.hc(1),c.Jb()),2&t){const t=e.$implicit;c.xb(1),c.ic(t)}}function N(t,e){if(1&t&&(c.Kb(0,"span"),c.hc(1),c.Jb()),2&t){const t=c.Tb().$implicit,e=c.Tb().$implicit;c.xb(1),c.jc(" ",e[t.dataField],"")}}function V(t,e){if(1&t&&(c.Kb(0,"span"),c.hc(1),c.Ub(2,"currency"),c.Jb()),2&t){const t=c.Tb().$implicit,e=c.Tb().$implicit;c.xb(1),c.jc(" ",c.Vb(2,1,e[t.dataField]),"")}}function E(t,e){if(1&t&&(c.Kb(0,"span"),c.Ib(1,"img",10),c.Jb()),2&t){const t=c.Tb().$implicit,e=c.Tb().$implicit;c.xb(1),c.Zb("src",e[t.dataField],c.ec)}}function G(t,e){if(1&t&&(c.Ib(0,"span",11),c.Ub(1,"rating")),2&t){const t=c.Tb().$implicit,e=c.Tb().$implicit,r=c.Tb();c.Yb("innerHTML",c.Vb(1,1,r.getDataValue(t,e)),c.dc)}}function R(t,e){if(1&t&&(c.Kb(0,"td"),c.gc(1,N,2,1,"span",6),c.gc(2,V,3,3,"span",6),c.gc(3,E,2,1,"span",6),c.gc(4,G,2,3,"span",9),c.Jb()),2&t){const t=e.$implicit,r=c.Tb(2);c.xb(1),c.Yb("ngIf",t.dataType==r.dataType.STRING),c.xb(1),c.Yb("ngIf",t.dataType==r.dataType.CURRENCY),c.xb(1),c.Yb("ngIf",t.dataType==r.dataType.IMAGE),c.xb(1),c.Yb("ngIf",t.dataType==r.dataType.OBJECT)}}function U(t,e){if(1&t){const t=c.Lb();c.Kb(0,"a",12),c.Rb("click",(function(){c.cc(t);const e=c.Tb().$implicit,r=c.Tb();return null==r.listData?null:r.listData.addEditCallback(e)})),c.hc(1,"Edit | "),c.Jb()}}function A(t,e){if(1&t){const t=c.Lb();c.Kb(0,"a",13),c.Rb("click",(function(){c.cc(t);const e=c.Tb().$implicit,r=c.Tb();return null==r.listData?null:r.listData.deleteCallback(e)})),c.hc(1,"Delete"),c.Jb()}}function M(t,e){if(1&t&&(c.Kb(0,"tr"),c.gc(1,R,5,4,"td",5),c.Kb(2,"td"),c.gc(3,U,2,0,"a",7),c.gc(4,A,2,0,"a",8),c.Jb(),c.Jb()),2&t){const t=c.Tb();c.xb(1),c.Yb("ngForOf",null==t.listData?null:t.listData.dataRows),c.xb(2),c.Yb("ngIf",null==t.listData?null:t.listData.addEditCallback),c.xb(1),c.Yb("ngIf",null==t.listData?null:t.listData.deleteCallback)}}function $(t,e){1&t&&(c.Kb(0,"tr"),c.Kb(1,"td",14),c.hc(2,"No Data Available"),c.Jb(),c.Jb())}let Y=(()=>{class t{constructor(){this.dataType=w.a,this.loadMoreData=()=>{var t,e;alert("calld"),(null===(t=this.listData)||void 0===t?void 0:t.getDataCallback)&&(null===(e=this.listData)||void 0===e||e.getDataCallback())}}ngOnInit(){}getDataValue(t,e){if(e[t.dataField]instanceof Object)return this.getObjectNthAttributeValue(e[t.dataField],t.targetDataFieldValue)}getObjectNthAttributeValue(t,e){if(t instanceof Object){if(t[e])return t[e];t.keys.forEach(r=>{if(t[r]instanceof Object)this.getObjectNthAttributeValue(t[r],e);else if(r==e)return t[r]})}}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=c.Bb({type:t,selectors:[["common-list"]],inputs:{listData:"listData"},decls:15,vars:4,consts:[[2,"height","400px","overflow-y","auto",3,"loadMore"],[1,"container"],[1,"float-right"],[1,"btn","btn-primary",3,"click"],[1,"table","table-bordered"],[4,"ngFor","ngForOf"],[4,"ngIf"],["class","text-link",3,"click",4,"ngIf"],["class","text-danger",3,"click",4,"ngIf"],[3,"innerHTML",4,"ngIf"],[3,"src"],[3,"innerHTML"],[1,"text-link",3,"click"],[1,"text-danger",3,"click"],["colspan","headers.length"]],template:function(t,e){1&t&&(c.Kb(0,"infinite-scroll",0),c.Rb("loadMore",(function(){return e.loadMoreData})),c.Kb(1,"section",1),c.Kb(2,"h1"),c.hc(3),c.Jb(),c.Kb(4,"span",2),c.Kb(5,"button",3),c.Rb("click",(function(){return null==e.listData?null:e.listData.addEditCallback()})),c.hc(6,"Add New"),c.Jb(),c.Jb(),c.Kb(7,"table",4),c.Kb(8,"tr"),c.gc(9,k,2,1,"th",5),c.Kb(10,"th"),c.hc(11,"Actions"),c.Jb(),c.Jb(),c.Kb(12,"tbody"),c.gc(13,M,5,3,"tr",5),c.gc(14,$,3,0,"tr",6),c.Jb(),c.Jb(),c.Jb(),c.Jb()),2&t&&(c.xb(3),c.ic(null==e.listData?null:e.listData.title),c.xb(6),c.Yb("ngForOf",null==e.listData?null:e.listData.headers),c.xb(4),c.Yb("ngForOf",null==e.listData?null:e.listData.data),c.xb(1),c.Yb("ngIf",!(null!=e.listData&&e.listData.data)))},directives:[x,i.i,i.j],pipes:[K,O],styles:["table[_ngcontent-%COMP%]{width:100%}table[_ngcontent-%COMP%], td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{border:1px solid #000;border-collapse:collapse}td[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{padding:15px}img[_ngcontent-%COMP%]{width:150px;height:150px}"]}),t})(),H=(()=>{class t{constructor(t,e,r){this.productService=t,this.router=e,this.activatedRoute=r,this.tableData=new P,this.pageSize=0}ngOnInit(){this.loadInitialData(),this.activatedRoute.data.subscribe(t=>{this.tableData.data=t.products})}loadInitialData(){this.tableData=new P,this.tableData.title="Product List",this.tableData.headers=["Image","Name","Description","Price","Rating"],this.tableData.dataRows=[{className:"",dataField:"image",dataType:w.a.IMAGE},{className:"",dataField:"title",dataType:w.a.STRING},{className:"",dataField:"description",dataType:w.a.STRING},{className:"",dataField:"price",dataType:w.a.CURRENCY},{className:"",dataField:"rating",dataType:w.a.OBJECT,targetDataFieldValue:"rate"}],this.tableData.deleteCallback=this.deleteProduct.bind(this),this.tableData.addEditCallback=this.addEditProduct.bind(this),this.tableData.getDataCallback=this.loadData.bind(this)}loadData(){this.productService.getAllProducts(this.pageSize+w.b.PAGE_SIZE).subscribe(t=>{this.tableData.data=t,this.pageSize=t.length})}deleteProduct(t){confirm("Are you sure about deleting product - "+t.title+"?"),this.productService.deleteProduct(t.id).subscribe(t=>{alert("Product Deleted ")})}addEditProduct(t){this.router.navigateByUrl(t?w.c.PRODUCTS+"/"+w.c.PRODUCTADDEDIT+"?productId="+(null==t?void 0:t.id):w.c.PRODUCTS+"/"+w.c.PRODUCTADDEDIT)}}return t.\u0275fac=function(e){return new(e||t)(c.Hb(d),c.Hb(a.f),c.Hb(a.a))},t.\u0275cmp=c.Bb({type:t,selectors:[["app-list"]],decls:1,vars:1,consts:[[3,"listData"]],template:function(t,e){1&t&&c.Ib(0,"common-list",0),2&t&&c.Yb("listData",e.tableData)},directives:[Y],styles:[""]}),t})(),j=(()=>{class t{constructor(t){this.productService=t}resolve(t,e){return this.productService.getAllProducts(o.b.PAGE_SIZE)}}return t.\u0275fac=function(e){return new(e||t)(c.Ob(d))},t.\u0275prov=c.Db({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var q=r("naTb");const B=[{path:o.c.HOME,component:(()=>{class t{constructor(t){this.sharedService=t,this.userSubscription=this.sharedService.onUpdateSession().subscribe(t=>{console.log(t)})}ngOnDestroy(){this.userSubscription.unsubscribe()}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)(c.Hb(q.a))},t.\u0275cmp=c.Bb({type:t,selectors:[["app-products"]],decls:1,vars:0,template:function(t,e){1&t&&c.Ib(0,"router-outlet")},directives:[a.h],styles:[""]}),t})(),canActivate:[n.a],children:[{path:o.c.HOME,component:H,resolve:{products:j}},{path:o.c.PRODUCTADDEDIT,component:T,canActivate:[n.a]}]}];let L=(()=>{class t{}return t.\u0275mod=c.Fb({type:t}),t.\u0275inj=c.Eb({factory:function(e){return new(e||t)},imports:[[a.g.forChild(B)],a.g]}),t})();var _=r("SLqQ"),z=r("PCNd");let X=(()=>{class t{}return t.\u0275mod=c.Fb({type:t}),t.\u0275inj=c.Eb({factory:function(e){return new(e||t)},imports:[[i.b,a.g,s.f,s.m,L,_.a,z.a]]}),t})()}}]);