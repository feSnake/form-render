(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[15],{C2bj:function(e,t,n){"use strict";n.r(t);var a=n("0Owb"),i=n("tJVT"),r=n("q1tI"),o=n.n(r),l=n("KwRa"),s=e=>{var t=e.schema,n=void 0===t?{}:t,s=Object(r["useState"])((()=>n.formData)),d=Object(i["default"])(s,2),m=d[0],p=d[1],c=Object(r["useState"])([]),u=Object(i["default"])(c,2),f=(u[0],u[1]),y=Object(r["useState"])(!1),h=Object(i["default"])(y,2),b=h[0],j=(h[1],e=>{console.log("\u6ca1\u6709\u901a\u8fc7\u7684\u6821\u9a8c:",e),f(e)});return o.a.createElement("div",{style:{maxWidth:800}},o.a.createElement(l["default"],Object(a["default"])({displayType:"row",showDescIcon:!0,labelWidth:120},n,{formData:m,onChange:p,onValidate:j,readOnly:b})))};t["default"]=s},IS6y:function(e,t,n){"use strict";n.r(t);var a=n("0Owb"),i=n("q1tI"),r=n.n(i),o=(n("B2uJ"),n("+su7"),n("qOys"),n("5Yjd")),l=n.n(o),s=r.a.memo((function(){var e=n("K+nK"),t=e(n("q1tI")),a=e(n("C2bj")),i=e(n("N/Mf")),r=function(){return t["default"].createElement(a["default"],{schema:i["default"]})};return t["default"].createElement(r)})),d=r.a.memo((function(){var e=n("K+nK"),t=e(n("q1tI")),a=e(n("C2bj")),i=e(n("mgmY")),r=function(){return t["default"].createElement(a["default"],{schema:i["default"]})};return t["default"].createElement(r)}));t["default"]=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"markdown"},r.a.createElement("h1",{id:"\u4e00\u4e9b\u9177\u9177\u7684\u7528\u6cd5"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u4e00\u4e9b\u9177\u9177\u7684\u7528\u6cd5"},r.a.createElement("span",{className:"icon icon-link"})),"\u4e00\u4e9b\u9177\u9177\u7684\u7528\u6cd5"),r.a.createElement("p",null,"\u53d1\u73b0\u5f88\u591a\u5b9e\u7528\u65b9\u6cd5\u548c\u89e3\u6cd5\uff0c\u5904\u4e8e\u201c\u4e0d\u4e3a\u4eba\u77e5\u201d\u7684\u72b6\u6001\uff0c\u6240\u4ee5\u5f00\u8f9f\u8fd9\u4e2a\u680f\u76ee\uff0c\u4e13\u95e8\u653e\u4e00\u4e9b\u6211\u89c9\u5f97\u6709\u610f\u601d\u7684\u7528\u6cd5\u3002\u6b22\u8fce\u5404\u4f4d PR \u9177\u9177\u7684\u7528\u6cd5\u54e6"),r.a.createElement("h2",{id:"\u51fd\u6570\u8868\u8fbe\u5f0f"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u51fd\u6570\u8868\u8fbe\u5f0f"},r.a.createElement("span",{className:"icon icon-link"})),"\u51fd\u6570\u8868\u8fbe\u5f0f"),r.a.createElement("p",null,"\u6240\u6709\u7ec4\u4ef6\u5e93\u7684\u5c5e\u6027\u90fd\u53ef\u4ee5\u901a\u8fc7 ",r.a.createElement("code",null,"ui:options")," \u652f\u6301\uff01")),r.a.createElement(l.a,Object(a["default"])({source:{jsx:"import React from 'react';\nimport FR from '../demo/FR/index.jsx';\nimport json from '../demo/new-feature/expression.json';\n\nexport default () => <FR schema={json} />;"}},{dependencies:{"form-render":"0.9.2"},files:{"demo/FR/index.jsx":{path:"../demo/FR/index.jsx",content:"import React, { useState } from 'react';\n// \u4f7f\u7528 Ant Design \u98ce\u683c\nimport FormRender from 'form-render/lib/antd';\n// \u4f7f\u7528 Fusion \u98ce\u683c\n// import FormRender from 'form-render/lib/fusion';\n// import '@alifd/next/dist/next.min.css';\n\nconst Demo = ({ schema = {} }) => {\n  const [formData, setFormData] = useState(() => schema.formData);\n  const [valid, setValid] = useState([]);\n  const [readOnly, setReadOnly] = useState(false);\n\n  const onValidate = _valid => {\n    console.log('\u6ca1\u6709\u901a\u8fc7\u7684\u6821\u9a8c:', _valid);\n    setValid(_valid);\n  };\n\n  return (\n    <div style={{ maxWidth: 800 }}>\n      <FormRender\n        displayType=\"row\"\n        showDescIcon\n        labelWidth={120}\n        {...schema}\n        formData={formData}\n        onChange={setFormData}\n        onValidate={onValidate}\n        readOnly={readOnly}\n      />\n    </div>\n  );\n};\n\nexport default Demo;\n"},"demo/new-feature/expression.json":{path:"../demo/new-feature/expression.json",content:'{\n  "propsSchema": {\n    "type": "object",\n    "properties": {\n      "input": {\n        "title": "\u7b80\u5355\u8f93\u5165\u6846",\n        "type": "string",\n        "ui:options": {\n          "placeholder": "{{formData.config.placeholder}}",\n          "size": "{{formData.config.size}}"\n        },\n        "ui:hidden": "{{formData.config.hidden === true}}",\n        "ui:disabled": "{{formData.config.disabled === true}}"\n      },\n      "config": {\n        "title": "\u914d\u7f6e",\n        "type": "object",\n        "properties": {\n          "placeholder": {\n            "title": "placeholder\u7684\u503c",\n            "type": "string"\n          },\n          "size": {\n            "title": "input\u5927\u5c0f",\n            "type": "string",\n            "enum": ["large", "middle", "small"],\n            "enumNames": ["\u5927", "\u4e2d", "\u5c0f"],\n            "default": null,\n            "ui:widget": "radio"\n          },\n          "hidden": {\n            "title": "\u662f\u5426\u9690\u85cf",\n            "type": "boolean"\n          },\n          "disabled": {\n            "title": "\u662f\u5426disable",\n            "type": "boolean"\n          }\n        }\n      }\n    },\n    "required": []\n  },\n  "uiSchema": {},\n  "formData": {},\n  "labelWidth": 140\n}\n'}}}),r.a.createElement(s,null)),r.a.createElement("div",{className:"markdown"},r.a.createElement("h2",{id:"\u5f39\u5c42\u5c55\u793a"},r.a.createElement("a",{"aria-hidden":"true",href:"#\u5f39\u5c42\u5c55\u793a"},r.a.createElement("span",{className:"icon icon-link"})),"\u5f39\u5c42\u5c55\u793a"),r.a.createElement("p",null,"\u4e00\u822c\u7528\u4e8e\u590d\u6742\u7ed3\u6784, \u652f\u6301 ",r.a.createElement("code",null,"modal")," \u548c ",r.a.createElement("code",null,"drawer"))),r.a.createElement(l.a,Object(a["default"])({source:{jsx:"import React from 'react';\nimport FR from '../demo/FR/index.jsx';\nimport json from '../demo/new-feature/modal.json';\n\nexport default () => <FR schema={json} />;"}},{dependencies:{"form-render":"0.9.2"},files:{"demo/FR/index.jsx":{path:"../demo/FR/index.jsx",content:"import React, { useState } from 'react';\n// \u4f7f\u7528 Ant Design \u98ce\u683c\nimport FormRender from 'form-render/lib/antd';\n// \u4f7f\u7528 Fusion \u98ce\u683c\n// import FormRender from 'form-render/lib/fusion';\n// import '@alifd/next/dist/next.min.css';\n\nconst Demo = ({ schema = {} }) => {\n  const [formData, setFormData] = useState(() => schema.formData);\n  const [valid, setValid] = useState([]);\n  const [readOnly, setReadOnly] = useState(false);\n\n  const onValidate = _valid => {\n    console.log('\u6ca1\u6709\u901a\u8fc7\u7684\u6821\u9a8c:', _valid);\n    setValid(_valid);\n  };\n\n  return (\n    <div style={{ maxWidth: 800 }}>\n      <FormRender\n        displayType=\"row\"\n        showDescIcon\n        labelWidth={120}\n        {...schema}\n        formData={formData}\n        onChange={setFormData}\n        onValidate={onValidate}\n        readOnly={readOnly}\n      />\n    </div>\n  );\n};\n\nexport default Demo;\n"},"demo/new-feature/modal.json":{path:"../demo/new-feature/modal.json",content:'{\n  "schema": {\n    "type": "object",\n    "properties": {\n      "modal": {\n        "title": "\u5f39\u5c42\u9690\u85cf\u90e8\u5206\u914d\u7f6e",\n        "description": "\u76ee\u524d\u652f\u6301modal/drawer",\n        "type": "object",\n        "properties": {\n          "obj1": {\n            "title": "object + modal",\n            "type": "object",\n            "ui:options": {\n              "modal": true\n            },\n            "properties": {\n              "input1": {\n                "title": "\u8f93\u5165\u68461",\n                "type": "string"\n              },\n              "input2": {\n                "title": "\u8f93\u5165\u68462",\n                "type": "string"\n              }\n            }\n          },\n          "list1": {\n            "title": "list + modal",\n            "type": "array",\n            "ui:options": {\n              "modal": {\n                "text": "\u914d\u7f6e\u5b8c\u5168\u53c2\u8003antd/fusion\u6587\u6863",\n                "mask": false,\n                "width": 400\n              }\n            },\n            "items": {\n              "type": "object",\n              "properties": {\n                "input1": {\n                  "title": "\u8f93\u5165\u68461",\n                  "type": "string"\n                },\n                "input2": {\n                  "title": "\u8f93\u5165\u68462",\n                  "type": "string"\n                }\n              }\n            }\n          },\n          "list3": {\n            "title": "list\u5957list",\n            "type": "array",\n            "items": {\n              "type": "object",\n              "properties": {\n                "input1": {\n                  "title": "\u7b80\u5355\u8f93\u5165\u6846",\n                  "type": "string"\n                },\n                "list4": {\n                  "title": "\u6570\u7ec4",\n                  "type": "array",\n                  "items": {\n                    "type": "object",\n                    "properties": {\n                      "input1": {\n                        "title": "\u8f93\u5165\u68461",\n                        "type": "string"\n                      },\n                      "input2": {\n                        "title": "\u8f93\u5165\u68462",\n                        "type": "string"\n                      }\n                    }\n                  },\n                  "ui:options": {\n                    "drawer": true\n                  }\n                }\n              }\n            }\n          }\n        }\n      }\n    }\n  }\n}\n'}}}),r.a.createElement(d,null)))}},"K+nK":function(e,t){function n(e){return e&&e.__esModule?e:{default:e}}e.exports=n},"N/Mf":function(e){e.exports=JSON.parse('{"propsSchema":{"type":"object","properties":{"input":{"title":"\u7b80\u5355\u8f93\u5165\u6846","type":"string","ui:options":{"placeholder":"{{formData.config.placeholder}}","size":"{{formData.config.size}}"},"ui:hidden":"{{formData.config.hidden === true}}","ui:disabled":"{{formData.config.disabled === true}}"},"config":{"title":"\u914d\u7f6e","type":"object","properties":{"placeholder":{"title":"placeholder\u7684\u503c","type":"string"},"size":{"title":"input\u5927\u5c0f","type":"string","enum":["large","middle","small"],"enumNames":["\u5927","\u4e2d","\u5c0f"],"default":null,"ui:widget":"radio"},"hidden":{"title":"\u662f\u5426\u9690\u85cf","type":"boolean"},"disabled":{"title":"\u662f\u5426disable","type":"boolean"}}}},"required":[]},"uiSchema":{},"formData":{},"labelWidth":140}')},mgmY:function(e){e.exports=JSON.parse('{"schema":{"type":"object","properties":{"modal":{"title":"\u5f39\u5c42\u9690\u85cf\u90e8\u5206\u914d\u7f6e","description":"\u76ee\u524d\u652f\u6301modal/drawer","type":"object","properties":{"obj1":{"title":"object + modal","type":"object","ui:options":{"modal":true},"properties":{"input1":{"title":"\u8f93\u5165\u68461","type":"string"},"input2":{"title":"\u8f93\u5165\u68462","type":"string"}}},"list1":{"title":"list + modal","type":"array","ui:options":{"modal":{"text":"\u914d\u7f6e\u5b8c\u5168\u53c2\u8003antd/fusion\u6587\u6863","mask":false,"width":400}},"items":{"type":"object","properties":{"input1":{"title":"\u8f93\u5165\u68461","type":"string"},"input2":{"title":"\u8f93\u5165\u68462","type":"string"}}}},"list3":{"title":"list\u5957list","type":"array","items":{"type":"object","properties":{"input1":{"title":"\u7b80\u5355\u8f93\u5165\u6846","type":"string"},"list4":{"title":"\u6570\u7ec4","type":"array","items":{"type":"object","properties":{"input1":{"title":"\u8f93\u5165\u68461","type":"string"},"input2":{"title":"\u8f93\u5165\u68462","type":"string"}}},"ui:options":{"drawer":true}}}}}}}}}}')}}]);