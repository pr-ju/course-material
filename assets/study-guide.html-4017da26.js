import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx, f as createStaticVNode } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://ju.instructure.com/courses/6797/groups",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_2 = {
  href: "https://launchschool.com/books/working_with_apis",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = {
  href: "https://pages.apigee.com/rs/apigee/images/api-design-ebook-2012-03.pdf",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_StudyGuideInfo = resolveComponent("StudyGuideInfo");
  const _component_Teacher = resolveComponent("Teacher");
  const _component_FigureNumber = resolveComponent("FigureNumber");
  const _component_RenderMermaid = resolveComponent("RenderMermaid");
  const _component_Figure = resolveComponent("Figure");
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_ILOsActivitiesMapping = resolveComponent("ILOsActivitiesMapping");
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  const _component_AcademicYearFigure = resolveComponent("AcademicYearFigure");
  return openBlock(), createElementBlock("div", null, [
    _cache[25] || (_cache[25] = createBaseVNode(
      "h1",
      {
        id: "study-guide",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#study-guide",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Study Guide")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_StudyGuideInfo, {
      "course-name": "Client-Server Communication",
      "ladok-code": "TSPK18",
      credits: "7.5",
      year: "2022",
      "course-coordinator": "Peter Larsson-Green",
      examiner: "Peter Larsson-Green",
      canvasCourseId: "6797"
    }),
    _cache[26] || (_cache[26] = createBaseVNode(
      "h2",
      {
        id: "teachers",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#teachers",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Teachers")
      ],
      -1
      /* HOISTED */
    )),
    _cache[27] || (_cache[27] = createBaseVNode(
      "h3",
      {
        id: "peter-larsson-green",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#peter-larsson-green",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Peter Larsson-Green")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_Teacher, {
      name: "Peter Larsson-Green",
      photo: "peter-larsson-green.jpeg",
      roles: ["Examiner", "course coordinator", "lecturer", "lab assistant"],
      description: "Has studied and followed the development of the web since 2004 and received his Master of Science in Computer Science at Linköping University in 2014. He has been working as programming teacher (part time) since 2010 at both Linköping University and Jönköping University.",
      email: "Peter.Larsson-Green@ju.se",
      phone: "036 - 10 17 35",
      website: "https://ju.se/en/personinfo.html?sign=LarPet"
    }),
    _cache[28] || (_cache[28] = createBaseVNode(
      "h3",
      {
        id: "jerome-landre",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#jerome-landre",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Jérôme Landré")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_Teacher, {
      name: "Jérôme Landré",
      photo: "jerome-landre.jpeg",
      roles: ["Lab assistant"],
      description: "Assistant Professor.",
      email: "jerome.landre@ju.se",
      phone: "",
      website: "https://ju.se/en/personinfo.html?sign=LanJer"
    }),
    _cache[29] || (_cache[29] = createBaseVNode(
      "h2",
      {
        id: "introduction",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#introduction",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Introduction")
      ],
      -1
      /* HOISTED */
    )),
    _cache[30] || (_cache[30] = createBaseVNode(
      "p",
      null,
      'In this course you will learn in more detail how the communication between clients and servers on the web works, i.e. learn the HTTP protocol. This will then be used to create a "web application" not only web browsers can communicate with, but any type of application connected to the Internet can communicate with using a REST API. This is convenient for smartphone applications and similar when they need to be able to store data from the users in the cloud instead of locally on the smartphone device.',
      -1
      /* HOISTED */
    )),
    createVNode(_component_FigureNumber),
    _cache[31] || (_cache[31] = createTextVNode(" below displays an overview of how it can work. ")),
    createVNode(_component_Figure, { caption: "Common web application architecture." }, {
      default: withCtx(() => [
        createVNode(_component_RenderMermaid, { "graph-definition": "\ngraph LR\n	users[Users]\n	subgraph Users' smartphone\n		webBrowser[Android App]\n	end\n	subgraph Web Server\n	webApp[Web Application]\n	end\n	subgraph Database Server\n		db[Database]\n	end\n	users -- Use --> webBrowser\n	webBrowser -- HTTP/REST API --> webApp\n	webApp -- SQL --> db\n" })
      ]),
      _: 1
      /* STABLE */
    }),
    createBaseVNode("p", null, [
      _cache[0] || (_cache[0] = createTextVNode("At course start you are expected to possess knowledge corresponding to the pre-requisite courses shown in ")),
      createVNode(_component_FigureNumber),
      _cache[1] || (_cache[1] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "Prerequisites for this course." }, {
      default: withCtx(() => [
        createVNode(_component_RenderMermaid, { "graph-definition": "\ngraph TD\n	wuid[Web and User Interface Design 7.5 Credits]\n	gdvc[Graphic Design and Visual Communication 15 Credits]\n	csp[Client-side Programming 15 Credits]\n	csc[Client-Server Communication 7.5 Credits]\n	wuid --> csp\n	gdvc --> csp\n	csp --> csc\n" })
      ]),
      _: 1
      /* STABLE */
    }),
    _cache[32] || (_cache[32] = createBaseVNode(
      "h2",
      {
        id: "intended-learning-outcomes",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#intended-learning-outcomes",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Intended Learning Outcomes")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[3] || (_cache[3] = createTextVNode("The intended learning outcomes of the course are found in the ")),
      createVNode(_component_RouterLink, { to: "/courses/client-server-communication/course-syllabus/" }, {
        default: withCtx(() => _cache[2] || (_cache[2] = [
          createTextVNode("Course Syllabus")
        ])),
        _: 1
        /* STABLE */
      }),
      _cache[4] || (_cache[4] = createTextVNode(". Below is a table showing how the examination tests cover the intended learning outcomes and which teaching activity help you learn which intended learning outcome."))
    ]),
    createVNode(_component_ILOsActivitiesMapping, { description: "\nDisplay knowledge of the HTTP protocol\n-Laboratory work\n-Project work\n-Written examination\n+Recorded lecture: Internet\n+Recorded lecture: Web Applications & HTTP\n---\nDisplay knowledge of the REST architectural style\n-Laboratory work\n-Project work\n-Written examination\n+Recorded lecture: REST API Basics\n---\nDemonstrate comprehension of architectures consisting of multiple systems communicating through APIs\n-Laboratory work\n-Project work\n-Written examination\n+Recorded lecture: REST API Basics\n---\nDemonstrate the ability to design and document user-friendly APIs\n-Project work\n-Written examination\n+Recorded lecture: REST Basics\n+Recorded lecture: REST API in Express\n---\nDemonstrate skills of implementing APIs\n-Project work\n-Written examination\n+Recorded lecture: Node.js\n+Recorded lecture: Introduction to Express\n+Recorded lecture: REST API in Express\n+Recorded lecture: SQLite in Node.js\n+Recorded lecture: JWT\n---\nDemonstrate skills of consuming APIs\n-Project work\n-Written examination\n+Recorded lecture: SPA Requests\n+Recorded lecture: SOP & CORS\n+Recorded lecture: JWT\n---\nDemonstrate skills of implementing SDKs for APIs\n-Project work\n-Written examination\n+Recorded lecture: SPA Requests\n+Recorded lecture: SOP & CORS\n+Recorded lecture: JWT\n---\nDemonstrate skills of implementing SPAs using front-end frameworks\n-Laboratory work\n-Project work\n-Written examination\n+Recorded lecture: Vue\n" }),
    _cache[33] || (_cache[33] = createStaticVNode('<h2 id="learning-activities" tabindex="-1"><a class="header-anchor" href="#learning-activities" aria-hidden="true">#</a> Learning Activities</h2><p>Here are short introduction to the learning activities offered in the course.</p><h3 id="recorded-lectures" tabindex="-1"><a class="header-anchor" href="#recorded-lectures" aria-hidden="true">#</a> Recorded Lectures</h3><p>In the beginning of most weeks you will be encouraged to view some recorded lectures. These will be quite theoretical and will teach new you things you can use when building a platform.</p><h3 id="tutorials" tabindex="-1"><a class="header-anchor" href="#tutorials" aria-hidden="true">#</a> Tutorials</h3><p>Most weeks there will be a tutorial session where the teacher will show you how to use what has been taught in the recorded lectures in practice.</p><h3 id="lab-sessions" tabindex="-1"><a class="header-anchor" href="#lab-sessions" aria-hidden="true">#</a> Lab Sessions</h3><p>Each week you may attend a 4 hours long lab session. At the lab session you may ask the teacher there for help with your lab and project work.</p>', 8)),
    createBaseVNode("p", null, [
      _cache[6] || (_cache[6] = createTextVNode("There are 2 different lab sessions each week, but you may only sign up for one of them. To distribute you, join one of ")),
      createBaseVNode("a", _hoisted_1, [
        _cache[5] || (_cache[5] = createTextVNode("the Lab Groups on Canvas")),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _cache[7] || (_cache[7] = createTextVNode(". First come, first served."))
    ]),
    _cache[34] || (_cache[34] = createStaticVNode('<div class="custom-container tip"><p class="custom-container-title">Attending more lab sessions</p><p>You may attend the other lab session if there is room for it, but the teacher there must of course prioritize helping the students that have signed up for that lab session.</p></div><h2 id="examination-tests" tabindex="-1"><a class="header-anchor" href="#examination-tests" aria-hidden="true">#</a> Examination Tests</h2><p>The course contains two examination tests.</p><h3 id="_1-laboratory-work" tabindex="-1"><a class="header-anchor" href="#_1-laboratory-work" aria-hidden="true">#</a> 1. Laboratory Work</h3>', 4)),
    createBaseVNode("p", null, [
      _cache[9] || (_cache[9] = createTextVNode("1 credit, graded fail/pass. More information is available on the ")),
      createVNode(_component_RouterLink, { to: "/courses/client-server-communication/laboratory-work/" }, {
        default: withCtx(() => _cache[8] || (_cache[8] = [
          createTextVNode("Laboratory Work")
        ])),
        _: 1
        /* STABLE */
      }),
      _cache[10] || (_cache[10] = createTextVNode(" page."))
    ]),
    _cache[35] || (_cache[35] = createBaseVNode(
      "h3",
      {
        id: "_2-project-work",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#_2-project-work",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" 2. Project Work")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[12] || (_cache[12] = createTextVNode("4.5 credits, graded U, 3, 4 and 5. More information is available on the ")),
      createVNode(_component_RouterLink, { to: "/courses/client-server-communication/project-work/" }, {
        default: withCtx(() => _cache[11] || (_cache[11] = [
          createTextVNode("Project Work")
        ])),
        _: 1
        /* STABLE */
      }),
      _cache[13] || (_cache[13] = createTextVNode(" page."))
    ]),
    _cache[36] || (_cache[36] = createBaseVNode(
      "h3",
      {
        id: "_3-written-examination",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#_3-written-examination",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" 3. Written Examination")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[15] || (_cache[15] = createTextVNode("2 credits, graded U, 3, 4, and 5. More information is available on the ")),
      createVNode(_component_RouterLink, { to: "/courses/client-server-communication/written-examination/" }, {
        default: withCtx(() => _cache[14] || (_cache[14] = [
          createTextVNode("Written Examination")
        ])),
        _: 1
        /* STABLE */
      }),
      _cache[16] || (_cache[16] = createTextVNode(" page."))
    ]),
    _cache[37] || (_cache[37] = createStaticVNode('<h3 id="final-grade" tabindex="-1"><a class="header-anchor" href="#final-grade" aria-hidden="true">#</a> Final Grade</h3><p>To receive a final grade on the course you need to pass all examination tests (<code>Laboratory Work</code>, <code>Project Work</code> and <code>Written Examination</code>). The final grade will be based on the lowest grade of the <code>Project Work</code> and <code>Written Examination</code> , but these grades will also be marked as <code>weak</code> or <code>strong</code>. If one of the grades is lower than the other and has been marked as <code>strong</code>, the final grade will be the lower grade + 1. Examples:</p><ul><li>A <code>strong 3</code> and a <code>weak 4</code> gives you <code>4</code> as the final grade</li><li>A <code>weak 3</code> and a <code>strong 5</code> gives you <code>3</code> as the final grade</li></ul><p>For <code>Written Examination</code>, 50% of max score is a strong 3, and 70% of max score is a strong 4.</p><h3 id="re-examination" tabindex="-1"><a class="header-anchor" href="#re-examination" aria-hidden="true">#</a> Re-examination</h3>', 5)),
    createVNode(_component_FigureNumber),
    _cache[38] || (_cache[38] = createTextVNode(" below shows the study and exam periods during a year. The small blue circle sectors shows when the (re-)examinations are offered in this course.")),
    createVNode(_component_AcademicYearFigure),
    _cache[39] || (_cache[39] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("Re-examination for all examination tests will be offered at the re-exam periods in January and August. To learn precise dates before they have been announced, email the course coordinator at "),
        createBaseVNode("code", null, "peter.larsson-green@ju.se"),
        createTextVNode(". The project work will only be graded U/3 at re-examination.")
      ],
      -1
      /* HOISTED */
    )),
    _cache[40] || (_cache[40] = createBaseVNode(
      "div",
      { class: "custom-container danger" },
      [
        createBaseVNode("p", { class: "custom-container-title" }, "Last time the course run!"),
        createBaseVNode("p", null, [
          createTextVNode("This course is this year running for the last time. Therefor, you will have 2 more re-examination opportunities in addition to the ones described above. More information about these will be announced later. To learn more, email the course coordinator at "),
          createBaseVNode("code", null, "peter.larsson-green@ju.se"),
          createTextVNode(".")
        ]),
        createBaseVNode("p", null, "If you haven't passed the course after the ordinary examination opportunity + the 4 re-examination opportunities, you can't pass the course. If this happen to you, contact your student councilor or program manager to learn your alternatives.")
      ],
      -1
      /* HOISTED */
    )),
    _cache[41] || (_cache[41] = createBaseVNode(
      "h2",
      {
        id: "course-literature-and-other-teaching-aids",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#course-literature-and-other-teaching-aids",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Course Literature and Other Teaching Aids")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("ul", null, [
      _cache[21] || (_cache[21] = createBaseVNode(
        "li",
        null,
        [
          createBaseVNode("em", null, "Express in Action: Writing, building, and testing Node.js applications"),
          createTextVNode(" by "),
          createBaseVNode("em", null, "Evan M. Hahn")
        ],
        -1
        /* HOISTED */
      )),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_2, [
          _cache[17] || (_cache[17] = createTextVNode("Working with Web APIs")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[18] || (_cache[18] = createTextVNode(" by ")),
        _cache[19] || (_cache[19] = createBaseVNode(
          "em",
          null,
          "Launch School",
          -1
          /* HOISTED */
        ))
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_3, [
          _cache[20] || (_cache[20] = createTextVNode("Web API Design: Crafting Interfaces that Developers Love")),
          createVNode(_component_ExternalLinkIcon)
        ])
      ])
    ]),
    _cache[42] || (_cache[42] = createBaseVNode(
      "h2",
      {
        id: "time-plan",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#time-plan",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Time Plan")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[23] || (_cache[23] = createTextVNode("A time plan is available on the page ")),
      createVNode(_component_RouterLink, { to: "/courses/client-server-communication/time-plan/" }, {
        default: withCtx(() => _cache[22] || (_cache[22] = [
          createTextVNode("Time Plan")
        ])),
        _: 1
        /* STABLE */
      }),
      _cache[24] || (_cache[24] = createTextVNode("."))
    ])
  ]);
}
const studyGuide_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "study-guide.html.vue"]]);
export {
  studyGuide_html as default
};
