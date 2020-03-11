"use strict";

window.addEventListener('DOMContentLoaded', function () {
  var observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      var id = entry.target.getAttribute('id');

      if (entry.intersectionRatio > 0) {
        document.querySelector("nav li a[href=\"#".concat(id, "\"]")).parentElement.classList.add('active');
      } else {
        document.querySelector("nav li a[href=\"#".concat(id, "\"]")).parentElement.classList.remove('active');
      }
    });
  }); // Track all sections that have an `id` applied

  document.querySelectorAll('section[id]').forEach(function (section) {
    observer.observe(section);
  });
});
