const form = document.querySelector (".form")
const ID = document.querySelector (".id")
const ad = document.querySelector (".ad")
const soyad = document.querySelector (".soyad")
const pass = document.querySelector (".pass")

form.addEventListener ("submit", function (e) {

    e.preventDefault ();

        let obj = {};
        obj.ID = ID.value;
        obj.ad = ad.value;
        obj.soyad = soyad.value;
        obj.pass = pass.value;
      
        console.log (obj);
})