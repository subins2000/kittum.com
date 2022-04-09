punycode = require("punycode");
pages = require("../pages/index.json")

function findPage(host) {
  const subdomain = host.replace(`.കിട്ടും.com`, "")
  return pages.find(page => new RegExp(page.regex).test(subdomain))
}

function getSiteInfo(host) {
  if (host.indexOf("xn--") === -1) {
    // For localhost
    
    const testDomain = "ബിരിയാണി-ഇപ്പോ.കിട്ടും.com"
    // const testDomain = "ബിരിയാണി-എപ്പോ.കിട്ടും.com"

    host = punycode.toASCII(testDomain);
  }
  const hostInUnicode = punycode.toUnicode(host);

  let title, subtitle;

  const page = findPage(hostInUnicode)

  if (page) {
    title = page.title
    subtitle = page.subtitle;
  } else {
    const withoutCom = hostInUnicode.slice(0, -4);
    title = withoutCom.replace(/[-.]/g, " ");
    subtitle = "😌😌😌"
  }

  return {
    title,
    subtitle
  }
}

module.exports = {getSiteInfo}
