(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{346:function(t,a,s){},403:function(t,a,s){"use strict";var n=s(346);s.n(n).a},431:function(t,a,s){"use strict";s.r(a);s(165),s(68),s(9);var n={props:{partner:Object},components:{SocialIcon:function(){return Promise.all([s.e(0),s.e(5)]).then(s.bind(null,363))}},computed:{languages:function(){return[].concat(this.partner.languages)},mailHref:function(){return"mailto:".concat(this.partner.email,"?subject=Hire ").concat(this.partner.name)},logo:function(){return/(https:\/\/|\/).*/.test(this.partner.logo)?this.partner.logo:"/images/partners/".concat(this.partner.logo)}}},e=(s(403),s(42)),i=Object(e.a)(n,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"partner"},[s("div",{staticClass:"logo"},[s("a",{attrs:{href:t.partner.urlLink}},[s("img",{attrs:{alt:t.partner.name+"'s logo",src:t.logo,width:"125",height:"auto"}})])]),t._v(" "),s("div",{staticClass:"profile"},[s("p",{staticClass:"description"},[t._v(t._s(t.partner.description))]),t._v(" "),s("dl",[t._m(0),t._v(" "),s("dd",[s("a",{attrs:{href:t.partner.urlLink}},[t._v(t._s(t.partner.urlText))])]),t._v(" "),t._m(1),t._v(" "),s("dd",[t._v(t._s(t.partner.location))]),t._v(" "),t._m(2),t._v(" "),s("dd",{staticClass:"language-list"},[s("ul",t._l(t.languages,(function(a){return s("li",{key:a},[t._v(t._s(a))])})),0)]),t._v(" "),t._m(3),t._v(" "),s("dd",{staticClass:"proficiency-list"},[s("ul",t._l(t.partner.proficiencies,(function(a){return s("li",{key:a.name},[a.url?s("a",{attrs:{href:a.url}},[t._v("\n              "+t._s(a.name)+"\n            ")]):[t._v(t._s(a.name))]],2)})),0)]),t._v(" "),s("dd",{staticClass:"social"},[t.partner.email?s("SocialIcon",{attrs:{type:"Email",link:t.mailHref}}):t._e(),t._v(" "),t._l(t.partner.socialLinks,(function(t){return s("SocialIcon",{key:t.name,attrs:{type:t.name,link:t.url}})}))],2)])])])}),[function(){var t=this.$createElement,a=this._self._c||t;return a("dt",[a("i",{staticClass:"fa fa-link"}),this._v(" "),a("span",{staticClass:"sr-only"},[this._v("Link")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("dt",[a("i",{staticClass:"fa fa-map-marker"}),this._v(" "),a("span",{staticClass:"sr-only"},[this._v("Location")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("dt",[a("i",{staticClass:"fa fa-globe"}),this._v(" "),a("span",{staticClass:"sr-only"},[this._v("Languages")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("dt",{attrs:{title:"Proficiencies"}},[a("i",{staticClass:"fa fa-briefcase"}),this._v(" "),a("span",{staticClass:"sr-only"},[this._v("Proficiencies")])])}],!1,null,"a6affe92",null);a.default=i.exports}}]);