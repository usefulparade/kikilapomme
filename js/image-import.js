
let path = "./assets/pictures/"
let drawingsPath = "./assets/drawings/"
let notDrawingsPath = "./assets/notdrawings/"

let images = [
    "window.png",
    "atthemuseum.jpg",
    "blingbling.jpg",
    "gargoyleatthemuseum.jpg",
    "grocerylady.jpg",
    "grocerylady2.jpg",
    "handandpainting.jpg",
    "hayesburger.jpg",
    "horseparty.jpg",
    "hoursofoperation.jpg",
    "illustratedfilmshot.jpg",
    "peopleinmotion.jpg",
    "posterinthewind.png",
    "ramennight.jpg",
    "warpedflower.png",
    "wiltingflower.png",
    ]
let drawings = [
    "Horseblack.jpg",
    "IMG_1096.jpg",
    "IMG_1097.jpg",
    "IMG_1100.jpg",
    "IMG_1101.jpg",
    "IMG_1102.jpg",
    "IMG_1103.jpg",
    "IMG_1104.jpg",
    "IMG_1105.jpg",
    "IMG_1106.jpg",
    "IMG_1107.jpg",
]
let notDrawings = [
    "basketball.jpg",
    "fabric1.jpg",
    "fabric2.jpg",
    "intheshadow.jpg",
    "levelground.jpg",
    "microscopic.jpg",
    "photograph.jpg",
    "scarysugar1.png",
    "scarysugar2.png",
    "splendor.jpg",
    "wendy.jpg",
]



let text = [
    "Hot Stucco, like bubblegum sanded over - a hand out the window holds crumpled questions to Spring.",
    "Women chewing forbidden bubblegum! Picking violets outside with my mother!!",
    "Have you tried talking with the two dalmatians who live across the street? They whisper of broad streets, glittering sidewalks and militant trees.",
    "...the scent of each overripe cherry you ate danced below us in the breeze."
]
let textCounter = 0;

function PicturesToGrid()
{
    for (i=0;i<images.length;i++)
    {
        AddImageToGallery(i);

        if (random() > 0.75)
        {
            if (textCounter < text.length)
            {
                AddTextToGallery(textCounter);
                textCounter++;
            }
        }
    }

    for (i=0;i<drawings.length;i++)
    {
        AddDrawingToGallery(i);

        if (random() > 0.75)
        {
            if (textCounter < text.length)
            {
                AddTextToGallery(textCounter);
                textCounter++;
            }
        }
    }

    for (i=0;i<notDrawings.length;i++)
    {
        AddNotDrawingToGallery(i);

        if (random() > 0.75)
        {
            if (text.length > 0)
            {
                AddTextToGallery(textCounter);
                // textCounter++;
            }
        }
    }
}

function AddImageToGallery(i)
{
    let pathToImg = path+images[i];
    let img = document.createElement("img");
    let a = document.createElement("a");
    let div = document.createElement("div");
    let gallery = document.getElementById("lazyload-area");

    img.src = pathToImg;
    img.style.maxWidth = "" + random(100,150) + "%";
    img.style.transform = "translateX(-50%) translateY(" + random(-30,30) + "%) rotate(" + random(-10, 10) + "deg)";
    // img.setAttribute("transform", "rotate(" + random(-20,20) + "deg)");
    // img.setAttribute("transform","translateX(50%)")
    a.href = pathToImg;
    div.classList.add("portfolio-image");
    div.id = "lazyload-img";
    a.appendChild(img);
    div.appendChild(a);
    gallery.appendChild(div);  
}

function AddDrawingToGallery(i)
{
    let pathToImg = drawingsPath+drawings[i];
    let img = document.createElement("img");
    let a = document.createElement("a");
    let div = document.createElement("div");
    let gallery = document.getElementById("lazyload-area");

    img.src = pathToImg;
    img.style.maxWidth = "" + random(100,150) + "%";
    img.style.transform = "translateX(-50%) translateY(" + random(-30,30) + "%) rotate(" + random(-10, 10) + "deg)";
    // img.setAttribute("transform", "rotate(" + random(-20,20) + "deg)");
    // img.setAttribute("transform","translateX(50%)")
    a.href = pathToImg;
    div.classList.add("portfolio-image");
    div.id = "lazyload-img";
    a.appendChild(img);
    div.appendChild(a);
    gallery.appendChild(div);  
}

function AddNotDrawingToGallery(i)
{
    let pathToImg = notDrawingsPath+notDrawings[i];
    let img = document.createElement("img");
    let a = document.createElement("a");
    let div = document.createElement("div");
    let gallery = document.getElementById("lazyload-area");

    img.src = pathToImg;
    img.style.maxWidth = "" + random(100,150) + "%";
    img.style.transform = "translateX(-50%) translateY(" + random(-30,30) + "%) rotate(" + random(-10, 10) + "deg)";
    // img.setAttribute("transform", "rotate(" + random(-20,20) + "deg)");
    // img.setAttribute("transform","translateX(50%)")
    a.href = pathToImg;
    div.classList.add("portfolio-image");
    div.id = "lazyload-img";
    a.appendChild(img);
    div.appendChild(a);
    gallery.appendChild(div);  
}

function AddTextToGallery(c)
{
    let txt = document.createElement("p");
    let div = document.createElement("div");
    let gallery = document.getElementById("lazyload-area");

    pick = int(random(text.length));
    txt.innerText = text[pick];
    txt.style.maxWidth = "" + random(100,300) + "%";
    div.style.transform = "translateX(-10%) translateY(" + random(-30,30) + "%) rotate(" + random(-10, 10) + "deg)";
    div.style.userSelect = "none";
    div.classList.add("portfolio-image");
    div.style.zIndex = 100;
    div.style.userSelect = "none";
    div.id = "lazyload-img";
    div.appendChild(txt);
    gallery.appendChild(div);  

    text.splice(pick,1);
}
         