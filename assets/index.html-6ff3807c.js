import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://svelte.dev/tutorial/basics",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _cache[3] || (_cache[3] = createBaseVNode(
      "h1",
      {
        id: "svelte",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#svelte",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Svelte")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[1] || (_cache[1] = createTextVNode("Svelte is a frontend framework we can use to implement Single-Page Applications in a very convenient way. There is no recording for this lecture. Instead, use their excellent ")),
      createBaseVNode("a", _hoisted_1, [
        _cache[0] || (_cache[0] = createTextVNode("Tutorial")),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _cache[2] || (_cache[2] = createTextVNode(" to learn the basics of Svelte. You don't need to read of it, but at least the following parts:"))
    ]),
    _cache[4] || (_cache[4] = createBaseVNode(
      "ul",
      null,
      [
        createBaseVNode("li", null, "(1) Introduction"),
        createBaseVNode("li", null, "(2) Reactivity"),
        createBaseVNode("li", null, "(3) Props"),
        createBaseVNode("li", null, "(4) Logic"),
        createBaseVNode("li", null, "(5) Events"),
        createBaseVNode("li", null, "(6) Bindings"),
        createBaseVNode("li", null, "(7) Lifecycle"),
        createBaseVNode("li", null, "(8) Stores"),
        createBaseVNode("li", null, "(13) Advanced styling")
      ],
      -1
      /* HOISTED */
    ))
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
