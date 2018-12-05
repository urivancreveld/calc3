
var state="new"
var result=0;
var prevres=0;
var calcfunc;

function updatedisp ()
{
  document.getElementById("result").innerHTML=result;

}

function calc ()
{
  debugger;

  state="new"
  result=calcfunc()
  console.log(document.getElementById("result").value);
  updatedisp();
  calcfunc=null;
}

function addition()
{
  return parseFloat(result )+parseFloat(prevres)
}

function substract()
{
  return parseFloat(prevres )-parseFloat(result)
}

function multi()
{
  return parseFloat(result )*parseFloat(prevres)
}

function division()
{
  return parseFloat(prevres )/parseFloat(result)
}

function opressed(actype)
{

  state="new"
  prevres=result
  console.log(actype)
  calcfunc=eval(actype)

}
function numpress(val)
{
  if (state == "new") {
    state="inputing";
    result=val;
  } else {
    result=result.toString() + val.toString();
  }
  updatedisp();

  console.log(`pressed ${val}`)
}
