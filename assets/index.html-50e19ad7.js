import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, f as createStaticVNode, e as withCtx } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://tools.ietf.org/html/rfc2616",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_2 = {
  href: "https://launchschool.com/books/http",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = {
  href: "https://tools.ietf.org/html/rfc2616",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_4 = {
  href: "https://www.reddit.com/r/dataisbeautiful/comments/cxuah9/usage_share_of_internet_browsers_1996_2019_oc/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_5 = {
  href: "https://en.wikipedia.org/wiki/Mathematics",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_6 = {
  href: "https://en.wikipedia.org/wiki/Computer_science",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_7 = {
  href: "https://tools.ietf.org/html/rfc3986",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_8 = { class: "custom-container tip" };
const _hoisted_9 = {
  href: "https://ju.se",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  const _component_FigureNumber = resolveComponent("FigureNumber");
  const _component_RenderMermaid = resolveComponent("RenderMermaid");
  const _component_Figure = resolveComponent("Figure");
  const _component_CodeGroupItem = resolveComponent("CodeGroupItem");
  const _component_CodeGroup = resolveComponent("CodeGroup");
  return openBlock(), createElementBlock("div", null, [
    _cache[68] || (_cache[68] = createBaseVNode(
      "h1",
      {
        id: "http-and-web-applications",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#http-and-web-applications",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" HTTP and Web Applications")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[1] || (_cache[1] = createTextVNode("The web is built on a protocol called the ")),
      _cache[2] || (_cache[2] = createBaseVNode(
        "em",
        null,
        "HyperText Transfer Protocol",
        -1
        /* HOISTED */
      )),
      _cache[3] || (_cache[3] = createTextVNode(" (HTTP). To build proper web applications, it is essential to understand how this protocol works. ")),
      createBaseVNode("a", _hoisted_1, [
        _cache[0] || (_cache[0] = createTextVNode("The HTTP specification")),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _cache[4] || (_cache[4] = createTextVNode(" explains it all, but since it's a specification it can be quite hard to read, so let me give you a quick introduction to HTTP before you read the details in the HTTP specification."))
    ]),
    _cache[69] || (_cache[69] = createBaseVNode(
      "iframe",
      {
        width: "560",
        height: "314",
        src: "https://www.youtube.com/embed/kuTKFoU5v7k",
        frameborder: "0",
        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
        allowfullscreen: ""
      },
      null,
      -1
      /* HOISTED */
    )),
    _cache[70] || (_cache[70] = createStaticVNode('<h2 id="lecture-material" tabindex="-1"><a class="header-anchor" href="#lecture-material" aria-hidden="true">#</a> Lecture material</h2><ul><li><a href="http-and-web-applications.pdf">http-and-web-applications.pdf</a></li><li><a href="http-and-web-applications.pptx">http-and-web-applications.pptx</a></li></ul><h2 id="recommended-reading" tabindex="-1"><a class="header-anchor" href="#recommended-reading" aria-hidden="true">#</a> Recommended reading</h2>', 3)),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_2, [
          _cache[5] || (_cache[5] = createTextVNode("Introduction to HTTP")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[6] || (_cache[6] = createTextVNode(" by Launch School ")),
        _cache[7] || (_cache[7] = createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "Up to (including) the chapter HTTP --> Processing Responses")
          ],
          -1
          /* HOISTED */
        ))
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_3, [
          _cache[8] || (_cache[8] = createTextVNode("HTTP/1.1 specification")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[9] || (_cache[9] = createBaseVNode(
          "ul",
          null,
          [
            createBaseVNode("li", null, "Don't read and learn everything by heart, but just enough so you get comfortable looking up things (methods, status codes, etc.) in it.")
          ],
          -1
          /* HOISTED */
        ))
      ])
    ]),
    _cache[71] || (_cache[71] = createBaseVNode(
      "h2",
      {
        id: "interesting-reading",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#interesting-reading",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Interesting reading")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_4, [
          _cache[10] || (_cache[10] = createTextVNode("Usage Share of Internet Browsers 1996 - 2019 (visualized)")),
          createVNode(_component_ExternalLinkIcon)
        ])
      ])
    ]),
    _cache[72] || (_cache[72] = createBaseVNode(
      "h2",
      {
        id: "clients-and-servers",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#clients-and-servers",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Clients and Servers")
      ],
      -1
      /* HOISTED */
    )),
    _cache[73] || (_cache[73] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("The HTTP protocol is built on a "),
        createBaseVNode("em", null, "client-server"),
        createTextVNode(" architecture. That means that some computers on the web acts as "),
        createBaseVNode("em", null, "servers"),
        createTextVNode(", and all other computers acts as "),
        createBaseVNode("em", null, "clients"),
        createTextVNode(". When you browse the web through a web browser, your web browser is a client.")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[11] || (_cache[11] = createTextVNode("A client can send an HTTP request to a server, asking the server to do something for it. When a server receives the HTTP request, it should carry out the request, and then send back an HTTP response to the client. This is visualized in ")),
      createVNode(_component_FigureNumber),
      _cache[12] || (_cache[12] = createTextVNode(" below. Having a server on it own is useless; servers exist to serve clients (that's why we call them servers)."))
    ]),
    createVNode(_component_Figure, { caption: "Example of Client-Server communication." }, {
      default: withCtx(() => [
        createVNode(_component_RenderMermaid, { "graph-definition": "\nsequenceDiagram\n    participant Client\n    participant Server\n    Client->>+Server: 1. HTTP Request\n    Note right of Server: 2. Carry out request\n    Server-->>-Client: 3. HTTP Response\n" })
      ]),
      _: 1
      /* STABLE */
    }),
    _cache[74] || (_cache[74] = createStaticVNode('<p>For example, when you click on a link in your web browser, your web browser sends an HTTP request to a server, requesting the server to send back the webpage the link leads to. When the server receives this request it generates the webpage/loads it from a file and sends it back in an HTTP response, and when your web browser receives the HTTP response it displays the webpage on the screen.</p><p>In general, any computer can act as a client or a server. It is also possible for a computer to be both a client and a server at the same time. For example, when you (acting as a client) send an HTTP request to <code>Server A</code>, that server might in turn send an HTTP request to <code>Server B</code> to handle your request. Then <code>Server A</code> acts both as a server and a client at the same time. This is for example used when you login with your Google account on a website that doesn&#39;t belong to Google. Then the website you send your login request to will send its own requests to Google to check which Google account that belongs to you (this example is a bit simplified; in practice it is a bit more complicated than this).</p><h2 id="resources-and-uris" tabindex="-1"><a class="header-anchor" href="#resources-and-uris" aria-hidden="true">#</a> Resources and URIs</h2><p>Servers in HTTP are expected to contain resources. It is up to each server to decide what type of resources it should contain, but some resources commonly found on websites includes:</p><ul><li>Images (<code>.png</code> files, <code>.jpeg</code> files, etc.)</li><li>Sounds (<code>.mp3</code> files, etc.)</li><li>Videos (<code>.mp4</code> files, etc.)</li><li>Documents (<code>.pdf</code> files, <code>.docx</code> files, <code>.txt</code> files, etc.)</li><li>Static webpages (<code>.html</code> files, <code>.css</code> files, <code>.js</code> files, etc.)</li><li>General data, such as: <ul><li>Accounts</li><li>Blogposts</li><li>Guestbook posts</li><li>Articles</li><li>Private Messages</li><li>Comments</li><li>etc.</li></ul></li></ul><p>Some resources (images, videos, documents, etc.) are simply stored as files on the server, while other resources can be stored in a database, or some other way. For now, we don&#39;t really care about how the resources are being stored on the server, as long as they are stored somehow.</p><p>When a client wants to work with a resource, it sends an HTTP requests to the server, asking the server to do something with the resource. There are primarilly four different types of requests clients can send. These are known as CRUD operations, and they are:</p><ul><li><u>C</u>reate (ask the server to create a new resource)</li><li><u>R</u>etrieve/<u>R</u>ead (ask the server to send back a resource)</li><li><u>U</u>pdate (ask the server to change a resource)</li><li><u>D</u>elete (ask the server to delete a reosurce)</li></ul><p>In English, an HTTP request could say something like:</p><ul><li><em>Send back the contact page to me</em></li><li><em>Delete the last comment I wrote</em></li><li><em>Change the title of the blog post I wrote yesterday to &quot;Congratulations&quot;</em> (the client sends the new title to the server)</li><li><em>Create a new friend relationship with the user Alice for me</em> (the client sends a new resource representing the friend relationship to the server)</li></ul><div class="custom-container tip"><p class="custom-container-title">Example</p><p>When you create a new account on a website, your web browser sends an HTTP request to the server asking the server to create a new resource representing your account containing your username and password (and possibly some additional information).</p></div><p>Each request sent to a server is about doing something with a resource. The client tells the server which resource that is through a <em>Uniform Resource Identifier</em> (URI). Each resource on the server should have a URI that uniquely identifies it, and it is the server that decides which URI each resource should have. Each time you view a webpage (webpage = resource) in a web browser, you can see the URI that uniquely identifies that webpage in the address bar (usually located at the top of the web browser).</p>', 12)),
    createBaseVNode("p", null, [
      _cache[15] || (_cache[15] = createTextVNode("For example, ")),
      createBaseVNode("a", _hoisted_5, [
        _cache[13] || (_cache[13] = createTextVNode("Wikipedia's article/webpage about Mathematics")),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _cache[16] || (_cache[16] = createTextVNode(" has the URI ")),
      _cache[17] || (_cache[17] = createBaseVNode(
        "code",
        null,
        "/wiki/Mathematics",
        -1
        /* HOISTED */
      )),
      _cache[18] || (_cache[18] = createTextVNode(", while their ")),
      createBaseVNode("a", _hoisted_6, [
        _cache[14] || (_cache[14] = createTextVNode("article/webpage about Computer Science")),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _cache[19] || (_cache[19] = createTextVNode(" has the URI ")),
      _cache[20] || (_cache[20] = createBaseVNode(
        "code",
        null,
        "/wiki/Computer_science",
        -1
        /* HOISTED */
      )),
      _cache[21] || (_cache[21] = createTextVNode("."))
    ]),
    createBaseVNode("p", null, [
      _cache[23] || (_cache[23] = createTextVNode("The ")),
      createBaseVNode("a", _hoisted_7, [
        _cache[22] || (_cache[22] = createTextVNode("URI specification")),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _cache[24] || (_cache[24] = createTextVNode(" specifies the format of URIs. Simply put, it is a sequence of characters, where the slash character ")),
      _cache[25] || (_cache[25] = createBaseVNode(
        "code",
        null,
        "/",
        -1
        /* HOISTED */
      )),
      _cache[26] || (_cache[26] = createTextVNode(" is used to group relevant resources together. URIs also include the protocol used to access the resource (e.g. HTTP) and an identifier indicating which server that stores the resource (a domain or an IP adress), so a complete URI could for example be ")),
      _cache[27] || (_cache[27] = createBaseVNode(
        "code",
        null,
        "https://en.wikipedia.org/wiki/Mathematics",
        -1
        /* HOISTED */
      )),
      _cache[28] || (_cache[28] = createTextVNode(", where ")),
      _cache[29] || (_cache[29] = createBaseVNode(
        "code",
        null,
        "https",
        -1
        /* HOISTED */
      )),
      _cache[30] || (_cache[30] = createTextVNode(" indicates that the HTTPS protocol should be used to send the HTTP request, and the computer containing the resource is the one with the IP address the domain name ")),
      _cache[31] || (_cache[31] = createBaseVNode(
        "code",
        null,
        "wikipedia.org",
        -1
        /* HOISTED */
      )),
      _cache[32] || (_cache[32] = createTextVNode(" maps to."))
    ]),
    _cache[75] || (_cache[75] = createStaticVNode('<div class="custom-container tip"><p class="custom-container-title">HTTP VS HTTPS</p><p>The web is built on the HTTP protocol. The HTTP protocol is not encrypted, so it&#39;s a bad idea to send sensitive information (such as passwords, credit card numbers, etc.) using it. Therefore the HTTPS protocol were invented. HTTPS does more or less work the same way as HTTP, but with the addition being encrypted, so even though you learn HTTP here, you can just as well later use HTTPS.</p></div><p>URIs usually identifies a single resource or a collection of multiple resources. It is quite common that the beginning of a URI identifies a collection of resources, and the end of the URI identifies a specific resource within that collection. For example, the URI <code>/accounts</code> could identify the collection of all accounts on a website, and the URI <code>/accounts/Alice</code> identifies the specific account with the username <em>Alice</em>. We can also see this pattern in the example before with URIs on Wikipedia.</p><h2 id="requests" tabindex="-1"><a class="header-anchor" href="#requests" aria-hidden="true">#</a> Requests</h2><p>So, a client can send an HTTP request to a server to request the server to do something for it. The HTTP specification have specified the structure of these HTTP requests, so it is very important that clients send HTTP requests using the structure specified in the HTTP specification. If they don&#39;t, servers will not understand the request and simply ignore it or send back an HTTP response indicating that something was wrong with the request.</p>', 4)),
    createBaseVNode("p", null, [
      _cache[33] || (_cache[33] = createTextVNode("The structure of an HTTP request is shown in ")),
      createVNode(_component_FigureNumber),
      _cache[34] || (_cache[34] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "The structure of an HTTP request." }, {
      default: withCtx(() => _cache[35] || (_cache[35] = [
        createBaseVNode(
          "div",
          {
            class: "language-http line-numbers-mode",
            "data-ext": "http"
          },
          [
            createBaseVNode("pre", { class: "language-http" }, [
              createBaseVNode("code", null, [
                createTextVNode("METHOD URI VERSION\n"),
                createBaseVNode("span", { class: "token header" }, [
                  createBaseVNode("span", { class: "token header-name keyword" }, "HEADER1"),
                  createBaseVNode("span", { class: "token punctuation" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token header-value" }, "VALUE1")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token header" }, [
                  createBaseVNode("span", { class: "token header-name keyword" }, "HEADER2"),
                  createBaseVNode("span", { class: "token punctuation" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token header-value" }, "VALUE2")
                ]),
                createTextVNode("\n...\n\nBODY\n")
              ])
            ]),
            createBaseVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true"
            }, [
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[76] || (_cache[76] = createStaticVNode("<p>The first line in an HTTP request is called the <em>request line</em>. It consists of three parts.</p><p>The first part on the request line is called the <code>METHOD</code>. It is also known as the <em>verb</em>, but the HTTP specification calls it method, so it is better to stick with that. The method indicates what the client wants to do with the resource identified by the <code>URI</code> (the second part). For example, the <code>GET</code> method indicates that the client wants to retrieve the resource, so the server should send back the resource in the HTTP request. The <code>DELETE</code> method indicates that the client wants the server to delete the resource, so the server should delete the resource before it sends back an HTTP response.</p><p>The third part on the request line, <code>VERSION</code>, indicates which version of HTTP the client is using, so the server can use the same version. A common value used here is <code>HTTP/1.1</code>.</p><p>Below the request line you find <em>the headers</em>. These are key-value pairs with additional information about the request. For example, the <code>Host</code> header is used to indicate the domain name of the server the request is sent to (for example <code>Host: ju.se</code>), and the <code>Accept</code> header is used to indicate which data format the client would like to get back the requested resource in (for example <code>Accept: text/html</code>).</p><p>Below the headers you find <em>the body</em> of the request. Here the client can pass a resource to the server in the HTTP request. This is used when the client wants to create a new resource on the server or update an existing resource. If no resource needs to be sent to the server, you omit the body (leave it empty/blank).</p>", 5)),
    createBaseVNode("p", null, [
      _cache[36] || (_cache[36] = createTextVNode("An example of an actual HTTP request is shown in ")),
      createVNode(_component_FigureNumber),
      _cache[37] || (_cache[37] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "Example of an HTTP request asking the server to create a new account." }, {
      default: withCtx(() => _cache[38] || (_cache[38] = [
        createBaseVNode(
          "div",
          {
            class: "language-http line-numbers-mode",
            "data-ext": "http"
          },
          [
            createBaseVNode("pre", { class: "language-http" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token request-line" }, [
                  createBaseVNode("span", { class: "token method property" }, "POST"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token request-target url" }, "/accounts"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token http-version property" }, "HTTP/1.1")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token header" }, [
                  createBaseVNode("span", { class: "token header-name keyword" }, "Host"),
                  createBaseVNode("span", { class: "token punctuation" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token header-value" }, "game-site.com")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token header" }, [
                  createBaseVNode("span", { class: "token header-name keyword" }, "Content-Type"),
                  createBaseVNode("span", { class: "token punctuation" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token header-value" }, "application/json")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token header" }, [
                  createBaseVNode("span", { class: "token header-name keyword" }, "Accept"),
                  createBaseVNode("span", { class: "token punctuation" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token header-value" }, "text/html")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token application-json" }, [
                  createTextVNode("\n"),
                  createBaseVNode("span", { class: "token punctuation" }, "{"),
                  createBaseVNode("span", { class: "token property" }, '"username"'),
                  createBaseVNode("span", { class: "token operator" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"Alice"'),
                  createBaseVNode("span", { class: "token punctuation" }, ","),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token property" }, '"password"'),
                  createBaseVNode("span", { class: "token operator" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token string" }, '"abc123"'),
                  createBaseVNode("span", { class: "token punctuation" }, "}"),
                  createTextVNode("\n")
                ])
              ])
            ]),
            createBaseVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true"
            }, [
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[77] || (_cache[77] = createBaseVNode(
      "h4",
      {
        id: "request-headers",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#request-headers",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Request Headers")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_FigureNumber),
    _cache[78] || (_cache[78] = createTextVNode(" below describes some of the headers you can use in an HTTP request.")),
    createVNode(_component_Figure, { caption: "Description of some of the HTTP request headers." }, {
      default: withCtx(() => _cache[39] || (_cache[39] = [
        createBaseVNode(
          "table",
          null,
          [
            createBaseVNode("thead", null, [
              createBaseVNode("tr", null, [
                createBaseVNode("th", null, "Name"),
                createBaseVNode("th", null, "Example"),
                createBaseVNode("th", null, "Description")
              ])
            ]),
            createBaseVNode("tbody", null, [
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "Host")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "Host: nintendo.se")
                ]),
                createBaseVNode("td", null, "Identifies the domain the HTTP request is sent to.")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "Accept")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "Accept: text/html")
                ]),
                createBaseVNode("td", null, "Identifies the data format the client wants the resource back in.")
              ]),
              createBaseVNode("tr", null, [
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "Content-Type")
                ]),
                createBaseVNode("td", null, [
                  createBaseVNode("code", null, "Content-Type: application/json")
                ]),
                createBaseVNode("td", null, "Identifies the data format the body of the HTTP request is written in.")
              ])
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[79] || (_cache[79] = createStaticVNode('<h4 id="methods" tabindex="-1"><a class="header-anchor" href="#methods" aria-hidden="true">#</a> Methods</h4><p>There exists a bunch of different HTTP methods, but web developers primarily need to know four of them: <code>GET</code>, <code>POST</code>, <code>PUT</code> and <code>DELETE</code>. These maps well to the commonly used CRUD operations:</p><ul><li>Create: <code>POST</code></li><li>Retrieve: <code>GET</code></li><li>Update: <code>PUT</code></li><li>Delete: <code>Delete</code></li></ul>', 3)),
    createVNode(_component_CodeGroup, null, {
      default: withCtx(() => [
        createVNode(_component_CodeGroupItem, { title: "GET" }, {
          default: withCtx(() => _cache[40] || (_cache[40] = [
            createBaseVNode(
              "p",
              null,
              [
                createTextVNode("A client can send a "),
                createBaseVNode("code", null, "GET"),
                createTextVNode(" request to a server to tell the server to send back the resource identified through the URI in the request. A "),
                createBaseVNode("code", null, "GET"),
                createTextVNode(" requests contains no body since the request is only about fetching a resource from the server, and not sending a resource to the server.")
              ],
              -1
              /* HOISTED */
            ),
            createBaseVNode(
              "div",
              { class: "custom-container tip" },
              [
                createBaseVNode("p", { class: "custom-container-title" }, "Example"),
                createBaseVNode("div", {
                  class: "language-http line-numbers-mode",
                  "data-ext": "http"
                }, [
                  createBaseVNode("pre", { class: "language-http" }, [
                    createBaseVNode("code", null, [
                      createBaseVNode("span", { class: "token request-line" }, [
                        createBaseVNode("span", { class: "token method property" }, "GET"),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token request-target url" }, "/accounts"),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token http-version property" }, "HTTP/1.1")
                      ]),
                      createTextVNode("\n"),
                      createBaseVNode("span", { class: "token header" }, [
                        createBaseVNode("span", { class: "token header-name keyword" }, "Host"),
                        createBaseVNode("span", { class: "token punctuation" }, ":"),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token header-value" }, "game-site.com")
                      ]),
                      createTextVNode("\n"),
                      createBaseVNode("span", { class: "token header" }, [
                        createBaseVNode("span", { class: "token header-name keyword" }, "Accept"),
                        createBaseVNode("span", { class: "token punctuation" }, ":"),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token header-value" }, "text/html")
                      ]),
                      createTextVNode("\n")
                    ])
                  ]),
                  createBaseVNode("div", {
                    class: "line-numbers",
                    "aria-hidden": "true"
                  }, [
                    createBaseVNode("div", { class: "line-number" }),
                    createBaseVNode("div", { class: "line-number" }),
                    createBaseVNode("div", { class: "line-number" })
                  ])
                ])
              ],
              -1
              /* HOISTED */
            )
          ])),
          _: 1
          /* STABLE */
        }),
        _cache[44] || (_cache[44] = createBaseVNode(
          "p",
          null,
          ":::",
          -1
          /* HOISTED */
        )),
        createVNode(_component_CodeGroupItem, { title: "POST" }, {
          default: withCtx(() => _cache[41] || (_cache[41] = [
            createBaseVNode(
              "p",
              null,
              [
                createTextVNode("A client can send a "),
                createBaseVNode("code", null, "POST"),
                createTextVNode(" request to a server to tell the server to create a new resource. The URI in the request should identify what type of resource that should be created, and the body of the request should contain the resource.")
              ],
              -1
              /* HOISTED */
            ),
            createBaseVNode(
              "div",
              { class: "custom-container tip" },
              [
                createBaseVNode("p", { class: "custom-container-title" }, "Example"),
                createBaseVNode("div", {
                  class: "language-http line-numbers-mode",
                  "data-ext": "http"
                }, [
                  createBaseVNode("pre", { class: "language-http" }, [
                    createBaseVNode("code", null, [
                      createBaseVNode("span", { class: "token request-line" }, [
                        createBaseVNode("span", { class: "token method property" }, "POST"),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token request-target url" }, "/contact-messages"),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token http-version property" }, "HTTP/1.1")
                      ]),
                      createTextVNode("\n"),
                      createBaseVNode("span", { class: "token header" }, [
                        createBaseVNode("span", { class: "token header-name keyword" }, "Host"),
                        createBaseVNode("span", { class: "token punctuation" }, ":"),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token header-value" }, "a-store.com")
                      ]),
                      createTextVNode("\n"),
                      createBaseVNode("span", { class: "token header" }, [
                        createBaseVNode("span", { class: "token header-name keyword" }, "Content-Type"),
                        createBaseVNode("span", { class: "token punctuation" }, ":"),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token header-value" }, "application/json")
                      ]),
                      createTextVNode("\n"),
                      createBaseVNode("span", { class: "token application-json" }, [
                        createTextVNode("\n"),
                        createBaseVNode("span", { class: "token punctuation" }, "{"),
                        createBaseVNode("span", { class: "token property" }, '"name"'),
                        createBaseVNode("span", { class: "token operator" }, ":"),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token string" }, '"Alice"'),
                        createBaseVNode("span", { class: "token punctuation" }, ","),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token property" }, '"message"'),
                        createBaseVNode("span", { class: "token operator" }, ":"),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token string" }, `"Hi, I bought a thing from you, and it's not working. Please get back to me with info on how to proceed."`),
                        createBaseVNode("span", { class: "token punctuation" }, ","),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token property" }, '"email"'),
                        createBaseVNode("span", { class: "token operator" }, ":"),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token string" }, '"alice@wonderland.com"'),
                        createBaseVNode("span", { class: "token punctuation" }, "}"),
                        createTextVNode("\n")
                      ])
                    ])
                  ]),
                  createBaseVNode("div", {
                    class: "line-numbers",
                    "aria-hidden": "true"
                  }, [
                    createBaseVNode("div", { class: "line-number" }),
                    createBaseVNode("div", { class: "line-number" }),
                    createBaseVNode("div", { class: "line-number" }),
                    createBaseVNode("div", { class: "line-number" }),
                    createBaseVNode("div", { class: "line-number" })
                  ])
                ])
              ],
              -1
              /* HOISTED */
            )
          ])),
          _: 1
          /* STABLE */
        }),
        _cache[45] || (_cache[45] = createBaseVNode(
          "p",
          null,
          ":::",
          -1
          /* HOISTED */
        )),
        createVNode(_component_CodeGroupItem, { title: "PUT" }, {
          default: withCtx(() => _cache[42] || (_cache[42] = [
            createBaseVNode(
              "p",
              null,
              [
                createTextVNode("A client can send a "),
                createBaseVNode("code", null, "PUT"),
                createTextVNode(" request to a server to tell the server to replace an existing resource on the server with a new one the client sends it. The URI in the request should identify which resource on the server to be replaced, and the body of the request should contain the new resource.")
              ],
              -1
              /* HOISTED */
            ),
            createBaseVNode(
              "div",
              { class: "custom-container tip" },
              [
                createBaseVNode("p", { class: "custom-container-title" }, "Example"),
                createBaseVNode("div", {
                  class: "language-http line-numbers-mode",
                  "data-ext": "http"
                }, [
                  createBaseVNode("pre", { class: "language-http" }, [
                    createBaseVNode("code", null, [
                      createBaseVNode("span", { class: "token request-line" }, [
                        createBaseVNode("span", { class: "token method property" }, "PUT"),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token request-target url" }, "/diary-entries/2020-02-13"),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token http-version property" }, "HTTP/1.1")
                      ]),
                      createTextVNode("\n"),
                      createBaseVNode("span", { class: "token header" }, [
                        createBaseVNode("span", { class: "token header-name keyword" }, "Host"),
                        createBaseVNode("span", { class: "token punctuation" }, ":"),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token header-value" }, "diaries.com")
                      ]),
                      createTextVNode("\n"),
                      createBaseVNode("span", { class: "token header" }, [
                        createBaseVNode("span", { class: "token header-name keyword" }, "Content-Type"),
                        createBaseVNode("span", { class: "token punctuation" }, ":"),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token header-value" }, "application/json")
                      ]),
                      createTextVNode("\n"),
                      createBaseVNode("span", { class: "token application-json" }, [
                        createTextVNode("\n"),
                        createBaseVNode("span", { class: "token punctuation" }, "{"),
                        createBaseVNode("span", { class: "token property" }, '"date"'),
                        createBaseVNode("span", { class: "token operator" }, ":"),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token string" }, '"2020-02-13"'),
                        createBaseVNode("span", { class: "token punctuation" }, ","),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token property" }, '"message"'),
                        createBaseVNode("span", { class: "token operator" }, ":"),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token string" }, '"Today was a wonderful day, Kim proposed to me, and I said yes :D We will live happily ever after now. (update 2020-04-15: Me and Kim are no longer together)."'),
                        createBaseVNode("span", { class: "token punctuation" }, "}"),
                        createTextVNode("\n")
                      ])
                    ])
                  ]),
                  createBaseVNode("div", {
                    class: "line-numbers",
                    "aria-hidden": "true"
                  }, [
                    createBaseVNode("div", { class: "line-number" }),
                    createBaseVNode("div", { class: "line-number" }),
                    createBaseVNode("div", { class: "line-number" }),
                    createBaseVNode("div", { class: "line-number" }),
                    createBaseVNode("div", { class: "line-number" })
                  ])
                ])
              ],
              -1
              /* HOISTED */
            )
          ])),
          _: 1
          /* STABLE */
        }),
        _cache[46] || (_cache[46] = createBaseVNode(
          "p",
          null,
          ":::",
          -1
          /* HOISTED */
        )),
        createVNode(_component_CodeGroupItem, { title: "DELETE" }, {
          default: withCtx(() => _cache[43] || (_cache[43] = [
            createBaseVNode(
              "p",
              null,
              [
                createTextVNode("A client can send a "),
                createBaseVNode("code", null, "DELETE"),
                createTextVNode(" request to a server to tell the server to delete all resources on the server identified through the URI in the request.")
              ],
              -1
              /* HOISTED */
            ),
            createBaseVNode(
              "div",
              { class: "custom-container tip" },
              [
                createBaseVNode("p", { class: "custom-container-title" }, "Example"),
                createBaseVNode("div", {
                  class: "language-http line-numbers-mode",
                  "data-ext": "http"
                }, [
                  createBaseVNode("pre", { class: "language-http" }, [
                    createBaseVNode("code", null, [
                      createBaseVNode("span", { class: "token request-line" }, [
                        createBaseVNode("span", { class: "token method property" }, "DELETE"),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token request-target url" }, "/guestbook-posts/123"),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token http-version property" }, "HTTP/1.1")
                      ]),
                      createTextVNode("\n"),
                      createBaseVNode("span", { class: "token header" }, [
                        createBaseVNode("span", { class: "token header-name keyword" }, "Host"),
                        createBaseVNode("span", { class: "token punctuation" }, ":"),
                        createTextVNode(),
                        createBaseVNode("span", { class: "token header-value" }, "football-lovers.com")
                      ]),
                      createTextVNode("\n")
                    ])
                  ]),
                  createBaseVNode("div", {
                    class: "line-numbers",
                    "aria-hidden": "true"
                  }, [
                    createBaseVNode("div", { class: "line-number" }),
                    createBaseVNode("div", { class: "line-number" })
                  ])
                ])
              ],
              -1
              /* HOISTED */
            )
          ])),
          _: 1
          /* STABLE */
        }),
        _cache[47] || (_cache[47] = createBaseVNode(
          "p",
          null,
          ":::",
          -1
          /* HOISTED */
        ))
      ]),
      _: 1
      /* STABLE */
    }),
    _cache[80] || (_cache[80] = createStaticVNode('<div class="custom-container warning"><p class="custom-container-title">PUT and DELETE not in HTML</p><p>In the language used to build web pages, HTML, it&#39;s only possible to send <code>GET</code> and <code>POST</code> requests. Therefore, web developers rarely use <code>PUT</code> and <code>DELETE</code> requests. On websites, <code>PUT</code> and <code>DELETE</code> requests are often implemented as <code>POST</code> requests, and the URI is used to indicate if it should be a create, update or a delete operation.</p></div><h2 id="responses" tabindex="-1"><a class="header-anchor" href="#responses" aria-hidden="true">#</a> Responses</h2>', 2)),
    createBaseVNode("p", null, [
      _cache[48] || (_cache[48] = createTextVNode("When a server receives an HTTP request, it should look at the request (i.e. the method and the URI) to figure out what the request is about, then carry out the request and then send back an HTTP response. The structure of an HTTP response is shown in ")),
      createVNode(_component_FigureNumber),
      _cache[49] || (_cache[49] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "The structure of an HTTP response." }, {
      default: withCtx(() => _cache[50] || (_cache[50] = [
        createBaseVNode(
          "div",
          {
            class: "language-http line-numbers-mode",
            "data-ext": "http"
          },
          [
            createBaseVNode("pre", { class: "language-http" }, [
              createBaseVNode("code", null, [
                createTextVNode("VERSION STATUS_CODE REASON_PHRASE\n"),
                createBaseVNode("span", { class: "token header" }, [
                  createBaseVNode("span", { class: "token header-name keyword" }, "HEADER1"),
                  createBaseVNode("span", { class: "token punctuation" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token header-value" }, "VALUE1")
                ]),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token header" }, [
                  createBaseVNode("span", { class: "token header-name keyword" }, "HEADER2"),
                  createBaseVNode("span", { class: "token punctuation" }, ":"),
                  createTextVNode(),
                  createBaseVNode("span", { class: "token header-value" }, "VALUE2")
                ]),
                createTextVNode("\n...\n\nBODY\n")
              ])
            ]),
            createBaseVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true"
            }, [
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" })
            ])
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[81] || (_cache[81] = createStaticVNode('<p>The first line in the HTTP response is called <em>the status line</em>. It first contains the HTTP version the server is using (<code>VERSION</code>), and then a <code>STATUS_CODE</code> (a three digit number) indicating how the server handled the request (e.g. did it carry out the request? Or why didn&#39;t carry it out?), and then a <code>REASON_PHRASE</code>, which just is a very short human readable text for what the status code mean. For programmers using HTTP, it&#39;s primarily the status code that&#39;s interesting to look at.</p><p>Just as HTTP requests, HTTP responses can contain headers and a body too.</p><div class="custom-container warning"><p class="custom-container-title">Request Headers != Response Headers</p><p>Although HTTP requests and HTTP responses both contain headers, which headers they can contain depends on if it&#39;s a request or a response. For example, the <code>Accept</code> header can only be used in HTTP requests, and the <code>Content-Type</code> header can be used in both HTTP requests and HTTP responses.</p></div><h3 id="status-codes" tabindex="-1"><a class="header-anchor" href="#status-codes" aria-hidden="true">#</a> Status codes</h3><p>The three digit status code can either start with the digit <code>1</code>, <code>2</code>, <code>3</code>, <code>4</code> or <code>5</code>. Which digit it is hints about how the server handled the request.</p>', 5)),
    createVNode(_component_CodeGroup, null, {
      default: withCtx(() => [
        createVNode(_component_CodeGroupItem, { title: "1XX" }, {
          default: withCtx(() => _cache[51] || (_cache[51] = [
            createBaseVNode(
              "p",
              null,
              [
                createTextVNode("The "),
                createBaseVNode("code", null, "1XX"),
                createTextVNode(" status codes indicate an "),
                createBaseVNode("em", null, "informational"),
                createTextVNode(" response. These aren't that important to know for programmers using HTTP.")
              ],
              -1
              /* HOISTED */
            )
          ])),
          _: 1
          /* STABLE */
        }),
        createVNode(_component_CodeGroupItem, { title: "2XX" }, {
          default: withCtx(() => _cache[52] || (_cache[52] = [
            createBaseVNode(
              "p",
              null,
              [
                createTextVNode("The "),
                createBaseVNode("code", null, "2XX"),
                createTextVNode(" status codes indicate that the server successfully carried out the HTTP request. The most commonly used ones are (reason phrase shown after the status code):")
              ],
              -1
              /* HOISTED */
            ),
            createBaseVNode(
              "ul",
              null,
              [
                createBaseVNode("li", null, [
                  createBaseVNode("code", null, "200"),
                  createTextVNode(" OK"),
                  createBaseVNode("br"),
                  createTextVNode(" The server carried out the request and sends back a resource in the body of the response.")
                ]),
                createBaseVNode("li", null, [
                  createBaseVNode("code", null, "201"),
                  createTextVNode(" Created"),
                  createBaseVNode("br"),
                  createTextVNode(" The server carried out the request and a new resource was created while carrying out the request. The "),
                  createBaseVNode("code", null, "Location"),
                  createTextVNode(" header in the HTTP response contains the URI for the newly created resource.")
                ]),
                createBaseVNode("li", null, [
                  createBaseVNode("code", null, "204"),
                  createTextVNode(" No Content"),
                  createBaseVNode("br"),
                  createTextVNode(" The server carried out the request, but the response contains no body.")
                ])
              ],
              -1
              /* HOISTED */
            )
          ])),
          _: 1
          /* STABLE */
        }),
        createVNode(_component_CodeGroupItem, { title: "3XX" }, {
          default: withCtx(() => _cache[53] || (_cache[53] = [
            createBaseVNode(
              "p",
              null,
              [
                createTextVNode("The "),
                createBaseVNode("code", null, "3XX"),
                createTextVNode(" status codes indicate that the server encourages the client to send a new HTTP request using another URI (i.e. redirecting the client).")
              ],
              -1
              /* HOISTED */
            ),
            createBaseVNode(
              "ul",
              null,
              [
                createBaseVNode("li", null, [
                  createBaseVNode("code", null, "302"),
                  createTextVNode(" Found"),
                  createBaseVNode("br"),
                  createTextVNode(" The server encourages the client to send the same HTTP request again but with the URI specified in the "),
                  createBaseVNode("code", null, "Location"),
                  createTextVNode(" response header instead. This is useful if you change URIs on a website. For example, first maybe "),
                  createBaseVNode("code", null, "/about-us"),
                  createTextVNode(" was used to identify the about page on the website, and then you changed that to just "),
                  createBaseVNode("code", null, "/about"),
                  createTextVNode(". Then when a client sends a "),
                  createBaseVNode("code", null, "GET"),
                  createTextVNode(" request to "),
                  createBaseVNode("code", null, "/about-us"),
                  createTextVNode(" you can send back a "),
                  createBaseVNode("code", null, "302"),
                  createTextVNode(" response with the header "),
                  createBaseVNode("code", null, "Location: /about"),
                  createTextVNode(" to indicate that the URI for the page has changed to "),
                  createBaseVNode("code", null, "/about"),
                  createTextVNode(".")
                ])
              ],
              -1
              /* HOISTED */
            )
          ])),
          _: 1
          /* STABLE */
        }),
        createVNode(_component_CodeGroupItem, { title: "4XX" }, {
          default: withCtx(() => _cache[54] || (_cache[54] = [
            createBaseVNode(
              "p",
              null,
              [
                createTextVNode("The "),
                createBaseVNode("code", null, "4XX"),
                createTextVNode(" status codes indicate that the server didn't carry out the request because the client has done something wrong with the request. The client needs to fix the problem and try again.")
              ],
              -1
              /* HOISTED */
            ),
            createBaseVNode(
              "ul",
              null,
              [
                createBaseVNode("li", null, [
                  createBaseVNode("code", null, "400"),
                  createTextVNode(" Bad Request"),
                  createBaseVNode("br"),
                  createTextVNode(" The server didn't carry out the request because something is wrong with it. The body of the response can contain additional information about what's wrong. Better to use another "),
                  createBaseVNode("code", null, "4XX"),
                  createTextVNode(" status code if a more specific that describes the problem exists.")
                ]),
                createBaseVNode("li", null, [
                  createBaseVNode("code", null, "401"),
                  createTextVNode(" Unauthorized"),
                  createBaseVNode("br"),
                  createTextVNode(" The server didn't carry out the request because the client is not authorized to request it (the client might for example need to login first).")
                ]),
                createBaseVNode("li", null, [
                  createBaseVNode("code", null, "404"),
                  createTextVNode(" Not Found"),
                  createBaseVNode("br"),
                  createTextVNode(" The server didn't carry out the request because the URI in the request doesn't identify a resource that exists.")
                ])
              ],
              -1
              /* HOISTED */
            )
          ])),
          _: 1
          /* STABLE */
        }),
        createVNode(_component_CodeGroupItem, { title: "5XX" }, {
          default: withCtx(() => _cache[55] || (_cache[55] = [
            createBaseVNode(
              "p",
              null,
              [
                createTextVNode("The "),
                createBaseVNode("code", null, "5XX"),
                createTextVNode(" status codes indicates that the server couldn't carry out the request because something is wrong on the server-side. Maybe the server crashed, or maybe the server needs an external resource (e.g. a database) to carry out the request, and it doesn't have access to it the moment, etc.")
              ],
              -1
              /* HOISTED */
            ),
            createBaseVNode(
              "ul",
              null,
              [
                createBaseVNode("li", null, [
                  createBaseVNode("code", null, "500 "),
                  createTextVNode(" Internal Server Error"),
                  createBaseVNode("br"),
                  createTextVNode(" The server couldn't carry out the request.")
                ])
              ],
              -1
              /* HOISTED */
            )
          ])),
          _: 1
          /* STABLE */
        })
      ]),
      _: 1
      /* STABLE */
    }),
    _cache[82] || (_cache[82] = createBaseVNode(
      "h2",
      {
        id: "world-wide-web",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#world-wide-web",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" World Wide Web")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("div", _hoisted_8, [
      _cache[61] || (_cache[61] = createBaseVNode(
        "p",
        { class: "custom-container-title" },
        "Terminology",
        -1
        /* HOISTED */
      )),
      _cache[62] || (_cache[62] = createBaseVNode(
        "p",
        null,
        [
          createTextVNode("A "),
          createBaseVNode("em", null, "web application"),
          createTextVNode(" is the application running on the server that receives HTTP requests and sends back HTTP responses.")
        ],
        -1
        /* HOISTED */
      )),
      _cache[63] || (_cache[63] = createBaseVNode(
        "p",
        null,
        [
          createTextVNode("A "),
          createBaseVNode("em", null, "webpage"),
          createTextVNode(" is a single page you can view in your web browser. Each HTTP response usually contains a single webpage.")
        ],
        -1
        /* HOISTED */
      )),
      createBaseVNode("p", null, [
        _cache[57] || (_cache[57] = createTextVNode("A ")),
        _cache[58] || (_cache[58] = createBaseVNode(
          "em",
          null,
          "website",
          -1
          /* HOISTED */
        )),
        _cache[59] || (_cache[59] = createTextVNode(" is the collection of all webpages on one and the same server (i.e. all webpages on the same domain, for example all webpages at ")),
        createBaseVNode("a", _hoisted_9, [
          _cache[56] || (_cache[56] = createTextVNode("ju.se")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[60] || (_cache[60] = createTextVNode(")."))
      ])
    ]),
    createBaseVNode("p", null, [
      _cache[64] || (_cache[64] = createTextVNode("So, why is it called ")),
      _cache[65] || (_cache[65] = createBaseVNode(
        "em",
        null,
        "the world wide web",
        -1
        /* HOISTED */
      )),
      _cache[66] || (_cache[66] = createTextVNode("? Webpages can contain links to other webpages, and if you try to visualize this structure, you end up with something looking like a web, as shown in ")),
      createVNode(_component_FigureNumber),
      _cache[67] || (_cache[67] = createTextVNode(" below (some imagination required!)."))
    ]),
    createVNode(_component_Figure, { caption: "A visualization of some webpages and where their links lead." }, {
      default: withCtx(() => [
        createVNode(_component_RenderMermaid, { "graph-definition": "\ngraph TD\n  a[Webpage A]\n  b[Webpage B]\n  c[Webpage C]\n  d[Webpage D]\n  e[Webpage E]\n  f[Webpage F]\n  g[Webpage G]\n  a-->b\n  c-->b\n  c-->a\n  c-->d\n  d-->a\n  d-->b\n  e-->b\n  e-->c\n  f-->c\n  f-->d\n  f-->a\n  b-->f\n  g-->b\n  g-->f\n  g-->e\n  d-->g\n  c-->g\n" })
      ]),
      _: 1
      /* STABLE */
    })
  ]);
}
const index_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "index.html.vue"]]);
export {
  index_html as default
};
