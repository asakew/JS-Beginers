const chalaDasturchi = {
  // objects
  ism: 'Akmal',
  yosh: 23,
  sevganQizi: false,
  shahar: 'Kattaqurgon',
  // metod object
  salom: function(userName) {
    console.log(`Salom ${chalaDasturchi.ism} / ${userName}`);
  }
}

chalaDasturchi.salom('asakew');
console.log(chalaDasturchi);
