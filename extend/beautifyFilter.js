'use strict';

const beautify = require('js-beautify').html_beautify;

module.exports = function(mainTwig) {
  mainTwig.extend((Twig) => {
    Twig.exports.extendFilter('beautify', (value) => {
      try {
        return beautify(value, {
          indent_size: 2,
          indent_char: ' ',
          max_preserve_newlines: -1,
          preserve_newlines: false,
          end_with_newline: true,
          indent_inner_html: false,
        });
      } catch (e) {
        console.log(e);
      }
    });
  });
};
