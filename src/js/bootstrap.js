
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
console.log("🚀 ~ file: bootstrap.js:3 ~ popoverTriggerList:", popoverTriggerList)

const angularView = document.querySelector('[ng-view]');
console.log("🚀 ~ file: bootstrap.js:6 ~ angularView:", angularView)

const popovers = angularView.querySelectorAll('[data-bs-toggle="popover"]');
console.log("🚀 ~ file: bootstrap.js:9 ~ popovers:", popovers)

const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));