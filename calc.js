function fma()
{
  var Mv = Number(document.getElementById("Mv").value);
  var Av = Number(document.getElementById("Av").value);
  var total = Mv * Av;
  document.getElementById("total").value = String(total);
}

function sdt()
{
  var Dv = Number(document.getElementById("Dv").value);
  var Tv = Number(document.getElementById("Tv").value);
  var total = Dv/Tv;
  document.getElementById("totals").value = String(total);
  
}


function avut()
{
  var Vv = Number(document.getElementById("Vv").value);
  var Uv = Number(document.getElementById("Uv").value);
  var T = Number(document.getElementById("T").value);
  var total = ( Vv - Uv ) / T;
  document.getElementById("totala").value = String(total);
}

function vst()
{
  var Sv = Number(document.getElementById("Sv").value);
  var t = Number(document.getElementById("t").value);
  var total = Sv / t;
  document.getElementById("totalv").value = String(total);
}

function suvt()
{
  var v = Number(document.getElementById("v").value);
  var u = Number(document.getElementById("u").value);
  var TV = Number(document.getElementById("TV").value);
  var totalS = ( u + v ) / 2 * TV ;
  document.getElementById("totalS").value = String(totalS);
}

function suat()
{
  var pecut = Number(document.getElementById("pecut").value);
  var awal = Number(document.getElementById("awal").value);
  var masa = Number(document.getElementById("masa").value);
  var jumlah = awal * masa + ( pecut / 2 ) * masa ** 2 ;
  document.getElementById("jumlah").value = String(jumlah);
}

function vuas()
{
  var peCut = Number(document.getElementById("peCut").value);
  var halajuAwal = Number(document.getElementById("halajuAwal").value);
  var sesaran = Number(document.getElementById("sesaran").value);
  var jum = halajuAwal ** 2 + 2 * peCut * sesaran ;
  document.getElementById("jum").value = String(jum);
}

function vugt()
{
  var pecutgraviti = Number(document.getElementById("pecutgraviti").value);
  var halajUawal = Number(document.getElementById("halajUawal").value);
  var time = Number(document.getElementById("time").value);
  var juml = halajUawal + pecutgraviti * time;
  document.getElementById("juml").value = String(juml);
}

function sugt()
{
  var grav = Number(document.getElementById("grav").value);
  var awalan = Number(document.getElementById("awalan").value);
  var mase = Number(document.getElementById("mase").value);
  var jum1 = awalan * mase + ( grav * mase ** 2 ) / 2 ;
  document.getElementById("jum1").value = String(jum1);
}

function vugs()
{
  var grv = Number(document.getElementById("grv").value);
  var initial = Number(document.getElementById("initial").value);
  var sesaRan = Number(document.getElementById("sesaRan").value);
  var jumla = initial ** 2 + 2 * grv * sesaRan;
  document.getElementById("jumla").value = String(jumla);
}

function pmv()
{
  var mass = Number(document.getElementById("mass").value);
  var velo = Number(document.getElementById("velo").value);
  var tote = mass * velo;
  document.getElementById("tote").value = String(tote);
}


function jft()
{
  var daya = Number(document.getElementById("daya").value);
  var Impact = Number(document.getElementById("Impact").value);
  var j = daya * Impact;
  document.getElementById("j").value = String(j);
}

function fmvut()
{
  var berat = Number(document.getElementById("berat").value);
  var Initial = Number(document.getElementById("Initial").value);
  var final = Number(document.getElementById("final").value);
  var waktu = Number(document.getElementById("waktu").value);
  var impulse = ( berat * final - berat * Initial ) / waktu;
  document.getElementById("impulse").value = String(impulse);
}

function wmg()
{
  var Berat = Number(document.getElementById("Berat").value);
  var Gravity = Number(document.getElementById("Gravity").value);
  var w = Berat * Gravity;
  document.getElementById("w").value = String(w);
}