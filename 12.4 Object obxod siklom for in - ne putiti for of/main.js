const chalaDasturchi = {
  ism: 'Akmal',
  yosh: 23,
  sevganQizi: false,
  shahar: 'Kattaqurgon',
  salom: function(userName) {
    console.log(`Salom ${this.ism} / ${userName}`);
  }
}

chalaDasturchi.salom('asakew');

for (let key in chalaDasturchi) {
  console.log(key, ':', chalaDasturchi[key]);
}
