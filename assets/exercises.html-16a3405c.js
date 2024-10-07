import { _ as _export_sfc, r as resolveComponent, o as openBlock, c as createElementBlock, f as createStaticVNode, a as createBaseVNode, b as createTextVNode, d as createVNode, e as withCtx, g as createCommentVNode } from "./app-dfab54cf.js";
const _imports_0 = "/course-material/assets/getting-started-notepad-25353d4e.png";
const _imports_1 = "/course-material/assets/getting-started-download-python-6141bc3a.png";
const _imports_2 = "/course-material/assets/getting-started-install-python-b0692f5f.png";
const _imports_3 = "/course-material/assets/getting-started-run-powershell-295cb6ef.png";
const _imports_4 = "/course-material/assets/getting-started-download-vs-code-0fe31cac.png";
const _imports_5 = "/course-material/assets/getting-started-install-vs-code-e59381a6.png";
const _imports_6 = "/course-material/assets/getting-started-vs-code-create-project-7a860385.png";
const _imports_7 = "/course-material/assets/getting-started-vs-code-writing-python-a16f067f.png";
const _imports_8 = "/course-material/assets/getting-started-vs-code-running-python-9c6ca981.png";
const _sfc_main = {};
const _hoisted_1 = {
  href: "https://www.python.org",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_2 = {
  href: "https://code.visualstudio.com",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_3 = { class: "custom-container danger" };
const _hoisted_4 = { class: "custom-container tip" };
const _hoisted_5 = {
  href: "https://docs.python.org/3/library/math.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_6 = { class: "custom-container tip" };
const _hoisted_7 = {
  href: "https://docs.python.org/3/library/random.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_8 = { class: "custom-container tip" };
const _hoisted_9 = {
  href: "https://docs.python.org/3/library/os.html",
  target: "_blank",
  rel: "noopener noreferrer"
};
const _hoisted_10 = {
  href: "https://en.wikipedia.org/wiki/Hangman_(game)",
  target: "_blank",
  rel: "noopener noreferrer"
};
function _sfc_render(_ctx, _cache) {
  const _component_FigureNumber = resolveComponent("FigureNumber");
  const _component_Figure = resolveComponent("Figure");
  const _component_ExternalLinkIcon = resolveComponent("ExternalLinkIcon");
  const _component_RouterLink = resolveComponent("RouterLink");
  const _component_SampleAnswer = resolveComponent("SampleAnswer");
  const _component_RenderMermaid = resolveComponent("RenderMermaid");
  return openBlock(), createElementBlock("div", null, [
    _cache[233] || (_cache[233] = createStaticVNode('<h1 id="self-study-exercises" tabindex="-1"><a class="header-anchor" href="#self-study-exercises" aria-hidden="true">#</a> Self Study Exercises</h1><p>On this page you find information about the exercises in the course.</p><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>The exercises are not part of any examination test and therefore not mandatory to complete. They consist of programming problems that are a bit easier to solve than the labs, so they serve as good practice problems to solve before attempting to solve the labs.</p><p>Solutions to the exercises will be shown on this page after the tutorial each week going through and discussing sample solutions.</p><h2 id="getting-started-with-python" tabindex="-1"><a class="header-anchor" href="#getting-started-with-python" aria-hidden="true">#</a> Getting started with Python</h2><p>This sub-chapter contains instructions to help you get started with writing and running Python code. All software we use in this course should already be installed on the school&#39;s computers where we have lab sessions in this course (but versions might differ). If you use a school computer in another room you can install the software yourself on that computer through the application <em>Software Center</em>. If you use your own computer, you need to install the software on your own computer yourself, as described further down in this sub-chapter.</p><p>To write Python code on your computer, you need a <em>text editor</em>. A text editor is a program through which you can:</p><ol><li>Open any type of file on your hard drive.</li><li>Display the raw content of a file.</li><li>Change the content of a file in the text editor.</li><li>Save changes made to a file in the text editor back to the hard drive.</li></ol>', 9)),
    createBaseVNode("p", null, [
      _cache[0] || (_cache[0] = createTextVNode("More or less all operating systems (Windows, Linux, Mac, etc.) come with a text editor pre-installed. For example, Windows comes with a text editor called ")),
      _cache[1] || (_cache[1] = createBaseVNode(
        "em",
        null,
        "Notepad",
        -1
        /* HOISTED */
      )),
      _cache[2] || (_cache[2] = createTextVNode(" (")),
      _cache[3] || (_cache[3] = createBaseVNode(
        "em",
        null,
        "Anteckningar",
        -1
        /* HOISTED */
      )),
      _cache[4] || (_cache[4] = createTextVNode(" in Swedish), as shown in ")),
      createVNode(_component_FigureNumber),
      _cache[5] || (_cache[5] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: 'The Notepad program can be found in Windows by searching for "Notepad".' }, {
      default: withCtx(() => _cache[6] || (_cache[6] = [
        createBaseVNode(
          "img",
          {
            src: _imports_0,
            alt: 'The Notepad program can be found in Windows by searching for "Notepad".'
          },
          null,
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[234] || (_cache[234] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("These text editors work fine, and you may use them in this course if you want to. Just make sure to save your code in a file with the extension "),
        createBaseVNode("code", null, ".py"),
        createTextVNode(". But we recommend you to use an Integrated Development Environment (IDE) instead, as described further down in this sub-chapter. IDEs usually makes it much easier to read, write and run code.")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[8] || (_cache[8] = createTextVNode("To run Python code, you need to install the ")),
      _cache[9] || (_cache[9] = createBaseVNode(
        "code",
        null,
        "python",
        -1
        /* HOISTED */
      )),
      _cache[10] || (_cache[10] = createTextVNode(" program. The ")),
      _cache[11] || (_cache[11] = createBaseVNode(
        "code",
        null,
        "python",
        -1
        /* HOISTED */
      )),
      _cache[12] || (_cache[12] = createTextVNode(" program will simply take the code you have written in a file and execute it for you. The latest version of the ")),
      _cache[13] || (_cache[13] = createBaseVNode(
        "code",
        null,
        "python",
        -1
        /* HOISTED */
      )),
      _cache[14] || (_cache[14] = createTextVNode(" program can be downloaded and installed from ")),
      createBaseVNode("a", _hoisted_1, [
        _cache[7] || (_cache[7] = createTextVNode("python.org")),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _cache[15] || (_cache[15] = createTextVNode(". Install the version of Python beginning with 3, as shown in ")),
      createVNode(_component_FigureNumber),
      _cache[16] || (_cache[16] = createTextVNode(" below (available for Windows, Mac and Linux)."))
    ]),
    createVNode(_component_Figure, { caption: "Downloading the Python program. Make sure to use the version beginning with 3." }, {
      default: withCtx(() => _cache[17] || (_cache[17] = [
        createBaseVNode(
          "img",
          {
            src: _imports_1,
            alt: "Downloading the Python program. Make sure to use the version beginning with 3."
          },
          null,
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    createBaseVNode("p", null, [
      _cache[18] || (_cache[18] = createTextVNode("The ")),
      _cache[19] || (_cache[19] = createBaseVNode(
        "code",
        null,
        "python",
        -1
        /* HOISTED */
      )),
      _cache[20] || (_cache[20] = createTextVNode(" program can be installed by running the installation program you downloaded. When you run it, make sure to check the option ")),
      _cache[21] || (_cache[21] = createBaseVNode(
        "code",
        null,
        "Add Python 3.X to PATH",
        -1
        /* HOISTED */
      )),
      _cache[22] || (_cache[22] = createTextVNode(", as shown in ")),
      createVNode(_component_FigureNumber),
      _cache[23] || (_cache[23] = createTextVNode(" below. Checking this will make it easier to run the Python program from a shell/terminal/console. Click on ")),
      _cache[24] || (_cache[24] = createBaseVNode(
        "code",
        null,
        "Install Now",
        -1
        /* HOISTED */
      )),
      _cache[25] || (_cache[25] = createTextVNode(" to start the installation process."))
    ]),
    createVNode(_component_Figure, { caption: "Running the Python installation program." }, {
      default: withCtx(() => _cache[26] || (_cache[26] = [
        createBaseVNode(
          "img",
          {
            src: _imports_2,
            alt: "Running the Python installation program."
          },
          null,
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    createBaseVNode("p", null, [
      _cache[27] || (_cache[27] = createTextVNode("To run the Python program, you just need to type ")),
      _cache[28] || (_cache[28] = createBaseVNode(
        "code",
        null,
        "python",
        -1
        /* HOISTED */
      )),
      _cache[29] || (_cache[29] = createTextVNode(" in a shell/terminal/console and then press the enter key. In Windows, you can use ")),
      _cache[30] || (_cache[30] = createBaseVNode(
        "em",
        null,
        "Windows PowerShell",
        -1
        /* HOISTED */
      )),
      _cache[31] || (_cache[31] = createTextVNode(" for this. Windows PowerShell can easily be started by searching for it, as shown in ")),
      createVNode(_component_FigureNumber),
      _cache[32] || (_cache[32] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "Running the Python program using Windows PowerShell." }, {
      default: withCtx(() => _cache[33] || (_cache[33] = [
        createBaseVNode(
          "img",
          {
            src: _imports_3,
            alt: "Running the Python program using Windows PowerShell."
          },
          null,
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    createBaseVNode("p", null, [
      _cache[35] || (_cache[35] = createTextVNode("Just running the ")),
      _cache[36] || (_cache[36] = createBaseVNode(
        "code",
        null,
        "python",
        -1
        /* HOISTED */
      )),
      _cache[37] || (_cache[37] = createTextVNode(" command will start Python's read-eval-print-loop, where you can enter Python code and have it executed when you press the enter key, but the ")),
      _cache[38] || (_cache[38] = createBaseVNode(
        "code",
        null,
        "python",
        -1
        /* HOISTED */
      )),
      _cache[39] || (_cache[39] = createTextVNode(" command can also be used to execute Python code written in a file. How to do that is not explained here, but in the video lecture ")),
      createVNode(_component_RouterLink, { to: "/lectures/python-introduction/" }, {
        default: withCtx(() => _cache[34] || (_cache[34] = [
          createTextVNode("Python Introduction")
        ])),
        _: 1
        /* STABLE */
      }),
      _cache[40] || (_cache[40] = createTextVNode("."))
    ]),
    _cache[235] || (_cache[235] = createBaseVNode(
      "p",
      null,
      "You do not need to do anything more than this to start writing and running Python code, so it is quite easy to get started. But back to that IDE we mentioned earlier.",
      -1
      /* HOISTED */
    )),
    _cache[236] || (_cache[236] = createBaseVNode(
      "p",
      null,
      [
        createBaseVNode("em", null, "Visual Studio Code"),
        createTextVNode(" is an IDE you can use to write and run your Python code. Some of the benefits with this IDE compared to doing as described above are:")
      ],
      -1
      /* HOISTED */
    )),
    _cache[237] || (_cache[237] = createBaseVNode(
      "ul",
      null,
      [
        createBaseVNode("li", null, "Syntax highlighting of code, making it easier to read the code and to discover mistakes."),
        createBaseVNode("li", null, "Automatic indentation, so you do not need to enter spaces/tabs for indentation yourself."),
        createBaseVNode("li", null, "Run button, which makes it very easy to run your Python code."),
        createBaseVNode("li", null, "Debug capabilities making it easy to figure out why the code does not work the way you want it to.")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[42] || (_cache[42] = createTextVNode("Visual Studio Code (available for Windows, Mac and Linux) can be downloaded and installed for free from ")),
      createBaseVNode("a", _hoisted_2, [
        _cache[41] || (_cache[41] = createTextVNode("code.visualstudio.com")),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _cache[43] || (_cache[43] = createTextVNode(", as shown in ")),
      createVNode(_component_FigureNumber),
      _cache[44] || (_cache[44] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "Downloading Visual Studio Code." }, {
      default: withCtx(() => _cache[45] || (_cache[45] = [
        createBaseVNode(
          "img",
          {
            src: _imports_4,
            alt: "Downloading Visual Studio Code."
          },
          null,
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    createBaseVNode("p", null, [
      _cache[46] || (_cache[46] = createTextVNode("Install Visual Studio Code by running the installation program you just downloaded. During the installation process, check the option ")),
      _cache[47] || (_cache[47] = createBaseVNode(
        "code",
        null,
        "Add to PATH",
        -1
        /* HOISTED */
      )),
      _cache[48] || (_cache[48] = createTextVNode(", as shown in ")),
      createVNode(_component_FigureNumber),
      _cache[49] || (_cache[49] = createTextVNode(" below. This will make it possible to start Visual Studio Code from a shell using the ")),
      _cache[50] || (_cache[50] = createBaseVNode(
        "code",
        null,
        "code",
        -1
        /* HOISTED */
      )),
      _cache[51] || (_cache[51] = createTextVNode(" command. Feel free to check the other options if you want."))
    ]),
    createVNode(_component_Figure, { caption: "Installing Visual Studio Code." }, {
      default: withCtx(() => _cache[52] || (_cache[52] = [
        createBaseVNode(
          "img",
          {
            src: _imports_5,
            alt: "Installing Visual Studio Code."
          },
          null,
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    createBaseVNode("p", null, [
      _cache[53] || (_cache[53] = createTextVNode("When the installation process has completed, start Visual Studio Code and open a new project folder you can use to store your Python files in, as shown in ")),
      createVNode(_component_FigureNumber),
      _cache[54] || (_cache[54] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "Creating a new project folder in Visual Studio Code." }, {
      default: withCtx(() => _cache[55] || (_cache[55] = [
        createBaseVNode(
          "img",
          {
            src: _imports_6,
            alt: "Creating a new project folder in Visual Studio Code."
          },
          null,
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    createBaseVNode("p", null, [
      _cache[56] || (_cache[56] = createTextVNode("Then create a new Python file in your project folder, as shown in ")),
      createVNode(_component_FigureNumber),
      _cache[57] || (_cache[57] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "Creating a new Python file in Visual Studio Code and installing the Python extension." }, {
      default: withCtx(() => _cache[58] || (_cache[58] = [
        createBaseVNode(
          "img",
          {
            src: _imports_7,
            alt: "Creating a new Python file in Visual Studio Code and installing the Python extension."
          },
          null,
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    createBaseVNode("p", null, [
      _cache[59] || (_cache[59] = createTextVNode("The first time Visual Studio Code encounters a Python file, it will suggest you install an extension to it containing features for working with Python files. Install that extension. You should then be able to run your Python code by clicking on the ▶ button shown in ")),
      createVNode(_component_FigureNumber),
      _cache[60] || (_cache[60] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "Running Python files in Visual Studio Code." }, {
      default: withCtx(() => _cache[61] || (_cache[61] = [
        createBaseVNode(
          "img",
          {
            src: _imports_8,
            alt: "Running Python files in Visual Studio Code."
          },
          null,
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[238] || (_cache[238] = createBaseVNode(
      "p",
      null,
      "That's it! Now you can write your Python code in files using Visual Studio Code and then click on the ▶ button to run it.",
      -1
      /* HOISTED */
    )),
    _cache[239] || (_cache[239] = createBaseVNode(
      "h2",
      {
        id: "exercise-0-input-output",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#exercise-0-input-output",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Exercise 0: Input & output")
      ],
      -1
      /* HOISTED */
    )),
    _cache[240] || (_cache[240] = createBaseVNode(
      "p",
      null,
      "Before you start working on these exercises, you are recommended to watch the following recorded video lectures:",
      -1
      /* HOISTED */
    )),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/introduction-to-computers-and-programming/" }, {
          default: withCtx(() => _cache[62] || (_cache[62] = [
            createTextVNode("Introduction to Computers and Programming")
          ])),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/using-shells/" }, {
          default: withCtx(() => _cache[63] || (_cache[63] = [
            createTextVNode("Using Shells")
          ])),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/python-introduction/" }, {
          default: withCtx(() => _cache[64] || (_cache[64] = [
            createTextVNode("Python Introduction")
          ])),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/python-basics-part-1/" }, {
          default: withCtx(() => _cache[65] || (_cache[65] = [
            createTextVNode("Python Basics - Part 1")
          ])),
          _: 1
          /* STABLE */
        })
      ])
    ]),
    _cache[241] || (_cache[241] = createStaticVNode('<hr><p>In these exercises you will practice on using the following in Python:</p><ul><li>Statements</li><li>Expressions</li><li>Values</li><li>Variables</li><li>Reading input from the user running your program</li><li>Printing output to the user running your program</li></ul><div class="custom-container warning"><p class="custom-container-title">Note!</p><p>There is no Lab 0; Exercise 0 and Exercise 1 will both prepare you for Lab 1.</p></div><h3 id="problem-0-1-producing-output" tabindex="-1"><a class="header-anchor" href="#problem-0-1-producing-output" aria-hidden="true">#</a> Problem 0.1: Producing output</h3><p>The circumference of a circle can be computed with the formula <code>2*r*𝜋</code>, where:</p><ul><li><code>r</code> is the radius of the circle.</li><li><code>𝜋</code> is <code>3.14</code>.</li></ul><p>Create a program in a file called <code>circle-circumference-computer.py</code> that computes the circumference of a circle with the radius <code>7</code> and then prints the circle&#39;s circumference.</p>', 8)),
    createBaseVNode("p", null, [
      _cache[66] || (_cache[66] = createTextVNode("When you are done, the output of the program should be as shown in ")),
      createVNode(_component_FigureNumber),
      _cache[67] || (_cache[67] = createTextVNode(" below (if ")),
      _cache[68] || (_cache[68] = createBaseVNode(
        "code",
        null,
        "𝜋",
        -1
        /* HOISTED */
      )),
      _cache[69] || (_cache[69] = createTextVNode(" is ")),
      _cache[70] || (_cache[70] = createBaseVNode(
        "code",
        null,
        "3.14",
        -1
        /* HOISTED */
      )),
      _cache[71] || (_cache[71] = createTextVNode(")."))
    ]),
    createVNode(_component_Figure, { caption: "The output the program should produce." }, {
      default: withCtx(() => _cache[72] || (_cache[72] = [
        createBaseVNode(
          "div",
          {
            class: "language-text line-numbers-mode",
            "data-ext": "text"
          },
          [
            createBaseVNode("pre", { class: "language-text" }, [
              createBaseVNode("code", null, "This program computes the circumference of a circle.\nThe circumference of a circle with radius 7 is 43.96.\n")
            ]),
            createBaseVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true"
            }, [
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
    _cache[242] || (_cache[242] = createStaticVNode('<div class="custom-container tip"><p class="custom-container-title">Tips</p><p>Here are some code pieces hinting about what you need to use to implement the program:</p><ul><li><code>str(123)</code> to convert the number <code>123</code> to the string <code>&quot;123&quot;</code>.</li><li><code>&quot;abc&quot; + &quot;def&quot;</code> to create the string <code>&quot;abcdef&quot;</code></li><li><code>print(&quot;Hello&quot;)</code> to print the string <code>&quot;Hello&quot;</code> followed by a line break to the console.</li></ul></div>', 1)),
    createBaseVNode("div", _hoisted_3, [
      _cache[75] || (_cache[75] = createBaseVNode(
        "p",
        { class: "custom-container-title" },
        "Don't!",
        -1
        /* HOISTED */
      )),
      createBaseVNode("p", null, [
        _cache[73] || (_cache[73] = createTextVNode("A program producing the output in ")),
        createVNode(_component_FigureNumber, { previous: "" }),
        _cache[74] || (_cache[74] = createTextVNode(" above can be implemented like this:"))
      ]),
      _cache[76] || (_cache[76] = createStaticVNode('<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;This program computes the circumference of a circle.&quot;</span><span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;The circumference of a circle with radius 7 is 43.96.&quot;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>But this is of course not acceptable, because then <em>you</em> have computed the circumference. Instead, it&#39;s the computer that should compute the circumference. If you implement your program in a good way, changing the <code>7</code> at <em>one place</em> in your code to <code>14</code> would produce the correct output for the radius <code>14</code> (you should not need to change the <code>7</code> to <code>14</code> at multiple places in your code).</p>', 2))
    ]),
    _cache[243] || (_cache[243] = createBaseVNode(
      "h4",
      {
        id: "sample-answer",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#sample-answer",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Sample answer")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_SampleAnswer, {
      showAfter: _ctx.$frontmatter.exercise0ShowAfter
    }, {
      default: withCtx(() => _cache[77] || (_cache[77] = [
        createBaseVNode(
          "div",
          {
            class: "language-python line-numbers-mode",
            "data-ext": "py"
          },
          [
            createBaseVNode("pre", { class: "language-python" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"This program computes the circumference of a circle."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\nradius "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "7"),
                createTextVNode("\npi "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "3.14"),
                createTextVNode("\ncircumference "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "2"),
                createBaseVNode("span", { class: "token operator" }, "*"),
                createTextVNode("radius"),
                createBaseVNode("span", { class: "token operator" }, "*"),
                createTextVNode("pi\n"),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"The circumference of a circle with radius "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("radius"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '" is "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("circumference"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '"."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n")
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
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }, 8, ["showAfter"]),
    _cache[244] || (_cache[244] = createBaseVNode(
      "h3",
      {
        id: "problem-0-2-reading-input",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#problem-0-2-reading-input",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Problem 0.2: Reading input")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[78] || (_cache[78] = createTextVNode("Even if the program created in Problem 0.1 works, it is not that useful because it computes and displays the same output each time you run the program. It is an example of a program that doesn't receive any input; it only produces output, as shown in ")),
      createVNode(_component_FigureNumber),
      _cache[79] || (_cache[79] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "Visualization of how the program from Problem 0.1 works." }, {
      default: withCtx(() => [
        createVNode(_component_RenderMermaid, { "graph-definition": "\ngraph LR\n	program[Program]\n	output(Output)\n	program -- Produces --> output\n" })
      ]),
      _: 1
      /* STABLE */
    }),
    _cache[245] || (_cache[245] = createBaseVNode(
      "p",
      null,
      "This exercise is about improving the program from Problem 0.1 so it can compute circumferences for circles with other radiuses as well. When the program runs now, the first thing it should do is to ask the user to enter the radius of the circle whose circumference should be computed. After that, the program should function as before (i.e. compute the circumference and then display it to the user).",
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[80] || (_cache[80] = createTextVNode("When you're done, the program will not only produce output, but also receive input, as shown in ")),
      createVNode(_component_FigureNumber),
      _cache[81] || (_cache[81] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "Visualization of how the program works." }, {
      default: withCtx(() => [
        createVNode(_component_RenderMermaid, { "graph-definition": "\ngraph LR\n	input(Input)\n	program[Program]\n	output(Output)\n	input -- Is entered by the user to --> program\n	program -- Produces --> output\n" })
      ]),
      _: 1
      /* STABLE */
    }),
    createVNode(_component_FigureNumber),
    _cache[246] || (_cache[246] = createTextVNode(" below shows sample input/output when running the program.")),
    createVNode(_component_Figure, { caption: "Sample input to and output from the program.." }, {
      default: withCtx(() => _cache[82] || (_cache[82] = [
        createBaseVNode(
          "div",
          {
            class: "language-text line-numbers-mode",
            "data-ext": "text"
          },
          [
            createBaseVNode("pre", { class: "language-text" }, [
              createBaseVNode("code", null, "This program computes the circumference of a circle.\nEnter the radius of the circle: 9\nThe circumference of a circle with radius 9 is 56.52.\n")
            ]),
            createBaseVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true"
            }, [
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
    _cache[247] || (_cache[247] = createStaticVNode('<div class="custom-container warning"><p class="custom-container-title">Note!</p><p>In your program you don&#39;t need to have any error handling; you can expect the user to actually enter a number when you ask the user to enter the radius of the circle. If the user enters something else (e.g. <code>hello</code>), your program will probably crash, but that is fine.</p></div><div class="custom-container tip"><p class="custom-container-title">Tips!</p><p>Here are some functions you might need to use to implement the program:</p><ul><li><code>input(&quot;Enter number: &quot;)</code> to print <code>Enter number: </code> and then read some input entered by the user.</li><li><code>int(&quot;123&quot;)</code> to convert the string <code>123</code> to the integer <code>123</code>.</li><li><code>float(&quot;12.3&quot;)</code> to convert the string <code>12.3</code> to the float <code>12.3</code>.</li></ul></div><h4 id="sample-answer-1" tabindex="-1"><a class="header-anchor" href="#sample-answer-1" aria-hidden="true">#</a> Sample answer</h4>', 3)),
    createVNode(_component_SampleAnswer, {
      showAfter: _ctx.$frontmatter.exercise0ShowAfter
    }, {
      default: withCtx(() => _cache[83] || (_cache[83] = [
        createBaseVNode(
          "div",
          {
            class: "language-python line-numbers-mode",
            "data-ext": "py"
          },
          [
            createBaseVNode("pre", { class: "language-python" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"This program computes the circumference of a circle."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\nradius "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "float"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "input"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Enter the radius of the circle: "'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\npi "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "3.14"),
                createTextVNode("\ncircumference "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "2"),
                createBaseVNode("span", { class: "token operator" }, "*"),
                createTextVNode("radius"),
                createBaseVNode("span", { class: "token operator" }, "*"),
                createTextVNode("pi\n"),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"The circumference of a circle with radius "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("radius"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '" is "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("circumference"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '"."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n")
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
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }, 8, ["showAfter"]),
    _cache[248] || (_cache[248] = createStaticVNode('<h3 id="problem-0-3-celsius-to-fahrenheit" tabindex="-1"><a class="header-anchor" href="#problem-0-3-celsius-to-fahrenheit" aria-hidden="true">#</a> Problem 0.3: Celsius to fahrenheit</h3><p>Fahrenheit and Celsius are both units used to measure the temperature of things (how hot they are). A temperature expressed in Celsius (<code>C</code>) can be converted to a temperature expressed in Fahrenheit (<code>F</code>) using the formula <code>F = C*9/5 + 32</code>.</p><p>Create a program in a file called <code>celsius-to-fahrenheit-converter.py</code> that asks the user to enter a temperature in Celsius and then computes and prints the temperature in Fahrenheit. Test run your program and verify that it prints <code>50</code> for the input <code>10</code>.</p>', 3)),
    createBaseVNode("p", null, [
      _cache[84] || (_cache[84] = createTextVNode("When you are done, the input/output of the program should be as shown in ")),
      createVNode(_component_FigureNumber),
      _cache[85] || (_cache[85] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "The input to and output from the program." }, {
      default: withCtx(() => _cache[86] || (_cache[86] = [
        createBaseVNode(
          "div",
          {
            class: "language-text line-numbers-mode",
            "data-ext": "text"
          },
          [
            createBaseVNode("pre", { class: "language-text" }, [
              createBaseVNode("code", null, "This program converts Celsius to Fahrenheit.\nEnter the number of Celsius: 10\n10 Celsius is equal to 50 Fahrenheit.\n")
            ]),
            createBaseVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true"
            }, [
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
    _cache[249] || (_cache[249] = createBaseVNode(
      "div",
      { class: "custom-container warning" },
      [
        createBaseVNode("p", { class: "custom-container-title" }, "Note!"),
        createBaseVNode("p", null, "You don't need to have any error handling; you can expect the user to actually enter a number when she's asked to enter the temperature in Celsius.")
      ],
      -1
      /* HOISTED */
    )),
    _cache[250] || (_cache[250] = createBaseVNode(
      "h4",
      {
        id: "sample-answer-2",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#sample-answer-2",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Sample answer")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_SampleAnswer, {
      showAfter: _ctx.$frontmatter.exercise0ShowAfter
    }, {
      default: withCtx(() => _cache[87] || (_cache[87] = [
        createBaseVNode(
          "div",
          {
            class: "language-python line-numbers-mode",
            "data-ext": "py"
          },
          [
            createBaseVNode("pre", { class: "language-python" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"This program converts Celsius to Fahrenheit."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\nC "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "float"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "input"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Enter the number of Celsius: "'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\nF "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" C"),
                createBaseVNode("span", { class: "token operator" }, "*"),
                createBaseVNode("span", { class: "token number" }, "9"),
                createBaseVNode("span", { class: "token operator" }, "/"),
                createBaseVNode("span", { class: "token number" }, "5"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "32"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("C"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '" Celsius is equal to "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("F"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '" Fahrenheit."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n")
              ])
            ]),
            createBaseVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true"
            }, [
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
    }, 8, ["showAfter"]),
    _cache[251] || (_cache[251] = createStaticVNode('<h3 id="problem-0-4-fahrenheit-to-celsius" tabindex="-1"><a class="header-anchor" href="#problem-0-4-fahrenheit-to-celsius" aria-hidden="true">#</a> Problem 0.4: Fahrenheit to celsius</h3><p>A temperature expressed in Fahrenheit (<code>F</code>) can be converted to a temperature expressed in Celsius (<code>C</code>) using the formula <code>C = (F-32) * 5/9</code>.</p><p>Create a program in a file called <code>fahrenheit-to-celsius-converter.py</code> that asks the user to enter a temperature in Fahrenheit and then computes and prints the temperature in Celsius. Test run your program and verify that it prints <code>10</code> for the input <code>50</code>.</p>', 3)),
    createBaseVNode("p", null, [
      _cache[88] || (_cache[88] = createTextVNode("When you are done, the input/output of the program should be as shown in ")),
      createVNode(_component_FigureNumber),
      _cache[89] || (_cache[89] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "The input to and output from the program." }, {
      default: withCtx(() => _cache[90] || (_cache[90] = [
        createBaseVNode(
          "div",
          {
            class: "language-text line-numbers-mode",
            "data-ext": "text"
          },
          [
            createBaseVNode("pre", { class: "language-text" }, [
              createBaseVNode("code", null, "This program converts Fahrenheit to Celsius.\nEnter the number of Fahrenheit: 50\n50 Fahrenheit is equal to 10 Celsius.\n")
            ]),
            createBaseVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true"
            }, [
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
    _cache[252] || (_cache[252] = createBaseVNode(
      "div",
      { class: "custom-container warning" },
      [
        createBaseVNode("p", { class: "custom-container-title" }, "Note!"),
        createBaseVNode("p", null, "You don't need to have any error handling; you can expect the user to actually enter a number when she's asked to enter the temperature in Fahrenheit.")
      ],
      -1
      /* HOISTED */
    )),
    _cache[253] || (_cache[253] = createBaseVNode(
      "h4",
      {
        id: "sample-answer-3",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#sample-answer-3",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Sample answer")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_SampleAnswer, {
      showAfter: _ctx.$frontmatter.exercise0ShowAfter
    }, {
      default: withCtx(() => _cache[91] || (_cache[91] = [
        createBaseVNode(
          "div",
          {
            class: "language-python line-numbers-mode",
            "data-ext": "py"
          },
          [
            createBaseVNode("pre", { class: "language-python" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"This program converts Fahrenheit to Celsius."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\nF "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "float"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "input"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Enter the number of Fahrenheit: "'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\nC "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("F"),
                createBaseVNode("span", { class: "token operator" }, "-"),
                createBaseVNode("span", { class: "token number" }, "32"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "*"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "5"),
                createBaseVNode("span", { class: "token operator" }, "/"),
                createBaseVNode("span", { class: "token number" }, "9"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("F"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '" Fahrenheit is equal to "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("C"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '" Celsius."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n")
              ])
            ]),
            createBaseVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true"
            }, [
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
    }, 8, ["showAfter"]),
    _cache[254] || (_cache[254] = createBaseVNode(
      "h3",
      {
        id: "problem-0-5-lengths-of-events",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#problem-0-5-lengths-of-events",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Problem 0.5: Lengths of events")
      ],
      -1
      /* HOISTED */
    )),
    _cache[255] || (_cache[255] = createBaseVNode(
      "p",
      null,
      'Events stored in a calendar program usually contains information about which day each event takes place and when the event starts and ends that day. To compute during how long time an event runs, one can "simply" subtract the end time from the start time. This is not straight forward since we humans express times using multiple units (hours, minutes and seconds).',
      -1
      /* HOISTED */
    )),
    _cache[256] || (_cache[256] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("Create a program in a file called "),
        createBaseVNode("code", null, "time-length-computer.py"),
        createTextVNode(" that first asks the user to enter a number representing the start hour of the event, and then asks the user to enter another number representing the start minute of the event. The program should then ask the user to enter the end hour of the event, and then the end minute of the event. You program should then compute during how long time (how many hours and how many minutes) the event runs.")
      ],
      -1
      /* HOISTED */
    )),
    _cache[257] || (_cache[257] = createBaseVNode(
      "p",
      null,
      "To compute the length of the event you can start by expressing the start time in a single unit (i.e. total number of minutes passed since 00:00) and expressing the end time in a single unit (the same unit as for the start time), and then you can simply do the subtraction to compute the length of the event in minutes. Then you need to convert the total number of minutes back to the minutes and hours units, so you can display the length of the event in HH:MM format.",
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[92] || (_cache[92] = createTextVNode("When you are done, the input/output of the program should be as shown in ")),
      createVNode(_component_FigureNumber),
      _cache[93] || (_cache[93] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "The input to and output from the program." }, {
      default: withCtx(() => _cache[94] || (_cache[94] = [
        createBaseVNode(
          "div",
          {
            class: "language-text line-numbers-mode",
            "data-ext": "text"
          },
          [
            createBaseVNode("pre", { class: "language-text" }, [
              createBaseVNode("code", null, "This program computes the length of an event.\nEnter start hour of the event: 10\nEnter start minute of the event: 45\nEnter end hour of the event: 12\nEnter end minute of the event: 15\nThe length of the event is: 1:30.\n")
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
    _cache[258] || (_cache[258] = createBaseVNode(
      "h4",
      {
        id: "sample-answer-4",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#sample-answer-4",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Sample answer")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_SampleAnswer, {
      showAfter: _ctx.$frontmatter.exercise0ShowAfter
    }, {
      default: withCtx(() => _cache[95] || (_cache[95] = [
        createBaseVNode(
          "div",
          {
            class: "language-python line-numbers-mode",
            "data-ext": "py"
          },
          [
            createBaseVNode("pre", { class: "language-python" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"This program computes the length of an event."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n\nstart_hour "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "int"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "input"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Enter start hour of the event: "'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\nstart_minute "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "int"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "input"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Enter start minute of the event: "'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\nend_hour "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "int"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "input"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Enter end hour of the event: "'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\nend_minute "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "int"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "input"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Enter end minute of the event: "'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n\nstart_minutes "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" start_minute "),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(" start_hour"),
                createBaseVNode("span", { class: "token operator" }, "*"),
                createBaseVNode("span", { class: "token number" }, "60"),
                createTextVNode("\nend_minutes "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" end_minute "),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(" end_hour"),
                createBaseVNode("span", { class: "token operator" }, "*"),
                createBaseVNode("span", { class: "token number" }, "60"),
                createTextVNode("\n\nminutes "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" end_minutes "),
                createBaseVNode("span", { class: "token operator" }, "-"),
                createTextVNode(" start_minutes\n\nlength_hour "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" minutes "),
                createBaseVNode("span", { class: "token operator" }, "//"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "60"),
                createTextVNode("\nlength_minute "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" minutes "),
                createBaseVNode("span", { class: "token operator" }, "-"),
                createTextVNode(" length_hour"),
                createBaseVNode("span", { class: "token operator" }, "*"),
                createBaseVNode("span", { class: "token number" }, "60"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"The length of the event is: "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("length_hour"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '":"'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("length_minute"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '"."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n")
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
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
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
    }, 8, ["showAfter"]),
    _cache[259] || (_cache[259] = createBaseVNode(
      "h3",
      {
        id: "problem-0-6-lengths-of-events-seconds",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#problem-0-6-lengths-of-events-seconds",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Problem 0.6: Lengths of events (seconds)")
      ],
      -1
      /* HOISTED */
    )),
    _cache[260] || (_cache[260] = createBaseVNode(
      "p",
      null,
      "This problem is a continuation of Problem 0.6. This time the start time and end time in the program are not only expressed in hours and minutes, but also seconds. To solve this problem, you need to do something similar to what you did in Problem 0.6, but now you have 3 units (hours, minutes and seconds) instead of just 2.",
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[96] || (_cache[96] = createTextVNode("When you are done, the input/output of the program should be as shown in ")),
      createVNode(_component_FigureNumber),
      _cache[97] || (_cache[97] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "The input to and output from the program." }, {
      default: withCtx(() => _cache[98] || (_cache[98] = [
        createBaseVNode(
          "div",
          {
            class: "language-text line-numbers-mode",
            "data-ext": "text"
          },
          [
            createBaseVNode("pre", { class: "language-text" }, [
              createBaseVNode("code", null, "This program computes the length of an event.\nEnter start hour of the event: 10\nEnter start minute of the event: 45\nEnter start second of the event: 30\nEnter end hour of the event: 12\nEnter end minute of the event: 15\nEnter end second of the event: 15\nThe length of the event is: 1:29:45.\n")
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
    _cache[261] || (_cache[261] = createBaseVNode(
      "h4",
      {
        id: "sample-answer-5",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#sample-answer-5",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Sample answer")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_SampleAnswer, {
      showAfter: _ctx.$frontmatter.exercise0ShowAfter
    }, {
      default: withCtx(() => _cache[99] || (_cache[99] = [
        createBaseVNode(
          "div",
          {
            class: "language-python line-numbers-mode",
            "data-ext": "py"
          },
          [
            createBaseVNode("pre", { class: "language-python" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"This program computes the length of an event."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n\nstart_hour "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "int"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "input"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Enter start hour of the event: "'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\nstart_minute "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "int"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "input"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Enter start minute of the event: "'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\nstart_second "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "int"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "input"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Enter start second of the event: "'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\nend_hour "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "int"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "input"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Enter end hour of the event: "'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\nend_minute "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "int"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "input"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Enter end minute of the event: "'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\nend_second "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "int"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "input"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Enter end second of the event: "'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n\nstart_seconds "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" start_second "),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(" start_minute"),
                createBaseVNode("span", { class: "token operator" }, "*"),
                createBaseVNode("span", { class: "token number" }, "60"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(" start_hour"),
                createBaseVNode("span", { class: "token operator" }, "*"),
                createBaseVNode("span", { class: "token number" }, "60"),
                createBaseVNode("span", { class: "token operator" }, "*"),
                createBaseVNode("span", { class: "token number" }, "60"),
                createTextVNode("\nend_seconds "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" end_second "),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(" end_minute"),
                createBaseVNode("span", { class: "token operator" }, "*"),
                createBaseVNode("span", { class: "token number" }, "60"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(" end_hour"),
                createBaseVNode("span", { class: "token operator" }, "*"),
                createBaseVNode("span", { class: "token number" }, "60"),
                createBaseVNode("span", { class: "token operator" }, "*"),
                createBaseVNode("span", { class: "token number" }, "60"),
                createTextVNode("\n\nseconds "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" end_seconds "),
                createBaseVNode("span", { class: "token operator" }, "-"),
                createTextVNode(" start_seconds\n\nlength_hour "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" seconds "),
                createBaseVNode("span", { class: "token operator" }, "//"),
                createTextVNode(),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "60"),
                createBaseVNode("span", { class: "token operator" }, "*"),
                createBaseVNode("span", { class: "token number" }, "60"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n\nremaining_seconds "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" seconds "),
                createBaseVNode("span", { class: "token operator" }, "-"),
                createTextVNode(" length_hour"),
                createBaseVNode("span", { class: "token operator" }, "*"),
                createBaseVNode("span", { class: "token number" }, "60"),
                createBaseVNode("span", { class: "token operator" }, "*"),
                createBaseVNode("span", { class: "token number" }, "60"),
                createTextVNode("\n\nlength_minute "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" remaining_seconds "),
                createBaseVNode("span", { class: "token operator" }, "//"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "60"),
                createTextVNode("\n\nlength_second "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" remaining_seconds "),
                createBaseVNode("span", { class: "token operator" }, "-"),
                createTextVNode(" length_minute"),
                createBaseVNode("span", { class: "token operator" }, "*"),
                createBaseVNode("span", { class: "token number" }, "60"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"The length of the event is: "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("length_hour"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '":"'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("length_minute"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '":"'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("length_second"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '"."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n")
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
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
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
    }, 8, ["showAfter"]),
    _cache[262] || (_cache[262] = createBaseVNode(
      "h2",
      {
        id: "exercise-1-loops",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#exercise-1-loops",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Exercise 1: Loops")
      ],
      -1
      /* HOISTED */
    )),
    _cache[263] || (_cache[263] = createBaseVNode(
      "p",
      null,
      "Before you start working on these exercises, you are recommended to watch the following recorded video lectures:",
      -1
      /* HOISTED */
    )),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/python-basics-part-2/" }, {
          default: withCtx(() => _cache[100] || (_cache[100] = [
            createTextVNode("Python Basics - Part 2")
          ])),
          _: 1
          /* STABLE */
        })
      ])
    ]),
    _cache[264] || (_cache[264] = createBaseVNode(
      "hr",
      null,
      null,
      -1
      /* HOISTED */
    )),
    _cache[265] || (_cache[265] = createBaseVNode(
      "p",
      null,
      "In this exercise you will practice on using the following in Python:",
      -1
      /* HOISTED */
    )),
    _cache[266] || (_cache[266] = createBaseVNode(
      "ul",
      null,
      [
        createBaseVNode("li", null, "For loops"),
        createBaseVNode("li", null, "Ranges")
      ],
      -1
      /* HOISTED */
    )),
    _cache[267] || (_cache[267] = createBaseVNode(
      "h3",
      {
        id: "problem-1-1-repeated-statements",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#problem-1-1-repeated-statements",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Problem 1.1: Repeated statements")
      ],
      -1
      /* HOISTED */
    )),
    _cache[268] || (_cache[268] = createBaseVNode(
      "p",
      null,
      "In Problem 0.2 you created a program that asked the user to enter the radius of a circle and which then computed and printed the circumference of it. This exercise is about doing the same thing three times. Do not use any loop, but simply copy-paste the statements from your previous solution.",
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[101] || (_cache[101] = createTextVNode("When you are done, the input/output of the program should be as shown in ")),
      createVNode(_component_FigureNumber),
      _cache[102] || (_cache[102] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "The input to and output from the program." }, {
      default: withCtx(() => _cache[103] || (_cache[103] = [
        createBaseVNode(
          "div",
          {
            class: "language-text line-numbers-mode",
            "data-ext": "text"
          },
          [
            createBaseVNode("pre", { class: "language-text" }, [
              createBaseVNode("code", null, "This program computes the circumferences of circles.\nEnter the radius of the circle: 9\nThe circumference of a circle with radius 9 is 56.52.\nEnter the radius of the circle: 3\nThe circumference of a circle with radius 3 is 18.84.\nEnter the radius of the circle: 5\nThe circumference of a circle with radius 5 is 31.4.\n")
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
    _cache[269] || (_cache[269] = createBaseVNode(
      "h4",
      {
        id: "sample-answer-6",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#sample-answer-6",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Sample answer")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_SampleAnswer, {
      showAfter: _ctx.$frontmatter.exercise1ShowAfter
    }, {
      default: withCtx(() => _cache[104] || (_cache[104] = [
        createBaseVNode(
          "div",
          {
            class: "language-python line-numbers-mode",
            "data-ext": "py"
          },
          [
            createBaseVNode("pre", { class: "language-python" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"This program computes the circumference of circles."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n\npi "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "3.14"),
                createTextVNode("\n\nradius "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "float"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "input"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Enter the radius of the circle: "'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\ncircumference "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "2"),
                createBaseVNode("span", { class: "token operator" }, "*"),
                createTextVNode("radius"),
                createBaseVNode("span", { class: "token operator" }, "*"),
                createTextVNode("pi\n"),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"The circumference of a circle with radius "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("radius"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '" is "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("circumference"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '"."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n\nradius "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "float"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "input"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Enter the radius of the circle: "'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\ncircumference "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "2"),
                createBaseVNode("span", { class: "token operator" }, "*"),
                createTextVNode("radius"),
                createBaseVNode("span", { class: "token operator" }, "*"),
                createTextVNode("pi\n"),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"The circumference of a circle with radius "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("radius"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '" is "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("circumference"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '"."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n\nradius "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "float"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "input"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Enter the radius of the circle: "'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\ncircumference "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "2"),
                createBaseVNode("span", { class: "token operator" }, "*"),
                createTextVNode("radius"),
                createBaseVNode("span", { class: "token operator" }, "*"),
                createTextVNode("pi\n"),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"The circumference of a circle with radius "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("radius"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '" is "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("circumference"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '"."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n\n")
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
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
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
    }, 8, ["showAfter"]),
    _cache[270] || (_cache[270] = createStaticVNode('<h3 id="problem-1-2-repeated-execution" tabindex="-1"><a class="header-anchor" href="#problem-1-2-repeated-execution" aria-hidden="true">#</a> Problem 1.2: Repeated execution</h3><p>Looking at your code from Problem 1.1, you probably realize that you repeatedly did the same thing three times. When you repeatedly do the same thing many times, you should rather use a loop to repeatedly execute the same statements multiple times instead of copy-pasting the statements multiple times, because copy-pasting code is usually bad.</p><p>So, why is it bad to copy-paste code? Well, if you need to change the code in the future, you need to change it at multiple places. For example, now your program might produce output in English, but maybe you want it to produce output in Swedish in the future, and if you have copy-pasted your code, you have many lines of code to translate. Or maybe the code you copy-pasted contained a bug (didn&#39;t function properly). Then when the bug is discovered you need to change code at many different places to eliminate the bug.</p><p>So, instead of copy-pasting code you can use a loop to tell Python to repeatedly execute the same lines of code many times. One type of loops you can use is the <code>for</code>, which iterates over the values in a sequence of some kind. One type of sequence in Python is a list, which can be created using an expression like <code>[4, 7, 2, 5]</code> (a list containing the values <code>4</code>, <code>7</code>, <code>2</code> and <code>5</code>). A for loop iterating over the values in this list would do 4 iterations (since the list contains 4 values).</p><p>Implement the program in Problem 1.1 using a for loop. To make the for loop iterate 3 times, use a list containing 3 values (we don&#39;t really care about what those values are since we won&#39;t use them in the iterations).</p>', 5)),
    createBaseVNode("p", null, [
      _cache[105] || (_cache[105] = createTextVNode("When you're done, your program should function the same way as before (as described in ")),
      createVNode(_component_FigureNumber, { previous: "" }),
      _cache[106] || (_cache[106] = createTextVNode(" above)."))
    ]),
    _cache[271] || (_cache[271] = createBaseVNode(
      "h4",
      {
        id: "sample-answer-7",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#sample-answer-7",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Sample answer")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_SampleAnswer, {
      showAfter: _ctx.$frontmatter.exercise1ShowAfter
    }, {
      default: withCtx(() => _cache[107] || (_cache[107] = [
        createBaseVNode(
          "div",
          {
            class: "language-python line-numbers-mode",
            "data-ext": "py"
          },
          [
            createBaseVNode("pre", { class: "language-python" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"This program computes the circumference of circles."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n\npi "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "3.14"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "for"),
                createTextVNode(" whatever "),
                createBaseVNode("span", { class: "token keyword" }, "in"),
                createTextVNode(),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createBaseVNode("span", { class: "token string" }, '"three"'),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"random"'),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"values"'),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n    radius "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "float"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "input"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Enter the radius of the circle: "'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n    circumference "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "2"),
                createBaseVNode("span", { class: "token operator" }, "*"),
                createTextVNode("radius"),
                createBaseVNode("span", { class: "token operator" }, "*"),
                createTextVNode("pi\n    "),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"The circumference of a circle with radius "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("radius"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '" is "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("circumference"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '"."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n")
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
    }, 8, ["showAfter"]),
    _cache[272] || (_cache[272] = createStaticVNode('<h3 id="problem-1-3-dynamic-number-of-iterations" tabindex="-1"><a class="header-anchor" href="#problem-1-3-dynamic-number-of-iterations" aria-hidden="true">#</a> Problem 1.3: Dynamic number of iterations</h3><p>The program in Problem 1.2 works great, but it always asks the user for the radius of 3 different circles. What if the user needs just 2? Or maybe 7? Or 20? For these cases we need the user to first tell the program how many times the loop should iterate.</p><p>So, the user might tell us that we need to iterate 4 times. How do we create a sequence that contains 4 values we can iterate over? We can use the <code>range()</code> function for that. When we call <code>range()</code> we can pass it the number 4 (i.e. <code>range(4)</code>), and it will return back a sequence to us with 4 values (the values will be <code>0</code>, <code>1</code>, <code>2</code> and <code>3</code>, but we still don&#39;t really care about what they values are, we just want 4 values).</p><p>The sequence we get back from the <code>range()</code> is what we will use to iterate over in our for loop.</p>', 4)),
    createBaseVNode("p", null, [
      _cache[108] || (_cache[108] = createTextVNode("When you are done, the input/output of the program should be as shown in ")),
      createVNode(_component_FigureNumber),
      _cache[109] || (_cache[109] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "The input to and output from the program." }, {
      default: withCtx(() => _cache[110] || (_cache[110] = [
        createBaseVNode(
          "div",
          {
            class: "language-text line-numbers-mode",
            "data-ext": "text"
          },
          [
            createBaseVNode("pre", { class: "language-text" }, [
              createBaseVNode("code", null, "This program computes the circumferences of some circles.\nEnter the number of circumferences you want to compute: 4\nEnter the radius of the circle: 9\nThe circumference of a circle with radius 9 is 56.52.\nEnter the radius of the circle: 3\nThe circumference of a circle with radius 3 is 18.84.\nEnter the radius of the circle: 5\nThe circumference of a circle with radius 5 is 31.4.\nEnter the radius of the circle: 3\nThe circumference of a circle with radius 3 is 18.84.\n")
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
    _cache[273] || (_cache[273] = createStaticVNode('<div class="custom-container warning"><p class="custom-container-title">Note!</p><p>You don&#39;t need to have any error handling; you can expect the user to actually enter an integer when she&#39;s asked to enter an integer.</p></div><div class="custom-container tip"><p class="custom-container-title">Tips!</p><p>Sample usage of the <code>range()</code> function:</p><ul><li><code>range(0)</code> --&gt; An empty sequence</li><li><code>range(3)</code> --&gt; A sequence with <code>0</code>, <code>1</code> and <code>2</code></li><li><code>range(5)</code> --&gt; A sequence with <code>0</code>, <code>1</code>, <code>2</code>, <code>3</code> and <code>4</code></li></ul></div><h4 id="sample-answer-8" tabindex="-1"><a class="header-anchor" href="#sample-answer-8" aria-hidden="true">#</a> Sample answer</h4>', 3)),
    createVNode(_component_SampleAnswer, {
      showAfter: _ctx.$frontmatter.exercise1ShowAfter
    }, {
      default: withCtx(() => _cache[111] || (_cache[111] = [
        createBaseVNode(
          "div",
          {
            class: "language-python line-numbers-mode",
            "data-ext": "py"
          },
          [
            createBaseVNode("pre", { class: "language-python" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"This program computes the circumference of circles."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n\npi "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "3.14"),
                createTextVNode("\n\nnumber_of_circumferences "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "int"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "input"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Enter the number of circumferences you want to compute: "'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "for"),
                createTextVNode(" whatever "),
                createBaseVNode("span", { class: "token keyword" }, "in"),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "range"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("number_of_circumferences"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n    radius "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "float"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "input"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Enter the radius of the circle: "'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n    circumference "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "2"),
                createBaseVNode("span", { class: "token operator" }, "*"),
                createTextVNode("radius"),
                createBaseVNode("span", { class: "token operator" }, "*"),
                createTextVNode("pi\n    "),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"The circumference of a circle with radius "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("radius"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '" is "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("circumference"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '"."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n")
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
    }, 8, ["showAfter"]),
    _cache[274] || (_cache[274] = createStaticVNode('<h3 id="problem-1-4-computing-a-sum-the-bad-way" tabindex="-1"><a class="header-anchor" href="#problem-1-4-computing-a-sum-the-bad-way" aria-hidden="true">#</a> Problem 1.4: Computing a sum the bad way</h3><p>Create a program that computes and prints the sum of the integers between 0 and 15 without a loop. Do something like this:</p><ol><li>Create a variable starting on <code>0</code></li><li>Write a statement that increments this variable by <code>0</code></li><li>Write a statement that increments this variable by <code>1</code></li><li>Write a statement that increments this variable by <code>2</code></li><li>...</li><li>Write a statement that increments this variable by <code>15</code></li></ol><p>After that you have computed the sum of the integers between 0 and 15 and can print it on the screen.</p>', 4)),
    createBaseVNode("p", null, [
      _cache[112] || (_cache[112] = createTextVNode("When you are done, the input/output of the program should be as shown in ")),
      createVNode(_component_FigureNumber),
      _cache[113] || (_cache[113] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "The input to and output from the program." }, {
      default: withCtx(() => _cache[114] || (_cache[114] = [
        createBaseVNode(
          "div",
          {
            class: "language-text line-numbers-mode",
            "data-ext": "text"
          },
          [
            createBaseVNode("pre", { class: "language-text" }, [
              createBaseVNode("code", null, "This program computes the sum of the integers between 0 and 15.\nThe sum of the integers between 0 and 15 is 120.\n")
            ]),
            createBaseVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true"
            }, [
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
    _cache[275] || (_cache[275] = createBaseVNode(
      "h4",
      {
        id: "sample-answer-9",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#sample-answer-9",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Sample answer")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_SampleAnswer, {
      showAfter: _ctx.$frontmatter.exercise1ShowAfter
    }, {
      default: withCtx(() => _cache[115] || (_cache[115] = [
        createBaseVNode(
          "div",
          {
            class: "language-python line-numbers-mode",
            "data-ext": "py"
          },
          [
            createBaseVNode("pre", { class: "language-python" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"This program computes the sum of the integers between 0 and 15."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "0"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "1"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "2"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "3"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "4"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "5"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "6"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "7"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "8"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "9"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "10"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "11"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "12"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "13"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "14"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "15"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"The sum of the integers between 0 and 15 is "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '"."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n")
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
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
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
    }, 8, ["showAfter"]),
    _cache[276] || (_cache[276] = createStaticVNode('<h3 id="problem-1-5-computing-a-sum-the-good-way" tabindex="-1"><a class="header-anchor" href="#problem-1-5-computing-a-sum-the-good-way" aria-hidden="true">#</a> Problem 1.5: Computing a sum the good way</h3><p>The program in the previous exercise contains a lot of statements looking like this:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>the_variable <span class="token operator">=</span> the_variable <span class="token operator">+</span> x\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Where <code>x</code> is an integer between 0 and 15. Instead of having this statement repeated over and over again one can just use it in a loop that repeatedly executes the statement. You just need to make sure that the loop iterates over the values <code>0</code>, <code>1</code>, <code>2</code>, ... <code>14</code> and <code>15</code>(use the <code>range()</code> function to create a sequence containing these values, or simply create a new list containing them), and for each iteration add the current value we are iterating over to <code>the_variable</code>.</p><h4 id="sample-answer-10" tabindex="-1"><a class="header-anchor" href="#sample-answer-10" aria-hidden="true">#</a> Sample answer</h4>', 5)),
    createVNode(_component_SampleAnswer, {
      showAfter: _ctx.$frontmatter.exercise1ShowAfter
    }, {
      default: withCtx(() => _cache[116] || (_cache[116] = [
        createBaseVNode(
          "div",
          {
            class: "language-python line-numbers-mode",
            "data-ext": "py"
          },
          [
            createBaseVNode("pre", { class: "language-python" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"This program computes the sum of the integers between 0 and 15."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n\nlast_term "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "15"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "0"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "for"),
                createTextVNode(" i "),
                createBaseVNode("span", { class: "token keyword" }, "in"),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "range"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("last_term "),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "1"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(" i\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"The sum of the integers between 0 and "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("last_term"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '" is "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '"."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n")
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
    }, 8, ["showAfter"]),
    _cache[277] || (_cache[277] = createBaseVNode(
      "h3",
      {
        id: "problem-1-6-computing-a-sum",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#problem-1-6-computing-a-sum",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Problem 1.6: Computing a sum")
      ],
      -1
      /* HOISTED */
    )),
    _cache[278] || (_cache[278] = createBaseVNode(
      "p",
      null,
      "The program in Problem 1.5 works great, but it always computes the sum of the integers between 0 and 15. What if the user wants to compute the sum of the integers between 0 and 10? Or 0 and 90?",
      -1
      /* HOISTED */
    )),
    _cache[279] || (_cache[279] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("Change the program from the previous exercise to first ask the user which the highest number in the sum should be. Then make use of this number when you call the "),
        createBaseVNode("code", null, "range()"),
        createTextVNode(" function, so the sequence of values you get back contains all integers between 0 and that number (including).")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[117] || (_cache[117] = createTextVNode("When you are done, the input/output of the program should be as shown in ")),
      createVNode(_component_FigureNumber),
      _cache[118] || (_cache[118] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "The input to and output from the program." }, {
      default: withCtx(() => _cache[119] || (_cache[119] = [
        createBaseVNode(
          "div",
          {
            class: "language-text line-numbers-mode",
            "data-ext": "text"
          },
          [
            createBaseVNode("pre", { class: "language-text" }, [
              createBaseVNode("code", null, "This program computes the sum of the integers between 0 and another integer.\nEnter the other integer: 5\nThe sum of the integers between 0 and 5 is 15.\n")
            ]),
            createBaseVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true"
            }, [
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
    _cache[280] || (_cache[280] = createBaseVNode(
      "div",
      { class: "custom-container warning" },
      [
        createBaseVNode("p", { class: "custom-container-title" }, "Note!"),
        createBaseVNode("p", null, "You don't need to have any error handling; you can expect the user to actually enter an integer when she's asked to enter an integer.")
      ],
      -1
      /* HOISTED */
    )),
    _cache[281] || (_cache[281] = createBaseVNode(
      "h4",
      {
        id: "sample-answer-11",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#sample-answer-11",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Sample answer")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_SampleAnswer, {
      showAfter: _ctx.$frontmatter.exercise1ShowAfter
    }, {
      default: withCtx(() => _cache[120] || (_cache[120] = [
        createBaseVNode(
          "div",
          {
            class: "language-python line-numbers-mode",
            "data-ext": "py"
          },
          [
            createBaseVNode("pre", { class: "language-python" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"This program computes the sum of the integers between 0 and another integer."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n\nlast_term "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "int"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "input"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Enter the other integer: "'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "0"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "for"),
                createTextVNode(" i "),
                createBaseVNode("span", { class: "token keyword" }, "in"),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "range"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("last_term "),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "1"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(" i\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"The sum of the integers between "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("first_term"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '" and "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("last_term"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '" is "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '"."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n")
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
    }, 8, ["showAfter"]),
    _cache[282] || (_cache[282] = createStaticVNode('<h3 id="problem-1-7-computing-a-harder-sum" tabindex="-1"><a class="header-anchor" href="#problem-1-7-computing-a-harder-sum" aria-hidden="true">#</a> Problem 1.7: Computing a harder sum</h3><p>The program in Problem 1.6 lets the user enter the upper bound for the sum, and the lower bound is always 0. What if the user wants to use something else than 0? Such as computing the sum of the integers between 10 and 20? Or 3 and 64?</p><p>Change the program from the previous exercise to first ask the user which the lowest number in the sum should be, and then asks the user which the highest number in the sum should be. Then make use of these numbers when you call the <code>range()</code> function, so the sequence of numbers you get back contains the integers between the lowest numbers and the highest number (including) the user entered (you need to pass two numbers to the range() function).</p><div class="custom-container warning"><p class="custom-container-title">Note!</p><p>You don&#39;t need to have any error handling; you can expect the user to actually enter an integer when she&#39;s asked to enter an integer.</p></div><div class="custom-container tip"><p class="custom-container-title">Tips!</p><p>Sample usage of the <code>range()</code> function:</p><ul><li><code>range(0, 3)</code> --&gt; A sequence with <code>0</code>, <code>1</code> and <code>2</code></li><li><code>range(3, 6)</code> --&gt; A sequence with <code>3</code>, <code>4</code>, and <code>5</code></li><li><code>range(1, 5)</code> --&gt; A sequence with <code>1</code>, <code>2</code>, <code>3</code>, and <code>4</code></li></ul></div><h4 id="sample-answer-12" tabindex="-1"><a class="header-anchor" href="#sample-answer-12" aria-hidden="true">#</a> Sample answer</h4>', 6)),
    createVNode(_component_SampleAnswer, {
      showAfter: _ctx.$frontmatter.exercise1ShowAfter
    }, {
      default: withCtx(() => _cache[121] || (_cache[121] = [
        createBaseVNode(
          "div",
          {
            class: "language-python line-numbers-mode",
            "data-ext": "py"
          },
          [
            createBaseVNode("pre", { class: "language-python" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"This program computes the sum of the integers between two integers."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n\nfirst_term "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "int"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "input"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Enter the first integer: "'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\nlast_term "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "int"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "input"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Enter the last integer: "'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "0"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "for"),
                createTextVNode(" i "),
                createBaseVNode("span", { class: "token keyword" }, "in"),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "range"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("first_term"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(" last_term "),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "1"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(" i\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"The sum of the integers between "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("first_term"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '" and "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("last_term"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '" is "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '"."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n")
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
    }, 8, ["showAfter"]),
    _cache[283] || (_cache[283] = createStaticVNode('<h3 id="problem-1-8-computing-a-harder-sum-again" tabindex="-1"><a class="header-anchor" href="#problem-1-8-computing-a-harder-sum-again" aria-hidden="true">#</a> Problem 1.8: Computing a harder sum (again)</h3><p>This problem is about creating a program similar to the one in Problem 1.7, but you may only pass one number to the <code>range()</code> function. This means that the sequence with numbers you get back always will start on 0, so, you need to change other parts of your program to make it work as expected.</p><div class="custom-container warning"><p class="custom-container-title">Note!</p><p>The solution you end up in for this problem is worse than the solution you got in Problem 1.7, but it serves as a good example of how programming/problem solving works: there exists many different ways to solve a problem!</p></div><h4 id="sample-answer-13" tabindex="-1"><a class="header-anchor" href="#sample-answer-13" aria-hidden="true">#</a> Sample answer</h4>', 4)),
    createVNode(_component_SampleAnswer, {
      showAfter: _ctx.$frontmatter.exercise1ShowAfter
    }, {
      default: withCtx(() => _cache[122] || (_cache[122] = [
        createBaseVNode(
          "div",
          {
            class: "language-python line-numbers-mode",
            "data-ext": "py"
          },
          [
            createBaseVNode("pre", { class: "language-python" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"This program computes the sum of the integers between two integers."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n\nfirst_term "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "int"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "input"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Enter the first integer: "'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\nlast_term "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "int"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "input"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Enter the last integer: "'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "0"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "for"),
                createTextVNode(" i "),
                createBaseVNode("span", { class: "token keyword" }, "in"),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "range"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("last_term "),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "1"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(" i\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "for"),
                createTextVNode(" i "),
                createBaseVNode("span", { class: "token keyword" }, "in"),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "range"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("first_term"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "-"),
                createTextVNode(" i\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"The sum of the integers between "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("first_term"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '" and "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("last_term"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '" is "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '"."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n")
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
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
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
    }, 8, ["showAfter"]),
    _cache[284] || (_cache[284] = createBaseVNode(
      "h2",
      {
        id: "exercise-2-functions",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#exercise-2-functions",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Exercise 2: Functions")
      ],
      -1
      /* HOISTED */
    )),
    _cache[285] || (_cache[285] = createBaseVNode(
      "p",
      null,
      "Before you start working on these exercises, you are recommended to watch the following recorded video lectures:",
      -1
      /* HOISTED */
    )),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/python-modules/" }, {
          default: withCtx(() => _cache[123] || (_cache[123] = [
            createTextVNode("Python Modules")
          ])),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/python-functions/" }, {
          default: withCtx(() => _cache[124] || (_cache[124] = [
            createTextVNode("Python Functions")
          ])),
          _: 1
          /* STABLE */
        })
      ])
    ]),
    _cache[286] || (_cache[286] = createStaticVNode('<hr><p>In this exercise you will practice on using the following in Python:</p><ul><li>Functions</li><li>Modules</li></ul><h3 id="problem-2-1-using-a-module" tabindex="-1"><a class="header-anchor" href="#problem-2-1-using-a-module" aria-hidden="true">#</a> Problem 2.1: Using a module</h3><p>In Problem 1.3 you created a program that users could use to compute the circumferences of circles. As the value of <code>𝜋</code> you used 3.14. It might be fine to use this approximation of <code>𝜋</code> in some cases, but it is usually better to use more decimal numbers. But you don&#39;t know the rest of the decimals by heart, do you?</p><p>The <code>math</code> module in Python&#39;s standard library contains the variable <code>𝜋</code> which stores the number <code>𝜋</code> with many decimal numbers. Change your program to first import the <code>math</code> module, and then use the <code>pi</code> variable from that module as the value of <code>𝜋</code> in your computations.</p>', 6)),
    createBaseVNode("div", _hoisted_4, [
      _cache[130] || (_cache[130] = createBaseVNode(
        "p",
        { class: "custom-container-title" },
        "Learn more",
        -1
        /* HOISTED */
      )),
      createBaseVNode("p", null, [
        _cache[126] || (_cache[126] = createTextVNode("The curios ones can learn more about the ")),
        _cache[127] || (_cache[127] = createBaseVNode(
          "code",
          null,
          "math",
          -1
          /* HOISTED */
        )),
        _cache[128] || (_cache[128] = createTextVNode(" module in the documentation at ")),
        createBaseVNode("a", _hoisted_5, [
          _cache[125] || (_cache[125] = createTextVNode("https://docs.python.org/3/library/math.html")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[129] || (_cache[129] = createTextVNode("."))
      ])
    ]),
    _cache[287] || (_cache[287] = createBaseVNode(
      "h4",
      {
        id: "sample-answer-14",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#sample-answer-14",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Sample answer")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_SampleAnswer, {
      showAfter: _ctx.$frontmatter.exercise2ShowAfter
    }, {
      default: withCtx(() => _cache[131] || (_cache[131] = [
        createBaseVNode(
          "div",
          {
            class: "language-python line-numbers-mode",
            "data-ext": "py"
          },
          [
            createBaseVNode("pre", { class: "language-python" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token keyword" }, "import"),
                createTextVNode(" math\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"This program computes the circumference of circles."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "for"),
                createTextVNode(" whatever "),
                createBaseVNode("span", { class: "token keyword" }, "in"),
                createTextVNode(),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createBaseVNode("span", { class: "token string" }, '"three"'),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"random"'),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"values"'),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n    radius "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "float"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "input"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Enter the radius of the circle: "'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n    circumference "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "2"),
                createBaseVNode("span", { class: "token operator" }, "*"),
                createTextVNode("radius"),
                createBaseVNode("span", { class: "token operator" }, "*"),
                createTextVNode("math"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("pi\n    "),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"The circumference of a circle with radius "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("radius"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '" is "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("circumference"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '"."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n")
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
    }, 8, ["showAfter"]),
    _cache[288] || (_cache[288] = createStaticVNode('<h3 id="problem-2-2-a-random-time" tabindex="-1"><a class="header-anchor" href="#problem-2-2-a-random-time" aria-hidden="true">#</a> Problem 2.2: A random time</h3><p>The <code>random</code> module contains the <code>randint()</code> function one can call to get back a random integer in a specific interval. Your task is to create a program that displays a random time of the day in the <code>HH:MM:SS</code> format, such as <code>23:42:12</code>.</p><div class="custom-container warning"><p class="custom-container-title">Note!</p><p>If a number is lower than 10 you don&#39;t need to print a zero before it, e.g. displaying the time <code>4:5:6</code> is fine.</p></div>', 3)),
    createBaseVNode("div", _hoisted_6, [
      _cache[137] || (_cache[137] = createBaseVNode(
        "p",
        { class: "custom-container-title" },
        "Learn more",
        -1
        /* HOISTED */
      )),
      createBaseVNode("p", null, [
        _cache[133] || (_cache[133] = createTextVNode("The curios ones can learn more about the ")),
        _cache[134] || (_cache[134] = createBaseVNode(
          "code",
          null,
          "random",
          -1
          /* HOISTED */
        )),
        _cache[135] || (_cache[135] = createTextVNode(" module in the documentation at ")),
        createBaseVNode("a", _hoisted_7, [
          _cache[132] || (_cache[132] = createTextVNode("https://docs.python.org/3/library/random.html")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[136] || (_cache[136] = createTextVNode("."))
      ])
    ]),
    _cache[289] || (_cache[289] = createBaseVNode(
      "h4",
      {
        id: "sample-answer-15",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#sample-answer-15",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Sample answer")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_SampleAnswer, {
      showAfter: _ctx.$frontmatter.exercise2ShowAfter
    }, {
      default: withCtx(() => _cache[138] || (_cache[138] = [
        createBaseVNode(
          "div",
          {
            class: "language-python line-numbers-mode",
            "data-ext": "py"
          },
          [
            createBaseVNode("pre", { class: "language-python" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token keyword" }, "import"),
                createTextVNode(" random\n\nhour "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" random"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("randint"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "0"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "23"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\nminute "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" random"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("randint"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "0"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "59"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\nsecond "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" random"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("randint"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "0"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "59"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("hour"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '":"'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("minute"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '":"'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("second"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n")
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
    }, 8, ["showAfter"]),
    _cache[290] || (_cache[290] = createStaticVNode('<h3 id="problem-2-3-many-random-integers" tabindex="-1"><a class="header-anchor" href="#problem-2-3-many-random-integers" aria-hidden="true">#</a> Problem 2.3: Many random integers</h3><p>Create a program that first asks the user to enter a positive integer. Your program should then display that many random numbers between <code>0</code> and <code>99</code>. If the user enters the integer <code>3</code>, your program might for example display the numbers <code>55</code>, <code>27</code> and <code>81</code>.</p><h4 id="sample-answer-16" tabindex="-1"><a class="header-anchor" href="#sample-answer-16" aria-hidden="true">#</a> Sample answer</h4>', 3)),
    createVNode(_component_SampleAnswer, {
      showAfter: _ctx.$frontmatter.exercise2ShowAfter
    }, {
      default: withCtx(() => _cache[139] || (_cache[139] = [
        createBaseVNode(
          "div",
          {
            class: "language-python line-numbers-mode",
            "data-ext": "py"
          },
          [
            createBaseVNode("pre", { class: "language-python" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token keyword" }, "import"),
                createTextVNode(" random\n\nnumber_of_random_numbers "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "int"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "input"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Enter number of random numbers: "'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "for"),
                createTextVNode(" i "),
                createBaseVNode("span", { class: "token keyword" }, "in"),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "range"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("number_of_random_numbers"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n    random_number "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" random"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("randint"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "0"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "99"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("random_number"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n")
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
    }, 8, ["showAfter"]),
    _cache[291] || (_cache[291] = createBaseVNode(
      "h3",
      {
        id: "problem-2-4-content-of-folder",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#problem-2-4-content-of-folder",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Problem 2.4: Content of folder")
      ],
      -1
      /* HOISTED */
    )),
    _cache[292] || (_cache[292] = createBaseVNode(
      "p",
      null,
      [
        createTextVNode("The "),
        createBaseVNode("code", null, "os"),
        createTextVNode(" module contains the function "),
        createBaseVNode("code", null, "listdir()"),
        createTextVNode(" which returns back a list with the names of files and folders in the folder you pass to it (the path). Your task is to create a program that asks the user to enter an absolute path to a folder (e.g. "),
        createBaseVNode("code", null, "C:\\Users\\alice\\projects"),
        createTextVNode("), and then your program should display the names of all the files and folders in that folder.")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("div", _hoisted_8, [
      _cache[145] || (_cache[145] = createBaseVNode(
        "p",
        { class: "custom-container-title" },
        "Learn more",
        -1
        /* HOISTED */
      )),
      createBaseVNode("p", null, [
        _cache[141] || (_cache[141] = createTextVNode("The curios ones can learn more about the ")),
        _cache[142] || (_cache[142] = createBaseVNode(
          "code",
          null,
          "os",
          -1
          /* HOISTED */
        )),
        _cache[143] || (_cache[143] = createTextVNode(" module in the documentation at ")),
        createBaseVNode("a", _hoisted_9, [
          _cache[140] || (_cache[140] = createTextVNode("https://docs.python.org/3/library/os.html")),
          createVNode(_component_ExternalLinkIcon)
        ]),
        _cache[144] || (_cache[144] = createTextVNode("."))
      ])
    ]),
    _cache[293] || (_cache[293] = createBaseVNode(
      "h4",
      {
        id: "sample-answer-17",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#sample-answer-17",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Sample answer")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_SampleAnswer, {
      showAfter: _ctx.$frontmatter.exercise2ShowAfter
    }, {
      default: withCtx(() => _cache[146] || (_cache[146] = [
        createBaseVNode(
          "div",
          {
            class: "language-python line-numbers-mode",
            "data-ext": "py"
          },
          [
            createBaseVNode("pre", { class: "language-python" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token keyword" }, "import"),
                createTextVNode(" os\n\npath_to_folder "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "input"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Enter path: "'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n\nentries "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" os"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("listdir"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("path_to_folder"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "for"),
                createTextVNode(" entry "),
                createBaseVNode("span", { class: "token keyword" }, "in"),
                createTextVNode(" entries"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("entry"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n")
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
    }, 8, ["showAfter"]),
    _cache[294] || (_cache[294] = createStaticVNode('<h3 id="problem-2-5-introducing-functions" tabindex="-1"><a class="header-anchor" href="#problem-2-5-introducing-functions" aria-hidden="true">#</a> Problem 2.5: Introducing functions</h3><p>If you have the code below to compute the average value of two numbers:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>first_average <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">+</span> <span class="token number">6</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>And then you later need to compute the average value of two other numbers:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>second_average <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token number">8</span> <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">/</span> <span class="token number">2</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Then you have kind of copy-pasted your code and just changed the name of the variable and the numbers. This is usually bad practice, because if the code you copy-pasted contained an error then you copy-pasted the error, and it now appears twice in your code. Even if you discover and correct the error at one place, it still exists at the other place.</p>', 6)),
    createBaseVNode("p", null, [
      _cache[147] || (_cache[147] = createTextVNode("Whenever you need the use the same functionality (such as computing the average value of two numbers) multiple times it is better to create a function that contains that functionality, as shown in ")),
      createVNode(_component_FigureNumber),
      _cache[148] || (_cache[148] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "Sample implementation and usage of the average() function." }, {
      default: withCtx(() => _cache[149] || (_cache[149] = [
        createBaseVNode(
          "div",
          {
            class: "language-python line-numbers-mode",
            "data-ext": "py"
          },
          [
            createBaseVNode("pre", { class: "language-python" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token keyword" }, "def"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "average"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("x"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(" y"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("x "),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(" y"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "/"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "2"),
                createTextVNode("\n\nfirst_average "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" average"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "5"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "6"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\nsecond_average "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" average"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "8"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "3"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n")
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
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    createBaseVNode("p", null, [
      _cache[150] || (_cache[150] = createTextVNode("Another benefit with using a function is that you can write tests checking if the code in the function works correctly, as shown in ")),
      createVNode(_component_FigureNumber),
      _cache[151] || (_cache[151] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "Code testing if the average() function works as it should." }, {
      default: withCtx(() => _cache[152] || (_cache[152] = [
        createBaseVNode(
          "div",
          {
            class: "language-python line-numbers-mode",
            "data-ext": "py"
          },
          [
            createBaseVNode("pre", { class: "language-python" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("average"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "2"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "2"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "=="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "2"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token comment" }, "# Is True printed?"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("average"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "4"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "6"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "=="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "5"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token comment" }, "# Is True printed?"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("average"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token operator" }, "-"),
                createBaseVNode("span", { class: "token number" }, "10"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "10"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "=="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "0"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token comment" }, "# Is True printed?"),
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
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    createBaseVNode("p", null, [
      _cache[153] || (_cache[153] = createTextVNode("With these tests we don't need to run an entire program where the user should enter some input to test if the code works; we just need to run the program containing the code in ")),
      createVNode(_component_FigureNumber, { previous: "" }),
      _cache[154] || (_cache[154] = createTextVNode(" above, and if only ")),
      _cache[155] || (_cache[155] = createBaseVNode(
        "code",
        null,
        "True",
        -1
        /* HOISTED */
      )),
      _cache[156] || (_cache[156] = createTextVNode(" is printed on the screen we know that the function seems to work correctly."))
    ]),
    createBaseVNode("p", null, [
      _cache[157] || (_cache[157] = createTextVNode("In Problem 2.1 you created a program users can use to compute the circumference of circles. Change the implementation of the program to use a function to compute the circumference of a circle given its radius. Your function can look something like the one shown in ")),
      createVNode(_component_FigureNumber),
      _cache[158] || (_cache[158] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "Code for the get_circle_circumference() function." }, {
      default: withCtx(() => _cache[159] || (_cache[159] = [
        createBaseVNode(
          "div",
          {
            class: "language-python line-numbers-mode",
            "data-ext": "py"
          },
          [
            createBaseVNode("pre", { class: "language-python" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token keyword" }, "def"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "get_circle_circumference"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("radius"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(),
                createBaseVNode("span", { class: "token comment" }, "# ..."),
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
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[295] || (_cache[295] = createBaseVNode(
      "h4",
      {
        id: "sample-answer-18",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#sample-answer-18",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Sample answer")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_SampleAnswer, {
      showAfter: _ctx.$frontmatter.exercise2ShowAfter
    }, {
      default: withCtx(() => _cache[160] || (_cache[160] = [
        createBaseVNode(
          "div",
          {
            class: "language-python line-numbers-mode",
            "data-ext": "py"
          },
          [
            createBaseVNode("pre", { class: "language-python" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token keyword" }, "import"),
                createTextVNode(" math\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"This program computes the circumference of circles."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "def"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "get_circle_circumference"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("radius"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "2"),
                createBaseVNode("span", { class: "token operator" }, "*"),
                createTextVNode("radius"),
                createBaseVNode("span", { class: "token operator" }, "*"),
                createTextVNode("math"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("pi\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "for"),
                createTextVNode(" whatever "),
                createBaseVNode("span", { class: "token keyword" }, "in"),
                createTextVNode(),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createBaseVNode("span", { class: "token string" }, '"three"'),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"random"'),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"values"'),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n    radius "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "float"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "input"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Enter the radius of the circle: "'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n    circumference "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" get_circle_circumference"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("radius"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"The circumference of a circle with radius "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("radius"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '" is "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("circumference"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '"."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n")
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
    }, 8, ["showAfter"]),
    _cache[296] || (_cache[296] = createStaticVNode('<h3 id="problem-2-6-exponentiation" tabindex="-1"><a class="header-anchor" href="#problem-2-6-exponentiation" aria-hidden="true">#</a> Problem 2.6: Exponentiation</h3><p>Create a new program that contains a function named <code>four_to_the_power_of()</code> which receives a positive integer as argument and returns <code>4</code> to the power of that integer, e.g. <code>four_to_the_power_of(3)</code> = <code>4³</code> = <code>4*4*4</code> = <code>64</code>.</p><p>Sample usage:</p><ul><li><code>four_to_the_power_of(2)</code> → <code>4*4</code> → <code>16</code></li><li><code>four_to_the_power_of(5)</code> → <code>4*4*4*4*4</code> → <code>1024</code></li><li><code>four_to_the_power_of(1)</code> → <code>4</code></li></ul><p>Make use of a for loop in your implementation. You may not use the <code>**</code> operator, the <code>pow()</code> function nor any module.</p><p>Call your <code>four_to_the_power_of()</code> function in your main program and verify that it works correctly. You are strongly recommended to write tests checking if the function works instead of printing return values.</p><h4 id="sample-answer-19" tabindex="-1"><a class="header-anchor" href="#sample-answer-19" aria-hidden="true">#</a> Sample answer</h4>', 7)),
    createVNode(_component_SampleAnswer, {
      showAfter: _ctx.$frontmatter.exercise2ShowAfter
    }, {
      default: withCtx(() => _cache[161] || (_cache[161] = [
        createBaseVNode(
          "div",
          {
            class: "language-python line-numbers-mode",
            "data-ext": "py"
          },
          [
            createBaseVNode("pre", { class: "language-python" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token keyword" }, "def"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "four_to_the_power_of"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("exponent"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n    res "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "1"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "for"),
                createTextVNode(" i "),
                createBaseVNode("span", { class: "token keyword" }, "in"),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "range"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("exponent"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n        res "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" res "),
                createBaseVNode("span", { class: "token operator" }, "*"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "4"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(" res\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("four_to_the_power_of"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "0"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "=="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "1"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("four_to_the_power_of"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "1"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "=="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "4"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("four_to_the_power_of"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "2"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "=="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "4"),
                createBaseVNode("span", { class: "token operator" }, "*"),
                createBaseVNode("span", { class: "token number" }, "4"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("four_to_the_power_of"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "3"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "=="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "4"),
                createBaseVNode("span", { class: "token operator" }, "*"),
                createBaseVNode("span", { class: "token number" }, "4"),
                createBaseVNode("span", { class: "token operator" }, "*"),
                createBaseVNode("span", { class: "token number" }, "4"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n")
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
    }, 8, ["showAfter"]),
    _cache[297] || (_cache[297] = createStaticVNode('<h3 id="problem-2-7-computing-sums" tabindex="-1"><a class="header-anchor" href="#problem-2-7-computing-sums" aria-hidden="true">#</a> Problem 2.7: Computing sums</h3><p>Create a program that computes the sum of the following sums:</p><ul><li>The sum of the integers between <code>0</code> and <code>10</code> (including both <code>0</code> and <code>10</code>).</li><li>The sum of the integers between <code>5</code> and <code>20</code> (including both <code>5</code> and <code>20</code>.</li><li>The sum of the integers between <code>3</code> and <code>14</code> (including both <code>3</code> and <code>14</code>).</li><li>The sum of the integers <code>4</code>, <code>20</code>, <code>6</code>, <code>12</code>, <code>45</code> and <code>62</code>.</li></ul><p>In your code, try to avoid repeating the same code three times. This basically means that you need to create a function that computes the sum of a sequence of integers.</p><h4 id="sample-answer-20" tabindex="-1"><a class="header-anchor" href="#sample-answer-20" aria-hidden="true">#</a> Sample answer</h4>', 5)),
    createVNode(_component_SampleAnswer, {
      showAfter: _ctx.$frontmatter.exercise2ShowAfter
    }, {
      default: withCtx(() => _cache[162] || (_cache[162] = [
        createBaseVNode(
          "div",
          {
            class: "language-python line-numbers-mode",
            "data-ext": "py"
          },
          [
            createBaseVNode("pre", { class: "language-python" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token keyword" }, "def"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "sum"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("numbers"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "0"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "for"),
                createTextVNode(" number "),
                createBaseVNode("span", { class: "token keyword" }, "in"),
                createTextVNode(" numbers"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(" number\n    "),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode("\n\nsums "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "range"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "0"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "11"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "range"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "5"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "21"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "range"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "3"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "15"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createBaseVNode("span", { class: "token number" }, "4"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "20"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "6"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "12"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "45"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "62"),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("sums"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n")
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
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
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
    }, 8, ["showAfter"]),
    _cache[298] || (_cache[298] = createStaticVNode('<h3 id="problem-2-8-computing-other-sums" tabindex="-1"><a class="header-anchor" href="#problem-2-8-computing-other-sums" aria-hidden="true">#</a> Problem 2.8: Computing other sums</h3><p>Create a program that computes the sum of the following sums:</p><ul><li>The sum of the even integers between <code>4</code> and <code>10</code> (including both <code>4</code> and <code>10</code>).</li><li>The sum of the even integers between <code>20</code> and <code>30</code> (including both <code>20</code> and <code>30</code>).</li><li>The sum of the odd integers between <code>7</code> and <code>21</code> (including both <code>7</code> and <code>21</code>).</li><li>The sum of the odd integers between <code>31</code> and <code>59</code> (including both <code>31</code> and <code>59</code>).</li></ul><p>In your code, try to avoid repeating the same code multiple times. This basically means that you need to use a function.</p><h4 id="sample-answer-21" tabindex="-1"><a class="header-anchor" href="#sample-answer-21" aria-hidden="true">#</a> Sample answer</h4>', 5)),
    createVNode(_component_SampleAnswer, {
      showAfter: _ctx.$frontmatter.exercise2ShowAfter
    }, {
      default: withCtx(() => _cache[163] || (_cache[163] = [
        createBaseVNode(
          "div",
          {
            class: "language-python line-numbers-mode",
            "data-ext": "py"
          },
          [
            createBaseVNode("pre", { class: "language-python" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token keyword" }, "def"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "sum"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("numbers"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "0"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "for"),
                createTextVNode(" number "),
                createBaseVNode("span", { class: "token keyword" }, "in"),
                createTextVNode(" numbers"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(" number\n    "),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode("\n\nsums "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "range"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "4"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "11"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "2"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "range"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "20"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "31"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "2"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "range"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "7"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "22"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "2"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "range"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "31"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "60"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "2"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("sums"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n")
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
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
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
    }, 8, ["showAfter"]),
    _cache[299] || (_cache[299] = createStaticVNode('<h3 id="problem-2-9-computing-fun-sums" tabindex="-1"><a class="header-anchor" href="#problem-2-9-computing-fun-sums" aria-hidden="true">#</a> Problem 2.9: Computing fun sums</h3><p>Create a program that computes the sum of the following sums:</p><ul><li>The sum of the integers between <code>4</code> and <code>10</code> (including both <code>4</code> and <code>10</code>).</li><li>The sum of every second integer between <code>4</code> and <code>10</code> (<code>4</code>+<code>6</code>+<code>8</code>+<code>10</code>).</li><li>The sum of every third integers between <code>4</code> and <code>10</code> (<code>4</code>+<code>7</code>+<code>10</code>).</li><li>The sum of every fourth integer between <code>4</code> and <code>10</code> (<code>4</code>+<code>8</code>).</li></ul><p>In your code, try to avoid repeating the same code multiple times. This basically means that you need to use a function.</p><h4 id="sample-answer-22" tabindex="-1"><a class="header-anchor" href="#sample-answer-22" aria-hidden="true">#</a> Sample answer</h4>', 5)),
    createVNode(_component_SampleAnswer, {
      showAfter: _ctx.$frontmatter.exercise2ShowAfter
    }, {
      default: withCtx(() => _cache[164] || (_cache[164] = [
        createBaseVNode(
          "div",
          {
            class: "language-python line-numbers-mode",
            "data-ext": "py"
          },
          [
            createBaseVNode("pre", { class: "language-python" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token keyword" }, "def"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "sum"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("numbers"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "0"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "for"),
                createTextVNode(" number "),
                createBaseVNode("span", { class: "token keyword" }, "in"),
                createTextVNode(" numbers"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(" number\n    "),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode("\n\ntotal_sum "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "0"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "for"),
                createTextVNode(" i "),
                createBaseVNode("span", { class: "token keyword" }, "in"),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "range"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "1"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "5"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n    total_sum "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" total_sum "),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "range"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "4"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "11"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(" i"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("total_sum"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n")
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
              createBaseVNode("div", { class: "line-number" }),
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
    }, 8, ["showAfter"]),
    _cache[300] || (_cache[300] = createBaseVNode(
      "h2",
      {
        id: "exercise-3-conditions",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#exercise-3-conditions",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Exercise 3: Conditions")
      ],
      -1
      /* HOISTED */
    )),
    _cache[301] || (_cache[301] = createBaseVNode(
      "p",
      null,
      "Before you start working on these exercises, you are recommended to watch the following recorded video lectures:",
      -1
      /* HOISTED */
    )),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/python-conditions/" }, {
          default: withCtx(() => _cache[165] || (_cache[165] = [
            createTextVNode("Python Conditions")
          ])),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/python-loops/" }, {
          default: withCtx(() => _cache[166] || (_cache[166] = [
            createTextVNode("Python Loops")
          ])),
          _: 1
          /* STABLE */
        })
      ])
    ]),
    _cache[302] || (_cache[302] = createBaseVNode(
      "hr",
      null,
      null,
      -1
      /* HOISTED */
    )),
    _cache[303] || (_cache[303] = createBaseVNode(
      "p",
      null,
      "In this exercise you will practice on using the following in Python:",
      -1
      /* HOISTED */
    )),
    _cache[304] || (_cache[304] = createBaseVNode(
      "ul",
      null,
      [
        createBaseVNode("li", null, "Conditional statements"),
        createBaseVNode("li", null, "The while loop")
      ],
      -1
      /* HOISTED */
    )),
    _cache[305] || (_cache[305] = createBaseVNode(
      "h3",
      {
        id: "problem-3-1-comparing-numbers",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#problem-3-1-comparing-numbers",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Problem 3.1: Comparing numbers")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[167] || (_cache[167] = createTextVNode("Create a program that asks the user to enter two numbers. The program should then print which of them that is greatest respective smallest. It can look as shown in ")),
      createVNode(_component_FigureNumber),
      _cache[168] || (_cache[168] = createTextVNode(" below. Try to create functions to carry out the computations."))
    ]),
    createVNode(_component_Figure, { caption: "Sample input to and output from the program." }, {
      default: withCtx(() => _cache[169] || (_cache[169] = [
        createBaseVNode(
          "div",
          {
            class: "language-text line-numbers-mode",
            "data-ext": "text"
          },
          [
            createBaseVNode("pre", { class: "language-text" }, [
              createBaseVNode("code", null, "Enter the first number: 9\nEnter the second number: 5\n5 is the smallest.\n9 is the greatest.\n")
            ]),
            createBaseVNode("div", {
              class: "line-numbers",
              "aria-hidden": "true"
            }, [
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
    _cache[306] || (_cache[306] = createBaseVNode(
      "h4",
      {
        id: "sample-answer-23",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#sample-answer-23",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Sample answer")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_SampleAnswer, {
      showAfter: _ctx.$frontmatter.exercise3ShowAfter
    }, {
      default: withCtx(() => _cache[170] || (_cache[170] = [
        createBaseVNode(
          "div",
          {
            class: "language-python line-numbers-mode",
            "data-ext": "py"
          },
          [
            createBaseVNode("pre", { class: "language-python" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token keyword" }, "def"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "smallest"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("number_a"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(" number_b"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createTextVNode(" number_a "),
                createBaseVNode("span", { class: "token operator" }, "<"),
                createTextVNode(" number_b"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(" number_a\n    "),
                createBaseVNode("span", { class: "token keyword" }, "else"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(" number_b\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "def"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "greatest"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("number_a"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(" number_b"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createTextVNode(" number_a "),
                createBaseVNode("span", { class: "token operator" }, "<"),
                createTextVNode(" number_b"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(" number_b\n    "),
                createBaseVNode("span", { class: "token keyword" }, "else"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(" number_a\n\nfirst_number "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "int"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "input"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Enter the first number: "'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\nsecond_number "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "int"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "input"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Enter the second number: "'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("smallest"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("first_number"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(" second_number"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '" is the smallest."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("greatest"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("first_number"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(" second_number"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '" is the greatest."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n")
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
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
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
    }, 8, ["showAfter"]),
    _cache[307] || (_cache[307] = createBaseVNode(
      "h3",
      {
        id: "problem-3-2-comparing-more-numbers",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#problem-3-2-comparing-more-numbers",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Problem 3.2: Comparing more numbers")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[171] || (_cache[171] = createTextVNode("Create a program that asks the user to enter three numbers. The program should then print which of them that is greatest respective smallest. It can look as shown in ")),
      createVNode(_component_FigureNumber),
      _cache[172] || (_cache[172] = createTextVNode(" below. Try to create functions to carry out the computations."))
    ]),
    createVNode(_component_Figure, { caption: "Sample input to and output from the program." }, {
      default: withCtx(() => _cache[173] || (_cache[173] = [
        createBaseVNode(
          "div",
          {
            class: "language-text line-numbers-mode",
            "data-ext": "text"
          },
          [
            createBaseVNode("pre", { class: "language-text" }, [
              createBaseVNode("code", null, "Enter the first number: 9\nEnter the second number: 5\nEnter the third number: 12\n5 is the smallest.\n12 is the greatest.\n")
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
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[308] || (_cache[308] = createBaseVNode(
      "h4",
      {
        id: "sample-answer-24",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#sample-answer-24",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Sample answer")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_SampleAnswer, {
      showAfter: _ctx.$frontmatter.exercise3ShowAfter
    }, {
      default: withCtx(() => _cache[174] || (_cache[174] = [
        createBaseVNode(
          "div",
          {
            class: "language-python line-numbers-mode",
            "data-ext": "py"
          },
          [
            createBaseVNode("pre", { class: "language-python" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token keyword" }, "def"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "smallest"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("number_a"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(" number_b"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createTextVNode(" number_a "),
                createBaseVNode("span", { class: "token operator" }, "<"),
                createTextVNode(" number_b"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(" number_a\n    "),
                createBaseVNode("span", { class: "token keyword" }, "else"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(" number_b\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "def"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "greatest"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("number_a"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(" number_b"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createTextVNode(" number_a "),
                createBaseVNode("span", { class: "token operator" }, "<"),
                createTextVNode(" number_b"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(" number_b\n    "),
                createBaseVNode("span", { class: "token keyword" }, "else"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(" number_a\n\nfirst_number "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "int"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "input"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Enter the first number: "'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\nsecond_number "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "int"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "input"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Enter the second number: "'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\nthird_number "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "int"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "input"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Enter the third number: "'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n\nsmallest_number "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" smallest"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("first_number"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(" second_number"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\nsmallest_number "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" smallest"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("smallest_number"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(" third_number"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n\ngreatest_number "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" greatest"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("\n    first_number"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode("\n    greatest"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("\n        second_number"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode("\n        third_number\n    "),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("smallest_number"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '" is the smallest."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("greatest_number"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '" is the greatest."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n")
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
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
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
    }, 8, ["showAfter"]),
    _cache[309] || (_cache[309] = createBaseVNode(
      "h3",
      {
        id: "problem-3-3-summering-integers",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#problem-3-3-summering-integers",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Problem 3.3: Summering integers")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[175] || (_cache[175] = createTextVNode("Create a program that keeps asking the user to enter an integer until the user enters ")),
      _cache[176] || (_cache[176] = createBaseVNode(
        "code",
        null,
        "quit",
        -1
        /* HOISTED */
      )),
      _cache[177] || (_cache[177] = createTextVNode(". The program should then display the sum of all the integers. It can look as shown in ")),
      createVNode(_component_FigureNumber),
      _cache[178] || (_cache[178] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "Sample input to and output from the program." }, {
      default: withCtx(() => _cache[179] || (_cache[179] = [
        createBaseVNode(
          "div",
          {
            class: "language-text line-numbers-mode",
            "data-ext": "text"
          },
          [
            createBaseVNode("pre", { class: "language-text" }, [
              createBaseVNode("code", null, "Enter an integer or quit: 9\nEnter an integer or quit: 5\nEnter an integer or quit: 12\nEnter an integer or quit: quit\nThe sum of the integers is 26.\n")
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
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[310] || (_cache[310] = createBaseVNode(
      "h4",
      {
        id: "sample-answer-25",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#sample-answer-25",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Sample answer")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_SampleAnswer, {
      showAfter: _ctx.$frontmatter.exercise3ShowAfter
    }, {
      default: withCtx(() => _cache[180] || (_cache[180] = [
        createBaseVNode(
          "div",
          {
            class: "language-python line-numbers-mode",
            "data-ext": "py"
          },
          [
            createBaseVNode("pre", { class: "language-python" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "0"),
                createTextVNode("\n\nentered_text "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '""'),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "while"),
                createTextVNode(" entered_text "),
                createBaseVNode("span", { class: "token operator" }, "!="),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"quit"'),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n    \n    entered_text "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "input"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Enter an integer or quit: "'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n    \n    "),
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createTextVNode(" entered_text "),
                createBaseVNode("span", { class: "token operator" }, "!="),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"quit"'),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n        \n        entered_number "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "int"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("entered_text"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(" entered_number\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"The sum of the integers is "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '"."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n")
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
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
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
    }, 8, ["showAfter"]),
    _cache[311] || (_cache[311] = createBaseVNode(
      "h3",
      {
        id: "problem-3-4-comparing-many-numbers",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#problem-3-4-comparing-many-numbers",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Problem 3.4: Comparing many numbers")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[181] || (_cache[181] = createTextVNode("Create a program that keeps asking the user to enter a positive integer until the user enters ")),
      _cache[182] || (_cache[182] = createBaseVNode(
        "code",
        null,
        "quit",
        -1
        /* HOISTED */
      )),
      _cache[183] || (_cache[183] = createTextVNode(". The program should then display the greatest of the entered numbers. It can look as shown in ")),
      createVNode(_component_FigureNumber),
      _cache[184] || (_cache[184] = createTextVNode(" below. Somehow you need to remember the greatest number the user has entered."))
    ]),
    createVNode(_component_Figure, { caption: "Sample input to and output from the program." }, {
      default: withCtx(() => _cache[185] || (_cache[185] = [
        createBaseVNode(
          "div",
          {
            class: "language-text line-numbers-mode",
            "data-ext": "text"
          },
          [
            createBaseVNode("pre", { class: "language-text" }, [
              createBaseVNode("code", null, "Enter an integer or quit: 9\nEnter an integer or quit: 5\nEnter an integer or quit: 12\nEnter an integer or quit: quit\n12 is the greatest.\n")
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
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }),
    _cache[312] || (_cache[312] = createBaseVNode(
      "h4",
      {
        id: "sample-answer-26",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#sample-answer-26",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Sample answer")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_SampleAnswer, {
      showAfter: _ctx.$frontmatter.exercise3ShowAfter
    }, {
      default: withCtx(() => _cache[186] || (_cache[186] = [
        createBaseVNode(
          "div",
          {
            class: "language-python line-numbers-mode",
            "data-ext": "py"
          },
          [
            createBaseVNode("pre", { class: "language-python" }, [
              createBaseVNode("code", null, [
                createTextVNode("greatest_number "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "0"),
                createTextVNode("\n\nentered_text "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '""'),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "while"),
                createTextVNode(" entered_text "),
                createBaseVNode("span", { class: "token operator" }, "!="),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"quit"'),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n    \n    entered_text "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "input"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Enter an integer or quit: "'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n    \n    "),
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createTextVNode(" entered_text "),
                createBaseVNode("span", { class: "token operator" }, "!="),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"quit"'),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n        \n        entered_number "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "int"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("entered_text"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createTextVNode(" greatest_number "),
                createBaseVNode("span", { class: "token operator" }, "<"),
                createTextVNode(" entered_number"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n            greatest_number "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" entered_number\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("greatest_number"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '" is the greatest."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n")
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
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
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
    }, 8, ["showAfter"]),
    _cache[313] || (_cache[313] = createBaseVNode(
      "h3",
      {
        id: "problem-3-5-a-multiplication-training-program",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#problem-3-5-a-multiplication-training-program",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Problem 3.5: A multiplication training program")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[187] || (_cache[187] = createTextVNode("Create a small program that functions as a simple multiplication training program. When the program starts, it should ask a user to enter a multiplication table, and then ask the user for the answers to 10 different multiplications in that multiplication table. It can look as shown in ")),
      createVNode(_component_FigureNumber),
      _cache[188] || (_cache[188] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "Sample input to and output from the program." }, {
      default: withCtx(() => _cache[189] || (_cache[189] = [
        createBaseVNode(
          "div",
          {
            class: "language-text line-numbers-mode",
            "data-ext": "text"
          },
          [
            createBaseVNode("pre", { class: "language-text" }, [
              createBaseVNode("code", null, "Enter multiplication table: 4\nEnter the product of 4*1: 4\nCorrect.\nEnter the product of 4*2: 6\nWrong. Correct answer is 8.\n...\nEnter the product of 4*10: 40\nCorrect.\nYou got 8 of 10 right (80%).\n")
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
    _cache[314] || (_cache[314] = createBaseVNode(
      "p",
      null,
      "Extra features you can implement:",
      -1
      /* HOISTED */
    )),
    _cache[315] || (_cache[315] = createBaseVNode(
      "ul",
      null,
      [
        createBaseVNode("li", null, "Write a special text to the user at the end of the program if the user answered all questions right."),
        createBaseVNode("li", null, "Write a special text to the user at the end of the program if the user answered all questions wrong."),
        createBaseVNode("li", null, "Randomize the order of the questions somehow, e.g. do not always start with asking what X*1 is."),
        createBaseVNode("li", null, "Keep asking the user for answers until the user enters quit as the answer. Randomize the numbers."),
        createBaseVNode("li", null, "If the user answers a question wrong, keep asking the user the same question until the user answers it right.")
      ],
      -1
      /* HOISTED */
    )),
    _cache[316] || (_cache[316] = createBaseVNode(
      "h4",
      {
        id: "sample-answer-27",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#sample-answer-27",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Sample answer")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_SampleAnswer, {
      showAfter: _ctx.$frontmatter.exercise3ShowAfter
    }, {
      default: withCtx(() => _cache[190] || (_cache[190] = [
        createBaseVNode(
          "div",
          {
            class: "language-python line-numbers-mode",
            "data-ext": "py"
          },
          [
            createBaseVNode("pre", { class: "language-python" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token keyword" }, "import"),
                createTextVNode(" random\n\nmultiplication_table "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "int"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "input"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Enter multiplication table: "'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n\nfirst_number "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "1"),
                createTextVNode("\nlast_number "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "10"),
                createTextVNode("\nnumber_of_questions "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" last_number "),
                createBaseVNode("span", { class: "token operator" }, "-"),
                createTextVNode(" first_number "),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "1"),
                createTextVNode("\n\nnumbers "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "list"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "range"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("first_number"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(" last_number"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token number" }, "1"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\nrandom"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("shuffle"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("numbers"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n\nnumber_of_correct_answers "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "0"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "for"),
                createTextVNode(" number "),
                createBaseVNode("span", { class: "token keyword" }, "in"),
                createTextVNode(" numbers"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n    user_answer "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "int"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "input"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Enter the product of "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("multiplication_table"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '"*"'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("number"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '": "'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n    correct_answer "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" multiplication_table "),
                createBaseVNode("span", { class: "token operator" }, "*"),
                createTextVNode(" number\n    "),
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createTextVNode(" user_answer "),
                createBaseVNode("span", { class: "token operator" }, "=="),
                createTextVNode(" correct_answer"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Correct"'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n        number_of_correct_answers "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" number_of_correct_answers "),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "1"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "else"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Wrong. The correct answer is "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("correct_answer"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '"."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createTextVNode(" number_of_correct_answers "),
                createBaseVNode("span", { class: "token operator" }, "=="),
                createTextVNode(" number_of_questions"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Good job, all correct!"'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token keyword" }, "else"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"You got "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("number_of_correct_answers"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '" of "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("number_of_questions"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '" right."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n")
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
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
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
    }, 8, ["showAfter"]),
    _cache[317] || (_cache[317] = createBaseVNode(
      "h3",
      {
        id: "problem-3-6-a-guessing-game",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#problem-3-6-a-guessing-game",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Problem 3.6: A guessing game")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[191] || (_cache[191] = createTextVNode("Create a small program that functions as a number guessing game. Start by generating a random integer between 0 and 100, and then the user should guess which number it is until the user guess the right one. If the guess is wrong, let the user know if her guess was too high or too low. It can look as shown in ")),
      createVNode(_component_FigureNumber),
      _cache[192] || (_cache[192] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "Sample input to and output from the program." }, {
      default: withCtx(() => _cache[193] || (_cache[193] = [
        createBaseVNode(
          "div",
          {
            class: "language-text line-numbers-mode",
            "data-ext": "text"
          },
          [
            createBaseVNode("pre", { class: "language-text" }, [
              createBaseVNode("code", null, "Guess which number between 0 and 100 I'm thinking about!\nEnter your guess: 20\nToo high!\nEnter your guess: 10\nToo low!\nEnter your guess: 14\nCorrect! It took you 3 guesses to find the right number.\n")
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
    _cache[318] || (_cache[318] = createBaseVNode(
      "p",
      null,
      "Extra features you can implement:",
      -1
      /* HOISTED */
    )),
    _cache[319] || (_cache[319] = createBaseVNode(
      "ul",
      null,
      [
        createBaseVNode("li", null, "Allow the user at most 7 guesses, otherwise Game Over.")
      ],
      -1
      /* HOISTED */
    )),
    _cache[320] || (_cache[320] = createBaseVNode(
      "div",
      { class: "custom-container warning" },
      [
        createBaseVNode("p", { class: "custom-container-title" }, "Theoretical challenge!"),
        createBaseVNode("p", null, "Come up with an algorithm (which numbers to guess on) to complete the game in as few guesses as possible. In worst case, 7 guesses should be enough.")
      ],
      -1
      /* HOISTED */
    )),
    _cache[321] || (_cache[321] = createBaseVNode(
      "h4",
      {
        id: "sample-answer-28",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#sample-answer-28",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Sample answer")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_SampleAnswer, {
      showAfter: _ctx.$frontmatter.exercise3ShowAfter
    }, {
      default: withCtx(() => _cache[194] || (_cache[194] = [
        createBaseVNode(
          "div",
          {
            class: "language-python line-numbers-mode",
            "data-ext": "py"
          },
          [
            createBaseVNode("pre", { class: "language-python" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token keyword" }, "import"),
                createTextVNode(" random\n\nfirst_number "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "0"),
                createTextVNode("\nlast_number "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "100"),
                createTextVNode("\n\ncorrect_number "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" random"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("randint"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("first_number"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(" last_number"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\nguessed_number "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "-"),
                createBaseVNode("span", { class: "token number" }, "1"),
                createTextVNode("\nnumber_of_guesses "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "0"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Guess which number between "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("first_number"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '" and "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("last_number"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, `" I'm thinking about!"`),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "while"),
                createTextVNode(" guessed_number "),
                createBaseVNode("span", { class: "token operator" }, "!="),
                createTextVNode(" correct_number"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n    \n    guessed_number "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "int"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "input"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Enter your guess: "'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n    number_of_guesses "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" number_of_guesses "),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "1"),
                createTextVNode("\n    \n    "),
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createTextVNode(" guessed_number "),
                createBaseVNode("span", { class: "token operator" }, "<"),
                createTextVNode(" correct_number"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Too low!"'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "elif"),
                createTextVNode(" correct_number "),
                createBaseVNode("span", { class: "token operator" }, "<"),
                createTextVNode(" guessed_number"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Too high!"'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Correct! It took you "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("number_of_guesses"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '" guesses to find the right number."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n")
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
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
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
    }, 8, ["showAfter"]),
    _cache[322] || (_cache[322] = createStaticVNode('<h3 id="problem-3-7-looking-for-values" tabindex="-1"><a class="header-anchor" href="#problem-3-7-looking-for-values" aria-hidden="true">#</a> Problem 3.7: Looking for values</h3><p>Create the function <code>is_in_sequence()</code>, which receives a sequence with numbers (e.g. a list) and another number as arguments, and returns <code>True</code> if that other number is in the sequence, otherwise <code>False</code>.</p><p>Sample usage:</p><ul><li><code>is_in_sequence([1, 2], 3)</code> → <code>False</code></li><li><code>is_in_sequence([1, 2], 2)</code> → <code>True</code></li><li><code>is_in_sequence([4, 2, 8, 6, 1], 6)</code> → <code>True</code></li></ul><h4 id="sample-answer-29" tabindex="-1"><a class="header-anchor" href="#sample-answer-29" aria-hidden="true">#</a> Sample answer</h4>', 5)),
    createVNode(_component_SampleAnswer, {
      showAfter: _ctx.$frontmatter.exercise3ShowAfter
    }, {
      default: withCtx(() => _cache[195] || (_cache[195] = [
        createBaseVNode(
          "div",
          {
            class: "language-python line-numbers-mode",
            "data-ext": "py"
          },
          [
            createBaseVNode("pre", { class: "language-python" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token keyword" }, "def"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "is_in_sequence"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("sequence"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(" looking_for"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "for"),
                createTextVNode(" value "),
                createBaseVNode("span", { class: "token keyword" }, "in"),
                createTextVNode(" sequence"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createTextVNode(" value "),
                createBaseVNode("span", { class: "token operator" }, "=="),
                createTextVNode(" looking_for"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n            "),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(),
                createBaseVNode("span", { class: "token boolean" }, "True"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(),
                createBaseVNode("span", { class: "token boolean" }, "False"),
                createTextVNode("\n")
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
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }, 8, ["showAfter"]),
    _cache[323] || (_cache[323] = createStaticVNode('<h3 id="problem-3-8-greatest-value" tabindex="-1"><a class="header-anchor" href="#problem-3-8-greatest-value" aria-hidden="true">#</a> Problem 3.8: Greatest value</h3><p>Create the function <code>greatest()</code>, which receives a sequence with positive numbers (e.g. a list) as argument and returns the greatest number in that sequence.</p><p>Sample usage:</p><ul><li><code>greatest([5, 2, 7, 6])</code> → <code>7</code></li><li><code>greatest([6, 4, 9, 8, 3])</code> → <code>9</code></li></ul><h4 id="sample-answer-30" tabindex="-1"><a class="header-anchor" href="#sample-answer-30" aria-hidden="true">#</a> Sample answer</h4>', 5)),
    createVNode(_component_SampleAnswer, {
      showAfter: _ctx.$frontmatter.exercise3ShowAfter
    }, {
      default: withCtx(() => _cache[196] || (_cache[196] = [
        createBaseVNode(
          "div",
          {
            class: "language-python line-numbers-mode",
            "data-ext": "py"
          },
          [
            createBaseVNode("pre", { class: "language-python" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token keyword" }, "def"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "greatest"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("numbers"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n    greatest_number "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "0"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "for"),
                createTextVNode(" number "),
                createBaseVNode("span", { class: "token keyword" }, "in"),
                createTextVNode(" numbers"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createTextVNode(" greatest_number "),
                createBaseVNode("span", { class: "token operator" }, "<"),
                createTextVNode(" number"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n            greatest_number "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" number\n    "),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(" number\n")
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
    }, 8, ["showAfter"]),
    _cache[324] || (_cache[324] = createBaseVNode(
      "h2",
      {
        id: "exercise-4-lists-dicts",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#exercise-4-lists-dicts",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Exercise 4: Lists & Dicts")
      ],
      -1
      /* HOISTED */
    )),
    _cache[325] || (_cache[325] = createBaseVNode(
      "p",
      null,
      "Before you start working on these exercises, you are recommended to watch the following recorded video lectures:",
      -1
      /* HOISTED */
    )),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/python-strings/" }, {
          default: withCtx(() => _cache[197] || (_cache[197] = [
            createTextVNode("Python Strings")
          ])),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/python-lists/" }, {
          default: withCtx(() => _cache[198] || (_cache[198] = [
            createTextVNode("Python Lists")
          ])),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/python-dicts/" }, {
          default: withCtx(() => _cache[199] || (_cache[199] = [
            createTextVNode("Python Dicts")
          ])),
          _: 1
          /* STABLE */
        })
      ])
    ]),
    _cache[326] || (_cache[326] = createStaticVNode('<hr><p>In this exercise you will practice on using the following in Python:</p><ul><li>Strings</li><li>Lists</li><li>Dicts</li></ul><h3 id="problem-4-1-merging-lists" tabindex="-1"><a class="header-anchor" href="#problem-4-1-merging-lists" aria-hidden="true">#</a> Problem 4.1: Merging lists</h3><p>Create the function <code>merge()</code>, which receives three lists as argument, and returns a new list containing all the elements from the three lists. You simply need to create a new empty list, and then add the values from the other lists (one at a time) to this new list.</p><p>Sample usage:</p><ul><li><code>merge([1, 2], [3], [4, 5])</code> → <code>[1, 2, 3, 4, 5]</code></li><li><code>merge([1], [], [2])</code> → <code>[1, 2]</code></li></ul><h4 id="sample-answer-31" tabindex="-1"><a class="header-anchor" href="#sample-answer-31" aria-hidden="true">#</a> Sample answer</h4>', 8)),
    createVNode(_component_SampleAnswer, {
      showAfter: _ctx.$frontmatter.exercise4ShowAfter
    }, {
      default: withCtx(() => _cache[200] || (_cache[200] = [
        createBaseVNode(
          "div",
          {
            class: "language-python line-numbers-mode",
            "data-ext": "py"
          },
          [
            createBaseVNode("pre", { class: "language-python" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token keyword" }, "def"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "merge"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("list_1"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(" list_2"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(" list_3"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n    merged_list "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "for"),
                createTextVNode(" value "),
                createBaseVNode("span", { class: "token keyword" }, "in"),
                createTextVNode(" list_1"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n        merged_list"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("append"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("value"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "for"),
                createTextVNode(" value "),
                createBaseVNode("span", { class: "token keyword" }, "in"),
                createTextVNode(" list_2"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n        merged_list"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("append"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("value"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "for"),
                createTextVNode(" value "),
                createBaseVNode("span", { class: "token keyword" }, "in"),
                createTextVNode(" list_3"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n        merged_list"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("append"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("value"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(" merged_list\n")
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
    }, 8, ["showAfter"]),
    _cache[327] || (_cache[327] = createStaticVNode('<h3 id="problem-4-2-computing-sums" tabindex="-1"><a class="header-anchor" href="#problem-4-2-computing-sums" aria-hidden="true">#</a> Problem 4.2: Computing sums</h3><p>Create the function <code>compute_sums()</code>, which receives two lists as argument, both containing the same number of numbers, and returns a new list containing the pairwise sum of the numbers in the two lists.</p><p>Sample usage:</p><ul><li><code>compute_sums([1, 2], [3, 4])</code> → <code>[4, 6]</code></li><li><code>compute_sums([1, 1, 1], [4, 5, 6])</code> → <code>[5, 6, 7]</code></li></ul><h4 id="sample-answer-32" tabindex="-1"><a class="header-anchor" href="#sample-answer-32" aria-hidden="true">#</a> Sample answer</h4>', 5)),
    createVNode(_component_SampleAnswer, {
      showAfter: _ctx.$frontmatter.exercise4ShowAfter
    }, {
      default: withCtx(() => _cache[201] || (_cache[201] = [
        createBaseVNode(
          "div",
          {
            class: "language-python line-numbers-mode",
            "data-ext": "py"
          },
          [
            createBaseVNode("pre", { class: "language-python" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token keyword" }, "def"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "compute_sums"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("list_1"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(" list_2"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n    sums "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createTextVNode("\n    indexes "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "range"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "len"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("list_1"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "for"),
                createTextVNode(" index "),
                createBaseVNode("span", { class: "token keyword" }, "in"),
                createTextVNode(" indexes"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n        sums"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("append"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("list_1"),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createTextVNode("index"),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(" list_2"),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createTextVNode("index"),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(" sums\n")
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
    }, 8, ["showAfter"]),
    _cache[328] || (_cache[328] = createStaticVNode('<h3 id="problem-4-3-translating-digits" tabindex="-1"><a class="header-anchor" href="#problem-4-3-translating-digits" aria-hidden="true">#</a> Problem 4.3: Translating digits</h3><p>Use a dictionary to store the translation of Swedish (or your own language) words to English, in this case the name of digits, e.g.:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>words <span class="token operator">=</span> <span class="token punctuation">{</span>\n    <span class="token string">&quot;noll&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;zero&quot;</span><span class="token punctuation">,</span>\n    <span class="token string">&quot;ett&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;one&quot;</span><span class="token punctuation">,</span>\n    <span class="token comment"># ...</span>\n    <span class="token string">&quot;nio&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;nine&quot;</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Then create the function <code>translate()</code>, which receives the name of a digit in Swedish (or your own language) as an argument, and returns the name of that digit in English. If you can&#39;t translate the word you receive, return the string <code>unknown</code>.</p><p>Sample usage:</p><ul><li><code>translate(&quot;två&quot;)</code> → <code>&quot;two&quot;</code></li><li><code>translate(&quot;nio&quot;)</code> → <code>&quot;nine&quot;</code></li><li><code>translate(&quot;bbbbbbb&quot;)</code> → <code>&quot;unknown&quot;</code></li></ul><div class="custom-container tip"><p class="custom-container-title">Tips!</p><p>Use the <code>in</code> operator in a conditional statement to check if the word you should translate exists as a key in the <code>words</code> directory.</p></div><h4 id="sample-answer-33" tabindex="-1"><a class="header-anchor" href="#sample-answer-33" aria-hidden="true">#</a> Sample answer</h4>', 8)),
    createVNode(_component_SampleAnswer, {
      showAfter: _ctx.$frontmatter.exercise4ShowAfter
    }, {
      default: withCtx(() => _cache[202] || (_cache[202] = [
        createBaseVNode(
          "div",
          {
            class: "language-python line-numbers-mode",
            "data-ext": "py"
          },
          [
            createBaseVNode("pre", { class: "language-python" }, [
              createBaseVNode("code", null, [
                createTextVNode("words "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token string" }, '"noll"'),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"zero"'),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token string" }, '"ett"'),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"one"'),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token string" }, '"två"'),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"two"'),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token string" }, '"tre"'),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"three"'),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token string" }, '"fyra"'),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"four"'),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token string" }, '"fem"'),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"five"'),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token string" }, '"sex"'),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"six"'),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token string" }, '"sju"'),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"seven"'),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token string" }, '"åtta"'),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"eight"'),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token string" }, '"nio"'),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"nine"'),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "def"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "translate"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("swedish_name"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createTextVNode(" swedish_name "),
                createBaseVNode("span", { class: "token keyword" }, "in"),
                createTextVNode(" words"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n        english_name "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" words"),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createTextVNode("swedish_name"),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(" english_name\n    "),
                createBaseVNode("span", { class: "token keyword" }, "else"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"unknown"'),
                createTextVNode("\n")
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
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
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
    }, 8, ["showAfter"]),
    _cache[329] || (_cache[329] = createStaticVNode('<h3 id="problem-4-4-the-total-sum-of-a-dict" tabindex="-1"><a class="header-anchor" href="#problem-4-4-the-total-sum-of-a-dict" aria-hidden="true">#</a> Problem 4.4: The total sum of a dict</h3><p>Create the function <code>sum()</code>, which receives a dict as argument containing numbers, and returns the sum of all the numbers in the dict (not the keys).</p><p>Sample usage:</p><ul><li><code>sum({&quot;a&quot;: 1, &quot;b&quot;: 5})</code> → <code>6</code></li><li><code>sum({&quot;123&quot;: 7, &quot;23&quot;: 8})</code> → <code>15</code></li><li><code>sum({123: 7, 23: 8, 1: 2})</code> → <code>17</code></li></ul><div class="custom-container tip"><p class="custom-container-title">Tips!</p><p>Iterate through all the keys in the dict, and for each key, retrieve its value and add it to a <code>sum</code> variable starting on <code>0</code>.</p></div><h4 id="sample-answer-34" tabindex="-1"><a class="header-anchor" href="#sample-answer-34" aria-hidden="true">#</a> Sample answer</h4>', 6)),
    createVNode(_component_SampleAnswer, {
      showAfter: _ctx.$frontmatter.exercise4ShowAfter
    }, {
      default: withCtx(() => _cache[203] || (_cache[203] = [
        createBaseVNode(
          "div",
          {
            class: "language-python line-numbers-mode",
            "data-ext": "py"
          },
          [
            createBaseVNode("pre", { class: "language-python" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token keyword" }, "def"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "sum"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("a_dict"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "0"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "for"),
                createTextVNode(" key "),
                createBaseVNode("span", { class: "token keyword" }, "in"),
                createTextVNode(" a_dict"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n      "),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(" a_dict"),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createTextVNode("key"),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode("\n")
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
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }, 8, ["showAfter"]),
    _cache[330] || (_cache[330] = createStaticVNode('<h3 id="problem-4-5-the-pairwise-sum-of-two-dicts" tabindex="-1"><a class="header-anchor" href="#problem-4-5-the-pairwise-sum-of-two-dicts" aria-hidden="true">#</a> Problem 4.5: The pairwise sum of two dicts</h3><p>Create the function <code>get_sum()</code>, which receives two dicts as arguments (they both contains numbers and the same keys), and returns a new dict containing the pairwise sum of the two dicts.</p><p>Sample usage:</p><ul><li><code>get_sum({&quot;a&quot;: 1, &quot;b&quot;: 5}, {&quot;a&quot;: 2, &quot;b&quot;: 6})</code> → <code>{&quot;a&quot;: 3, &quot;b&quot;: 11}</code></li><li><code>get_sum({&quot;number_of_students&quot;: 5}, {&quot;number_of_students&quot;: 2})</code> → <code>{&quot;number_of_students&quot;: 7}</code></li></ul><div class="custom-container tip"><p class="custom-container-title">Tips!</p><p>Iterate through all the keys in one of the dictionary, and then retrieve the numbers from both of the dicts using the key.</p></div><h4 id="sample-answer-35" tabindex="-1"><a class="header-anchor" href="#sample-answer-35" aria-hidden="true">#</a> Sample answer</h4>', 6)),
    createVNode(_component_SampleAnswer, {
      showAfter: _ctx.$frontmatter.exercise4ShowAfter
    }, {
      default: withCtx(() => _cache[204] || (_cache[204] = [
        createBaseVNode(
          "div",
          {
            class: "language-python line-numbers-mode",
            "data-ext": "py"
          },
          [
            createBaseVNode("pre", { class: "language-python" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token keyword" }, "def"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "get_sum"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("dict_1"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(" dict_2"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n    sums "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "for"),
                createTextVNode(" key "),
                createBaseVNode("span", { class: "token keyword" }, "in"),
                createTextVNode(" dict_1"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n      sums"),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createTextVNode("key"),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" dict_1"),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createTextVNode("key"),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(" dict_2"),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createTextVNode("key"),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(" sums\n")
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
          ],
          -1
          /* HOISTED */
        )
      ])),
      _: 1
      /* STABLE */
    }, 8, ["showAfter"]),
    _cache[331] || (_cache[331] = createStaticVNode('<h3 id="problem-4-6-grouping-words" tabindex="-1"><a class="header-anchor" href="#problem-4-6-grouping-words" aria-hidden="true">#</a> Problem 4.6: Grouping words</h3><p>Create the function <code>group_words()</code>, which receives a list of strings, and returns a dictionary containing multiple lists of strings, where all strings in the same list has the same number of characters. Use the number of characters in these strings as the key for that list of strings.</p><p>Sample usage:</p><ul><li><code>group_words([&quot;a&quot;, &quot;b&quot;, &quot;ab&quot;])</code> → <code>{1: [&quot;a&quot;, &quot;b&quot;], 2: [&quot;ab&quot;]}</code></li><li><code>group_words([&quot;a&quot;, &quot;bc&quot;, &quot;def&quot;])</code> → <code>{1: [&quot;a&quot;], 2: [&quot;ab&quot;], 3: &quot;def&quot;}</code></li><li><code>group_words([&quot;a&quot;, &quot;b&quot;, &quot;c&quot;])</code> → <code>{1: [&quot;a&quot;, &quot;b&quot;, &quot;c&quot;]</code></li><li><code>group_words([])</code> → <code>???</code>(you figure it out)</li></ul><div class="custom-container tip"><p class="custom-container-title">Tips!</p><p>Start by iterating through all the strings in the list you receive, and create the dictionary with all the keys and empty lists. Then iterate through the list of strings you receive again, and add each string to its corresponding list.</p></div><h4 id="sample-answer-36" tabindex="-1"><a class="header-anchor" href="#sample-answer-36" aria-hidden="true">#</a> Sample answer</h4>', 6)),
    createVNode(_component_SampleAnswer, {
      showAfter: _ctx.$frontmatter.exercise4ShowAfter
    }, {
      default: withCtx(() => _cache[205] || (_cache[205] = [
        createBaseVNode(
          "div",
          {
            class: "language-python line-numbers-mode",
            "data-ext": "py"
          },
          [
            createBaseVNode("pre", { class: "language-python" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token keyword" }, "def"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "group_words"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("words"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n    groups "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "for"),
                createTextVNode(" word "),
                createBaseVNode("span", { class: "token keyword" }, "in"),
                createTextVNode(" words"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n      word_length "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "len"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("word"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n      "),
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createTextVNode(" word_length "),
                createBaseVNode("span", { class: "token keyword" }, "not"),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "in"),
                createTextVNode(" groups"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n        groups"),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createTextVNode("word_length"),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createTextVNode("\n      groups"),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createTextVNode("word_length"),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("append"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("word"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(" groups\n")
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
    }, 8, ["showAfter"]),
    _cache[332] || (_cache[332] = createBaseVNode(
      "h3",
      {
        id: "problem-4-7-a-friendly-program",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#problem-4-7-a-friendly-program",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Problem 4.7: A friendly program")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[206] || (_cache[206] = createTextVNode("Create a program the user can use to store the names of her friends (all information lost when the program is closed). It can look as shown in ")),
      createVNode(_component_FigureNumber),
      _cache[207] || (_cache[207] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "Sample input to and output from the program." }, {
      default: withCtx(() => _cache[208] || (_cache[208] = [
        createBaseVNode(
          "div",
          {
            class: "language-text line-numbers-mode",
            "data-ext": "text"
          },
          [
            createBaseVNode("pre", { class: "language-text" }, [
              createBaseVNode("code", null, "Enter operation (count/add/view/remove/quit): count\nYou have 0 friends.\nEnter operation (count/add/view/remove/quit): add\nEnter name: Alice\nEnter operation (count/add/view/remove/quit): add\nEnter name: Bob\nEnter operation (count/add/view/remove/quit): count\nYou have 2 friends.\nEnter operation (count/add/view/remove/quit): view\nAlice\nBob\nEnter operation (count/add/view/remove/quit): remove\nEnter name: Alice\nEnter operation (count/add/view/remove/quit): count\nYou have 1 friends.\nEnter operation (count/add/view/remove/quit): view\nBob\nEnter operation (count/add/view/remove/quit): quit\n")
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
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
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
    _cache[333] || (_cache[333] = createStaticVNode('<div class="custom-container tip"><p class="custom-container-title">Tips!</p><p>You need to remember the names of all the friends the user has entered. This can be done using a list:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>friends <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Bob&quot;</span><span class="token punctuation">]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>When the program starts, create an empty list to store the name of all the friends.</li><li>When the user enters a new friend, add the name of the friend to the end of the list.</li><li>When the user removes a friend, remove the name of the friend from the list.</li></ul></div><h4 id="sample-answer-37" tabindex="-1"><a class="header-anchor" href="#sample-answer-37" aria-hidden="true">#</a> Sample answer</h4>', 2)),
    createVNode(_component_SampleAnswer, {
      showAfter: _ctx.$frontmatter.exercise4ShowAfter
    }, {
      default: withCtx(() => _cache[209] || (_cache[209] = [
        createBaseVNode(
          "div",
          {
            class: "language-python line-numbers-mode",
            "data-ext": "py"
          },
          [
            createBaseVNode("pre", { class: "language-python" }, [
              createBaseVNode("code", null, [
                createTextVNode("entered_operation "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '""'),
                createTextVNode("\n\nnames "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createBaseVNode("span", { class: "token string" }, '"Alice"'),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"Bob"'),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "while"),
                createTextVNode(" entered_operation "),
                createBaseVNode("span", { class: "token operator" }, "!="),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"quit"'),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n  \n  entered_operation "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "input"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Enter operation (count/add/view/remove/quit): "'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n  \n  "),
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createTextVNode(" entered_operation "),
                createBaseVNode("span", { class: "token operator" }, "=="),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"count"'),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"You have "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "len"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("names"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '" friends."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n  "),
                createBaseVNode("span", { class: "token keyword" }, "elif"),
                createTextVNode(" entered_operation "),
                createBaseVNode("span", { class: "token operator" }, "=="),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"add"'),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n    name "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "input"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Enter name: "'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n    names"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("append"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("name"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n  "),
                createBaseVNode("span", { class: "token keyword" }, "elif"),
                createTextVNode(" entered_operation "),
                createBaseVNode("span", { class: "token operator" }, "=="),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"view"'),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "for"),
                createTextVNode(" name "),
                createBaseVNode("span", { class: "token keyword" }, "in"),
                createTextVNode(" names"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n      "),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("name"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n  "),
                createBaseVNode("span", { class: "token keyword" }, "elif"),
                createTextVNode(" entered_operation "),
                createBaseVNode("span", { class: "token operator" }, "=="),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"remove"'),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n    name "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "input"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Enter name: "'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n    names"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("remove"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("name"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n")
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
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
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
    }, 8, ["showAfter"]),
    _cache[334] || (_cache[334] = createBaseVNode(
      "h3",
      {
        id: "problem-4-8-a-friendlier-program",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#problem-4-8-a-friendlier-program",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Problem 4.8: A friendlier program")
      ],
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[210] || (_cache[210] = createTextVNode("Create a program the user can use to store the names and emails of her friends. It can look as shown in ")),
      createVNode(_component_FigureNumber),
      _cache[211] || (_cache[211] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "Sample input to and output from the program." }, {
      default: withCtx(() => _cache[212] || (_cache[212] = [
        createBaseVNode(
          "div",
          {
            class: "language-text line-numbers-mode",
            "data-ext": "text"
          },
          [
            createBaseVNode("pre", { class: "language-text" }, [
              createBaseVNode("code", null, "Enter operation (count/add/view/remove/quit): count\nYou have 0 friends.\nEnter operation (count/add/view/remove/quit): add\nEnter name: Alice\nEnter email: alice@gmail.com\nEnter operation (count/add/view/remove/quit): add\nEnter name: Bob\nEnter email: bob@ju.se\nEnter operation (count/add/view/remove/quit): count\nYou have 2 friends.\nEnter operation (count/add/view/remove/quit): view\nAlice – alice@gmail.com\nBob – bob@ju.se\nEnter operation (count/add/view/remove/quit): remove\nEnter name: Alice\nEnter operation (count/add/view/remove/quit): count\nYou have 1 friends.\nEnter operation (count/add/view/remove/quit): view\nBob – bob@gmail.com\nEnter operation (count/add/view/remove/quit): quit\n")
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
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
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
    _cache[335] || (_cache[335] = createStaticVNode('<div class="custom-container tip"><p class="custom-container-title">Tips!</p><p>This time, each friend consists of two pieces of information (name and email) instead of just one (name), so you need to represent each friend as a dict with a <code>name</code> key and an <code>email</code> key, e.g.:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>friends <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Alice&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;email&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;alice@gmail.com&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Bob&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;email&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;bob@ju.se&quot;</span><span class="token punctuation">}</span>\n<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div><h4 id="sample-answer-38" tabindex="-1"><a class="header-anchor" href="#sample-answer-38" aria-hidden="true">#</a> Sample answer</h4>', 2)),
    createVNode(_component_SampleAnswer, {
      showAfter: _ctx.$frontmatter.exercise4ShowAfter
    }, {
      default: withCtx(() => _cache[213] || (_cache[213] = [
        createBaseVNode(
          "div",
          {
            class: "language-python line-numbers-mode",
            "data-ext": "py"
          },
          [
            createBaseVNode("pre", { class: "language-python" }, [
              createBaseVNode("code", null, [
                createTextVNode("entered_operation "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '""'),
                createTextVNode("\n\nfriends "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createTextVNode("\n  "),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createBaseVNode("span", { class: "token string" }, '"name"'),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"Alice"'),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"email"'),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"al@ice.com"'),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode("\n  "),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createBaseVNode("span", { class: "token string" }, '"name"'),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"Bob"'),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"email"'),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"bob@by.com"'),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "while"),
                createTextVNode(" entered_operation "),
                createBaseVNode("span", { class: "token operator" }, "!="),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"quit"'),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n  \n  entered_operation "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "input"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Enter operation (count/add/view/remove/quit): "'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n  \n  "),
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createTextVNode(" entered_operation "),
                createBaseVNode("span", { class: "token operator" }, "=="),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"count"'),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"You have "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "len"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("friends"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '" friends."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n  "),
                createBaseVNode("span", { class: "token keyword" }, "elif"),
                createTextVNode(" entered_operation "),
                createBaseVNode("span", { class: "token operator" }, "=="),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"add"'),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n    name "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "input"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Enter name: "'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n    email "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "input"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Enter email: "'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n    friends"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("append"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n      "),
                createBaseVNode("span", { class: "token string" }, '"name"'),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode(" name"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode("\n      "),
                createBaseVNode("span", { class: "token string" }, '"email"'),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode(" email\n    "),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n  "),
                createBaseVNode("span", { class: "token keyword" }, "elif"),
                createTextVNode(" entered_operation "),
                createBaseVNode("span", { class: "token operator" }, "=="),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"view"'),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "for"),
                createTextVNode(" friend "),
                createBaseVNode("span", { class: "token keyword" }, "in"),
                createTextVNode(" friends"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n      "),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("friend"),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createBaseVNode("span", { class: "token string" }, '"name"'),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '" - "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode("friend"),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createBaseVNode("span", { class: "token string" }, '"email"'),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n  "),
                createBaseVNode("span", { class: "token keyword" }, "elif"),
                createTextVNode(" entered_operation "),
                createBaseVNode("span", { class: "token operator" }, "=="),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"remove"'),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n    name "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "input"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Enter name: "'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n    friend_to_remove "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "for"),
                createTextVNode(" friend "),
                createBaseVNode("span", { class: "token keyword" }, "in"),
                createTextVNode(" friends"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n      "),
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createTextVNode(" friend"),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createBaseVNode("span", { class: "token string" }, '"name"'),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "=="),
                createTextVNode(" name"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n        friend_to_remove "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" friend\n    friends"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("remove"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("friend_to_remove"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n")
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
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
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
    }, 8, ["showAfter"]),
    _cache[336] || (_cache[336] = createBaseVNode(
      "h2",
      {
        id: "exercise-5-files",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#exercise-5-files",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Exercise 5: Files")
      ],
      -1
      /* HOISTED */
    )),
    _cache[337] || (_cache[337] = createBaseVNode(
      "p",
      null,
      "Before you start working on these exercises, you are recommended to watch the following recorded video lectures:",
      -1
      /* HOISTED */
    )),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/python-modelling/" }, {
          default: withCtx(() => _cache[214] || (_cache[214] = [
            createTextVNode("Python Modelling")
          ])),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/python-data-storage/" }, {
          default: withCtx(() => _cache[215] || (_cache[215] = [
            createTextVNode("Python Data Storage")
          ])),
          _: 1
          /* STABLE */
        })
      ])
    ]),
    _cache[338] || (_cache[338] = createStaticVNode('<hr><p>In this exercise you will practice on using the following in Python:</p><ul><li>Files</li><li>XML</li><li>CSV</li><li>JSON</li></ul><h3 id="problem-5-1-working-with-files" tabindex="-1"><a class="header-anchor" href="#problem-5-1-working-with-files" aria-hidden="true">#</a> Problem 5.1: Working with files</h3><p>The file <a href="files/exercises/numbers.txt">numbers.txt</a> doesn&#39;t follow any particular format, but it contains numbers separated by spaces and line breaks. It can look like this:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>1 5 4 3\n4 5\n23 4 5 899999\n3 45 3 222 4\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Write a program that computes the sum of all the numbers in the file (download and save the file locally on your computer).</p><h4 id="sample-answer-39" tabindex="-1"><a class="header-anchor" href="#sample-answer-39" aria-hidden="true">#</a> Sample answer</h4>', 8)),
    createVNode(_component_SampleAnswer, {
      showAfter: _ctx.$frontmatter.exercise5ShowAfter
    }, {
      default: withCtx(() => _cache[216] || (_cache[216] = [
        createBaseVNode(
          "div",
          {
            class: "language-python line-numbers-mode",
            "data-ext": "py"
          },
          [
            createBaseVNode("pre", { class: "language-python" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "0"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token keyword" }, "with"),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "open"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"numbers.txt"'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "as"),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "file"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "for"),
                createTextVNode(" line "),
                createBaseVNode("span", { class: "token keyword" }, "in"),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "file"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n        numbers "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" line"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("split"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '" "'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token keyword" }, "for"),
                createTextVNode(" number "),
                createBaseVNode("span", { class: "token keyword" }, "in"),
                createTextVNode(" numbers"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n            "),
                createBaseVNode("span", { class: "token builtin" }, "sum"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "+="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "int"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("number"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n")
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
    }, 8, ["showAfter"]),
    _cache[339] || (_cache[339] = createStaticVNode('<h3 id="problem-5-2-working-with-files" tabindex="-1"><a class="header-anchor" href="#problem-5-2-working-with-files" aria-hidden="true">#</a> Problem 5.2: Working with files</h3><p>Imagine your application contains the following data:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>houses <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Gryffindor&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;founder&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Godric Gryffindor&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;HufflePuff&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;founder&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Helga Hufflepuff&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Ravenclaw&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;founder&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Rowena Ravenclaw&quot;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Slytherin&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;founder&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;Salazar Slytherin&quot;</span><span class="token punctuation">}</span>\n<span class="token punctuation">]</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Create three different functions that can be used to store this data in a file:</p><ul><li>The first function should store the data in a JSON file (in JSON format).</li><li>The second function should store the data in a CSV file (in CSV format).</li><li>The third function should store the data in an XML file (XML format).</li></ul><p>Then create three different functions that can be used to read this data from a file and restore the <code>houses</code> variable.</p><h4 id="sample-answer-40" tabindex="-1"><a class="header-anchor" href="#sample-answer-40" aria-hidden="true">#</a> Sample answer</h4>', 7)),
    createVNode(_component_SampleAnswer, {
      showAfter: _ctx.$frontmatter.exercise5ShowAfter
    }, {
      default: withCtx(() => _cache[217] || (_cache[217] = [
        createBaseVNode(
          "div",
          {
            class: "language-python line-numbers-mode",
            "data-ext": "py"
          },
          [
            createBaseVNode("pre", { class: "language-python" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token keyword" }, "import"),
                createTextVNode(" json\n"),
                createBaseVNode("span", { class: "token keyword" }, "import"),
                createTextVNode(" xml"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("etree"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("ElementTree "),
                createBaseVNode("span", { class: "token keyword" }, "as"),
                createTextVNode(" ET\n"),
                createBaseVNode("span", { class: "token keyword" }, "import"),
                createTextVNode(" csv\n\nhouses "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createBaseVNode("span", { class: "token string" }, '"name"'),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"Gryffindor"'),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"founder"'),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"Godric Gryffindor"'),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createBaseVNode("span", { class: "token string" }, '"name"'),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"HufflePuff"'),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"founder"'),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"Helga Hufflepuff"'),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createBaseVNode("span", { class: "token string" }, '"name"'),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"Ravenclaw"'),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"founder"'),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"Rowena Ravenclaw"'),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createBaseVNode("span", { class: "token string" }, '"name"'),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"Slytherin"'),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"founder"'),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"Salazar Slytherin"'),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "def"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "write_to_json_file"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("houses"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n    json_code "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" json"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("dumps"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("houses"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "with"),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "open"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"houses.json"'),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"w"'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "as"),
                createTextVNode(" json_file"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n        json_file"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("write"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("json_code"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "def"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "write_to_xml_file"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("houses"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n    houses_element "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" ET"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("Element"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"houses"'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "for"),
                createTextVNode(" house "),
                createBaseVNode("span", { class: "token keyword" }, "in"),
                createTextVNode(" houses"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n        house_element "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" ET"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("SubElement"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("houses_element"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"house"'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n        name_element "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" ET"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("SubElement"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("house_element"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"name"'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n        name_element"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("text "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" house"),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createBaseVNode("span", { class: "token string" }, '"name"'),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createTextVNode("\n        founder_element "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" ET"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("SubElement"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("house_element"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"founder"'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n        founder_element"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("text "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" house"),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createBaseVNode("span", { class: "token string" }, '"founder"'),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createTextVNode("\n    xml_code "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" ET"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("tostring"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("houses_element"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(" encoding"),
                createBaseVNode("span", { class: "token operator" }, "="),
                createBaseVNode("span", { class: "token string" }, '"unicode"'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "with"),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "open"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"houses.xml"'),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"w"'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "as"),
                createTextVNode(" xml_file"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n        xml_file"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("write"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("xml_code"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "def"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "write_to_csv_file"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("houses"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "with"),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "open"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"houses.csv"'),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"w"'),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(" newline"),
                createBaseVNode("span", { class: "token operator" }, "="),
                createBaseVNode("span", { class: "token string" }, '"\\n"'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "as"),
                createTextVNode(" csv_file"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n        writer "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" csv"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("writer"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("csv_file"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(" delimiter"),
                createBaseVNode("span", { class: "token operator" }, "="),
                createBaseVNode("span", { class: "token string" }, '","'),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(" quotechar"),
                createBaseVNode("span", { class: "token operator" }, "="),
                createBaseVNode("span", { class: "token string" }, `'"'`),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token keyword" }, "for"),
                createTextVNode(" house "),
                createBaseVNode("span", { class: "token keyword" }, "in"),
                createTextVNode(" houses"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n            writer"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("writerow"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createTextVNode("house"),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createBaseVNode("span", { class: "token string" }, '"name"'),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(" house"),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createBaseVNode("span", { class: "token string" }, '"founder"'),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "def"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "read_from_json_file"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "with"),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "open"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, "'houses.json'"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, "'r'"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "as"),
                createTextVNode(" json_file"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(" json"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("loads"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("json_file"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("read"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "def"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "read_from_xml_file"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n    houses "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "with"),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "open"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, "'houses.xml'"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, "'r'"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "as"),
                createTextVNode(" xml_file"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n        xml_code "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" xml_file"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("read"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n        houses_element "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" ET"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("fromstring"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("xml_code"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token keyword" }, "for"),
                createTextVNode(" house_element "),
                createBaseVNode("span", { class: "token keyword" }, "in"),
                createTextVNode(" houses_element"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n            houses"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("append"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n                "),
                createBaseVNode("span", { class: "token string" }, "'name'"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode(" house_element"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("find"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"name"'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("text"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode("\n                "),
                createBaseVNode("span", { class: "token string" }, "'founder'"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode(" house_element"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("find"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"founder"'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("text\n            "),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(" houses\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "def"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "read_from_csv_file"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n    houses "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "with"),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "open"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, "'houses.csv'"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, "'r'"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "as"),
                createTextVNode(" csv_file"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n        reader "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" csv"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("reader"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("csv_file"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(" delimiter"),
                createBaseVNode("span", { class: "token operator" }, "="),
                createBaseVNode("span", { class: "token string" }, "','"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(" quotechar"),
                createBaseVNode("span", { class: "token operator" }, "="),
                createBaseVNode("span", { class: "token string" }, `'"'`),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token keyword" }, "for"),
                createTextVNode(" row "),
                createBaseVNode("span", { class: "token keyword" }, "in"),
                createTextVNode(" reader"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n            houses"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("append"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n                "),
                createBaseVNode("span", { class: "token string" }, "'name'"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode(" row"),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createBaseVNode("span", { class: "token number" }, "0"),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode("\n                "),
                createBaseVNode("span", { class: "token string" }, "'founder'"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode(" row"),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createBaseVNode("span", { class: "token number" }, "1"),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createTextVNode("\n            "),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(" houses\n")
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
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
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
    }, 8, ["showAfter"]),
    _cache[340] || (_cache[340] = createStaticVNode('<h3 id="problem-5-3-storing-the-friendly-friends" tabindex="-1"><a class="header-anchor" href="#problem-5-3-storing-the-friendly-friends" aria-hidden="true">#</a> Problem 5.3: Storing the friendly friends</h3><p>This exercise is a continuation on Problem 4.8.</p><p>Add two new commands: <code>save</code> and <code>load</code>. These commands should ask the user to enter the name of a file (including extension, e.g. <code>friends.json</code>) and then store/retrieve the list of friends to/from the file. The data should be stored according to the file extension (for example in JSON format for <code>friends.json</code>). You should support CSV, JSON and XML.</p>', 3)),
    createBaseVNode("p", null, [
      _cache[218] || (_cache[218] = createTextVNode("It can look as shown in ")),
      createVNode(_component_FigureNumber),
      _cache[219] || (_cache[219] = createTextVNode(" below."))
    ]),
    createVNode(_component_Figure, { caption: "Sample input to and output from the program." }, {
      default: withCtx(() => _cache[220] || (_cache[220] = [
        createBaseVNode(
          "div",
          {
            class: "language-text line-numbers-mode",
            "data-ext": "text"
          },
          [
            createBaseVNode("pre", { class: "language-text" }, [
              createBaseVNode("code", null, "Enter operation: add\nEnter name: Alice\nEnter email: alice@gmail.com\nEnter operation: save\nEnter filename: friends.xml\nEnter operation: add\nEnter name: Bob\nEnter email: bob@ju.se\nEnter operation: save\nEnter filename: friends.json\nEnter operation: load\nEnter filename: friends.xml\nEnter operation: count\nYou have 1 friends.\nEnter operation: load\nEnter filename: friends.json\nEnter operation: count\nYou have 2 friends.\nEnter operation: quit\n")
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
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
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
    _cache[341] || (_cache[341] = createBaseVNode(
      "h4",
      {
        id: "sample-answer-41",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#sample-answer-41",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Sample answer")
      ],
      -1
      /* HOISTED */
    )),
    createVNode(_component_SampleAnswer, {
      showAfter: _ctx.$frontmatter.exercise5ShowAfter
    }, {
      default: withCtx(() => _cache[221] || (_cache[221] = [
        createBaseVNode(
          "div",
          {
            class: "language-python line-numbers-mode",
            "data-ext": "py"
          },
          [
            createBaseVNode("pre", { class: "language-python" }, [
              createBaseVNode("code", null, [
                createTextVNode("friends "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createTextVNode("\n\noperation "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '""'),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "while"),
                createTextVNode(" operation "),
                createBaseVNode("span", { class: "token operator" }, "!="),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"quit"'),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n    \n    operation "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "input"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Enter operation (count/add/view/remove/quit): "'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n    \n    "),
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createTextVNode(" operation "),
                createBaseVNode("span", { class: "token operator" }, "=="),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"count"'),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"You have "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token builtin" }, "str"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "len"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("friends"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '" friends."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "elif"),
                createTextVNode(" operation "),
                createBaseVNode("span", { class: "token operator" }, "=="),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"add"'),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n        name "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "input"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Enter name: "'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n        email "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "input"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Enter email: "'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n        friends"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("append"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n            "),
                createBaseVNode("span", { class: "token string" }, '"name"'),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode(" name"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode("\n            "),
                createBaseVNode("span", { class: "token string" }, '"email"'),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode(" email\n        "),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "elif"),
                createTextVNode(" operation "),
                createBaseVNode("span", { class: "token operator" }, "=="),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"view"'),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token keyword" }, "for"),
                createTextVNode(" friend "),
                createBaseVNode("span", { class: "token keyword" }, "in"),
                createTextVNode(" friends"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n            "),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("friend"),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createBaseVNode("span", { class: "token string" }, '"name"'),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createBaseVNode("span", { class: "token string" }, '" - "'),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode("friend"),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createBaseVNode("span", { class: "token string" }, '"email"'),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n    "),
                createBaseVNode("span", { class: "token keyword" }, "elif"),
                createTextVNode(" operation "),
                createBaseVNode("span", { class: "token operator" }, "=="),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"remove"'),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n        entered_name "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "input"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Enter name: "'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n        index_to_remove "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "-"),
                createBaseVNode("span", { class: "token number" }, "1"),
                createTextVNode("\n        "),
                createBaseVNode("span", { class: "token keyword" }, "for"),
                createTextVNode(" i "),
                createBaseVNode("span", { class: "token keyword" }, "in"),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "range"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token builtin" }, "len"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("friends"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n            "),
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createTextVNode(" friends"),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createTextVNode("i"),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createBaseVNode("span", { class: "token string" }, '"name"'),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createTextVNode(),
                createBaseVNode("span", { class: "token operator" }, "=="),
                createTextVNode(" entered_name"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n                index_to_remove "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" i\n        friends"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("pop"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("index_to_remove"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n    \n    "),
                createBaseVNode("span", { class: "token keyword" }, "elif"),
                createTextVNode(" operation "),
                createBaseVNode("span", { class: "token operator" }, "=="),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"save"'),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n        \n        filename "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "input"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Enter filename: "'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n        \n        "),
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createTextVNode(" filename"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("endswith"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '".json"'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n            "),
                createBaseVNode("span", { class: "token keyword" }, "with"),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "open"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("filename"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"w"'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "as"),
                createTextVNode(" json_file"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n                json_file"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("write"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("json"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("dumps"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("friends"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n        \n        "),
                createBaseVNode("span", { class: "token keyword" }, "elif"),
                createTextVNode(" filename"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("endswith"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '".xml"'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n            friends_element "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" ET"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("Element"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"friends"'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n            "),
                createBaseVNode("span", { class: "token keyword" }, "for"),
                createTextVNode(" friend "),
                createBaseVNode("span", { class: "token keyword" }, "in"),
                createTextVNode(" friends"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n                friend_element "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" ET"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("SubElement"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("friends_element"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"friend"'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n                name_element "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" ET"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("SubElement"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("friend_element"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"name"'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n                name_element"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("text "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" friend"),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createBaseVNode("span", { class: "token string" }, '"name"'),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createTextVNode("\n                email_element "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" ET"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("SubElement"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("friend_element"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"email"'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n                email_element"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("text "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" friend"),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createBaseVNode("span", { class: "token string" }, '"email"'),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createTextVNode("\n            xml_code "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" ET"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("tostring"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("friends_element"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(" encoding"),
                createBaseVNode("span", { class: "token operator" }, "="),
                createBaseVNode("span", { class: "token string" }, '"unicode"'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n            "),
                createBaseVNode("span", { class: "token keyword" }, "with"),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "open"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("filename"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"w"'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "as"),
                createTextVNode(" xml_file"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n                xml_file"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("write"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("xml_code"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n        \n        "),
                createBaseVNode("span", { class: "token keyword" }, "elif"),
                createTextVNode(" filename"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("endswith"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '".csv"'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n            "),
                createBaseVNode("span", { class: "token keyword" }, "with"),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "open"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"friends.csv"'),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"w"'),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(" newline"),
                createBaseVNode("span", { class: "token operator" }, "="),
                createBaseVNode("span", { class: "token string" }, '"\\n"'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "as"),
                createTextVNode(" csv_file"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n                writer "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" csv"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("writer"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("csv_file"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(" delimiter"),
                createBaseVNode("span", { class: "token operator" }, "="),
                createBaseVNode("span", { class: "token string" }, '","'),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(" quotechar"),
                createBaseVNode("span", { class: "token operator" }, "="),
                createBaseVNode("span", { class: "token string" }, `'"'`),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n                "),
                createBaseVNode("span", { class: "token keyword" }, "for"),
                createTextVNode(" friend "),
                createBaseVNode("span", { class: "token keyword" }, "in"),
                createTextVNode(" friends"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n                    writer"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("writerow"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createTextVNode("friend"),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createBaseVNode("span", { class: "token string" }, '"name"'),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(" friend"),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createBaseVNode("span", { class: "token string" }, '"email"'),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n        \n        "),
                createBaseVNode("span", { class: "token keyword" }, "else"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n            "),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"File type is not supported."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n    \n    "),
                createBaseVNode("span", { class: "token keyword" }, "elif"),
                createTextVNode(" operation "),
                createBaseVNode("span", { class: "token operator" }, "=="),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, '"load"'),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n        \n        filename "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "input"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Enter filename: "'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n        \n        "),
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createTextVNode(" filename"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("endswith"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '".json"'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n            "),
                createBaseVNode("span", { class: "token keyword" }, "with"),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "open"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("filename"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, "'r'"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "as"),
                createTextVNode(" json_file"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n                friends "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" json"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("loads"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("json_file"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("read"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n        \n        "),
                createBaseVNode("span", { class: "token keyword" }, "elif"),
                createTextVNode(" filename"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("endswith"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '".xml"'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n            friends "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createTextVNode("\n            "),
                createBaseVNode("span", { class: "token keyword" }, "with"),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "open"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("filename"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, "'r'"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "as"),
                createTextVNode(" xml_file"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n                xml_code "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" xml_file"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("read"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n                friends_element "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" ET"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("fromstring"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("xml_code"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n                "),
                createBaseVNode("span", { class: "token keyword" }, "for"),
                createTextVNode(" friend_element "),
                createBaseVNode("span", { class: "token keyword" }, "in"),
                createTextVNode(" friends_element"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n                    friends"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("append"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n                        "),
                createBaseVNode("span", { class: "token string" }, "'name'"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode(" friend_element"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("find"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"name"'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("text"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode("\n                        "),
                createBaseVNode("span", { class: "token string" }, "'email'"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode(" friend_element"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("find"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"email"'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("text\n                    "),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n        \n        "),
                createBaseVNode("span", { class: "token keyword" }, "elif"),
                createTextVNode(" filename"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("endswith"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '".csv"'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n            friends "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createTextVNode("\n            "),
                createBaseVNode("span", { class: "token keyword" }, "with"),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "open"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("filename"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token string" }, "'r'"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "as"),
                createTextVNode(" csv_file"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n                reader "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" csv"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("reader"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("csv_file"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(" delimiter"),
                createBaseVNode("span", { class: "token operator" }, "="),
                createBaseVNode("span", { class: "token string" }, "','"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(" quotechar"),
                createBaseVNode("span", { class: "token operator" }, "="),
                createBaseVNode("span", { class: "token string" }, `'"'`),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n                "),
                createBaseVNode("span", { class: "token keyword" }, "for"),
                createTextVNode(" row "),
                createBaseVNode("span", { class: "token keyword" }, "in"),
                createTextVNode(" reader"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n                    friends"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("append"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token punctuation" }, "{"),
                createTextVNode("\n                        "),
                createBaseVNode("span", { class: "token string" }, "'name'"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode(" row"),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createBaseVNode("span", { class: "token number" }, "0"),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode("\n                        "),
                createBaseVNode("span", { class: "token string" }, "'email'"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode(" row"),
                createBaseVNode("span", { class: "token punctuation" }, "["),
                createBaseVNode("span", { class: "token number" }, "1"),
                createBaseVNode("span", { class: "token punctuation" }, "]"),
                createTextVNode("\n                    "),
                createBaseVNode("span", { class: "token punctuation" }, "}"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n        \n        "),
                createBaseVNode("span", { class: "token keyword" }, "else"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n            "),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"File type is not supported."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n")
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
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
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
    }, 8, ["showAfter"]),
    _cache[342] || (_cache[342] = createBaseVNode(
      "h2",
      {
        id: "exercise-6-object-oriented-programming",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#exercise-6-object-oriented-programming",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Exercise 6: Object-oriented Programming")
      ],
      -1
      /* HOISTED */
    )),
    _cache[343] || (_cache[343] = createBaseVNode(
      "p",
      null,
      "Before you start working on these exercises, you are recommended to watch the following recorded video lectures:",
      -1
      /* HOISTED */
    )),
    createBaseVNode("ul", null, [
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/python-abstraction/" }, {
          default: withCtx(() => _cache[222] || (_cache[222] = [
            createTextVNode("Python Abstraction")
          ])),
          _: 1
          /* STABLE */
        })
      ]),
      createBaseVNode("li", null, [
        createVNode(_component_RouterLink, { to: "/lectures/python-object-oriented-programming/" }, {
          default: withCtx(() => _cache[223] || (_cache[223] = [
            createTextVNode("Python Object-Oriented Programming")
          ])),
          _: 1
          /* STABLE */
        })
      ])
    ]),
    _cache[344] || (_cache[344] = createBaseVNode(
      "hr",
      null,
      null,
      -1
      /* HOISTED */
    )),
    _cache[345] || (_cache[345] = createBaseVNode(
      "p",
      null,
      "In this exercise you will practice on using the following in Python:",
      -1
      /* HOISTED */
    )),
    _cache[346] || (_cache[346] = createBaseVNode(
      "ul",
      null,
      [
        createBaseVNode("li", null, "Classes")
      ],
      -1
      /* HOISTED */
    )),
    _cache[347] || (_cache[347] = createBaseVNode(
      "h3",
      {
        id: "problem-6-1-using-classes",
        tabindex: "-1"
      },
      [
        createBaseVNode("a", {
          class: "header-anchor",
          href: "#problem-6-1-using-classes",
          "aria-hidden": "true"
        }, "#"),
        createTextVNode(" Problem 6.1: Using classes")
      ],
      -1
      /* HOISTED */
    )),
    _cache[348] || (_cache[348] = createBaseVNode(
      "p",
      null,
      "A class represents something (a ball, a human, a house, a calculator, etc.), and it is the one who creates the class that will do the hard work with implementing the class. The ones who use the class will be able to do that quite easily.",
      -1
      /* HOISTED */
    )),
    createBaseVNode("p", null, [
      _cache[225] || (_cache[225] = createTextVNode("The file ")),
      _cache[226] || (_cache[226] = createBaseVNode(
        "a",
        { href: "files/exercises/HangmanGame.py" },
        "HangmanGame.py",
        -1
        /* HOISTED */
      )),
      _cache[227] || (_cache[227] = createTextVNode(" contains the class ")),
      _cache[228] || (_cache[228] = createBaseVNode(
        "code",
        null,
        "HangmanGame",
        -1
        /* HOISTED */
      )),
      _cache[229] || (_cache[229] = createTextVNode(" that represents ")),
      createBaseVNode("a", _hoisted_10, [
        _cache[224] || (_cache[224] = createTextVNode("a Hangman game")),
        createVNode(_component_ExternalLinkIcon)
      ]),
      _cache[230] || (_cache[230] = createTextVNode(". One can use that class to implement a program through which the user can play the Hangman game. In our case, the programmer who creates the program will be the one who determines which the correct word is, and the user will then repeatedly guess on the letters in the word. When the user has guessed on letters that are not part of the correct word 9 times, the user loses. The user wins when she has guessed on all the letters part of the correct word."))
    ]),
    _cache[349] || (_cache[349] = createStaticVNode('<p>The <code>HangmanGame</code> class contains the methods summarized in Table 1 below.</p><table><thead><tr><th>Method</th><th>Description</th></tr></thead><tbody><tr><td><code>__init__(correct_word)</code></td><td>Creates a new <code>HangmanGame</code> instance one can use to play the Hangman game. <code>correct_word</code> (str) will be the word the user should guess on.</td></tr><tr><td><code>make_guess(letter)</code></td><td>Registers that the user makes a guess on <code>letter</code> (str) being part of the correct word.</td></tr><tr><td><code>get_underlined_word()</code></td><td>Returns the correct word with all letters replaced with <code>_</code> expect for the letters the user has guessed on.</td></tr><tr><td><code>has_player_lost()</code></td><td>Returns <code>True</code> if the user has made 9 guesses. <br> Returns <code>False</code> otherwise.</td></tr><tr><td><code>has_player_won()</code></td><td>Returns <code>True</code> if the user has guessed on all the letters part of the correct word. <br> Returns <code>False</code> otherwise.</td></tr></tbody></table><p>With these methods, you should be able to create a program that contains a loop that keeps asking the user to guess on a new letter until the user has guessed 9 times or guessed on all the letters part of the correct word. Do that. It can look like what is shown below.</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>_____\nGuess letter: k\n_____\nGuess letter: e\n_e_e_\nGuess letter: f\n_e_e_\nGuess letter: t\n_ete_\nGuess letter: r\n_eter\nGuess letter: p\npeter\nYou won!\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="sample-answer-42" tabindex="-1"><a class="header-anchor" href="#sample-answer-42" aria-hidden="true">#</a> Sample answer</h4>', 5)),
    createVNode(_component_SampleAnswer, {
      showAfter: _ctx.$frontmatter.exercise6ShowAfter
    }, {
      default: withCtx(() => _cache[231] || (_cache[231] = [
        createBaseVNode(
          "div",
          {
            class: "language-python line-numbers-mode",
            "data-ext": "py"
          },
          [
            createBaseVNode("pre", { class: "language-python" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token keyword" }, "from"),
                createTextVNode(" HangmanGame "),
                createBaseVNode("span", { class: "token keyword" }, "import"),
                createTextVNode(" HangmanGame\n\ngame "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" HangmanGame"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"bob"'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "while"),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "not"),
                createTextVNode(" game"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("has_player_lost"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "and"),
                createTextVNode(),
                createBaseVNode("span", { class: "token keyword" }, "not"),
                createTextVNode(" game"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("has_player_won"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n	\n	"),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("game"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("get_underlined_word"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n	\n	guess "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token builtin" }, "input"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Enter guess: "'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n	\n	game"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("make_guess"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("guess"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("game"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("get_underlined_word"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "if"),
                createTextVNode(" game"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("has_player_won"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Good job, you won!"'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n"),
                createBaseVNode("span", { class: "token keyword" }, "else"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n	"),
                createBaseVNode("span", { class: "token keyword" }, "print"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token string" }, '"Sorry, you lost."'),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n")
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
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
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
    }, 8, ["showAfter"]),
    _cache[350] || (_cache[350] = createStaticVNode('<h3 id="problem-6-2-creating-classes" tabindex="-1"><a class="header-anchor" href="#problem-6-2-creating-classes" aria-hidden="true">#</a> Problem 6.2: Creating classes</h3><p>Create the class <code>GuessingGame</code> that represents a guessing game (the user should guess on a number, and the game let&#39;s the user know if the guess is correct or not). The user has at most 10 guesses. The class should have methods as described in Table 2 below.</p><table><thead><tr><th>Method</th><th>Description</th></tr></thead><tbody><tr><td><code>__init__()</code></td><td>Creates a new <code>GuessingGame</code> instance one can use to play the Guessing game. The constructor generates a new random integer between <code>0</code> and <code>20</code> the user should guess on.</td></tr><tr><td><code>process_guess(guess)</code></td><td>Registers that the user has guessed on the number <code>guess</code>. <br> Returns <code>True</code> if the guess is correct. <br> Returns <code>False</code> if the guess is not correct.</td></tr><tr><td><code>has_used_all_guesses()</code></td><td>Returns <code>True</code> if the user has made 10 guesses (if <code>process_guess()</code> has been called 10 times). <br> Returns <code>False</code> otherwise.</td></tr></tbody></table><p>If you have implemented the class correctly, the program below should be able to make use of it to let the user play the game.</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>game <span class="token operator">=</span> GuessingGame<span class="token punctuation">(</span><span class="token punctuation">)</span>\n<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Guess which number between 0 and 20 I&#39;m thinking of.&quot;</span><span class="token punctuation">)</span>\nguessed_right <span class="token operator">=</span> <span class="token boolean">False</span>\n<span class="token keyword">while</span> <span class="token keyword">not</span> guessed_right <span class="token keyword">and</span> <span class="token keyword">not</span> game<span class="token punctuation">.</span>has_used_all_guesses<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>\n    guess <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;Enter guess: &quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>\n    guessed_right <span class="token operator">=</span> game<span class="token punctuation">.</span>process_guess<span class="token punctuation">(</span>guess<span class="token punctuation">)</span>\n<span class="token keyword">if</span> guessed_right<span class="token punctuation">:</span>\n    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Yes, that was the number!&quot;</span><span class="token punctuation">)</span>\n<span class="token keyword">else</span><span class="token punctuation">:</span>\n    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Too bad, game over.&quot;</span><span class="token punctuation">)</span>\n</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="sample-answer-43" tabindex="-1"><a class="header-anchor" href="#sample-answer-43" aria-hidden="true">#</a> Sample answer</h4>', 6)),
    createVNode(_component_SampleAnswer, {
      showAfter: _ctx.$frontmatter.exercise6ShowAfter
    }, {
      default: withCtx(() => _cache[232] || (_cache[232] = [
        createBaseVNode(
          "div",
          {
            class: "language-python line-numbers-mode",
            "data-ext": "py"
          },
          [
            createBaseVNode("pre", { class: "language-python" }, [
              createBaseVNode("code", null, [
                createBaseVNode("span", { class: "token keyword" }, "import"),
                createTextVNode(" random\n\n"),
                createBaseVNode("span", { class: "token keyword" }, "class"),
                createTextVNode(),
                createBaseVNode("span", { class: "token class-name" }, "GuessingGame"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n	\n	"),
                createBaseVNode("span", { class: "token keyword" }, "def"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "__init__"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("self"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n		self"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("correct_number "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" random"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("randint"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createBaseVNode("span", { class: "token number" }, "0"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "20"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createTextVNode("\n		self"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("number_of_guesses "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "0"),
                createTextVNode("\n	\n	"),
                createBaseVNode("span", { class: "token keyword" }, "def"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "has_used_all_guesses"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("self"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n		"),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(" self"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("number_of_guesses "),
                createBaseVNode("span", { class: "token operator" }, "=="),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "10"),
                createTextVNode("\n	\n	"),
                createBaseVNode("span", { class: "token keyword" }, "def"),
                createTextVNode(),
                createBaseVNode("span", { class: "token function" }, "process_guess"),
                createBaseVNode("span", { class: "token punctuation" }, "("),
                createTextVNode("self"),
                createBaseVNode("span", { class: "token punctuation" }, ","),
                createTextVNode(" guess"),
                createBaseVNode("span", { class: "token punctuation" }, ")"),
                createBaseVNode("span", { class: "token punctuation" }, ":"),
                createTextVNode("\n		\n		self"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("number_of_guesses "),
                createBaseVNode("span", { class: "token operator" }, "="),
                createTextVNode(" self"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("number_of_guesses "),
                createBaseVNode("span", { class: "token operator" }, "+"),
                createTextVNode(),
                createBaseVNode("span", { class: "token number" }, "1"),
                createTextVNode("\n		\n		"),
                createBaseVNode("span", { class: "token keyword" }, "return"),
                createTextVNode(" guess "),
                createBaseVNode("span", { class: "token operator" }, "=="),
                createTextVNode(" self"),
                createBaseVNode("span", { class: "token punctuation" }, "."),
                createTextVNode("correct_number\n")
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
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
              createBaseVNode("div", { class: "line-number" }),
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
    }, 8, ["showAfter"]),
    createCommentVNode('\n## Sample code\nSome of the sample code written at the tutorials.\n\n### Rock-Paper-Scissors Game\n```python\nfrom random import randint\n\ndef get_computer_move():\n	computer_move_int = randint(0, 2)\n	if computer_move_int == 0:\n		return "Rock"\n	elif computer_move_int == 1:\n		return "Scissors"\n	else:\n		return "Paper"\n\ndef beats(move_1, move_2):\n	return (\n		move_1 == "Scissors" and move_2 == "Paper" or\n		move_1 == "Rock" and move_2 == "Scissors" or\n		move_1 == "Paper" and move_2 == "Rock"\n	)\n\ndef get_user_move():\n	\n	user_move = ""\n	\n	while not (user_move == "Rock" or user_move == "Scissors" or user_move == "Paper"):\n		\n		user_move = input("Rock/Scissors/Paper: " )\n	\n	return user_move\n\ncomputer_wins = 0\nplayer_wins = 0\n\nfor game_round in range(5):\n	\n	user_move = get_user_move()\n	computer_move = get_computer_move()\n	\n	print("Computer choose "+computer_move+".")\n	\n	if computer_move == user_move:\n		print("Draw!")\n	elif beats(computer_move, user_move):\n		print("Computer wins!")\n		computer_wins = computer_wins + 1\n	else:\n		print("You win!")\n		player_wins = player_wins + 1\n\nprint("Computer wins: "+str(computer_wins))\nprint("Player wins: "+str(player_wins))\n\nif computer_wins == player_wins:\n	print("Final result: Draw")\nelif computer_wins < player_wins:\n	print("Final result: You win! :D")\nelse:\n	print("Final result: You lose :(")\n```\n\n### Dice Game\n```python\nimport random\n\ndef generate_dice_value():\n	return random.randint(1, 6)\n\ndef are_all_six(number_1, number_2, number_3):\n	return number_1 == 6 and number_2 == 6 and number_3 == 6\n\ndef does_pair_exist(number_1, number_2, number_3):\n	return number_1 == number_2 or number_1 == number_3 or number_2 == number_3\n\ndef are_all_three_equal(number_1, number_2, number_3):\n	return number_1 == number_2 and number_1 == number_3\n\ndef get_win_money(dice_1, dice_2, dice_3):\n	if are_all_six(dice_1, dice_2, dice_3):\n		return win_all_six\n	elif are_all_three_equal(dice_1, dice_2, dice_3):\n		return win_all_equal\n	elif does_pair_exist(dice_1, dice_2, dice_3):\n		return win_pair\n	else:\n		return 0\n\ngame_cost = 10\nplayer_money = 100\nwin_all_six = 100\nwin_all_equal = 50\nwin_pair = 10\n\ncontinue_playing = "yes"\n\nwhile continue_playing == "yes":\n	\n	player_money = player_money - game_cost\n	\n	dice_1 = generate_dice_value()\n	dice_2 = generate_dice_value()\n	dice_3 = generate_dice_value()\n	\n	print("You got "+str(dice_1)+" "+str(dice_2)+" "+str(dice_3))\n	\n	win_money = get_win_money(dice_1, dice_2, dice_3)\n	\n	win_total = win_total + win_money\n	\n	if win_money == 0:\n		print("You lost")\n	else:\n		print("You won "+str(win_money)+".")\n	\n	player_money = player_money + win_money\n	\n	print("You now have "+str(player_money)+".")\n	\n	continue_playing = input("Play gain? yes/no: ")\n```\n')
  ]);
}
const exercises_html = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "exercises.html.vue"]]);
export {
  exercises_html as default
};
