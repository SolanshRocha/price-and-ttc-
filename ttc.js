//var TVA = math.round(HT * pourCentTva * 50) / 50;
//var TTC = HT + TVA

function ttc() {
    var ht = parseInt(document.getElementById('HT').value);
    var tva = parseInt(document.getElementById('TVA').value);
    var pourcent = tva/100;
    var multiply = ht*pourcent;
    var add = ht+multiply;
    document.getElementById('myid').innerHTML = add;
    console.log(pourcent);
    console.log(multiply);
    console.log(add);
    
}

function puissance(){
    var puis = parsenInt(document.getElementById('numer2').value);
    var number = parsenInt(document.getElementById('numer1').value);
    var add = Math.pow(number, puis);
    document.getElementById('myid2').innerHTML = add;
    //return (Math.pow(a, b));
}



/*function CalculerMontantTTC()
parseInt(something that will transform into integer);
  {
  if (isNaN(puissance.numer1.value) == true)
  {
    alert('please tipe a correct.nunmer on the board');
    Form1.ht.value = '0';
  }
  else
  {
    Form1.TVA.value = (Form1.HT.value / 100) * 20 ;
    Form1.TTC.value = Number(Form1.HT.value) + Number(Form1.TVA.value) ;
  }
}



var result1 = console.log(TTC(10));
var result2 = console.log(puissance(10, 3));*/
