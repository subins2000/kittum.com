import * as punycode from "punycode";

export function getSiteName(host) {
  if (host.indexOf("xn--") === -1) {
    // For localhost, use sample "നോക്കി-ഇരുന്നോ-ഇപ്പോ.കിട്ടും.com"
    host = "xn-----63hb0ea5keawa0ewk5a7ljewhf.xn--rvc1b4aa2noa6f.com";
  }
  const hostInUnicode = punycode.toUnicode(host);

  const withoutCom = hostInUnicode.slice(0, -4);
  return withoutCom.replace(/[-.]/g, " ");
}
