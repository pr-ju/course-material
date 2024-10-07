import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx } from "./app-dfab54cf.js";
const _sfc_main = {};
function _sfc_render(_ctx, _cache) {
  const _component_RouterLink = resolveComponent("RouterLink");
  return openBlock(), createElementBlock("div", null, [
    _cache[21] || (_cache[21] = createBaseVNode(
      "h1",
      {
        id: "lectures",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#lectures",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Lectures")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[2] || (_cache[2] = createTextVNode("The pages ")),
      createVNode(_component_RouterLink, { to: "/courses/client-server-communication/laboratory-work/" }, {
        default: withCtx(() => _cache[0] || (_cache[0] = [
          createTextVNode("Laboratory Work")
        ])),
        _: 1
        /* STABLE */
      }),
      _cache[3] || (_cache[3] = createTextVNode(" and ")),
      createVNode(_component_RouterLink, { to: "/courses/client-server-communication/project-work/" }, {
        default: withCtx(() => _cache[1] || (_cache[1] = [
          createTextVNode("Project Work")
        ])),
        _: 1
        /* STABLE */
      }),
      _cache[4] || (_cache[4] = createTextVNode(" indicate when you're expected to view each lecture, but here's a list of all of them."))
    ]),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/using-shells/" }, {
          default: withCtx(() => _cache[5] || (_cache[5] = [
            createTextVNode("Using Shells")
          ])),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/vue/" }, {
          default: withCtx(() => _cache[6] || (_cache[6] = [
            createTextVNode("Vue")
          ])),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/internet-basics/" }, {
          default: withCtx(() => _cache[7] || (_cache[7] = [
            createTextVNode("Internet Basics")
          ])),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/http-and-web-applications/" }, {
          default: withCtx(() => _cache[8] || (_cache[8] = [
            createTextVNode("HTTP and Web Applications")
          ])),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/rest-api-basics/" }, {
          default: withCtx(() => _cache[9] || (_cache[9] = [
            createTextVNode("REST API Basics")
          ])),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/node-js/" }, {
          default: withCtx(() => _cache[10] || (_cache[10] = [
            createTextVNode("Node.js")
          ])),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/web-applications-in-node-js/" }, {
          default: withCtx(() => _cache[11] || (_cache[11] = [
            createTextVNode("Web Applications in Node.js")
          ])),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/npm/" }, {
          default: withCtx(() => _cache[12] || (_cache[12] = [
            createTextVNode("npm")
          ])),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/express-basics/" }, {
          default: withCtx(() => _cache[13] || (_cache[13] = [
            createTextVNode("Express Basics")
          ])),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/rest-api-in-express/" }, {
          default: withCtx(() => _cache[14] || (_cache[14] = [
            createTextVNode("REST API in Express")
          ])),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/sqlite/" }, {
          default: withCtx(() => _cache[15] || (_cache[15] = [
            createTextVNode("SQLite")
          ])),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/using-sqlite-in-node-js/" }, {
          default: withCtx(() => _cache[16] || (_cache[16] = [
            createTextVNode("Using SQLite in Node.js")
          ])),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/sop-and-cors/" }, {
          default: withCtx(() => _cache[17] || (_cache[17] = [
            createTextVNode("SOP and CORS")
          ])),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/rest-api-authorization/" }, {
          default: withCtx(() => _cache[18] || (_cache[18] = [
            createTextVNode("REST API Authorization")
          ])),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/json-web-tokens/" }, {
          default: withCtx(() => _cache[19] || (_cache[19] = [
            createTextVNode("JSON Web Tokens")
          ])),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/third-party-authentication/" }, {
          default: withCtx(() => _cache[20] || (_cache[20] = [
            createTextVNode("Third-Party Authentication")
          ])),
          _: 1
          /* STABLE */
        })
      ])
    ])
  ]);
}
const lectures_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "lectures.html.vue"]]);
export {
  lectures_html as default
};
