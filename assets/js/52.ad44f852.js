(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{543:function(t,s,a){t.exports=a.p+"assets/img/578380-20200412183641954-2072128139.47490b32.png"},609:function(t,s,a){"use strict";a.r(s);var n=a(2),r=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"选择一-项目级配置-推荐"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选择一-项目级配置-推荐"}},[t._v("#")]),t._v(" 选择一：项目级配置（推荐）")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("找到项目中的如下文件："),s("strong",[t._v("build.gradle")]),t._v("\n在项目的根目录下找到如下文件："),s("strong",[t._v("build.gradle")]),t._v("，打开编辑，在下图红色箭头处添加阿里云的镜像。\n"),s("img",{attrs:{src:a(543),alt:"img"}})]),t._v(" "),s("p",[t._v("添加如下代码：")]),t._v(" "),s("div",{staticClass:"language-rust line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[t._v("maven "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("url "),s("span",{pre:!0,attrs:{class:"token lifetime-annotation symbol"}},[t._v("'http")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("maven"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aliyun"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nexus"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("content"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("groups"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("public"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("在 apply 上面，添加如下代码：")]),t._v(" "),s("div",{staticClass:"language-fsharp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-fsharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token computation-expression keyword"}},[t._v("allprojects")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token computation-expression keyword"}},[t._v("repositories")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token computation-expression keyword"}},[t._v("maven")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" url 'http"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("maven"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aliyun"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nexus"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("content"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("groups"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\t\t"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mavenCentral")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\t"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("h2",{attrs:{id:"选择二-全局配置-操作系统的当前用户"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#选择二-全局配置-操作系统的当前用户"}},[t._v("#")]),t._v(" 选择二：全局配置（操作系统的当前用户）")]),t._v(" "),s("hr"),t._v(" "),s("p",[t._v("在操作系统当前用户的 HOME 目录，找到 "),s("strong",[t._v(".gradle")]),t._v(" 文件夹，在这个文件夹下面创建一个文本文件 "),s("strong",[t._v("init.gradle")]),t._v("，完整的文件路径可能如下：C:\\Users\\.gradle\\init.gradle。\n在此文件中加入如下代码片段：")]),t._v(" "),s("div",{staticClass:"language-rust line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-rust"}},[s("code",[t._v("allprojects"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    repositories "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        def "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ALIYUN_REPOSITORY_URL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token lifetime-annotation symbol"}},[t._v("'http")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("maven"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aliyun"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nexus"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("content"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("groups"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("public'\n        def "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ALIYUN_JCENTER_URL")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token lifetime-annotation symbol"}},[t._v("'http")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("maven"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("aliyun"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("nexus"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("content"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("repositories"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("jcenter'\n        all "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ArtifactRepository")]),t._v(" repo "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("->")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("repo instanceof "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("MavenArtifactRepository")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                def url "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" repo"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("startsWith")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token lifetime-annotation symbol"}},[t._v("'https")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("repo1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("maven"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("org"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("maven2'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    project"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lifecycle "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Repository ${repo.url} replaced by $ALIYUN_REPOSITORY_URL."')]),t._v("\n                    remove repo\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n                "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("url"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("startsWith")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token lifetime-annotation symbol"}},[t._v("'https")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("jcenter"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bintray"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("com"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("'"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n                    project"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("logger"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("lifecycle "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Repository ${repo.url} replaced by $ALIYUN_JCENTER_URL."')]),t._v("\n                    remove repo\n                "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n            "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        maven "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            allowInsecureProtocol "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n            url "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ALIYUN_REPOSITORY_URL")]),t._v("\n            url "),s("span",{pre:!0,attrs:{class:"token constant"}},[t._v("ALIYUN_JCENTER_URL")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br"),s("span",{staticClass:"line-number"},[t._v("9")]),s("br"),s("span",{staticClass:"line-number"},[t._v("10")]),s("br"),s("span",{staticClass:"line-number"},[t._v("11")]),s("br"),s("span",{staticClass:"line-number"},[t._v("12")]),s("br"),s("span",{staticClass:"line-number"},[t._v("13")]),s("br"),s("span",{staticClass:"line-number"},[t._v("14")]),s("br"),s("span",{staticClass:"line-number"},[t._v("15")]),s("br"),s("span",{staticClass:"line-number"},[t._v("16")]),s("br"),s("span",{staticClass:"line-number"},[t._v("17")]),s("br"),s("span",{staticClass:"line-number"},[t._v("18")]),s("br"),s("span",{staticClass:"line-number"},[t._v("19")]),s("br"),s("span",{staticClass:"line-number"},[t._v("20")]),s("br"),s("span",{staticClass:"line-number"},[t._v("21")]),s("br"),s("span",{staticClass:"line-number"},[t._v("22")]),s("br"),s("span",{staticClass:"line-number"},[t._v("23")]),s("br"),s("span",{staticClass:"line-number"},[t._v("24")]),s("br")])])])}),[],!1,null,null,null);s.default=r.exports}}]);