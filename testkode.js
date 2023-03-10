if (!sessionStorage.getItem('pageLoaded')) {
    sessionStorage.setItem('pageLoaded', true);
    location.reload();
}

let names=["TV2","TV2Charlie","TV2Fri","TV2News","TV2Sport","TV2SportX","TV2Zulu","TV3","TV3Max","TV3 +","TV3Puls","TV3Sport","Kanal4","Kanal5","6eren","Canal9","DiscoveryChannel","DK4","NationalGeographic","3Sat","AlJazeera","Animalplanet","ARD","ARTE","BBCBrit","BBCEarth","BBCWorldNews","BlueHustler","Boomerang","CartoonNetwork","CBSReality","CNN","DisneyChannel","DisneyJunior","Euronews","Eurosport1","Eurosport2","ID-InvestegationDiscovery","Mezzo","MTV","MTV80s","MTV90s","MTVHits","NationalGeographicWild","NDR","Nick jr.","Nickelodeon","NRK1","ZDF","SVT1","Folketinget","NRK2","TV4 Sverige","SVT2","TV2Norge","ProSieben","Rai 1","See","TLC","VH1","V sport golf","Viasat Explore","Viasat History","Viasat Nature","DiscoveryScience","ESC_ESC1","Extreme Sport","HRT-TV1","MTVClub","MTVLive","Polonia","Sport Live"];
names.sort();
let prettynames=["TV2","TV2 Charlie","TV2 Fri","TV2 News","TV2 Sport","TV2 SportX","TV2 Zulu","TV3","TV3 MAX","TV3 +","TV3 Puls","TV3 Sport","Kanal 4","Kanal 5","6'eren","Canal 9","Discovery Channel","DK4","National Geographic","3Sat","Al Jazeera","Animal Planet","ARD","ARTE","BBC Brit","BBC Earth","BBC World News","Blue Hustler","Boomerang","Cartoon Network","CBS Reality","CNN","Disney Channel","Disney Junior","Euronews","Eurosport 1","Eurosport 2","ID-Investegation Discovery","Mezzo","MTV","MTV 80s","MTV 90s","MTV Hits","National Geographic Wild","NDR","Nick Jr.","Nickelodeon","NRK1","ZDF","SVT1","Folketinget","NRK2","TV4 Sverige","SVT2","TV2 Norge","ProSieben","Rai 1","See","TLC","VH1","V sport golf","Viasat Explore","Viasat History","Viasat Nature","Discovery Science","ESC/ESC1","Extreme Sport","HRT-TV1","MTV Club","MTV Live","Polonia","Sport Live"];
prettynames.sort();

let beskrivelser=[{"TV2":"Danmarks mest sete tv-kanal, som samler danskerne om alt det vi deler gennem et mangfoldigt programudbud, der omfatter nyheder, aktualitet, dansk fiktion, underholdning, sport, dokumentar og livsstil, spillefilm, morgen-tv og meget mere.",
"TV2Charlie":"Kanalen henvender sig til voksne og nysgerrige danskere med lyst til at blive underholdtog  prioriterer den gode danske underholdning og musik, dansk fiktion, talkshows, danske filmklassikere, events og de bedste europ??iske serier, herunder b??de dramaer og prisbel??nnede krimiserier.",
"TV2Fri":"En unik fritids- og friluftskanal for dig, der vil inspireres. Oplev programmer om hus, have, madlavning og g??r-det-selv arbejde.",
"TV2News":"Danmarks st??rste nyhedskanal for dig, der vil have breaking news og f??lge med i begivenhederne, mens de sker.",
"TV2Sport":"Her f??r du mere end sublime sportsoplevelser. Du f??r ogs?? knivskarpe analyser og journalistiske sportsmagasiner.",
"TV2SportX":"TV 2 SPORT X har fokus p?? store internationale stjerner indenfor verdens bedste fodboldliga, tennis, basketball, X-Games, atletik og meget mere.",
"TV2Zulu":"TV 2 ZULU er TV 2s kanal for ???unge i alle aldre???, der holder af originalt dansk indhold. ZULU har s??rligt fokus p?? reportager fra de unges virkelighed, nyskabende fiktion, comedy samt events p?? og uden for tv-sk??rmen og de digitale medier.",
"TV3":"TV3 er din kanal for sport, reality og underholdning. Det er her du finder programmer som 'Paradise Hotel', 'Divaer i Junglen' og meget mere.",
"TV3Max":"TV3 Max har en st??rk sammens??tning af verdensklasse sport og comedy. Her kan du se Premier League, Champions League, Superligaen og The Simpsons.",
"TV3 +":"TV3+ viser sport, sp??nding og spas. F??lg kampene i Champions League, Premier League og Superligaen, se masser af Formel 1 og bliv underholdt af en lang r??kke komedieserier.",
"TV3Puls":"TV3 Puls er kanalen, der fornemmer tendenserne inden for blandt andet mad, mode, indretning og design, og formidler dem gennem fascinerende og inspirerende livsstilsprogrammer i et univers, der aldrig f??r for travlt til n??rv??r og indlevelse.",
"TV3Sport":"TV3 Sport er den ultimative kanal for enhver sportselsker. Her kan du bl.a. f??lge med i Champions League, Superligaen, Formel 1, NFL, NHL og en r??kke golfturneringer.",
"Kanal4":"Kanal 4 er for dig, der elsker reality og big characters med en humoristisk, uh??jtidelig, modig og ??rlig tilgang til verden. Fascination, dr??mme og ekstravagance er i h??js??det, n??r du f??r indblik i nogle af Danmarks st??rste personligheders liv, n??r de lukker op og giver et eksklusivt indblik i det liv, mange af os kun t??r dr??mme om.",
"Kanal5":"Kanal 5 samler familien og giver dig et underholdende pusterum, n??r vi bl??nder op for tempofyldte underholdningsprogrammer, f??ngslende krimiserier og st??rke faktaprogrammer fra virkelighedens verden og nye, sp??ndende fiktionsserier. Med andre ord - underholdning for hele familien.",
"6eren": "6???eren er for dig, der elsker b??de sport, actionfilm og serier. Der er fart over feltet, b??de n??r 3F Superligaens tophold spiller og speedway-stjernerne gasser op. Oplev verdensklasse fodbold fra FA Cup og Carabao Cup sammen med et eksperthold best??ende af blandt andet Brian Laudrup og Thomas Gravesen.",
"Canal9":"Canal 9 giver dig sp??ndende fodbold og programmer, der unders??ger verden omkring os, uanset om det er mad eller leveforhold. Du f??r herrefight fra 3F Superligaen og FA Cuppen, og programmer om f.eks. h??rdf??re typer fra Alaska.",
"DiscoveryChannel":"En kanal for den kvalitetsbevidste seer, der er til prisvindende dokumentarer, fascinerende serier og intelligent underholdning.",
"DK4":"P?? dk4 er der nemlig masser af lyttevenlig musik, god gedigen underholdning i musikkens tegn, sidste nyt om den danske teaterscene, aktuelle samtaleprogrammer om litteratur og kunst og indsigtsfulde programmer om alt det, vi elsker at lave i fritiden ??? lige fra camping og sejlsportsliv til skil??b, lystfiskeri og jagt. dk4 er dansk tv d??gnet rundt.",
"NationalGeographic":"Klog, faktuel underholdning til dig, der vil vide mere om teknologi, naturhistorie, ark??ologi og naturens mysterier.",
"3Sat":"Videnskab, litteratur, dokumentar og musik. Teater, kunst og litteratur. 3SAT har forventninger til seernes intelligens ??? og du f??r sm??k for skillingen.",
"AlJazeera":"Aljazeera International sender arabiske nyheder p?? engelsk til hele verden.",
"Animalplanet":"En dyrekanal for dig, der vil helt t??t p?? verdens dyreliv og menneskets liv med dyr.",
"ARD":"Hver dag finder du nyproducerede film, serier og dokumentarer p?? Tysklands st??rste tv-kanal, og mange af dem sendes med danske undertekster, n??r du ser med fra Danmark.",
"ARTE":"Kultur-kanal med film, temaaftener, dokumentarfilm, debat og reportager.",
"BBCBrit":"BBC Brit sender originale dramaserier, engelsk comedy og underholdningsprogrammer.",
"BBCEarth":"BBC Earth er en tv-kanal, hvor prisvindende faktuelle og ikke-faktuelle programmer bliver pr??senteret af eksperter i verdensklasse.",
"BBCWorldNews":"BBC World er en britisk 24-timers nyhedskanal. Nyhedsudsendelserne p?? kanalen bliver kombineret med dybdeborende reportager, interviews, magasinprogrammer samt ??konomiprogrammer.",
"BlueHustler":"Blue Hustler er en amerikansk erotisk kanal.",
"Boomerang":"Et sjovt og sikkert sted for de mindste ??? men ogs?? et stort hit blandt for??ldre med sine klassiske serier, der v??kker minder.",
"CartoonNetwork":"Cartoon Network er en kanal for b??rn i alle aldre og er fyldt med sjov, eventyr og underholdning. Her f??r du en blanding af moderne klassikere og helt nye tegnefilm. Alt tale er naturligvis p?? dansk.",
"CBSReality":"Kanalen der bringer dig t??t p?? hverdagsdramaer. Her f??r du sp??nding og action fra virkelighedens verden.",
"CNN":"Er du nyhedsjunkie, f??r du din trang stillet p?? CNN ??? en amerikansk nyhedskanal, der giver dig seneste nyt d??gnet rundt.",
"DisneyChannel":"En familiekanal der giver adgang til alt det bedste fra Disneys magiske verden ??? med dansk tale eller danske undertekster.",
"DisneyJunior":"En kanal i ??jenh??jde med de to-seks ??rige, der blander kendte figurer, musik og magiske fort??llinger med l??ring.",
"Euronews":"Euronews er nyheder fra hele verden, pr??senteret i et pan-europ??isk perspektiv og p?? flere europ??iske sprog.",
"Eurosport1":"Uanset om du er til cykling, tennis, motorsport, de st??rste World Cups fra vinterlandskabet, snooker eller atletik ??? er Eurosport 1 kanalen for dig.",
"Eurosport2":"Kanalen for dig, der ikke kan f?? nok af sport. Eurosport 2 byder p?? vintersport, cykling, tennis og fede fodboldoplevelser.",
"ID-InvestegationDiscovery":"ID - Investigation Discovery er Danmarks eneste kanal kun med krimi. Her kan du se st??rke dokumentarer med rekonstruktioner af virkelighedens mest r?? og bestialske forbrydelser. Du kan se drabssager, familiefejder og efterforskning af nogle af de st??rste og vildeste sager, ligesom du kan m??de ofre og p??r??rende i st??rke programmer.",
"Mezzo":"Mezzo er en fransk tv-kanal, der er afsat til klassisk musik, jazz og verdensmusik.",
"MTV":"MTV - verdens st??rste musik- og ungdomskanal. En global tv-kanal med lokalt fokus, som giver den bedste blanding af musik og nyt??nkende underholdning.",
"MTV80s":"Musikkanalen for de modne seere. Her f??r du Golden Oldie's p?? stribe b??de som musikvideoer og live-optr??den fra de bedste koncerter verden over.",
"MTV90s":"MTV 90s er dedikeret til rock og alternativ musik.",
"MTVHits":"MTV Hits er et st??rkt supplement til MTV. MTV Hits sender alt det bedste og nyeste fra hitlisterne.",
"NationalGeographicWild":"Kom helt t??t p?? naturen og oplev de mest n??rg??ende optagelser med vilde dyr ??? det hele i en knivskarp billedkvalitet.",
"NDR": "NDR er en tysk kanal med fokus p?? Nordtyskland",
"Nick jr.":"Nick Jr. er en tv-kanal for de mindste b??rn mellem to og seks ??r. Kanalen viser sjove og l??rerige tegnefilm, der er tilpasset de yngste og opfordrer til leg og l??ring.",
"Nickelodeon":"Nickelodeon viser et bredt udbud af tegneserier og serier for b??rn.",
"NRK1":"NRK1 er en norsk kanal, der rummer lige dele provokerende serier og afm??lte dokumentarprogrammer. Mange af dem sendes med danske undertekster, n??r du ser med fra Danmark. Og se med b??r du g??re, hvis du vil v??re f??rst til helt nye formater.",
"ZDF":"Tysklands public service-kanal ZDF sender hver dag film og serier, k??rlighedsdramaer og dokumentariske analyser af krigen og historien ??? og en stor del af dem med danske undertekster. Nogle af dem har du sikkert h??rt om, men dykker du ned i ZDF's program, er der altid nyt og sp??ndende at se.",
"SVT1":"P?? SVT1 finder du tv med st??rke fort??llinger om b??de Sverige, Norden og om verden, og mange af udsendelserne sendes med danske undertekster, n??r du ser med fra Danmark. SVT1 er for dig, der vil have mere af det, du kender og elsker, men som ogs?? gerne vil udfordres.",
"Folketinget":"Folketinget har sin egen tv-kanal, som viser live-tv fra m??derne i Folketinget. Folketingets tv sikrer, at du som borger har let adgang til at f??lge de politiske processer og kan f?? indblik i, hvad der sker i henholdsvis Folketingssalen og de ??bne m??der.",
"NRK2":"Norsk kanal fra NRK",
"TV4 Sverige":"TV4 Sverige er den st??rste kommercielle tv-kanal i Sverige",
"SVT2":"SVT2 er Sveriges kanal dedikeret til kultur, viden og nicheprogrammer, og p?? kanalen finder du derfor et v??ld af udsendelser, som er b??de underholdende og en lille smule mere end det. SVT2 sender et udvalg af deres programmer med danske undertekster, n??r du ser med fra Danmark.",
"TV2Norge": "TV2 Norge er Norges st??rste kommercielle tv-kanal",
"ProSieben":"Pro 7 satser p?? underholdning med internationale topserier, film, shows, hurtige nyheder og diverse magasiner.",
"Rai 1":"Rai Uno sender underholdning, nyheder, sport og film 24 timer i d??gnet.",
"See":"See byder p?? originalt dansk indhold, popul??re serier og masser af sport.",
"TLC":"P?? TLC er der b??de tid til refleksion, gr??d og grin. Her finder du inspirerende og autentiske programmer med humor og kant.",
"VH1":"VH1 er en musikkanal, der sender musikvideoer d??gnet rundt. V??r opdateret p?? de seneste hitlister og se med, n??r stjernerne pr??senterer deres helt egen top 10.",
"V sport golf":"V Sport Golf sender masser af live-golf ??ret rundt med danske kommentatorer.",
"Viasat Explore":"Viasat Explore udfordrer din eventyrlyst. Kanalen er garant for eventyr og ekstreme oplevelser. Viasat Explore sender en god blanding af dybdeborende dokumentarserier og udfordrende ekspeditioner.",
"Viasat History":"Hvis du er vild med historiens vingesus og dokumentarer om fordums tid, kan du booste din viden med Viasat History.",
"Viasat Nature":"Viasat Nature viser sp??ndende og l??rerige dokumentarer samt natur- og dyreudsendelser. Bliv klog p?? dyrenes adf??rd og naturens mange hemmeligheder med Viasat Nature.",
"DiscoveryScience":"Kanalen for den nysgerrige seer, der s??ger svar p?? universelle sp??rgsm??l i prisvindende dokumentarer og serier om videnskab og teknologi.",
"ESC/ESC1":"Generel underholdningskanal fra Egypten, der indeholder et v??ld af tv-underholdning.",
"Extreme Sport":"Her er tempoet h??jt. Kanalen der giver dig det mest nervepirrende og inspirerende inden for livsstil, eventyr og ekstremsport.",
"HRT-TV1":"En kroatisk kanal der sender underholdning, dokumentarer, undervisningsprogrammer, komedieserier, filmer og talkshow.",
"MTVClub":"MTV Club er en musikkanal, der helt og holdent er tilegnet dansemusik. Du f??r drum???n???bass, trance, garage, house og fest i en fantastisk dansepakke.",
"MTVLive":"MTV Live er en musikbaseret underholdningskanal, som tager udgangspunkt i legendariske, klassiske og splinternye MTV og Vh1 programmer.",
"Polonia":"F??lg med i nyheder og tv-programmer direkte fra Polen.",
"Sport Live":"SPORT LIVE er en dansk sportskanal, som sender live mindst 10 timer om dagen. Kanalen sender hestev??ddel??b fra hele verden og har et dagligt studieprogram med eksperter. Derudover sender SPORT LIVE fra en r??kke danske sportsbegivenheder."
}]

beskrivelser.sort();

//Kanaler
let firkanter=document.querySelector("#firkanter");
for (let i=0;i<names.length;i++){
    let kanalogtekst=document.createElement("div");
    kanalogtekst.id="tekstboks";
    let tekst=document.createElement("p");
    let kanalfirkant=document.createElement("input");
    kanalfirkant.setAttribute("type","checkbox");
    kanalfirkant.classList.add("button");
    kanalfirkant.classList.add("firkant");
    kanalfirkant.setAttribute("name",names[i]);
    //kanalfirkant.classList.add("billede");
    kanalfirkant.style.background="url('./Billeder/"+names[i]+".png') rgba(245, 245, 245)";
    kanalfirkant.style.backgroundSize="contain";
    kanalfirkant.style.backgroundRepeat="no-repeat";
    kanalfirkant.style.backgroundPosition="center";
    //Stofa pointknap
    let pointtal=document.createElement("span");
    pointtal.classList.add("circle");
    pointtal.classList.add("hidden");
    let stofaaktiv=false; 
    let kanaler=[{TV2:0,TV2Charlie:0,TV2Fri:1,TV2News:1,TV2Sport:2,TV2SportX:2,TV2Zulu:1,TV3:0,TV3Max:2,"TV3 +":3,TV3Puls:0,TV3Sport:3,Kanal4:0,Kanal5:0,'6eren':1,Canal9:1,DiscoveryChannel:1,DK4:0,NationalGeographic:1,'3Sat':1,AlJazeera:1,Animalplanet:1,ARD:"L??sning ikke mulig",ARTE:1,BBCBrit:1,BBCEarth:1,BBCWorldNews:1,BlueHustler:1,Boomerang:1,CartoonNetwork:1,CBSReality:1,CNN:1,DisneyChannel:1,DisneyJunior:1,Euronews:1,Eurosport1:1,Eurosport2:2,"ID-InvestegationDiscovery":1,Mezzo:1,MTV:1,MTV80s:1,MTV90s:1,MTVHits:1,NationalGeographicWild:1,NDR:0,"Nick jr.":1,Nickelodeon:1,NRK1:0,ZDF:0,SVT1:0,Folketinget:0,NRK2:0,"TV4 Sverige":0,SVT2:0,"TV2Norge":0,ProSieben:1,"Rai 1":1,See:2,TLC:1,VH1:1,"V sport golf":1,"Viasat Explore":1,"Viasat History":1,"Viasat Nature":1,DiscoveryScience:1,"ESC_ESC1":1,"Extreme Sport":1,"HRT-TV1":1,MTVClub:1,MTVLive:1,Polonia:1,"Sport Live":1}];
    kanaler.sort();
    let pointknap=document.querySelector("#pointknap");
    pointknap.addEventListener("click",function(){
        if(stofaaktiv){
            stofaaktiv=false;
        }
        else{
            stofaaktiv=true;
        }
        if(norlysaktiv){
            norlysaktiv=false;
        }
        else{
            pointtal.classList.toggle("hidden");
        }
        pointknap.classList.toggle("is-primary");
        if(kanaler[0][names[i]]!=="L??sning ikke mulig"){
            pointtal.innerHTML=kanaler[0][names[i]];
        }
        else{
            pointtal.innerHTML='\u00A0'
        }
    })

    //Norlys prisknap
    let kanalpriser=[{TV2:49,TV2Charlie:39,TV2Fri:39,TV2News:39,TV2Sport:39,TV2SportX:39,TV2Zulu:39,TV3:49,TV3Max:39,"TV3 +":99,TV3Puls:39,TV3Sport:49,Kanal4:39,Kanal5:49,'6eren':39,Canal9:39,DiscoveryChannel:29,DK4:29,NationalGeographic:29,'3Sat':"L??sning ikke mulig",AlJazeera:"L??sning ikke mulig",Animalplanet:29,ARD:0,ARTE:"L??sning ikke mulig",BBCBrit:"L??sning ikke mulig",BBCEarth:"L??sning ikke mulig",BBCWorldNews:"L??sning ikke mulig",BlueHustler:"L??sning ikke mulig",Boomerang:"L??sning ikke mulig",CartoonNetwork:"L??sning ikke mulig",CBSReality:"L??sning ikke mulig",CNN:"L??sning ikke mulig",DisneyChannel:29,DisneyJunior:29,Euronews:"L??sning ikke mulig",Eurosport1:29,Eurosport2:39,"ID-InvestegationDiscovery":29,Mezzo:"L??sning ikke mulig",MTV:"L??sning ikke mulig",MTV80s:"L??sning ikke mulig",MTV90s:"L??sning ikke mulig",MTVHits:"L??sning ikke mulig",NationalGeographicWild:"L??sning ikke mulig",NDR:0,"Nick jr.":"L??sning ikke mulig",Nickelodeon:29,NRK1:0,ZDF:0,SVT1:0,Folketinget:"L??sning ikke mulig",NRK2:"L??sning ikke mulig","TV4 Sverige":0,SVT2:0,"TV2Norge":0,ProSieben:"L??sning ikke mulig","Rai 1":"L??sning ikke mulig",See:39,TLC:29,VH1:29,"V sport golf":"L??sning ikke mulig","Viasat Explore":"L??sning ikke mulig","Viasat History":"L??sning ikke mulig","Viasat Nature":"L??sning ikke mulig",DiscoveryScience:"L??sning ikke mulig","ESC_ESC1":"L??sning ikke mulig","Extreme Sport":"L??sning ikke mulig","HRT-TV1":"L??sning ikke mulig",MTVClub:"L??sning ikke mulig",MTVLive:"L??sning ikke mulig",Polonia:"L??sning ikke mulig","Sport Live":"L??sning ikke mulig"}];
    kanalpriser.sort();
    let norlysaktiv=false;
    let prisknap=document.querySelector("#prisknap");
    prisknap.addEventListener("click",function(){
        if(norlysaktiv){
            norlysaktiv=false;
        }
        else{
            norlysaktiv=true;
        }
        if(stofaaktiv){
            stofaaktiv=false;
        }
        else{
            pointtal.classList.toggle("hidden");
        }
        prisknap.classList.toggle("is-primary");
        if(kanalpriser[0][names[i]]!=="L??sning ikke mulig"){
            pointtal.innerHTML=kanalpriser[0][names[i]];
        }
        else{
            pointtal.innerHTML='\u00A0'
        }
    })

    tekst.innerHTML=prettynames[i];
    tekst.classList.add("navne");
    kanalogtekst.appendChild(kanalfirkant);
    kanalogtekst.appendChild(tekst);
    kanalogtekst.appendChild(pointtal);
    firkanter.appendChild(kanalogtekst);
}

//Norlys knap
Norlysknap=document.querySelector("#Norlys");
let clickedN=false;
NorlysKanaler=["ZDF","SVT1","NRK1","TV4 Sverige","SVT2","ARD","TV2Norge","NDR"];
Norlysknap.addEventListener("click",function(){
    let kan=document.getElementsByClassName("firkant");
    if(clickedN==true){
        clickedN=false;
        for (let k of kan){
            if (NorlysKanaler.includes(k.name)){
                k.checked=false;
            }
        }}
    else{
        clickedN=true;
        for (let k of kan){
            if (NorlysKanaler.includes(k.name)){
                k.checked=true;
            }

        }
}
})

//Stofa knap
Stofaknap=document.querySelector("#Stofa");
let clickedS=false;
StofaKanaler=["TV2","TV2Charlie","TV3","TV3Puls","Kanal4","Kanal5","DK4","Folketinget","NRK1","NRK2","TV2Norge","SVT1","SVT2","TV4 Sverige","ZDF","NDR","Sport Live"];
Stofaknap.addEventListener("click",function(){
    let kan=document.getElementsByClassName("firkant");
    if(clickedS==true){
        clickedS=false;
        for (let k of kan){
            if (StofaKanaler.includes(k.name)){
                k.checked=false;
            }
        }}
    else{
        clickedS=true;
        for (let k of kan){
            if (StofaKanaler.includes(k.name)){
                k.checked=true;
            }
        }
}
})

//TV2 knap
TV2knap=document.querySelector("#TV2Knap");
let clicked=false;
TV2knap.addEventListener("click",function(){
    let kan=document.getElementsByClassName("firkant");
    if(clicked==true){
        clicked=false;
        for (let k of kan){
            if (k.name.includes("TV2")){
                if(k.name.includes("TV2Play")||k.name.includes("TV2Norge")){
                }
                else{
                    k.checked=false;
            }
            }
        }}
    else{
        clicked=true;
        for (let k of kan){
            if (k.name.includes("TV2")){
                if(k.name.includes("TV2Play")||k.name.includes("TV2Norge")){
                }
                else{
                    k.checked=true;
                }
                
            }

        }
}
})

//TV3 knap
TV3knap=document.querySelector("#TV3Knap");
let clicked3=false;
TV3knap.addEventListener("click",function(){
    let kan=document.getElementsByClassName("firkant");
    if(clicked3==true){
        clicked3=false;
        for (let k of kan){
            if (k.name.includes("TV3")){
                k.checked=false;
            }
        }}
    else{
        clicked3=true;
        for (let k of kan){
            if (k.name.includes("TV3")){
                k.checked=true;
            }

        }
}
})


//Discovery knap
DisKnap=document.querySelector("#DiscoveryKnap");
let clickeddis=false;
let diskanaler=["Kanal4","Kanal5","6eren","Canal9","TLC","DiscoveryChannel","Animalplanet","Eurosport1","Eurosport2","DiscoveryScience","ID-InvestegationDiscovery"]
DisKnap.addEventListener("click",function(){
    let kan=document.getElementsByClassName("firkant");
    if(clickeddis==true){
        clickeddis=false;
        for (let k of kan){
            if (diskanaler.includes(k.name)){
                k.checked=false;
            }
        }}
    else{
        clickeddis=true;
        for (let k of kan){
            if (diskanaler.includes(k.name)){
                k.checked=true;
            }

        }
}
})


//Ryd knap
let ryd = document.querySelector("#ryd");
ryd.addEventListener("click",function(){
    let kan=document.getElementsByClassName("firkant");
    let kanstream=document.getElementsByClassName("firkantst");
        for (let k of kan){
                k.checked=false;
            }
        for (let kst of kanstream){
            kst.checked=false;
        }
})

//Tilf??j streaming
let stream=["TV2PlayBasis","TV2PlayFavoritSport","TV2PlayFavoritSport (Uden reklamer)","Disney+","HBOMax","NetflixStandard","NetflixPremium","NordiskFilm+","CMore","SkyShowtime","Discovery+underholdning","Discovery+Sport","Viaplay (Film og Serier)","Viaplay Total"];
stream.sort();
let streampretty=["TV2 PLAY Basis","TV2 PLAY Favorit+Sport","TV2 PLAY Favorit+Sport (u. reklamer)","Disney+","HBO Max","Netflix Standard","Netflix Premium","Nordisk Film+","C More","SkyShowtime","Discovery+ Underholdning","Discovery+ Sport","Viaplay (Film og Serier)","Viaplay Total"];
streampretty.sort();

let firkanterstream=document.querySelector("#firkantstream");
for (let i=0;i<stream.length;i++){
    let kanalogtekst=document.createElement("div");
    kanalogtekst.id="boks";
    let tekst=document.createElement("p");
    let kanalfirkant=document.createElement("input");
    kanalfirkant.setAttribute("type","checkbox");
    kanalfirkant.classList.add("button");
    kanalfirkant.classList.add("firkantst");
    kanalfirkant.setAttribute("name",stream[i]);
    //kanalfirkant.classList.add("billede");
    kanalfirkant.style.background="url('./Billeder/"+stream[i]+".png') rgba(245, 245, 245)";
    kanalfirkant.style.backgroundSize="contain";
    kanalfirkant.style.backgroundRepeat="no-repeat";
    kanalfirkant.style.backgroundPosition="center";

    //Stofa pointknap
    let pointtal=document.createElement("span");
    pointtal.classList.add("circlestream");
    pointtal.classList.add("hidden");
    let stofaaktiv=false; 
    let streamnavn=[{TV2PlayBasis:2,TV2PlayFavoritSport:8,"TV2PlayFavoritSport (Uden reklamer)":"L??sning ikke mulig","Disney+":"L??sning ikke mulig",HBOMax:4,NetflixStandard:"L??sning ikke mulig",NetflixPremium:"L??sning ikke mulig","NordiskFilm+":3,CMore:5,SkyShowtime:"L??sning ikke mulig",NationalGeographicNow:"L??sning ikke mulig","Discovery+underholdning":2,"Discovery+Sport":8,"Viaplay (Film og Serier)":6,"Viaplay Total":"L??sning ikke mulig"}]; 
    streamnavn.sort();
    let pointknap=document.querySelector("#pointknap");
    pointknap.addEventListener("click",function(){
        if(stofaaktiv){
            stofaaktiv=false;
        }
        else{
            stofaaktiv=true;
        }
        if(norlysaktiv){
            norlysaktiv=false;
        }
        else{
            pointtal.classList.toggle("hidden");
        }
        pointknap.classList.toggle("is-primary");
        if(streamnavn[0][stream[i]]!=="L??sning ikke mulig"){
            pointtal.innerHTML=streamnavn[0][stream[i]];
        }
        else{
            pointtal.innerHTML='\u00A0'
        }
    })

    //Norlys prisknap
    let streamNor=[{TV2PlayBasis:"L??sning ikke mulig",TV2PlayFavoritSport:"L??sning ikke mulig","TV2PlayFavoritSport (Uden reklamer)":"L??sning ikke mulig","Disney+":"L??sning ikke mulig",HBOMax:"L??sning ikke mulig",NetflixStandard:"L??sning ikke mulig",NetflixPremium:"L??sning ikke mulig","NordiskFilm+":"L??sning ikke mulig",CMore:"L??sning ikke mulig",SkyShowtime:"L??sning ikke mulig",NationalGeographicNow:"L??sning ikke mulig","Discovery+underholdning":"L??sning ikke mulig","Discovery+Sport":"L??sning ikke mulig","Viaplay (Film og Serier)":"L??sning ikke mulig","Viaplay Total":"L??sning ikke mulig"}];
    streamNor.sort();
    let norlysaktiv=false;
    let prisknap=document.querySelector("#prisknap");
    prisknap.addEventListener("click",function(){
        if(norlysaktiv){
            norlysaktiv=false;
        }
        else{
            norlysaktiv=true;
        }
        if(stofaaktiv){
            stofaaktiv=false;
        }
        else{
            pointtal.classList.toggle("hidden");
        }
        prisknap.classList.toggle("is-primary");
        if(streamNor[0][stream[i]]!=="L??sning ikke mulig"){
            pointtal.innerHTML=streamNor[0][stream[i]];
        }
        else{
            pointtal.innerHTML='\u00A0'
        }
    })

    
    tekst.innerHTML=streampretty[i];
    tekst.classList.add("navnestream");

    kanalogtekst.appendChild(kanalfirkant);
    kanalogtekst.appendChild(tekst);
    kanalogtekst.appendChild(pointtal);
    firkanterstream.appendChild(kanalogtekst);
}

//UDREGNER PRISER
let streampris=[{"TV2PlayBasis":49,"TV2PlayFavoritSport":189,"TV2PlayFavoritSport (Uden reklamer)":219,"Disney+":79,"HBOMax":79,"NetflixStandard":114,"NetflixPremium":149,"NordiskFilm+":49,"CMore":99,"SkyShowtime":69,"Discovery+underholdning":79,"Discovery+Sport":129,"Viaplay (Film og Serier)":129,"Viaplay Total":449}];
streampris.sort();

//Norlys V??lg Frit
let NVFfunc=function(){
    let ikkem=[];
    let streamlist=[];
    let kanaler=[{TV2:49,TV2Charlie:39,TV2Fri:39,TV2News:39,TV2Sport:39,TV2SportX:39,TV2Zulu:39,TV3:49,TV3Max:39,"TV3 +":99,TV3Puls:39,TV3Sport:49,Kanal4:39,Kanal5:49,'6eren':39,Canal9:39,DiscoveryChannel:29,DK4:29,NationalGeographic:29,'3Sat':"L??sning ikke mulig",AlJazeera:"L??sning ikke mulig",Animalplanet:29,ARD:0,ARTE:"L??sning ikke mulig",BBCBrit:"L??sning ikke mulig",BBCEarth:"L??sning ikke mulig",BBCWorldNews:"L??sning ikke mulig",BlueHustler:"L??sning ikke mulig",Boomerang:"L??sning ikke mulig",CartoonNetwork:"L??sning ikke mulig",CBSReality:"L??sning ikke mulig",CNN:"L??sning ikke mulig",DisneyChannel:29,DisneyJunior:29,Euronews:"L??sning ikke mulig",Eurosport1:29,Eurosport2:39,"ID-InvestegationDiscovery":29,Mezzo:"L??sning ikke mulig",MTV:"L??sning ikke mulig",MTV80s:"L??sning ikke mulig",MTV90s:"L??sning ikke mulig",MTVHits:"L??sning ikke mulig",NationalGeographicWild:"L??sning ikke mulig",NDR:0,"Nick jr.":"L??sning ikke mulig",Nickelodeon:29,NRK1:0,ZDF:0,SVT1:0,Folketinget:"L??sning ikke mulig",NRK2:"L??sning ikke mulig","TV4 Sverige":0,SVT2:0,"TV2Norge":0,ProSieben:"L??sning ikke mulig","Rai 1":"L??sning ikke mulig",See:39,TLC:29,VH1:29,"V sport golf":"L??sning ikke mulig","Viasat Explore":"L??sning ikke mulig","Viasat History":"L??sning ikke mulig","Viasat Nature":"L??sning ikke mulig",DiscoveryScience:"L??sning ikke mulig","ESC/ESC1":"L??sning ikke mulig","Extreme Sport":"L??sning ikke mulig","HRT-TV1":"L??sning ikke mulig",MTVClub:"L??sning ikke mulig",MTVLive:"L??sning ikke mulig",Polonia:"L??sning ikke mulig","Sport Live":"L??sning ikke mulig"}];
    let stream=[{TV2PlayBasis:"L??sning ikke mulig",TV2PlayFavoritSport:"L??sning ikke mulig","TV2PlayFavoritSport (Uden reklamer)":"L??sning ikke mulig","Disney+":"L??sning ikke mulig",HBOMax:"L??sning ikke mulig",NetflixStandard:"L??sning ikke mulig",NetflixPremium:"L??sning ikke mulig","NordiskFilm+":"L??sning ikke mulig",CMore:"L??sning ikke mulig",SkyShowtime:"L??sning ikke mulig","Discovery+underholdning":"L??sning ikke mulig","Discovery+Sport":"L??sning ikke mulig","Viaplay (Film og Serier)":"L??sning ikke mulig","Viaplay Total":"L??sning ikke mulig"}];
    kanaler.sort();
    stream.sort();
    let NVF=0;
    let NVFstream=0;
            for (let kanal of kanaler){
                for (let k of Object.keys(kanal)){
                    if(values.includes(k)){
                        if(kanal[k]=="L??sning ikke mulig"||NVF=="L??sning ikke mulig"){
                            NVF="L??sning ikke mulig";
                            if (kanal[k]=="L??sning ikke mulig"){
                                ikkem.push(k);}
                        }
                        else{
                            NVF=NVF+kanal[k];
                        }
                        
                        }
                    }
                }
                for (let st of stream){
                    for (let s of Object.keys(st)){
                        if(values.includes(s)){
                            if(st[s]=="L??sning ikke mulig"){
                                if(streampris[0][s]=="L??sning ikke mulig"){
                                    NVF="L??sning ikke mulig";
                                    ikkem.push(s);
                                }
                                else{
                                    NVFstream+=streampris[0][s];
                                    streamlist.push(s);
                                }
                            }
                            else{
                                NVF=NVF+st[s];
                            }
                            
                            }
                        }
                    }
        
        let basepris=109+NVF;
        if(isNaN(NVF)){
            return "L??sning ikke mulig pga.:"+"<br>("+ikkem.join(", ")+")"
        }
        if(NVFstream==0){
            return NVF+109+" kr.";
        }
        else{
            return NVFstream+basepris+" kr. (inkl. tilk??b af "+streamlist.join(", ")+")"+"<br>"+basepris+" kr. (ekskl. "+streamlist.join(", ")+")";
        }
        }

//Norlys V??lg 8
let NVOfunc=function(){
    let ikkem=[];
    let streamlist=[];
    let kanaler=[{TV2:1,TV2Charlie:1,TV2Fri:1,TV2News:1,TV2Sport:1,TV2SportX:1,TV2Zulu:1,TV3:1,TV3Max:1,"TV3 +":1,TV3Puls:1,TV3Sport:1,Kanal4:1,Kanal5:1,'6eren':1,Canal9:1,DiscoveryChannel:1,DK4:1,NationalGeographic:1,'3Sat':"L??sning ikke mulig",AlJazeera:"L??sning ikke mulig",Animalplanet:1,ARD:0,ARTE:"L??sning ikke mulig",BBCBrit:"L??sning ikke mulig",BBCEarth:"L??sning ikke mulig",BBCWorldNews:"L??sning ikke mulig",BlueHustler:"L??sning ikke mulig",Boomerang:1,CartoonNetwork:1,CBSReality:"L??sning ikke mulig",CNN:1,DisneyChannel:1,DisneyJunior:1,Euronews:"L??sning ikke mulig",Eurosport1:1,Eurosport2:1,"ID-InvestegationDiscovery":1,Mezzo:"L??sning ikke mulig",MTV:"L??sning ikke mulig",MTV80s:"L??sning ikke mulig",MTV90s:"L??sning ikke mulig",MTVHits:"L??sning ikke mulig",NationalGeographicWild:"L??sning ikke mulig",NDR:0,"Nick jr.":"L??sning ikke mulig",Nickelodeon:1,NRK1:0,ZDF:0,SVT1:0,Folketinget:"L??sning ikke mulig",NRK2:"L??sning ikke mulig","TV4 Sverige":0,SVT2:0,"TV2Norge":0,ProSieben:"L??sning ikke mulig","Rai 1":"L??sning ikke mulig",See:1,TLC:1,VH1:1,"V sport golf":"L??sning ikke mulig","Viasat Explore":"L??sning ikke mulig","Viasat History":"L??sning ikke mulig","Viasat Nature":"L??sning ikke mulig",DiscoveryScience:"L??sning ikke mulig","ESC/ESC1":"L??sning ikke mulig","Extreme Sport":"L??sning ikke mulig","HRT-TV1":"L??sning ikke mulig",MTVClub:"L??sning ikke mulig",MTVLive:"L??sning ikke mulig",Polonia:"L??sning ikke mulig","Sport Live":1}];
    let stream=[{TV2PlayBasis:1,TV2PlayFavoritSport:"L??sning ikke mulig","TV2PlayFavoritSport (Uden reklamer)":"L??sning ikke mulig","Disney+":"L??sning ikke mulig",HBOMax:1,NetflixStandard:"L??sning ikke mulig",NetflixPremium:"L??sning ikke mulig","NordiskFilm+":1,CMore:"L??sning ikke mulig",SkyShowtime:"L??sning ikke mulig","Discovery+underholdning":1,"Discovery+Sport":"L??sning ikke mulig","Viaplay (Film og Serier)":1,"Viaplay Total":"L??sning ikke mulig"}];
    kanaler.sort();
    stream.sort();
    let NVO=0;
    let NVOstream=0;
            for (let kanal of kanaler){
                    for (let k of Object.keys(kanal)){
                        if(values.includes(k)){
                            if(kanal[k]=="L??sning ikke mulig"||NVO=="L??sning ikke mulig"){
                                NVO="L??sning ikke mulig";
                                if (kanal[k]=="L??sning ikke mulig"){
                                    ikkem.push(k);}
                            }
                            else{
                                NVO=NVO+kanal[k];
                            }
                        }
                    }
                }
                for (let st of stream){
                    for (let s of Object.keys(st)){
                        if(values.includes(s)){
                            if(st[s]=="L??sning ikke mulig"){
                                if(streampris[0][s]=="L??sning ikke mulig"){
                                    NVO="L??sning ikke mulig";
                                    ikkem.push(s);
                                }
                                else{
                                    NVOstream+=streampris[0][s];
                                    streamlist.push(s);
                                }
                            }
                            else{
                                if(NVO!=="L??sning ikke mulig"){
                                    console.log("Her");
                                    NVO=NVO+st[s];
                                }
                            }
                        }
                    }
                }
        if(NVO=="L??sning ikke mulig"){
            return "L??sning ikke mulig pga.:"+"<br>("+ikkem.join(", ")+")";
        }
        else{
            if(NVO>8){
                return "Mere end 8 valgt"
            }
            if(NVOstream==0){
                return 469+" kr."+" ("+NVO+" ud af 8 kanaler valgt)";
            }
            else{
                return NVOstream+469+" kr. (inkl. tilk??b af "+streamlist.join(", ")+")"+"<br>"+469+" kr. (ekskl. "+streamlist.join(", ")+") ("+NVO+" ud af 8 kanaler valgt)";
                 }
            }
} 

//Norlys V??lg Alt
let NVAfunc=function(){
    let ikkem=[];
    let streamlist=[];
    let kanaler=[{TV2:1,TV2Charlie:1,TV2Fri:1,TV2News:1,TV2Sport:1,TV2SportX:1,TV2Zulu:1,TV3:1,TV3Max:1,"TV3 +":1,TV3Puls:1,TV3Sport:1,Kanal4:1,Kanal5:1,'6eren':1,Canal9:1,DiscoveryChannel:1,DK4:1,NationalGeographic:1,'3Sat':"L??sning ikke mulig",AlJazeera:"L??sning ikke mulig",Animalplanet:1,ARD:0,ARTE:"L??sning ikke mulig",BBCBrit:"L??sning ikke mulig",BBCEarth:"L??sning ikke mulig",BBCWorldNews:"L??sning ikke mulig",BlueHustler:"L??sning ikke mulig",Boomerang:1,CartoonNetwork:1,CBSReality:"L??sning ikke mulig",CNN:1,DisneyChannel:1,DisneyJunior:1,Euronews:"L??sning ikke mulig",Eurosport1:1,Eurosport2:1,"ID-InvestegationDiscovery":1,Mezzo:"L??sning ikke mulig",MTV:"L??sning ikke mulig",MTV80s:"L??sning ikke mulig",MTV90s:"L??sning ikke mulig",MTVHits:"L??sning ikke mulig",NationalGeographicWild:"L??sning ikke mulig",NDR:0,"Nick jr.":"L??sning ikke mulig",Nickelodeon:1,NRK1:0,ZDF:0,SVT1:0,Folketinget:"L??sning ikke mulig",NRK2:"L??sning ikke mulig","TV4 Sverige":0,SVT2:0,"TV2Norge":0,ProSieben:"L??sning ikke mulig","Rai 1":"L??sning ikke mulig",See:1,TLC:1,VH1:1,"V sport golf":"L??sning ikke mulig","Viasat Explore":"L??sning ikke mulig","Viasat History":"L??sning ikke mulig","Viasat Nature":"L??sning ikke mulig",DiscoveryScience:"L??sning ikke mulig","ESC/ESC1":"L??sning ikke mulig","Extreme Sport":"L??sning ikke mulig","HRT-TV1":"L??sning ikke mulig",MTVClub:"L??sning ikke mulig",MTVLive:"L??sning ikke mulig",Polonia:"L??sning ikke mulig","Sport Live":1}];
    let stream=[{TV2PlayBasis:1,TV2PlayFavoritSport:"L??sning ikke mulig","TV2PlayFavoritSport (Uden reklamer)":"L??sning ikke mulig","Disney+":"L??sning ikke mulig",HBOMax:79,NetflixStandard:"L??sning ikke mulig",NetflixPremium:"L??sning ikke mulig","NordiskFilm+":49,CMore:"L??sning ikke mulig",SkyShowtime:"L??sning ikke mulig","Discovery+underholdning":1,"Discovery+Sport":"L??sning ikke mulig","Viaplay (Film og Serier)":1,"Viaplay Total":1}];
    kanaler.sort();
    stream.sort();
    let NVA=0;
    let NVAstream=0;
    let HBO=0;
            for (let kanal of kanaler){
                    for (let k of Object.keys(kanal)){
                        if(values.includes(k)){
                            if(kanal[k]=="L??sning ikke mulig"||NVA=="L??sning ikke mulig"){
                                NVA="L??sning ikke mulig";
                                if (kanal[k]=="L??sning ikke mulig"){
                                    ikkem.push(k);}
                            }
                        }
                    }
                }
                for (let st of stream){
                    for (let s of Object.keys(st)){
                        if(values.includes(s)){
                            if(st[s]=="L??sning ikke mulig"){
                                if(streampris[0][s]=="L??sning ikke mulig"){
                                    NVA="L??sning ikke mulig";
                                    ikkem.push(s);
                                }
                                else{
                                    NVAstream+=streampris[0][s];
                                    streamlist.push(s);
                                }
                            }
                            if(s=="HBOMax"||s=="NordiskFilm+"){
                                HBO=HBO+st[s];
                            }
                        }
                    }
                }
        let basepris=729+HBO;
        if(NVA=="L??sning ikke mulig"){
            return "L??sning ikke mulig pga.: <br>("+ikkem.join(", ")+")";
        }
        if(NVAstream==0){
            return 729+HBO+" kr.";
        }
        else{
            return NVAstream+basepris+" kr. (inkl. tilk??b af "+streamlist.join(", ")+")"+"<br>"+basepris+" kr. (ekskl. "+streamlist.join(", ")+")";
        }
    }

// stofa pakkel??sning: lille=0,mellem=1,stor=2 ellers l??sning ikke mulig
let SPLfunc=function(){
    let ikkem=[];
    let streamlist=[];
    let kanaler=[{TV2:0,TV2Charlie:0,TV2Fri:1,TV2News:1,TV2Sport:2,TV2SportX:2,TV2Zulu:1,TV3:0,TV3Max:2,"TV3 +":1,TV3Puls:0,TV3Sport:2,Kanal4:0,Kanal5:0,'6eren':1,Canal9:2,DiscoveryChannel:1,DK4:0,NationalGeographic:1,'3Sat':"L??sning ikke mulig",AlJazeera:"L??sning ikke mulig",Animalplanet:2,ARD:"L??sning ikke mulig",ARTE:"L??sning ikke mulig",BBCBrit:"L??sning ikke mulig",BBCEarth:"L??sning ikke mulig",BBCWorldNews:"L??sning ikke mulig",BlueHustler:"L??sning ikke mulig",Boomerang:2,CartoonNetwork:1,CBSReality:"L??sning ikke mulig",CNN:2,DisneyChannel:1,DisneyJunior:2,Euronews:"L??sning ikke mulig",Eurosport1:2,Eurosport2:2,"ID-InvestegationDiscovery":2,Mezzo:"L??sning ikke mulig",MTV:2,MTV80s:"L??sning ikke mulig",MTV90s:"L??sning ikke mulig",MTVHits:"L??sning ikke mulig",NationalGeographicWild:2,NDR:0,"Nick jr.":2,Nickelodeon:1,NRK1:0,ZDF:0,SVT1:0,Folketinget:0,NRK2:0,"TV4 Sverige":0,SVT2:0,"TV2Norge":0,ProSieben:"L??sning ikke mulig","Rai 1":"L??sning ikke mulig",See:1,TLC:1,VH1:2,"V sport golf":2,"Viasat Explore":2,"Viasat History":2,"Viasat Nature":2,DiscoveryScience:"L??sning ikke mulig","ESC/ESC1":"L??sning ikke mulig","Extreme Sport":"L??sning ikke mulig","HRT-TV1":"L??sning ikke mulig",MTVClub:"L??sning ikke mulig",MTVLive:"L??sning ikke mulig",Polonia:"L??sning ikke mulig","Sport Live":0}];
    let stream=[{TV2PlayBasis:2,TV2PlayFavoritSport:2,"TV2PlayFavoritSport (Uden reklamer)":"L??sning ikke mulig","Disney+":"L??sning ikke mulig",HBOMax:"L??sning ikke mulig",NetflixStandard:"L??sning ikke mulig",NetflixPremium:"L??sning ikke mulig","NordiskFilm+":2,CMore:"L??sning ikke mulig",SkyShowtime:"L??sning ikke mulig","Discovery+underholdning":2,"Discovery+Sport":"L??sning ikke mulig","Viaplay (Film og Serier)":1,"Viaplay Total":2}];
    kanaler.sort();
    stream.sort();
    let SPL=0;
    let SPLstream=0;
            for (let kanal of kanaler){
                    for (let k of Object.keys(kanal)){
                        if(values.includes(k)){
                            if(kanal[k]=="L??sning ikke mulig"||SPL=="L??sning ikke mulig"){
                                SPL="L??sning ikke mulig";
                                if (kanal[k]=="L??sning ikke mulig"){
                                    ikkem.push(k);}
                            }
                            if(SPL<kanal[k]){
                                SPL=kanal[k];
                            }
                        }
                    }
                }
                for (let st of stream){
                    for (let s of Object.keys(st)){
                        if(values.includes(s)){
                            if(st[s]=="L??sning ikke mulig"){
                                if(streampris[0][s]=="L??sning ikke mulig"){
                                    SPL="L??sning ikke mulig";
                                    ikkem.push(s);
                                }
                                else{
                                    SPLstream+=streampris[0][s];
                                    streamlist.push(s);
                                }
                            }
                            if(SPL<st[s]){
                                SPL=st[s];
                            }
                        }
                    }
                }

        pakkepris=[274,529,779]
        pakke=[" (lille pakke)"," (mellem pakke)", " (stor pakke)"]
        if(SPL=="L??sning ikke mulig"){
            return "L??sning ikke mulig pga.:<br>("+ikkem.join(", ")+")";
        }
        else{
            if(SPLstream==0){
                return pakkepris[SPL]+" kr." +pakke[SPL];
            }
            else{
                return SPLstream+pakkepris[SPL]+" kr. (inkl. tilk??b af "+streamlist.join(", ")+")"+"<br>"+pakkepris[SPL]+" kr. (ekskl. "+streamlist.join(", ")+")";
            }
    }
}

//Stofa V??lg Selv
let SVSfunc=function(){
    let ikkem=[];
    let streamlist=[];
    let kanaler=[{TV2:0,TV2Charlie:0,TV2Fri:1,TV2News:1,TV2Sport:2,TV2SportX:2,TV2Zulu:1,TV3:0,TV3Max:2,"TV3 +":3,TV3Puls:0,TV3Sport:3,Kanal4:0,Kanal5:0,'6eren':1,Canal9:1,DiscoveryChannel:1,DK4:0,NationalGeographic:1,'3Sat':1,AlJazeera:1,Animalplanet:1,ARD:"L??sning ikke mulig",ARTE:1,BBCBrit:1,BBCEarth:1,BBCWorldNews:1,BlueHustler:1,Boomerang:1,CartoonNetwork:1,CBSReality:1,CNN:1,DisneyChannel:1,DisneyJunior:1,Euronews:1,Eurosport1:1,Eurosport2:2,"ID-InvestegationDiscovery":1,Mezzo:1,MTV:1,MTV80s:1,MTV90s:1,MTVHits:1,NationalGeographicWild:1,NDR:0,"Nick jr.":1,Nickelodeon:1,NRK1:0,ZDF:0,SVT1:0,Folketinget:0,NRK2:0,"TV4 Sverige":0,SVT2:0,"TV2Norge":0,ProSieben:1,"Rai 1":1,See:2,TLC:1,VH1:1,"V sport golf":1,"Viasat Explore":1,"Viasat History":1,"Viasat Nature":1,DiscoveryScience:1,"ESC/ESC1":1,"Extreme Sport":1,"HRT-TV1":1,MTVClub:1,MTVLive:1,Polonia:1,"Sport Live":0}];
    let stream=[{TV2PlayBasis:2,TV2PlayFavoritSport:8,"TV2PlayFavoritSport (Uden reklamer)":"L??sning ikke mulig","Disney+":"L??sning ikke mulig",HBOMax:4,NetflixStandard:"L??sning ikke mulig",NetflixPremium:"L??sning ikke mulig","NordiskFilm+":3,CMore:5,SkyShowtime:"L??sning ikke mulig","Discovery+underholdning":2,"Discovery+Sport":8,"Viaplay (Film og Serier)":6,"Viaplay Total":"L??sning ikke mulig"}];
    kanaler.sort();
    stream.sort();
    let SVS=0;
    let SVSstream=0;
    for (let kanal of kanaler){
        for (let k of Object.keys(kanal)){
            if(values.includes(k)){
                if(kanal[k]=="L??sning ikke mulig"||SVS=="L??sning ikke mulig"){
                    SVS="L??sning ikke mulig";
                    if (kanal[k]=="L??sning ikke mulig"){
                        ikkem.push(k);}
                }
                else{
                    SVS=SVS+kanal[k];
                }
                }
                }
            }
        for (let st of stream){
            for (let s of Object.keys(st)){
                if(values.includes(s)){
                    if(st[s]=="L??sning ikke mulig"){
                        if(streampris[0][s]=="L??sning ikke mulig"){
                            SVS="L??sning ikke mulig";
                            ikkem.push(s);
                        }
                        else{
                            SVSstream+=streampris[0][s];
                            streamlist.push(s);
                        }
                    }
                    else{
                        SVS=SVS+st[s];
                    }
                    
                    }
                }
            }
    if(isNaN(SVS)){
        return "L??sning ikke mulig pga.:<br>("+ikkem.join(", ")+")";
    }
    priser=[469,559,629];
    if(SVSstream==0){
        if (SVS<=10){
            return priser[0]+" kr."+" (10 point)"+" ("+SVS+" point brugt)";
        }
        if (SVS<=20){
            return priser[1]+" kr."+" (20 point)"+" ("+SVS+" point brugt)";
        }
        if (SVS<=30){
            return priser[2]+" kr."+" (30 point)"+" ("+SVS+" point brugt)";
        }
        else{
            return "Mere end 30 point valgt: ("+SVS+" point)";
        }
    }
    else{
        if (SVS<=10){
            return priser[0]+SVSstream+" kr."+" (10 point)"+" ("+SVS+" point brugt)"+" (inkl. tilk??b af "+streamlist.join(", ")+")"+"<br>"+priser[0]+" kr. (ekskl. "+streamlist.join(", ")+")";
        }
        if (SVS<=20){
            return priser[1]+SVSstream+" kr."+" (20 point)"+" ("+SVS+" point brugt)"+" (inkl. tilk??b af "+streamlist.join(", ")+")"+"<br>"+priser[1]+" kr. (ekskl. "+streamlist.join(", ")+")";
        }
        if (SVS<=30){
            return priser[2]+SVSstream+" kr."+" (30 point)"+" ("+SVS+" point brugt)"+" (inkl. tilk??b af "+streamlist.join(", ")+")"+"<br>"+priser[2]+" kr. (ekskl. "+streamlist.join(", ")+")";
        }
        else{
            return "Mere end 30 point valgt: ("+SVS+" point)";
        }
    }
}

//Yousee Play 10=299kr.,20=399kr.,30=499kr., 40=599 kr.,+1 point =10kr. 
let YouPfunc=function(){
    ikkem=[];
    let streamlist=[];
    let kanaler=[{TV2:3,TV2Charlie:2,TV2Fri:2,TV2News:2,TV2Sport:3,TV2SportX:3,TV2Zulu:2,TV3:3,TV3Max:3,"TV3 +":4,TV3Puls:2,TV3Sport:3,Kanal4:"L??sning ikke mulig",Kanal5:"L??sning ikke mulig",'6eren':"L??sning ikke mulig",Canal9:"L??sning ikke mulig",DiscoveryChannel:"L??sning ikke mulig",DK4:1,NationalGeographic:1,'3Sat':3,AlJazeera:1,Animalplanet:"L??sning ikke mulig",ARD:0,ARTE:1,BBCBrit:1,BBCEarth:1,BBCWorldNews:1,BlueHustler:2,Boomerang:1,CartoonNetwork:1,CBSReality:1,CNN:1,DisneyChannel:1,DisneyJunior:1,Euronews:1,Eurosport1:"L??sning ikke mulig",Eurosport2:"L??sning ikke mulig","ID-InvestegationDiscovery":"L??sning ikke mulig",Mezzo:1,MTV:1,MTV80s:1,MTV90s:1,MTVHits:1,NationalGeographicWild:1,NDR:0,"Nick jr.":1,Nickelodeon:1,NRK1:0,ZDF:0,SVT1:0,Folketinget:0,NRK2:"L??sning ikke mulig","TV4 Sverige":0,SVT2:0,"TV2Norge":"L??sning ikke mulig",ProSieben:1,"Rai 1":1,See:3,TLC:"L??sning ikke mulig",VH1:1,"V sport golf":1,"Viasat Explore":1,"Viasat History":1,"Viasat Nature":1,DiscoveryScience:"L??sning ikke mulig","ESC/ESC1":"L??sning ikke mulig","Extreme Sport":"L??sning ikke mulig","HRT-TV1":"L??sning ikke mulig",MTVClub:"L??sning ikke mulig",MTVLive:"L??sning ikke mulig",MTVLive:"L??sning ikke mulig",Polonia:"L??sning ikke mulig","Sport Live":1}];
    let stream=[{TV2PlayBasis:19,TV2PlayFavoritSport:19,"TV2PlayFavoritSport (Uden reklamer)":19,"Disney+":7,HBOMax:7,NetflixStandard:11,NetflixPremium:15,"NordiskFilm+":4,CMore:9,SkyShowtime:6,"Discovery+underholdning":"L??sning ikke mulig","Discovery+Sport":"L??sning ikke mulig","Viaplay (Film og Serier)":10,"Viaplay Total":"L??sning ikke mulig"}];
    kanaler.sort();
    stream.sort();
    let YouP=0;
    let YouPstream=0;
        for (let kanal of kanaler){
            for (let k of Object.keys(kanal)){
                if(values.includes(k)){
                    if(kanal[k]=="L??sning ikke mulig"||YouP=="L??sning ikke mulig"){
                        YouP="L??sning ikke mulig";
                        if (kanal[k]=="L??sning ikke mulig"){
                            ikkem.push(k);}
                    }
                    else{
                        YouP=YouP+kanal[k];
                    }
                    
                    }
                }
            }
            for (let st of stream){
                for (let s of Object.keys(st)){
                    if(values.includes(s)){
                        if(st[s]=="L??sning ikke mulig"){
                            if(streampris[0][s]=="L??sning ikke mulig"){
                                YouP="L??sning ikke mulig";
                                ikkem.push(s);
                            }
                            else{
                                YouPstream+=streampris[0][s];
                                streamlist.push(s);
                            }
                        }
                        else{
                            YouP=YouP+st[s];
                        }
                        
                        }
                    }
                }
    if(isNaN(YouP)){
        return "L??sning ikke mulig pga.:<br>("+ikkem.join(", ")+")";
    }
    priser=[299,399,499,599];
    if(YouPstream==0){
        if (YouP<=10){
            return priser[0]+" kr."+" (10 point)"+" ("+YouP+" point brugt)";
        }
        if (YouP<=20){
            return priser[1]+" kr."+" (20 point)"+" ("+YouP+" point brugt)";
        }
        if (YouP<=30){
            return priser[2]+" kr."+" (30 point)"+" ("+YouP+" point brugt)";
        }
        if (YouP<=40){
            return priser[3]+" kr."+" (40 point)"+" ("+YouP+" point brugt)";
        }
        else{
            let p=(YouP-40)*10;
            return priser[3]+p+" kr."+ " (40+ point)"+" ("+YouP+" point brugt)"
        }
    }
    else{
        if (YouP<=10){
            return priser[0]+YouPstream+" kr."+" (10 point)"+" ("+YouP+" point brugt)"+" (inkl. tilk??b af "+streamlist.join(", ")+")"+"<br>"+priser[0]+" kr. (ekskl. "+streamlist.join(", ")+")";
        }
        if (YouP<=20){
            return priser[1]+YouPstream+" kr."+" (10 point)"+" ("+YouP+" point brugt)"+" (inkl. tilk??b af "+streamlist.join(", ")+")"+"<br>"+priser[1]+" kr. (ekskl. "+streamlist.join(", ")+")";
        }
        if (YouP<=30){
            return priser[2]+YouPstream+" kr."+" (10 point)"+" ("+YouP+" point brugt)"+" (inkl. tilk??b af "+streamlist.join(", ")+")"+"<br>"+priser[2]+" kr. (ekskl. "+streamlist.join(", ")+")";
        }
        if (YouP<=40){
            return priser[3]+YouPstream+" kr."+" (10 point)"+" ("+YouP+" point brugt)"+" (inkl. tilk??b af "+streamlist.join(", ")+")"+"<br>"+priser[3]+" kr. (ekskl. "+streamlist.join(", ")+")";
        }
        else{
            let p=(YouP-40)*10;
            let basepris=priser[3]+p;
            return basepris+YouPstream+" kr."+ " (40+ point)"+" ("+YouP+" point brugt)" +" (inkl. tilk??b af "+streamlist.join(", ")+")"+"<br>"+basepris+" kr. (ekskl. "+streamlist.join(", ")+")";
        }
    }
    
}

//Allente Stream TV: Basic=0,Standard=1,Premium=2
let AllStreamFunc=function(){
    let ikkem=[];
    let streamlist=[];
    let kanaler=[{TV2:0,TV2Charlie:0,TV2Fri:0,TV2News:0,TV2Sport:2,TV2SportX:2,TV2Zulu:0,TV3:0,TV3Max:2,"TV3 +":0,TV3Puls:0,TV3Sport:2,Kanal4:0,Kanal5:0,'6eren':0,Canal9:2,DiscoveryChannel:1,DK4:0,NationalGeographic:1,'3Sat':"L??sning ikke mulig",AlJazeera:"L??sning ikke mulig",Animalplanet:1,ARD:"L??sning ikke mulig",ARTE:"L??sning ikke mulig",BBCBrit:1,BBCEarth:1,BBCWorldNews:1,BlueHustler:"L??sning ikke mulig",Boomerang:"L??sning ikke mulig",CartoonNetwork:"L??sning ikke mulig",CBSReality:"L??sning ikke mulig",CNN:"L??sning ikke mulig",DisneyChannel:1,DisneyJunior:1,Euronews:"L??sning ikke mulig",Eurosport1:2,Eurosport2:2,"ID-InvestegationDiscovery":1,Mezzo:"L??sning ikke mulig",MTV:"L??sning ikke mulig",MTV80s:"L??sning ikke mulig",MTV90s:"L??sning ikke mulig",MTVHits:"L??sning ikke mulig",NationalGeographicWild:1,NDR:"L??sning ikke mulig","Nick jr.":1,Nickelodeon:1,NRK1:"L??sning ikke mulig",ZDF:"L??sning ikke mulig",SVT1:"L??sning ikke mulig",Folketinget:"L??sning ikke mulig",NRK2:"L??sning ikke mulig","TV4 Sverige":"L??sning ikke mulig",SVT2:"L??sning ikke mulig","TV2Norge":"L??sning ikke mulig",ProSieben:"L??sning ikke mulig","Rai 1":"L??sning ikke mulig",See:1,TLC:1,VH1:"L??sning ikke mulig","V sport golf":"L??sning ikke mulig","Viasat Explore":1,"Viasat History":1,"Viasat Nature":1,DiscoveryScience:1,"ESC/ESC1":"L??sning ikke mulig","Extreme Sport":"L??sning ikke mulig","HRT-TV1":"L??sning ikke mulig",MTVClub:"L??sning ikke mulig",MTVLive:"L??sning ikke mulig",Polonia:"L??sning ikke mulig","Sport Live":2}];
    let stream=[{TV2PlayBasis:"L??sning ikke mulig",TV2PlayFavoritSport:"L??sning ikke mulig","TV2PlayFavoritSport (Uden reklamer)":"L??sning ikke mulig","Disney+":"L??sning ikke mulig",HBOMax:"L??sning ikke mulig",NetflixStandard:"L??sning ikke mulig",NetflixPremium:"L??sning ikke mulig","NordiskFilm+":"L??sning ikke mulig",CMore:"L??sning ikke mulig",SkyShowtime:"L??sning ikke mulig","Discovery+underholdning":"L??sning ikke mulig","Discovery+Sport":"L??sning ikke mulig","Viaplay (Film og Serier)":0,"Viaplay Total":2}];
    let streamtilvalgnavn=["Viaplay (Film og Serier)","HBOMax","Discovery+underholdning","Discovery+Sport","CMore","SkyShowtime"];
    let streamtilvalg=[{"Viaplay (Film og Serier)":79,HBOMax:69,"Discovery+underholdning":79,"Discovery+Sport":129,CMore:99,SkyShowtime:59}];
    let ekstrastreaming=[]
    kanaler.sort();
    stream.sort();
    let AS=0;
    let ASstream=0;
    let streamekstra=0;
            for (let kanal of kanaler){
                    for (let k of Object.keys(kanal)){
                        if(values.includes(k)){
                            if(kanal[k]=="L??sning ikke mulig"||AS=="L??sning ikke mulig"){
                                AS="L??sning ikke mulig";
                                if (kanal[k]=="L??sning ikke mulig"){
                                    ikkem.push(k);}
                            }
                            if(AS<kanal[k]){
                                AS=kanal[k];
                            }
                        }
                    }
                }
                for (let st of stream){
                    for (let s of Object.keys(st)){
                        if(values.includes(s)){
                            if(st[s]=="L??sning ikke mulig"||AS=="L??sning ikke mulig"){
                                if(streamtilvalgnavn.includes(s)){
                                    streamekstra=streamekstra+streamtilvalg[0][s];
                                    ekstrastreaming.push(s);
                                }
                                else{
                                    if (st[s]=="L??sning ikke mulig"){
                                        if(streampris[0][s]=="L??sning ikke mulig"){
                                            AS="L??sning ikke mulig";
                                            ikkem.push(s);
                                        }
                                        else{
                                            ASstream+=streampris[0][s];
                                            streamlist.push(s);
                                        }
                                    }
                                }
                            }
                            if(AS<st[s]){
                                AS=st[s];
                            }
                        }
                    }
                }
        let ekstratekst=""
        if(!ekstrastreaming.length==0){
            ekstratekst="(inkl. tilvalgspakke: "+ekstrastreaming.join(", ")+")";
        }

        pakkepris=[429,549,659]
        pakke=[" (Basic pakke)"," (Standard pakke)", " (Premium pakke)"]
        if(AS=="L??sning ikke mulig"){
            return "L??sning ikke mulig pga.:<br>("+ikkem.join(", ")+")";
        }
        else{
            if(ASstream==0){
                let prisAll=pakkepris[AS]+streamekstra;
                return prisAll+" kr." +pakke[AS]+ekstratekst;
            }
            else{
                let prisAll=pakkepris[AS]+streamekstra;
                return prisAll+ASstream+" kr."+pakke[AS]+" "+ekstratekst+" (inkl. tilk??b af "+streamlist.join(", ")+")"+"<br>"+prisAll+" kr."+" (ekskl. "+streamlist.join(", ")+")"
            }
    }
}

//Allente Parabol TV
let AllParaFunc=function(){
    let ikkem=[];
    let streamlist=[];
    let kanaler=[{TV2:0,TV2Charlie:0,TV2Fri:0,TV2News:0,TV2Sport:2,TV2SportX:2,TV2Zulu:0,TV3:0,TV3Max:2,"TV3 +":0,TV3Puls:0,TV3Sport:2,Kanal4:0,Kanal5:0,'6eren':0,Canal9:2,DiscoveryChannel:1,DK4:0,NationalGeographic:1,'3Sat':"L??sning ikke mulig",AlJazeera:1,Animalplanet:1,ARD:"L??sning ikke mulig",ARTE:"L??sning ikke mulig",BBCBrit:1,BBCEarth:1,BBCWorldNews:1,BlueHustler:"L??sning ikke mulig",Boomerang:1,CartoonNetwork:1,CBSReality:"L??sning ikke mulig",CNN:1,DisneyChannel:1,DisneyJunior:1,Euronews:"L??sning ikke mulig",Eurosport1:2,Eurosport2:2,"ID-InvestegationDiscovery":1,Mezzo:"L??sning ikke mulig",MTV:1,MTV80s:1,MTV90s:"L??sning ikke mulig",MTVHits:"L??sning ikke mulig",NationalGeographicWild:1,NDR:"L??sning ikke mulig","Nick jr.":1,Nickelodeon:1,NRK1:0,ZDF:"L??sning ikke mulig",SVT1:0,Folketinget:"L??sning ikke mulig",NRK2:"L??sning ikke mulig","TV4 Sverige":0,SVT2:0,"TV2Norge":"L??sning ikke mulig",ProSieben:"L??sning ikke mulig","Rai 1":"L??sning ikke mulig",See:1,TLC:1,VH1:1,"V sport golf":"L??sning ikke mulig","Viasat Explore":1,"Viasat History":1,"Viasat Nature":1,DiscoveryScience:1,"ESC/ESC1":"L??sning ikke mulig","Extreme Sport":"L??sning ikke mulig","HRT-TV1":"L??sning ikke mulig",MTVClub:"L??sning ikke mulig",MTVLive:"L??sning ikke mulig",Polonia:"L??sning ikke mulig","Sport Live":2}];
    let stream=[{TV2PlayBasis:"L??sning ikke mulig",TV2PlayFavoritSport:"L??sning ikke mulig","TV2PlayFavoritSport (Uden reklamer)":"L??sning ikke mulig","Disney+":"L??sning ikke mulig",HBOMax:"L??sning ikke mulig",NetflixStandard:"L??sning ikke mulig",NetflixPremium:"L??sning ikke mulig","NordiskFilm+":"L??sning ikke mulig",CMore:"L??sning ikke mulig",SkyShowtime:1,"Discovery+underholdning":"L??sning ikke mulig","Discovery+Sport":"L??sning ikke mulig","Viaplay (Film og Serier)":0,"Viaplay Total":2}];
    let streamtilvalgnavn=["Viaplay (Film og Serier)","HBOMax","Discovery+underholdning","Discovery+Sport","CMore","SkyShowtime"];
    let streamtilvalg=[{"Viaplay (Film og Serier)":79,HBOMax:69,"Discovery+underholdning":79,"Discovery+Sport":129,CMore:99,SkyShowtime:59}];
    let ekstrastreaming=[];
    kanaler.sort();
    stream.sort();
    let AP=0;
    let APstream=0;
    let streamekstra=0;
            for (let kanal of kanaler){
                    for (let k of Object.keys(kanal)){
                        if(values.includes(k)){
                            if(kanal[k]=="L??sning ikke mulig"||AP=="L??sning ikke mulig"){
                                AP="L??sning ikke mulig";
                                if (kanal[k]=="L??sning ikke mulig"){
                                    ikkem.push(k);}
                            }
                            if(AP<kanal[k]){
                                AP=kanal[k];
                            }
                        }
                    }
                }
                for (let st of stream){
                    for (let s of Object.keys(st)){
                        if(values.includes(s)){
                            if(st[s]=="L??sning ikke mulig"||AP=="L??sning ikke mulig"){
                                if(streamtilvalgnavn.includes(s)){
                                    streamekstra=streamekstra+streamtilvalg[0][s];
                                    ekstrastreaming.push(s);
                                }
                                else{
                                    if (st[s]=="L??sning ikke mulig"){
                                        if(streampris[0][s]=="L??sning ikke mulig"){
                                            AP="L??sning ikke mulig";
                                            ikkem.push(s);
                                        }
                                        else{
                                            APstream+=streampris[0][s];
                                            streamlist.push(s);
                                        }
                                    }
                                }
                            }
                            if(AP<st[s]){
                                AP=st[s];
                            }
                        }
                    }
                }
        let ekstratekst=""
        if(!ekstrastreaming.length==0){
            ekstratekst="(inkl. tilvalgspakke: "+ekstrastreaming.join(", ")+")";
        }

        pakkepris=[469,589,709];
        pakke=[" (Basic pakke)"," (Standard pakke)", " (Premium pakke)"];
        if(AP=="L??sning ikke mulig"){
            return "L??sning ikke mulig pga.:<br>("+ikkem.join(", ")+")";
        }
        else{
            if(APstream==0){
                let prisAll=pakkepris[AP]+streamekstra;
                return prisAll+" kr." +pakke[AP]+ekstratekst;
            }
            else{
                let prisAll=pakkepris[AP]+streamekstra;
                return prisAll+APstream+" kr."+pakke[AP]+" "+ekstratekst+" (inkl. tilk??b af "+streamlist.join(", ")+")"+"<br>"+prisAll+" kr."+" (ekskl. "+streamlist.join(", ")+")"
            }
    }
}

let values = [];
let pris=[];

const btn = document.querySelector('#btn');
        btn.addEventListener('click', (event) => {
            let checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
            checkboxes.forEach((checkbox) => {
                values.push(checkbox.name);
            });
            let NVF=NVFfunc();
            let SPL=SPLfunc();
            let SVS=SVSfunc();
            let YouP=YouPfunc();
            let NVO=NVOfunc();
            let NVA=NVAfunc();
            let AS=AllStreamFunc();
            let AP=AllParaFunc();

            let minpris=Number.MAX_VALUE;
            let expr="([0-9]+) .*"
            Udbyderliste=[{name:"NVF",val:NVF},{name:"SPL",val:SPL},{name:"SVS",val:SVS},{name:"YouP",val:YouP},{name:"NVO",val:NVO},{name:"NVA",val:NVA},{name:"AS",val:AS},{name:"AP",val:AP}];
            for (let u of Udbyderliste){
                val=u.val.replace(expr,"");
                val=parseInt(val);
                if(val<minpris){
                    minpris=val;
                }
            }
            for (let u of Udbyderliste){
                val=u.val.replace(expr,"");
                val=parseInt(val);
                if(val==minpris){
                    if (u.name=="NVF"){
                        NVF="<span class=cheap>"+NVF+"</span>";
                    }
                    if (u.name=="SPL"){
                        SPL="<span class=cheap>"+SPL+"</span>"
                    }
                    if (u.name=="SVS"){
                        SVS="<span class=cheap>"+SVS+"</span>";
                    }
                    if (u.name=="YouP"){
                        YouP="<span class=cheap>"+YouP+"</span>";
                    }
                    if (u.name=="NVO"){
                        NVO="<span class=cheap>"+NVO+"</span>";
                    }
                    if (u.name=="NVA"){
                        NVA="<span class=cheap>"+NVA+"</span>";
                    }
                    if (u.name=="AS"){
                        AS="<span class=cheap>"+AS+"</span>";
                    }
                    if (u.name=="AP"){
                        AP="<span class=cheap>"+AP+"</span>";
                    }
                }
            }
    
            pris.push("Norlys V??lg Frit: ".bold()+NVF);
            pris.push("<br>");
            pris.push("<br>"+"Norlys V??lg 8: ".bold()+NVO);
            pris.push("<br>");
            pris.push("<br>"+"Norlys V??lg Alt: ".bold()+NVA);
            pris.push("<br>");
            pris.push("<br>"+"Stofa pakkel??sning: ".bold()+SPL);
            pris.push("<br>");
            pris.push("<br>"+"Stofa V??lg Selv: ".bold()+SVS);
            pris.push("<br>");
            pris.push("<br>"+"YouSee Play: ".bold()+YouP);
            pris.push("<br>");
            pris.push("<br>"+"Allente Streaming: ".bold()+AS);
            pris.push("<br>");
            pris.push("<br>"+"Allente Parabol: ".bold()+AP);
            if (values.length==0){
                swal.fire("Ingen kanaler valgt");
            }
            else{
                swal.fire({title:"Priser:",html:'<div class="align-left">'+pris.join("")+'</div>',customClass:"swall_wide"});
            };
            pris=[];
            values=[];
        });    

let streamingpriser=[{"C more":99,"Discovery+ Underholdning (m. reklamer)":49,"Discovery+ Underholdning":79,"Discovery+ Underholdning + Live":99,"Discovery+ Sport":129,"Disney+ (??rspris: 790 kr.)":79,"HBO Max (??rspris: 599 kr.)":79,"Netflix Basis HD 1 enhed": 79,"Netflix Standard":114,"Netflix Premium":149,"Nordisk Film+":49,"SkyShowtime":69,"TV2 Play Basis (m. reklamer)":49,"TV2 Play Basis (u. reklamer)":79,"TV2 Play Favorit (m. reklamer)":129,"TV2 Play Favorit (u. reklamer)": 159,"TV2 Play Favorit+Sport (m. reklamer)":189,"TV2 Play Favorit+Sport (u. reklamer)":219,"Viaplay (Film og Serier)":129,"Viaplay Total": 449}];
streamingpriser.sort();

const btn1=document.querySelector("#btn1");
        btn1.addEventListener('click',(event)=>{
            streamprint=[]
            for (let stream of streamingpriser){
                for (let s of Object.keys(stream)){
                    streamprint.push(s.bold()+":  "+stream[s]+" kr."+"<br><br>");
                }
                }
                
            ;
            let middleIndex = Math.ceil(streamprint.length / 2);

            let firstHalf = streamprint.splice(0, middleIndex);   
            let secondHalf = streamprint.splice(-middleIndex);
            swal.fire({title:"Priser p?? streaming<hr>",html:"<div class=align-left id=streamingpris>"+"<div>"+firstHalf.join("")+"</div>"+"<div>"+secondHalf.join("")+"</div>"+"</div>",width:"1000px"});
            });

