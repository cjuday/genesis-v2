import{r as c,R as e}from"./app-r9Hynk8A.js";import{S as p}from"./SEO-DmizZ7gA.js";import{u as d,A as g,H as h,F as N,S as v}from"./aos-BHAJHut2.js";import"./logo-BmcBXPtN.js";const A=({products:a,appUrl:m,classOption:o="text-lg-center text-center mb-lg-13 mb-md-13 mb-6"})=>{const{t:s}=d(),n=new URL(window.location.href).pathname.split("/").filter(t=>t),l=n[1],i=n[2];let r=[];const[u,b]=c.useState(i);function E(t){return t.charAt(0).toUpperCase()+t.slice(1)}return l==="Men"?r=["All","T-shirts","Polo","Bottom","Shirts","Sweat_Shirts","Trousers","Sweaters","Jacket"]:l==="Women"?r=["All","Tops","Bottoms"]:l==="Kid"&&(r=["All","T&T","S&S","Trousers","Jeans","Shorts"]),c.useEffect(()=>{g.init()}),e.createElement(e.Fragment,null,e.createElement(p,{title:`Genesis - Products for ${l}`}),e.createElement(h,null),e.createElement("div",null,e.createElement("h2",{className:"title title text-center pt-3"},s("for")," ",E(l)),e.createElement("div",{className:`messonry-button ${o}`},r.map(t=>e.createElement("a",{key:t,href:`/products/${l}/${t}`},e.createElement("button",{id:t,className:u===t?"is-checked":""},e.createElement("span",{className:"filter-text"},s(t)))))),e.createElement("div",{className:"container-fluid"},a.total>0?e.createElement("div",{className:"row row-cols-lg-4 row-cols-md-3 row-cols-1 pt-6 text-center"},a.data.map(t=>e.createElement("div",{key:t.id,className:"col mb-6","data-aos":"fade-up","data-aos-delay":"300"},e.createElement("img",{src:m+t.image_url,className:"prod-img",alt:"Product Image"})))):e.createElement("div",{className:"text-center section-padding-bottom-200 pt-20"},e.createElement("h3",null,"No products available at the moment.")))),a.links.length>3?e.createElement("div",{className:"row mb-5"},e.createElement("div",{className:"col"},e.createElement("ul",{className:"pagination center"},a.prev_page_url&&e.createElement("li",null,e.createElement("a",{href:a.prev_page_url},e.createElement("i",{className:"fa fa-angle-left"}))),a.links.filter(t=>t.label!=="&laquo; Previous"&&t.label!=="Next &raquo;").map((t,f)=>e.createElement("li",null,e.createElement("a",{key:f,className:t.active?"active":"",href:t.url},t.label))),a.next_page_url&&e.createElement("li",null,e.createElement("a",{href:a.next_page_url},e.createElement("i",{className:"fa fa-angle-right"})))))):"",e.createElement(N,null),e.createElement(v,null))};export{A as default};
