document.querySelector('.btn').addEventListener('click', () => {
  if (document.getElementById('logemail').value === 'Manavi') {
    if (document.getElementById('logpass').value === 'Adhikari') {
      document.querySelector('.login').style.display = 'none';
    } else {
      document.getElementById('logemail').value = '';
      document.getElementById('logpass').value = '';
    };
  } else {
    document.getElementById('logemail').value = '';
    document.getElementById('logpass').value = '';
  };
});

document.querySelector('.btn-link').addEventListener('click', () => {
  document.getElementById('logemail').value = 'Manavi';
  document.getElementById('logpass').value = 'Adhikari';
});

document.querySelector('.switch').addEventListener('click', () => {
  window.location.href = "Bday/index.html";
});

document.querySelector('.gift').addEventListener('click', () => {
  window.location.href = "Bday/index.html";
});
