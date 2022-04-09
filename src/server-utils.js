const {getSiteInfo} = require("./utils/utils-commonjs")

exports.headEnd = (req) => {
  const host = req.get("host");
  return `
  <title>${getSiteInfo(host).title}</title>
  `
}