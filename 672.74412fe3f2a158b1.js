"use strict";(self.webpackChunkexercise_log=self.webpackChunkexercise_log||[]).push([[672],{7672:(E,p,i)=>{i.r(p),i.d(p,{AuthModule:()=>q});var l=i(6895),g=i(2591),e=i(4650);let h=(()=>{class t{constructor(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-auth"]],decls:13,vars:0,consts:[[1,"auth"],[1,"image"],[1,"logo"],["alt","logo image","src","assets/images/logo.svg"],[1,"quote"],[1,"text"],[1,"name"],[1,"job"],[1,"content"]],template:function(n,s){1&n&&(e.TgZ(0,"div",0)(1,"div",1)(2,"div",2),e._UZ(3,"img",3),e.qZA(),e.TgZ(4,"div",4)(5,"div",5),e._uU(6,"\u201cWe often overestimate how often we do things, but tracking eliminates this weakness. When we track we just have the facts, not our subjective reflections.\u201d"),e.qZA(),e.TgZ(7,"div",6),e._uU(8,"Betsy Ramser Jaime"),e.qZA(),e.TgZ(9,"div",7),e._uU(10,"Freelance Editor"),e.qZA()()(),e.TgZ(11,"div",8),e._UZ(12,"router-outlet"),e.qZA()())},dependencies:[g.lC],styles:[".auth[_ngcontent-%COMP%]{display:flex;height:100vh;width:100vw;justify-content:space-between}.auth[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:space-between;color:#fff;width:60vw;padding:3.875rem;background-image:url(auth-bg.4937e44e0eb313c1.jpg);background-position:center center;background-repeat:no-repeat;background-size:cover;letter-spacing:.025rem;line-height:2.625rem}.auth[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-size:2rem;margin-bottom:1rem}.auth[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:1.5rem;margin-bottom:.5rem}.auth[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .job[_ngcontent-%COMP%]{font-weight:300;font-size:1.125rem;line-height:1.375rem}.auth[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:1.25rem;display:flex;align-items:center;justify-content:center;width:40vw;background-color:#f5f3f4}"],changeDetection:0}),t})(),f=(()=>{class t{constructor(){}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-login"]],decls:2,vars:0,template:function(n,s){1&n&&(e.TgZ(0,"p"),e._uU(1,"login works!"),e.qZA())},changeDetection:0}),t})();var o=i(433);function v(t){const r=t.get("password")?.value,n=t.get("confirmPassword")?.value;return r===n?null:{password:!0}}var w=i(9810),a=i(2997),Z=i(1909),d=i(5712);const m=(0,a.ZF)(Z.Dm),A=(0,a.P1)(m,t=>t.pending===d.J.Active),M=(0,a.P1)(m,t=>t.pending===d.J.Error),y=(0,a.P1)(m,t=>t.errorMessage);function P(t,r){if(1&t&&(e._UZ(0,"app-auth-error-message",15),e.ALo(1,"async")),2&t){const n=e.oxw();e.Q6J("message",e.lcZ(1,1,n.errorMessage$))}}function b(t,r){if(1&t&&e._UZ(0,"app-field-error-message",6),2&t){const n=e.oxw();e.Q6J("control",n.registerForm)}}let u=(()=>{class t{constructor(n){this.store=n,this.registerForm=new o.cw({name:new o.NI("",{validators:[o.kI.required,o.kI.minLength(2),o.kI.maxLength(30)],nonNullable:!0}),email:new o.NI("",{validators:[o.kI.required,o.kI.pattern("^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$")],nonNullable:!0}),password:new o.NI("",{validators:[o.kI.required,o.kI.minLength(8)],nonNullable:!0}),confirmPassword:new o.NI("",{validators:[o.kI.required,o.kI.minLength(8)],nonNullable:!0})},[v]),this.errorAfterLoading$=this.store.select(M),this.isLoading$=this.store.select(A),this.errorMessage$=this.store.select(y)}register(){const n=this.registerForm.getRawValue();this.store.dispatch((0,w.aX)({register:n}))}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(a.yh))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-register"]],decls:36,vars:17,consts:[[1,"title"],[1,"subtitle"],[3,"message",4,"ngIf"],["action","",1,"form",3,"formGroup"],[1,"form-field"],["formControlName","name","type","text","pInputText",""],[3,"control"],["formControlName","email","type","text","pInputText",""],["formControlName","password","type","password","pInputText",""],["formControlName","confirmPassword","type","password","pInputText",""],[3,"control",4,"ngIf"],[1,"actions"],["pButton","",3,"disabled","appSpinner","label","click"],[1,"link"],["routerLink","login"],[3,"message"]],template:function(n,s){1&n&&(e.TgZ(0,"h1",0),e._uU(1,"Create an account"),e.qZA(),e.TgZ(2,"h2",1),e._uU(3,"Let\u2019s start track your goal"),e.qZA(),e.YNc(4,P,2,3,"app-auth-error-message",2),e.ALo(5,"async"),e.TgZ(6,"form",3)(7,"div",4)(8,"label"),e._uU(9,"Name"),e.qZA(),e._UZ(10,"input",5)(11,"app-field-error-message",6),e.qZA(),e.TgZ(12,"div",4)(13,"label"),e._uU(14,"Email"),e.qZA(),e._UZ(15,"input",7)(16,"app-field-error-message",6),e.qZA(),e.TgZ(17,"div",4)(18,"label"),e._uU(19,"Password"),e.qZA(),e._UZ(20,"input",8)(21,"app-field-error-message",6),e.qZA(),e.TgZ(22,"div",4)(23,"label"),e._uU(24,"Confirm password"),e.qZA(),e._UZ(25,"input",9),e.YNc(26,b,1,1,"app-field-error-message",10),e.qZA(),e.TgZ(27,"div",11)(28,"button",12),e.NdJ("click",function(){return s.register()}),e.ALo(29,"async"),e.ALo(30,"async"),e.ALo(31,"async"),e.qZA()(),e.TgZ(32,"div",13),e._uU(33," Already have an account? "),e.TgZ(34,"span",14),e._uU(35,"Log In"),e.qZA()()()),2&n&&(e.xp6(4),e.Q6J("ngIf",e.lcZ(5,9,s.errorAfterLoading$)),e.xp6(2),e.Q6J("formGroup",s.registerForm),e.xp6(5),e.Q6J("control",s.registerForm.controls.name),e.xp6(5),e.Q6J("control",s.registerForm.controls.email),e.xp6(5),e.Q6J("control",s.registerForm.controls.password),e.xp6(5),e.Q6J("ngIf",s.registerForm.controls.confirmPassword.touched),e.xp6(2),e.Q6J("disabled",s.registerForm.invalid||e.lcZ(29,11,s.isLoading$))("appSpinner",e.lcZ(30,13,s.isLoading$))("label",e.lcZ(31,15,s.isLoading$)?" ":"Sign Up"))},styles:[".title[_ngcontent-%COMP%]{font-weight:500;font-size:2.25rem;line-height:2.688rem;color:#0b090a;margin-bottom:.875rem}.subtitle[_ngcontent-%COMP%]{margin-bottom:2rem}.link[_ngcontent-%COMP%]{text-align:center}.link[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:#ab2c26;text-decoration:underline;cursor:pointer}.subtitle[_ngcontent-%COMP%], .link[_ngcontent-%COMP%]{font-size:1rem;line-height:1.5rem;letter-spacing:.025rem;color:#737373}.actions[_ngcontent-%COMP%]{margin:1.5rem 0}.actions[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{display:block;width:26rem;margin-bottom:.875rem}"],changeDetection:0}),t})();const _=[{path:"",component:h,children:[{path:"login",component:f},{path:"register",component:u},{path:"**",redirectTo:"login"}]}];let O=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[g.Bz.forChild(_),g.Bz]}),t})();var T=i(2234);let x=(()=>{class t{constructor(){this.message=""}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-auth-error-message"]],inputs:{message:"message"},decls:5,vars:1,consts:[[1,"error-card"],[1,"error-title"],[1,"error-message"]],template:function(n,s){1&n&&(e.TgZ(0,"div",0)(1,"div",1),e._uU(2,"Oh, something went wrong!"),e.qZA(),e.TgZ(3,"div",2),e._uU(4),e.qZA()()),2&n&&(e.xp6(4),e.Oqu(s.message))},styles:[".error-card[_ngcontent-%COMP%]{border:solid .125rem #AB2C26;border-radius:.6rem;padding:1rem;margin-bottom:1rem}.error-title[_ngcontent-%COMP%]{font-weight:700;font-size:1rem;margin-bottom:.5rem}"],changeDetection:0}),t})();var L=i(1740),F=i(7170);function I(t,r){if(1&t&&(e.ynx(0),e.TgZ(1,"small",1),e._uU(2),e.qZA(),e._UZ(3,"div",2),e.BQk()),2&t){const n=e.oxw();e.xp6(2),e.Oqu(n.errorMessage)}}let U=(()=>{class t{get errorMessage(){switch(Object.keys(this.control.errors||{})[0]){case"required":return"This field is required!";case"pattern":return"This field is not correct";case"minlength":return`Min length should be  ${this.control.errors?.minlength.requiredLength}`;case"maxlength":return`Max length should be  ${this.control.errors?.maxlength.requiredLength}`;case"password":return"Passwords do not match"}return""}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-field-error-message"]],inputs:{control:"control"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"p-error","block","err-m"],[1,"empty-space"]],template:function(n,s){1&n&&e.YNc(0,I,4,1,"ng-container",0),2&n&&e.Q6J("ngIf",s.control.touched&&s.control.invalid)},dependencies:[l.O5],styles:[".empty-space[_ngcontent-%COMP%]{display:block;height:.5rem;width:1rem}"]}),t})(),k=(()=>{class t{constructor(n,s){this.renderer=n,this.elementRef=s,this.spinner=this.renderer.createElement("i"),this.renderer.addClass(this.spinner,"pi"),this.renderer.addClass(this.spinner,"pi-spin"),this.renderer.addClass(this.spinner,"pi-spinner"),this.renderer.addClass(this.spinner,"hidden")}set isLoading(n){n?(this.renderer.removeClass(this.spinner,"hidden"),this.renderer.appendChild(this.elementRef.nativeElement,this.spinner)):this.renderer.addClass(this.spinner,"hidden")}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(e.Qsj),e.Y36(e.SBq))},t.\u0275dir=e.lG2({type:t,selectors:[["","appSpinner",""]],inputs:{isLoading:["appSpinner","isLoading"]}}),t})(),q=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.ez,T.m,O]}),t})();e.B6R(u,[l.O5,L.o,F.Hq,U,o._Y,o.Fj,o.JJ,o.JL,o.sg,o.u,k,g.rH,x],[l.Ov])}}]);