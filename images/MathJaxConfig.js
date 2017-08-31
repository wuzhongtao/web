// A trigger which is queried by render-math-and-dump.js in PhantomJS
var MathJaxFinished = false;

// This function will be called when MathJax has finished *all* rendering
MathJax.Hub.Queue(
    function () {
        MathJaxFinished = true;
    }
);

// A sample MathJax setup for SVG
MathJax.Hub.Config({
  displayAlign: "left",
  displayIndent: "3em",
  extensions: ["tex2jax.js"],
  // Tex input, SVG output
  jax: ["input/TeX", "output/SVG"],
  imageFont: null,
  messageStyle: "none",
  showProcessingMessages: false,
  showMathMenu: false,
  delayStartupUntil: "onload",
  tex2jax: {
    ignoreClass: "tex2jax_ignore",
    processClass: "math",
    inlineMath: [ ["$","$"], ["\\(","\\)"] ],
    displayMath: [ ["$$","$$"], ["\\[","\\]"] ],
    processEscapes: false,
    preview: "none"
  },
  TeX: {
    extensions: ["AMSmath.js","AMSsymbols.js", "color.js"],
    TagSide: "left",
    TagIndent: "0em",
    MultLineWidth: "85%",
    equationNumbers: {
      autoNumber: "AMS"
    },
    unicode: {
      fonts: "STIXGeneral,'Arial Unicode MS'"
    }
  },
  SVG: {
    font: "TeX",
    //scale: 90,
    minScaleAdjust: 50,
    linebreaks: {
      automatic: true
    },
    styles: {
      // Avoid rectangles with a black surrounding stroke in PrinceXML
      ".mjx-svg-href" : {
        fill: "none",
        stroke: "none"
      },
      // Links to other formulas in black
      ".MathJax_ref" : {
        fill: "#000000",
        stroke: "none"
      },
      ".MathJax_SVG": {
        //"vertical-align": "baseline"
        //"vertical-align": "-1px"
      }
    },
    matchFontHeight: true,
    mtextFontInherit: true,
    addMMLclasses: false
  }
});
