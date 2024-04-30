"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9106],{9106:(C,u,a)=>{a.r(u),a.d(u,{SignUpPageModule:()=>M});var m=a(177),c=a(4341),r=a(3819),l=a(9858),h=a(467),d=a(57),n=a(4438);const P=[{path:"",component:(()=>{var e;class g{constructor(t,o){this.router=t,this.alertController=o,this.signupEmail="",this.signupPassword="",this.retypePass=""}ngOnInit(){}signup(){var t=this;return(0,h.A)(function*(){if(t.signupPassword!==t.retypePass)return void(yield(yield t.alertController.create({header:"Password Mismatch",message:"The passwords do not match. Please try again.",buttons:["OK"]})).present());const o=(0,d.xI)();(0,d.eJ)(o,t.signupEmail,t.signupPassword).then(s=>{console.log("Sign up successful",s.user),t.router.navigate(["/sign-in"])}).catch(s=>{console.error("Sign up error",s),t.alertController.create({header:"Sign Up Error",message:s.message||"An error occurred. Please try again.",buttons:["OK"]}).then(x=>x.present())})})()}}return(e=g).\u0275fac=function(t){return new(t||e)(n.rXU(l.Ix),n.rXU(r.hG))},e.\u0275cmp=n.VBU({type:e,selectors:[["app-sign-up"]],decls:20,vars:3,consts:[[1,"box"],[1,"one"],["position","floating"],["type","email",3,"ngModelChange","ngModel"],[1,"two"],["type","password",3,"ngModelChange","ngModel"],[1,"three"],["expand","block",3,"click"],["routerLink","/sign-in"]],template:function(t,o){1&t&&(n.j41(0,"ion-content")(1,"div",0)(2,"ion-item",1)(3,"ion-label",2),n.EFF(4,"Email"),n.k0s(),n.j41(5,"ion-input",3),n.mxI("ngModelChange",function(i){return n.DH7(o.signupEmail,i)||(o.signupEmail=i),i}),n.k0s()(),n.j41(6,"ion-item",4)(7,"ion-label",2),n.EFF(8,"Password"),n.k0s(),n.j41(9,"ion-input",5),n.mxI("ngModelChange",function(i){return n.DH7(o.signupPassword,i)||(o.signupPassword=i),i}),n.k0s()(),n.j41(10,"ion-item",6)(11,"ion-label",2),n.EFF(12,"Retype Password"),n.k0s(),n.j41(13,"ion-input",5),n.mxI("ngModelChange",function(i){return n.DH7(o.retypePass,i)||(o.retypePass=i),i}),n.k0s()(),n.j41(14,"ion-button",7),n.bIt("click",function(){return o.signup()}),n.EFF(15,"Sign Up"),n.k0s(),n.j41(16,"p"),n.EFF(17,"Already have an account? "),n.j41(18,"a",8),n.EFF(19,"Sign In"),n.k0s()()()()),2&t&&(n.R7$(5),n.R50("ngModel",o.signupEmail),n.R7$(4),n.R50("ngModel",o.signupPassword),n.R7$(4),n.R50("ngModel",o.retypePass))},dependencies:[c.BC,c.vS,r.Jm,r.W9,r.$w,r.uz,r.he,r.Gw,r.oY,l.Wk],styles:["ion-content[_ngcontent-%COMP%]{--background: url(https://scontent.fmnl8-3.fna.fbcdn.net/v/t39.30808-6/440322333_980590983784187_7438862669102397040_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF1l19QXQ7yo2JOoIXk40xwDb87CXr0n_cNvzsJevSf9y13QY4ijR2LE0QsZ3DqPq9RLl5ueY-6Vc8MknT99vbJ&_nc_ohc=LA6JLubcp04Ab5AVZpH&_nc_zt=23&_nc_ht=scontent.fmnl8-3.fna&oh=00_AfBbCrRFmhY8HcxxjwK3HJm6Tkrn-pnh88Z1MEU3iE6TNg&oe=6636B8AE) center center / cover no-repeat;display:flex;flex-direction:column;justify-content:center;align-items:center;height:100vh}.box[_ngcontent-%COMP%]{width:500px;height:auto;background-color:#ffffff40;margin-left:200px;padding:30px;border-radius:30px;margin-top:100px;box-shadow:0 4px 8px #0003,0 6px 20px #00000030}ion-item[_ngcontent-%COMP%]{border-radius:15px;box-shadow:0 4px 8px #0003,0 6px 20px #00000030}ion-item.one[_ngcontent-%COMP%], ion-item.two[_ngcontent-%COMP%], ion-item.three[_ngcontent-%COMP%]{margin:30px 0}ion-button[_ngcontent-%COMP%]{margin-top:20px;margin-left:100px;border-radius:30%;width:50%;box-shadow:0 4px 8px #0003,0 6px 20px #00000030}p[_ngcontent-%COMP%]{text-align:center;margin:20px 0;padding:15px;color:#fff;text-shadow:2px 2px 5px rgb(0,0,0)}p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none}p[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{text-decoration:underline}"]}),g})()}];let f=(()=>{var e;class g{}return(e=g).\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.$C({type:e}),e.\u0275inj=n.G2t({imports:[l.iI.forChild(P),l.iI]}),g})(),M=(()=>{var e;class g{}return(e=g).\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.$C({type:e}),e.\u0275inj=n.G2t({imports:[m.MD,c.YN,r.bv,f]}),g})()}}]);