/////////////////ovladani///////////////////////

//tlacitka menu

document.getElementById("souboryopen").onclick = function(){
    document.getElementById("soubory").style.display = "block";
    document.getElementById("soubory").style.marginLeft = "30px";
    document.getElementById("soubory").style.marginTop = "60px";
}
document.getElementById("souboryclose").onclick = function(){
    document.getElementById("soubory").style.display = "none";
}

document.getElementById("ulozitopen").onclick = function(){
    document.getElementById("ulozit").style.display = "block";
    document.getElementById("ulozit").style.marginLeft = "100px";
    document.getElementById("ulozit").style.marginTop = "60px";
    refresh();
    document.getElementById("ulozitdata").value = JSON.stringify({nazev: nazevsoub, settings, telesa, grafy, spojnice, konstanty, grafyzav, podminky});
}
document.getElementById("ulozitclose").onclick = function(){
    document.getElementById("ulozit").style.display = "none";
}

document.getElementById("konstantyopen").onclick = function(){
    document.getElementById("konstantyinfo").style.display = "block";
    document.getElementById("konstantyinfo").style.marginLeft = "450px";
    document.getElementById("konstantyinfo").style.marginTop = "45px";
}
document.getElementById("konstantyclose").onclick = function(){
    document.getElementById("konstantyinfo").style.display = "none";
}

document.getElementById("pochodnotyopen").onclick = function(){
    document.getElementById("pochodnotyinfo").style.display = "block";
    document.getElementById("pochodnotyinfo").style.marginLeft = "460px";
    document.getElementById("pochodnotyinfo").style.marginTop = "85px";
}
document.getElementById("pochodnotyclose").onclick = function(){
    document.getElementById("pochodnotyinfo").style.display = "none";
}

document.getElementById("hodnotyopen").onclick = function(){
    document.getElementById("hodnotyinfo").style.display = "block";
    document.getElementById("hodnotyinfo").style.marginLeft = "470px";
    document.getElementById("hodnotyinfo").style.marginTop = "125px";
}
document.getElementById("hodnotyclose").onclick = function(){
    document.getElementById("hodnotyinfo").style.display = "none";
}

document.getElementById("podminkyopen").onclick = function(){
    document.getElementById("podminkyinfo").style.display = "block";
    document.getElementById("podminkyinfo").style.marginLeft = "480px";
    document.getElementById("podminkyinfo").style.marginTop = "165px";
    if(uzbezi == true){
        document.getElementById("playicon").innerHTML = "play_arrow";
        stopvypocet();
        uzbezi = false;
    }
}
document.getElementById("podminkyclose").onclick = function(){
    document.getElementById("podminkyinfo").style.display = "none";
}

document.getElementById("grafzavopen").onclick = function(){
    grafyzavget();
    grafyzav.push({opened: true, margleft: Number(40+(grafyzav.length)%5*55)+"px",
        margtop: Number(60+Math.floor((grafyzav.length)/5)*30)+"px", velx: "", vely: "", zvetx: settings.zvetseni, 
        zvety: settings.zvetseni, posx: 0, posy: 0, krokx: settings.osaXvzdal, kroky: settings.osaYvzdal,
        coord: ["",""]});
    grafzavadd();
}

document.getElementById("settingsopen").onclick = function(){
    document.getElementById("settings").style.display = "block";
    document.getElementById("settings").style.marginLeft = "550px";
    document.getElementById("settings").style.marginTop = "20px";
}
document.getElementById("settingsclose").onclick = function(){
    document.getElementById("settings").style.display = "none";
}


//tlacitka objekty

let objektyblok = true;
document.getElementById("objektyskryt").onclick = function(){
    if(objektyblok == true){
        document.getElementById("objekty").style.display = "none";
        document.getElementById("objektyskryticon").innerHTML = "arrow_forward_ios";
        document.getElementById("objektyskryt").style.marginLeft = "0px";
        document.getElementById("zalozky").style.marginLeft = "5px";
        document.getElementById("nazevinfo").style.marginLeft = "10px";
        document.getElementById("objektyskryt").style.paddingLeft = "0px";
        objektyblok = false;
    }
    else{
        document.getElementById("objekty").style.display = "block";
        document.getElementById("objektyskryticon").innerHTML = "arrow_back_ios";
        document.getElementById("objektyskryt").style.marginLeft = "410px";
        document.getElementById("zalozky").style.marginLeft = "415px";
        document.getElementById("nazevinfo").style.marginLeft = "420px";
        document.getElementById("objektyskryt").style.paddingLeft = "6px";
        objektyblok = true;
    }
}

document.getElementById("telesaopen").onclick = function(){
    document.getElementById("telesa").style.display = "block";
    document.getElementById("grafy").style.display = "none";
    document.getElementById("spojnice").style.display = "none";
    document.getElementById("telesaopen").style.backgroundColor = "white";
    document.getElementById("grafyopen").style.backgroundColor = "var(--hlbarva)";
    document.getElementById("spojniceopen").style.backgroundColor = "var(--hlbarva)";
    document.getElementById("telesaopen").style.color = "var(--pismo2)";
    document.getElementById("grafyopen").style.color = "var(--pismo1)";
    document.getElementById("spojniceopen").style.color = "var(--pismo1)";
}
document.getElementById("grafyopen").onclick = function(){
    document.getElementById("grafy").style.display = "block";
    document.getElementById("telesa").style.display = "none";
    document.getElementById("spojnice").style.display = "none";
    document.getElementById("telesaopen").style.backgroundColor = "var(--hlbarva)";
    document.getElementById("grafyopen").style.backgroundColor = "white";
    document.getElementById("spojniceopen").style.backgroundColor = "var(--hlbarva)";
    document.getElementById("telesaopen").style.color = "var(--pismo1)";
    document.getElementById("grafyopen").style.color = "var(--pismo2)";
    document.getElementById("spojniceopen").style.color = "var(--pismo1)";
}
document.getElementById("spojniceopen").onclick = function(){
    document.getElementById("spojnice").style.display = "block";
    document.getElementById("grafy").style.display = "none";
    document.getElementById("telesa").style.display = "none";
    document.getElementById("telesaopen").style.backgroundColor = "var(--hlbarva)";
    document.getElementById("grafyopen").style.backgroundColor = "var(--hlbarva)";
    document.getElementById("spojniceopen").style.backgroundColor = "white";
    document.getElementById("telesaopen").style.color = "var(--pismo1)";
    document.getElementById("grafyopen").style.color = "var(--pismo1)";
    document.getElementById("spojniceopen").style.color = "var(--pismo2)";
}


//pohyboken

window.addEventListener("mousemove", function(e){
    for(let i of document.querySelectorAll(".oknomenu")){
        i.addEventListener("mousedown",function(){
            px = e.clientX-Number(getComputedStyle(document.getElementById(this.parentNode.id)).marginLeft.slice(0, -2));
            py = e.clientY-Number(getComputedStyle(document.getElementById(this.parentNode.id)).marginTop.slice(0, -2));
            zakliknuto = this.parentNode.id;
        })
        if(e.buttons == 1 && zakliknuto != null){
            document.getElementById(zakliknuto).style.marginLeft = String(e.clientX-px)+"px";
            document.getElementById(zakliknuto).style.marginTop = String(e.clientY-py)+"px";
            $("body").css("user-select","none");
        }
        else{
            zakliknuto = null;
        }
    }
})

//input textpole

let inputtextpoleid = null;
window.addEventListener("mousedown", function(e){
    if(e.target.id != "textpole" && e.target.parentNode.id != "textpole" && e.target.parentNode.parentNode.id != "textpole" && inputtextpoleid != null && document.getElementById("textpole").style.display == "block"){
        document.getElementById("textpole").style.display = "none";
        document.getElementById(inputtextpoleid).value = document.getElementById("textpolepole").value;
    }
    for(let i of document.getElementsByTagName("input")){
        i.addEventListener("contextmenu", function(e2){
            e2.preventDefault();
            document.getElementById("textpole").style.display = "block";
            document.getElementById("textpole").style.marginLeft = String(e.clientX)+"px";
            document.getElementById("textpole").style.marginTop = String(e.clientY-60)+"px";
            document.getElementById("textpolepole").value = i.value;
            inputtextpoleid = i.id;
            return false;
            
        }, false)
    }
})


////////////////hlavni program/////////////////


let souboryzabud = [
    {
        nazev: "Výchozí",
        settings: {
            hlbarva: "rgb(255,225,50)",
            barvapismo1: "black",
            barvapismo2: "black",
            osyzobr: true,
            drahyzobr: true,
            body: true,
            zvetseni: 50,
            posunX: 0,
            posunY: 0,
            osaXvzdal: 2,
            osaYvzdal: 2,
            hrubostdrah: 1,
            hrubostgraf: 0.1,
            zaokr: 5,
            maxcif: 6,
            maxdes: 5,
            dt: 0.0005,
            h: 0.000001,
            dobacyklu: 10,
            vypoctyvcyklu: 20,
            oknoX: $("#can1").width(),
            oknoY: $("#can1").height(),
        },
        telesa: [],
        grafy: [],
        spojnice: [],
        konstanty: [],
        grafyzav: [],
        podminky: []
    },
    {"nazev":"Vrhy","settings":{"hlbarva":"rgb(255,225,50)","barvapismo1":"black","barvapismo2":"black","osyzobr":true,"drahyzobr":true,"body":true,"zvetseni":10,"posunX":-20,"posunY":-20,"osaXvzdal":5,"osaYvzdal":5,"hrubostdrah":1,"hrubostgraf":0.1,"zaokr":3,"maxcif":6,"maxdes":3,"dt":0.001,"h":0.000001,"dobacyklu":10,"vypoctyvcyklu":20,"oknoX":1280,"oknoY":551.333},"telesa":[{"poradi":1,"visibility":true,"nazev":"Hmotný bod","barva":"black","rovnice":["0","-g"],"popisek":["0","-g"],"hodnoty0":[],"hodnoty":[[0,15],[25,15]],"pochodnoty":[["0","15"],["25","15"]],"pocatek":["0","0"],"velikost":"0.5","system":"Kartézský","x1":"x1_1","x2":"x2_1","tableau":{"typ":"Eulerova metoda (midpoint)"}}],"grafy":[],"spojnice":[],"konstanty":[{"upravovano":false,"nazev":"Tíhové zrychlení","znacka":"g","hodnota":"9.81","popisek":"g=9.81"}],"grafyzav":[{"opened":false,"margleft":"298px","margtop":"193px","velx":"t","vely":"x1_1","zvetx":"50","zvety":"2","posx":"0","posy":"0","krokx":"1","kroky":"10","coord":["",""]},{"opened":false,"margleft":"-1px","margtop":"193px","velx":"t","vely":"x2_1","zvetx":"50","zvety":"2","posx":"0","posy":"0","krokx":"1","kroky":"10","coord":["",""]}],"podminky":[{"visibility":true,"hodnoty":["0","x2_1"]}]},
    {"nazev":"Matematické kyvadlo","settings":{"hlbarva":"rgb(255,225,50)","barvapismo1":"black","barvapismo2":"black","osyzobr":false,"drahyzobr":true,"body":true,"zvetseni":50,"posunX":0,"posunY":3,"osaXvzdal":2,"osaYvzdal":2,"hrubostdrah":10,"hrubostgraf":0.1,"zaokr":3,"maxcif":6,"maxdes":3,"dt":0.001,"h":0.000001,"dobacyklu":10,"vypoctyvcyklu":10,"oknoX":1280,"oknoY":551.333},"telesa":[{"poradi":1,"visibility":true,"nazev":"Závaží","barva":"black","rovnice":["-(g/l)*Math.sin(x1_1)","0"],"popisek":["-\\frac{g}{l}\\sin{q_{1_1}}","0"],"hodnoty0":[],"hodnoty":[[1,0],[4,0]],"pochodnoty":[["1","0"],["l","0"]],"pocatek":["0","0"],"velikost":"0.1","system":"Polární","x1":"x1_1","x2":"x2_1","tableau":{"typ":"Rungeova-Kuttova (4. řádu)","c":[0,0.5,0.5,1],"b":[0.16666666666666666,0.3333333333333333,0.3333333333333333,0.16666666666666666],"a":[[0.5],[0,0.5],[0,0,1]]}}],"grafy":[],"spojnice":[{"poradi":1,"visibility":true,"nazev":"Strop","barva":"black","x1":"-1","y1":"0","x2":"1","y2":"0","popisek":"","polomer":"","zavity":""},{"poradi":2,"visibility":true,"nazev":"Závěs","barva":"black","x1":"0","y1":"0","x2":"x1_1k","y2":"x2_1k","popisek":"A(0,0), B(q_{1_1}, q_{2_1})","polomer":"","zavity":""}],"konstanty":[{"upravovano":false,"nazev":"Tíhové zrychlení","znacka":"g","hodnota":"9.81","popisek":"g=9.81"},{"upravovano":false,"nazev":"Délka závěsu","znacka":"l","hodnota":"4","popisek":"l=4"}],"grafyzav":[{"opened":false,"margleft":"707px","margtop":"47px","velx":"t","vely":"x1_1","zvetx":"50","zvety":"100","posx":"-4","posy":"0","krokx":"1","kroky":"1","coord":["",""]}],"podminky":[]},
    {"nazev":"Pružina","settings":{"hlbarva":"rgb(255,225,50)","barvapismo1":"black","barvapismo2":"black","osyzobr":false,"drahyzobr":true,"body":true,"zvetseni":50,"posunX":0,"posunY":3,"osaXvzdal":2,"osaYvzdal":2,"hrubostdrah":10,"hrubostgraf":0.1,"zaokr":3,"maxcif":6,"maxdes":3,"dt":0.005,"h":0.000001,"dobacyklu":10,"vypoctyvcyklu":2,"oknoX":1280,"oknoY":551.333},"telesa":[{"poradi":1,"visibility":true,"nazev":"Závaží","barva":"black","rovnice":["0","-(k/m)*x2_1-g"],"popisek":["0","-\\frac{k}{m}q_{2_1}-g"],"hodnoty0":[],"hodnoty":[[0,0],[-3,0]],"pochodnoty":[["0","0"],["-3","0"]],"pocatek":["0","-2"],"velikost":"0.1","system":"Kartézský","x1":"x1_1","x2":"x2_1","tableau":{"typ":"Rungeova-Kuttova (4. řádu)","c":[0,0.5,0.5,1],"b":[0.16666666666666666,0.3333333333333333,0.3333333333333333,0.16666666666666666],"a":[[0.5],[0,0.5],[0,0,1]]}}],"grafy":[],"spojnice":[{"poradi":1,"visibility":true,"nazev":"Strop","barva":"black","x1":"-1","y1":"0","x2":"1","y2":"0","popisek":"","polomer":"","zavity":""},{"poradi":2,"visibility":true,"nazev":"Pružina","barva":"black","x1":"0","y1":"0","x2":"x1_1","y2":"x2_1-2","popisek":"A(0,0), B(q_{1_1}, q_{2_1}-2)","polomer":"0.2","zavity":"20"}],"konstanty":[{"upravovano":false,"nazev":"Tíhové zrychlení","znacka":"g","hodnota":"9.81","popisek":"g=9.81"},{"upravovano":false,"nazev":"Tuhost pružiny","znacka":"k","hodnota":"5","popisek":"k=5"},{"upravovano":false,"nazev":"Hmotnost závaží","znacka":"m","hodnota":"1","popisek":"m=1"}],"grafyzav":[{"opened":false,"margleft":"40px","margtop":"60px","velx":"t","vely":"x2_1","zvetx":"50","zvety":"50","posx":"-4","posy":"2","krokx":"1","kroky":"1","coord":["",""]}],"podminky":[]},
    {"nazev":"Kapitzovo kyvadlo","settings":{"hlbarva":"rgb(255,225,50)","barvapismo1":"black","barvapismo2":"black","osyzobr":false,"drahyzobr":true,"body":true,"zvetseni":50,"posunX":0,"posunY":0,"osaXvzdal":2,"osaYvzdal":2,"hrubostdrah":1,"hrubostgraf":0.1,"zaokr":3,"maxcif":6,"maxdes":3,"dt":0.001,"h":0.000001,"dobacyklu":10,"vypoctyvcyklu":10,"oknoX":1280,"oknoY":551.333},"telesa":[{"poradi":1,"visibility":true,"nazev":"Závaží","barva":"black","rovnice":["-Math.sin(x1_1)*(g+_a*ny*ny*Math.cos(ny*_t))/l","0"],"popisek":["-\\sin{q_{1_1}}\\frac{g+a\\nu^2\\cos{\\nu t}}{l}","0"],"hodnoty0":[],"hodnoty":[[3,0],[4,0]],"pochodnoty":[["3","0"],["l","0"]],"pocatek":["0","vych"],"velikost":"0.1","system":"Polární","x1":"x1_1","x2":"x2_1","tableau":{"typ":"Rungeova-Kuttova (4. řádu)","c":[0,0.5,0.5,1],"b":[0.16666666666666666,0.3333333333333333,0.3333333333333333,0.16666666666666666],"a":[[0.5],[0,0.5],[0,0,1]]}}],"grafy":[],"spojnice":[{"poradi":1,"visibility":true,"nazev":"Závěs","barva":"black","x1":"0","y1":"vych","x2":"x1_1k","y2":"x2_1k+vych","popisek":"A(0,a_{\\text{vych}}), B(q_{1_1},q_{2_1}+a_{\\text{vych}})","polomer":"","zavity":""},{"poradi":2,"visibility":true,"nazev":"Držák","barva":"black","x1":"0","y1":"-_a","x2":"0","y2":"_a","popisek":"A(0,-a), B(0,a)","polomer":"","zavity":""}],"konstanty":[{"upravovano":false,"nazev":"Tíhové zrychlení","znacka":"g","hodnota":"9.81","popisek":"g=9.81"},{"upravovano":false,"nazev":"Frekvence kmitů závěsu","znacka":"ny","hodnota":"30","popisek":"\\nu=30"},{"upravovano":false,"nazev":"Délka závěsu","znacka":"l","hodnota":"4","popisek":"l=4"},{"upravovano":false,"nazev":"Amplituda výchylky závěsu","znacka":"a","hodnota":"0.4","popisek":"a=0.4"},{"upravovano":false,"nazev":"Výchylka závěsu","znacka":"vych","hodnota":"_a*Math.cos(ny*_t)","popisek":"a_{\\text{vych}}=a\\cos{\\nu t}"}],"grafyzav":[{"opened":false,"margleft":"40px","margtop":"60px","velx":"t","vely":"x1_1","zvetx":"50","zvety":"50","posx":"-4","posy":"-2","krokx":"2","kroky":"1","coord":["",""]},{"opened":false,"margleft":"746px","margtop":"146px","velx":"t","vely":"v1_1","zvetx":"50","zvety":"100","posx":"-4","posy":"0","krokx":"1","kroky":"0.5","coord":["",""]}],"podminky":[]},
    {"nazev":"Landauův vozíček","settings":{"hlbarva":"rgb(255,225,50)","barvapismo1":"black","barvapismo2":"black","osyzobr":false,"drahyzobr":true,"body":true,"zvetseni":100,"posunX":0,"posunY":0,"osaXvzdal":2,"osaYvzdal":2,"hrubostdrah":1,"hrubostgraf":0.1,"zaokr":3,"maxcif":6,"maxdes":3,"dt":0.005,"h":0.000001,"dobacyklu":10,"vypoctyvcyklu":2,"oknoX":1280,"oknoY":551.333},"telesa":[{"poradi":1,"visibility":true,"nazev":"Závaží","barva":"black","rovnice":["-(A/l)*(g*(mz+mv)+mz*l*v1_1*v1_1*Math.cos(x1_1))","0"],"popisek":["-\\frac{A}{l}(g(m_\\text{z}+m_\\text{v})+m_\\text{z}l\\dot{q}_{1_1}^2\\cos{q_{1_1}})","0"],"hodnoty0":[],"hodnoty":[[1,0],[1,0]],"pochodnoty":[["1","0"],["l","0"]],"pocatek":["x1_2","0"],"velikost":"0.1","system":"Polární","x1":"x1_1","x2":"x2_1","tableau":{"typ":"Rungeova-Kuttova (4. řádu)","c":[0,0.5,0.5,1],"b":[0.16666666666666666,0.3333333333333333,0.3333333333333333,0.16666666666666666],"a":[[0.5],[0,0.5],[0,0,1]]}},{"poradi":2,"visibility":false,"nazev":"Vozík","barva":"black","rovnice":["A*mz*(l*v1_1*v1_1+g*Math.cos(x1_1))","0"],"popisek":["Am_\\text{z}(l\\dot{q}_{1_1}^2+g\\cos{q_{1_1}})","0"],"hodnoty0":[],"hodnoty":[[0,0.5],[0,0]],"pochodnoty":[["0","0.5"],["0","0"]],"pocatek":["0","0"],"velikost":"0","system":"Kartézský","x1":"x1_2","x2":"x2_2","tableau":{"typ":"Rungeova-Kuttova (4. řádu)","c":[0,0.5,0.5,1],"b":[0.16666666666666666,0.3333333333333333,0.3333333333333333,0.16666666666666666],"a":[[0.5],[0,0.5],[0,0,1]]}},{"poradi":3,"visibility":true,"nazev":"Kolečko 1","barva":"black","rovnice":["0","0"],"popisek":["0","0"],"hodnoty0":[],"hodnoty":[[0,0],[0,0]],"pochodnoty":[["0","0"],["0","0"]],"pocatek":["x1_2-l/3","-0.05"],"velikost":"0.05","system":"Kartézský","x1":"x1_3","x2":"x2_3","tableau":{"typ":"Eulerova metoda"}},{"poradi":4,"visibility":true,"nazev":"Kolečko 2","barva":"black","rovnice":["0","0"],"popisek":["0","0"],"hodnoty0":[],"hodnoty":[[0,0],[0,0]],"pochodnoty":[["0","0"],["0","0"]],"pocatek":["x1_2+l/3","-0.05"],"velikost":"0.05","system":"Kartézský","x1":"x1_4","x2":"x2_4","tableau":{"typ":"Eulerova metoda"}}],"grafy":[{"poradi":1,"visibility":true,"nazev":"Graf 1","barva":"black","predpis":"-0.1","popisek":"-0.1"}],"spojnice":[{"poradi":1,"visibility":true,"nazev":"Závěs","barva":"black","x1":"x1_2","y1":"x2_2","x2":"x1_1k+x1_2","y2":"x2_1k","popisek":"A(q_{1_2}, q_{2_2}), B(q_{1_1}+q_{1_2}, q_{2_1})","polomer":"","zavity":""},{"poradi":2,"visibility":true,"nazev":"Vozík","barva":"black","x1":"x1_2-l/3","y1":"0","x2":"x1_2+l/3","y2":"0","popisek":"A(q_{1_2}-\\frac{l}{3}, 0), B(q_{1_2}+\\frac{l}{3}, 0))","polomer":"","zavity":""}],"konstanty":[{"upravovano":false,"nazev":"Tíhové zrychlení","znacka":"g","hodnota":"9.81","popisek":"g=9.81"},{"upravovano":false,"nazev":"Délka závěsu","znacka":"l","hodnota":"1","popisek":"l=1"},{"upravovano":false,"nazev":"Hmotnost vozíku","znacka":"mv","hodnota":"1","popisek":"m_\\text{v}=1"},{"upravovano":false,"nazev":"Hmotnost závaží","znacka":"mz","hodnota":"1","popisek":"m_\\text{z}=1"},{"upravovano":false,"nazev":"Pomocná proměnná","znacka":"A","hodnota":"(Math.sin(x1_1))/(mz+mv-mz*Math.cos(x1_1)*Math.cos(x1_1))","popisek":"A=\\frac{\\sin{q_{1_1}}}{m_\\text{z}+m_\\text{v}-m_\\text{z}\\cos^2{q_{1_1}}}"}],"grafyzav":[{"opened":false,"margleft":"40px","margtop":"60px","velx":"t","vely":"x1_1","zvetx":"100","zvety":"100","posx":"-2","posy":"0","krokx":"1","kroky":"1","coord":["",""]},{"opened":false,"margleft":"-5px","margtop":"36px","velx":"t","vely":"x1_2","zvetx":"60","zvety":"60","posx":"-4","posy":"-2","krokx":"1","kroky":"1","coord":["",""]},{"opened":false,"margleft":"150px","margtop":"60px","velx":"t","vely":"v1_2","zvetx":"50","zvety":"50","posx":"-4","posy":"0","krokx":"1","kroky":"1","coord":["",""]},{"opened":false,"margleft":"205px","margtop":"60px","velx":"t","vely":"a1_1","zvetx":"100","zvety":"10","posx":"-2","posy":"0","krokx":"1","kroky":"5","coord":["",""]},{"opened":false,"margleft":"190px","margtop":"51px","velx":"t","vely":"a1_2","zvetx":"100","zvety":"10","posx":"-2","posy":"0","krokx":"1","kroky":"5","coord":["",""]}],"podminky":[]},
    {"nazev":"Elastické kyvadlo","settings":{"hlbarva":"rgb(255,225,50)","barvapismo1":"black","barvapismo2":"black","osyzobr":false,"drahyzobr":true,"body":true,"zvetseni":100,"posunX":0,"posunY":2,"osaXvzdal":1,"osaYvzdal":1,"hrubostdrah":2,"hrubostgraf":0.1,"zaokr":3,"maxcif":6,"maxdes":3,"dt":0.005,"h":0.000001,"dobacyklu":10,"vypoctyvcyklu":2,"oknoX":1280,"oknoY":551.333},"telesa":[{"poradi":1,"visibility":true,"nazev":"Závaží","barva":"black","rovnice":["-(2*v1_1*v2_1+g*Math.sin(x1_1))/(l+x2_1)","(l+x2_1)*v1_1*v1_1+g*Math.cos(x1_1)-(k/m)*x2_1"],"popisek":["-\\frac{1}{l+q_{2_1}}(2\\dot{q}_{1_1}\\dot{q}_{2_1}+g\\sin{q_{1_1}})","(l+q_{2_1})\\dot{q}_{1_1}^2+g\\cos{q_{1_1}}-\\frac{k}{m}q_{2_1}"],"hodnoty0":[],"hodnoty":[[1,0],[1,0]],"pochodnoty":[["1","0"],["1","0"]],"pocatek":["l*Math.sin(x1_1)","-l*Math.cos(x1_1)"],"velikost":"0.1","system":"Polární","x1":"x1_1","x2":"x2_1","tableau":{"typ":"Rungeova-Kuttova (4. řádu)","c":[0,0.5,0.5,1],"b":[0.16666666666666666,0.3333333333333333,0.3333333333333333,0.16666666666666666],"a":[[0.5],[0,0.5],[0,0,1]]}}],"grafy":[],"spojnice":[{"poradi":1,"visibility":true,"nazev":"Pružina","barva":"black","x1":"0","y1":"0","x2":"x1_1k+l*Math.sin(x1_1)","y2":"x2_1k-l*Math.cos(x1_1)","popisek":"A(0,0), B(q_{1_1}, q_{2_1})","polomer":"0.1","zavity":"20"},{"poradi":2,"visibility":true,"nazev":"Strop","barva":"black","x1":"-0.5","y1":"0","x2":"0.5","y2":"0","popisek":"","polomer":"","zavity":""}],"konstanty":[{"upravovano":false,"nazev":"Tíhové zrychlení","znacka":"g","hodnota":"9.81","popisek":"g=9.81"},{"upravovano":false,"nazev":"Tuhost pružiny","znacka":"k","hodnota":"15","popisek":"k=15"},{"upravovano":false,"nazev":"Hmotnost závaží","znacka":"m","hodnota":"1","popisek":"m=1"},{"upravovano":false,"nazev":"Délka pružiny","znacka":"l","hodnota":"1","popisek":"l=1"}],"grafyzav":[{"opened":false,"margleft":"40px","margtop":"60px","velx":"t","vely":"x1_1","zvetx":"50","zvety":"100","posx":"-4","posy":"0","krokx":"1","kroky":"1","coord":["",""]},{"opened":false,"margleft":"95px","margtop":"60px","velx":"t","vely":"x2_1","zvetx":"100","zvety":"100","posx":"-2","posy":"-1","krokx":"1","kroky":"1","coord":["",""]},{"opened":false,"margleft":"206px","margtop":"58px","velx":"t","vely":"v1_1","zvetx":"20","zvety":"20","posx":"-10","posy":"0","krokx":"2","kroky":"2","coord":["",""]},{"opened":false,"margleft":"55px","margtop":"49px","velx":"t","vely":"v2_1","zvetx":"20","zvety":"20","posx":"-10","posy":"0","krokx":"2","kroky":"2","coord":["",""]},{"opened":false,"margleft":"-28px","margtop":"64px","velx":"t","vely":"a1_1","zvetx":"20","zvety":"8","posx":"-10","posy":"0","krokx":"2","kroky":"5","coord":["",""]}],"podminky":[]},
    {"nazev":"Dvojité kyvadlo","settings":{"hlbarva":"rgb(255,225,50)","barvapismo1":"black","barvapismo2":"black","osyzobr":false,"drahyzobr":true,"body":true,"zvetseni":100,"posunX":0,"posunY":2,"osaXvzdal":2,"osaYvzdal":2,"hrubostdrah":1,"hrubostgraf":0.1,"zaokr":3,"maxcif":6,"maxdes":3,"dt":0.005,"h":0.000001,"dobacyklu":10,"vypoctyvcyklu":2,"oknoX":1280,"oknoY":551.333},"telesa":[{"poradi":1,"visibility":true,"nazev":"1. závaží","barva":"black","rovnice":["(A*l2-B*Math.cos(x1_1-x1_2))/(C*l1*l2-l1*Math.pow(Math.cos(x1_1-x1_2), 2))","0"],"popisek":["\\frac{Al_2-B\\cos{(q_{1_1}-q_{1_2})}}{Cl_1l_2-l_1\\cos^2{(q_{1_1}-q_{1_2})}}","0"],"hodnoty0":[],"hodnoty":[[1,0],[1,0]],"pochodnoty":[["1","0"],["l1","0"]],"pocatek":["0","0"],"velikost":"0.1","system":"Polární","x1":"x1_1","x2":"x2_1","tableau":{"typ":"Rungeova-Kuttova (4. řádu)","c":[0,0.5,0.5,1],"b":[0.16666666666666666,0.3333333333333333,0.3333333333333333,0.16666666666666666],"a":[[0.5],[0,0.5],[0,0,1]]}},{"poradi":2,"visibility":true,"nazev":"2. závaží","barva":"black","rovnice":["(A*Math.cos(x1_1-x1_2)-B*C)/(Math.pow(Math.cos(x1_1-x1_2), 2)-l2*C)","0"],"popisek":["\\frac{A\\cos{(q_{1_1}-q_{1_2})}-BC}{\\cos^2{(q_{1_1}-q_{1_2})}-l_2C}","0"],"hodnoty0":[],"hodnoty":[[0,3],[1,0]],"pochodnoty":[["0","3"],["l2","0"]],"pocatek":["x1_1k","x2_1k"],"velikost":"0.1","system":"Polární","x1":"x1_2","x2":"x2_2","tableau":{"typ":"Rungeova-Kuttova (4. řádu)","c":[0,0.5,0.5,1],"b":[0.16666666666666666,0.3333333333333333,0.3333333333333333,0.16666666666666666],"a":[[0.5],[0,0.5],[0,0,1]]}}],"grafy":[],"spojnice":[{"poradi":1,"visibility":true,"nazev":"1. závěs","barva":"black","x1":"0","y1":"0","x2":"x1_1k","y2":"x2_1k","popisek":"A(0,0), B(q_{1_1}, q_{2_1})","polomer":"","zavity":""},{"poradi":2,"visibility":true,"nazev":"2. závěs","barva":"black","x1":"x1_1k","y1":"x2_1k","x2":"x1_2k+x1_1k","y2":"x2_2k+x2_1k","popisek":"A(q_{1_1}, q_{2_1}), B(q_{1_2}+q_{1_1}, q_{2_2}+q_{2_1})","polomer":"","zavity":""}],"konstanty":[{"upravovano":false,"nazev":"Tíhové zrychlení","znacka":"g","hodnota":"9.81","popisek":"g=9.81"},{"upravovano":false,"nazev":"Hmotnost 1. závaží","znacka":"m1","hodnota":"1","popisek":"m_1=1"},{"upravovano":false,"nazev":"Hmotnost 2. závaží","znacka":"m2","hodnota":"1","popisek":"m_2=1"},{"upravovano":false,"nazev":"Délka 1. závěsu","znacka":"l1","hodnota":"1","popisek":"l_1=1"},{"upravovano":false,"nazev":"Délka 2. závěsu","znacka":"l2","hodnota":"1","popisek":"l_2=1"},{"upravovano":false,"nazev":"Pomocná proměnná","znacka":"A","hodnota":"-C*g*Math.sin(x1_1)-v1_2*v1_2*Math.sin(x1_1-x1_2)","popisek":"A=-Cg\\sin{q_{1_1}}-\\dot{q}_{1_2}^2\\sin{(q_{1_1}-q_{1_2})}"},{"upravovano":false,"nazev":"Pomocná proměnná","znacka":"B","hodnota":"l1*v1_1*v1_1*Math.sin(x1_1-x1_2)-g*Math.sin(x1_2)","popisek":"B=l_1\\dot{q}_{1_1}^2\\sin{(q_{1_1}-q_{1_2})}-g\\sin{q_{1_2}}"},{"upravovano":false,"nazev":"Pomocná proměnná","znacka":"C","hodnota":"(m1+m2)/(m2*l2)","popisek":"C=\\frac{m_1+m_2}{m_2l_2}"}],"grafyzav":[{"opened":false,"margleft":"6px","margtop":"31px","velx":"t","vely":"x1_1","zvetx":"100","zvety":"100","posx":"-2","posy":"0","krokx":"1","kroky":"1","coord":["",""]},{"opened":false,"margleft":"95px","margtop":"60px","velx":"t","vely":"x1_2","zvetx":"50","zvety":"50","posx":"-4","posy":"0","krokx":"1","kroky":"1","coord":["",""]}],"podminky":[]},
    {"nazev":"Newtonův gravitační zákon","settings":{"hlbarva":"rgb(255,225,50)","barvapismo1":"black","barvapismo2":"black","osyzobr":true,"drahyzobr":true,"body":true,"zvetseni":0.8,"posunX":0,"posunY":0,"osaXvzdal":100,"osaYvzdal":100,"hrubostdrah":1,"hrubostgraf":0.1,"zaokr":3,"maxcif":6,"maxdes":3,"dt":0.01,"h":0.000001,"dobacyklu":10,"vypoctyvcyklu":2,"oknoX":1280,"oknoY":551.333},"telesa":[{"poradi":1,"visibility":true,"nazev":"Těleso 1","barva":"blue","rovnice":["G*((M2*(x1_2-x1_1))/Math.pow(Math.pow((x1_2-x1_1),2)+Math.pow((x2_2-x2_1),2),3/2)+(M3*(x1_3-x1_1))/Math.pow(Math.pow((x1_3-x1_1),2)+Math.pow((x2_3-x2_1),2),3/2)+(M4*(x1_4-x1_1))/Math.pow(Math.pow((x1_4-x1_1),2)+Math.pow((x2_4-x2_1),2),3/2))","G*((M2*(x2_2-x2_1))/Math.pow(Math.pow((x1_2-x1_1),2)+Math.pow((x2_2-x2_1),2),3/2)+(M3*(x2_3-x2_1))/Math.pow(Math.pow((x1_3-x1_1),2)+Math.pow((x2_3-x2_1),2),3/2)+(M4*(x2_4-x2_1))/Math.pow(Math.pow((x1_4-x1_1),2)+Math.pow((x2_4-x2_1),2),3/2))"],"popisek":["a_{\\text{g}_x}","a_{\\text{g}_y}"],"hodnoty0":[],"hodnoty":[[-8,7],[-197,0]],"pochodnoty":[["-8","7"],["-197","0"]],"pocatek":["0","0"],"velikost":"3","system":"Kartézský","x1":"x1_1","x2":"x2_1","tableau":{"typ":"Rungeova-Kuttova (2. řádu)","c":[0,0.5],"b":[0,1],"a":[[0.5]]}},{"poradi":2,"visibility":true,"nazev":"Těleso 2","barva":"red","rovnice":["G*((M1*(x1_1-x1_2))/Math.pow(Math.pow((x1_1-x1_2),2)+Math.pow((x2_1-x2_2),2),3/2)+(M3*(x1_3-x1_2))/Math.pow(Math.pow((x1_3-x1_2),2)+Math.pow((x2_3-x2_2),2),3/2)+(M4*(x1_4-x1_2))/Math.pow(Math.pow((x1_4-x1_2),2)+Math.pow((x2_4-x2_2),2),3/2))","G*((M1*(x2_1-x2_2))/Math.pow(Math.pow((x1_1-x1_2),2)+Math.pow((x2_1-x2_2),2),3/2)+(M3*(x2_3-x2_2))/Math.pow(Math.pow((x1_3-x1_2),2)+Math.pow((x2_3-x2_2),2),3/2)+(M4*(x2_4-x2_2))/Math.pow(Math.pow((x1_4-x1_2),2)+Math.pow((x2_4-x2_2),2),3/2))"],"popisek":["a_{\\text{g}_x}","a_{\\text{g}_y}"],"hodnoty0":[],"hodnoty":[[-25,70],[-177,0]],"pochodnoty":[["-25","70"],["-177","0"]],"pocatek":["0","0"],"velikost":"3","system":"Kartézský","x1":"x1_2","x2":"x2_2","tableau":{"typ":"Rungeova-Kuttova (2. řádu)","c":[0,0.5],"b":[0,1],"a":[[0.5]]}},{"poradi":3,"visibility":true,"nazev":"Těleso 3","barva":"green","rovnice":["G*((M1*(x1_1-x1_3))/Math.pow(Math.pow((x1_1-x1_3),2)+Math.pow((x2_1-x2_3),2),3/2)+(M2*(x1_2-x1_3))/Math.pow(Math.pow((x1_2-x1_3),2)+Math.pow((x2_2-x2_3),2),3/2)+(M4*(x1_4-x1_3))/Math.pow(Math.pow((x1_4-x1_3),2)+Math.pow((x2_4-x2_3),2),3/2))","G*((M1*(x2_1-x2_3))/Math.pow(Math.pow((x1_1-x1_3),2)+Math.pow((x2_1-x2_3),2),3/2)+(M2*(x2_2-x2_3))/Math.pow(Math.pow((x1_2-x1_3),2)+Math.pow((x2_2-x2_3),2),3/2)+(M4*(x2_4-x2_3))/Math.pow(Math.pow((x1_4-x1_3),2)+Math.pow((x2_4-x2_3),2),3/2))"],"popisek":["a_{\\text{g}_x}","a_{\\text{g}_y}"],"hodnoty0":[],"hodnoty":[[-20,-7],[32,0]],"pochodnoty":[["-20","-7"],["32","0"]],"pocatek":["0","0"],"velikost":"3","system":"Kartézský","x1":"x1_3","x2":"x2_3","tableau":{"typ":"Rungeova-Kuttova (2. řádu)","c":[0,0.5],"b":[0,1],"a":[[0.5]]}},{"poradi":4,"visibility":true,"nazev":"Těleso 4","barva":"yellow","rovnice":["G*((M1*(x1_1-x1_4))/Math.pow(Math.pow((x1_1-x1_4),2)+Math.pow((x2_1-x2_4),2),3/2)+(M2*(x1_2-x1_4))/Math.pow(Math.pow((x1_2-x1_4),2)+Math.pow((x2_2-x2_4),2),3/2)+(M3*(x1_3-x1_4))/Math.pow(Math.pow((x1_3-x1_4),2)+Math.pow((x2_3-x2_4),2),3/2))","G*((M1*(x2_1-x2_4))/Math.pow(Math.pow((x1_1-x1_4),2)+Math.pow((x2_1-x2_4),2),3/2)+(M2*(x2_2-x2_4))/Math.pow(Math.pow((x1_2-x1_4),2)+Math.pow((x2_2-x2_4),2),3/2)+(M3*(x2_3-x2_4))/Math.pow(Math.pow((x1_3-x1_4),2)+Math.pow((x2_3-x2_4),2),3/2))"],"popisek":["a_{\\text{g}_x}","a_{\\text{g}_y}"],"hodnoty0":[],"hodnoty":[[-24,100],[-44,0]],"pochodnoty":[["-24","100"],["-44","0"]],"pocatek":["0","0"],"velikost":"3","system":"Kartézský","x1":"x1_4","x2":"x2_4","tableau":{"typ":"Rungeova-Kuttova (2. řádu)","c":[0,0.5],"b":[0,1],"a":[[0.5]]}}],"grafy":[],"spojnice":[],"konstanty":[{"upravovano":false,"nazev":"Gravitační konstanta","znacka":"G","hodnota":"10000","popisek":"G=10000"},{"upravovano":false,"nazev":"Hmotnost tělesa 1","znacka":"M1","hodnota":"0","popisek":"M_1=0"},{"upravovano":false,"nazev":"Hmotnost tělesa 2","znacka":"M2","hodnota":"10","popisek":"M_2=10"},{"upravovano":false,"nazev":"Hmotnost tělesa 3","znacka":"M3","hodnota":"100","popisek":"M_3=100"},{"upravovano":false,"nazev":"Hmotnost tělesa 4","znacka":"M4","hodnota":"0","popisek":"M_4=0"}],"grafyzav":[],"podminky":[]},
    {"nazev":"Schwarzschildova metrika","settings":{"hlbarva":"rgb(255,225,50)","barvapismo1":"black","barvapismo2":"black","osyzobr":true,"drahyzobr":true,"body":true,"zvetseni":0.00001,"posunX":0,"posunY":0,"osaXvzdal":10000000,"osaYvzdal":10000000,"hrubostdrah":1,"hrubostgraf":0.1,"zaokr":3,"maxcif":6,"maxdes":3,"dt":0.005,"h":0.000001,"dobacyklu":10,"vypoctyvcyklu":1,"oknoX":1280,"oknoY":551.333},"telesa":[{"poradi":1,"visibility":true,"nazev":"Černá díra","barva":"black","rovnice":["0","0"],"popisek":["0","0"],"hodnoty0":[],"hodnoty":[[0,0],[0,0]],"pochodnoty":[["0","0"],["0","0"]],"pocatek":["0","0"],"velikost":"rg","system":"Kartézský","x1":"x1_1","x2":"x2_1","tableau":{"typ":"Eulerova metoda"}},{"poradi":2,"visibility":true,"nazev":"Částice 1","barva":"orange","rovnice":["-(2*v2_2*v1_2)/x2_2","-0.5*(1-rg/x2_2)*((c*c*rg*v3_2*v3_2)/(x2_2*x2_2)+(rg*v2_2*v2_2)/((rg-x2_2)*(rg-x2_2))-2*x2_2*v1_2*v1_2)","-(v2_2*v3_2*rg)/(x2_2*x2_2*(1-rg/x2_2))"],"popisek":["-\\frac{2\\dot{\\varphi}\\dot{r}}{r}","-\\frac{1}{2}\\left(1-\\frac{r_\\text{g}}{r}\\right)\\left(\\frac{c^2r_\\text{g}}{r^2}\\dot{t}^2+\\frac{r_\\text{g}}{(r_\\text{g}-r)^2}\\dot{r}^2-2r\\dot{\\varphi}^2\\right)","-\\frac{r_\\text{g}\\dot{t}\\dot{r}}{r^2\\left(1-\\frac{r_\\text{g}}{r}\\right)}"],"hodnoty0":[],"hodnoty":[[0,2.5],[10000000,0],[0,1]],"pochodnoty":[["0","2.5"],["10000000","0"],["0","1"]],"pocatek":["0","0"],"velikost":"0","system":"Polární","x1":"x1_2","x2":"x2_2","tableau":{"typ":"Rungeova-Kuttova (4. řádu)","c":[0,0.5,0.5,1],"b":[0.16666666666666666,0.3333333333333333,0.3333333333333333,0.16666666666666666],"a":[[0.5],[0,0.5],[0,0,1]]}}],"grafy":[],"spojnice":[],"konstanty":[{"upravovano":false,"nazev":"Rychlost světla","znacka":"c","hodnota":"299792458","popisek":"c=299792558"},{"upravovano":false,"nazev":"Gravitační konstanta","znacka":"G","hodnota":"6.67408e-11","popisek":"G=6.67408\\cdot10^{-11}"},{"upravovano":false,"nazev":"Hmotnost černé díry","znacka":"M","hodnota":"1.989e+32","popisek":"M=1.989\\cdot10^{32}"},{"upravovano":false,"nazev":"Schwarzschildův poloměr","znacka":"rg","hodnota":"(2*G*M)/(c*c)","popisek":"r_\\text{g}=\\frac{2GM}{c^2}"}],"grafyzav":[],"podminky":[]},
];

let souboryvlast = JSON.parse(localStorage.getItem("phbrovnicesoubory")) || [];


let cnx1 = document.getElementById("can1").getContext("2d");
let cnx2 = document.getElementById("can2").getContext("2d");
let cnx3 = document.getElementById("can3").getContext("2d");
let cnx4 = document.getElementById("can4").getContext("2d");
let cnx5 = document.getElementById("can5").getContext("2d");
let cnx6 = document.getElementById("can6").getContext("2d");



dataget(souboryzabud, 0);



////telesa////

//telesoadd

document.getElementById("telesaadd").onclick = function(){
    document.getElementById("telesaaddinfo").style.display = "block";
    document.getElementById("telesaaddinfo").style.marginLeft = "445px";
    document.getElementById("telesaaddinfo").style.marginTop = "40px";
    telesaaddset();
}
document.getElementById("telesaaddclose").onclick = function(){
    document.getElementById("telesaaddinfo").style.display = "none";
}

document.getElementById("phbrovniceadd").onclick = function(){
    if(telesa.length != 0){
        phbrovniceadd(document.getElementById("phbrovniceinput").children.length+1, telesa[telesa.length-1].poradi+1);
    }
    else{
        phbrovniceadd(document.getElementById("phbrovniceinput").children.length+1, 1);
    }
}
document.getElementById("phbrovniceremove").onclick = function(){
    document.getElementById("phbrovniceinput").removeChild(document.getElementById("phbrovniceinput").lastChild);
}

document.getElementById("ssselect").onchange = function(){
    ssselectset("");
}
document.getElementById("difschemselectadd").onchange = function(){
    selectdifschem("add", 2);
}
document.getElementById("vlasttablradadd").onchange = function(){
    if(document.getElementById("vlasttablradadd").value < 1){document.getElementById("vlasttablradadd").value = 1};
    tableaubuild("add", document.getElementById("vlasttablradadd").value)
}

document.getElementById("telesoadd").onclick = function(){
    let newteleso = {};
    if(telesa.length != 0){
        newteleso.poradi = telesa[telesa.length-1].poradi+1;
    }
    else{
        newteleso.poradi = 1;
    }
    newteleso.visibility = true;
    newteleso.nazev = document.getElementById("telesaaddnazev").value;
    newteleso.barva = document.getElementById("telesaaddbarva").value;
    newteleso.rovnice = [];
    newteleso.popisek = [];
    newteleso.hodnoty0 = [];
    newteleso.hodnoty = [];
    newteleso.pochodnoty = [];
    newteleso.tableau = tableauget("add");
    newteleso.pocatek = [document.getElementById("telesaaddxpoc").value, document.getElementById("telesaaddypoc").value];
    newteleso.velikost = document.getElementById("telesaaddsize").value;
    newteleso.system = document.getElementById("ssselect").value;
    newteleso.x1 = document.getElementById("telesaaddx1").value;
    newteleso.x2 = document.getElementById("telesaaddx2").value;

    for(let i = 1; i <= document.getElementById("phbrovniceinput").children.length; i++){
        newteleso.rovnice.push(document.getElementById("phbrovniceinputjs"+i).value);
        newteleso.popisek.push(document.getElementById("phbrovniceinputtex"+i).value);
    }

    telesa.push(newteleso);

    refresh();
    telesaadd();

    telesaaddset();
}

//telesoedit

window.addEventListener("mousedown", function(){
    for(let i = 1; i <= telesa.length; i++){
        document.getElementById("telesaedit"+i).onclick = function(){
            telesaupravovano = telesa[i-1].poradi;
            document.getElementById("telesaeditinfo").style.display = "block";
            document.getElementById("telesaeditinfo").style.marginLeft = "445px";
            document.getElementById("telesaeditinfo").style.marginTop = "70px";
            document.getElementById("telesaeditlabel").innerHTML = "Upravit těleso: "+telesa[i-1].nazev;
            document.getElementById("telesaeditnazev").value = telesa[i-1].nazev;
            document.getElementById("telesaeditbarva").value = telesa[i-1].barva;
            document.getElementById("telesaeditsize").value = telesa[i-1].velikost;
            document.getElementById("telesaeditxpoc").value = telesa[i-1].pocatek[0];
            document.getElementById("telesaeditypoc").value = telesa[i-1].pocatek[1];
            document.getElementById("ssselectedit").value = telesa[i-1].system;
            document.getElementById("telesaeditx1").value = telesa[i-1].x1;
            document.getElementById("telesaeditx2").value = telesa[i-1].x2;
            document.getElementById("difschemselectedit").value = telesa[i-1].tableau.typ;
            ssselectset("edit");
            if(telesa[i-1].tableau.typ == "Vlastní"){selectdifschem("edit", telesa[i-1].tableau.c.length, telesa[i-1].tableau);}
            else{selectdifschem("edit")}


            while(document.getElementById("phbrovniceinputedit").lastChild){
                document.getElementById("phbrovniceinputedit").removeChild(document.getElementById("phbrovniceinputedit").lastChild);
            }
            for(let ii = 1; ii <= telesa[i-1].rovnice.length; ii++){
                phbrovniceaddedit(ii, telesaupravovano, telesa[i-1].rovnice[ii-1], telesa[i-1].popisek[ii-1]);
            }
        }
    }
})
document.getElementById("telesaeditclose").onclick = function(){
    document.getElementById("telesaeditinfo").style.display = "none";
}

document.getElementById("phbrovniceaddedit").onclick = function(){
    phbrovniceaddedit(document.getElementById("phbrovniceinputedit").children.length+1, telesaupravovano,"0","")
}
document.getElementById("phbrovniceremoveedit").onclick = function(){
    document.getElementById("phbrovniceinputedit").removeChild(document.getElementById("phbrovniceinputedit").lastChild);
}

document.getElementById("ssselectedit").onchange = function(){
    ssselectset("edit");
}
document.getElementById("difschemselectedit").onchange = function(){
    selectdifschem("edit", 2);
}
document.getElementById("vlasttablradedit").onchange = function(){
    if(document.getElementById("vlasttablradedit").value < 1){document.getElementById("vlasttablradedit").value = 1};
    tableaubuild("edit", document.getElementById("vlasttablradedit").value);
}

document.getElementById("telesoedit").onclick = function(){
    for(let i = 1; i <= telesa.length; i++){
        if(telesa[i-1].poradi == telesaupravovano){
            telesaupravovano = null;
            telesa[i-1].nazev = document.getElementById("telesaeditnazev").value;
            telesa[i-1].barva = document.getElementById("telesaeditbarva").value;
            telesa[i-1].rovnice = [];
            telesa[i-1].popisek = [];
            telesa[i-1].tableau = tableauget("edit");
            telesa[i-1].pocatek = [document.getElementById("telesaeditxpoc").value, document.getElementById("telesaeditypoc").value];
            telesa[i-1].velikost = document.getElementById("telesaeditsize").value;
            telesa[i-1].system = document.getElementById("ssselectedit").value;
            telesa[i-1].x1 = document.getElementById("telesaeditx1").value;
            telesa[i-1].x2 = document.getElementById("telesaeditx2").value;

            for(let ii = 1; ii <= document.getElementById("phbrovniceinputedit").children.length; ii++){
                telesa[i-1].rovnice.push(document.getElementById("phbrovniceinputjsedit"+ii).value);
                telesa[i-1].popisek.push(document.getElementById("phbrovniceinputtexedit"+ii).value);
            }

            document.getElementById("telesaeditinfo").style.display = "none";

            refresh();
            telesaadd();
            pochodnotyget("refresh");
        }
    }
}

//telesodelete

window.addEventListener("mousedown", function(){
    for(let i = 1; i <= telesa.length; i++){
        document.getElementById("telesaremove"+i).onclick = function(){
            if(telesa[i-1].poradi == telesaupravovano){
                document.getElementById("telesaeditinfo").style.display = "none";
            }
            telesa.splice(i-1, 1);
            refresh();
            telesaadd();
        }
    }
})

//telesovisibility

window.addEventListener("mousedown", function(){
    for(let i = 1; i <= telesa.length; i++){
        document.getElementById("telesavisibility"+i).onclick = function(){
            if(telesa[i-1].visibility == true){
                telesa[i-1].visibility = false;
                document.getElementById("telesavisibilityicon"+i).innerHTML = "visibility_off";
            }
            else{
                telesa[i-1].visibility = true;
                document.getElementById("telesavisibilityicon"+i).innerHTML = "visibility";
            }
        }
    }
})




////grafy////

//grafyadd

document.getElementById("grafyadd").onclick = function(){
    document.getElementById("grafyaddinfo").style.display = "block";
    document.getElementById("grafyaddinfo").style.marginLeft = "495px";
    document.getElementById("grafyaddinfo").style.marginTop = "40px";
    if(grafy.length != 0){
        document.getElementById("grafyaddnazev").value = "Graf "+(grafy[grafy.length-1].poradi+1);
        document.getElementById("grafyaddpredpislabel").innerHTML = "\\(f_{"+(grafy[grafy.length-1].poradi+1)+"}(x)\\)";
        document.getElementById("grafyaddpopiseklabel").innerHTML = "\\(f_{"+(grafy[grafy.length-1].poradi+1)+"}(x)\\)";
    }
    else{
        document.getElementById("grafyaddnazev").value = "Graf 1";
        document.getElementById("grafyaddpredpislabel").innerHTML = "\\(f_1(x)\\)";
        document.getElementById("grafyaddpopiseklabel").innerHTML = "\\(f_1(x)\\)";
    }
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById("grafyaddinfo")]);

}
document.getElementById("grafyaddclose").onclick = function(){
    document.getElementById("grafyaddinfo").style.display = "none";
}

document.getElementById("grafadd").onclick = function(){
    newgraf = {};
    if(grafy.length != 0){
        newgraf.poradi = grafy[grafy.length-1].poradi+1;
    }
    else{
        newgraf.poradi = 1;
    }
    newgraf.visibility = true;
    newgraf.nazev = document.getElementById("grafyaddnazev").value;
    newgraf.barva = document.getElementById("grafyaddbarva").value;
    newgraf.predpis = document.getElementById("grafyaddpredpis").value;
    newgraf.popisek = document.getElementById("grafyaddpopisek").value;

    grafy.push(newgraf);

    grafyadd();

    document.getElementById("grafyaddnazev").value = "Graf "+(grafy[grafy.length-1].poradi+1);
    document.getElementById("grafyaddpredpislabel").innerHTML = "\\(f_{"+(grafy[grafy.length-1].poradi+1)+"}(x)\\)";
    document.getElementById("grafyaddpopiseklabel").innerHTML = "\\(f_{"+(grafy[grafy.length-1].poradi+1)+"}(x)\\)";
    document.getElementById("grafyaddpredpis").value = "";
    document.getElementById("grafyaddpopisek").value = "";
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById("grafyaddinfo")]);

    grafyvykres(settings.oknoX, settings.oknoY, settings.posunX, settings.posunY, settings.zvetseni);
}

//grafyedit

window.addEventListener("mousedown", function(){
    for(let i = 1; i <= grafy.length; i++){
        document.getElementById("grafyedit"+i).onclick = function(){
            grafyupravovano = grafy[i-1].poradi;
            document.getElementById("grafyeditinfo").style.display = "block";
            document.getElementById("grafyeditinfo").style.marginLeft = "495px";
            document.getElementById("grafyeditinfo").style.marginTop = "70px";
            document.getElementById("grafyeditlabel").innerHTML = "Upravit funkci: "+grafy[i-1].nazev;
            document.getElementById("grafyeditnazev").value = grafy[i-1].nazev;
            document.getElementById("grafyeditbarva").value = grafy[i-1].barva;
            document.getElementById("grafyeditpredpis").value = grafy[i-1].predpis;
            document.getElementById("grafyeditpopisek").value = grafy[i-1].popisek;

            document.getElementById("grafyeditpredpislabel").innerHTML = "\\(f_{"+(grafy[i-1].poradi+1)+"}(x)\\)";
            document.getElementById("grafyeditpopiseklabel").innerHTML = "\\(f_{"+(grafy[i-1].poradi+1)+"}(x)\\)";
            MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById("grafyeditinfo")]);
            
        }
    }
})
document.getElementById("grafyeditclose").onclick = function(){
    document.getElementById("grafyeditinfo").style.display = "none";
}

document.getElementById("grafedit").onclick = function(){
    for(let i = 1; i <= grafy.length; i++){
        if(grafy[i-1].poradi == grafyupravovano){
            grafyupravovano = null;
            grafy[i-1].nazev = document.getElementById("grafyeditnazev").value;
            grafy[i-1].barva = document.getElementById("grafyeditbarva").value;
            grafy[i-1].predpis = document.getElementById("grafyeditpredpis").value;
            grafy[i-1].popisek = document.getElementById("grafyeditpopisek").value;

            document.getElementById("grafyeditinfo").style.display = "none";

            grafyadd();

            grafyvykres(settings.oknoX, settings.oknoY, settings.posunX, settings.posunY, settings.zvetseni);

        }
    }
}

//grafdelete

window.addEventListener("mousedown", function(){
    for(let i = 1; i <= grafy.length; i++){
        document.getElementById("grafyremove"+i).onclick = function(){
            if(grafy[i-1].poradi == grafyupravovano){
                document.getElementById("grafyeditinfo").style.display = "none";
            }
            grafy.splice(i-1, 1);
            grafyadd();
            grafyvykres(settings.oknoX, settings.oknoY, settings.posunX, settings.posunY, settings.zvetseni);
        }
    }
})

//grafvisibility

window.addEventListener("mousedown", function(){
    for(let i = 1; i <= grafy.length; i++){
        document.getElementById("grafyvisibility"+i).onclick = function(){
            if(grafy[i-1].visibility == true){
                grafy[i-1].visibility = false;
                document.getElementById("grafyvisibilityicon"+i).innerHTML = "visibility_off";
            }
            else{
                grafy[i-1].visibility = true;
                document.getElementById("grafyvisibilityicon"+i).innerHTML = "visibility";
            }
            grafyvykres(settings.oknoX, settings.oknoY, settings.posunX, settings.posunY, settings.zvetseni);
        }
    }
})

//bodyinfo
document.getElementById("can6").onmousemove = function(event) {
    if(settings.body == true){
        bodyzobr(settings.oknoX, settings.oknoY, settings.posunX, settings.posunY, settings.zvetseni, event);
    }
}



////spojnice////

//spojniceadd

document.getElementById("spojniceadd").onclick = function(){
    document.getElementById("spojniceaddinfo").style.display = "block";
    document.getElementById("spojniceaddinfo").style.marginLeft = "545px";
    document.getElementById("spojniceaddinfo").style.marginTop = "40px";
    if(spojnice.length != 0){
        document.getElementById("spojniceaddnazev").value = "Spojnice "+(spojnice[spojnice.length-1].poradi+1);
    }
    else{
        document.getElementById("spojniceaddnazev").value = "Spojnice 1";
    }
    document.getElementById("spojniceaddx1").value = "";
    document.getElementById("spojniceaddy1").value = "";
    document.getElementById("spojniceaddx2").value = "";
    document.getElementById("spojniceaddy2").value = "";
    document.getElementById("spojniceaddpopisek").value = "";
    if(document.getElementById("spojniceaddpolomer").value > 0){
        document.getElementById("spojniceaddpruzina").style.opacity = 1;
    }
    else{
        document.getElementById("spojniceaddpruzina").style.opacity = 0.5;
    }

}
document.getElementById("spojniceaddclose").onclick = function(){
    document.getElementById("spojniceaddinfo").style.display = "none";
}

document.getElementById("spojniceaddbutt").onclick = function(){
    newspojnice = {};
    if(spojnice.length != 0){
        newspojnice.poradi = spojnice[spojnice.length-1].poradi+1;
    }
    else{
        newspojnice.poradi = 1;
    }
    newspojnice.visibility = true;
    newspojnice.nazev = document.getElementById("spojniceaddnazev").value;
    newspojnice.barva = document.getElementById("spojniceaddbarva").value;
    newspojnice.x1 = document.getElementById("spojniceaddx1").value;
    newspojnice.y1 = document.getElementById("spojniceaddy1").value;
    newspojnice.x2 = document.getElementById("spojniceaddx2").value;
    newspojnice.y2 = document.getElementById("spojniceaddy2").value;
    newspojnice.popisek = document.getElementById("spojniceaddpopisek").value;
    newspojnice.polomer = document.getElementById("spojniceaddpolomer").value;
    newspojnice.zavity = document.getElementById("spojniceaddzavity").value;

    spojnice.push(newspojnice);

    spojniceadd();

    document.getElementById("spojniceaddnazev").value = "Spojnice "+(spojnice[spojnice.length-1].poradi+1);
    document.getElementById("spojniceaddx1").value = "";
    document.getElementById("spojniceaddy1").value = "";
    document.getElementById("spojniceaddx2").value = "";
    document.getElementById("spojniceaddy2").value = "";
    document.getElementById("spojniceaddpopisek").value = "";
}

//spojniceedit

window.addEventListener("mousedown", function(){
    for(let i = 1; i <= spojnice.length; i++){
        document.getElementById("spojniceedit"+i).onclick = function(){
            spojniceupravovano = spojnice[i-1].poradi;
            document.getElementById("spojniceeditinfo").style.display = "block";
            document.getElementById("spojniceeditinfo").style.marginLeft = "545px";
            document.getElementById("spojniceeditinfo").style.marginTop = "70px";
            document.getElementById("spojniceeditlabel").innerHTML = "Upravit spojnici: "+spojnice[i-1].nazev;
            document.getElementById("spojniceeditnazev").value = spojnice[i-1].nazev;
            document.getElementById("spojniceeditbarva").value = spojnice[i-1].barva;
            document.getElementById("spojniceeditx1").value = spojnice[i-1].x1;
            document.getElementById("spojniceedity1").value = spojnice[i-1].y1;
            document.getElementById("spojniceeditx2").value = spojnice[i-1].x2;
            document.getElementById("spojniceedity2").value = spojnice[i-1].y2;
            document.getElementById("spojniceeditpopisek").value = spojnice[i-1].popisek;
            document.getElementById("spojniceeditpolomer").value = spojnice[i-1].polomer;
            document.getElementById("spojniceeditzavity").value = spojnice[i-1].zavity;
            if(document.getElementById("spojniceeditpolomer").value > 0){
                document.getElementById("spojniceeditpruzina").style.opacity = 1;
            }
            else{
                document.getElementById("spojniceeditpruzina").style.opacity = 0.5;
            }
        }
    }
})
document.getElementById("spojniceeditclose").onclick = function(){
    document.getElementById("spojniceeditinfo").style.display = "none";
}

document.getElementById("spojniceeditbutt").onclick = function(){
    for(let i = 1; i <= spojnice.length; i++){
        if(spojnice[i-1].poradi == spojniceupravovano){
            spojniceupravovano = null;
            spojnice[i-1].nazev = document.getElementById("spojniceeditnazev").value;
            spojnice[i-1].barva = document.getElementById("spojniceeditbarva").value;
            spojnice[i-1].x1 = document.getElementById("spojniceeditx1").value;
            spojnice[i-1].y1 = document.getElementById("spojniceedity1").value;
            spojnice[i-1].x2 = document.getElementById("spojniceeditx2").value;
            spojnice[i-1].y2 = document.getElementById("spojniceedity2").value;
            spojnice[i-1].popisek = document.getElementById("spojniceeditpopisek").value;
            spojnice[i-1].polomer = document.getElementById("spojniceeditpolomer").value;
            spojnice[i-1].zavity = document.getElementById("spojniceeditzavity").value;
            
            document.getElementById("spojniceeditinfo").style.display = "none";

            spojniceadd();
        }
    }
}

//spojnicedelete

window.addEventListener("mousedown", function(){
    for(let i = 1; i <= spojnice.length; i++){
        document.getElementById("spojniceremove"+i).onclick = function(){
            if(spojnice[i-1].poradi == spojniceupravovano){
                document.getElementById("spojniceeditinfo").style.display = "none";
            }
            spojnice.splice(i-1, 1);
            spojniceadd();
        }
    }
})

//spojnicevisibility

window.addEventListener("mousedown", function(){
    for(let i = 1; i <= spojnice.length; i++){
        document.getElementById("spojnicevisibility"+i).onclick = function(){
            if(spojnice[i-1].visibility == true){
                spojnice[i-1].visibility = false;
                document.getElementById("spojnicevisibilityicon"+i).innerHTML = "visibility_off";
            }
            else{
                spojnice[i-1].visibility = true;
                document.getElementById("spojnicevisibilityicon"+i).innerHTML = "visibility";
            }
        }
    }
})



//pruzina

document.getElementById("spojniceaddpolomer").onchange = function(){
    if(document.getElementById("spojniceaddpolomer").value > 0){
        document.getElementById("spojniceaddpruzina").style.opacity = 1;
    }
    else{
        document.getElementById("spojniceaddpruzina").style.opacity = 0.5;
    }
}
document.getElementById("spojniceeditpolomer").onchange = function(){
    if(document.getElementById("spojniceeditpolomer").value > 0){
        document.getElementById("spojniceeditpruzina").style.opacity = 1;
    }
    else{
        document.getElementById("spojniceeditpruzina").style.opacity = 0.5;
    }
}





////konstanty////

//add

document.getElementById("konstantyadd").onclick = function(){
    konstanty.push({upravovano: true, nazev: "", znacka: "", hodnota: "", popisek: ""});
    konstantyadd();
}

//add, edit, delete

window.addEventListener("mousedown", function(){
    for(let i = 0; i < konstanty.length; i++){

        if(document.getElementById("konstantyinputadd"+i)){
            document.getElementById("konstantyinputadd"+i).onclick = function(){
                konstanty[i].upravovano = false;
                konstanty[i].nazev = document.getElementById("konstantyinputnazev"+i).value;
                konstanty[i].znacka = String(document.getElementById("konstantyinputvztah"+i).value).split("=")[0];
                konstanty[i].hodnota = String(document.getElementById("konstantyinputvztah"+i).value).split("=")[1];
                konstanty[i].popisek = document.getElementById("konstantyinputpopisek"+i).value;

                konstantyadd();
            }
        }
        
        //edit
        if(document.getElementById("konstantyedit"+i)){
            document.getElementById("konstantyedit"+i).onclick = function(){
                konstanty[i].upravovano = true;
                konstantyadd();
            }
        }
        

        //remove
        document.getElementById("konstantyremove"+i).onclick = function(){
            konstanty.splice(i,1);
            konstantyadd();
        }
    }
})



////podminky////

//add

document.getElementById("podminkyadd").onclick = function(){
    podminkyget();
    podminky.push({visibility: true, hodnoty: ["",""]});
    podminkyadd();
}

//podminkydelete

window.addEventListener("mousedown", function(){
    for(let i = 1; i <= podminky.length; i++){
        document.getElementById("podminkyremove"+i).onclick = function(){
            podminky.splice(i-1, 1);
            podminkyadd();
        }
    }
})

//podminkyvisibility

window.addEventListener("mousedown", function(){
    for(let i = 1; i <= podminky.length; i++){
        document.getElementById("podminkyvisibility"+i).onclick = function(){
            if(podminky[i-1].visibility == true){
                podminky[i-1].visibility = false;
                document.getElementById("podminkyvisibilityicon"+i).innerHTML = "visibility_off";
            }
            else{
                podminky[i-1].visibility = true;
                document.getElementById("podminkyvisibilityicon"+i).innerHTML = "visibility";
            }
        }
    }
})


////grafyzavislosti////

//open

window.addEventListener("mousedown", function(){
    for(let i = 1; i <= grafyzav.length; i++){
        document.getElementById("grafzavopen"+i).onclick = function(){
            document.getElementById("grafzav"+i).style.display = "block";
            grafyzav[i-1].opened = true;
            grafyzav[i-1].coord[0] = "";
        }
    }
})

//minimize

window.addEventListener("mousedown", function(){
    for(let i = 1; i <= grafyzav.length; i++){
        document.getElementById("grafzavminim"+i).onclick = function(){
            grafyzav[i-1].opened = false;
            document.getElementById("grafzav"+i).style.display = "none";
        }
    }
})

//delete

window.addEventListener("mousedown", function(){
    for(let i = 1; i <= grafyzav.length; i++){
        document.getElementById("grafzavclose"+i).onclick = function(){
            grafyzavget();
            grafyzav.splice(i-1, 1);
            grafzavadd();
        }
    }
})

//souradnice

window.addEventListener("mousemove", function(){
    for(let i = 1; i <= grafyzav.length; i++){
        document.getElementById("grafzav2can"+i).onmousemove = function(event){
            grafxpos = event.pageX  - document.getElementById("grafzav"+i).getBoundingClientRect().left; 
            grafypos = event.pageY - document.getElementById("grafzav"+i).getBoundingClientRect().top;

            let grafcnx = document.getElementById("grafzav2can"+i).getContext("2d");

            grafcnx.clearRect(0, 0, $("#grafzav2can"+i).width(), $("#grafzav2can"+i).height());
            grafcnx.textAlign = "end";
            grafcnx.font = "13px Arial";
            grafcnx.fillStyle = "black";
            grafcnx.fillText(Math.round(((grafxpos-$("#grafzav2can"+i).width()/2)/grafyzav[i-1].zvetx-grafyzav[i-1].posx)*100)/100+", "+
                Math.round(((50-grafypos+$("#grafzav2can"+i).height()/2)/grafyzav[i-1].zvety-grafyzav[i-1].posy)*100)/100, 
                $("#grafzav2can"+i).width()-2, $("#grafzav2can"+i).height()-4);
            
        }
    }
})



////nastaveni////

document.getElementById("settsave").onclick = function(){
    settget();
}

document.getElementById("settosyzobr").onclick = function(){
    if(settings.osyzobr == true){
        settings.osyzobr = false;
        $("#settosyzobr i").html("check_box_outline_blank");
    }
    else{
        settings.osyzobr = true;
        $("#settosyzobr i").html("check_box");
    }
    osynakres(settings.oknoX, settings.oknoY, settings.posunX, settings.posunY, settings.zvetseni);
}
document.getElementById("settdrahyzobr").onclick = function(){
    if(settings.drahyzobr == true){
        settings.drahyzobr = false;
        $("#settdrahyzobr i").html("check_box_outline_blank");
        document.getElementById("can1").style.backgroundColor = "white";
    }
    else{
        settings.drahyzobr = true;
        $("#settdrahyzobr i").html("check_box");
        document.getElementById("can1").style.backgroundColor = "unset";
    }
}
document.getElementById("settbodyzobr").onclick = function(){
    if(settings.body == true){
        settings.body = false;
        $("#settbodyzobr i").html("check_box_outline_blank");
    }
    else{
        settings.body = true;
        $("#settbodyzobr i").html("check_box");
    }
    bodynakres(settings.oknoX, settings.oknoY, settings.posunX, settings.posunY, settings.zvetseni);
}



//////start, stop, refresh//////

document.getElementById("play").onclick = function(){
    if(uzbezi == false){
        document.getElementById("playicon").innerHTML = "pause";
        startvypocet();
        uzbezi = true;
    }
    else{
        document.getElementById("playicon").innerHTML = "play_arrow";
        stopvypocet();
        uzbezi = false;
    }
}

document.getElementById("refresh").onclick = function(){
    refresh();
}



////ulozit////

document.getElementById("ulozitbut").onclick = function(){
    datauloz = JSON.parse(document.getElementById("ulozitdata").value);
    datauloz.nazev = String(document.getElementById("ulozitnazev").value);
    souboryvlast.push(datauloz);
    document.getElementById("ulozit").style.display = "none";
    souboryadd(souboryvlast, "souboryvlastseznam", 0);
}
window.addEventListener("mousedown", function(e){
    if(e.target.id != "ulozit" && e.target.parentNode.id != "ulozit" && e.target.parentNode.parentNode.id != "ulozit" && e.target.parentNode.parentNode.parentNode.id != "ulozit" && document.getElementById("textpole").style.display != "block"){
        document.getElementById("ulozit").style.display = "none";
    }
})


////soubory////

///open, delete///

window.addEventListener("mousedown", function(){
    for(let i = 1; i <= souboryvlast.length; i++){
        document.getElementById("souboryvlastseznamremove"+i).onclick = function(){
            souboryvlast.splice(i-1, 1);
            souboryadd(souboryvlast, "souboryvlastseznam", 0);
        }
        document.getElementById("souboryvlastseznamopen"+i).onclick = function(){
            clearInterval(timerduha);
            refresh();
            dataget(souboryvlast, i-1);
        }
    }
    for(let i = 1; i <= souboryzabud.length; i++){
        document.getElementById("souboryzabudseznamopen"+i).onclick = function(){
            clearInterval(timerduha);
            refresh();
            dataget(souboryzabud, i-1);
        }
    }
})




////funkce////

function dataget(soub, poz){
    document.getElementById("konstantyinfo").style.display = "none";
    document.getElementById("pochodnotyinfo").style.display = "none";
    document.getElementById("hodnotyinfo").style.display = "none";
    document.getElementById("podminkyinfo").style.display = "none";
    document.getElementById("settings").style.display = "none";
    document.getElementById("telesaaddinfo").style.display = "none";
    document.getElementById("telesaeditinfo").style.display = "none";
    document.getElementById("grafyaddinfo").style.display = "none";
    document.getElementById("grafyeditinfo").style.display = "none";
    document.getElementById("spojniceaddinfo").style.display = "none";
    document.getElementById("spojniceeditinfo").style.display = "none";

    time = 0;
    telesaupravovano = null;
    grafyupravovano = null;
    spojniceupravovano = null;
    vypocettimer = null;
    timerduha = null;
    uzbezi = false;

    nazevsoub = JSON.parse(JSON.stringify(soub[poz].nazev));
    settings = JSON.parse(JSON.stringify(soub[poz].settings)); 
    telesa = JSON.parse(JSON.stringify(soub[poz].telesa)); 
    grafy = JSON.parse(JSON.stringify(soub[poz].grafy));
    spojnice = JSON.parse(JSON.stringify(soub[poz].spojnice));
    konstanty = JSON.parse(JSON.stringify(soub[poz].konstanty)); 
    grafyzav = JSON.parse(JSON.stringify(soub[poz].grafyzav)); 
    podminky = JSON.parse(JSON.stringify(soub[poz].podminky));

    settings.oknoX = $("#can1").width();
    settings.oknoY = $("#can1").height();

    if(settings.drahyzobr == true){
        document.getElementById("can1").style.backgroundColor = "unset";
    }
    else{
        document.getElementById("can1").style.backgroundColor = "white";
    }

    settzapis();
    telesaadd();
    grafyadd();
    spojniceadd();
    konstantyadd();
    grafzavadd();
    podminkyadd();

    for(let i = 1; i <= 6; i++){
        document.getElementById("can"+i).width = settings.oknoX;
        document.getElementById("can"+i).height = settings.oknoY;
    }
    
    barvaset();
    osynakres(settings.oknoX, settings.oknoY, settings.posunX, settings.posunY, settings.zvetseni);
    grafyvykres(settings.oknoX, settings.oknoY, settings.posunX, settings.posunY, settings.zvetseni);

    document.getElementById("nazevinfolab").innerHTML = nazevsoub;

    souboryadd(souboryvlast, "souboryvlastseznam", 0);
    souboryadd(souboryzabud, "souboryzabudseznam", 1);

}


function barvaset(){
    rainbow();
    if(settings.hlbarva != "rainbow"){
        clearInterval(timerduha);
        document.documentElement.style.setProperty('--hlbarva', settings.hlbarva);
    }
    document.documentElement.style.setProperty('--pismo1', settings.barvapismo1);
    document.documentElement.style.setProperty('--pismo2', settings.barvapismo2);
}

function osynakres(X, Y, pX, pY, m){
    cnx1.clearRect(0, 0, X, Y);
    if(settings.osyzobr == true){
        cnx1.beginPath();
        cnx1.strokeStyle = "black";
        cnx1.moveTo(0, Y/2-pY*m); 
        cnx1.lineTo(X, Y/2-pY*m);
        cnx1.moveTo(X/2+pX*m, 0); 
        cnx1.lineTo(X/2+pX*m, Y);
        for(let i = 0; i <= X; i += settings.osaXvzdal*m){
            cnx1.moveTo(i+X/2+pX*m, Y/2-pY*m); cnx1.lineTo(i+X/2+pX*m, 4+Y/2-pY*m);
            cnx1.moveTo(-i+X/2+pX*m, Y/2-pY*m); cnx1.lineTo(-i+X/2+pX*m, 4+Y/2-pY*m);
            cnx1.textAlign = "center";
            if(i != 0){cnx1.fillText(Math.round(i/m*10)/10, i+X/2+pX*m, 15+Y/2-pY*m)}
            if(i != 0){cnx1.fillText(Math.round(-i/m*10)/10, -i+X/2+pX*m, 15+Y/2-pY*m)}
        }
        for(let i = 0; i <= Y; i += settings.osaYvzdal*m){
            cnx1.moveTo(X/2+pX*m, i+Y/2-pY*m); cnx1.lineTo(X/2-4+pX*m, i+Y/2-pY*m);
            cnx1.moveTo(X/2+pX*m, -i+Y/2-pY*m); cnx1.lineTo(X/2-4+pX*m, -i+Y/2-pY*m);
            cnx1.textAlign = "end";
            if(i != 0){cnx1.fillText(Math.round(-i/m*10)/10, X/2-5+pX*m, i+Y/2+3-pY*m)}
            if(i != 0){cnx1.fillText(Math.round(i/m*10)/10, X/2-5+pX*m, -i+Y/2+3-pY*m)}
        }
        cnx1.fillText("0", X/2-5+pX*m, Y/2+15-pY*m)
        cnx1.stroke();
    }
}


function grafyvykres(X, Y, pX, pY ,met){
    koreny = JSON.parse(JSON.stringify(Array(grafy.length).fill([])));
    vrcholy = JSON.parse(JSON.stringify(Array(grafy.length).fill([])));
    pruseciky = JSON.parse(JSON.stringify([]));

    cnx2.clearRect(0,0,X,Y);
    cnx3.clearRect(0,0,X,Y);

    for(let i = 0; i < grafy.length; i++){

        if(grafy[i].visibility == true){
            cnx2.beginPath();
            cnx2.strokeStyle = grafy[i].barva;

            for(let x = -X/2/met-pX; x <= X/2/met-pX+Number(settings.hrubostgraf); x += Number(settings.hrubostgraf)){

                //graf
                y = eval(grafy[i].predpis.replaceAll("x", "("+String(x)+")"));
                if(y*met <= Y/2-pY*met && y*met >= -Y/2-pY*met){
                    cnx2.lineTo(X/2+pX*met+x*met, Y/2-pY*met-y*met);
                }
                cnx2.moveTo(X/2+pX*met+x*met, Y/2-pY*met-y*met);


                if(y*met <= Y/2-pY*met && y*met >= -Y/2-pY*met){

                    //koreny
                    uzje = false;
                    for(let bod = 0; bod < koreny[i].length; bod++){
                        if(koreny[i][bod] == koren_find(grafy[i].predpis, x)){
                            uzje = true;
                            break;
                        }
                    }
                    if(uzje == false && koren_find(grafy[i].predpis, x) != undefined){
                        koreny[i].push(koren_find(grafy[i].predpis, x));
                    }

                    //pruseciky
                    for(let ii = i+1; ii < grafy.length; ii++){
                        
                        if(grafy[ii].visibility == true){
                            x_pr = koren_find("("+grafy[i].predpis+")-("+grafy[ii].predpis+")",x);
                            y_pr = zaokrouh(eval(grafy[i].predpis.replaceAll("x", "("+x_pr+")")), settings.zaokr, settings.maxcif);

                            uzje = false;
                            for(let bod = 0; bod < pruseciky.length; bod++){
                                if(pruseciky[bod][1][0] == x_pr && pruseciky[bod][1][1] == y_pr){
                                    uzje = true;
                                    break;
                                }
                            }
                            if(uzje == false && x_pr != undefined){
                                pruseciky.push(["Průsečík \\(f_{"+(i+1)+"}\\) a \\(f_{"+(ii+1)+"}\\): ",[x_pr,y_pr]]);
                            }
                        }
                    }

                    //vrcholy
                    funkce_der = "(eval("+grafy[i].predpis.replaceAll("x", "(x+("+settings.h+"))")+")-("+grafy[i].predpis+"))/("+settings.h+")";

                    uzje = false;
                    for(let bod = 0; bod < vrcholy[i].length; bod++){
                        if(vrcholy[i][bod] == koren_find(funkce_der,x)){
                            uzje = true;
                            break;
                        }
                    }
                    if(uzje == false && koren_find(funkce_der,x) != undefined){
                        vrcholy[i].push(koren_find(funkce_der,x));
                    }

                }
            }
            cnx2.stroke();
        }
        
    }

    if(settings.body == true){
        bodynakres(X, Y, pX, pY ,met);
    }
}
function koren_find(f, b){
    let k = b;
    let k0 = null;
    for(let n = 0; n < 10; n++){
        k = k - settings.h*eval(f.replaceAll("x", "("+k+")"))/(eval(f.replaceAll("x", "("+Number(k+Number(settings.h))+")"))-eval(f.replaceAll("x", "("+k+")")));
        if(Math.abs(k) < settings.hrubostgraf && eval(f.replaceAll("x", "(0)")) == 0){
            return 0;
            break;
        }
        if(zaokrouh(k0, settings.zaokr, settings.maxcif) == zaokrouh(k, settings.zaokr, settings.maxcif) && k > -settings.oknoX/settings.zvetseni && k < settings.oknoX/settings.zvetseni && Math.abs(eval(f.replaceAll("x", "("+k+")"))) < settings.hrubostgraf){
            return zaokrouh(k, settings.zaokr, settings.maxcif);
            break;
        }
        k0 = k;
    }
}
function bodynakres(X, Y, pX, pY ,met){
    cnx3.clearRect(0, 0, X, Y);
    if(settings.body == true){
        for(let i = 0; i < grafy.length; i++){

            //koreny
            for(bod = 0; bod < koreny[i].length; bod++){
                cnx3.beginPath();
                cnx3.arc(X/2+(koreny[i][bod]+pX)*met, Y/2-pY*met, 2, 0, Math.PI*2);
                cnx3.fillStyle = "black";
                cnx3.fill();
                cnx3.stroke();
            }

            //vrcholy
            for(bod = 0; bod < vrcholy[i].length; bod++){

                y_vr = eval(grafy[i].predpis.replaceAll("x", "("+vrcholy[i][bod]+")"));

                cnx3.beginPath();
                cnx3.arc(X/2+(vrcholy[i][bod]+pX)*met, Y/2-(y_vr+pY)*met, 2, 0, Math.PI*2);
                cnx3.fillStyle = "black";
                cnx3.fill();
                cnx3.stroke();
            }
        }

        //pruseciky
        for(let bod = 0; bod < pruseciky.length; bod++){
            cnx3.beginPath();
            cnx3.arc(X/2+(pruseciky[bod][1][0]+pX)*met, Y/2-(pruseciky[bod][1][1]+pY)*met, 2, 0, Math.PI*2);
            cnx3.fillStyle = "black";
            cnx3.fill();
            cnx3.stroke();
        }
    }
    
    
}
function bodyzobr(X, Y, pX, pY ,met, event){
    cnx6.clearRect(0,0,X,Y);
    document.getElementById("bodinfo").style.display = "none";

    let xpos = event.pageX; 
    let ypos = event.pageY;

    cnx6.textAlign = "end";
    cnx6.font = "13px Arial";
    cnx6.fillStyle = "black";
    cnx6.fillText(Math.round(((xpos-X/2)/met-pX)*100)/100+", "+Math.round(((-ypos+Y/2)/met-pY)*100)/100, X-2, Y-4);

    for(let i = 0; i < grafy.length; i++){
        //koreny
        for(bod = 0; bod < koreny[i].length; bod++){
            x_bod = X/2+(koreny[i][bod]+pX)*met;
            if((x_bod-xpos)*(x_bod-xpos)+(Y/2-pY*met-ypos)*(Y/2-pY*met-ypos) < 36){
                document.getElementById("bodinfo").style.minWidth = "140px";
                bodinfo(x_bod, Y/2-pY*met);
                document.getElementById("bodinfotext").innerHTML = "Nulový bod \\(f_{"+(i+1)+"}\\)";
                document.getElementById("bodinfopos").innerHTML = "("+koreny[i][bod]+", 0)";
            }
        }
        //vrcholy
        for(bod = 0; bod < vrcholy[i].length; bod++){
            y_vr = zaokrouh(eval(grafy[i].predpis.replaceAll("x", "("+vrcholy[i][bod]+")")), settings.zaokr, settings.maxcif);
        
            x_bod = X/2+(vrcholy[i][bod]+pX)*met;
            y_bod = Y/2-(y_vr+pY)*met;

            if((x_bod-xpos)*(x_bod-xpos)+(y_bod-ypos)*(y_bod-ypos) < 36){
                document.getElementById("bodinfo").style.minWidth = "120px";
                bodinfo(x_bod, y_bod);
                document.getElementById("bodinfotext").innerHTML = "Vrchol \\(f_{"+(i+1)+"}\\)";
                document.getElementById("bodinfopos").innerHTML = "("+vrcholy[i][bod]+", "+y_vr+")";
            }
        }
    }
    //pruseciky
    for(let bod = 0; bod < pruseciky.length; bod++){
        x_bod = X/2+(pruseciky[bod][1][0]+pX)*met;
        y_bod = Y/2-(pruseciky[bod][1][1]+pY)*met;

        if((x_bod-xpos)*(x_bod-xpos)+(y_bod-ypos)*(y_bod-ypos) < 36){
            document.getElementById("bodinfo").style.minWidth = "200px";
            bodinfo(x_bod, y_bod);
            document.getElementById("bodinfotext").innerHTML = pruseciky[bod][0];
            document.getElementById("bodinfopos").innerHTML = "("+pruseciky[bod][1][0]+", "+pruseciky[bod][1][1]+")";
        }
    }
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById("bodinfo")]);
    
    
}
function bodinfo(x,y){
    cnx6.beginPath();
    cnx6.arc(x, y, 6, 0, Math.PI*2);
    cnx6.fillStyle = "rgb(0,0,0,0.4)";
    cnx6.fill();
    cnx6.stroke();
    document.getElementById("bodinfo").style.display = "block";
    document.getElementById("bodinfo").style.marginLeft = (x-document.getElementById("bodinfo").offsetWidth/2)+"px";
    document.getElementById("bodinfo").style.marginTop = (y-document.getElementById("bodinfo").offsetHeight-10-75)+"px";
}


function startvypocet(){
    pochodnotyget("");
    podminkyget();
    vypoctucelkem = 0;

    vypocettimer = setInterval(() => {

        for(let nvypoctu = 0; nvypoctu < settings.vypoctyvcyklu; nvypoctu++){

            vypoctucelkem++
            vypocet(vypoctucelkem);

            telesavykres(settings.oknoX, settings.oknoY, settings.posunX, settings.posunY, settings.zvetseni, vypoctucelkem);
            if(vypoctucelkem % settings.hrubostdrah == 0){
                for(let ig = 1; ig <= grafyzav.length; ig++){
                    if(grafyzav[ig-1].opened == true){
                        grafyzavvykres($("#grafzav2can"+ig).width(), $("#grafzav2can"+ig).height(), grafyzav[ig-1].posx, grafyzav[ig-1].posy, grafyzav[ig-1].zvetx, grafyzav[ig-1].zvety, ig);
                    }
                }
            }

            for(let i = 0; i < podminky.length; i++){
                if(vztahvypocet(podminky[i].hodnoty[0]) > vztahvypocet(podminky[i].hodnoty[1]) && podminky[i].visibility == true){
                    document.getElementById("playicon").innerHTML = "play_arrow";
                    stopvypocet();
                    uzbezi = false;
                }
            }
        }

        time += settings.dt*settings.vypoctyvcyklu;
        document.getElementById("timehod").innerHTML = zaokrouh(time, 4, 6);

    }, settings.dobacyklu);
}

function stopvypocet(){
    clearInterval(vypocettimer);
}

function refresh(){
    pochodnotyget("refresh");
    clearInterval(vypocettimer);
    cnx4.clearRect(0, 0, settings.oknoX, settings.oknoY);
    cnx5.clearRect(0, 0, settings.oknoX, settings.oknoY);
    uzbezi = false;
    time = 0;
    document.getElementById("timehod").innerHTML = 0;
    document.getElementById("playicon").innerHTML = "play_arrow";
    grafyzavget();
    grafzavadd();
}

function vypocet(){
    let telesa1 = JSON.parse(JSON.stringify(telesa));
    for(let i = 0; i < telesa.length; i++){
        for(let ii = 0; ii < telesa[i].rovnice.length; ii++){

            if(telesa[i].tableau.typ != "Eulerova metoda" && telesa[i].tableau.typ != "Eulerova metoda (midpoint)"){
                let koeficienty = [];
                for(let tel = 0; tel < telesa.length; tel++){
                    koeficienty.push(JSON.parse(JSON.stringify(Array(telesa[tel].rovnice.length).fill([]))));
                }
                koeficienty = koeficientyvypocet(koeficienty, i, ii, telesa[i].tableau.b.length-1, telesa[i].tableau);

                let ksumv = 0; let ksumx = 0;
                for(let kpoc = 0; kpoc < telesa[i].tableau.b.length; kpoc++){
                    ksumv += telesa[i].tableau.b[kpoc]*koeficienty[i][ii][kpoc][1];
                    ksumx += telesa[i].tableau.b[kpoc]*koeficienty[i][ii][kpoc][0];
                }

                telesa1[i].hodnoty[ii][1] = telesa[i].hodnoty[ii][1] + settings.dt*ksumv;
                telesa1[i].hodnoty[ii][0] = telesa[i].hodnoty[ii][0] + settings.dt*ksumx;
            }
            
            a = vztahvypocet(telesa[i].rovnice[ii]);

            if(telesa[i].tableau.typ == "Eulerova metoda"){
                telesa1[i].hodnoty[ii][1] = telesa[i].hodnoty[ii][1] + a*settings.dt;
                telesa1[i].hodnoty[ii][0] = telesa[i].hodnoty[ii][0] + telesa[i].hodnoty[ii][1]*settings.dt
            }
            if(telesa[i].tableau.typ == "Eulerova metoda (midpoint)"){
                telesa1[i].hodnoty[ii][1] = telesa[i].hodnoty[ii][1] + a*settings.dt;
                telesa1[i].hodnoty[ii][0] = telesa[i].hodnoty[ii][0] + telesa[i].hodnoty[ii][1]*settings.dt+0.5*a*settings.dt*settings.dt;
            }

            document.getElementById("hodx"+(ii+1)+"_"+telesa[i].poradi).innerHTML = zaokrouh(telesa1[i].hodnoty[ii][0], settings.zaokr, settings.maxcif);
            document.getElementById("hodv"+(ii+1)+"_"+telesa[i].poradi).innerHTML = zaokrouh(telesa1[i].hodnoty[ii][1], settings.zaokr, settings.maxcif);
            document.getElementById("hoda"+(ii+1)+"_"+telesa[i].poradi).innerHTML = zaokrouh(a, settings.zaokr, settings.maxcif);
        }

    }
    telesa = JSON.parse(JSON.stringify(telesa1));
}


function telesavykres(X, Y, pX, pY, m, vypoctucelkem){
    cnx5.clearRect(0, 0, X, Y);
    for(let i = 0; i < telesa.length; i++){

        if(telesa[i].visibility == true){ 

            if(telesa[i].system == "Kartézský"){
                xcoord = X/2 + m*(pX + vztahvypocet(telesa[i].pocatek[0]) + vztahvypocet(telesa[i].x1));
                ycoord = Y/2 - m*(pY + vztahvypocet(telesa[i].pocatek[1]) + vztahvypocet(telesa[i].x2));
            }
            if(telesa[i].system == "Polární"){
                xcoord = X/2 + m*(pX + vztahvypocet(telesa[i].pocatek[0]) + vztahvypocet(telesa[i].x2)*Math.sin(vztahvypocet(telesa[i].x1)));
                ycoord = Y/2 + m*(-pY - vztahvypocet(telesa[i].pocatek[1]) + vztahvypocet(telesa[i].x2)*Math.cos(vztahvypocet(telesa[i].x1)));
            }
            
            cnx5.beginPath();
            cnx5.fillStyle = telesa[i].barva;
            cnx5.strokeStyle = telesa[i].barva;
            cnx5.arc(xcoord, ycoord, vztahvypocet(telesa[i].velikost)*m, 0, Math.PI*2);
            cnx5.fill();
            cnx5.stroke();

            if(vypoctucelkem % settings.hrubostdrah == 0){
                xcoord0 = telesa[i].hodnoty0[0] || xcoord;
                ycoord0 = telesa[i].hodnoty0[1] || ycoord;
                cnx4.beginPath();
                cnx4.strokeStyle = telesa[i].barva;
                cnx4.moveTo(xcoord0, ycoord0);
                cnx4.lineTo(xcoord, ycoord);
                cnx4.stroke();
                telesa[i].hodnoty0 = [xcoord,  ycoord];
            }
        }
        else{
            telesa[i].hodnoty0 = [];
        }
    }
    spojnicevykres(X, Y, pX, pY, m);
}

function spojnicevykres(X, Y, pX, pY, m){
    for(let i = 0; i < spojnice.length; i++){

        if(spojnice[i].visibility == true){

            cnx5.beginPath();
            cnx5.strokeStyle = spojnice[i].barva;
            cnx5.moveTo(X/2 + m*(pX + vztahvypocet(spojnice[i].x1)), Y/2 - m*(pY + vztahvypocet(spojnice[i].y1)));
        

            if(spojnice[i].polomer > 0 && spojnice[i].zavity > 0){
                delkaspoj = Math.sqrt(Math.pow(vztahvypocet(spojnice[i].x1)-vztahvypocet(spojnice[i].x2),2)+Math.pow(vztahvypocet(spojnice[i].y1)-vztahvypocet(spojnice[i].y2),2));
                uhelspoj = Math.sign(vztahvypocet(spojnice[i].y2)-vztahvypocet(spojnice[i].y1))*Math.acos((vztahvypocet(spojnice[i].x2)-vztahvypocet(spojnice[i].x1))/delkaspoj);

                for(let ii = 0; ii <= delkaspoj; ii += 1/m){
                    vychylka = spojnice[i].polomer*Math.sin(2*Math.PI*(spojnice[i].zavity/delkaspoj)*ii);
                    cnx5.lineTo(X/2 + m*(pX + vztahvypocet(spojnice[i].x1) + ii*Math.cos(uhelspoj)-vychylka*Math.sin(uhelspoj)), Y/2 - m*(pY + vztahvypocet(spojnice[i].y1) + ii*Math.sin(uhelspoj)+vychylka*Math.cos(uhelspoj)));
                }
            }
            else{
                cnx5.lineTo(X/2 + m*(pX + vztahvypocet(spojnice[i].x2)), Y/2 - m*(pY + vztahvypocet(spojnice[i].y2)));
            }

            cnx5.stroke();
        }
    }
}

function grafyzavvykres(X, Y, pX, pY, mx, my, i){
    cnxg = document.getElementById("grafzav1can"+i).getContext("2d");
    
    if(grafyzav[i-1].coord[0] == ""){
        grafyzav[i-1].coord[0] = X/2+pX*mx+vztahvypocet(grafyzav[i-1].velx)*mx;
        grafyzav[i-1].coord[1] = 50+Y/2-pY*my-vztahvypocet(grafyzav[i-1].vely)*my;
    }
    
    cnxg.beginPath();
    cnxg.moveTo(grafyzav[i-1].coord[0], grafyzav[i-1].coord[1]);
    cnxg.lineTo(X/2+pX*mx+vztahvypocet(grafyzav[i-1].velx)*mx, 50+Y/2-pY*my-vztahvypocet(grafyzav[i-1].vely)*my);
    cnxg.stroke();

    grafyzav[i-1].coord[0] = X/2+pX*mx+vztahvypocet(grafyzav[i-1].velx)*mx;
    grafyzav[i-1].coord[1] = 50+Y/2-pY*my-vztahvypocet(grafyzav[i-1].vely)*my;

}
function grafzavosy(X, Y, pX, pY, mx, my, ii, cnxg){
    cnxg = document.getElementById("grafzav1can"+ii).getContext("2d");
    cnxg.beginPath();
    cnxg.strokeStyle = "black";
    cnxg.moveTo(0, Y/2-pY*my+50); 
    cnxg.lineTo(X, Y/2-pY*my+50);
    cnxg.moveTo(X/2+pX*mx, 0); 
    cnxg.lineTo(X/2+pX*mx, Y);
    for(let i = 0; i <= X; i += grafyzav[ii-1].krokx*mx){
        cnxg.moveTo(i+X/2+pX*mx, Y/2-pY*my+50); cnxg.lineTo(i+X/2+pX*mx, 4+Y/2-pY*my+50);
        cnxg.moveTo(-i+X/2+pX*mx, Y/2-pY*my+50); cnxg.lineTo(-i+X/2+pX*mx, 4+Y/2-pY*my+50);
        cnxg.textAlign = "center";
        if(i != 0){cnxg.fillText(Math.round(i/mx*10)/10, i+X/2+pX*mx, 15+Y/2-pY*my+50)}
        if(i != 0){cnxg.fillText(Math.round(-i/mx*10)/10, -i+X/2+pX*mx, 15+Y/2-pY*my+50)}
    }
    for(let i = 0; i <= Y; i += grafyzav[ii-1].kroky*my){
        cnxg.moveTo(X/2+pX*mx, i+Y/2-pY*my+50); cnxg.lineTo(X/2-4+pX*mx, i+Y/2-pY*my+50);
        cnxg.moveTo(X/2+pX*mx, -i+Y/2-pY*my+50); cnxg.lineTo(X/2-4+pX*mx, -i+Y/2-pY*my+50);
        cnxg.textAlign = "end";
        if(i != 0){cnxg.fillText(Math.round(-i/my*10)/10, X/2-5+pX*mx, i+Y/2+3-pY*my+50)}
        if(i != 0){cnxg.fillText(Math.round(i/my*10)/10, X/2-5+pX*mx, -i+Y/2+3-pY*my+50)}
    }
    cnxg.fillText("0", X/2-5+pX*mx, Y/2+15-pY*my+50)
    cnxg.stroke();
}




function phbrovniceadd(souradnice, teleso){

    div = document.createElement("div");
    
    label = document.createElement("label");
    label.appendChild(document.createTextNode("a"+souradnice+"_"+teleso+" \\(=\\)"));
    div.appendChild(label);

    input = document.createElement("input");
    input.id = "phbrovniceinputjs"+souradnice;
    input.value = 0;
    div.appendChild(input);

    label = document.createElement("label");
    label.appendChild(document.createTextNode("\\(\\ddot{q}_{{"+souradnice+"}_{"+teleso+"}}=\\)"));
    div.appendChild(label);

    input = document.createElement("input");
    input.id = "phbrovniceinputtex"+souradnice;
    div.appendChild(input);

    document.getElementById("phbrovniceinput").appendChild(div);
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById("phbrovniceinput")]);
}
function phbrovniceaddedit(souradnice, teleso, JStext, TeXtext){
    div = document.createElement("div");
    
    label = document.createElement("label");
    label.appendChild(document.createTextNode("a"+souradnice+"_"+teleso+" \\(=\\)"));
    div.appendChild(label);

    input = document.createElement("input");
    input.id = "phbrovniceinputjsedit"+souradnice;
    input.value = JStext;
    div.appendChild(input);

    label = document.createElement("label");
    label.appendChild(document.createTextNode("\\(\\ddot{q}_{{"+souradnice+"}_{"+teleso+"}}=\\)"));
    div.appendChild(label);

    input = document.createElement("input");
    input.id = "phbrovniceinputtexedit"+souradnice;
    input.value = TeXtext;
    div.appendChild(input);

    document.getElementById("phbrovniceinputedit").appendChild(div);
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById("phbrovniceinputedit")]);
}
function telesaaddset(){
    if(telesa.length != 0){
        document.getElementById("telesaaddnazev").value = "Těleso "+(telesa[telesa.length-1].poradi+1);
        document.getElementById("telesaaddx1").value = "x1_"+(telesa[telesa.length-1].poradi+1);
        document.getElementById("telesaaddx2").value = "x2_"+(telesa[telesa.length-1].poradi+1);
        while(document.getElementById("phbrovniceinput").lastChild){
            document.getElementById("phbrovniceinput").removeChild(document.getElementById("phbrovniceinput").lastChild);
        }
        phbrovniceadd("1", telesa[telesa.length-1].poradi+1);
        phbrovniceadd("2", telesa[telesa.length-1].poradi+1);
    }
    else{
        document.getElementById("telesaaddnazev").value = "Těleso 1";
        document.getElementById("telesaaddx1").value = "x1_1";
        document.getElementById("telesaaddx2").value = "x2_1";
        while(document.getElementById("phbrovniceinput").lastChild){
            document.getElementById("phbrovniceinput").removeChild(document.getElementById("phbrovniceinput").lastChild);
        }
        phbrovniceadd("1", "1");
        phbrovniceadd("2", "1");
    }
}
function ssselectset(edit){
    if(document.getElementById("ssselect"+edit).value == "Polární"){
        document.getElementById("ssselectlab1"+edit).innerHTML = "\\(\\varphi=\\)";
        document.getElementById("ssselectlab2"+edit).innerHTML = "\\(r=\\)";
    }
    if(document.getElementById("ssselect"+edit).value == "Kartézský"){
        document.getElementById("ssselectlab1"+edit).innerHTML = "\\(x=\\)";
        document.getElementById("ssselectlab2"+edit).innerHTML = "\\(y=\\)";
    }
    MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById("telesaaddinfo"+edit)]);
}
function selectdifschem(editadd, velikost, tableau){
    document.getElementById("euler"+editadd).style.display = "none";
    document.getElementById("eulermid"+editadd).style.display = "none";
    document.getElementById("secorder"+editadd).style.display = "none";
    document.getElementById("fourorder"+editadd).style.display = "none";
    document.getElementById("vlastmetod"+editadd).style.display = "none";
    if(document.getElementById("difschemselect"+editadd).value == "Eulerova metoda"){
        document.getElementById("euler"+editadd).style.display = "block";
    }
    if(document.getElementById("difschemselect"+editadd).value == "Eulerova metoda (midpoint)"){
        document.getElementById("eulermid"+editadd).style.display = "block";
    }
    if(document.getElementById("difschemselect"+editadd).value == "Rungeova-Kuttova (2. řádu)"){
        document.getElementById("secorder"+editadd).style.display = "block";
    }
    if(document.getElementById("difschemselect"+editadd).value == "Rungeova-Kuttova (4. řádu)"){
        document.getElementById("fourorder"+editadd).style.display = "block";
    }
    if(document.getElementById("difschemselect"+editadd).value == "Vlastní"){
        document.getElementById("vlastmetod"+editadd).style.display = "block";
        tableaubuild(editadd, velikost, tableau);
    }
}
function tableauget(editadd){
    let tableau = {};
    tableau.typ = document.getElementById("difschemselect"+editadd).value
    if(tableau.typ == "Rungeova-Kuttova (2. řádu)"){
        tableau.c = [0, 0.5];
        tableau.b = [0, 1];
        tableau.a = [[0.5]];
    }
    if(tableau.typ == "Rungeova-Kuttova (4. řádu)"){
        tableau.c = [0, 0.5, 0.5, 1];
        tableau.b = [1/6, 1/3, 1/3, 1/6];
        tableau.a = [[0.5],[0,0.5],[0,0,1]];
    }
    if(tableau.typ == "Vlastní"){
        velikost = document.getElementById("vlasttablrad"+editadd).value;
        tableau.c = [0];
        tableau.b = []
        tableau.a = []
        
        for(let i = 0; i < velikost; i++){
            if(i > 0){tableau.c[i] = vztahvypocet(document.getElementById("koefc"+editadd+i).value)};
            tableau.b[i] = vztahvypocet(document.getElementById("koefb"+editadd+(i)).value);
            if(i > 0){tableau.a.push(JSON.parse(JSON.stringify([])))};
            for(let ii = 0; ii < i; ii++){
                tableau.a[i-1][ii] = vztahvypocet(document.getElementById("koefa"+editadd+String(i-1)+String(ii)).value);
            }
        }
    }
    return tableau;
}
function tableaubuild(editadd, velikost, tableau){
    document.getElementById("vlasttablrad"+editadd).value = velikost;

    while(document.getElementById("vlasttabl"+editadd).lastChild){
        document.getElementById("vlasttabl"+editadd).removeChild(document.getElementById("vlasttabl"+editadd).lastChild);
    }

    table = document.createElement("table");
    for(let i = 0; i <= velikost; i++){
        tr = document.createElement("tr");
        for(let ii = 0; ii <= i; ii++){
            td = document.createElement("td");
            if(ii == 0){td.style.borderRight = "1px solid"}
            if(ii == 0 && i == 0){td.appendChild(document.createTextNode("0"))}
            else if(i < velikost || ii > 0){
                input = document.createElement("input");
                if(ii == 0){
                    input.id = "koefc"+editadd+i;
                    if(tableau){input.value = tableau.c[i]}
                }
                else if(i < velikost){
                    input.id = "koefa"+editadd+String(i-1)+String(ii-1)
                    if(tableau){input.value = tableau.a[i-1][ii-1]}
                }
                else if(i == velikost){
                    input.id = "koefb"+editadd+(ii-1);
                    tr.style.borderTop = "1px solid";
                    if(tableau){input.value = tableau.b[ii-1]}
                }
                td.appendChild(input);
            }
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.getElementById("vlasttabl"+editadd).appendChild(table);
}

function telesaadd(){
    
    while(document.getElementById("telesaseznam").lastChild){
        document.getElementById("telesaseznam").removeChild(document.getElementById("telesaseznam").lastChild);
    }
    while(document.getElementById("pochodnotyseznam").lastChild){
        document.getElementById("pochodnotyseznam").removeChild(document.getElementById("pochodnotyseznam").lastChild);
    }
    while(document.getElementById("hodnotyseznam").lastChild){
        document.getElementById("hodnotyseznam").removeChild(document.getElementById("hodnotyseznam").lastChild);
    }

    for(let i = 1; i <= telesa.length; i++){
        telesaaddtelesa(i);
        telesaaddpochodnoty(i);
        telesaaddhodnoty(i);
    }

    function telesaaddtelesa(i){
        hldiv = document.createElement("div");
        hldiv.className = "objektyitem";
        hldiv.style.borderLeft = "5px solid "+telesa[i-1].barva;
            div = document.createElement("div");
            div.className = "objektyitemsett";
                button = document.createElement("button");
                button.id = "telesavisibility"+i;
                    icon = document.createElement("i");
                    icon.className = "material-icons";
                    icon.id = "telesavisibilityicon"+i;
                    icon.appendChild(document.createTextNode("visibility"));
                button.appendChild(icon);
            div.appendChild(button);
                button = document.createElement("button");
                button.id = "telesaedit"+i;
                    icon = document.createElement("i");
                    icon.className = "material-icons";
                    icon.appendChild(document.createTextNode("edit"));
                button.appendChild(icon);
            div.appendChild(button);
                button = document.createElement("button");
                button.id = "telesaremove"+i;
                    icon = document.createElement("i");
                    icon.className = "material-icons";
                    icon.appendChild(document.createTextNode("delete"));
                button.appendChild(icon);
            div.appendChild(button);
                nazev = document.createElement("div");
                nazev.appendChild(document.createTextNode(telesa[i-1].nazev));
            div.appendChild(nazev);
        hldiv.appendChild(div);
        hldiv.appendChild(document.createElement("br"));
            div = document.createElement("div");

            for(let ii = 0; ii < telesa[i-1].popisek.length; ii++){
                if(telesa[i-1].popisek[ii] != ""){
                    label = document.createElement("label");
                    label.appendChild(document.createTextNode("\\(\\ddot{q}_{"+(ii+1)+"_{"+telesa[i-1].poradi+"}}="+telesa[i-1].popisek[ii]+"\\)"));
                    div.appendChild(label);
                    div.appendChild(document.createElement("br"));
                }
                else{
                    label = document.createElement("label");
                    label.appendChild(document.createTextNode("a"+(ii+1)+"_"+telesa[i-1].poradi+" = "+telesa[i-1].rovnice[ii]));
                    div.appendChild(label);
                    div.appendChild(document.createElement("br"));
                }
            }

        hldiv.appendChild(div);

        document.getElementById("telesaseznam").appendChild(hldiv);
        
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById("telesaseznam")]);
    }
    function telesaaddpochodnoty(i){
        hldiv = document.createElement("div");
        hldiv.className = "objektyitem";
        hldiv.style.borderLeft = "5px solid "+telesa[i-1].barva;
            div = document.createElement("div");
            div.className = "objektyitemsett";
                nazev = document.createElement("div");
                nazev.appendChild(document.createTextNode(telesa[i-1].nazev));
            div.appendChild(nazev);
        hldiv.appendChild(div);
        hldiv.appendChild(document.createElement("br"));
            div = document.createElement("div");

            for(let ii = 0; ii < telesa[i-1].popisek.length; ii++){
                    label = document.createElement("label");
                    label.appendChild(document.createTextNode("\\(q_{"+(ii+1)+"_{"+telesa[i-1].poradi+"}}^0=\\)"));
                div.appendChild(label);
                    input = document.createElement("input");
                    input.id = "pocx"+(ii+1)+"_"+telesa[i-1].poradi;
                    input.value = 0;
                    if(telesa[i-1].pochodnoty[ii]){input.value = telesa[i-1].pochodnoty[ii][0];}
                div.appendChild(input);
                    label = document.createElement("label");
                    label.appendChild(document.createTextNode("\\(\\dot{q}_{"+(ii+1)+"_{"+telesa[i-1].poradi+"}}^0=\\)"));
                div.appendChild(label);
                    input = document.createElement("input");
                    input.id = "pocv"+(ii+1)+"_"+telesa[i-1].poradi;
                    input.value = 0;
                    if(telesa[i-1].pochodnoty[ii]){input.value = telesa[i-1].pochodnoty[ii][1];}
                div.appendChild(input);
                div.appendChild(document.createElement("br"));
            }
        
        hldiv.appendChild(div);

        document.getElementById("pochodnotyseznam").appendChild(hldiv);
        
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById("pochodnotyseznam")]);
    }
    function telesaaddhodnoty(i){
        hldiv = document.createElement("div");
        hldiv.className = "objektyitem";
        hldiv.style.borderLeft = "5px solid "+telesa[i-1].barva;
        hldiv.style.minWidth = "260px";
        hldiv.style.gridColumn = (i-1)%2+1;
        hldiv.style.gridRow = (i+i%2)/2;
            div = document.createElement("div");
            div.className = "objektyitemsett";
                nazev = document.createElement("div");
                nazev.appendChild(document.createTextNode(telesa[i-1].nazev));
            div.appendChild(nazev);
        hldiv.appendChild(div);
        hldiv.appendChild(document.createElement("br"));
            div = document.createElement("div");

            for(let ii = 0; ii < telesa[i-1].popisek.length; ii++){
                    label = document.createElement("label");
                    label.appendChild(document.createTextNode("\\(q_{"+(ii+1)+"_{"+telesa[i-1].poradi+"}}=\\)"));
                div.appendChild(label);
                    hodnota = document.createElement("label");
                    hodnota.id = "hodx"+(ii+1)+"_"+telesa[i-1].poradi;
                div.appendChild(hodnota);
                div.appendChild(document.createElement("br"));

                    label = document.createElement("label");
                    label.appendChild(document.createTextNode("\\(\\dot{q}_{"+(ii+1)+"_{"+telesa[i-1].poradi+"}}=\\)"));
                div.appendChild(label);
                    hodnota = document.createElement("label");
                    hodnota.id = "hodv"+(ii+1)+"_"+telesa[i-1].poradi;
                div.appendChild(hodnota);
                div.appendChild(document.createElement("br"));

                    label = document.createElement("label");
                    label.appendChild(document.createTextNode("\\(\\ddot{q}_{"+(ii+1)+"_{"+telesa[i-1].poradi+"}}=\\)"));
                div.appendChild(label);
                    hodnota = document.createElement("label");
                    hodnota.id = "hoda"+(ii+1)+"_"+telesa[i-1].poradi;
                div.appendChild(hodnota);
                div.appendChild(document.createElement("br"));
            }
        
        hldiv.appendChild(div);

        document.getElementById("hodnotyseznam").appendChild(hldiv);
        
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById("hodnotyseznam")]);
    }
}
function grafyadd(){
    while(document.getElementById("grafyseznam").lastChild){
        document.getElementById("grafyseznam").removeChild(document.getElementById("grafyseznam").lastChild);
    }

    for(let i = 1; i <= grafy.length; i++){
        hldiv = document.createElement("div");
            hldiv.className = "objektyitem";
            hldiv.style.borderLeft = "5px solid "+grafy[i-1].barva;
                div = document.createElement("div");
                div.className = "objektyitemsett";
                    button = document.createElement("button");
                    button.id = "grafyvisibility"+i;
                        icon = document.createElement("i");
                        icon.className = "material-icons";
                        icon.id = "grafyvisibilityicon"+i;
                        icon.appendChild(document.createTextNode("visibility"));
                    button.appendChild(icon);
                div.appendChild(button);
                    button = document.createElement("button");
                    button.id = "grafyedit"+i;
                        icon = document.createElement("i");
                        icon.className = "material-icons";
                        icon.appendChild(document.createTextNode("edit"));
                    button.appendChild(icon);
                div.appendChild(button);
                    button = document.createElement("button");
                    button.id = "grafyremove"+i;
                        icon = document.createElement("i");
                        icon.className = "material-icons";
                        icon.appendChild(document.createTextNode("delete"));
                    button.appendChild(icon);
                div.appendChild(button);
                    nazev = document.createElement("div");
                    nazev.appendChild(document.createTextNode(grafy[i-1].nazev));
                div.appendChild(nazev);
            hldiv.appendChild(div);
            hldiv.appendChild(document.createElement("br"));
                div = document.createElement("div");
                    label = document.createElement("label");
                    if(grafy[i-1].popisek != ""){
                        label.appendChild(document.createTextNode("\\(f_{"+grafy[i-1].poradi+"}(x)="+grafy[i-1].popisek+"\\)"));
                    }
                    else{
                        label.appendChild(document.createTextNode("\\(f_{"+grafy[i-1].poradi+"}(x)=\\) "+grafy[i-1].predpis));
                    }
                div.appendChild(label);

            hldiv.appendChild(div);

            document.getElementById("grafyseznam").appendChild(hldiv);
            
            MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById("grafyseznam")]);
    }           
}
function spojniceadd(){
    while(document.getElementById("spojniceseznam").lastChild){
        document.getElementById("spojniceseznam").removeChild(document.getElementById("spojniceseznam").lastChild);
    }

    for(let i = 1; i <= spojnice.length; i++){
        hldiv = document.createElement("div");
            hldiv.className = "objektyitem";
            hldiv.style.borderLeft = "5px solid "+spojnice[i-1].barva;
                div = document.createElement("div");
                div.className = "objektyitemsett";
                    button = document.createElement("button");
                    button.id = "spojnicevisibility"+i;
                        icon = document.createElement("i");
                        icon.className = "material-icons";
                        icon.id = "spojnicevisibilityicon"+i;
                        icon.appendChild(document.createTextNode("visibility"));
                    button.appendChild(icon);
                div.appendChild(button);
                    button = document.createElement("button");
                    button.id = "spojniceedit"+i;
                        icon = document.createElement("i");
                        icon.className = "material-icons";
                        icon.appendChild(document.createTextNode("edit"));
                    button.appendChild(icon);
                div.appendChild(button);
                    button = document.createElement("button");
                    button.id = "spojniceremove"+i;
                        icon = document.createElement("i");
                        icon.className = "material-icons";
                        icon.appendChild(document.createTextNode("delete"));
                    button.appendChild(icon);
                div.appendChild(button);
                    nazev = document.createElement("div");
                    nazev.appendChild(document.createTextNode(spojnice[i-1].nazev));
                div.appendChild(nazev);
            hldiv.appendChild(div);
            hldiv.appendChild(document.createElement("br"));
                div = document.createElement("div");
                    label = document.createElement("label");
                    if(spojnice[i-1].popisek != ""){
                        label.appendChild(document.createTextNode("\\("+spojnice[i-1].popisek+"\\)"));
                    }
                    else{
                        label.appendChild(document.createTextNode("\\(A(\\)"+spojnice[i-1].x1+"\\(,\\) "+spojnice[i-1].y1+"\\(),\\) "+"\\(B(\\)"+spojnice[i-1].x2+"\\(,\\) "+spojnice[i-1].y2+"\\()\\)"));
                    }
                div.appendChild(label);
                div.appendChild(document.createElement("br"));
                if(spojnice[i-1].polomer > 0){
                    label = document.createElement("label");
                    label.appendChild(document.createTextNode("Pružina: \\(R=\\)"+spojnice[i-1].polomer+", "+"\\(N=\\)"+spojnice[i-1].zavity))
                    div.appendChild(label);
                }

            hldiv.appendChild(div);

            document.getElementById("spojniceseznam").appendChild(hldiv);
            
            MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById("spojniceseznam")]);
    }
}

function konstantyadd(){
    while(document.getElementById("konstantyseznam").lastChild){
        document.getElementById("konstantyseznam").removeChild(document.getElementById("konstantyseznam").lastChild);
    }

    for(let i = 0; i < konstanty.length; i++){
        if(konstanty[i].upravovano == false){
            hldiv = document.createElement("div");
            hldiv.className = "objektyitem";
                div = document.createElement("div");
                div.className = "objektyitemsett";
                    button = document.createElement("button");
                    button.id = "konstantyedit"+i;
                        icon = document.createElement("i");
                        icon.className = "material-icons";
                        icon.appendChild(document.createTextNode("edit"));
                    button.appendChild(icon);
                div.appendChild(button);
                    button = document.createElement("button");
                    button.id = "konstantyremove"+i;
                        icon = document.createElement("i");
                        icon.className = "material-icons";
                        icon.appendChild(document.createTextNode("delete"));
                    button.appendChild(icon);
                div.appendChild(button);
                    nazev = document.createElement("div");
                    nazev.appendChild(document.createTextNode(konstanty[i].nazev));
                div.appendChild(nazev);
            hldiv.appendChild(div);
            hldiv.appendChild(document.createElement("br"));
                div = document.createElement("div");
                    label = document.createElement("label");
                    label.style.fontSize = "17px";
                    if(konstanty[i].popisek != ""){
                        label.appendChild(document.createTextNode("\\("+konstanty[i].popisek+"\\)"));
                    }
                    else if(konstanty[i].znacka != ""){
                        label.appendChild(document.createTextNode(konstanty[i].znacka+"\\(=\\)"+konstanty[i].hodnota));
                    }
                div.appendChild(label);

            hldiv.appendChild(div);
        }
        else{
            hldiv = document.createElement("div");
            hldiv.className = "objektyitem";
                div = document.createElement("div");
                div.className = "objektyitemsett";
                    button = document.createElement("button");
                    button.id = "konstantyremove"+i;
                        icon = document.createElement("i");
                        icon.className = "material-icons";
                        icon.appendChild(document.createTextNode("delete"));
                    button.appendChild(icon);
                div.appendChild(button);
                    nazev = document.createElement("div");
                    nazev.style.marginLeft = "40px";
                        label = document.createElement("label");
                        label.appendChild(document.createTextNode("Název:"));
                    nazev.appendChild(label);
                        input = document.createElement("input");
                        input.id = "konstantyinputnazev"+i;
                        input.style.width = "200px";
                        input.value = konstanty[i].nazev;
                    nazev.appendChild(input);
                div.appendChild(nazev);
            hldiv.appendChild(div);
                div = document.createElement("div");
                div.style.textAlign = "right";
                    label = document.createElement("label");
                    label.appendChild(document.createTextNode("Vztah (JS):"));
                div.appendChild(label);
                    input = document.createElement("input");
                    input.id = "konstantyinputvztah"+i;
                    input.style.width = "200px";
                    input.style.marginRight = "13px";
                    if(konstanty[i].znacka != ""){input.value = konstanty[i].znacka+"="+konstanty[i].hodnota}
                div.appendChild(input);
                div.appendChild(document.createElement("br"));
                    label = document.createElement("label");
                    label.appendChild(document.createTextNode("Popisek (\\(\\LaTeX{}\\)):"));
                div.appendChild(label);
                    input = document.createElement("input");
                    input.id = "konstantyinputpopisek"+i;
                    input.style.width = "200px";
                    input.style.marginRight = "13px";
                    input.value = konstanty[i].popisek;
                div.appendChild(input);
                div.appendChild(document.createElement("br"));
                    button = document.createElement("button");
                    button.id = "konstantyinputadd"+i;
                    button.className = "phbrovnicebuttons";
                    button.appendChild(document.createTextNode("Uložit"));
                div.appendChild(button);
            
            hldiv.appendChild(div)
        }

        document.getElementById("konstantyseznam").appendChild(hldiv);
        
        MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById("konstantyseznam")]);
    }
}

function podminkyadd(){
    while(document.getElementById("podminkyseznam").lastChild){
        document.getElementById("podminkyseznam").removeChild(document.getElementById("podminkyseznam").lastChild);
    }

    for(let i = 1; i <= podminky.length; i++){
        hldiv = document.createElement("div");
        hldiv.className = "objektyitem";
            div = document.createElement("div");
            div.className = "objektyitemsett";
                button = document.createElement("button");
                button.id = "podminkyvisibility"+i;
                    icon = document.createElement("i");
                    icon.className = "material-icons";
                    icon.id = "podminkyvisibilityicon"+i;
                    icon.appendChild(document.createTextNode("visibility"));
                button.appendChild(icon);
            div.appendChild(button);
                button = document.createElement("button");
                button.id = "podminkyremove"+i;
                    icon = document.createElement("i");
                    icon.className = "material-icons";
                    icon.appendChild(document.createTextNode("delete"));
                button.appendChild(icon);
            div.appendChild(button);
                podminka = document.createElement("div");
                    input = document.createElement("input");
                    input.id = "podminky1hod"+i;
                    input.value = podminky[i-1].hodnoty[0];
                    input.style.width = "100px";
                podminka.appendChild(input);
                podminka.appendChild(document.createTextNode(" > "));
                    input = document.createElement("input");
                    input.id = "podminky2hod"+i;
                    input.value = podminky[i-1].hodnoty[1];
                    input.style.width = "100px";
                podminka.appendChild(input);
            div.appendChild(podminka);
        hldiv.appendChild(div);
        
        document.getElementById("podminkyseznam").appendChild(hldiv);
    }
}

function grafzavadd(){
    while(document.getElementById("grafyzavislosti").lastChild){
        document.getElementById("grafyzavislosti").removeChild(document.getElementById("grafyzavislosti").lastChild);
    }
    while(document.getElementById("zalozky").lastChild){
        document.getElementById("zalozky").removeChild(document.getElementById("zalozky").lastChild);
    }

    for(let i = 1; i <= grafyzav.length; i++){

            button = document.createElement("button");
            button.id = "grafzavopen"+i;
            if(grafyzav.length < 10){button.appendChild(document.createTextNode("Graf "+i))}
            else{button.appendChild(document.createTextNode(i))}
        document.getElementById("zalozky").appendChild(button);

        hldiv = document.createElement("div");
        hldiv.id = "grafzav"+i; hldiv.className = "okno";
        hldiv.style =  "width: 550px; height: 400px;";
        hldiv.style.marginLeft = grafyzav[i-1].margleft;
        hldiv.style.marginTop = grafyzav[i-1].margtop;
        hldiv.style.display = "block";
            div = document.createElement("div");
            div.className = "grafzavcan";
                canvas = document.createElement("canvas");
                canvas.id = "grafzav1can"+i;
                canvas.style.backgroundColor = "white";
            div.appendChild(canvas);
                canvas = document.createElement("canvas");
                canvas.id = "grafzav2can"+i;
            div.appendChild(canvas);
        hldiv.appendChild(div)

            div = document.createElement("div");
            div.className = "grafzavsett";
                label = document.createElement("label"); label.appendChild(document.createTextNode("Osa x:"));
            div.appendChild(label);
            grafzavsettadd(div, i, "x");
            div.appendChild(document.createElement("br"));

                label = document.createElement("label"); label.appendChild(document.createTextNode("Osa y:"));
            div.appendChild(label);
            grafzavsettadd(div, i, "y");
        hldiv.appendChild(div);

            div = document.createElement("div");
            div.className = "oknomenu"; div.style.zIndex = "2";
                label = document.createElement("label");
                label.appendChild(document.createTextNode("Graf "+i));
            div.appendChild(label);
                div2 = document.createElement("div");
                    button = document.createElement("button");
                    button.id = "grafzavminim"+i;
                        icon = document.createElement("i");
                        icon.className = "material-icons"; icon.appendChild(document.createTextNode("remove"));
                    button.appendChild(icon);
                div2.appendChild(button);
                    button = document.createElement("button");
                    button.id = "grafzavclose"+i;
                        icon = document.createElement("i");
                        icon.className = "material-icons"; icon.appendChild(document.createTextNode("close"));
                    button.appendChild(icon);
                div2.appendChild(button);
            div.appendChild(div2);
        hldiv.appendChild(div);
    
    document.getElementById("grafyzavislosti").appendChild(hldiv);

    document.getElementById("grafzav1can"+i).width = $("#grafzav1can"+i).width();
    document.getElementById("grafzav1can"+i).height = $("#grafzav1can"+i).height();
    document.getElementById("grafzav2can"+i).width = $("#grafzav2can"+i).width();
    document.getElementById("grafzav2can"+i).height = $("#grafzav2can"+i).height();

    grafyzav[i-1].coord[0] = "";
    grafyzav[i-1].coord[1] = "";
    
    grafzavosy($("#grafzav2can"+i).width(), $("#grafzav2can"+i).height(), grafyzav[i-1].posx, grafyzav[i-1].posy, grafyzav[i-1].zvetx, grafyzav[i-1].zvety, i);

    if(grafyzav[i-1].opened == false){document.getElementById("grafzav"+i).style.display = "none"}

    MathJax.Hub.Queue(["Typeset", MathJax.Hub, document.getElementById("grafyzavislosti")]);
    }

    function grafzavsettadd(div, i, xy){
        label = document.createElement("label"); label.appendChild(document.createTextNode(" Veličina: "));
        div.appendChild(label);
            input = document.createElement("input"); input.id = "grafzavvel"+xy+i;
            if(xy == "x"){input.value = grafyzav[i-1].velx}else{input.value = grafyzav[i-1].vely};
        div.appendChild(input);
            label = document.createElement("label"); label.appendChild(document.createTextNode(" Zvětšení: "));
        div.appendChild(label);
            input = document.createElement("input"); input.id = "grafzavzvet"+xy+i;
            if(xy == "x"){input.value = grafyzav[i-1].zvetx}else{input.value = grafyzav[i-1].zvety};
        div.appendChild(input);
            label = document.createElement("label"); label.appendChild(document.createTextNode(" Posun: "));
        div.appendChild(label);
            input = document.createElement("input"); input.id = "grafzavpos"+xy+i;
            if(xy == "x"){input.value = grafyzav[i-1].posx}else{input.value = grafyzav[i-1].posy};
        div.appendChild(input);
            label = document.createElement("label"); label.appendChild(document.createTextNode(" Krok: "));
        div.appendChild(label);
            input = document.createElement("input"); input.id = "grafzavkrok"+xy+i;
            if(xy == "x"){input.value = grafyzav[i-1].krokx}else{input.value = grafyzav[i-1].kroky};
        div.appendChild(input);
    }
}



function settget(){
    settings.zvetseni = Number(document.getElementById("settzvet").value);
    settings.hrubostdrah = Number(document.getElementById("setthrubdrah").value);
    settings.hrubostgraf = Number(document.getElementById("setthrubgraf").value);
    settings.posunX = Number(document.getElementById("settposx").value);
    settings.posunY = Number(document.getElementById("settposy").value);
    settings.osaXvzdal = Number(document.getElementById("settkrokx").value);
    settings.osaYvzdal = Number(document.getElementById("settkroky").value);
    settings.dt = Number(document.getElementById("settdt").value);
    settings.h = Number(document.getElementById("setth").value);
    settings.dobacyklu = Number(document.getElementById("settdobacyk").value);
    settings.vypoctyvcyklu = Number(document.getElementById("settvypcyk").value);
    settings.zaokr = Number(document.getElementById("settplatcis").value);
    settings.maxcif = Number(document.getElementById("settpoccif").value);
    settings.maxdes = Number(document.getElementById("settpocdes").value);
    settings.hlbarva = document.getElementById("setthlbarva").value;
    settings.barvapismo2 = document.getElementById("settpismo2").value;
    settings.barvapismo1 = document.getElementById("settpismo1").value;
    refresh();
    barvaset();
    osynakres(settings.oknoX, settings.oknoY, settings.posunX, settings.posunY, settings.zvetseni);
    grafyvykres(settings.oknoX, settings.oknoY, settings.posunX, settings.posunY, settings.zvetseni);
}
function settzapis(){
    document.getElementById("settzvet").value = settings.zvetseni;
    document.getElementById("setthrubdrah").value = settings.hrubostdrah;
    document.getElementById("setthrubgraf").value = settings.hrubostgraf;
    document.getElementById("settposx").value = settings.posunX;
    document.getElementById("settposy").value = settings.posunY;
    document.getElementById("settkrokx").value = settings.osaXvzdal;
    document.getElementById("settkroky").value = settings.osaYvzdal;
    document.getElementById("settdt").value = settings.dt;
    document.getElementById("setth").value = settings.h;
    document.getElementById("settdobacyk").value = settings.dobacyklu;
    document.getElementById("settvypcyk").value = settings.vypoctyvcyklu;
    document.getElementById("settplatcis").value = settings.zaokr;
    document.getElementById("settpoccif").value = settings.maxcif;
    document.getElementById("settpocdes").value = settings.maxdes;
    document.getElementById("setthlbarva").value = settings.hlbarva;
    document.getElementById("settpismo2").value = settings.barvapismo2;
    document.getElementById("settpismo1").value = settings.barvapismo1;
    $("#settosyzobr i").html("check_box");
    $("#settdrahyzobr i").html("check_box");
    $("#settbodyzobr i").html("check_box");
    if(settings.osyzobr == false){
        $("#settosyzobr i").html("check_box_outline_blank");
    }
    if(settings.drahyzobr == false){
        $("#settdrahyzobr i").html("check_box_outline_blank");
    }
    if(settings.body == false){
        $("#settbodyzobr i").html("check_box_outline_blank");
    }
}

function souboryadd(seznam, sezid, zacod){

    localStorage.setItem("phbrovnicesoubory", JSON.stringify(souboryvlast));

    while(document.getElementById(sezid).lastChild){
        document.getElementById(sezid).removeChild(document.getElementById(sezid).lastChild);
    }

    for(let i = zacod+1; i <= seznam.length; i++){
        hldiv = document.createElement("div");
        hldiv.className = "objektyitem";
            div = document.createElement("div");
            div.className = "objektyitemsett";
                button = document.createElement("button");
                button.id = sezid+"open"+i;
                    icon = document.createElement("i");
                    icon.className = "material-icons";
                    icon.appendChild(document.createTextNode("open_in_new"));
                button.appendChild(icon);
            div.appendChild(button);
            if(sezid == "souboryvlastseznam"){
                button = document.createElement("button");
                button.id = "souboryvlastseznamremove"+i;
                    icon = document.createElement("i");
                    icon.className = "material-icons";
                    icon.appendChild(document.createTextNode("delete"));
                button.appendChild(icon);
            div.appendChild(button);
            }
                div2 = document.createElement("div")
                div2.appendChild(document.createTextNode(seznam[i-1].nazev));
            div.appendChild(div2);
        hldiv.appendChild(div);
        document.getElementById(sezid).appendChild(hldiv);
    }
}



function pochodnotyget(typ){
    for(let i = 0; i < telesa.length; i++){
        if(typ == "refresh"){
            telesa[i].hodnoty = [];
            telesa[i].hodnoty0 = [];
            telesa[i].pochodnoty = [];
        }
        if(telesa[i].hodnoty.length == 0){
            for(let ii = 0; ii < telesa[i].rovnice.length; ii++){
                if(document.getElementById("pocx"+(ii+1)+"_"+telesa[i].poradi)){
                    telesa[i].pochodnoty.push([
                        document.getElementById("pocx"+(ii+1)+"_"+telesa[i].poradi).value,
                        document.getElementById("pocv"+(ii+1)+"_"+telesa[i].poradi).value
                        ]);  
                    telesa[i].hodnoty.push([
                        vztahvypocet(document.getElementById("pocx"+(ii+1)+"_"+telesa[i].poradi).value),
                        vztahvypocet(document.getElementById("pocv"+(ii+1)+"_"+telesa[i].poradi).value)
                        ]); 
                }
                
            }
        }
    }
}
function podminkyget(){
    for(let i = 1; i <= podminky.length; i++){
        podminky[i-1].hodnoty = [document.getElementById("podminky1hod"+i).value, document.getElementById("podminky2hod"+i).value]
    }
}
function grafyzavget(){
    for(let i = 1; i <= grafyzav.length; i++){
        grafyzav[i-1].margleft = document.getElementById("grafzav"+i).style.marginLeft;
        grafyzav[i-1].margtop = document.getElementById("grafzav"+i).style.marginTop;
        grafyzav[i-1].velx = document.getElementById("grafzavvelx"+i).value;
        grafyzav[i-1].vely = document.getElementById("grafzavvely"+i).value;
        grafyzav[i-1].zvetx = document.getElementById("grafzavzvetx"+i).value;
        grafyzav[i-1].zvety = document.getElementById("grafzavzvety"+i).value;
        grafyzav[i-1].posx = document.getElementById("grafzavposx"+i).value;
        grafyzav[i-1].posy = document.getElementById("grafzavposy"+i).value;
        grafyzav[i-1].krokx = document.getElementById("grafzavkrokx"+i).value;
        grafyzav[i-1].kroky = document.getElementById("grafzavkroky"+i).value;
    }
}

function vztahvypocet(zrychlenivztah, koeficienty, koef, tableau){
    for(let i = 0;; i++){
        try{
            zrychleni = eval(zrychlenivztah);
            return zrychleni;
        }
        catch(err){
            let jdeopravit = false;
            let errorval = err.message.split(" ")[0];
            
            if(koeficienty){casposun = tableau.c[koef]*settings.dt}else{casposun = 0}
            

            if(errorval == "t" || errorval == "_t"){
                zrychlenivztah = zrychlenivztah.replace(errorval, "("+Number(time+casposun)+")");
                jdeopravit = true;
            }
            for(let tel = 0; tel < telesa.length; tel++){
                for(let sou = 0; sou < telesa[tel].hodnoty.length; sou++){
                    
                    if(koeficienty){
                        if(errorval == "x"+(sou+1)+"_"+(telesa[tel].poradi)+"k" || errorval == "_x"+(sou+1)+"_"+(telesa[tel].poradi)+"k"){
                            if(sou == 0){
                                zrychlenivztah = zrychlenivztah.replaceAll(errorval, "(("+telesa[i].x2+")*Math.sin("+telesa[i].x1+"))");
                            }
                            if(sou == 1){
                                zrychlenivztah = zrychlenivztah.replaceAll(errorval, "(-("+telesa[i].x2+")*Math.cos("+telesa[i].x1+"))");
                            }
                            jdeopravit = true;
                        }
                        if(errorval == "x"+Number(sou+1)+"_"+(telesa[tel].poradi) || errorval == "_x"+(sou+1)+"_"+(telesa[tel].poradi)){
                            let posunsou = 0;
                            for(let koefpred = 0; koefpred < koef; koefpred++){
                                koeficienty = koeficientyvypocet(koeficienty, tel, sou, koefpred, tableau);
                                posunsou += koeficienty[tel][sou][koefpred][0]*tableau.a[koef-1][koefpred];
                            }
                            zrychlenivztah = zrychlenivztah.replaceAll(errorval, "("+Number(telesa[tel].hodnoty[sou][0]+posunsou*settings.dt)+")");
                            jdeopravit = true;
                        }
                        if(errorval == "v"+(sou+1)+"_"+(telesa[tel].poradi) || errorval == "_v"+(sou+1)+"_"+(telesa[tel].poradi)){
                            let posunsou = 0;
                            for(let koefpred = 0; koefpred < koef; koefpred++){
                                koeficienty = koeficientyvypocet(koeficienty, tel, sou, koefpred, tableau);
                                posunsou += koeficienty[tel][sou][koefpred][1]*tableau.a[koef-1][koefpred];
                            }
                            zrychlenivztah = zrychlenivztah.replaceAll(errorval, "("+Number(telesa[tel].hodnoty[sou][1]+posunsou*settings.dt)+")");
                            jdeopravit = true;
                        }
                    }
                    else{
                        if(errorval == "x"+(sou+1)+"_"+(telesa[tel].poradi)+"k" || errorval == "_x"+(sou+1)+"_"+(telesa[tel].poradi)+"k"){
                            if(sou == 0){
                                zrychlenivztah = zrychlenivztah.replaceAll(errorval, "("+Number(vztahvypocet(telesa[i].x2)*Math.sin(vztahvypocet(telesa[i].x1)))+")");
                            }
                            if(sou == 1){
                                zrychlenivztah = zrychlenivztah.replaceAll(errorval, "("+Number(-vztahvypocet(telesa[i].x2)*Math.cos(vztahvypocet(telesa[i].x1)))+")");
                            }
                            jdeopravit = true;
                        }
                        if(errorval == "x"+(sou+1)+"_"+(telesa[tel].poradi) || errorval == "_x"+(sou+1)+"_"+(telesa[tel].poradi)){
                            zrychlenivztah = zrychlenivztah.replaceAll(errorval, "("+Number(telesa[tel].hodnoty[sou][0])+")");
                            jdeopravit = true;
                        }
                        if(errorval == "v"+(sou+1)+"_"+(telesa[tel].poradi) || errorval == "_v"+(sou+1)+"_"+(telesa[tel].poradi)){
                            zrychlenivztah = zrychlenivztah.replaceAll(errorval, "("+Number(telesa[tel].hodnoty[sou][1])+")");
                            jdeopravit = true;
                        }
                    }
                    
                    if(errorval == "a"+(sou+1)+"_"+(telesa[tel].poradi) || errorval == "_a"+(sou+1)+"_"+(telesa[tel].poradi)){
                        zrychlenivztah = zrychlenivztah.replaceAll(errorval, "("+vztahvypocet(telesa[tel].rovnice[sou])+")");
                        jdeopravit = true;
                    }
                }
            }
            for(let kon = 0; kon < konstanty.length; kon++){
                if(errorval == konstanty[kon].znacka || errorval == "_"+konstanty[kon].znacka){
                    zrychlenivztah = zrychlenivztah.replace(errorval, "("+konstanty[kon].hodnota+")");
                    jdeopravit = true;
                }
            }

            if(jdeopravit == false){
                break;
            }
        }
    }
}

function koeficientyvypocet(koeficienty, tel, sou, maxkoef, tableau){
    for(let koef = koeficienty[tel][sou].length; koef <= maxkoef; koef++){
        koeficienty[tel][sou].push(koefvypocet(koeficienty, tel, sou, koef, tableau));
    }
    return JSON.parse(JSON.stringify(koeficienty));

    function koefvypocet(koeficienty, tel, sou, koef, tableau){
        if(koef == 0){
            koefx = telesa[tel].hodnoty[sou][1];
            koefv = vztahvypocet(telesa[tel].rovnice[sou]);
        }
        else{
            koefv = vztahvypocet(telesa[tel].rovnice[sou], koeficienty, koef, tableau);
            koefx = 0;
            for(let koefpred = 0; koefpred < koef; koefpred++){
                koefx += koeficienty[tel][sou][koefpred][1]*tableau.a[koef-1][koefpred];
            }
            koefx = telesa[tel].hodnoty[sou][1] + koefx*settings.dt; 

        }
        return JSON.parse(JSON.stringify([koefx, koefv]));
    }
}




function zaokrouh(x, platc, maxlen){
    if(x == null){return null}{
        if(String(Number(x.toPrecision(platc))).length > maxlen){
            return (Math.round(Number(x.toPrecision(platc))*Math.pow(10, settings.maxdes))/Math.pow(10, settings.maxdes)).toExponential();
        }
        else{
            return Math.round(Number(x.toPrecision(platc))*Math.pow(10, settings.maxdes))/Math.pow(10, settings.maxdes);
        }
    }
    
}

function rainbow(){
    if(settings.hlbarva == "rainbow"){
        let r = 256; 
        let g = 0; 
        let b = 0;
        timerduha = setInterval(function(){
            document.documentElement.style.setProperty('--hlbarva', "rgb("+r+","+g+","+b+")");
            if(r == 256 && g == 0 && b == 0){
               dg = 1; dr = 0; db = 0;
            }
            if(r == 256 && g == 256 && b == 0){
               dr = -1; db = 0; dg = 0;
            }
            if(r == 0 && g == 256 && b == 0){
               db = 1; dr = 0; dg = 0;
            }
            if(r == 0 && g == 256 && b == 256){
               dg = -1; dr = 0; db = 0;
            }
            if(r == 0 && g == 0 && b == 256){
               dr = 1; dg = 0; db = 0;
            }
            if(r == 256 && g == 0 && b == 256){
               db = -1; dr = 0; dg = 0;
            }
            r += dr; g += dg; b += db;
        }, 200)
    }
}