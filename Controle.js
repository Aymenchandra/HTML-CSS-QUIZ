var x = document.getElementById("Start");
var y = document.getElementById("task1");
var w = document.getElementById("task2");
var n = document.getElementById("task3");
var p = document.getElementById("task4");
var o = document.getElementById("task5");
var r = document.getElementById("result");
var z = document.getElementById("btn");
function Start()
{
    x.style.left = "-1000px";
    y.style.left = "50px";
    w.style.left = "1000px";
    n.style.left = "1000px";
    p.style.left = "1000px";
    o.style.left = "1000px";
    r.style.left = "1000px";
    z.style.left = "90px";
}
function Task1()
{
    x.style.left = "-1000px";
    y.style.left = "-1000px";
    w.style.left = "50px";
    n.style.left = "1000px";
    p.style.left = "1000px";
    o.style.left = "1000px";
    r.style.left = "1000px";
    z.style.left = "180px";
}
function Task2()
{
    x.style.left = "-1000px";
    y.style.left = "-1000px";
    w.style.left = "-1000px";
    n.style.left = "50px";
    p.style.left = "1000px";
    o.style.left = "1000px";
    r.style.left = "1000px";
    z.style.left = "280px";
}
function Task3()
{
    x.style.left = "-1000px";
    y.style.left = "-1000px";
    w.style.left = "-1000px";
    n.style.left = "-1000px";
    p.style.left = "50px";
    o.style.left = "1000px";
    r.style.left = "1000px";
    z.style.left = "380px";
}
function Task4()
{
    x.style.left = "-1000px";
    y.style.left = "-1000px";
    w.style.left = "-1000px";
    n.style.left = "-1000px";
    p.style.left = "-1000px";
    o.style.left = "50px";
    r.style.left = "1000px";
    z.style.left = "480px";
}
function result()
{
    x.style.left = "-1000px";
    y.style.left = "-1000px";
    w.style.left = "-1000px";
    n.style.left = "-1000px";
    p.style.left = "-1000px";
    o.style.left = "-1000px";
    r.style.left = "-80px";
    z.style.left = "480px";
}
a=0;
document.getElementById("score").innerHTML ="score:"+a;
document.getElementById("score1").innerHTML ="score:"+a;
document.getElementById("score2").innerHTML ="score:"+a;
document.getElementById("score3").innerHTML ="score:"+a;
document.getElementById("score4").innerHTML ="score:"+a;

function reponse(id,msg)
{
    if(msg=='true')
    {
        a = a+1;
        document.getElementById(id).style.background = "green";
        document.getElementById("score1").textContent= "score"+a;
        document.getElementById("score2").innerHTML= "score"+a;
        document.getElementById("score3").textContent= "score"+a;
        document.getElementById("score4").textContent= "score"+a;
        document.getElementById("correct").innerHTML=a;
        document.getElementById("wrong").innerHTML=5-a;
        document.getElementById("percentage").innerHTML=((a/5)*100)+"%";
        document.getElementById("total").innerHTML=a+"/"+5;
    }
    else
    {
        document.getElementById(id).style.background = "red";
        document.getElementById("correct").innerHTML=a;
        document.getElementById("wrong").innerHTML=5-a;
        document.getElementById("percentage").innerHTML=(a/5)*100;
        document.getElementById("total").innerHTML=a+"/"+5;
    }
}




