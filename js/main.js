window.onload = function() {
  var headers = document.querySelectorAll('.cal-day-header'),
    hosts = document.querySelectorAll('.detail.host');
  function toggleActive(el) {
    el.parentNode.classList.toggle('active');
  }
  function editHost(el) {
    var hostName = el.querySelector('a');
      hostName.style.display = 'none';
      el.parentNode.parentNode.style.height = '314px';
      var form = document.createElement('form');
      el.parentNode.appendChild(form);
      var input = document.createElement('input');
      input.classList.add('host-input');
      input.type = 'text';
      input.value = hostName.innerHTML;
      form.appendChild(input);
      var button = document.createElement('button');
      button.classList.add('host-submit');
      button.addEventListener('click', function(){setHost(this);});
      form.appendChild(button);
      var span = document.createElement('span');
      span.classList.add('check');
      button.appendChild(span);
  }
  function setHost(el) {
    el = el.parentNode;
    var hostInput = el.querySelector('.host-input').value;
    el.parentNode.querySelector('a').innerHTML = hostInput;
    el.parentNode.querySelector('a').style.display = 'block';
    el.parentNode.parentNode.removeAttribute('style');
    el.parentNode.removeChild(el);
  }
  for (var i = 0; i < headers.length; i++) {
    headers[i].addEventListener('click', function() {
      toggleActive(this);
    });
  }
  for (var i = 0; i < hosts.length; i++) {
    hosts[i].addEventListener('click', function() {
      editHost(this);
    });
  }
};