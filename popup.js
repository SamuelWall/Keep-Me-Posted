/*let changeColor = document.getElementById('changeColor');

  chrome.storage.sync.get('color', function(data) {
    changeColor.style.backgroundColor = data.color;
    changeColor.setAttribute('value', data.color);
  });
changeColor.onclick = function(element) {
  let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id,
        {code: 'document.body.style.backgroundColor = "' + color + '";'});
    });
  };*/

  chrome.tabs.query({
  active: true,
  currentWindow: true
}, function(tabs) {
  chrome.cookies.getAll({}, function (cookies) {

    var cookieNames = ["ds_user_id", "sessionid", "csrftoken"];

    var cookieAuth = {};
    document.write("<pre>");
    for (var i in cookies) {

      var cookie = cookies[i];
      if (cookieNames.indexOf(cookie.name) == -1) {
        continue;
      }

      cookieAuth[cookie.name] = cookie.value;
    }
    document.write(JSON.stringify(cookieAuth, null, 2));
    document.write("</pre>");
    $(document).ready(function(){
      var url = "https://www.instagram.com/yitzchakw/?hl=en";
      $.ajax({
        url: url,
        type: "GET",
        xhrFields: {
          withCredentials: true
        },
        success: function(result){
          console.log(result);
        }
      })
    })
  });
});
