!(function (e) {
  var t = new Array(),
    n = new Array(),
    o = function () {},
    i = 0,
    a = {
      splashVPos: "35%",
      loaderVPos: "50%",
      splashID: "#jpreContent",
      showSplash: !0,
      showPercentage: !0,
      autoClose: !0,
      closeBtnText: "Start!",
      onetimeLoad: !1,
      debugMode: !1,
      splashFunction: function () {},
    },
    r = function (t) {
      var o = new Image();
      e(o)
        .load(function () {
          s();
        })
        .error(function () {
          n.push(e(this).attr("src")), s();
        })
        .attr("src", t);
    },
    s = function () {
      i++;
      var n = Math.round((i / t.length) * 100);
      if (
        (e(jBar)
          .stop()
          .animate({ width: n + "%" }, 500, "linear"),
        a.showPercentage && e(jPer).text(n + "%"),
        i >= t.length)
      ) {
        if (
          ((i = t.length),
          (function (e) {
            if (a.onetimeLoad) {
              var t = new Date();
              t.setDate(t.getDate() + e);
              var n = null == e ? "" : "expires=" + t.toUTCString();
              document.cookie = "jpreLoader=loaded; " + n;
            }
          })(),
          a.showPercentage && e(jPer).text("100%"),
          a.debugMode)
        )
          h();
        e(jBar)
          .stop()
          .animate({ width: "100%" }, 500, "linear", function () {
            a.autoClose ? d() : e(jButton).fadeIn(1e3);
          });
      }
    },
    d = function () {
      e(jOverlay).fadeOut(800, function () {
        e(jOverlay).remove(), o();
      });
    },
    h = function () {
      if (n.length > 0) {
        n.length + " image files cound not be found. \n\r",
          "Please check your image paths and filenames:\n\r";
        for (var e = 0; e < n.length; e++) "- " + n[e] + "\n\r";
        return !0;
      }
      return !1;
    };
  e.fn.jpreLoader = function (n, i) {
    return (
      n && e.extend(a, n),
      "function" == typeof i && (o = i),
      this.each(function () {
        !(function () {
          if (a.onetimeLoad) {
            for (
              var e, t = document.cookie.split("; "), n = 0;
              (e = t[n] && t[n].split("="));
              n++
            )
              if ("jpreLoader" === e.shift()) return e.join("=");
            return !1;
          }
          return !1;
        })()
          ? ((function () {
              if (((jOverlay = e("<div></div>")), a.showSplash)) {
                jContent = e("<div></div>")
                  .attr("id", "jpreSlide")
                  .appendTo(jOverlay);
                var t = e(window).width() - e(jContent).width();
                e(jContent).css({
                  position: "absolute",
                  top: a.splashVPos,
                  left: Math.round((50 / e(window).width()) * t) + "%",
                }),
                  e(jContent).html(
                    e(a.splashID).wrap("<div/>").parent().html()
                  ),
                  e(a.splashID).remove(),
                  a.splashFunction();
              }
              jLoader = e("<div></div>")
                .attr("id", "jpreLoader")
                .appendTo(jOverlay);
              var n = e(window).width() - e(jLoader).width();
              e(jLoader).css({
                position: "absolute",
                top: a.loaderVPos,
                left: Math.round((50 / e(window).width()) * n) + "%",
              }),
                (jBar = e("<div></div>")
                  .attr("id", "jpreBar")
                  .css({ width: "0%", height: "100%" })
                  .appendTo(jLoader)),
                a.showPercentage &&
                  (jPer = e("<div></div>")
                    .attr("id", "jprePercentage")
                    .css({ position: "relative", height: "100%" })
                    .appendTo(jLoader)
                    .html("Loading...")),
                a.autoclose ||
                  (jButton = e("<div></div>")
                    .attr("id", "jpreButton")
                    .on("click", function () {
                      d();
                    })
                    .css({ position: "relative", height: "100%" })
                    .appendTo(jLoader)
                    .text(a.closeBtnText)
                    .hide());
            })(),
            e(this)
              .find("*:not(script)")
              .each(function () {
                var n = "";
                if (
                  -1 == e(this).css("background-image").indexOf("none") &&
                  -1 == e(this).css("background-image").indexOf("-gradient")
                ) {
                  if (
                    -1 != (n = e(this).css("background-image")).indexOf("url")
                  ) {
                    var o = n.match(/url\((.*?)\)/);
                    n = o[1].replace(/\"/g, "");
                  }
                } else "img" == e(this).get(0).nodeName.toLowerCase() && void 0 !== e(this).attr("src") && (n = e(this).attr("src"));
                n.length > 0 && t.push(n);
              }),
            (function () {
              for (var e = 0; e < t.length; e++) r(t[e]);
            })())
          : (e(a.splashID).remove(), o());
      })
    );
  };
})(jQuery);
