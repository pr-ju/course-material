import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, f as createStaticVNode, d as createVNode } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://davidwalsh.name/fetch",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_2 = {
  href: "https://fetch.spec.whatwg.org/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = {
  href: "https://developer.mozilla.org/en-US/docs/Web/API/History_API",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  return openBlock(), createElementBlock("div", null, [
    _cache[5] || (_cache[5] = createBaseVNode(
      "h1",
      {
        id: "ajax",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#ajax",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" AJAX")
      ],
      -1
      /* HOISTED */
    )),
    _cache[6] || (_cache[6] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("Traditionally, the only way to load new information on a webpage was by clicking on a link or submitting a form to tell the web browser to send a GET or a POST request to fetch and display a new webpage. But with "),
        createBaseVNode("em", null, "Asynchronous JavaScript And XML"),
        createTextVNode(" we can use client-side JavaScript to tell the web browser to send an HTTP request to a server, and we can also use client-side JavaScript to receive and handle the HTTP response the web browser receives back. This way it's easier to create more interactive websites with better user experience.")
      ],
      -1
      /* HOISTED */
    )),
    _cache[7] || (_cache[7] = createBaseVNode(
      "iframe",
      {
        width: "560",
        height: "314",
        src: "https://www.youtube.com/embed/tVZitsQRB_o",
        frameborder: "0",
        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
        allowfullscreen: ""
      },
      null,
      -1
      /* HOISTED */
    )),
    _cache[8] || (_cache[8] = createStaticVNode('<div class="custom-container danger"><p class="custom-container-title">Use AJAX properly!</p><p>AJAX can be used to improve the user experience, but most websites trying to use it actually end up providing a worse user experience. If you try to use it on a website, be sure to:</p><ul><li>Show loading indicators <ul><li>(otherwise users won&#39;t know if their clicks are registered, if something crashed, or if the page is still loading, etc.)</li></ul></li><li>Handle errors <ul><li>(must show error messages to the users when something goes wrong, otherwise they will just sit and wait)</li></ul></li><li>Change the URI when showing new content <ul><li>(otherwise users can&#39;t bookmark the page with the newly loaded content, the refresh button won&#39;t work as expected, search engines can&#39;t take users directly to the new content, etc.)</li></ul></li><li>Listen for changes in the web browser&#39;s history, and act accordingly <ul><li>(otherwise the the back and forward buttons in the web browser won&#39;t work as expected, etc.)</li></ul></li></ul><p>Just sending an extra HTTP request and display the new content is not enough, all of these things needs to be handled to improve the experience! If you are not prepared to put down all of this extra work, then AJAX is probably not for you.</p></div><h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="ajax.pdf">ajax.pdf</a></li><li><a href="ajax.pptx">ajax.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 4)),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_1, [
          _cache[0] || (_cache[0] = createTextVNode("David Walsh's blogpost on ")),
          _cache[1] || (_cache[1] = createBaseVNode(
            "code",
            null,
            "fetch",
            -1
            /* HOISTED */
          )),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_2, [
          _cache[2] || (_cache[2] = createBaseVNode(
            "code",
            null,
            "fetch",
            -1
            /* HOISTED */
          )),
          _cache[3] || (_cache[3] = createTextVNode(" specification")),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_3, [
          _cache[4] || (_cache[4] = createTextVNode("Manipulating the browser history")),
          createVNode(_component_ExternalLinkIcon)
        ])
      ])
    ])
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
