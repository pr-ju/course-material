import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, f as createStaticVNode, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx } from "./app-dfab54cf.js";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://en.wikipedia.org/wiki/Indentation_style",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_2 = {
  href: "https://en.wikibooks.org/wiki/Computer_Programming/Coding_Style",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = {
  href: "https://xkcd.com/1513/",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_4 = {
  href: "https://en.wikipedia.org/wiki/Naming_convention_(programming)",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_5 = {
  href: "https://eng.libretexts.org/Bookshelves/Computer_Science/Book%3A_Python_for_Everybody_(Severance)/2%3A_Variables%2C_Expressions%2C_and_Statements/2.12%3A_Choosing_Mnemonic_Variable_Names",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_6 = {
  href: "https://en.wikipedia.org/wiki/Magic_number_%28programming%29#Unnamed_numerical_constants",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_7 = {
  href: "https://xkcd.com/1883/",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  const _component_GradingGuideline = resolveComponent("GradingGuideline");
  const _component_RouterLink = resolveComponent("RouterLink");
  return openBlock(), createElementBlock("div", null, [
    _cache[20] || (_cache[20] = createStaticVNode('<h1 id="project-grading-guidelines" tabindex="-1"><a class="header-anchor" href="#project-grading-guidelines" aria-hidden="true">#</a> Project Grading Guidelines</h1><p>This page contains guidelines for how your work will be graded. For the guidelines where it make sense, a higher grade includes the guidelines for the lower grades (for example, to be able to get <code>Grade 5</code>, you also need to follow the guidelines for <code>Grade 3</code> and <code>Grade 4</code>).</p><div class="custom-container warning"><p class="custom-container-title">Guidelines only</p><p>This page does only contain <em>guidelines</em> for how your work will be graded. When we grade your work we&#39;ll make an assessment of your entire work, which is not limited to these guidelines, so <strong>do not use these guidelines as a checklist for a certain grade</strong>. Instead, rather see them as <strong>minimum requirements</strong> to be able to get a certain grade.</p></div><div class="custom-container danger"><p class="custom-container-title">Not average</p><p>To get grade <code>X</code>, the student is expected to obtain at least grade <code>X</code> on all guidelines. Small exceptions to this might be made, but that is nothing the students should count on.</p></div><h2 id="indentation-convention" tabindex="-1"><a class="header-anchor" href="#indentation-convention" aria-hidden="true">#</a> Indentation Convention</h2>', 5)),
    createBaseVNode("p", null, [
      _cache[1] || (_cache[1] = createTextVNode("The convention used for indenting code (such as 2 spaces, 4 spaces, a tab, etc.). For more information, see ")),
      createBaseVNode("a", _hoisted_1, [
        _cache[0] || (_cache[0] = createTextVNode("Wikipedia's article on indentation style")),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    createVNode(_component_GradingGuideline, {
      gradeU: "No indentation convention has been used.",
      grade3: "Each file use an indentation convention, but it hasn't been used correctly at at most 3 places (in total).",
      grade4: "Each file correctly use an indentation convention.",
      grade5: "All files of the same type use the same indentation convention."
    }),
    _cache[21] || (_cache[21] = createBaseVNode(
      "h2",
      {
        id: "coding-style",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#coding-style",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Coding Style")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[4] || (_cache[4] = createTextVNode("The conventions used for writing comments, (not) using optional curly brackets, maximum line lengths, white-spaces in the statements, etc. For more information, see ")),
      createBaseVNode("a", _hoisted_2, [
        _cache[2] || (_cache[2] = createTextVNode("Wikipedia's article on coding style")),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _cache[5] || (_cache[5] = createTextVNode(". ")),
      createBaseVNode("a", _hoisted_3, [
        _cache[3] || (_cache[3] = createTextVNode("xkcd has a web comic about it.")),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    createVNode(_component_GradingGuideline, {
      gradeU: "No coding style has been used.",
      grade3: "Each file use a coding style, but it hasn't been used correctly at at most 3 places (in total).",
      grade4: "Each file correctly use a coding style.",
      grade5: "All files of the same type use the same coding style."
    }),
    _cache[22] || (_cache[22] = createBaseVNode(
      "h2",
      {
        id: "naming-convention",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#naming-convention",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Naming Convention")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[7] || (_cache[7] = createTextVNode("The convention used when naming variables, constants, functions, classes, methods, functions, files, packages, etc. For more information, see ")),
      createBaseVNode("a", _hoisted_4, [
        _cache[6] || (_cache[6] = createTextVNode("Wikipedia's article on naming convention")),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _cache[8] || (_cache[8] = createTextVNode("."))
    ]),
    createVNode(_component_GradingGuideline, {
      gradeU: "No naming convention has been used.",
      grade3: "Each file use a naming convention, but it hasn't been used correctly at at most 3 places (in total).",
      grade4: "Each file correctly use a naming convention.",
      grade5: "All files of the same type use the same naming convention."
    }),
    _cache[23] || (_cache[23] = createBaseVNode(
      "h2",
      {
        id: "mnemonic-names",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#mnemonic-names",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Mnemonic names")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[10] || (_cache[10] = createTextVNode("The names used (on variables, functions, classes, files, tables in the database, etc.) reflect what they represent. Optimal names are short and very descriptive. For more information, see ")),
      createBaseVNode("a", _hoisted_5, [
        _cache[9] || (_cache[9] = createTextVNode("Chapter 2.12 in Python for Everybody (Severance)")),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _cache[11] || (_cache[11] = createTextVNode("."))
    ]),
    createVNode(_component_GradingGuideline, {
      gradeU: "6 or more names are not mnemonic.",
      grade3: "At most 5 names are not mnemonic.",
      grade4: "At most 3 names are not mnemonic.",
      grade5: "At most 1 name is not mnemonic."
    }),
    _cache[24] || (_cache[24] = createBaseVNode(
      "h2",
      {
        id: "magic-numbers",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#magic-numbers",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Magic Numbers")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[13] || (_cache[13] = createTextVNode("Avoid using ")),
      createBaseVNode("a", _hoisted_6, [
        _cache[12] || (_cache[12] = createTextVNode("magic numbers")),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _cache[14] || (_cache[14] = createTextVNode(" in the code. Does not only apply to numbers, but all values that are better put in descriptive constants."))
    ]),
    createVNode(_component_GradingGuideline, {
      gradeU: "3 or more magic numbers exist.",
      grade3: "At most 2 magic numbers exist.",
      grade4: "At most 1 magic number exists.",
      grade5: "No magic numbers exist."
    }),
    _cache[25] || (_cache[25] = createBaseVNode(
      "h2",
      {
        id: "implementation",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#implementation",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Implementation")
      ],
      -1
      /* HOISTED */
    )),
    _cache[26] || (_cache[26] = createBaseVNode(
      "p",
      null,
      "When a solution can be implemented in different ways, the most preferred implementation is used. If statements VS switches, arrays VS switches, for loops VS while loops VS do-while loops, iteration over indexes VS iteration over values, etc. Use functions instead of code duplication. Eliminate unnecessary if statements. Solutions aren't overcomplicated.",
      -1
      /* HOISTED */
    )),
    createVNode(_component_GradingGuideline, {
      gradeU: "Solutions have not been implemented at all.",
      grade3: "The solutions are often not implemented the preferred way.",
      grade4: "The solutions are often implemented the preferred way.",
      grade5: "The solutions are always implemented the preferred way."
    }),
    _cache[27] || (_cache[27] = createBaseVNode(
      "h2",
      {
        id: "resources",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#resources",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Resources")
      ],
      -1
      /* HOISTED */
    )),
    _cache[28] || (_cache[28] = createBaseVNode(
      "p",
      null,
      "The quality of the resources on the website.",
      -1
      /* HOISTED */
    )),
    createVNode(_component_GradingGuideline, {
      gradeU: "It is not possible to apply CRUD operations on at least 3 different type of resources stored in a relational database.",
      grade3: "The resources are validated so the database does not contain resources in bad state (such as a guestbook post with an empty message).",
      grade4: "The resources are not 'minimal', but 'rich'. If a resource represents a guestbook post, it does not only consist of the message the user entered, but also other fields (which could be optional for the user to enter), such as the user's signature, the user's email, the time it was created, etc.",
      grade5: "Not applicable."
    }),
    _cache[29] || (_cache[29] = createBaseVNode(
      "h2",
      {
        id: "database-design",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#database-design",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Database Design")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[16] || (_cache[16] = createTextVNode("The quality of the design of the database. ")),
      createBaseVNode("a", _hoisted_7, [
        _cache[15] || (_cache[15] = createTextVNode("xkcd has a web comic about storing dates.")),
        createVNode(_component_ExternalLinkIcon)
      ])
    ]),
    createVNode(_component_GradingGuideline, {
      gradeU: "The design is inappropriate, for example storing all resources in the same table.",
      grade3: "Primary keys are properly used.",
      grade4: "Constraints (such as unique constraints and foreign key constraints) are used correctly where suitable.",
      grade5: "Data is stored using appropriate data types (especially important for booleans and dates/unix timestamps)."
    }),
    _cache[30] || (_cache[30] = createBaseVNode(
      "h2",
      {
        id: "validation",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#validation",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Validation")
      ],
      -1
      /* HOISTED */
    )),
    _cache[31] || (_cache[31] = createBaseVNode(
      "p",
      null,
      "Validation of resources on the website entered by a user.",
      -1
      /* HOISTED */
    )),
    createVNode(_component_GradingGuideline, {
      gradeU: "No validation is carried out.",
      grade3: "All fields on all resources are validated (at least checking that the expected fields exists on the resource), and the user is notified that something is wrong, and what the user had written in the form before is still there.",
      grade4: "All fields are properly validated, e.g. checking lower and upper bounds for a number, the length of strings, etc., and all validation errors are displayed to the user.",
      grade5: "Not applicable."
    }),
    _cache[32] || (_cache[32] = createBaseVNode(
      "h2",
      {
        id: "error-handling",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#error-handling",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Error Handling")
      ],
      -1
      /* HOISTED */
    )),
    _cache[33] || (_cache[33] = createBaseVNode(
      "p",
      null,
      "Handling of various errors that can occur when the user is using your website, including such as database errors.",
      -1
      /* HOISTED */
    )),
    createVNode(_component_GradingGuideline, {
      gradeU: "Errors are not handled, or error messages are not displayed, or the error messages displayed are confusing to the user (remember: users are not programmers).",
      grade3: "At most 5 errors that can occur are not handled.",
      grade4: "At most 3 errors that can occur are not handled.",
      grade5: "At most 1 error that can occur is not handled."
    }),
    _cache[34] || (_cache[34] = createBaseVNode(
      "h2",
      {
        id: "graphical-user-interface",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#graphical-user-interface",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Graphical User Interface")
      ],
      -1
      /* HOISTED */
    )),
    _cache[35] || (_cache[35] = createBaseVNode(
      "p",
      null,
      "The logical placement and usage of components (menus, sub-menus, pagination, forms, buttons, etc.), the support for different screen sizes (small smartphones, medium tablets, large desktop screens, etc.), the support for different input methods (touch screen, mouse, keyboard, etc.), etc. Simply put, users should understand how to use the website.",
      -1
      /* HOISTED */
    )),
    createVNode(_component_GradingGuideline, {
      gradeU: "The website contains components users don't understand how to use/can't use.",
      grade3: "The placement of components is logical and users understand how to use them on a desktop computer.",
      grade4: "The website do to some extent have support for smartphones (for example having support for just the screen size or just the input method).",
      grade5: "The website have very good support for both smartphones and desktop computers."
    }),
    _cache[36] || (_cache[36] = createBaseVNode(
      "h2",
      {
        id: "semantic-html",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#semantic-html",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Semantic HTML")
      ],
      -1
      /* HOISTED */
    )),
    _cache[37] || (_cache[37] = createBaseVNode(
      "p",
      null,
      "Proper usage of HTML tags. Very important for applications (instead of humans) trying to understand your website, such as search engines and screen readers.",
      -1
      /* HOISTED */
    )),
    createVNode(_component_GradingGuideline, {
      gradeU: "The HTML syntax is not followed.",
      grade3: "The HTML syntax is followed. XHTML is not used.",
      grade4: "HTML tags are used for semantic, not visual appearance (e.g. don't use the br tag).",
      grade5: "Extra code has been written to give the website semantically better structure (such as using the label element, the alt attribute for images, etc.)."
    }),
    _cache[38] || (_cache[38] = createBaseVNode(
      "h2",
      {
        id: "css",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#css",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" CSS")
      ],
      -1
      /* HOISTED */
    )),
    _cache[39] || (_cache[39] = createBaseVNode(
      "p",
      null,
      "Custom CSS code (if used, not mandatory).",
      -1
      /* HOISTED */
    )),
    createVNode(_component_GradingGuideline, {
      gradeU: "The HTML style attribute is used when not needed.",
      grade3: "The HTML style element and the HTML link element are used appropriately.",
      grade4: "CSS selectors are used appropriately (for example id VS class, combining selectors, etc.).",
      grade5: "Not applicable."
    }),
    _cache[40] || (_cache[40] = createBaseVNode(
      "h2",
      {
        id: "security",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#security",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Security")
      ],
      -1
      /* HOISTED */
    )),
    _cache[41] || (_cache[41] = createBaseVNode(
      "p",
      null,
      "Vulnerabilities such as SQL injections, XSS, CSRF, not checking authorization, storing password in plain text, improper implemented authentication, etc.",
      -1
      /* HOISTED */
    )),
    createVNode(_component_GradingGuideline, {
      gradeU: "3 or more security vulnerabilities exist.",
      grade3: "At most 2 security vulnerabilities exist.",
      grade4: "At most 1 security vulnerability exists.",
      grade5: "No security vulnerability exists."
    }),
    _cache[42] || (_cache[42] = createBaseVNode(
      "h2",
      {
        id: "report",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#report",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Report")
      ],
      -1
      /* HOISTED */
    )),
    _cache[43] || (_cache[43] = createBaseVNode(
      "p",
      null,
      "The quality of the report.",
      -1
      /* HOISTED */
    )),
    createVNode(_component_GradingGuideline, {
      gradeU: "The reader does not get a good understanding of what the project is about (the problem and the solution), nor how the solution works/will be used/has been implemented.",
      grade3: "The reader gets a good understanding of what the project is about and how the solution works/will be used/has been implemented. Figures are used, they have been numbered and given descriptive captions, and they are referred to from the main text using their figure numbers. The text does not contain obvious spelling mistake nor incomprehensible sentences. At most 5 mistakes mentioned in the lecture Report Writing exists.",
      grade4: "Chapters and sub-chapters are properly used to give the report a good structure. The reader can easily find the specific information she's looking for in the expected chapter/sub-chapter. At most 3 mistakes mentioned in the lecture Report Writing exists.",
      grade5: "Everything with the report is great. At most 1 mistake mentioned in the lecture Report Writing exists."
    }),
    _cache[44] || (_cache[44] = createBaseVNode(
      "h2",
      {
        id: "optional-tasks",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#optional-tasks",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Optional Tasks")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[18] || (_cache[18] = createTextVNode("Complete ")),
      createVNode(_component_RouterLink, { to: "/courses/web-development-fundamentals/project-work.html#part-9-optional-tasks" }, {
        default: withCtx(() => _cache[17] || (_cache[17] = [
          createTextVNode("the optional tasks described in the Project Instructions")
        ])),
        _: 1
        /* STABLE */
      }),
      _cache[19] || (_cache[19] = createTextVNode("."))
    ]),
    createVNode(_component_GradingGuideline, {
      gradeU: "Not applicable.",
      grade3: "No extra tasks need to be completed.",
      grade4: "The extra task Search or Pagination has been completed.",
      grade5: "The extra task Uploading Files has been completed."
    })
  ]);
}
const projectGradingGuidelines_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "project-grading-guidelines.html.vue"]]);
export {
  projectGradingGuidelines_html as default
};
