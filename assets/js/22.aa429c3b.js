(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{725:function(s,a,n){s.exports=n.p+"assets/img/QQ_1722254242290.29e794e8.png"},784:function(s,a,n){"use strict";n.r(a);var t=n(5),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"nacos使用教程"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nacos使用教程"}},[s._v("#")]),s._v(" Nacos使用教程")]),s._v(" "),t("h3",{attrs:{id:"引入依赖"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#引入依赖"}},[s._v("#")]),s._v(" 引入依赖")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("\n        <dependency>\n            <groupId>org.springframework.boot</groupId>\n            <artifactId>spring-boot-starter-web</artifactId>\n        </dependency>\n\n        <dependency>\n            <groupId>org.springframework.cloud</groupId>\n            <artifactId>spring-cloud-starter-bootstrap</artifactId>\n            <version>4.0.0</version>\n        </dependency>\n\n\n        <dependency>\n            <groupId>com.alibaba.cloud</groupId>\n            <artifactId>spring-cloud-starter-alibaba-nacos-config</artifactId>\n            <version>2022.0.0.0-RC1</version>\n        </dependency>\n\n\n        <dependency>\n            <groupId>com.alibaba.cloud</groupId>\n            <artifactId>spring-cloud-starter-alibaba-nacos-discovery</artifactId>\n            <version>2021.1</version>\n        </dependency>\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br"),t("span",{staticClass:"line-number"},[s._v("16")]),t("br"),t("span",{staticClass:"line-number"},[s._v("17")]),t("br"),t("span",{staticClass:"line-number"},[s._v("18")]),t("br"),t("span",{staticClass:"line-number"},[s._v("19")]),t("br"),t("span",{staticClass:"line-number"},[s._v("20")]),t("br"),t("span",{staticClass:"line-number"},[s._v("21")]),t("br"),t("span",{staticClass:"line-number"},[s._v("22")]),t("br"),t("span",{staticClass:"line-number"},[s._v("23")]),t("br"),t("span",{staticClass:"line-number"},[s._v("24")]),t("br"),t("span",{staticClass:"line-number"},[s._v("25")]),t("br")])]),t("h3",{attrs:{id:"版本冲突问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#版本冲突问题"}},[s._v("#")]),s._v(" 版本冲突问题")]),s._v(" "),t("p",[s._v("登录 spring官网，查看springcloud和boot版本对应关系。")]),s._v(" "),t("p",[s._v("https://spring.io/projects/spring-cloud#overview")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("Release Train")]),s._v(" "),t("th",[s._v("Boot Version")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("Hoxton")]),s._v(" "),t("td",[s._v("2.2.x")])]),s._v(" "),t("tr",[t("td",[s._v("Greenwich")]),s._v(" "),t("td",[s._v("2.1.x")])]),s._v(" "),t("tr",[t("td",[s._v("Finchley")]),s._v(" "),t("td",[s._v("2.0.x")])]),s._v(" "),t("tr",[t("td",[s._v("Edgware")]),s._v(" "),t("td",[s._v("1.5.x")])]),s._v(" "),t("tr",[t("td",[s._v("Dalston")]),s._v(" "),t("td",[s._v("1.5.x")])])])]),s._v(" "),t("h3",{attrs:{id:"bootstrap-yaml"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#bootstrap-yaml"}},[s._v("#")]),s._v(" bootstrap.yaml")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("spring:\n  application:\n    name: NacosConfig\n  cloud:\n    nacos:\n      server-addr: 127.0.0.1:8848\n      config:\n        group: DEFAULT_GROUP\n        name: nacos_config\n       \n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br")])]),t("h3",{attrs:{id:"nacos动态配置文件"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#nacos动态配置文件"}},[s._v("#")]),s._v(" nacos动态配置文件")]),s._v(" "),t("p",[t("img",{attrs:{src:n(725),alt:"QQ_1722254242290"}})])])}),[],!1,null,null,null);a.default=r.exports}}]);