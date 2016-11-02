webpackJsonp([0],[function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var r=n(1),l=a(r);(0,l.default)(0)},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){var t=d[e].data,n=(0,l.select)("body .container-fluid"),a=n.append("div").attr("class","viz row"),r=a.append("div").attr("class","col-lg-12"),o=r.append("div").attr("class","controls row"),u=o.append("div").attr("class","col-lg-12"),p=r.append("div").attr("class","plot row"),f=p.append("div").attr("class","col-md-12"),m=f.append("svg"),v=m.append("g");v.append("g").attr("class","x axis"),v.append("g").attr("class","y axis"),v.append("text").attr("id","y-label").attr("text-anchor","middle").style("font","12px sans-serif").text("Relative Frequency"),v.append("text").attr("id","x-label").attr("text-anchor","middle").style("font","12px sans-serif").text("Sample");var h=i.availableColorSchemes[0].name,y=(0,c.setupData)(d[e],m),x=y.sortedKeysReverse,g=y.levels,b=(0,c.sort)(t,[x[0]],["Ascending"],[!1],y);(0,s.default)(m,h,b,y);var k=u.append("div").attr("class","row");(0,i.addDownloadLinks)(k,m),(0,i.addTaxaPicker)(k,g,d[e].name),(0,i.addColorPicker)(k,m,t,y),(0,i.addSortByPicker)(k,m,t,y)}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var l=n(2),o=n(3),s=a(o),i=n(7),c=n(11)},,function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n,a){var r=n.sortMap,s=n.sortedSampleIDs,c=10*s.length,p=600,f={top:20,left:60,right:50,bottom:50},m=200,v=a.keys,h=e.select("g");e.property("colorScheme",t);var y=(0,l.scaleBand)().padding(.1).domain(s).range([0,c]),x=(0,l.scaleLinear)().domain([0,1]).range([p,0]).nice(),g=u.availableColorSchemes.find(function(e){return e.name===t}),b=void 0;if("s"===g.type)b=(0,l.scaleSequential)(g.scheme).domain([0,v.length-1]);else if("o"===g.type){for(var k=[],A=[],P=0;P<v.length;P+=1)k.push(g.scheme[P%g.scheme.length]),A.push(P);b=(0,l.scaleOrdinal)(k).domain(A)}var S=(0,l.axisBottom)(),O=(0,l.axisLeft)();S.scale(y).tickFormat(function(e){return r[e]}),O.scale(x).tickFormat((0,l.format)(".0%")),h.attr("transform","translate("+f.left+","+f.top+")");var R=(0,o.setupXAxis)(e,h,c,p,S);(0,o.setupYAxis)(e,h,p,O),(0,i.default)(h,y,x,b,a,r);var _=(0,d.default)(e,h,v,c,b),w=p+f.top+f.bottom+R,D=c+f.left+f.right+_,B=20*(v.length+1);e.attr("width",D<c+m?c+m:D).attr("height",w<B?B:w);var C=(0,l.select)("#tooltip");C.node().parentNode.appendChild(C.node())}Object.defineProperty(t,"__esModule",{value:!0}),t.transitionDur=void 0,t.default=r;var l=n(2),o=n(4),s=n(5),i=a(s),c=n(6),d=a(c),u=n(7);t.transitionDur=500},function(e,t){"use strict";function n(e,t,n,a,l){var o=0;return e.select(".x.axis").attr("transform","translate(0,"+a+")").call(l).selectAll("text").style("text-anchor","end").attr("dx","-.8em").attr("dy","-0.5em").attr("transform",function(){var e=this.getComputedTextLength();return e>o&&(o=e),"rotate(-90)"}),t.select("#x-label").attr("transform","translate("+n/2+","+(a+o+r)+")"),o}function a(e,t,n,a){e.select(".y.axis").call(a),t.select("#y-label").attr("transform","translate(-"+r+","+n/2+")rotate(-90)")}Object.defineProperty(t,"__esModule",{value:!0}),t.setupXAxis=n,t.setupYAxis=a;var r=t.labelOffset=30},function(e,t,n){"use strict";function a(e,t){e.transition().duration(o.transitionDur).style("fill",function(e){return t(e.index)})}function r(e,t,n,r,o,s){e.selectAll("#tooltip").remove();var i=e.append("g").style("display","none").attr("id","tooltip");i.append("rect").attr("height",50).attr("fill","white");var c=i.append("text").style("text-anchor","middle").attr("font-size","12px").attr("font-weight","bold");c.append("tspan").attr("id","ttxlabel").attr("dy","1.2em"),c.append("tspan").attr("id","taxalabel").attr("dy","1.2em"),c.append("tspan").attr("id","abunlabel").attr("dy","1.2em");var d=e.selectAll(".layer").data(o.layers);d.exit().remove();var u=d.enter().append("g").attr("class","layer"),p=d.merge(u).call(a,r).attr("visibility",null).property("taxa",function(e){return e.key}),f=p.selectAll("rect").data(function(e){return e});f.exit().remove();var m=f.enter().append("rect");f.merge(m).attr("x",function(e){return t(e.data[o.first])}).attr("y",function(e){return n(e[1])}).attr("height",function(e){return n(e[0])-n(e[1])}).attr("width",t.bandwidth()).on("mouseover",function(){i.style("display",null)}).on("mouseout",function(){i.style("display","none")}).on("mousemove",function(e){var t=i.select("text"),n=(0,l.select)(this.parentNode).property("taxa"),a=t.select("#ttxlabel"),r=t.select("#taxalabel"),c=t.select("#abunlabel");a.text(function(){return s[e.data[o.first]]}),r.text(function(){return n}),c.text(function(){return(100*(e[1]-e[0])).toFixed(3)+"%"});var d=t.node().getBBox().width,u=d/2+5;a.attr("x",u),r.attr("x",u),c.attr("x",u),i.select("rect").attr("width",d+10);var p=(0,l.mouse)(this)[0],f=(0,l.mouse)(this)[1]-25;i.attr("transform","translate("+p+","+f+")")})}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var l=n(2),o=n(1)},function(e,t,n){"use strict";function a(e,t,n){e.transition().duration(o.transitionDur).style("fill",function(e){return t(n.indexOf(e))})}function r(e,t,n,r,o){var s=e.property("stackOrder");t.selectAll(".legend").remove();var i=t.selectAll(".legend").data(s),c=i.enter().append("g").attr("class","legend").attr("id",function(e){return"id"+e}).style("font","10px sans-serif"),d=i.merge(c).attr("transform",function(e,t){return"translate(10,"+20*(n.length-t-1)+")"});c.append("rect").attr("width",18).attr("height",18),d.selectAll("rect").attr("x",r).call(a,o,s).on("mouseover",function(){(0,l.select)(this).style("cursor","pointer")}).on("click",function(e){var t=(0,l.select)("#id"+e),a=t.select("rect"),r=a.classed("selected");a.classed("selected",!r).style("stroke",function(){return r?null:"black"}).style("stroke-width",function(){return r?null:2});var o=(0,l.selectAll)(".legend .selected").nodes().map(function(e){return n[(0,l.select)(e).datum()]});(0,l.selectAll)(".layer").attr("visibility",function(e){return 0===o.length?null:o.indexOf(e.key.trim())>-1?null:"hidden"})}),c.append("text").attr("y",9).attr("dy",".35em").attr("text-anchor","start"),d=d.selectAll("text").attr("x",r+24).text(function(e){return n[e]});var u=0;return d.each(function(){var e=this.getComputedTextLength();e>u&&(u=e)}),u}Object.defineProperty(t,"__esModule",{value:!0}),t.default=r;var l=n(2),o=n(1)},function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t}function l(e,t,n,a){var r=e.selectAll(".xCtrl").nodes().map(function(e){return e.options[e.selectedIndex].value}),l=e.selectAll(".xOrder").nodes().map(function(e){return e.options[e.selectedIndex].value}),o=e.selectAll(".xLabel").nodes().map(function(e){return"hidden"!==e.type&&e.checked});return(0,b.sort)(n,r,l,o,a)}function o(e,t,n,a){var r=l(e,t,n,a);(0,g.default)(t,t.property("colorScheme"),r,a)}function s(e,t,n,a){var r=e.append("div").attr("class","row"),l=r.append("div").attr("class","col-lg-4"),s=r.append("div").attr("class","col-lg-4"),i=r.append("div").attr("class","col-lg-4"),c=l.append("select").attr("class","xCtrl form-control").on("change",function(){i.select("label").remove();var r=(0,f.select)(this).node(),l=r.options[r.selectedIndex].value,s=a.metaData.indexOf(l)>-1;i.append("label").text(function(){return s?"Relabel X? ":""}).append("input").attr("class","xLabel").attr("type",function(){return s?"checkbox":"hidden"}).property("checked",!0).on("change",function(){o(e,t,n,a)}),o(e,t,n,a)}),d=["Ascending","Descending"];return s.append("select").attr("class","xOrder form-control").on("change",function(){o(e,t,n,a)}).selectAll("option").data(d).enter().append("option").attr("value",function(e){return e}).text(function(e){return e}),e.selectAll(".row").size()>1&&i.append("button").html('<span class="glyphicon glyphicon-minus" aria-hidden="true"></span>').attr("class","btn btn-danger btn-xs").style("padding","5px").on("click",function(){r.remove(),o(e,t,n,a)}),c}function i(e,t,n,a){var r=[{label:"Sample Metadata",keys:t},{label:"Taxonomic Abundance",keys:n}],l=e.selectAll("optgroup").data(r);l.exit().remove();var o=l.enter().append("optgroup"),s=l.merge(o).attr("label",function(e){return e.label}),i=s.selectAll("option").data(function(e){return e.keys});i.exit().remove();var c=i.enter().append("option");return i.merge(c).attr("value",function(e){return e}).property("selected",function(e){return e===a}).text(function(e){return e})}function c(e,t,n){var a=e.append("div").attr("class","col-lg-2 form-group taxaPicker");return a.append("label").text("Taxonomic Level"),a.append("select").attr("class","form-control").on("change",function(){var e=(0,f.select)(".container-fluid");e.select(".viz.row").remove(),(0,y.default)(this.selectedIndex)}).selectAll("option").data(t).enter().append("option").attr("value",function(e){return e}).text(function(e){return e}).property("selected",function(e){return e===n}),a}function d(e,t,n,a){var r=e.append("div").attr("class","col-lg-2 form-group colorPicker");r.append("label").text("Color Palette");var o=r.append("select").attr("class","form-control").on("change",function(){var r=this.options[this.selectedIndex].value,o=l(e,t,n,a);(0,g.default)(t,r,o,a)}),s=k.filter(function(e){return"o"===e.type}),i=k.filter(function(e){return"s"===e.type}),c=[{label:"Discrete",keys:s},{label:"Continuous",keys:i}],d=o.selectAll("optgroup").data(c);d.exit().remove();var u=d.enter().append("optgroup"),p=d.merge(u).attr("label",function(e){return e.label}),f=p.selectAll("option").data(function(e){return e.keys});f.exit().remove();var m=f.enter().append("option");return f.merge(m).attr("value",function(e){return e.name}).text(function(e){return e.name}),r}function u(e,t,n,a){var r=a.metaData,l=a.sortedKeysReverse,o=e.append("div").attr("class","col-lg-6 form-group sortByPicker");o.append("label").text("Sort Samples By"),o.append("button").html('<span class="glyphicon glyphicon-plus" aria-hidden="true"></span>').attr("class","btn btn-primary btn-xs").style("margin-left","10px").on("click",function(){var e=o.selectAll(".xCtrl");if(e.size()!==r.length+l.length+1){var c=s(o,t,n,a);i(c,r,l,l[0])}});var c=s(o,t,n,a);return i(c,r,l,l[0]),o}function p(e,t){var n=e.append("div").attr("class","col-lg-2 form-group");n.append("label").html("&nbsp;"),n.append("button").text("Download SVG").attr("class","btn btn-default form-control").on("click",function(){var e=new XMLSerializer,n=e.serializeToString(t.node());n='<?xml version="1.0" standalone="no"?>\r\n'+n;var a="data:image/svg+xml;charset=utf-8,"+encodeURIComponent(n),r=document.createElement("a");r.setAttribute("href",a),r.setAttribute("download","taxaplot.svg"),document.body.appendChild(r),r.click(),document.body.removeChild(r)})}Object.defineProperty(t,"__esModule",{value:!0}),t.availableColorSchemes=void 0,t.addTaxaPicker=c,t.addColorPicker=d,t.addSortByPicker=u,t.addDownloadLinks=p;var f=n(2),m=n(8),v=r(m),h=n(1),y=a(h),x=n(3),g=a(x),b=n(11),k=t.availableColorSchemes=[{name:"schemeAccent",scheme:v.schemeAccent,type:"o"},{name:"schemeDark2",scheme:v.schemeDark2,type:"o"},{name:"schemePaired",scheme:v.schemePaired,type:"o"},{name:"schemePastel1",scheme:v.schemePastel1,type:"o"},{name:"schemePastel2",scheme:v.schemePastel2,type:"o"},{name:"schemeSet1",scheme:v.schemeSet1,type:"o"},{name:"schemeSet2",scheme:v.schemeSet2,type:"o"},{name:"schemeSet3",scheme:v.schemeSet3,type:"o"},{name:"PRGn",scheme:v.interpolatePRGn,type:"s"},{name:"BrBG",scheme:v.interpolateBrBG,type:"s"},{name:"PiYG",scheme:v.interpolatePiYG,type:"s"},{name:"PuOr",scheme:v.interpolatePuOr,type:"s"},{name:"RdBu",scheme:v.interpolateRdBu,type:"s"},{name:"RdGy",scheme:v.interpolateRdGy,type:"s"},{name:"RdYlBu",scheme:v.interpolateRdYlBu,type:"s"},{name:"RdYlGn",scheme:v.interpolateRdYlGn,type:"s"},{name:"Spectral",scheme:v.interpolateSpectral,type:"s"}]},,,,function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n){var a=e[n],r=t[n];return a===r?(0,y.ascending)(e.position,t.position):(0,g.default)({direction:"asc"})(a,r)}function l(e,t,n){return(0,g.default)({direction:"asc"})(e[n],t[n])}function o(e,t,n){var a=e[n],r=t[n];return a===r?(0,y.descending)(e.position,t.position):(0,g.default)({direction:"desc"})(a,r)}function s(e,t,n){return(0,g.default)({direction:"desc"})(e[n],t[n])}function i(e,t,n){var a=e[n]/e.total,r=t[n]/t.total;return{aRel:a,bRel:r}}function c(e,t,n){var a=i(e,t,n),r=a.aRel,l=a.bRel;return r===l?(0,y.ascending)(e.position,t.position):(0,y.ascending)(r,l)}function u(e,t,n){var a=i(e,t,n),r=a.aRel,l=a.bRel;return(0,y.ascending)(r,l)}function p(e,t,n){var a=i(e,t,n),r=a.aRel,l=a.bRel;return r===l?(0,y.descending)(e.position,t.position):(0,y.descending)(r,l)}function f(e,t,n){var a=i(e,t,n),r=a.aRel,l=a.bRel;return(0,y.descending)(r,l)}function m(e,t){for(var n=0;n<e.length;n+=1){for(var a=e[n],r=0,l=0;l<t.length;l+=1)r+=a[t[l]];a.total=r,a.position=n}}function v(e,t,n,a,i){var d=(0,k.default)(function(){return 0}),m=void 0;t.forEach(function(e,a){var v=a===t.length-1,h=n[a],y=i.metaData.indexOf(e)>-1,x=void 0;v&&"Ascending"===h?x=y?r:c:v&&"Descending"===h?x=y?o:p:v||"Ascending"!==h?v||"Descending"!==h||(x=y?s:f):x=y?l:u,m=function(t,n){return x(t,n,e)},d=d.thenBy(m)});var v={},h=e.sort(d).map(function(e){var n=e[i.first],r=[];return t.forEach(function(t,n){a[n]&&r.push(e[t])}),v[n]=0===r.length?n:r.join("; "),n});return{sortedSampleIDs:h,sortMap:v}}function h(e,t){var n=e.data,a=e.taxaKeys,r=JSON.parse(JSON.stringify(n.columns)),l=void 0,o=void 0,s=r.filter(function(e){return a.indexOf(e)<0}),i=r.splice(0,1)[0];t.property("firstTaxa",i);var c=(0,y.stack)().keys(a).order(function(e){var n=(0,y.stackOrderAscending)(e);return l=new Array(n.length),n.forEach(function(e,t){l[t]=a[e]}),o=l.slice().reverse(),t.property("stackOrder",n),n}).offset(y.stackOffsetExpand),u=c(n);m(n,a);var p=d.map(function(e){return e.name});return{keys:a,columns:r,metaData:s,sortedKeys:l,sortedKeysReverse:o,first:i,layers:u,levels:p}}Object.defineProperty(t,"__esModule",{value:!0}),t.sort=v,t.setupData=h;var y=n(2),x=n(12),g=a(x),b=n(13),k=a(b)}]);