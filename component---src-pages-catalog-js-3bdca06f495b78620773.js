(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{138:function(t,e,a){"use strict";a.r(e);var n=a(162),r=a(0),i=a.n(r),o=a(143),c=a(149),s=a(150);e.default=function(){return i.a.createElement(c.a,null,i.a.createElement(s.a,{title:"Catalog",keywords:["gatsby","application","react"]}),i.a.createElement("h1",null,"Catalog"),i.a.createElement(o.StaticQuery,{query:"1696858769",render:function(t){return i.a.createElement("div",null,JSON.stringify(t))},data:n}))}},143:function(t,e,a){"use strict";a.r(e),a.d(e,"graphql",function(){return f}),a.d(e,"StaticQueryContext",function(){return p}),a.d(e,"StaticQuery",function(){return m});var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(142),s=a.n(c);a.d(e,"Link",function(){return s.a}),a.d(e,"withPrefix",function(){return c.withPrefix}),a.d(e,"navigate",function(){return c.navigate}),a.d(e,"push",function(){return c.push}),a.d(e,"replace",function(){return c.replace}),a.d(e,"navigateTo",function(){return c.navigateTo});var u=a(144),l=a.n(u);a.d(e,"PageRenderer",function(){return l.a});var d=a(32);a.d(e,"parsePath",function(){return d.a});var p=r.a.createContext({}),m=function(t){return r.a.createElement(p.Consumer,null,function(e){return t.data||e[t.query]&&e[t.query].data?(t.render||t.children)(t.data?t.data.data:e[t.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function f(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}m.propTypes={data:o.a.object,query:o.a.string.isRequired,render:o.a.func,children:o.a.func}},144:function(t,e,a){var n;t.exports=(n=a(146))&&n.default||n},145:function(t){t.exports={data:{site:{siteMetadata:{title:"Salon"}}}}},146:function(t,e,a){"use strict";a.r(e);a(33);var n=a(0),r=a.n(n),i=a(4),o=a.n(i),c=a(51),s=a(2),u=function(t){var e=t.location,a=s.default.getResourcesForPathnameSync(e.pathname);return r.a.createElement(c.a,Object.assign({location:e,pageResources:a},a.json))};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},e.default=u},147:function(t,e,a){},148:function(t){t.exports={data:{site:{siteMetadata:{title:"Salon",description:"Salon of Beattie",author:"@nick"}}}}},149:function(t,e,a){"use strict";var n=a(145),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(143),u=function(t){var e=t.siteTitle;return i.a.createElement("div",{style:{background:"rebeccapurple",marginBottom:"1.45rem"}},i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"1.45rem 1.0875rem"}},i.a.createElement("h1",{style:{margin:0}},i.a.createElement(s.Link,{to:"/",style:{color:"white",textDecoration:"none"}},e))))};u.propTypes={siteTitle:c.a.string},u.defaultProps={siteTitle:""};var l=u,d=(a(147),function(t){var e=t.children;return i.a.createElement(s.StaticQuery,{query:"755544856",render:function(t){return i.a.createElement(i.a.Fragment,null,i.a.createElement(l,{siteTitle:t.site.siteMetadata.title}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},e,i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:n})});d.propTypes={children:c.a.node.isRequired};var p=d;a.d(e,"a",function(){return p})},150:function(t,e,a){"use strict";var n=a(148),r=a(0),i=a.n(r),o=a(4),c=a.n(o),s=a(151),u=a.n(s),l=a(143),d="1025518380";function p(t){var e=t.description,a=t.lang,r=t.meta,o=t.keywords,c=t.title;return i.a.createElement(l.StaticQuery,{query:d,render:function(t){var n=e||t.site.siteMetadata.description;return i.a.createElement(u.a,{htmlAttributes:{lang:a},title:c,titleTemplate:"%s | "+t.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:c},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:t.site.siteMetadata.author},{name:"twitter:title",content:c},{name:"twitter:description",content:n}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[]).concat(r)})},data:n})}p.defaultProps={lang:"en",keywords:[],meta:[],description:""},p.propTypes={description:c.a.string,lang:c.a.string,meta:c.a.arrayOf(c.a.string),keywords:c.a.arrayOf(c.a.string),title:c.a.string.isRequired};var m=p;a.d(e,"a",function(){return m})},162:function(t){t.exports={data:{allMarkdownRemark:{edges:[{node:{frontmatter:{title:"My first blog post",path:"/blog/my-first-post",date:"2017-11-07"}}},{node:{frontmatter:{title:"My first blog post",path:"/blog/my-first-post",date:"2017-11-08"}}}]}}}}}]);
//# sourceMappingURL=component---src-pages-catalog-js-3bdca06f495b78620773.js.map