#!/usr/bin/env node
var _ = require('lodash');

module.exports = function(conf) {
  conf = _.defaults(conf || {}, {
    shadowColor: '#bbb',
    leftColor: '#555',
    rightColor: '#4c1',
    leftText: 'build',
    rightText: 'success',
    textColor: '#fff',
    logo: null,
    logoWidth: 16,
    width: 150
  });
  var letterWidth = 6.6;
  var leftWidth = letterWidth * (conf.leftText + "").length;
  var rightWidth = letterWidth * (conf.rightText + "").length;
  var spacing = 5;
  var leftSpacing = 5;
  if (conf.logo) {
    leftSpacing += conf.logoWidth;
  }
  var totalWidth = leftWidth + rightWidth + spacing * 3 + leftSpacing;
  var leftStart = totalWidth - rightWidth - 2 * spacing;


  return [
  '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="' + conf.width + '" viewBox="0 0 ' + totalWidth + ' ' + 20 + '">',
  '<linearGradient id="a" x2="0" y2="100%">',
  '<stop offset="0" stop-color="' + conf.shadowColor + '" stop-opacity=".1"/>',
  '<stop offset="1" stop-opacity=".1"/>',
  '</linearGradient>',
  '<rect rx="3" width="' + totalWidth + '" height="20" fill="' + conf.leftColor + '"/>',
  '<rect rx="3" x="' + leftStart + '" width="' + (rightWidth + 2 * spacing) + '" height="20" fill="' + conf.rightColor + '"/>',
  '<path fill="' + conf.rightColor + '" d="M' + leftStart + ' 0h4v20h-4z"/>',
  '<rect rx="3" width="' + totalWidth + '" height="20" fill="url(#a)"/>',
  '<g fill="' + conf.textColor + '" text-anchor="left" font-family="Courier" font-size="11">',
  '<text x="' + leftSpacing + '" y="15" fill="#010101" fill-opacity=".3">' + conf.leftText + '</text>',
  '<text x="' + leftSpacing + '" y="14">' + conf.leftText + '</text>',
  '<text x="' + (leftStart + spacing) + '" y="15" fill="#010101" fill-opacity=".3">' + conf.rightText + '</text>',
  '<text x="' + (leftStart + spacing) + '" y="14">' + conf.rightText + '</text>',
  '</g>',
  conf.logo ? '<image xlink:href="' + conf.logo + '" height="16" y="2" x="2" width="' + conf.logoWidth + '"></img>' : '',
  '</svg>'].join('');
};