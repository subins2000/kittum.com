const {getSiteInfo} = require("./utils/utils-commonjs")

exports.headEnd = (req) => {
  const host = req.get("host");
  const {title, description} = getSiteInfo(host)
  return `
  <title>${title}</title>
  <meta itemprop="name" content="${title}" />
  <meta itemprop="description" content="${description}" />
  `
}