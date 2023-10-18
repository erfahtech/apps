import { postWithToken } from "https://jscroot.github.io/api/croot.js";
import { setInner, getValue } from "https://jscroot.github.io/element/croot.js";
import { setCookieWithExpireHour } from "https://jscroot.github.io/cookie/croot.js";

export default function PostSignUp() {
  alert("post");
  let target_url = "https://asia-southeast2-urse-project.cloudfunctions.net/urse-post";
  let tokenkey = "token";
  let tokenvalue = "c49482e6de1fa07a349f354c2277e11bc7115297a40a1c09c52ef77b905d07c4";
  let datainjson = {
    email: getValue("emaillogin"),
    password: getValue("passwordlogin"),
  };

  postWithToken(target_url, tokenkey, tokenvalue, datainjson, responseData);
}

function responseData(result) {
  console.log("test", result.message);
  //   setInner("pesan", result.message);
  setCookieWithExpireHour("token", result.token, 2);
  //   if (setCookieWithExpireHour("token", result.token, 2) == null) {
  //     console.log(result.message);
  //   } else {
  //     window.location.href = "index.html";
  //   }
}
