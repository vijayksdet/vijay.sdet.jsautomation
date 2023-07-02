const common = `
  --require hooks.js
  --require playwright/web.tests/pages/**/*.js
  --require playwright/web.tests/steps/**/*.js
  --require axios/api.tests/**/validation/**/*.js
  --require axios/api.tests/**/steps/**/*.js
  `;

module.exports = {
  default: `${common} **/**/features/**.feature`
}