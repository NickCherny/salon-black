(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{141:function(t,e,a){"use strict";a.r(e);a(33);var n=a(165),r=a(0),i=a.n(r),o=a(144),l=a(150),c=a(151),u=(a(75),a(54),a(166),a(185)),s=a(4),d=a.n(s),m=a(157),p=m.a.div.withConfig({displayName:"CatalogListview__CatalogContainer",componentId:"sc-1ma627g-0"})(["display:flex;flex-direction:column;margin-bottom:16px;"]),g=m.a.div.withConfig({displayName:"CatalogListview__CatalogListGrid",componentId:"sc-1ma627g-1"})(["ul{margin:0;}li{list-style:none;line-height:1;}"]),f=m.a.h3.withConfig({displayName:"CatalogListview__CatalogListTitle",componentId:"sc-1ma627g-2"})(["margin-bottom:16px;"]),y=function(t){var e=t.data;return i.a.createElement("main",null,e.map(function(t){var e=t.title,a=t.html;return i.a.createElement(p,{key:"catalog_item_"+JSON.stringify(e)},i.a.createElement(f,null,e),i.a.createElement(g,{dangerouslySetInnerHTML:{__html:a}}))}))};y.propTypes={data:d.a.arrayOf(d.a.object).isRequired};var h=y,v=Object(u.a)(Object(u.c)("CatalogList"),Object(u.d)(console.log),Object(u.b)(function(t){var e=t.data;return{data:Object.values(e).map(function(t){var e=t.node;return{html:e.html,title:e.frontmatter.title}})}}))(h);e.default=function(){return i.a.createElement(l.a,null,i.a.createElement(c.a,{title:"Catalog",keywords:["gatsby","application","react"]}),i.a.createElement("h1",null,"Catalog"),i.a.createElement(o.StaticQuery,{query:"1429965464",render:function(t){var e=t.allMarkdownRemark;return i.a.createElement(v,{data:Object.assign({},e.edges)})},data:n}))}},144:function(t,e,a){"use strict";a.r(e),a.d(e,"graphql",function(){return g}),a.d(e,"StaticQueryContext",function(){return m}),a.d(e,"StaticQuery",function(){return p});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(143),c=a.n(l);a.d(e,"Link",function(){return c.a}),a.d(e,"withPrefix",function(){return l.withPrefix}),a.d(e,"navigate",function(){return l.navigate}),a.d(e,"push",function(){return l.push}),a.d(e,"replace",function(){return l.replace}),a.d(e,"navigateTo",function(){return l.navigateTo});var u=a(145),s=a.n(u);a.d(e,"PageRenderer",function(){return s.a});var d=a(32);a.d(e,"parsePath",function(){return d.a});var m=r.a.createContext({}),p=function(t){return r.a.createElement(m.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},145:function(t,e,a){var n;t.exports=(n=a(146))&&n.default||n},146:function(t,e,a){"use strict";a.r(e);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),l=a(51),c=a(2),u=function(t){var e=t.location,a=c.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(l.a,Object.assign({location:e,pageResources:a},a.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=u},147:function(t){t.exports={data:{site:{siteMetadata:{title:"Salon"}}}}},148:function(t,e,a){},149:function(t){t.exports={data:{site:{siteMetadata:{title:"Salon",description:"Salon of Beattie",author:"@nick"}}}}},150:function(t,e,a){"use strict";var n=a(147),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(144),u=function(t){var e=t.siteTitle;return i.a.createElement("div",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(c.Link,{to:"/",style:{color:"white",textDecoration:"none"}},e))))};u.propTypes={siteTitle:l.a.string},u.defaultProps={siteTitle:""};var s=u,d=(a(148),function(t){var e=t.children;return i.a.createElement(c.StaticQuery,{query:"755544856",render:function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement(s,{siteTitle:t.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},e,i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:n})});d.propTypes={children:l.a.node.isRequired};var m=d;a.d(e,"a",function(){return m})},151:function(t,e,a){"use strict";var n=a(149),r=a(0),i=a.n(r),o=a(4),l=a.n(o),c=a(154),u=a.n(c),s=a(144),d="1025518380";function m(t){var e=t.description,a=t.lang,r=t.meta,o=t.keywords,l=t.title;return i.a.createElement(s.StaticQuery,{query:d,render:function(t){var n=e||t.site.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:a},title:l,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:l},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:l},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}m.defaultProps={lang:"en",keywords:[],meta:[],description:""},m.propTypes={description:l.a.string,lang:l.a.string,meta:l.a.arrayOf(l.a.string),keywords:l.a.arrayOf(l.a.string),title:l.a.string.isRequired};var p=m;a.d(e,"a",function(){return p})},165:function(t){t.exports={data:{allMarkdownRemark:{edges:[{node:{html:"<ul>\n<li>Маникюр Ля Ногти 1200 руб.</li>\n<li>Аппаратный Маникюр 1350 руб.</li>\n<li>Европейский Маникюр 1000 руб.</li>\n</ul>",frontmatter:{title:"маникюр"}}},{node:{html:"<ul>\n<li>Shellac 1200 руб.</li>\n<li>Shellac Френч 1350 руб.</li>\n<li>Vinylux 1000 руб.</li>\n</ul>",frontmatter:{title:"покрытие"}}},{node:{html:"<ul>\n<li>Педикюр Ля Ногти 2250 руб.</li>\n<li>Комбинированный Педикюр 1350 руб.</li>\n<li>Аппаратный Педикюр 1000 руб.</li>\n</ul>",frontmatter:{title:"педикюр"}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-catalog-js-00b87e6cf01a5c4988fb.js.map