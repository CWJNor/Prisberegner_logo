if (!sessionStorage.getItem('pageLoaded')) {
    sessionStorage.setItem('pageLoaded', true);
    location.reload();
}

let names=["TV2","TV2Charlie","TV2Fri","TV2News","TV2Sport","TV2SportX","TV2Echo","TV3","TV3Max","TV3 +","TV3Puls","TV3Sport","Kanal4","Kanal5","6eren","Canal9","DiscoveryChannel","DK4","NationalGeographic","3Sat","AlJazeera","Animalplanet","ARD","ARTE","BBCBrit","BBCEarth","BBCWorldNews","BlueHustler","Boomerang","CartoonNetwork","CBSReality","CNN","DisneyChannel","DisneyJunior","Euronews","Eurosport1","Eurosport2","ID-InvestegationDiscovery","Mezzo","MTV","MTV80s","MTV90s","MTVHits","NationalGeographicWild","NDR","Nick jr.","Nickelodeon","NRK1","ZDF","SVT1","Folketinget","NRK2","TV4 Sverige","SVT2","TV2Norge","ProSieben","Rai 1","See","TLC","VH1","V sport golf","Viasat Explore","Viasat History","Viasat Nature","DiscoveryScience","ESC_ESC1","Extreme Sport","HRT-TV1","MTVClub","MTVLive","Polonia","Sport Live"];
names.sort();
let prettynames=["TV2","TV2 Charlie","TV2 Fri","TV2 News","TV2 Sport","TV2 SportX","TV2 Echo","TV3","TV3 MAX","TV3 +","TV3 Puls","TV3 Sport","Kanal 4","Kanal 5","6'eren","Canal 9","Discovery Channel","DK4","National Geographic","3Sat","Al Jazeera","Animal Planet","ARD","ARTE","BBC Brit","BBC Earth","BBC World News","Blue Hustler","Boomerang","Cartoon Network","CBS Reality","CNN","Disney Channel","Disney Junior","Euronews","Eurosport 1","Eurosport 2","ID-Investegation Discovery","Mezzo","MTV","MTV 80s","MTV 90s","MTV Hits","National Geographic Wild","NDR","Nick Jr.","Nickelodeon","NRK1","ZDF","SVT1","Folketinget","NRK2","TV4 Sverige","SVT2","TV2 Norge","ProSieben","Rai 1","See","TLC","VH1","V sport golf","Viasat Explore","Viasat History","Viasat Nature","Discovery Science","ESC/ESC1","Extreme Sport","HRT-TV1","MTV Club","MTV Live","Polonia","Sport Live"];
prettynames.sort();

let beskrivelser=[{"TV2":"Danmarks mest sete tv-kanal, som samler danskerne om alt det vi deler gennem et mangfoldigt programudbud, der omfatter nyheder, aktualitet, dansk fiktion, underholdning, sport, dokumentar og livsstil, spillefilm, morgen-tv og meget mere.",
"TV2Charlie":"Kanalen henvender sig til voksne og nysgerrige danskere med lyst til at blive underholdtog  prioriterer den gode danske underholdning og musik, dansk fiktion, talkshows, danske filmklassikere, events og de bedste europæiske serier, herunder både dramaer og prisbelønnede krimiserier.",
"TV2Fri":"En unik fritids- og friluftskanal for dig, der vil inspireres. Oplev programmer om hus, have, madlavning og gør-det-selv arbejde.",
"TV2News":"Danmarks største nyhedskanal for dig, der vil have breaking news og følge med i begivenhederne, mens de sker.",
"TV2Sport":"Her får du mere end sublime sportsoplevelser. Du får også knivskarpe analyser og journalistiske sportsmagasiner.",
"TV2SportX":"TV 2 SPORT X har fokus på store internationale stjerner indenfor verdens bedste fodboldliga, tennis, basketball, X-Games, atletik og meget mere.",
"TV2Echo":"TV 2 Echo giver et ungt, nysgerrigt og undersøgende perspektiv på alt hvad livet indebærer. Her finder du reality, dokumentarer, nyskabende fiktion, comedy samt store events. Kanalen fokuserer desuden meget på E-sport, hvor vi tilbyder en dedikeret dansk dækning, blandt andet med 700 timers Counter-Strike årligt.",
"TV3":"TV3 er din kanal for sport, reality og underholdning. Det er her du finder programmer som 'Paradise Hotel', 'Divaer i Junglen' og meget mere.",
"TV3Max":"TV3 Max har en stærk sammensætning af verdensklasse sport og comedy. Her kan du se Premier League, Champions League, Superligaen og The Simpsons.",
"TV3 +":"TV3+ viser sport, spænding og spas. Følg kampene i Champions League, Premier League og Superligaen, se masser af Formel 1 og bliv underholdt af en lang række komedieserier.",
"TV3Puls":"TV3 Puls er kanalen, der fornemmer tendenserne inden for blandt andet mad, mode, indretning og design, og formidler dem gennem fascinerende og inspirerende livsstilsprogrammer i et univers, der aldrig får for travlt til nærvær og indlevelse.",
"TV3Sport":"TV3 Sport er den ultimative kanal for enhver sportselsker. Her kan du bl.a. følge med i Champions League, Superligaen, Formel 1, NFL, NHL og en række golfturneringer.",
"Kanal4":"Kanal 4 er for dig, der elsker reality og big characters med en humoristisk, uhøjtidelig, modig og ærlig tilgang til verden. Fascination, drømme og ekstravagance er i højsædet, når du får indblik i nogle af Danmarks største personligheders liv, når de lukker op og giver et eksklusivt indblik i det liv, mange af os kun tør drømme om.",
"Kanal5":"Kanal 5 samler familien og giver dig et underholdende pusterum, når vi blænder op for tempofyldte underholdningsprogrammer, fængslende krimiserier og stærke faktaprogrammer fra virkelighedens verden og nye, spændende fiktionsserier. Med andre ord - underholdning for hele familien.",
"6eren": "6’eren er for dig, der elsker både sport, actionfilm og serier. Der er fart over feltet, både når 3F Superligaens tophold spiller og speedway-stjernerne gasser op. Oplev verdensklasse fodbold fra FA Cup og Carabao Cup sammen med et eksperthold bestående af blandt andet Brian Laudrup og Thomas Gravesen.",
"Canal9":"Canal 9 giver dig spændende fodbold og programmer, der undersøger verden omkring os, uanset om det er mad eller leveforhold. Du får herrefight fra 3F Superligaen og FA Cuppen, og programmer om f.eks. hårdføre typer fra Alaska.",
"DiscoveryChannel":"En kanal for den kvalitetsbevidste seer, der er til prisvindende dokumentarer, fascinerende serier og intelligent underholdning.",
"DK4":"På dk4 er der nemlig masser af lyttevenlig musik, god gedigen underholdning i musikkens tegn, sidste nyt om den danske teaterscene, aktuelle samtaleprogrammer om litteratur og kunst og indsigtsfulde programmer om alt det, vi elsker at lave i fritiden – lige fra camping og sejlsportsliv til skiløb, lystfiskeri og jagt. dk4 er dansk tv døgnet rundt.",
"NationalGeographic":"Klog, faktuel underholdning til dig, der vil vide mere om teknologi, naturhistorie, arkæologi og naturens mysterier.",
"3Sat":"Videnskab, litteratur, dokumentar og musik. Teater, kunst og litteratur. 3SAT har forventninger til seernes intelligens – og du får smæk for skillingen.",
"AlJazeera":"Aljazeera International sender arabiske nyheder på engelsk til hele verden.",
"Animalplanet":"En dyrekanal for dig, der vil helt tæt på verdens dyreliv og menneskets liv med dyr.",
"ARD":"Hver dag finder du nyproducerede film, serier og dokumentarer på Tysklands største tv-kanal, og mange af dem sendes med danske undertekster, når du ser med fra Danmark.",
"ARTE":"Kultur-kanal med film, temaaftener, dokumentarfilm, debat og reportager.",
"BBCBrit":"BBC Brit sender originale dramaserier, engelsk comedy og underholdningsprogrammer.",
"BBCEarth":"BBC Earth er en tv-kanal, hvor prisvindende faktuelle og ikke-faktuelle programmer bliver præsenteret af eksperter i verdensklasse.",
"BBCWorldNews":"BBC World er en britisk 24-timers nyhedskanal. Nyhedsudsendelserne på kanalen bliver kombineret med dybdeborende reportager, interviews, magasinprogrammer samt økonomiprogrammer.",
"BlueHustler":"Blue Hustler er en amerikansk erotisk kanal.",
"Boomerang":"Et sjovt og sikkert sted for de mindste – men også et stort hit blandt forældre med sine klassiske serier, der vækker minder.",
"CartoonNetwork":"Cartoon Network er en kanal for børn i alle aldre og er fyldt med sjov, eventyr og underholdning. Her får du en blanding af moderne klassikere og helt nye tegnefilm. Alt tale er naturligvis på dansk.",
"CBSReality":"Kanalen der bringer dig tæt på hverdagsdramaer. Her får du spænding og action fra virkelighedens verden.",
"CNN":"Er du nyhedsjunkie, får du din trang stillet på CNN – en amerikansk nyhedskanal, der giver dig seneste nyt døgnet rundt.",
"DisneyChannel":"En familiekanal der giver adgang til alt det bedste fra Disneys magiske verden – med dansk tale eller danske undertekster.",
"DisneyJunior":"En kanal i øjenhøjde med de to-seks årige, der blander kendte figurer, musik og magiske fortællinger med læring.",
"Euronews":"Euronews er nyheder fra hele verden, præsenteret i et pan-europæisk perspektiv og på flere europæiske sprog.",
"Eurosport1":"Uanset om du er til cykling, tennis, motorsport, de største World Cups fra vinterlandskabet, snooker eller atletik – er Eurosport 1 kanalen for dig.",
"Eurosport2":"Kanalen for dig, der ikke kan få nok af sport. Eurosport 2 byder på vintersport, cykling, tennis og fede fodboldoplevelser.",
"ID-InvestegationDiscovery":"ID - Investigation Discovery er Danmarks eneste kanal kun med krimi. Her kan du se stærke dokumentarer med rekonstruktioner af virkelighedens mest rå og bestialske forbrydelser. Du kan se drabssager, familiefejder og efterforskning af nogle af de største og vildeste sager, ligesom du kan møde ofre og pårørende i stærke programmer.",
"Mezzo":"Mezzo er en fransk tv-kanal, der er afsat til klassisk musik, jazz og verdensmusik.",
"MTV":"MTV - verdens største musik- og ungdomskanal. En global tv-kanal med lokalt fokus, som giver den bedste blanding af musik og nytænkende underholdning.",
"MTV80s":"Musikkanalen for de modne seere. Her får du Golden Oldie's på stribe både som musikvideoer og live-optræden fra de bedste koncerter verden over.",
"MTV90s":"MTV 90s er dedikeret til rock og alternativ musik.",
"MTVHits":"MTV Hits er et stærkt supplement til MTV. MTV Hits sender alt det bedste og nyeste fra hitlisterne.",
"NationalGeographicWild":"Kom helt tæt på naturen og oplev de mest nærgående optagelser med vilde dyr – det hele i en knivskarp billedkvalitet.",
"NDR": "NDR er en tysk kanal med fokus på Nordtyskland",
"Nick jr.":"Nick Jr. er en tv-kanal for de mindste børn mellem to og seks år. Kanalen viser sjove og lærerige tegnefilm, der er tilpasset de yngste og opfordrer til leg og læring.",
"Nickelodeon":"Nickelodeon viser et bredt udbud af tegneserier og serier for børn.",
"NRK1":"NRK1 er en norsk kanal, der rummer lige dele provokerende serier og afmålte dokumentarprogrammer. Mange af dem sendes med danske undertekster, når du ser med fra Danmark. Og se med bør du gøre, hvis du vil være først til helt nye formater.",
"ZDF":"Tysklands public service-kanal ZDF sender hver dag film og serier, kærlighedsdramaer og dokumentariske analyser af krigen og historien – og en stor del af dem med danske undertekster. Nogle af dem har du sikkert hørt om, men dykker du ned i ZDF's program, er der altid nyt og spændende at se.",
"SVT1":"På SVT1 finder du tv med stærke fortællinger om både Sverige, Norden og om verden, og mange af udsendelserne sendes med danske undertekster, når du ser med fra Danmark. SVT1 er for dig, der vil have mere af det, du kender og elsker, men som også gerne vil udfordres.",
"Folketinget":"Folketinget har sin egen tv-kanal, som viser live-tv fra møderne i Folketinget. Folketingets tv sikrer, at du som borger har let adgang til at følge de politiske processer og kan få indblik i, hvad der sker i henholdsvis Folketingssalen og de åbne møder.",
"NRK2":"Norsk kanal fra NRK",
"TV4 Sverige":"TV4 Sverige er den største kommercielle tv-kanal i Sverige",
"SVT2":"SVT2 er Sveriges kanal dedikeret til kultur, viden og nicheprogrammer, og på kanalen finder du derfor et væld af udsendelser, som er både underholdende og en lille smule mere end det. SVT2 sender et udvalg af deres programmer med danske undertekster, når du ser med fra Danmark.",
"TV2Norge": "TV2 Norge er Norges største kommercielle tv-kanal",
"ProSieben":"Pro 7 satser på underholdning med internationale topserier, film, shows, hurtige nyheder og diverse magasiner.",
"Rai 1":"Rai Uno sender underholdning, nyheder, sport og film 24 timer i døgnet.",
"See":"See byder på originalt dansk indhold, populære serier og masser af sport.",
"TLC":"På TLC er der både tid til refleksion, gråd og grin. Her finder du inspirerende og autentiske programmer med humor og kant.",
"VH1":"VH1 er en musikkanal, der sender musikvideoer døgnet rundt. Vær opdateret på de seneste hitlister og se med, når stjernerne præsenterer deres helt egen top 10.",
"V sport golf":"V Sport Golf sender masser af live-golf året rundt med danske kommentatorer.",
"Viasat Explore":"Viasat Explore udfordrer din eventyrlyst. Kanalen er garant for eventyr og ekstreme oplevelser. Viasat Explore sender en god blanding af dybdeborende dokumentarserier og udfordrende ekspeditioner.",
"Viasat History":"Hvis du er vild med historiens vingesus og dokumentarer om fordums tid, kan du booste din viden med Viasat History.",
"Viasat Nature":"Viasat Nature viser spændende og lærerige dokumentarer samt natur- og dyreudsendelser. Bliv klog på dyrenes adfærd og naturens mange hemmeligheder med Viasat Nature.",
"DiscoveryScience":"Kanalen for den nysgerrige seer, der søger svar på universelle spørgsmål i prisvindende dokumentarer og serier om videnskab og teknologi.",
"ESC/ESC1":"Generel underholdningskanal fra Egypten, der indeholder et væld af tv-underholdning.",
"Extreme Sport":"Her er tempoet højt. Kanalen der giver dig det mest nervepirrende og inspirerende inden for livsstil, eventyr og ekstremsport.",
"HRT-TV1":"En kroatisk kanal der sender underholdning, dokumentarer, undervisningsprogrammer, komedieserier, filmer og talkshow.",
"MTVClub":"MTV Club er en musikkanal, der helt og holdent er tilegnet dansemusik. Du får drum’n’bass, trance, garage, house og fest i en fantastisk dansepakke.",
"MTVLive":"MTV Live er en musikbaseret underholdningskanal, som tager udgangspunkt i legendariske, klassiske og splinternye MTV og Vh1 programmer.",
"Polonia":"Følg med i nyheder og tv-programmer direkte fra Polen.",
"Sport Live":"SPORT LIVE er en dansk sportskanal, som sender live mindst 10 timer om dagen. Kanalen sender hestevæddeløb fra hele verden og har et dagligt studieprogram med eksperter. Derudover sender SPORT LIVE fra en række danske sportsbegivenheder."
}]

beskrivelser.sort();

//Kanaler
let firkanter=document.querySelector("#firkanter");
for (let i=0;i<names.length;i++){
    let kanalogtekst=document.createElement("div");
    kanalogtekst.id="tekstboks";
    let kanalfirkant=document.createElement("input");
    kanalfirkant.setAttribute("type","checkbox");
    kanalfirkant.setAttribute("title", prettynames[i]);
    kanalfirkant.classList.add("button");
    
    kanalfirkant.classList.add("firkant");
    kanalfirkant.setAttribute("name",names[i]);
    kanalfirkant.id="firkant"+i;
    //kanalfirkant.classList.add("billede");
    kanalfirkant.style.background="url('./Billeder/"+names[i]+".png') rgba(245, 245, 245)";
    kanalfirkant.style.backgroundSize="contain";
    kanalfirkant.style.backgroundRepeat="no-repeat";
    kanalfirkant.style.backgroundPosition="center";
    //Stofa pointknap
    //<label for="c1"><span>4</span></label>
    let labelcircle=document.createElement("label");
    labelcircle.setAttribute("for","firkant"+i);
    labelcircle.class="labelcircle";
    let pointtal=document.createElement("span");
    pointtal.classList.add("circle");
    pointtal.classList.add("hidden");
    let stofaaktiv=false; 
    let kanaler=[{TV2:0,TV2Charlie:0,TV2Fri:1,TV2News:1,TV2Sport:2,TV2SportX:2,TV2Echo:1,TV3:0,TV3Max:2,"TV3 +":3,TV3Puls:0,TV3Sport:3,Kanal4:0,Kanal5:0,'6eren':1,Canal9:1,DiscoveryChannel:1,DK4:0,NationalGeographic:1,'3Sat':1,AlJazeera:1,Animalplanet:1,ARD:"Løsning ikke mulig",ARTE:1,BBCBrit:1,BBCEarth:1,BBCWorldNews:1,BlueHustler:1,Boomerang:1,CartoonNetwork:1,CBSReality:1,CNN:1,DisneyChannel:1,DisneyJunior:1,Euronews:1,Eurosport1:1,Eurosport2:2,"ID-InvestegationDiscovery":1,Mezzo:1,MTV:1,MTV80s:1,MTV90s:1,MTVHits:1,NationalGeographicWild:1,NDR:0,"Nick jr.":1,Nickelodeon:1,NRK1:0,ZDF:0,SVT1:0,Folketinget:0,NRK2:0,"TV4 Sverige":0,SVT2:0,"TV2Norge":0,ProSieben:1,"Rai 1":1,See:2,TLC:1,VH1:1,"V sport golf":1,"Viasat Explore":1,"Viasat History":1,"Viasat Nature":1,DiscoveryScience:1,"ESC_ESC1":1,"Extreme Sport":1,"HRT-TV1":1,MTVClub:1,MTVLive:1,Polonia:1,"Sport Live":1}];
    kanaler.sort();
    let pointknap=document.querySelector("#pointknap");
    pointknap.addEventListener("click",function(){
        if(stofaaktiv){
            stofaaktiv=false;
            pointknap.classList.remove("is-primary");
        }
        else{
            stofaaktiv=true;
            pointknap.classList.add("is-primary");
        }
        if(norlysaktiv){
            norlysaktiv=false;
            prisknap.classList.remove("is-primary");
        }
        else{
            pointtal.classList.toggle("hidden");
        }
        console.log(pointknap);
        if(kanaler[0][names[i]]!=="Løsning ikke mulig"){
            pointtal.innerHTML=kanaler[0][names[i]];
        }
        else{
            pointtal.innerHTML='\u00A0'
        }
    })

    //Norlys prisknap
    let kanalpriser=[{TV2:49,TV2Charlie:39,TV2Fri:39,TV2News:39,TV2Sport:39,TV2SportX:39,TV2Echo:39,TV3:49,TV3Max:39,"TV3 +":99,TV3Puls:39,TV3Sport:49,Kanal4:39,Kanal5:49,'6eren':39,Canal9:39,DiscoveryChannel:29,DK4:29,NationalGeographic:29,'3Sat':"Løsning ikke mulig",AlJazeera:"Løsning ikke mulig",Animalplanet:29,ARD:0,ARTE:"Løsning ikke mulig",BBCBrit:"Løsning ikke mulig",BBCEarth:"Løsning ikke mulig",BBCWorldNews:"Løsning ikke mulig",BlueHustler:"Løsning ikke mulig",Boomerang:"Løsning ikke mulig",CartoonNetwork:"Løsning ikke mulig",CBSReality:"Løsning ikke mulig",CNN:"Løsning ikke mulig",DisneyChannel:29,DisneyJunior:29,Euronews:"Løsning ikke mulig",Eurosport1:29,Eurosport2:39,"ID-InvestegationDiscovery":29,Mezzo:"Løsning ikke mulig",MTV:"Løsning ikke mulig",MTV80s:"Løsning ikke mulig",MTV90s:"Løsning ikke mulig",MTVHits:"Løsning ikke mulig",NationalGeographicWild:"Løsning ikke mulig",NDR:0,"Nick jr.":"Løsning ikke mulig",Nickelodeon:29,NRK1:0,ZDF:0,SVT1:0,Folketinget:"Løsning ikke mulig",NRK2:"Løsning ikke mulig","TV4 Sverige":0,SVT2:0,"TV2Norge":0,ProSieben:"Løsning ikke mulig","Rai 1":"Løsning ikke mulig",See:39,TLC:29,VH1:29,"V sport golf":"Løsning ikke mulig","Viasat Explore":"Løsning ikke mulig","Viasat History":"Løsning ikke mulig","Viasat Nature":"Løsning ikke mulig",DiscoveryScience:"Løsning ikke mulig","ESC_ESC1":"Løsning ikke mulig","Extreme Sport":"Løsning ikke mulig","HRT-TV1":"Løsning ikke mulig",MTVClub:"Løsning ikke mulig",MTVLive:"Løsning ikke mulig",Polonia:"Løsning ikke mulig","Sport Live":"Løsning ikke mulig"}];
    kanalpriser.sort();
    let norlysaktiv=false;
    let prisknap=document.querySelector("#prisknap");
    prisknap.addEventListener("click",function(){
        if(norlysaktiv){
            norlysaktiv=false;
            prisknap.classList.remove("is-primary");
        }
        else{
            norlysaktiv=true;
            prisknap.classList.add("is-primary");
        }
        if(stofaaktiv){
            stofaaktiv=false;
            pointknap.classList.remove("is-primary");
        }
        else{
            pointtal.classList.toggle("hidden");
        }
        if(kanalpriser[0][names[i]]!=="Løsning ikke mulig"){
            pointtal.innerHTML=kanalpriser[0][names[i]];
        }
        else{
            pointtal.innerHTML='\u00A0'
        }
    })

    //Infobox
    let info=document.createElement("span");
    info.innerHTML="i";
    info.classList.add("hoverable","info");

    let hiddeninfo=document.createElement("div");
    hiddeninfo.classList.add("hiddentext");
    if(names[i] in beskrivelser[0]){
        hiddeninfo.innerHTML="<span class='bigtext'>"+prettynames[i]+"</span>"+":<br>"+beskrivelser[0][names[i]];
    }
    else{
        hiddeninfo.innerHTML="<span class='bigtext'>"+prettynames[i]+"</span>"+":<br> Info her";
    }

    kanalogtekst.appendChild(info);
    kanalogtekst.appendChild(hiddeninfo);
    labelcircle.appendChild(pointtal);
    kanalogtekst.appendChild(kanalfirkant);
    kanalogtekst.appendChild(labelcircle);
    //analogtekst.appendChild(tekst);
    
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

//Tilføj streaming
let stream=["TV2PlayBasis","TV2PlayFavoritSport","TV2PlayFavoritSport (Uden reklamer)","Disney+","HBOMax","NetflixStandard","NetflixPremium","NordiskFilm+","CMore","SkyShowtime","Discovery+underholdning","Discovery+Sport","Viaplay (Film og Serier)","Viaplay Total"];
stream.sort();
let streampretty=["TV2 PLAY Basis","TV2 PLAY Favorit+Sport","TV2 PLAY Favorit+Sport (u. reklamer)","Disney+","HBO Max","Netflix Standard","Netflix Premium","Nordisk Film+","C More","SkyShowtime","Discovery+ Underholdning","Discovery+ Sport","Viaplay (Film og Serier)","Viaplay Total"];
streampretty.sort();

let streambeskrivelser=[{
    "TV2PlayBasis":"TV 2 PLAY Basis giver dig adgang til hele TV 2s arkiv med mere end 10.000 gemte programmer fra alle TV 2-kanalerne. Derudover kan du se snigpremierer på de mest populære programmer. Så læn dig godt tilbage og gå på opdagelse i det store udvalg af serier, dokumentarer, underholdning og film.",
    "TV2PlayFavoritSport":"Med TV 2 PLAY Favorit + Sport med reklamer får du det bedste fra alle TV 2s live- og sportskanaler samt fuld adgang til alle serier og programmer på TV 2 PLAY. Hold dig opdateret på dagens nyheder, følg din favorit-sportsgren, se inspirerende livsstilsprogrammer eller grin til knivskarp comedy.",
    "TV2PlayFavoritSport (Uden reklamer)":"Med TV 2 PLAY Favorit + Sport får du det bedste fra alle TV 2s live- og sportskanaler samt fuld adgang til alle serier og programmer på TV 2 PLAY. Hold dig opdateret på dagens nyheder, følg din favorit-sportsgren, se inspirerende livsstilsprogrammer eller grin til knivskarp comedy.",
    "Disney+":"Disney+ giver dig noget til ethvert humør, samlet ét sted. Med masser af underholdning fra Disney, Pixar, Marvel, Star Wars, National Geographic og Star er der altid noget spændende at se. Oplev de nyeste udgivelser, originale serier og film, klassiske film, throwback-tv-serier og meget mere.",
    "HBOMax":"HBO Max giver dig adgang til indhold fra verdens kendte brands som Warner Brother, HBO, Cartoon Network og Max Originals. Du får derudover adgang til de seneste Warner Brothers film kun 45 dage efter biografpremieren.",
    "NetflixStandard":"Netflix er en af de mest populære streamingtjenester i Danmark. Her finder du en lang række prisbelønnede serier, film, dokumentarer og meget mere. Og hver uge kommer der nye serier og film! Med Netflix Standard får du adgang til at streame på 2 skærme samtidigt – i full HD – og til at downloade på 2 enheder ad gangen.",
    "NetflixPremium":"Netflix er en af de mest populære streamingtjenester i Danmark. Her finder du en lang række prisbelønnede serier, film, dokumentarer og meget mere. Og hver uge kommer der nye serier og film! Med Netflix Premium får du adgang til at streame på 4 skærme samtidigt – i Ultra HD og med rumlig lyd – og til at downloade på 6 enheder ad gangen.",
    "NordiskFilm+":"Med Nordisk Film+ kan du se de bedste danske film og et bredt udvalg af titler fra Hollywood og vores nordiske naboer. Du får også Dansk Filmskat fyldt med de gode gamle filmklassikere og et sjovt og trygt børneunivers med velkendte favoritter.",
    "CMore":"C More giver dig fri adgang til fire fede streamingkanaler og til C More-arkivet, hvor der gemmer sig perler af både nye og klassiske biografsucceser, såvel som film for både store og små og premiereafsnit fra de fedeste serier.",
    "SkyShowtime":"SkyShowtime er en helt ny streamingtjeneste, proppet med et unikt udvalg af spændende underholdning. Stream nye og eksklusive film og serier, børne- og familieunderholdning, historier fra den virkelige verden, dokumentarer og vores favorit-klassikere gennem tiden.",
    "Discovery+underholdning":"Discovery+ Underholdning giver adgang til en verden af tempofyldt underholdning, fængende krimiprogrammer og reality med de største personligheder, når det passer dig. Se udvalgte programmer og eksklusive snigpremierer.",
    "Discovery+Sport":"Discovery+ Sport giver adgang til en verden af tempofyldt underholdning, fængende krimiprogrammer og reality med de største personligheder, når det passer dig. Discovery+ Sport kan se se live sport fra 3F superliga, landsholdets VM-kvalifikationskampe, Engelsk pokalfodbold, de største cykelløb, Grand Slam tennis, PGA Tour, Motorsport og meget mere.",
    "Viaplay (Film og Serier)":"Viaplay er en streamingtjeneste med masser af underholdning for hele familien. Der er et stort udbud af nye film, store danske og internationale serier, et helt børneunderholdnings-univers samt alle sæsoner af TV3-realityprogrammerne. Helt uden reklamer.",
    "Viaplay Total":"Med Viaplay Total får du sport og underholdning for hele familien. Du kan streame livesport i verdensklasse – herunder Premier League, Superligaen og Formel 1. Du får også et stort udvalg af nye film, store danske og internationale serier, børneunderholdning samt alle de nyeste afsnit af TV3-realityprogrammerne før alle andre. Helt uden reklamer."
}]
let firkanterstream=document.querySelector("#firkantstream");
for (let i=0;i<stream.length;i++){
    //let kanalogtekst=document.createElement("div");
    //kanalogtekst.id="boks";
    //let tekst=document.createElement("p");
    let kanalogtekst=document.createElement("div");
    kanalogtekst.id="tekstboks";
    let kanalfirkant=document.createElement("input");
    kanalfirkant.setAttribute("type","checkbox");
    kanalfirkant.setAttribute("title", streampretty[i]);
    kanalfirkant.classList.add("button");
    kanalfirkant.classList.add("firkantst");
    kanalfirkant.setAttribute("name",stream[i]);
    kanalfirkant.id="streamfirkant"+i;
    //kanalfirkant.classList.add("billede");
    kanalfirkant.style.background="url('./Billeder/"+stream[i]+".png') rgba(245, 245, 245)";
    kanalfirkant.style.backgroundSize="contain";
    kanalfirkant.style.backgroundRepeat="no-repeat";
    kanalfirkant.style.backgroundPosition="center";
    let labelcircle=document.createElement("label");
    labelcircle.setAttribute("for","streamfirkant"+i);
    labelcircle.class="labelcircle";
    //Stofa pointknap
    let pointtal=document.createElement("span");
    pointtal.classList.add("circlestream");
    pointtal.classList.add("hidden");
    let stofaaktiv=false; 
    let streamnavn=[{TV2PlayBasis:2,TV2PlayFavoritSport:8,"TV2PlayFavoritSport (Uden reklamer)":"Løsning ikke mulig","Disney+":"Løsning ikke mulig",HBOMax:4,NetflixStandard:"Løsning ikke mulig",NetflixPremium:"Løsning ikke mulig","NordiskFilm+":3,CMore:5,SkyShowtime:"Løsning ikke mulig",NationalGeographicNow:"Løsning ikke mulig","Discovery+underholdning":2,"Discovery+Sport":8,"Viaplay (Film og Serier)":6,"Viaplay Total":"Løsning ikke mulig"}]; 
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
        //pointknap.classList.toggle("is-primary");
        if(streamnavn[0][stream[i]]!=="Løsning ikke mulig"){
            pointtal.innerHTML=streamnavn[0][stream[i]];
        }
        else{
            pointtal.innerHTML='\u00A0'
        }
    })

    //Norlys prisknap
    let streamNor=[{TV2PlayBasis:"Løsning ikke mulig",TV2PlayFavoritSport:"Løsning ikke mulig","TV2PlayFavoritSport (Uden reklamer)":"Løsning ikke mulig","Disney+":"Løsning ikke mulig",HBOMax:"Løsning ikke mulig",NetflixStandard:"Løsning ikke mulig",NetflixPremium:"Løsning ikke mulig","NordiskFilm+":"Løsning ikke mulig",CMore:"Løsning ikke mulig",SkyShowtime:"Løsning ikke mulig",NationalGeographicNow:"Løsning ikke mulig","Discovery+underholdning":"Løsning ikke mulig","Discovery+Sport":"Løsning ikke mulig","Viaplay (Film og Serier)":"Løsning ikke mulig","Viaplay Total":"Løsning ikke mulig"}];
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
        //prisknap.classList.toggle("is-primary");
        if(streamNor[0][stream[i]]!=="Løsning ikke mulig"){
            pointtal.innerHTML=streamNor[0][stream[i]];
        }
        else{
            pointtal.innerHTML='\u00A0'
        }
    })

    let info=document.createElement("span");
    info.innerHTML="i";
    info.classList.add("hoverable","info");

    let hiddeninfo=document.createElement("div");
    hiddeninfo.classList.add("hiddentext");
    if(stream[i] in streambeskrivelser[0]){
        hiddeninfo.innerHTML="<span class='bigtext'>"+streampretty[i]+"</span>"+":<br>"+streambeskrivelser[0][stream[i]];
    }
    else{
        hiddeninfo.innerHTML="<span class='bigtext'>"+streampretty[i]+"</span>"+":<br> Info her";
    }

    kanalogtekst.appendChild(info);
    kanalogtekst.appendChild(hiddeninfo);

    //tekst.innerHTML=streampretty[i];
    //tekst.classList.add("navnestream");
    labelcircle.appendChild(pointtal);
    //infolabel.appendChild(info);
    kanalogtekst.appendChild(kanalfirkant);
    kanalogtekst.appendChild(labelcircle);
    //analogtekst.appendChild(tekst);
    
    firkanterstream.appendChild(kanalogtekst);
}


let info=document.querySelectorAll(".info")
var hiddentext = document.querySelectorAll('.hiddentext');
for(let p=0;p<= info.length-1;p++){
    let infop=info[p];
    infop.addEventListener("mouseover",function(){
        var rect = hiddentext[p].getBoundingClientRect();
        console.log(rect.right);
        console.log(window.innerWidth);
        if (rect.right > window.innerWidth) {
        hiddentext[p].style.float = 'auto';
        hiddentext[p].style.right = '93%';
        }
        
}
    )}
    

//Feedback knap
let newwindow = null;

function openWindow(mailtoLink) {
  newwindow = window.open(mailtoLink, 'emailWindow');
  return newwindow;
}

function closeNewWindow() {
  if (newwindow && !newwindow.closed) {
    newwindow.close();
    window.focus();
  }
}
let feedbackknap = document.querySelector("#feedback");

feedbackknap.addEventListener("click", function () {
  Swal.fire({
    title: 'Feedback',
    html: `<input type="text" id="feedbacknavn" class="swal2-input" placeholder="Navn">
           <textarea type="text" id="feedbackbesked" class="swal2-input" placeholder="Feedback"></textarea>`,
    customClass: "swall_feed",
    confirmButtonText: 'Send feedback',
    focusConfirm: false,
    preConfirm: () => {
      const feedbacknavn = Swal.getPopup().querySelector('#feedbacknavn').value;
      const feedbackbesked = Swal.getPopup().querySelector('#feedbackbesked').value;
     

      if (!feedbackbesked || !feedbacknavn) {
        Swal.showValidationMessage(`Udfyld venligst alle felter`);
        return false;
      }

      let recipient = 'torsch@norlys.dk; clajes@norlys.dk';
      let body = feedbackbesked;
      let subject="Feedback fra Prisberegneren: "+feedbacknavn;

      let mailtoLink = 'mailto:' + recipient + '?subject=' + encodeURIComponent(subject) + '&body=Feedback til prisberegneren:%0A%0A' + encodeURIComponent(body);
      newwindow = openWindow(mailtoLink);

      return { feedbacknavn: feedbacknavn, feedbackbesked: feedbackbesked}
    }
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({title:"Nyt mailvindue åbner. <br> Tak for din feedback!"})
    }
  });

  window.addEventListener('visibilitychange', () => {
    console.log(document.visibilityState);
    if (document.visibilityState === 'visible') {
        closeNewWindow();
    }
  });
});



//Kampagne-knap
let Kampagneknap=document.querySelector("#btn2");
Kampagneknap.addEventListener("click",function(){
    Swal.fire({
        customClass:"kampagne",
        title: 'Kampagner',
        html: '<img src="kampagner.png">',
        confirmButtonText: 'OK'
      });
})

//UDREGNER PRISER
let streampris=[{"TV2PlayBasis":49,"TV2PlayFavoritSport":189,"TV2PlayFavoritSport (Uden reklamer)":219,"Disney+":79,"HBOMax":79,"NetflixStandard":114,"NetflixPremium":149,"NordiskFilm+":49,"CMore":99,"SkyShowtime":69,"Discovery+underholdning":79,"Discovery+Sport":129,"Viaplay (Film og Serier)":129,"Viaplay Total":449}];
streampris.sort();

//Norlys Vælg Frit
let NVFfunc=function(){
    let ikkem=[];
    let streamlist=[];
    let kanaler=[{TV2:49,TV2Charlie:39,TV2Fri:39,TV2News:39,TV2Sport:39,TV2SportX:39,TV2Echo:39,TV3:49,TV3Max:39,"TV3 +":99,TV3Puls:39,TV3Sport:49,Kanal4:39,Kanal5:49,'6eren':39,Canal9:39,DiscoveryChannel:29,DK4:29,NationalGeographic:29,'3Sat':"Løsning ikke mulig",AlJazeera:"Løsning ikke mulig",Animalplanet:29,ARD:0,ARTE:"Løsning ikke mulig",BBCBrit:"Løsning ikke mulig",BBCEarth:"Løsning ikke mulig",BBCWorldNews:"Løsning ikke mulig",BlueHustler:"Løsning ikke mulig",Boomerang:"Løsning ikke mulig",CartoonNetwork:"Løsning ikke mulig",CBSReality:"Løsning ikke mulig",CNN:"Løsning ikke mulig",DisneyChannel:29,DisneyJunior:29,Euronews:"Løsning ikke mulig",Eurosport1:29,Eurosport2:39,"ID-InvestegationDiscovery":29,Mezzo:"Løsning ikke mulig",MTV:"Løsning ikke mulig",MTV80s:"Løsning ikke mulig",MTV90s:"Løsning ikke mulig",MTVHits:"Løsning ikke mulig",NationalGeographicWild:"Løsning ikke mulig",NDR:0,"Nick jr.":"Løsning ikke mulig",Nickelodeon:29,NRK1:0,ZDF:0,SVT1:0,Folketinget:"Løsning ikke mulig",NRK2:"Løsning ikke mulig","TV4 Sverige":0,SVT2:0,"TV2Norge":0,ProSieben:"Løsning ikke mulig","Rai 1":"Løsning ikke mulig",See:39,TLC:29,VH1:29,"V sport golf":"Løsning ikke mulig","Viasat Explore":"Løsning ikke mulig","Viasat History":"Løsning ikke mulig","Viasat Nature":"Løsning ikke mulig",DiscoveryScience:"Løsning ikke mulig","ESC/ESC1":"Løsning ikke mulig","Extreme Sport":"Løsning ikke mulig","HRT-TV1":"Løsning ikke mulig",MTVClub:"Løsning ikke mulig",MTVLive:"Løsning ikke mulig",Polonia:"Løsning ikke mulig","Sport Live":"Løsning ikke mulig"}];
    let stream=[{TV2PlayBasis:"Løsning ikke mulig",TV2PlayFavoritSport:"Løsning ikke mulig","TV2PlayFavoritSport (Uden reklamer)":"Løsning ikke mulig","Disney+":"Løsning ikke mulig",HBOMax:"Løsning ikke mulig",NetflixStandard:"Løsning ikke mulig",NetflixPremium:"Løsning ikke mulig","NordiskFilm+":"Løsning ikke mulig",CMore:"Løsning ikke mulig",SkyShowtime:"Løsning ikke mulig","Discovery+underholdning":"Løsning ikke mulig","Discovery+Sport":"Løsning ikke mulig","Viaplay (Film og Serier)":"Løsning ikke mulig","Viaplay Total":"Løsning ikke mulig"}];
    kanaler.sort();
    stream.sort();
    let NVF=0;
    let NVFstream=0;
            for (let kanal of kanaler){
                for (let k of Object.keys(kanal)){
                    if(values.includes(k)){
                        if(kanal[k]=="Løsning ikke mulig"||NVF=="Løsning ikke mulig"){
                            NVF="Løsning ikke mulig";
                            if (kanal[k]=="Løsning ikke mulig"){
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
                            if(st[s]=="Løsning ikke mulig"){
                                if(streampris[0][s]=="Løsning ikke mulig"){
                                    NVF="Løsning ikke mulig";
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
            return "Løsning ikke mulig pga.:"+"<br>("+ikkem.join(", ")+")"
        }
        if(NVFstream==0){
            return NVF+109+" kr.";
        }
        else{
            return NVFstream+basepris+" kr. (inkl. tilkøb af "+streamlist.join(", ")+")"+"<br>"+basepris+" kr. (ekskl. "+streamlist.join(", ")+")";
        }
        }

//Norlys Vælg 8
let NVOfunc=function(){
    let ikkem=[];
    let streamlist=[];
    let kanaler=[{TV2:1,TV2Charlie:1,TV2Fri:1,TV2News:1,TV2Sport:1,TV2SportX:1,TV2Echo:1,TV3:1,TV3Max:1,"TV3 +":1,TV3Puls:1,TV3Sport:1,Kanal4:1,Kanal5:1,'6eren':1,Canal9:1,DiscoveryChannel:1,DK4:1,NationalGeographic:1,'3Sat':"Løsning ikke mulig",AlJazeera:"Løsning ikke mulig",Animalplanet:1,ARD:0,ARTE:"Løsning ikke mulig",BBCBrit:"Løsning ikke mulig",BBCEarth:"Løsning ikke mulig",BBCWorldNews:"Løsning ikke mulig",BlueHustler:"Løsning ikke mulig",Boomerang:1,CartoonNetwork:1,CBSReality:"Løsning ikke mulig",CNN:1,DisneyChannel:1,DisneyJunior:1,Euronews:"Løsning ikke mulig",Eurosport1:1,Eurosport2:1,"ID-InvestegationDiscovery":1,Mezzo:"Løsning ikke mulig",MTV:"Løsning ikke mulig",MTV80s:"Løsning ikke mulig",MTV90s:"Løsning ikke mulig",MTVHits:"Løsning ikke mulig",NationalGeographicWild:"Løsning ikke mulig",NDR:0,"Nick jr.":"Løsning ikke mulig",Nickelodeon:1,NRK1:0,ZDF:0,SVT1:0,Folketinget:"Løsning ikke mulig",NRK2:"Løsning ikke mulig","TV4 Sverige":0,SVT2:0,"TV2Norge":0,ProSieben:"Løsning ikke mulig","Rai 1":"Løsning ikke mulig",See:1,TLC:1,VH1:1,"V sport golf":"Løsning ikke mulig","Viasat Explore":"Løsning ikke mulig","Viasat History":"Løsning ikke mulig","Viasat Nature":"Løsning ikke mulig",DiscoveryScience:"Løsning ikke mulig","ESC/ESC1":"Løsning ikke mulig","Extreme Sport":"Løsning ikke mulig","HRT-TV1":"Løsning ikke mulig",MTVClub:"Løsning ikke mulig",MTVLive:"Løsning ikke mulig",Polonia:"Løsning ikke mulig","Sport Live":1}];
    let stream=[{TV2PlayBasis:1,TV2PlayFavoritSport:"Løsning ikke mulig","TV2PlayFavoritSport (Uden reklamer)":"Løsning ikke mulig","Disney+":"Løsning ikke mulig",HBOMax:1,NetflixStandard:"Løsning ikke mulig",NetflixPremium:"Løsning ikke mulig","NordiskFilm+":1,CMore:"Løsning ikke mulig",SkyShowtime:"Løsning ikke mulig","Discovery+underholdning":1,"Discovery+Sport":"Løsning ikke mulig","Viaplay (Film og Serier)":1,"Viaplay Total":"Løsning ikke mulig"}];
    kanaler.sort();
    stream.sort();
    let NVO=0;
    let NVOstream=0;
            for (let kanal of kanaler){
                    for (let k of Object.keys(kanal)){
                        if(values.includes(k)){
                            if(kanal[k]=="Løsning ikke mulig"||NVO=="Løsning ikke mulig"){
                                NVO="Løsning ikke mulig";
                                if (kanal[k]=="Løsning ikke mulig"){
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
                            if(st[s]=="Løsning ikke mulig"){
                                if(streampris[0][s]=="Løsning ikke mulig"){
                                    NVO="Løsning ikke mulig";
                                    ikkem.push(s);
                                }
                                else{
                                    NVOstream+=streampris[0][s];
                                    streamlist.push(s);
                                }
                            }
                            else{
                                if(NVO!=="Løsning ikke mulig"){
                                    console.log("Her");
                                    NVO=NVO+st[s];
                                }
                            }
                        }
                    }
                }
        if(NVO=="Løsning ikke mulig"){
            return "Løsning ikke mulig pga.:"+"<br>("+ikkem.join(", ")+")";
        }
        else{
            if(NVO>8){
                return "Mere end 8 valgt"
            }
            if(NVOstream==0){
                return 469+" kr."+" ("+NVO+" ud af 8 kanaler valgt)";
            }
            else{
                return NVOstream+469+" kr. (inkl. tilkøb af "+streamlist.join(", ")+")"+"<br>"+469+" kr. (ekskl. "+streamlist.join(", ")+") ("+NVO+" ud af 8 kanaler valgt)";
                 }
            }
} 

//Norlys Vælg Alt
let NVAfunc=function(){
    let ikkem=[];
    let streamlist=[];
    let kanaler=[{TV2:1,TV2Charlie:1,TV2Fri:1,TV2News:1,TV2Sport:1,TV2SportX:1,TV2Echo:1,TV3:1,TV3Max:1,"TV3 +":1,TV3Puls:1,TV3Sport:1,Kanal4:1,Kanal5:1,'6eren':1,Canal9:1,DiscoveryChannel:1,DK4:1,NationalGeographic:1,'3Sat':"Løsning ikke mulig",AlJazeera:"Løsning ikke mulig",Animalplanet:1,ARD:0,ARTE:"Løsning ikke mulig",BBCBrit:"Løsning ikke mulig",BBCEarth:"Løsning ikke mulig",BBCWorldNews:"Løsning ikke mulig",BlueHustler:"Løsning ikke mulig",Boomerang:1,CartoonNetwork:1,CBSReality:"Løsning ikke mulig",CNN:1,DisneyChannel:1,DisneyJunior:1,Euronews:"Løsning ikke mulig",Eurosport1:1,Eurosport2:1,"ID-InvestegationDiscovery":1,Mezzo:"Løsning ikke mulig",MTV:"Løsning ikke mulig",MTV80s:"Løsning ikke mulig",MTV90s:"Løsning ikke mulig",MTVHits:"Løsning ikke mulig",NationalGeographicWild:"Løsning ikke mulig",NDR:0,"Nick jr.":"Løsning ikke mulig",Nickelodeon:1,NRK1:0,ZDF:0,SVT1:0,Folketinget:"Løsning ikke mulig",NRK2:"Løsning ikke mulig","TV4 Sverige":0,SVT2:0,"TV2Norge":0,ProSieben:"Løsning ikke mulig","Rai 1":"Løsning ikke mulig",See:1,TLC:1,VH1:1,"V sport golf":"Løsning ikke mulig","Viasat Explore":"Løsning ikke mulig","Viasat History":"Løsning ikke mulig","Viasat Nature":"Løsning ikke mulig",DiscoveryScience:"Løsning ikke mulig","ESC/ESC1":"Løsning ikke mulig","Extreme Sport":"Løsning ikke mulig","HRT-TV1":"Løsning ikke mulig",MTVClub:"Løsning ikke mulig",MTVLive:"Løsning ikke mulig",Polonia:"Løsning ikke mulig","Sport Live":1}];
    let stream=[{TV2PlayBasis:1,TV2PlayFavoritSport:"Løsning ikke mulig","TV2PlayFavoritSport (Uden reklamer)":"Løsning ikke mulig","Disney+":"Løsning ikke mulig",HBOMax:79,NetflixStandard:"Løsning ikke mulig",NetflixPremium:"Løsning ikke mulig","NordiskFilm+":49,CMore:"Løsning ikke mulig",SkyShowtime:"Løsning ikke mulig","Discovery+underholdning":1,"Discovery+Sport":"Løsning ikke mulig","Viaplay (Film og Serier)":1,"Viaplay Total":1}];
    kanaler.sort();
    stream.sort();
    let NVA=0;
    let NVAstream=0;
    let HBO=0;
            for (let kanal of kanaler){
                    for (let k of Object.keys(kanal)){
                        if(values.includes(k)){
                            if(kanal[k]=="Løsning ikke mulig"||NVA=="Løsning ikke mulig"){
                                NVA="Løsning ikke mulig";
                                if (kanal[k]=="Løsning ikke mulig"){
                                    ikkem.push(k);}
                            }
                        }
                    }
                }
                for (let st of stream){
                    for (let s of Object.keys(st)){
                        if(values.includes(s)){
                            if(st[s]=="Løsning ikke mulig"){
                                if(streampris[0][s]=="Løsning ikke mulig"){
                                    NVA="Løsning ikke mulig";
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
        if(NVA=="Løsning ikke mulig"){
            return "Løsning ikke mulig pga.: <br>("+ikkem.join(", ")+")";
        }
        if(NVAstream==0){
            return 729+HBO+" kr.";
        }
        else{
            return NVAstream+basepris+" kr. (inkl. tilkøb af "+streamlist.join(", ")+")"+"<br>"+basepris+" kr. (ekskl. "+streamlist.join(", ")+")";
        }
    }

// stofa pakkeløsning: lille=0,mellem=1,stor=2 ellers løsning ikke mulig
let SPLfunc=function(){
    let ikkem=[];
    let streamlist=[];
    let kanaler=[{TV2:0,TV2Charlie:0,TV2Fri:1,TV2News:1,TV2Sport:2,TV2SportX:2,TV2Echo:1,TV3:0,TV3Max:2,"TV3 +":1,TV3Puls:0,TV3Sport:2,Kanal4:0,Kanal5:0,'6eren':1,Canal9:2,DiscoveryChannel:1,DK4:0,NationalGeographic:1,'3Sat':"Løsning ikke mulig",AlJazeera:"Løsning ikke mulig",Animalplanet:2,ARD:"Løsning ikke mulig",ARTE:"Løsning ikke mulig",BBCBrit:"Løsning ikke mulig",BBCEarth:"Løsning ikke mulig",BBCWorldNews:"Løsning ikke mulig",BlueHustler:"Løsning ikke mulig",Boomerang:2,CartoonNetwork:1,CBSReality:"Løsning ikke mulig",CNN:2,DisneyChannel:1,DisneyJunior:2,Euronews:"Løsning ikke mulig",Eurosport1:2,Eurosport2:2,"ID-InvestegationDiscovery":2,Mezzo:"Løsning ikke mulig",MTV:2,MTV80s:"Løsning ikke mulig",MTV90s:"Løsning ikke mulig",MTVHits:"Løsning ikke mulig",NationalGeographicWild:2,NDR:0,"Nick jr.":2,Nickelodeon:1,NRK1:0,ZDF:0,SVT1:0,Folketinget:0,NRK2:0,"TV4 Sverige":0,SVT2:0,"TV2Norge":0,ProSieben:"Løsning ikke mulig","Rai 1":"Løsning ikke mulig",See:1,TLC:1,VH1:2,"V sport golf":2,"Viasat Explore":2,"Viasat History":2,"Viasat Nature":2,DiscoveryScience:"Løsning ikke mulig","ESC/ESC1":"Løsning ikke mulig","Extreme Sport":"Løsning ikke mulig","HRT-TV1":"Løsning ikke mulig",MTVClub:"Løsning ikke mulig",MTVLive:"Løsning ikke mulig",Polonia:"Løsning ikke mulig","Sport Live":0}];
    let stream=[{TV2PlayBasis:2,TV2PlayFavoritSport:2,"TV2PlayFavoritSport (Uden reklamer)":"Løsning ikke mulig","Disney+":"Løsning ikke mulig",HBOMax:"Løsning ikke mulig",NetflixStandard:"Løsning ikke mulig",NetflixPremium:"Løsning ikke mulig","NordiskFilm+":2,CMore:"Løsning ikke mulig",SkyShowtime:"Løsning ikke mulig","Discovery+underholdning":2,"Discovery+Sport":"Løsning ikke mulig","Viaplay (Film og Serier)":1,"Viaplay Total":2}];
    kanaler.sort();
    stream.sort();
    let SPL=0;
    let SPLstream=0;
            for (let kanal of kanaler){
                    for (let k of Object.keys(kanal)){
                        if(values.includes(k)){
                            if(kanal[k]=="Løsning ikke mulig"||SPL=="Løsning ikke mulig"){
                                SPL="Løsning ikke mulig";
                                if (kanal[k]=="Løsning ikke mulig"){
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
                            if(st[s]=="Løsning ikke mulig"){
                                if(streampris[0][s]=="Løsning ikke mulig"){
                                    SPL="Løsning ikke mulig";
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
        if(SPL=="Løsning ikke mulig"){
            return "Løsning ikke mulig pga.:<br>("+ikkem.join(", ")+")";
        }
        else{
            if(SPLstream==0){
                return pakkepris[SPL]+" kr." +pakke[SPL];
            }
            else{
                return SPLstream+pakkepris[SPL]+" kr. (inkl. tilkøb af "+streamlist.join(", ")+")"+"<br>"+pakkepris[SPL]+" kr. (ekskl. "+streamlist.join(", ")+")";
            }
    }
}

//Stofa Vælg Selv
let SVSfunc=function(){
    let ikkem=[];
    let streamlist=[];
    let kanaler=[{TV2:0,TV2Charlie:0,TV2Fri:1,TV2News:1,TV2Sport:2,TV2SportX:2,TV2Echo:1,TV3:0,TV3Max:2,"TV3 +":3,TV3Puls:0,TV3Sport:3,Kanal4:0,Kanal5:0,'6eren':1,Canal9:1,DiscoveryChannel:1,DK4:0,NationalGeographic:1,'3Sat':1,AlJazeera:1,Animalplanet:1,ARD:"Løsning ikke mulig",ARTE:1,BBCBrit:1,BBCEarth:1,BBCWorldNews:1,BlueHustler:1,Boomerang:1,CartoonNetwork:1,CBSReality:1,CNN:1,DisneyChannel:1,DisneyJunior:1,Euronews:1,Eurosport1:1,Eurosport2:2,"ID-InvestegationDiscovery":1,Mezzo:1,MTV:1,MTV80s:1,MTV90s:1,MTVHits:1,NationalGeographicWild:1,NDR:0,"Nick jr.":1,Nickelodeon:1,NRK1:0,ZDF:0,SVT1:0,Folketinget:0,NRK2:0,"TV4 Sverige":0,SVT2:0,"TV2Norge":0,ProSieben:1,"Rai 1":1,See:2,TLC:1,VH1:1,"V sport golf":1,"Viasat Explore":1,"Viasat History":1,"Viasat Nature":1,DiscoveryScience:1,"ESC/ESC1":1,"Extreme Sport":1,"HRT-TV1":1,MTVClub:1,MTVLive:1,Polonia:1,"Sport Live":0}];
    let stream=[{TV2PlayBasis:2,TV2PlayFavoritSport:8,"TV2PlayFavoritSport (Uden reklamer)":"Løsning ikke mulig","Disney+":"Løsning ikke mulig",HBOMax:4,NetflixStandard:"Løsning ikke mulig",NetflixPremium:"Løsning ikke mulig","NordiskFilm+":3,CMore:5,SkyShowtime:"Løsning ikke mulig","Discovery+underholdning":2,"Discovery+Sport":8,"Viaplay (Film og Serier)":6,"Viaplay Total":"Løsning ikke mulig"}];
    kanaler.sort();
    stream.sort();
    let SVS=0;
    let SVSstream=0;
    for (let kanal of kanaler){
        for (let k of Object.keys(kanal)){
            if(values.includes(k)){
                if(kanal[k]=="Løsning ikke mulig"||SVS=="Løsning ikke mulig"){
                    SVS="Løsning ikke mulig";
                    if (kanal[k]=="Løsning ikke mulig"){
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
                    if(st[s]=="Løsning ikke mulig"){
                        if(streampris[0][s]=="Løsning ikke mulig"){
                            SVS="Løsning ikke mulig";
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
        return "Løsning ikke mulig pga.:<br>("+ikkem.join(", ")+")";
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
            return priser[0]+SVSstream+" kr."+" (10 point)"+" ("+SVS+" point brugt)"+" (inkl. tilkøb af "+streamlist.join(", ")+")"+"<br>"+priser[0]+" kr. (ekskl. "+streamlist.join(", ")+")";
        }
        if (SVS<=20){
            return priser[1]+SVSstream+" kr."+" (20 point)"+" ("+SVS+" point brugt)"+" (inkl. tilkøb af "+streamlist.join(", ")+")"+"<br>"+priser[1]+" kr. (ekskl. "+streamlist.join(", ")+")";
        }
        if (SVS<=30){
            return priser[2]+SVSstream+" kr."+" (30 point)"+" ("+SVS+" point brugt)"+" (inkl. tilkøb af "+streamlist.join(", ")+")"+"<br>"+priser[2]+" kr. (ekskl. "+streamlist.join(", ")+")";
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
    let kanaler=[{TV2:3,TV2Charlie:2,TV2Fri:2,TV2News:2,TV2Sport:3,TV2SportX:3,TV2Echo:2,TV3:3,TV3Max:3,"TV3 +":4,TV3Puls:2,TV3Sport:3,Kanal4:"Løsning ikke mulig",Kanal5:"Løsning ikke mulig",'6eren':"Løsning ikke mulig",Canal9:"Løsning ikke mulig",DiscoveryChannel:"Løsning ikke mulig",DK4:1,NationalGeographic:1,'3Sat':3,AlJazeera:1,Animalplanet:"Løsning ikke mulig",ARD:0,ARTE:1,BBCBrit:1,BBCEarth:1,BBCWorldNews:1,BlueHustler:2,Boomerang:1,CartoonNetwork:1,CBSReality:1,CNN:1,DisneyChannel:1,DisneyJunior:1,Euronews:1,Eurosport1:"Løsning ikke mulig",Eurosport2:"Løsning ikke mulig","ID-InvestegationDiscovery":"Løsning ikke mulig",Mezzo:1,MTV:1,MTV80s:1,MTV90s:1,MTVHits:1,NationalGeographicWild:1,NDR:0,"Nick jr.":1,Nickelodeon:1,NRK1:0,ZDF:0,SVT1:0,Folketinget:0,NRK2:"Løsning ikke mulig","TV4 Sverige":0,SVT2:0,"TV2Norge":"Løsning ikke mulig",ProSieben:1,"Rai 1":1,See:3,TLC:"Løsning ikke mulig",VH1:1,"V sport golf":1,"Viasat Explore":1,"Viasat History":1,"Viasat Nature":1,DiscoveryScience:"Løsning ikke mulig","ESC/ESC1":"Løsning ikke mulig","Extreme Sport":"Løsning ikke mulig","HRT-TV1":"Løsning ikke mulig",MTVClub:"Løsning ikke mulig",MTVLive:"Løsning ikke mulig",Polonia:"Løsning ikke mulig","Sport Live":1}];
    let stream=[{TV2PlayBasis:19,TV2PlayFavoritSport:19,"TV2PlayFavoritSport (Uden reklamer)":19,"Disney+":7,HBOMax:7,NetflixStandard:11,NetflixPremium:15,"NordiskFilm+":4,CMore:9,SkyShowtime:6,"Discovery+underholdning":"Løsning ikke mulig","Discovery+Sport":"Løsning ikke mulig","Viaplay (Film og Serier)":10,"Viaplay Total":"Løsning ikke mulig"}];
    kanaler.sort();
    stream.sort();
    let YouP=0;
    let YouPstream=0;
        for (let kanal of kanaler){
            for (let k of Object.keys(kanal)){
                if(values.includes(k)){
                    if(kanal[k]=="Løsning ikke mulig"||YouP=="Løsning ikke mulig"){
                        YouP="Løsning ikke mulig";
                        if (kanal[k]=="Løsning ikke mulig"){
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
                        if(st[s]=="Løsning ikke mulig"){
                            if(streampris[0][s]=="Løsning ikke mulig"){
                                YouP="Løsning ikke mulig";
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
        return "Løsning ikke mulig pga.:<br>("+ikkem.join(", ")+")";
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
            return priser[0]+YouPstream+" kr."+" (10 point)"+" ("+YouP+" point brugt)"+" (inkl. tilkøb af "+streamlist.join(", ")+")"+"<br>"+priser[0]+" kr. (ekskl. "+streamlist.join(", ")+")";
        }
        if (YouP<=20){
            return priser[1]+YouPstream+" kr."+" (20 point)"+" ("+YouP+" point brugt)"+" (inkl. tilkøb af "+streamlist.join(", ")+")"+"<br>"+priser[1]+" kr. (ekskl. "+streamlist.join(", ")+")";
        }
        if (YouP<=30){
            return priser[2]+YouPstream+" kr."+" (30 point)"+" ("+YouP+" point brugt)"+" (inkl. tilkøb af "+streamlist.join(", ")+")"+"<br>"+priser[2]+" kr. (ekskl. "+streamlist.join(", ")+")";
        }
        if (YouP<=40){
            return priser[3]+YouPstream+" kr."+" (40 point)"+" ("+YouP+" point brugt)"+" (inkl. tilkøb af "+streamlist.join(", ")+")"+"<br>"+priser[3]+" kr. (ekskl. "+streamlist.join(", ")+")";
        }
        else{
            let p=(YouP-40)*10;
            let basepris=priser[3]+p;
            return basepris+YouPstream+" kr."+ " (40+ point)"+" ("+YouP+" point brugt)" +" (inkl. tilkøb af "+streamlist.join(", ")+")"+"<br>"+basepris+" kr. (ekskl. "+streamlist.join(", ")+")";
        }
    }
    
}

//Allente Stream TV: Basic=0,Standard=1,Premium=2
let AllStreamFunc=function(){
    let ikkem=[];
    let streamlist=[];
    let kanaler=[{TV2:0,TV2Charlie:0,TV2Fri:0,TV2News:0,TV2Sport:2,TV2SportX:2,TV2Echo:0,TV3:0,TV3Max:2,"TV3 +":0,TV3Puls:0,TV3Sport:2,Kanal4:0,Kanal5:0,'6eren':0,Canal9:2,DiscoveryChannel:1,DK4:0,NationalGeographic:1,'3Sat':"Løsning ikke mulig",AlJazeera:"Løsning ikke mulig",Animalplanet:1,ARD:"Løsning ikke mulig",ARTE:"Løsning ikke mulig",BBCBrit:1,BBCEarth:1,BBCWorldNews:1,BlueHustler:"Løsning ikke mulig",Boomerang:"Løsning ikke mulig",CartoonNetwork:"Løsning ikke mulig",CBSReality:"Løsning ikke mulig",CNN:"Løsning ikke mulig",DisneyChannel:1,DisneyJunior:1,Euronews:"Løsning ikke mulig",Eurosport1:2,Eurosport2:2,"ID-InvestegationDiscovery":1,Mezzo:"Løsning ikke mulig",MTV:"Løsning ikke mulig",MTV80s:"Løsning ikke mulig",MTV90s:"Løsning ikke mulig",MTVHits:"Løsning ikke mulig",NationalGeographicWild:1,NDR:"Løsning ikke mulig","Nick jr.":1,Nickelodeon:1,NRK1:"Løsning ikke mulig",ZDF:"Løsning ikke mulig",SVT1:"Løsning ikke mulig",Folketinget:"Løsning ikke mulig",NRK2:"Løsning ikke mulig","TV4 Sverige":"Løsning ikke mulig",SVT2:"Løsning ikke mulig","TV2Norge":"Løsning ikke mulig",ProSieben:"Løsning ikke mulig","Rai 1":"Løsning ikke mulig",See:1,TLC:1,VH1:"Løsning ikke mulig","V sport golf":"Løsning ikke mulig","Viasat Explore":1,"Viasat History":1,"Viasat Nature":1,DiscoveryScience:1,"ESC/ESC1":"Løsning ikke mulig","Extreme Sport":"Løsning ikke mulig","HRT-TV1":"Løsning ikke mulig",MTVClub:"Løsning ikke mulig",MTVLive:"Løsning ikke mulig",Polonia:"Løsning ikke mulig","Sport Live":2}];
    let stream=[{TV2PlayBasis:"Løsning ikke mulig",TV2PlayFavoritSport:"Løsning ikke mulig","TV2PlayFavoritSport (Uden reklamer)":"Løsning ikke mulig","Disney+":"Løsning ikke mulig",HBOMax:"Løsning ikke mulig",NetflixStandard:"Løsning ikke mulig",NetflixPremium:"Løsning ikke mulig","NordiskFilm+":"Løsning ikke mulig",CMore:"Løsning ikke mulig",SkyShowtime:"Løsning ikke mulig","Discovery+underholdning":"Løsning ikke mulig","Discovery+Sport":"Løsning ikke mulig","Viaplay (Film og Serier)":0,"Viaplay Total":2}];
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
                            if(kanal[k]=="Løsning ikke mulig"||AS=="Løsning ikke mulig"){
                                AS="Løsning ikke mulig";
                                if (kanal[k]=="Løsning ikke mulig"){
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
                            if(st[s]=="Løsning ikke mulig"||AS=="Løsning ikke mulig"){
                                if(streamtilvalgnavn.includes(s)){
                                    streamekstra=streamekstra+streamtilvalg[0][s];
                                    ekstrastreaming.push(s);
                                }
                                else{
                                    if (st[s]=="Løsning ikke mulig"){
                                        if(streampris[0][s]=="Løsning ikke mulig"){
                                            AS="Løsning ikke mulig";
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
        if(AS=="Løsning ikke mulig"){
            return "Løsning ikke mulig pga.:<br>("+ikkem.join(", ")+")";
        }
        else{
            if(ASstream==0){
                let prisAll=pakkepris[AS]+streamekstra;
                return prisAll+" kr." +pakke[AS]+ekstratekst;
            }
            else{
                let prisAll=pakkepris[AS]+streamekstra;
                return prisAll+ASstream+" kr."+pakke[AS]+" "+ekstratekst+" (inkl. tilkøb af "+streamlist.join(", ")+")"+"<br>"+prisAll+" kr."+" (ekskl. "+streamlist.join(", ")+")"
            }
    }
}

//Allente Parabol TV
let AllParaFunc=function(){
    let ikkem=[];
    let streamlist=[];
    let kanaler=[{TV2:0,TV2Charlie:0,TV2Fri:0,TV2News:0,TV2Sport:2,TV2SportX:2,TV2Echo:0,TV3:0,TV3Max:2,"TV3 +":0,TV3Puls:0,TV3Sport:2,Kanal4:0,Kanal5:0,'6eren':0,Canal9:2,DiscoveryChannel:1,DK4:0,NationalGeographic:1,'3Sat':"Løsning ikke mulig",AlJazeera:1,Animalplanet:1,ARD:"Løsning ikke mulig",ARTE:"Løsning ikke mulig",BBCBrit:1,BBCEarth:1,BBCWorldNews:1,BlueHustler:"Løsning ikke mulig",Boomerang:1,CartoonNetwork:1,CBSReality:"Løsning ikke mulig",CNN:1,DisneyChannel:1,DisneyJunior:1,Euronews:"Løsning ikke mulig",Eurosport1:2,Eurosport2:2,"ID-InvestegationDiscovery":1,Mezzo:"Løsning ikke mulig",MTV:1,MTV80s:1,MTV90s:"Løsning ikke mulig",MTVHits:"Løsning ikke mulig",NationalGeographicWild:1,NDR:"Løsning ikke mulig","Nick jr.":1,Nickelodeon:1,NRK1:0,ZDF:"Løsning ikke mulig",SVT1:0,Folketinget:"Løsning ikke mulig",NRK2:"Løsning ikke mulig","TV4 Sverige":0,SVT2:0,"TV2Norge":"Løsning ikke mulig",ProSieben:"Løsning ikke mulig","Rai 1":"Løsning ikke mulig",See:1,TLC:1,VH1:1,"V sport golf":"Løsning ikke mulig","Viasat Explore":1,"Viasat History":1,"Viasat Nature":1,DiscoveryScience:1,"ESC/ESC1":"Løsning ikke mulig","Extreme Sport":"Løsning ikke mulig","HRT-TV1":"Løsning ikke mulig",MTVClub:"Løsning ikke mulig",MTVLive:"Løsning ikke mulig",Polonia:"Løsning ikke mulig","Sport Live":2}];
    let stream=[{TV2PlayBasis:"Løsning ikke mulig",TV2PlayFavoritSport:"Løsning ikke mulig","TV2PlayFavoritSport (Uden reklamer)":"Løsning ikke mulig","Disney+":"Løsning ikke mulig",HBOMax:"Løsning ikke mulig",NetflixStandard:"Løsning ikke mulig",NetflixPremium:"Løsning ikke mulig","NordiskFilm+":"Løsning ikke mulig",CMore:"Løsning ikke mulig",SkyShowtime:1,"Discovery+underholdning":"Løsning ikke mulig","Discovery+Sport":"Løsning ikke mulig","Viaplay (Film og Serier)":0,"Viaplay Total":2}];
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
                            if(kanal[k]=="Løsning ikke mulig"||AP=="Løsning ikke mulig"){
                                AP="Løsning ikke mulig";
                                if (kanal[k]=="Løsning ikke mulig"){
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
                            if(st[s]=="Løsning ikke mulig"||AP=="Løsning ikke mulig"){
                                if(streamtilvalgnavn.includes(s)){
                                    streamekstra=streamekstra+streamtilvalg[0][s];
                                    ekstrastreaming.push(s);
                                }
                                else{
                                    if (st[s]=="Løsning ikke mulig"){
                                        if(streampris[0][s]=="Løsning ikke mulig"){
                                            AP="Løsning ikke mulig";
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
        if(AP=="Løsning ikke mulig"){
            return "Løsning ikke mulig pga.:<br>("+ikkem.join(", ")+")";
        }
        else{
            if(APstream==0){
                let prisAll=pakkepris[AP]+streamekstra;
                return prisAll+" kr." +pakke[AP]+ekstratekst;
            }
            else{
                let prisAll=pakkepris[AP]+streamekstra;
                return prisAll+APstream+" kr."+pakke[AP]+" "+ekstratekst+" (inkl. tilkøb af "+streamlist.join(", ")+")"+"<br>"+prisAll+" kr."+" (ekskl. "+streamlist.join(", ")+")"
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
    
            pris.push("Norlys Vælg Frit: ".bold()+NVF);
            pris.push("<br>");
            pris.push("<br>"+"Norlys Vælg 8: ".bold()+NVO);
            pris.push("<br>");
            pris.push("<br>"+"Norlys Vælg Alt: ".bold()+NVA);
            pris.push("<br>");
            pris.push("<br>"+"Stofa pakkeløsning: ".bold()+SPL);
            pris.push("<br>");
            pris.push("<br>"+"Stofa Vælg Selv: ".bold()+SVS);
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

let streamingpriser=[{"C more":99,"Discovery+ Underholdning (m. reklamer)":49,"Discovery+ Underholdning":79,"Discovery+ Underholdning + Live":99,"Discovery+ Sport":129,"Disney+ (Årspris: 790 kr.)":79,"HBO Max (Årspris: 599 kr.)":79,"Netflix Basis HD 1 enhed": 79,"Netflix Standard":114,"Netflix Premium":149,"Nordisk Film+":49,"SkyShowtime":69,"TV2 Play Basis (m. reklamer)":49,"TV2 Play Basis (u. reklamer)":79,"TV2 Play Favorit (m. reklamer)":129,"TV2 Play Favorit (u. reklamer)": 159,"TV2 Play Favorit+Sport (m. reklamer)":189,"TV2 Play Favorit+Sport (u. reklamer)":219,"Viaplay (Film og Serier)":129,"Viaplay Total": 449}];
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
            swal.fire({title:"Priser på streaming<hr>",html:"<div class=align-left id=streamingpris>"+"<div>"+firstHalf.join("")+"</div>"+"<div>"+secondHalf.join("")+"</div>"+"</div>",width:"1000px"});
            });

