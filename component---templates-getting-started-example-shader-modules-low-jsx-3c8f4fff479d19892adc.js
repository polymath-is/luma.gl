(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{aI42:function(e,t,r){"use strict";r.d(t,"a",(function(){return n})),r.d(t,"b",(function(){return o}));r("VRzm"),r("Btvt");var n=function(){function e(){}e.getInfo=function(){return""};var t=e.prototype;return t.start=function(){},t.stop=function(){},t.delete=function(){},t.onFinalize=function(){},t.waitForRender=function(){return Promise.resolve()},t._setDisplay=function(){},t._getCanvas=function(e){var t;if(void 0===e&&(e={}),e.canvas){t=document.getElementById(e.canvas);var r=window.devicePixelRatio||1;t.height=t.clientHeight*r,t.width=t.clientWidth*r}else(t=document.createElement("canvas")).width=800,t.height=600,document.body.appendChild(t);return t},t._getContainer=function(e){if(void 0===e&&(e={}),this.container)return this.container;var t,r;if(this.container=document.createElement("div"),e.canvas){var n=document.getElementById(e.canvas);this.parent=n.parentElement,t=n.clientWidth,r=n.clientHeight,this.container.style.position="relative",this.container.style.top="-"+r+"px"}else this.parent=document.body,t=800,r=800;return this.container.style.width=t+"px",this.container.style.height=r+"px",this.parent.appendChild(this.container),this.container},t._removeContainer=function(e){void 0===e&&(e={}),this.parent.removeChild(this.container)},e}();function o(){var e=1,t=1;return function(){return e=Math.sin(17.23*t),t=Math.cos(27.92*e),(r=1432.71*Math.abs(e*t))-Math.floor(r);var r}}},xZo2:function(e,t,r){"use strict";r.r(t);var n=r("q1tI"),o=r.n(n),a=r("z0FI"),i=(r("Y9lz"),r("xmzN")),c=r("aI42");var s="\n  attribute vec2 position;\n  void main() {\n    gl_Position = vec4(position, 0.0, 1.0);\n    OFFSET_POSITION(gl_Position);\n  }\n",u="\n  uniform vec3 color;\n  void main() {\n    gl_FragColor = vec4(color, 1.0);\n  }\n",d={name:"offsetLeft",inject:{"vs:OFFSET_POSITION":"position.x -= 0.5;"}},l={name:"offsetRight",inject:{"vs:OFFSET_POSITION":"position.x += 0.5;"}},p=function(e){var t,r;function n(){return e.apply(this,arguments)||this}r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.getInfo=function(){return"\nShader Modules using luma.gl's low-level API\n"};var o=n.prototype;return o.start=function(e){var t=this._getCanvas(e),r=t.getContext("webgl")||t.getContext("experimental-webgl");r.clearColor(0,0,0,1);var n=Object(i.a)(r,{vs:s,fs:u,modules:[d],hookFunctions:["vs:OFFSET_POSITION(inout vec4 position)"]}),o=r.createShader(r.VERTEX_SHADER);r.shaderSource(o,n.vs),r.compileShader(o);var a=r.createShader(r.FRAGMENT_SHADER);r.shaderSource(a,n.fs),r.compileShader(a);var c=r.createProgram();r.attachShader(c,o),r.attachShader(c,a),r.linkProgram(c),r.useProgram(c);var p=r.getUniformLocation(c,"color");r.uniform3fv(p,new Float32Array([1,0,0]));var h=Object(i.a)(r,{vs:s,fs:u,modules:[l],hookFunctions:["vs:OFFSET_POSITION(inout vec4 position)"]}),f=r.createShader(r.VERTEX_SHADER);r.shaderSource(f,h.vs),r.compileShader(f);var v=r.createShader(r.FRAGMENT_SHADER);r.shaderSource(v,h.fs),r.compileShader(v);var m=r.createProgram();r.attachShader(m,f),r.attachShader(m,v),r.linkProgram(m),r.useProgram(m);var g=r.getUniformLocation(m,"color");r.uniform3fv(g,new Float32Array([0,0,1]));var S=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,S),r.bufferData(r.ARRAY_BUFFER,new Float32Array([-.3,-.5,.3,-.5,0,.5]),r.STATIC_DRAW);var A=r.getAttribLocation(c,"position");r.vertexAttribPointer(A,2,r.FLOAT,!1,0,0),r.enableVertexAttribArray(A);var F=r.getAttribLocation(m,"position");r.vertexAttribPointer(F,2,r.FLOAT,!1,0,0),r.enableVertexAttribArray(F);var _={gl:r,positionBuffer:S,program1:c,program2:m};_.rafHandle=requestAnimationFrame((function e(){_.rafHandle=requestAnimationFrame(e),r.clear(r.COLOR_BUFFER_BIT),r.useProgram(c),r.drawArrays(r.TRIANGLES,0,3),r.useProgram(m),r.drawArrays(r.TRIANGLES,0,3)})),r.deleteShader(o),r.deleteShader(a),r.deleteShader(f),r.deleteShader(v),this.resources=_},o.stop=function(){cancelAnimationFrame(this.resources.rafHandle)},o.delete=function(){var e=this.resources,t=e.gl,r=e.positionBuffer,n=e.program1,o=e.program2;t.deleteBuffer(r),t.deleteProgram(n),t.deleteProgram(o)},n}(c.a);"undefined"==typeof window||window.website||(new p).start();r.d(t,"default",(function(){return h}));var h=function(e){var t,r;function n(){return e.apply(this,arguments)||this}return r=e,(t=n).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,n.prototype.render=function(){var e=this.props.pageContext,t=e&&e.exampleConfig||{};return o.a.createElement(a.a,{AnimationLoop:p,exampleConfig:t})},n}(o.a.Component)}}]);
//# sourceMappingURL=component---templates-getting-started-example-shader-modules-low-jsx-3c8f4fff479d19892adc.js.map