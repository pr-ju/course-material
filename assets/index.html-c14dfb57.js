import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, f as createStaticVNode, d as createVNode } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://developer.android.com/guide/topics/connectivity/bluetooth",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _cache[3] || (_cache[3] = createBaseVNode(
      "h1",
      {
        id: "android-bluetooth-classic",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#android-bluetooth-classic",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Android Bluetooth Classic")
      ],
      -1
      /* HOISTED */
    )),
    _cache[4] || (_cache[4] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("You want your application to communicate with an application running on another device? Then Bluetooth could be the technology you need. Let's take a look at how "),
        createBaseVNode("em", null, "Bluetooth 3"),
        createTextVNode(" (AKA "),
        createBaseVNode("em", null, "Bluetooth Classic"),
        createTextVNode(" from Bluetooth 4 and on) works.")
      ],
      -1
      /* HOISTED */
    )),
    _cache[5] || (_cache[5] = createBaseVNode(
      "iframe",
      {
        width: "560",
        height: "314",
        src: "https://www.youtube.com/embed/Tjx50DyV2xk",
        frameborder: "0",
        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
        allowfullscreen: ""
      },
      null,
      -1
      /* HOISTED */
    )),
    _cache[6] || (_cache[6] = createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="android-bluetooth-classic.pdf">android-bluetooth-classic.pdf</a></li><li><a href="android-bluetooth-classic.pptx">android-bluetooth-classic.pptx</a></li><li><a href="chatti.zip">chatti.zip</a> <br> A sample application where two devices can connect and chat using Bluetooth Classic (Note: does not support i18n and error handling).</li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3)),
    createBaseVNode("p", null, [
      _cache[1] || (_cache[1] = createTextVNode("The ")),
      createBaseVNode("a", _hoisted_1, [
        _cache[0] || (_cache[0] = createTextVNode("Android Developers Guide's page about Bluetooth")),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _cache[2] || (_cache[2] = createTextVNode("."))
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
