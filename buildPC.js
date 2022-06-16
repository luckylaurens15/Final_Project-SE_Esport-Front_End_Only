var index = 2;



function next(){
    console.log(index);
    if (index == 2){
        document.getElementById("stages").innerHTML = 
        `<div class="display" style="height: 900px;" id="stages">
        <p class="title"> Choose Your Motherboard</p>
        <ul>
            <li >
                <a href="" class="menu">
                    <img src="./Images/dummy.png" alt="" style="width: 120px;">
                    <div class="text">
                        <p>Asus ROG Maximus Z690 Extreme</p>
                        <p>LGA1700, Z690, DDR5, USB3.2, SATA3.</p>
                        <p class="price">Rp. 17.200.000,-</p>
                    </div>
                </a>   
            </li>
            <li >
                <a href="" class="menu">
                    <img src="./Images/dummy.png" alt="" style="width: 120px;">
                    <div class="text">
                        <p>ASRock Z690 Extreme</p>
                        <p>LGA1700, Z690, DDR4, USB3.2, SATA3.</p>
                        <p class="price">Rp. 4.500.000,-</p>
                    </div>
                </a>   
            </li>
            <li >
                <a href="" class="menu">
                    <img src="./Images/dummy.png" alt="" style="width: 120px;">
                    <div class="text">
                        <p>ASRock Z590 Extreme </p>
                        <p>LGA1200, Z590, DDR4, USB3.2, SATA3.</p>
                        <p class="price">Rp. 3.450.000,-</p>
                    </div>
                </a>   
            </li>
            <li >
                <a href="" class="menu">
                    <img src="./Images/dummy.png" alt="" style="width: 120px;">
                    <div class="text">
                        <p>ASRock B660 Steel Legend </p>
                        <p>LGA1700, B660, DDR4, USB3.2, SATA3.</p>
                        <p class="price">Rp. 2.580.000,-</p>
                    </div>
                </a>   
            </li>
            <li >
                <a href="" class="menu">
                    <img src="./Images/dummy.png" alt="" style="width: 120px;">
                    <div class="text">
                        <p>Asus ROG Strix Z690-F Gaming WIFI </p>
                        <p>LGA1700, Z690, DDR5, USB3.2, SATA3.</p>
                        <p class="price">Rp. 6.480.000,-</p>
                    </div>
                </a>   
            </li>
        </ul>
    </div>
        `;
    }
    else if (index == 3){
        document.getElementById("stages").innerHTML = 
        `<div class="display" style="height: 900px;" id="stages">
        <p class="title"> Choose Your VGA</p>
        <ul>
            <li >
                <a href="" class="menu">
                    <img src="./Images/dummy.png" alt="" style="width: 120px;">
                    <div class="text">
                        <p>GALAX Geforce RTX 3090 Ti 24GB DDR6X EX Gamer (1-Click OC)</p>
                        <p>Triple Fan - RGB Effect - Garansi 2 Thn.</p>
                        <p class="price">Rp. 35.900.000,-</p>
                    </div>
                </a>   
            </li>
            <li >
                <a href="" class="menu">
                    <img src="./Images/dummy.png" alt="" style="width: 120px;">
                    <div class="text">
                        <p>GALAX Geforce RTX 3070 8GB DDR6 (1-Click OC)</p>
                        <p>DUAL FAN - LHR Version - Garansi 2 Thn.</p>
                        <p class="price">Rp. 11.200.000,-</p>
                    </div>
                </a>   
            </li>
            <li >
                <a href="" class="menu">
                    <img src="./Images/dummy.png" alt="" style="width: 120px;">
                    <div class="text">
                        <p>GALAX Geforce RTX 2060 SUPER 8GB DDR6 (1-Click OC) V2</p>
                        <p>DUAL FAN - Garansi 2 Thn.</p>
                        <p class="price">Rp. 7.950.000,-</p>
                    </div>
                </a>   
            </li>
            <li >
                <a href="" class="menu">
                    <img src="./Images/dummy.png" alt="" style="width: 120px;">
                    <div class="text">
                        <p>XFX Radeon RX 6900 XT RGB EKWB Waterblock 16GB DDR6 SPEEDSTER ZERO</p>
                        <p>RX-69XTAWBD9.</p>
                        <p class="price">Rp. 33.825.000,-</p>
                    </div>
                </a>   
            </li>
            <li >
                <a href="" class="menu">
                    <img src="./Images/dummy.png" alt="" style="width: 120px;">
                    <div class="text">
                        <p>ASRock Radeon RX 6500 XT 4GB DDR6</p>
                        <p>Phantom Gaming D 4G OC.</p>
                        <p class="price">Rp. 3.570.000,-</p>
                    </div>
                </a>   
            </li>
        </ul>
    </div>
        `;
    }
    else if (index == 4){
        document.getElementById("stages").innerHTML = 
        `<div class="display" style="height: 900px;" id="stages">
        <p class="title"> Choose Your Hard Drive</p>
        <ul>
            <li >
                <a href="" class="menu">
                    <img src="./Images/dummy.png" alt="" style="width: 120px;">
                    <div class="text">
                        <p>WDC 8TB SATA3 256MB</p>
                        <p>Red Plus - WD80EFBX - Garansi 3 Th (For NAS).</p>
                        <p class="price">Rp. 3.220.000,-</p>
                    </div>
                </a>   
            </li>
            <li >
                <a href="" class="menu">
                    <img src="./Images/dummy.png" alt="" style="width: 120px;">
                    <div class="text">
                        <p>Seagate 500GB SATA2</p>
                        <p>Used & Garansi 1 Th.</p>
                        <p class="price">Rp. 165.000,-</p>
                    </div>
                </a>   
            </li>
            <li >
                <a href="" class="menu">
                    <img src="./Images/dummy.png" alt="" style="width: 120px;">
                    <div class="text">
                        <p>Seagate 1TB SATA3</p>
                        <p>BarraCuda Series.</p>
                        <p class="price">Rp. 625.000,-</p>
                    </div>
                </a>   
            </li>
            <li >
                <a href="" class="menu">
                    <img src="./Images/dummy.png" alt="" style="width: 120px;">
                    <div class="text">
                        <p>Seagate 4TB SATA3</p>
                        <p>5400 RPM - BarraCuda Series.</p>
                        <p class="price">Rp. 1.440.000,-</p>
                    </div>
                </a>   
            </li>
            <li >
                <a href="" class="menu">
                    <img src="./Images/dummy.png" alt="" style="width: 120px;">
                    <div class="text">
                        <p>Seagate Surveillance 4TB</p>
                        <p>SkyHawk Series.</p>
                        <p class="price">Rp. 1.435.000,-</p>
                    </div>
                </a>   
            </li>
        </ul>
    </div>
        `;
    }
    else if (index == 5){
        document.getElementById("stages").innerHTML = 
        `<div class="display" style="height: 900px;" id="stages">
        <p class="title"> Choose Your SSD</p>
        <ul>
            <li >
                <a href="" class="menu">
                    <img src="./Images/dummy.png" alt="" style="width: 120px;">
                    <div class="text">
                        <p>KLEVV SSD CRAS C920 2TB M.2 2280 NVMe PCle Gen4 x4</p>
                        <p>K02TBM2SP0-C92 - R7000MB/s W6850MB/s.</p>
                        <p class="price">Rp. 5.150.000,-</p>
                    </div>
                </a>   
            </li>
            <li >
                <a href="" class="menu">
                    <img src="./Images/dummy.png" alt="" style="width: 120px;">
                    <div class="text">
                        <p>K01TBM2SP0-C72 - R3400MB/s W3100MB/s</p>
                        <p>K01TBM2SP0-C72.</p>
                        <p class="price">Rp. 1.860.000,-</p>
                    </div>
                </a>   
            </li>
            <li >
                <a href="" class="menu">
                    <img src="./Images/dummy.png" alt="" style="width: 120px;">
                    <div class="text">
                        <p>KLEVV SSD NEO N400 480GB</p>
                        <p>K480GSSDS3-N40 R:500MB/s.</p>
                        <p class="price">Rp. 680.000,-</p>
                    </div>
                </a>   
            </li>
            <li >
                <a href="" class="menu">
                    <img src="./Images/dummy.png" alt="" style="width: 120px;">
                    <div class="text">
                        <p>ADATA SSD SU650 M.2 2280 240GB SATA III</p>
                        <p>( R/W Up to 550 / 510MB/s ) ASU650NS38-240GT-C.</p>
                        <p class="price">Rp. 450.000,-</p>
                    </div>
                </a>   
            </li>
            <li >
                <a href="" class="menu">
                    <img src="./Images/dummy.png" alt="" style="width: 120px;">
                    <div class="text">
                        <p>ADATA SSD SU650 M.2 2280 480GB SATA III</p>
                        <p>( R/W Up to 550 / 510MB/s ) ASU650NS38-480GT-C.</p>
                        <p class="price">Rp. 757.000,-</p>
                    </div>
                </a>   
            </li>
        </ul>
    </div>
        `;
    }
    else if (index == 6){
        document.getElementById("stages").innerHTML = 
        `<div class="display" style="height: 900px;" id="stages">
        <p class="title"> Choose Your RAM</p>
        <ul>
            <li >
                <a href="" class="menu">
                    <img src="./Images/dummy.png" alt="" style="width: 120px;">
                    <div class="text">
                        <p>KLEVV DDR5 Value Series PC38400 4800Mhz 32GB</p>
                        <p>(2x16GB) - KD5AGUA80-48G400D.</p>
                        <p class="price">Rp. 3.550.000,-</p>
                    </div>
                </a>   
            </li>
            <li >
                <a href="" class="menu">
                    <img src="./Images/dummy.png" alt="" style="width: 120px;">
                    <div class="text">
                        <p>KLEVV DDR5 Value Series PC38400 4800Mhz 16GB </p>
                        <p>(1x16GB) KD5AGUA80-48G400A.</p>
                        <p class="price">Rp. 1.800.000,-</p>
                    </div>
                </a>   
            </li>
            <li >
                <a href="" class="menu">
                    <img src="./Images/dummy.png" alt="" style="width: 120px;">
                    <div class="text">
                        <p>KLEVV DDR4 Value Series PC21300 2666MHZ 8GB</p>
                        <p>(1x8GB) - COMPATIBLE WITH INTEL & AMD RYZEN.</p>
                        <p class="price">Rp. 490.000,-</p>
                    </div>
                </a>   
            </li>
            <li >
                <a href="" class="menu">
                    <img src="./Images/dummy.png" alt="" style="width: 120px;">
                    <div class="text">
                        <p>KLEVV DDR4 Value Series PC21300 2666MHZ 4GB</p>
                        <p>(1x4GB) - COMPATIBLE WITH INTEL & AMD RYZEN.</p>
                        <p class="price">Rp. 300.000,-</p>
                    </div>
                </a>   
            </li>
            <li >
            <a href="" class="menu">
                <img src="./Images/dummy.png" alt="" style="width: 120px;">
                <div class="text">
                    <p>GEIL DDR4 EVO X II RGB LED PC25600 Dual Channel 32GB</p>
                    <p>(2x16GB) GAEXSY432GB3200C16BDC - Cableless RGB Illumination Design (Support AMD & INTEL) .</p>
                    <p class="price">Rp. 2.200.000,-</p>
                </div>
            </a>   
        </li>
        </ul>
    </div>
        `;
    }
    else if (index == 7){
        document.getElementById("stages").innerHTML = 
        `<div class="display" style="height: 900px;" id="stages">
        <p class="title"> Choose Your Monitor</p>
        <ul>
            <li >
                <a href="" class="menu">
                    <img src="./Images/dummy.png" alt="" style="width: 120px;">
                    <div class="text">
                        <p>Acer 23.8" Nitro VG241Y X Gaming Monitor 270Hz</p>
                        <p>270Hz 23.8".</p>
                        <p class="price">Rp. 4.495.000,-</p>
                    </div>
                </a>   
            </li>
            <li >
                <a href="" class="menu">
                    <img src="./Images/dummy.png" alt="" style="width: 120px;">
                    <div class="text">
                        <p>GALAX VIVANCE-01 27" QHD IPS Gaming Monitor 165Hz with G-SYNC</p>
                        <p>Response Time 1ms.</p>
                        <p class="price">Rp. 5.250.000,-</p>
                    </div>
                </a>   
            </li>
            <li >
                <a href="" class="menu">
                    <img src="./Images/dummy.png" alt="" style="width: 120px;">
                    <div class="text">
                        <p>ACER 22" SA220Q A Frameless Gaming Monitor</p>
                        <p>Frameless 22".</p>
                        <p class="price">Rp. 1.990.000,-</p>
                    </div>
                </a>   
            </li>
            <li >
                <a href="" class="menu">
                    <img src="./Images/dummy.png" alt="" style="width: 120px;">
                    <div class="text">
                        <p>AOC 21.5" 22B2HN FHD 75Hz Ultra Slim</p>
                        <p>21.5" FHD 75Hz Ultra Slim.</p>
                        <p class="price">Rp. 1.750.000,-</p>
                    </div>
                </a>   
            </li>
            <li >
                <a href="" class="menu">
                    <img src="./Images/dummy.png" alt="" style="width: 120px;">
                    <div class="text">
                        <p>ACER 19.5" K202HQL LED Wide Screen</p>
                        <p>19.5" LED Wide Screen.</p>
                        <p class="price">Rp. 1.491.000,-</p>
                    </div>
                </a>   
            </li>
        </ul>
    </div>
        `;
    }
    else if (index == 8){
        document.getElementById("stages").innerHTML = 
        `<div class="display" style="height: 900px;" id="stages">
        <p class="title"> Choose Your Casing</p>
        <ul>
            <li >
                <a href="" class="menu">
                    <img src="./Images/dummy.png" alt="" style="width: 120px;">
                    <div class="text">
                        <p>PRIME P-[N] WHITE</p>
                        <p>ALUMUNIUM GAMING CASE - UNIQUE DESIGN.</p>
                        <p class="price">Rp. 2.375.000,-</p>
                    </div>
                </a>   
            </li>
            <li >
                <a href="" class="menu">
                    <img src="./Images/dummy.png" alt="" style="width: 120px;">
                    <div class="text">
                        <p>PRIME A-[F]</p>
                        <p> ALUMUNIUM GAMING CASE - LEFT TEMPERED GLASS - Open System Case.</p>
                        <p class="price">Rp. 1.970.000,-</p>
                    </div>
                </a>   
            </li>
            <li >
                <a href="" class="menu">
                    <img src="./Images/dummy.png" alt="" style="width: 120px;">
                    <div class="text">
                        <p>LIAN LI ODYSSEY X BLACK</p>
                        <p>HIGH PREMIUM ALUMUNIUM CRAFTED CHASSIS - THREE MODES TRANSFORM.</p>
                        <p class="price">Rp. 7.575.000,-</p>
                    </div>
                </a>   
            </li>
            <li >
                <a href="" class="menu">
                    <img src="./Images/dummy.png" alt="" style="width: 120px;">
                    <div class="text">
                        <p>LIAN LI PC-O11 DYNAMIC XL (ROG)</p>
                        <p>BLACK - TEMPERED GLASS FRONT & LEFT.</p>
                        <p class="price">Rp. 3.185.000,-</p>
                    </div>
                </a>   
            </li>
            <li >
            <a href="" class="menu">
                <img src="./Images/dummy.png" alt="" style="width: 120px;">
                <div class="text">
                    <p>LIAN LI LANCOOL II</p>
                    <p>BLACK - STEEL SHROUD PANEL - TEMPERED GLASS - FRONT RGB LIGHTING.</p>
                    <p class="price">Rp. 1.515.000,-</p>
                </div>
            </a>   
        </li>
        </ul>
    </div>
        `;
    }
    else if (index == 9){
        document.getElementById("stages").innerHTML = 
        `<div class="display" style="height: 1200px;" id="stages">
        <p class="title"> Choose Your PSU</p>
        <ul>
            <li >
                <a href="" class="menu">
                    <img src="./Images/dummy.png" alt="" style="width: 120px;">
                    <div class="text">
                        <p>ADATA XPG CORE REACTOR 650G</p>
                        <p>650W Full Modular 80+ Gold Certified - Japanese Capacitors - 10 Years Warranty.</p>
                        <p class="price">Rp. 1.650.000,-</p>
                    </div>
                </a>   
            </li>
            <li >
                <a href="" class="menu">
                    <img src="./Images/dummy.png" alt="" style="width: 120px;">
                    <div class="text">
                        <p>1STPLAYER Gaming PSU AR 650W</p>
                        <p>PS-650AR (80Plus GOLD) - 3 Years Warranty Replacement.</p>
                        <p class="price">Rp. 989.000,-</p>
                    </div>
                </a>   
            </li>
            <li >
                <a href="" class="menu">
                    <img src="./Images/dummy.png" alt="" style="width: 120px;">
                    <div class="text">
                        <p>1STPLAYER Gaming PSU DK5.0 500W Full Modular</p>
                        <p>PS-500AX(BM) (80Plus Bronze) - 3 Years Warranty Replacement.</p>
                        <p class="price">Rp. 696.000,-</p>
                    </div>
                </a>   
            </li>
            <li >
                <a href="" class="menu">
                    <img src="./Images/dummy.png" alt="" style="width: 120px;">
                    <div class="text">
                        <p>Antec ATOM B650</p>
                        <p>650W 80+ Bronze Certified - Flat Cable - 3 Years Warranty Replacement .</p>
                        <p class="price">Rp. 696.000,-</p>
                    </div>
                </a>   
            </li>
            <li >
                <a href="" class="menu">
                    <img src="./Images/dummy.png" alt="" style="width: 120px;">
                    <div class="text">
                        <p>Antec ATOM B550</p>
                        <p>550W 80+ Bronze Certified - Flat Cable - 3 Years Warranty Replacement.</p>
                        <p class="price">Rp. 595.000,-</p>
                    </div>
                </a>   
            </li>
        </ul>
    </div>
        `;
    }
    else if (index == 10){
        document.getElementById("stages").innerHTML = 
        `<div class="display" style="height: 1200px;" id="stages">
        <p class="title"> Choose Your Cooler</p>
        <ul>
            <li >
                <a href="" class="menu">
                    <img src="./Images/dummy.png" alt="" style="width: 120px;">
                    <div class="text">
                        <p>Antec Symphony 360 ARGB WHITE Liquid Cooler</p>
                        <p>Mirror ARGB Lighting Pump Head with ARGB PWM Fan.</p>
                        <p class="price">Rp. 1.490.000,-</p>
                    </div>
                </a>   
            </li>
            <li >
                <a href="" class="menu">
                    <img src="./Images/dummy.png" alt="" style="width: 120px;">
                    <div class="text">
                        <p>Antec Neptune 120 ARGB</p>
                        <p>120mm AIO ARGB LIQUID CPU COOLER.</p>
                        <p class="price">Rp. 1.060.000,-</p>
                    </div>
                </a>   
            </li>
            <li >
                <a href="" class="menu">
                    <img src="./Images/dummy.png" alt="" style="width: 120px;">
                    <div class="text">
                        <p>Antec A400 RGB - 120mm 256COLOR RGB</p>
                        <p>4 Pure Copper Heatpipe - All Intel & AMD Socket (Except TR4) - Support LGA 1700.</p>
                        <p class="price">Rp. 454.000,-</p>
                    </div>
                </a>   
            </li>
            <li >
                <a href="" class="menu">
                    <img src="./Images/dummy.png" alt="" style="width: 120px;">
                    <div class="text">
                        <p>CUBE GAMING STORM</p>
                        <p>CUBE GAMING STORM.</p>
                        <p class="price">Rp. 374.000,-</p>
                    </div>
                </a>   
            </li>
            <li >
                <a href="" class="menu">
                    <img src="./Images/dummy.png" alt="" style="width: 120px;">
                    <div class="text">
                        <p>CUBE GAMING SHARPEN</p>
                        <p>ARGB Air Cooler - for All Intel Socket & AMD Socket - Support LGA 1700 .</p>
                        <p class="price">Rp. 353.000,-</p>
                    </div>
                </a>   
            </li>
            <li >
                <a href="" class="menu">
                    <img src="./Images/dummy.png" alt="" style="width: 120px;">
                    <div class="text">
                        <p>CRYORIG H5 Universal</p>
                        <p> Middle Range CPU Heatsink With XT140 (LGA2011/2011v3/1366/115x/775,AM2/AM2+/AM3/AM3+/FM1/FM2/FM2+).</p>
                        <p class="price">Rp. 599.000,-</p>
                    </div>
                </a>   
            </li>
        </ul>
    </div>
        `;
    }
    index++;
}