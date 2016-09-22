/*jslint indent: 2 */
/*global $: false, document: false, togglbutton: false, createTag:false*/

'use strict';

var titleSelector = '.project.open.selected > div.name .content';
var itemSelector = '.project.open.selected div.name .content:not(.toggl)';

togglbutton.render(itemSelector, {observe: true}, function (elem) {
  var link, container = createTag('span', 'workflowy'),
    projectElem = $(titleSelector),
    descriptionElem = elem;

  link = togglbutton.createTimerLink({
    className: 'trello',
    description: descriptionElem.innerText,
    projectName: projectElem.innerText,
    calculateTotal: true,
    buttonType: "minimal"
  });

  container.appendChild(link);
  descriptionElem.appendChild(container);
});
