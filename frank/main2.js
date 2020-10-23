console.log("我用JSONP跨域访问");

const JSONP = (url) => {
  return new Promise((resolve, reject) => {
    const random = "frankJSONPCallbackName" + Math.random();
    window[random] = (data) => {
      resolve(data);
    };
    const script = document.createElement("script");
    script.src = `${url}?callback=${random}`;
    script.onload = () => {
      script.remove();
    };
    script.onerror = () => {
      reject();
    };
    document.body.appendChild(script);
  });
};

JSONP("http://localhost:8888/friend.js").then((data) => {
  console.log(data);
});
