
let targets;
let thresholdRatio;
let thresholdStatus;


// Set things up
window.addEventListener("load", (event) => {
    
    targets = [];
    thresholdRatio = 0.05;
    
    let modal = document.querySelector("#baguetteBox-overlay");
  
    createObserver();
  }, false);


let callback = (entries, observer) => {
    entries.forEach((entry) => {
      // Each entry describes an intersection change for one observed
      // target element:
      //   entry.boundingClientRect
      //   entry.intersectionRatio
      //   entry.intersectionRect
      //   entry.isIntersecting
      //   entry.rootBounds
      //   entry.target
      //   entry.time
    });
  };

  function createObserver()
  {
    let observer;

    let options = {
        root: document.querySelector('#lazyload-area'),
        rootMargin: '0px',
        threshold: thresholdRatio
    }

    targets = document.querySelectorAll('#lazyload-img');
    let i = 0;
    targets.forEach((target) =>
    {
        if ('IntersectionObserver' in window)
        {

          let observer = new IntersectionObserver(handleIntersect, options);
          observer.observe(target);
          i++;
        }
        else
        {
          target.style.filter = "opacity(1)";
          target.style.transform = "translateY(0px)";
        }
    });

    
  }

  function handleIntersect(entries, observer) 
  {
    entries.forEach(
        (entry) => 
            {
                if (entry.isIntersecting)
                {
                    entry.target.style.filter = "opacity(1)";
                    entry.target.style.transform = "translateY(0px)";
                    // loadedStatus[loadedStatus.indexOf(entry)] = true;
                    console.log("intersection!");
                    // console.log(targets);
                }
                
                // entry.target.style.display = "inline-block";
            // if (entry.intersectionRatio > prevRatio) {
            //     entry.target.style.backgroundColor = increasingColor.replace("ratio", entry.intersectionRatio);
            // } else {
            //     entry.target.style.backgroundColor = decreasingColor.replace("ratio", entry.intersectionRatio);
            // }
        
            // prevRatio = entry.intersectionRatio;
            }
    );
  }
  
  