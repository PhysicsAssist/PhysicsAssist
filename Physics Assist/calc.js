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
  var pct = Number(document.getElementById("pct").value);
  var awl = Number(document.getElementById("awl").value);
  var se = Number(document.getElementById("se").value);
  var jum = awl ** 2 + 2 * pct * se ;
  document.getElementById("jum").value = String(jum);
}

function vugt()
{
  var pcutg = Number(document.getElementById("pcutg").value);
  var awla = Number(document.getElementById("awla").value);
  var time = Number(document.getElementById("time").value);
  var juml = awla + pcutg * time;
  document.getElementById("juml").value = String(juml);
}

function sugt()
{
  var grav = Number(document.getElementById("grav").value);
  var wala = Number(document.getElementById("wala").value);
  var mase = Number(document.getElementById("mase").value);
  var jum1 = wala * mase + ( grav * mase ** 2 ) / 2 ;
  document.getElementById("jum1").value = String(jum1);
}

function vugs()
{
  var grv = Number(document.getElementById("grv").value);
  var initial = Number(document.getElementById("initial").value);
  var ses = Number(document.getElementById("ses").value);
  var jumla = initial ** 2 + 2 * grv * ses;
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