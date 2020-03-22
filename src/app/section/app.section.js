/*  𝕨𝕨𝕨.𝔹𝕠𝕜𝕠𝕟𝕫𝕚.𝕔𝕠𝕞  𝖞𝖉𝖊𝖓𝖌𝖆 𝕿𝖚𝖛𝖚𝖒𝖇𝖚   ★☆♨♫✈❤ 
    //  ★   =   début de l'information
    //  ☆   =   fin de l'information
    //  ♨   =   Code de l'information premier letre du fichier et dernier lettre du fichier suivi du numéro du commentaire.
    //  ♫   = connexion css all suivi du nom du fichier
    //  ☹☹ Double appel du fichier 
    //  ✈  = ★♨=ls0003☹☹♨=ap012  app.links et app.ph ★♨=ls0003☹☹  ♨=ap012
    //  ❥ = le fichier ne pas au même emplacement que l'appelant /!\
    𝕨𝕨𝕨.𝔹𝕠𝕜𝕠𝕟𝕫𝕚.𝕔𝕠𝕞  𝖞𝖉𝖊𝖓𝖌𝖆 𝕿𝖚𝖛𝖚𝖒𝖇𝖚   ★☆♨♫✈❤ */
    var section_text1 = "Bar à tresse, votre salon de coiffure à Lille";
    var section_text2 = "Services";     
    
    //premier block1
    var section_block1_1 = "hair"; 
    var section_block1_2 = "SALON";       
    // fin du premier block       
   //premier block1
    var section_block2_1 = "beauty"; 
    var section_block2_2 = "COIFFURE";  
    var image1 ="http://bokonzi.com/bokonzi_frame/sallon/coiffure/01.gif";
    var image2="http://bokonzi.com/bokonzi_frame/sallon/coiffure/02.gif";
    var image3 ="http://bokonzi.com/bokonzi_frame/sallon/coiffure/IMG-20190720-WA0002.jpg" ;      
    // fin du premier block
    //premier block1
    var section_block3_1 = "wellness"; 
    var section_block3_2 = "ONGLES"; 
    var voirplus = "Voir plus" ; 
    // fin du premier block
    // debut de la creation du header0  
    var section0 = "section0";
    var section0_1 = "section0_1";
    section0_1_id = new IdentificationHtml("h1",section0_1,section0);
    section0_1_id.set_attribute("class","section1");
// fin  creation des element du header0
//***************************************************************************
// debut de la creation du header1
    var section1 = "section1";
    var section1_1 = "section1_1";
    section1_1_id = new IdentificationHtml("h1",section1_1,section1);
    section1_1_id.set_text(section_text2);
    section1_1_id.set_attribute("class","section2");
    

// fin  creation des element du header1
//***************************************************************************
// debut de la creation du header2
    var section2 =       "section2";     
    var section2_1 =     "section2_1";
    var section2_1_1 =   "section2_1_1";
    var section2_1_1_1 = "section2_1_1_1";
    var section2_1_1_2 = "section2_1_1_2";
    var section2_1_1_3 = "section2_1_1_3";
    var section2_1_1_3 = "section2_1_1_4";

       
    var section3_1 =     "section3_1";
    var section3_1_1 =   "section3_1_1";
    var section3_1_1_1 = "section3_1_1_1";
    var section3_1_1_2 = "section3_1_1_2";
    var section3_1_1_3 = "section3_1_1_3";
    var section3_1_1_4 = "section3_1_1_4";

    var section4_1 =     "section4_1";
    var section4_1_1 =   "section4_1_1";
    var section4_1_1_1 = "section4_1_1_1";
    var section4_1_1_2 = "section4_1_1_2";
    var section4_1_1_3 = "section4_1_1_3";
    var section4_1_1_4 = "section4_1_1_4";


    section2_1_id = new IdentificationHtml("div",section2_1,section2);              
    section2_1_1_id = new IdentificationHtml("div",section2_1_1,section2_1);
    section2_1_1_id.set_attribute("class","block");
    section2_1_1_1_id = new IdentificationHtml("img",section2_1_1_1,section2_1_1);
    section2_1_1_2_id = new IdentificationHtml("h1",section2_1_1_2,section2_1_1);
    section2_1_1_2_id.set_attribute("class","legende text-align-center");
    section2_1_1_2_id.set_text(section_block1_1);
    section2_1_1_3_id = new IdentificationHtml("h1",section2_1_1_3,section2_1_1);
    section2_1_1_3_id.set_attribute("class","salon text-align-center");
    section2_1_1_3_id.set_text(section_block1_2);
    section2_1_1_4_id = new IdentificationHtml("h1",section2_1_1_4,section2_1_1);
    section2_1_1_4_id.set_attribute("class","lmor text-align-center");
    section2_1_1_4_id.set_text(voirplus);
    section2_1_1_1_id.set_attribute("src",image1) ;
    section2_1_1_1_id.set_attribute("class","width-200"); 

    section3_1_id = new IdentificationHtml("div",section3_1,section2);             
    section3_1_1_id = new IdentificationHtml("div",section3_1_1,section3_1);
    section3_1_1_id.set_attribute("class","block");
    section3_1_1_1_id = new IdentificationHtml("img",section3_1_1_1,section3_1_1);
    section3_1_1_2_id = new IdentificationHtml("h1",section3_1_1_2,section3_1_1);
    section3_1_1_2_id.set_attribute("class","legende text-align-center");
    section3_1_1_2_id.set_text(section_block2_1 );
    section3_1_1_3_id = new IdentificationHtml("h1",section3_1_1_3,section3_1_1);
    section3_1_1_3_id.set_attribute("class","salon text-align-center");
    section3_1_1_3_id.set_text(section_block2_2);
    section3_1_1_4_id = new IdentificationHtml("h1",section3_1_1_4,section3_1_1);
    section3_1_1_4_id.set_text(voirplus) ;
    section3_1_1_4_id.set_attribute("class","lmor text-align-center"); 
    section3_1_1_1_id.set_attribute("src",image2) ;
    section3_1_1_1_id.set_attribute("class","width-200") ;
    section4_1_id = new IdentificationHtml("div",section4_1,section2);              
    section4_1_1_id = new IdentificationHtml("div",section4_1_1,section4_1);
    section4_1_1_id.set_attribute("class","block");
    section4_1_1_1_id = new IdentificationHtml("img",section4_1_1_1,section4_1_1);
    section4_1_1_2_id = new IdentificationHtml("h1",section4_1_1_2,section4_1_1);
    section4_1_1_2_id.set_attribute("class","legende text-align-center");
    section4_1_1_2_id.set_text(section_block3_1);
    section4_1_1_4_id = new IdentificationHtml("h1",section4_1_1_3,section4_1_1);
    section4_1_1_4_id.set_attribute("class","salon text-align-center");
    section4_1_1_4_id.set_text(section_block3_2);
    section4_1_1_4_id = new IdentificationHtml("h1",section4_1_1_4,section4_1_1);
    section4_1_1_4_id.set_text(voirplus) ;
    section4_1_1_4_id.set_attribute("class","lmor text-align-center"); 
    section4_1_1_1_id.set_attribute("src",image3) ;
    section4_1_1_1_id.set_attribute("class","width-200") ;
    document.getElementById("section2").className="duflex" ; 
//******************************************************************************* 