const fs = require("fs");
const path = require("path");
const handlebars = require("handlebars");

const enContent = require("../translations/en");
// const ruContent = require("../translations/ru");
// const uaContent = require("../translations/ua");

const source = fs.readFileSync(`${path.resolve()}/src/utils/resume/template.hbs`, "utf8");

[
  enContent
  // ruContent,
  // uaContent
].forEach(content => {
  const template = handlebars.compile(source, { strict: true });
  const result = template(content);

  fs.writeFileSync(`${path.resolve()}/public/resume.${content._locale}.html`, result);
});
