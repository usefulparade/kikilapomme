
let c;
let lines;
let currentLine;
let drawImage;

function setup()
{
    currentLine = 0;
    lines = [];
    lines[0] = [];
    c = createCanvas(windowWidth, windowHeight);
    c.parent("#p5canvas");
    c.style.height = "100%";
    
    drawImage = loadImage('./assets/icon-macpaint-pencil.png');
}

function draw()
{  
    clear();
    // fill(231,150,0);
    // stroke(231,150,0);
    // stroke(255,0,0);
    // strokeWeight(10);
    // lines[currentLine].push(new p5.Vector(mouseX, mouseY));

    for (j=0;j<lines.length;j++)
    {
        for (i=0;i<lines[j].length;i++)
        {
            if (i>0)
            {
                image(drawImage, lines[j][i].x, lines[j][i].y -32);
                // line(lines[j][i].x, lines[j][i].y, lines[j][i-1].x, lines[j][i-1].y);
            }
        }

    }
    

    if (mouseIsPressed)
    {
        if (lines[currentLine] != null)
        {
            lines[currentLine].push(new p5.Vector(mouseX, mouseY));
        }
        
    }


    // ellipse(mouseX, mouseY, 6,6);

}

function mousePressed()
{
    lines[currentLine] = [];
}

function mouseReleased()
{
    if (lines[currentLine] != null)
    {
        currentLine++;
    }
    
}

function windowResized()
{
    resizeCanvas(windowWidth, windowHeight);
}