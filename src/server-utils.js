const {getSiteName} = require("./utils/utils-commonjs")

exports.headEnd = (req) => {
  const host = req.get("host");
  return `
  <title>${getSiteName(host)}</title>
  `
}