import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx, f as createStaticVNode } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://ju.instructure.com/courses/6820/groups",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_2 = {
  href: "https://eloquentjavascript.net/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = {
  href: "https://12factor.net/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_4 = {
  href: "https://pages.apigee.com/rs/apigee/images/api-design-ebook-2012-03.pdf",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_StudyGuideInfo = resolveComponent("StudyGuideInfo");
  const _component_FigureNumber = resolveComponent("FigureNumber");
  const _component_RenderMermaid = resolveComponent("RenderMermaid");
  const _component_Figure = resolveComponent("Figure");
  const _component_Teacher = resolveComponent("Teacher");
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_ILOsActivitiesMapping = resolveComponent("ILOsActivitiesMapping");
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  const _component_AcademicYearFigure = resolveComponent("AcademicYearFigure");
  return openBlock(), createElementBlock("div", null, [
    _cache[47] || (_cache[47] = createBaseVNode(
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
      "course-name": "Web Development - Advanced Concepts",
      "ladok-code": "TFWN19",
      credits: "7.5",
      year: "2023",
      "course-coordinator": "Peter Larsson-Green",
      examiner: "Jérôme Landré",
      "canvas-course-id": "6820"
    }),
    _cache[48] || (_cache[48] = createBaseVNode(
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
    _cache[49] || (_cache[49] = createBaseVNode(
      "p",
      null,
      "Building a good web application is not as easy as it used to be. When we first got the web, all the webpages on a website were simply static HTML files. Everything the web application needed to do was to wait for an HTTP request from a web browser and then send back the requested HTML file in an HTTP response.",
      -1
      /* HOISTED */
    )),
    _cache[50] || (_cache[50] = createBaseVNode(
      "p",
      null,
      "Then websites got more dynamic. Users could create accounts on the websites and create their own resources (blog posts, messages, articles, etc.) other users then could fetch and display in their web browsers. We needed to start worrying about sessions, authentication, authorization and security in general, and the code we wrote got bigger, more complex and harder to maintain. Implementing a web application was no longer straight forward.",
      -1
      /* HOISTED */
    )),
    _cache[51] || (_cache[51] = createBaseVNode(
      "p",
      null,
      "Then some websites got so popular that running them on a single computer was not enough; web browsers sent more HTTP requests to the web application than the web application had time to handle. We needed to start worrying about the performance of our web application; how good it could scale, how fast it could send back an HTTP response, etc. Web applications now needed to be built with an architecture in mind.",
      -1
      /* HOISTED */
    )),
    _cache[52] || (_cache[52] = createBaseVNode(
      "p",
      null,
      "Then we got Android and iOS devices, and users wanted to be able to use smartphone apps to access the content on our websites instead of using web browsers. But apps don't render HTML code, only web browsers do that. The apps needed a way to just fetch the data from our web applications, so we added Application Programming Interfaces (APIs) to our web applications.",
      -1
      /* HOISTED */
    )),
    _cache[53] || (_cache[53] = createBaseVNode(
      "p",
      null,
      "Today, good web applications are no longer straight forward to implement, but in this course you will learn and get hands-on experience of implementing your own scalable and good web application.",
      -1
      /* HOISTED */
    )),
    _cache[54] || (_cache[54] = createBaseVNode(
      "h2",
      {
        id: "pre-requisites",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#pre-requisites",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Pre-requisites")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[0] || (_cache[0] = createTextVNode("At course start you are expected to already possess knowledge corresponding to the pre-requisite courses shown in ")),
      createVNode(_component_FigureNumber),
      _cache[1] || (_cache[1] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "Prerequisites for this course." }, {
      default: withCtx(() => [
        createVNode(_component_RenderMermaid, { "graph-definition": "\ngraph TD\n	introComp[Introduction to Computing 7.5 Credits]\n	introProg[Introduction to Programming 9 Credits]\n	db[Databases 6 Credits]\n	discMath[Discrete Mathematics 6 Credits]\n	dalg[Data Structures and Algorithms 7.5 Credits]\n	oop[Object-oriented Programming 7.5 Credits]\n	webDevFund[Web Development Fundamentals 7.5 Credits]\n	netProg[Network Programming 7.5 Credits]\n	wdac[Web Development Advanced Concepts 7.5 Credits]\n	introComp --> introProg\n	introProg --> db\n	db --> webDevFund\n	introProg --> dalg\n	discMath --> dalg\n	dalg --> oop\n	oop --> webDevFund\n	oop --> netProg\n	webDevFund --> wdac\n	netProg --> wdac\n" })
      ]),
      _: 1
      /* STABLE */
    }),
    _cache[55] || (_cache[55] = createBaseVNode(
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
    _cache[56] || (_cache[56] = createBaseVNode(
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
      roles: ["Course coordinator", "lecturer", "lab assistant"],
      description: "Has studied and followed the development of the web since 2004 and received his Master of Science in Computer Science at Linköping University in 2014. He has been working as programming teacher (part time) since 2010 at both Linköping University and Jönköping University.",
      email: "Peter.Larsson-Green@ju.se",
      phone: "036 - 10 17 35",
      website: "https://ju.se/en/personinfo.html?sign=LarPet"
    }),
    _cache[57] || (_cache[57] = createBaseVNode(
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
      roles: ["Examiner, lab assistant"],
      description: "Assistant Professor.",
      email: "jerome.landre@ju.se",
      phone: "",
      website: "https://ju.se/en/personinfo.html?sign=LanJer"
    }),
    _cache[58] || (_cache[58] = createBaseVNode(
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
      createVNode(_component_RouterLink, { to: "/courses/web-development-advanced-concepts/course-syllabus/" }, {
        default: withCtx(() => _cache[2] || (_cache[2] = [
          createTextVNode("Course Syllabus")
        ])),
        _: 1
        /* STABLE */
      }),
      _cache[4] || (_cache[4] = createTextVNode(". Below is a table showing how the examination tests cover the intended learning outcomes and which teaching activity helping you learn which intended learning outcome."))
    ]),
    createVNode(_component_ILOsActivitiesMapping, { description: "\nDisplay knowledge of the need for, and the use of, Content Delivery Networks\n-Written Examination\n+Lecture: Content Delivery Networks\n---\nDisplay knowledge of the challenges inherent in and technologies used for the construction of scalable web applications (NOSQL databases, horizontal scaling with session management, data partitioning and sharding, etc.)\n-Written Examination\n+Lecture: Scaling Web Applications\n+Lecture: Scaling Databases\n+Tutorial\n---\nDisplay the ability to use JavaScript to manipulate a web page's Document Object Model\n-Laboratory Work\n-Written Examination\n+Lecture: Client-side JavaScript\n+Lecture: Document Object Model\n+Tutorial\n---\nDisplay the ability to program against commonly used JavaScript libraries\n-Project Work\n+Various npm packages introduced in the course\n---\nDisplay the ability to construct web pages that interact with other web systems using REST/JSON, OAuth, etc.\n-Project Work\n-Written Examination\n+Lecture: REST API Basics\n+Lecture: REST API in Express\n+Lecture: REST API Authorization\n+Lecture: JSON Web Tokens\n+Lecture: Third-Party Authentication\n+Lecture: AJAX\n+Lecture: Same-Origin Policy & Cross-Origin Resource Sharing\n+Tutorial\n---\nDisplay the ability to use advanced web client APIs such as web storage, web workers, web components, WebAssembly, etc.\n-Project Work\n+Lecture: AJAX\n+Tutorial\n---\nDisplay the ability to configure and use containers for development, testing, and deployment environments\n-Project Work\n-Written Examination\n+Lecture: Docker Basics\n+Tutorial\n---\nDemonstrate the ability to evaluate the security of web applications\n-Project Work\n-Written Examination\n+Lecture: REST API Authorization\n+Lecture: JSON Web Tokens\n+Lecture: Same-origin Policy & Cross-origin Resource Sharing\n" }),
    _cache[59] || (_cache[59] = createStaticVNode('<h2 id="learning-activities" tabindex="-1"><a class="header-anchor" href="#learning-activities" aria-hidden="true">#</a> Learning Activities</h2><p>Here are short introduction to the learning activities offered in the course.</p><h3 id="recorded-lectures" tabindex="-1"><a class="header-anchor" href="#recorded-lectures" aria-hidden="true">#</a> Recorded Lectures</h3><p>In the beginning of some weeks you will be encouraged to view some pre-recorded lectures (or read some text). These will be quite theoretical and will teach you new things you can use when building a website.</p><h3 id="tutorials" tabindex="-1"><a class="header-anchor" href="#tutorials" aria-hidden="true">#</a> Tutorials</h3><p>Some weeks there will be a tutorial session where the teacher will show you how to use what has been taught in the pre-recorded lectures in practice.</p><h3 id="lab-sessions" tabindex="-1"><a class="header-anchor" href="#lab-sessions" aria-hidden="true">#</a> Lab Sessions</h3><p>Each week you may attend a four hours long lab session. Some of the lab sessions have been scheduled in ordinary classrooms, and for those sessions you have to bring your own laptop to work on. If you can&#39;t do that, make sure to come to a lab session scheduled in a computer room.</p>', 8)),
    createBaseVNode("p", null, [
      _cache[6] || (_cache[6] = createTextVNode("Select which lab session you want to attend by joining the corresponding ")),
      createBaseVNode("a", _hoisted_1, [
        _cache[5] || (_cache[5] = createTextVNode("Lab Group")),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _cache[7] || (_cache[7] = createTextVNode(" on Canvas. Feel free to show up at and attend other lab sessions too ")),
      _cache[8] || (_cache[8] = createBaseVNode(
        "strong",
        null,
        "if there's room for it",
        -1
        /* HOISTED */
      )),
      _cache[9] || (_cache[9] = createTextVNode(", but you may only join one Lab Group on Canvas."))
    ]),
    _cache[60] || (_cache[60] = createBaseVNode(
      "h2",
      {
        id: "examination-tests",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#examination-tests",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Examination Tests")
      ],
      -1
      /* HOISTED */
    )),
    _cache[61] || (_cache[61] = createBaseVNode(
      "p",
      null,
      "The course contains three examination tests.",
      -1
      /* HOISTED */
    )),
    _cache[62] || (_cache[62] = createBaseVNode(
      "h3",
      {
        id: "_1-written-examination",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#_1-written-examination",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" 1. Written Examination")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[11] || (_cache[11] = createTextVNode("2.5 credits, graded ")),
      _cache[12] || (_cache[12] = createBaseVNode(
        "code",
        null,
        "Fail",
        -1
        /* HOISTED */
      )),
      _cache[13] || (_cache[13] = createTextVNode(", ")),
      _cache[14] || (_cache[14] = createBaseVNode(
        "code",
        null,
        "3",
        -1
        /* HOISTED */
      )),
      _cache[15] || (_cache[15] = createTextVNode(", ")),
      _cache[16] || (_cache[16] = createBaseVNode(
        "code",
        null,
        "4",
        -1
        /* HOISTED */
      )),
      _cache[17] || (_cache[17] = createTextVNode(", and ")),
      _cache[18] || (_cache[18] = createBaseVNode(
        "code",
        null,
        "5",
        -1
        /* HOISTED */
      )),
      _cache[19] || (_cache[19] = createTextVNode(". More information is available on the ")),
      createVNode(_component_RouterLink, { to: "/courses/web-development-advanced-concepts/written-examination/" }, {
        default: withCtx(() => _cache[10] || (_cache[10] = [
          createTextVNode("Written Examination")
        ])),
        _: 1
        /* STABLE */
      }),
      _cache[20] || (_cache[20] = createTextVNode(" page."))
    ]),
    _cache[63] || (_cache[63] = createBaseVNode(
      "h3",
      {
        id: "_2-laboratory-work",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#_2-laboratory-work",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" 2. Laboratory Work")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[22] || (_cache[22] = createTextVNode("1 credit, graded ")),
      _cache[23] || (_cache[23] = createBaseVNode(
        "code",
        null,
        "Fail",
        -1
        /* HOISTED */
      )),
      _cache[24] || (_cache[24] = createTextVNode(" and ")),
      _cache[25] || (_cache[25] = createBaseVNode(
        "code",
        null,
        "Pass",
        -1
        /* HOISTED */
      )),
      _cache[26] || (_cache[26] = createTextVNode(". More information is available on the ")),
      createVNode(_component_RouterLink, { to: "/courses/web-development-advanced-concepts/laboratory-work/" }, {
        default: withCtx(() => _cache[21] || (_cache[21] = [
          createTextVNode("Laboratory Work")
        ])),
        _: 1
        /* STABLE */
      }),
      _cache[27] || (_cache[27] = createTextVNode(" page."))
    ]),
    _cache[64] || (_cache[64] = createBaseVNode(
      "h3",
      {
        id: "_3-project-work",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#_3-project-work",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" 3. Project Work")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[29] || (_cache[29] = createTextVNode("4 credits, graded ")),
      _cache[30] || (_cache[30] = createBaseVNode(
        "code",
        null,
        "Fail",
        -1
        /* HOISTED */
      )),
      _cache[31] || (_cache[31] = createTextVNode(", ")),
      _cache[32] || (_cache[32] = createBaseVNode(
        "code",
        null,
        "3",
        -1
        /* HOISTED */
      )),
      _cache[33] || (_cache[33] = createTextVNode(", ")),
      _cache[34] || (_cache[34] = createBaseVNode(
        "code",
        null,
        "4",
        -1
        /* HOISTED */
      )),
      _cache[35] || (_cache[35] = createTextVNode(" and ")),
      _cache[36] || (_cache[36] = createBaseVNode(
        "code",
        null,
        "5",
        -1
        /* HOISTED */
      )),
      _cache[37] || (_cache[37] = createTextVNode(". More information is available on the ")),
      createVNode(_component_RouterLink, { to: "/courses/web-development-advanced-concepts/project-work/" }, {
        default: withCtx(() => _cache[28] || (_cache[28] = [
          createTextVNode("Project Work")
        ])),
        _: 1
        /* STABLE */
      }),
      _cache[38] || (_cache[38] = createTextVNode(" page."))
    ]),
    _cache[65] || (_cache[65] = createBaseVNode(
      "h3",
      {
        id: "re-examination",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#re-examination",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Re-examination")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      createVNode(_component_FigureNumber),
      _cache[39] || (_cache[39] = createTextVNode(" below shows the study and exam periods during a year. The small yellow circle sectors shows when the (re-)examinations are offered in this course (at the re-exam periods in June and August)."))
    ]),
    createVNode(_component_AcademicYearFigure),
    _cache[66] || (_cache[66] = createStaticVNode('<p>If you need to know a precise date and time for the re-examination in advance, email the course coordinator at <code>peter.larsson-green@ju.se</code>. An announcement on Canvas with more information will be posted soon before the re-examination periods for this course.</p><p>The project work will only be graded 3/U (U=fail) at re-examination.</p><p>If you haven&#39;t passed some examination tests after the three examination opportunities (ordinary + 2 re-exam) you need to re-take those tests the next time the course run. Note that the instructions for those tests might have changed the next time the course run, and that you should take them according to the new instructions.</p><h3 id="final-grade" tabindex="-1"><a class="header-anchor" href="#final-grade" aria-hidden="true">#</a> Final grade</h3><p>To receive a final grade in the course you need to pass all examination tests. The final grade will be based on the lowest grade of the <code>Project Work</code> and the <code>Written Examination</code>, but these grades will also be marked as <em>weak</em> or <em>strong</em>. If one of the grades is lower than the other and has been marked as <em>strong</em>, the final grade will be the lower grade + 1. For example, a strong 3 and a weak 4 gives you 4 as the final grade, while a weak 3 and a strong 5 gives you 3 as the final grade. For the <code>Written Examination</code>, 50% of max score is a strong 3, and 70% of max score is a strong 4.</p><h2 id="course-literature-and-other-teaching-aids" tabindex="-1"><a class="header-anchor" href="#course-literature-and-other-teaching-aids" aria-hidden="true">#</a> Course Literature and Other Teaching Aids</h2>', 6)),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_2, [
          _cache[40] || (_cache[40] = createTextVNode("Eloquent JavaScript 3rd edition")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[41] || (_cache[41] = createTextVNode(" by Marijn Haverbeke"))
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_3, [
          _cache[42] || (_cache[42] = createTextVNode("The Twelve-Factor App")),
          createVNode(_component_ExternalLinkIcon)
        ])
      ]),
      createBaseVNode("li", null, [
        createBaseVNode("a", _hoisted_4, [
          _cache[43] || (_cache[43] = createTextVNode("Web API Design: Crafting Interfaces that Developers Love")),
          createVNode(_component_ExternalLinkIcon)
        ])
      ])
    ]),
    _cache[67] || (_cache[67] = createBaseVNode(
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
      _cache[45] || (_cache[45] = createTextVNode("A time plan is available on the ")),
      createVNode(_component_RouterLink, { to: "/courses/web-development-advanced-concepts/time-plan/" }, {
        default: withCtx(() => _cache[44] || (_cache[44] = [
          createTextVNode("Time Plan")
        ])),
        _: 1
        /* STABLE */
      }),
      _cache[46] || (_cache[46] = createTextVNode(" page."))
    ])
  ]);
}
const studyGuide_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "study-guide.html.vue"]]);
export {
  studyGuide_html as default
};
