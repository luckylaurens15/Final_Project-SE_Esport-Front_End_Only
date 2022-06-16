var index = 2;



function next(){
    console.log("test");
    if (index == 2){
        document.getElementById("stages").innerHTML = 
        `<div class="display" style="height: 700px;" id="stages">
        <p class="title"> Choose Your Motherboard</p>
        <ul>
            <li >
                <a href="" class="menu">
                    <img src="./Images/dummy.png" alt="" style="width: 120px;">
                    <div class="text">
                        <p>Motherboard 1</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet nam odit mollitia doloribus repudiandae delectus aspernatur, asperiores officia tempore labore id vitae sint error nobis aliquam repellendus sunt quae dignissimos.</p>
                        <p class="price">Rp. 5.000.000,-</p>
                    </div>
                </a>   
            </li>
            <li >
                <a href="" class="menu">
                    <img src="./Images/dummy.png" alt="" style="width: 120px;">
                    <div class="text">
                        <p>Motherboard 1</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet nam odit mollitia doloribus repudiandae delectus aspernatur, asperiores officia tempore labore id vitae sint error nobis aliquam repellendus sunt quae dignissimos.</p>
                        <p class="price">Rp. 5.000.000,-</p>
                    </div>
                </a>   
            </li>
            <li >
                <a href="" class="menu">
                    <img src="./Images/dummy.png" alt="" style="width: 120px;">
                    <div class="text">
                        <p>Motherboard 1</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet nam odit mollitia doloribus repudiandae delectus aspernatur, asperiores officia tempore labore id vitae sint error nobis aliquam repellendus sunt quae dignissimos.</p>
                        <p class="price">Rp. 5.000.000,-</p>
                    </div>
                </a>   
            </li>
            <li >
                <a href="" class="menu">
                    <img src="./Images/dummy.png" alt="" style="width: 120px;">
                    <div class="text">
                        <p>Motherboard 1</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet nam odit mollitia doloribus repudiandae delectus aspernatur, asperiores officia tempore labore id vitae sint error nobis aliquam repellendus sunt quae dignissimos.</p>
                        <p class="price">Rp. 5.000.000,-</p>
                    </div>
                </a>   
            </li>
        </ul>
    </div>
        `;
    }
    else if (index == 3){
        document.getElementById("stages").innerHTML = 
        `<div class="display" style="height: 700px;" id="stages">
        <p class="title"> Choose Your VGA</p>
        <ul>
            <li >
                <a href="" class="menu">
                    <img src="./Images/dummy.png" alt="" style="width: 120px;">
                    <div class="text">
                        <p>VGA 1</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet nam odit mollitia doloribus repudiandae delectus aspernatur, asperiores officia tempore labore id vitae sint error nobis aliquam repellendus sunt quae dignissimos.</p>
                        <p class="price">Rp. 5.000.000,-</p>
                    </div>
                </a>   
            </li>
            <li >
                <a href="" class="menu">
                    <img src="./Images/dummy.png" alt="" style="width: 120px;">
                    <div class="text">
                        <p>VGA 1</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet nam odit mollitia doloribus repudiandae delectus aspernatur, asperiores officia tempore labore id vitae sint error nobis aliquam repellendus sunt quae dignissimos.</p>
                        <p class="price">Rp. 5.000.000,-</p>
                    </div>
                </a>   
            </li>
            <li >
                <a href="" class="menu">
                    <img src="./Images/dummy.png" alt="" style="width: 120px;">
                    <div class="text">
                        <p>VGA 1</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet nam odit mollitia doloribus repudiandae delectus aspernatur, asperiores officia tempore labore id vitae sint error nobis aliquam repellendus sunt quae dignissimos.</p>
                        <p class="price">Rp. 5.000.000,-</p>
                    </div>
                </a>   
            </li>
            <li >
                <a href="" class="menu">
                    <img src="./Images/dummy.png" alt="" style="width: 120px;">
                    <div class="text">
                        <p>VGA 1</p>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet nam odit mollitia doloribus repudiandae delectus aspernatur, asperiores officia tempore labore id vitae sint error nobis aliquam repellendus sunt quae dignissimos.</p>
                        <p class="price">Rp. 5.000.000,-</p>
                    </div>
                </a>   
            </li>
        </ul>
    </div>
        `;
    }
    next+=1;
}