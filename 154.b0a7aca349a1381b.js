"use strict";(self.webpackChunkexercise_log=self.webpackChunkexercise_log||[]).push([[154],{1154:(Ae,A,i)=>{i.r(A),i.d(A,{AuthModule:()=>be});var a=i(6895),l=i(2591),S=i(655),P=i(7579),J=i(727),e=(i(457),i(515),i(4650)),R=(i(5577),i(2722));const $=e.GuJ,B=Symbol("__destroy"),T=Symbol("__decoratorApplied");function I(t){return"string"==typeof t?Symbol(`__destroy__${t}`):B}function x(t,n){t[n]||(t[n]=new P.x)}function L(t,n){t[n]&&(t[n].next(),t[n].complete(),t[n]=null)}function O(t){t instanceof J.w0&&t.unsubscribe()}function U(t,n){return function(){if(t&&t.call(this),L(this,I()),n.arrayName&&function G(t){Array.isArray(t)&&t.forEach(O)}(this[n.arrayName]),n.checkProperties)for(const o in this)n.blackList?.includes(o)||O(this[o])}}Symbol("CheckerHasBeenSet");const te=[{imgUrl:"slider-item-1.jpg",text:"\u201cWe often overestimate how often we do things, but tracking eliminates this weakness. When we track we just have the facts, not our subjective reflections.\u201d",name:"Betsy Ramser Jaime",job:"Freelance Editor"},{imgUrl:"slider-item-2.jpg",text:"\u201cIf we could give every individual the right amount of nourishment and exercise, not too little and not too much, we would have found the safest way to health.\u201d",name:"Hippocrates",job:"Greek physician"},{imgUrl:"slider-item-3.jpg",text:"\u201cIf you want to find the real competition, just look in the mirror. After awhile you'll see your rivals scrambling for second place.\u201d",name:"Criss Jam",job:"Musical artist"}];var m=i(9810),c=i(2997),oe=i(2671),ne=i(805);const re=function(t){return{"background-image":t}};function se(t,n){if(1&t&&(e.TgZ(0,"div",5)(1,"div",6),e._UZ(2,"img",7),e.qZA(),e.TgZ(3,"div",8)(4,"div",9),e._uU(5),e.qZA(),e.TgZ(6,"div",10),e._uU(7),e.qZA(),e.TgZ(8,"div",11),e._uU(9),e.qZA()()()),2&t){const o=n.$implicit,r=e.oxw();e.Q6J("ngStyle",e.VKq(4,re,r.backgroundImageValue(o.imgUrl))),e.xp6(5),e.Oqu(o.text),e.xp6(2),e.Oqu(o.name),e.xp6(2),e.Oqu(o.job)}}let p=class{constructor(n,o){this.router=n,this.store=o,this.sliderItems=te,this.router.events.pipe(function ee(t,n){return o=>{const r=I(n);return"string"==typeof n?function W(t,n,o){const r=t[n];x(t,o),t[n]=function(){r.apply(this,arguments),L(this,o),t[n]=r}}(t,n,r):x(t,r),o.pipe((0,R.R)(t[r]))}}(this)).subscribe(r=>{r instanceof l.OD&&this.store.dispatch((0,m.ir)())})}backgroundImageValue(n){return`url(assets/images/slider/${n})`}};p.\u0275fac=function(n){return new(n||p)(e.Y36(l.F0),e.Y36(c.yh))},p.\u0275cmp=e.Xpm({type:p,selectors:[["app-auth"]],decls:6,vars:7,consts:[[1,"auth"],[3,"value","showNavigators","showIndicators","autoplayInterval","numVisible","numScroll","circular"],["carousel",""],["pTemplate","item"],[1,"content"],[1,"image",3,"ngStyle"],[1,"logo"],["alt","logo image","src","assets/images/logo.svg"],[1,"quote"],[1,"text"],[1,"name"],[1,"job"]],template:function(n,o){1&n&&(e.TgZ(0,"div",0)(1,"p-carousel",1,2),e.YNc(3,se,10,6,"ng-template",3),e.qZA(),e.TgZ(4,"div",4),e._UZ(5,"router-outlet"),e.qZA()()),2&n&&(e.xp6(1),e.Q6J("value",o.sliderItems)("showNavigators",!1)("showIndicators",!1)("autoplayInterval",5e3)("numVisible",1)("numScroll",1)("circular",!0))},dependencies:[a.PC,oe.l,ne.jx,l.lC],styles:[".auth[_ngcontent-%COMP%]{display:flex;height:100vh;width:100vw;justify-content:space-between;background-color:#171a1d}.auth[_ngcontent-%COMP%]   p-carousel[_ngcontent-%COMP%]{width:60vw}.auth[_ngcontent-%COMP%]   p-carousel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{display:flex;height:100vh;flex-direction:column;justify-content:space-between;color:#fff;padding:3.875rem;background-position:center center;background-repeat:no-repeat;background-size:cover;letter-spacing:.025rem;line-height:2.625rem}.auth[_ngcontent-%COMP%]   p-carousel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%]{font-size:2rem;margin-bottom:1rem}.auth[_ngcontent-%COMP%]   p-carousel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%]{font-size:1.5rem;margin-bottom:.5rem}.auth[_ngcontent-%COMP%]   p-carousel[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .job[_ngcontent-%COMP%]{font-weight:300;font-size:1.125rem;line-height:1.375rem}.auth[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]{padding:1.25rem;display:flex;align-items:center;justify-content:center;width:40vw;background-color:#fff}"]}),p=(0,S.gn)([function z(t={}){return n=>{!function Q(t){return!!t[$]}(n)?function H(t,n){t.prototype.ngOnDestroy=U(t.prototype.ngOnDestroy,n)}(n,t):function V(t,n){const o=t.\u0275pipe;o.onDestroy=U(o.onDestroy,n)}(n,t),function Y(t){t.prototype[T]=!0}(n)}}()],p);var s=i(433);const y="^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$";function E(t){const n=t.get("password")?.value,o=t.get("confirmPassword")?.value;return n===o?null:{password:!0}}var ae=i(1909),q=i(5712);const Z=(0,c.ZF)(ae.Dm),g=(0,c.P1)(Z,t=>t.pending===q.J.Active),M=(0,c.P1)(Z,t=>t.pending===q.J.Error),le=(0,c.P1)(Z,t=>t.errorMessage);var h=i(1740),f=i(5593);function ce(t,n){if(1&t&&(e.ynx(0),e.TgZ(1,"small",1),e._uU(2),e.qZA(),e._UZ(3,"div",2),e.BQk()),2&t){const o=e.oxw();e.xp6(2),e.Oqu(o.errorMessage)}}let v=(()=>{class t{get errorMessage(){switch(Object.keys(this.control.errors||{})[0]){case"required":return"This field is required!";case"pattern":return"This field is not correct";case"minlength":return`Min length should be  ${this.control.errors?.minlength.requiredLength}`;case"maxlength":return`Max length should be  ${this.control.errors?.maxlength.requiredLength}`;case"password":return"Passwords do not match"}return""}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-field-error-message"]],inputs:{control:"control"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"p-error","block","err-m"],[1,"empty-space"]],template:function(o,r){1&o&&e.YNc(0,ce,4,1,"ng-container",0),2&o&&e.Q6J("ngIf",r.control.touched&&r.control.invalid)},dependencies:[a.O5],styles:[".empty-space[_ngcontent-%COMP%]{display:block;height:.5rem;width:1rem}"]}),t})(),w=(()=>{class t{constructor(o,r){this.renderer=o,this.elementRef=r,this.overlay=this.renderer.createElement("div"),this.spinner=this.renderer.createElement("div"),this.renderer.addClass(this.spinner,"loader"),this.renderer.addClass(this.overlay,"loader-overlay"),this.renderer.appendChild(this.overlay,this.spinner)}set isLoading(o){this.renderer.appendChild(this.elementRef.nativeElement,this.overlay),o||this.renderer.removeChild(this.elementRef.nativeElement,this.overlay)}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(e.Qsj),e.Y36(e.SBq))},t.\u0275dir=e.lG2({type:t,selectors:[["","appSpinner",""]],inputs:{isLoading:["appSpinner","isLoading"]}}),t})();function ue(t,n){if(1&t){const o=e.EpF();e.TgZ(0,"div",2)(1,"h1",3),e._uU(2,"Forgot your password?"),e.qZA(),e.TgZ(3,"h2",4),e._uU(4,"Get the reset password link via email"),e.qZA(),e.TgZ(5,"div",5)(6,"label"),e._uU(7,"Email"),e.qZA(),e._UZ(8,"input",6)(9,"app-field-error-message",7),e.qZA(),e.TgZ(10,"div",8)(11,"button",9),e.NdJ("click",function(){e.CHM(o);const u=e.oxw();return e.KtG(u.reset())}),e.ALo(12,"async"),e.ALo(13,"async"),e.qZA()(),e.TgZ(14,"div",10),e._uU(15," Remembered your password? "),e.TgZ(16,"span",11),e._uU(17,"Log In"),e.qZA()()()}if(2&t){const o=e.oxw();e.xp6(8),e.Q6J("formControl",o.forgotPasswordControl),e.xp6(1),e.Q6J("control",o.forgotPasswordControl),e.xp6(2),e.Q6J("disabled",o.forgotPasswordControl.invalid||e.lcZ(12,4,o.isLoading$))("appSpinner",e.lcZ(13,6,o.isLoading$))}}function pe(t,n){if(1&t&&(e.TgZ(0,"div"),e._UZ(1,"img",12),e.TgZ(2,"h1",3),e._uU(3),e.qZA(),e.TgZ(4,"h2",4),e._uU(5,"Check your inbox and spam folders and follow the instructions in the message."),e.qZA(),e.TgZ(6,"div",8),e._UZ(7,"button",13),e.qZA()()),2&t){const o=e.oxw();e.xp6(3),e.hij("Reset password link successfully sent to ",o.forgotPasswordControl.value," ")}}let de=(()=>{class t{constructor(o,r){this.store=o,this.router=r,this.forgotPasswordControl=new s.NI("",{validators:[s.kI.required,s.kI.pattern(y)],nonNullable:!0}),this.email=this.router.getCurrentNavigation()?.extras.state?.email,this.isEmailSended=!1,this.isLoading$=this.store.select(g),this.isPendingError$=this.store.select(M),this.forgotPasswordControl.patchValue(this.email)}reset(){this.store.dispatch((0,m.oP)({email:this.forgotPasswordControl.value})),this.isEmailSended=!0}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(c.yh),e.Y36(l.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-forgot-password"]],decls:6,vars:10,consts:[["class","forgot-password",4,"ngIf"],[4,"ngIf"],[1,"forgot-password"],[1,"title"],[1,"subtitle"],[1,"form-field"],["type","text","pInputText","",3,"formControl"],[3,"control"],[1,"actions"],["pButton","","label","Reset",3,"disabled","appSpinner","click"],[1,"link"],["routerLink","/login"],["src","assets/images/success-icon.svg","alt","success icon",1,"success-icon"],["routerLink","/login","pButton","","label","Go to login page"]],template:function(o,r){1&o&&(e.YNc(0,ue,18,8,"div",0),e.ALo(1,"async"),e.ALo(2,"async"),e.YNc(3,pe,8,1,"div",1),e.ALo(4,"async"),e.ALo(5,"async")),2&o&&(e.Q6J("ngIf",!r.isEmailSended||!0===e.lcZ(1,2,r.isPendingError$)||!0===e.lcZ(2,4,r.isLoading$)),e.xp6(3),e.Q6J("ngIf",r.isEmailSended&&!0!==e.lcZ(4,6,r.isLoading$)&&!0!==e.lcZ(5,8,r.isPendingError$)))},dependencies:[a.O5,h.o,f.Hq,v,s.Fj,s.JJ,s.oH,w,l.rH,a.Ov],styles:[".success-icon[_ngcontent-%COMP%]{margin-bottom:1rem}"],changeDetection:0}),t})();function me(t,n){if(1&t&&(e.TgZ(0,"div",1)(1,"div",2),e._uU(2,"Oh, something went wrong..."),e.qZA(),e.TgZ(3,"div",3),e._uU(4),e.ALo(5,"async"),e.qZA()()),2&t){const o=e.oxw();e.xp6(4),e.hij("note: ",e.lcZ(5,1,o.message$)||"Please, try again later","")}}let C=(()=>{class t{constructor(o){this.store=o,this.message$=this.store.select(le),this.errorAfterLoading$=this.store.select(M)}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(c.yh))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-auth-error-message"]],decls:2,vars:3,consts:[["class","error-card",4,"ngIf"],[1,"error-card"],[1,"error-title"],[1,"error-message"]],template:function(o,r){1&o&&(e.YNc(0,me,6,3,"div",0),e.ALo(1,"async")),2&o&&e.Q6J("ngIf",e.lcZ(1,1,r.errorAfterLoading$))},dependencies:[a.O5,a.Ov],styles:[".error-card[_ngcontent-%COMP%]{border:solid .125rem #AB2C26;border-radius:.6rem;padding:1rem;margin-bottom:1rem}.error-title[_ngcontent-%COMP%]{font-weight:700;font-size:1rem;margin-bottom:.5rem}"],changeDetection:0}),t})();const ge=function(t){return{email:t}};function fe(t,n){if(1&t&&e._UZ(0,"app-field-error-message",5),2&t){const o=e.oxw();e.Q6J("control",o.registerForm)}}function we(t,n){if(1&t&&e._UZ(0,"app-field-error-message",5),2&t){const o=e.oxw();e.Q6J("control",o.resetPasswordForm)}}const ye=[{path:"",component:p,children:[{path:"login",component:(()=>{class t{constructor(o){this.store=o,this.loginForm=new s.cw({email:new s.NI("",{validators:[s.kI.required,s.kI.pattern(y)],nonNullable:!0}),password:new s.NI("",{validators:[s.kI.required],nonNullable:!0})}),this.isLoading$=this.store.select(g)}login(){const o=this.loginForm.getRawValue();this.store.dispatch((0,m.m3)({login:o}))}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(c.yh))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-login"]],decls:27,vars:12,consts:[[1,"title"],[1,"subtitle"],[1,"form",3,"formGroup"],[1,"form-field"],["formControlName","email","type","text","pInputText",""],[3,"control"],["formControlName","password","type","password","pInputText",""],[1,"display-flex"],["routerLink","/forgot-password",1,"forgot",3,"state"],[1,"actions"],["pButton","","label","Log in",3,"appSpinner","disabled","click"],[1,"link"],["routerLink","/register"]],template:function(o,r){1&o&&(e.TgZ(0,"h1",0),e._uU(1,"Welcome back"),e.qZA(),e.TgZ(2,"h2",1),e._uU(3,"Continue track your progress"),e.qZA(),e._UZ(4,"app-auth-error-message"),e.TgZ(5,"form",2)(6,"div",3)(7,"label"),e._uU(8,"Email"),e.qZA(),e._UZ(9,"input",4)(10,"app-field-error-message",5),e.qZA(),e.TgZ(11,"div",3)(12,"label"),e._uU(13,"Password"),e.qZA(),e._UZ(14,"input",6),e.TgZ(15,"div",7),e._UZ(16,"app-field-error-message",5),e.TgZ(17,"div",8),e._uU(18," Forgot password? "),e.qZA()()(),e.TgZ(19,"div",9)(20,"button",10),e.NdJ("click",function(){return r.login()}),e.ALo(21,"async"),e.ALo(22,"async"),e.qZA()(),e.TgZ(23,"div",11),e._uU(24," Still don\u2019t have an account? "),e.TgZ(25,"span",12),e._uU(26,"Sign up"),e.qZA()()()),2&o&&(e.xp6(5),e.Q6J("formGroup",r.loginForm),e.xp6(5),e.Q6J("control",r.loginForm.controls.email),e.xp6(6),e.Q6J("control",r.loginForm.controls.password),e.xp6(1),e.Q6J("state",e.VKq(10,ge,r.loginForm.controls.email.valid?r.loginForm.controls.email.value:"")),e.xp6(3),e.Q6J("appSpinner",e.lcZ(21,6,r.isLoading$))("disabled",e.lcZ(22,8,r.isLoading$)||r.loginForm.invalid))},dependencies:[h.o,f.Hq,v,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,w,l.rH,C,a.Ov],encapsulation:2,changeDetection:0}),t})()},{path:"register",component:(()=>{class t{constructor(o){this.store=o,this.registerForm=new s.cw({name:new s.NI("",{validators:[s.kI.required,s.kI.minLength(2),s.kI.maxLength(30),s.kI.pattern("^[A-Za-z\xf1\xd1\xe1\xe9\xed\xf3\xfa\xc1\xc9\xcd\xd3\xda ]+$")],nonNullable:!0}),email:new s.NI("",{validators:[s.kI.required,s.kI.pattern(y)],nonNullable:!0}),password:new s.NI("",{validators:[s.kI.required,s.kI.minLength(8),s.kI.maxLength(30)],nonNullable:!0}),confirmPassword:new s.NI("",{validators:[s.kI.required],nonNullable:!0})},[E]),this.isLoading$=this.store.select(g)}register(){const o=this.registerForm.getRawValue();this.store.dispatch((0,m.aX)({register:o}))}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(c.yh))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-register"]],decls:34,vars:11,consts:[[1,"title"],[1,"subtitle"],["action","",1,"form",3,"formGroup"],[1,"form-field"],["formControlName","name","type","text","pInputText",""],[3,"control"],["formControlName","email","type","text","pInputText",""],["formControlName","password","type","password","pInputText",""],["formControlName","confirmPassword","type","password","pInputText",""],[3,"control",4,"ngIf"],[1,"actions"],["pButton","","label","Sign Up",3,"disabled","appSpinner","click"],[1,"link"],["routerLink","/login"]],template:function(o,r){1&o&&(e.TgZ(0,"h1",0),e._uU(1,"Create an account"),e.qZA(),e.TgZ(2,"h2",1),e._uU(3,"Let\u2019s start track your goal"),e.qZA(),e._UZ(4,"app-auth-error-message"),e.TgZ(5,"form",2)(6,"div",3)(7,"label"),e._uU(8,"Name"),e.qZA(),e._UZ(9,"input",4)(10,"app-field-error-message",5),e.qZA(),e.TgZ(11,"div",3)(12,"label"),e._uU(13,"Email"),e.qZA(),e._UZ(14,"input",6)(15,"app-field-error-message",5),e.qZA(),e.TgZ(16,"div",3)(17,"label"),e._uU(18,"Password"),e.qZA(),e._UZ(19,"input",7)(20,"app-field-error-message",5),e.qZA(),e.TgZ(21,"div",3)(22,"label"),e._uU(23,"Confirm password"),e.qZA(),e._UZ(24,"input",8),e.YNc(25,fe,1,1,"app-field-error-message",9),e.qZA(),e.TgZ(26,"div",10)(27,"button",11),e.NdJ("click",function(){return r.register()}),e.ALo(28,"async"),e.ALo(29,"async"),e.qZA()(),e.TgZ(30,"div",12),e._uU(31," Already have an account? "),e.TgZ(32,"span",13),e._uU(33,"Log In"),e.qZA()()()),2&o&&(e.xp6(5),e.Q6J("formGroup",r.registerForm),e.xp6(5),e.Q6J("control",r.registerForm.controls.name),e.xp6(5),e.Q6J("control",r.registerForm.controls.email),e.xp6(5),e.Q6J("control",r.registerForm.controls.password),e.xp6(5),e.Q6J("ngIf",r.registerForm.controls.confirmPassword.touched),e.xp6(2),e.Q6J("disabled",r.registerForm.invalid||e.lcZ(28,7,r.isLoading$))("appSpinner",e.lcZ(29,9,r.isLoading$)))},dependencies:[a.O5,h.o,f.Hq,v,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,w,l.rH,C,a.Ov],encapsulation:2,changeDetection:0}),t})()},{path:"forgot-password",component:de},{path:"reset-password",component:(()=>{class t{constructor(o){this.store=o,this.resetPasswordForm=new s.cw({password:new s.NI("",{validators:[s.kI.required,s.kI.minLength(8),s.kI.maxLength(30)],nonNullable:!0}),confirmPassword:new s.NI("",{validators:[s.kI.required],nonNullable:!0})},[E]),this.isLoading$=this.store.select(g)}resetPassword(){}}return t.\u0275fac=function(o){return new(o||t)(e.Y36(c.yh))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-reset-password"]],decls:24,vars:9,consts:[[1,"title"],[1,"subtitle"],["action","",1,"form",3,"formGroup"],[1,"form-field"],["formControlName","password","type","password","pInputText",""],[3,"control"],["formControlName","confirmPassword","type","password","pInputText",""],[3,"control",4,"ngIf"],[1,"actions"],["pButton","","label","Change",3,"disabled","appSpinner","click"],[1,"link"],["routerLink","/login"]],template:function(o,r){1&o&&(e.TgZ(0,"h1",0),e._uU(1,"Change your password"),e.qZA(),e.TgZ(2,"h2",1),e._uU(3,"Try to come up with a complex but easy to remember password"),e.qZA(),e._UZ(4,"app-auth-error-message"),e.TgZ(5,"form",2)(6,"div",3)(7,"label"),e._uU(8,"Password"),e.qZA(),e._UZ(9,"input",4)(10,"app-field-error-message",5),e.qZA(),e.TgZ(11,"div",3)(12,"label"),e._uU(13,"Password confirmation"),e.qZA(),e._UZ(14,"input",6),e.YNc(15,we,1,1,"app-field-error-message",7),e.qZA(),e.TgZ(16,"div",8)(17,"button",9),e.NdJ("click",function(){return r.resetPassword()}),e.ALo(18,"async"),e.ALo(19,"async"),e.qZA()(),e.TgZ(20,"div",10),e._uU(21," Remembered your password? "),e.TgZ(22,"span",11),e._uU(23,"Log In"),e.qZA()()()),2&o&&(e.xp6(5),e.Q6J("formGroup",r.resetPasswordForm),e.xp6(5),e.Q6J("control",r.resetPasswordForm.controls.password),e.xp6(5),e.Q6J("ngIf",r.resetPasswordForm.controls.confirmPassword.touched),e.xp6(2),e.Q6J("disabled",r.resetPasswordForm.invalid||e.lcZ(18,5,r.isLoading$))("appSpinner",e.lcZ(19,7,r.isLoading$)))},dependencies:[a.O5,h.o,f.Hq,v,s._Y,s.Fj,s.JJ,s.JL,s.sg,s.u,w,l.rH,C,a.Ov],encapsulation:2,changeDetection:0}),t})()},{path:"**",redirectTo:"login"}]}];let Ze=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[l.Bz.forChild(ye),l.Bz]}),t})();var Ce=i(2234);let be=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[a.ez,Ce.m,Ze]}),t})()}}]);