/*jslint indent: 2 */
/*global $: false, document: false, togglbutton: false, createTag:false*/

'use strict';

var titleSelector = '.project.open.selected > div.name .content';
var itemSelector = '.project.open div.name .content:not(.toggl)';
const altT = 84;

togglbutton.render(itemSelector, {observe: true}, function (elem) {
  var container = jQuery("#toggl_anchor");
  if ( ! container.length) {
    container = jQuery('<div></div>', {
        id: "toggl_anchor",
        style: "position:absolute;left:45%;top:50%;opacity:0"
      }
    );
    container.appendTo('body');
  }

  var link,
    projectElem = $(titleSelector),
    descriptionElem = elem;

  link = togglbutton.createTimerLink({
    className: 'hide-button',
    description: descriptionElem.innerText,
    // projectName: projectElem.innerText,
    calculateTotal: true,
    buttonType: "minimal"
  });

  jQuery(elem).keydown(function (event) {
    if (event.keyCode == altT) {
      link.click();
      event.preventDefault();
    }
  });

  container.append(link);
  // descriptionElem.appendChild(container);
});
