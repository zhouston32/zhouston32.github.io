$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(100, 610, 100, 100)
createPlatform(200, 500, 100, 100)
createPlatform(300, 400, 100, 100)
createPlatform(400, 300, 100, 100)
createPlatform(600, 300, 100, 100)
createPlatform(800, 300, 100, 100)
createPlatform(200, 200, 100, 100)
createPlatform(1000, 300, 100, 100)
createPlatform(0, 100, 100, 10)
createPlatform(100, 100, 10, 400)
createPlatform(1100, 200, 100, 100)




    // TODO 3 - Create Collectables
createCollectable("diamond", 1330, 130)
createCollectable("diamond", 700, 100)
createCollectable("diamond", 130, 100)
createCollectable("diamond", 400, 100)


    
    // TODO 4 - Create Cannons
createCannon("top", 100, 500, 100, 4000)
createCannon("right", 500, 500, 4000, 100)
createCannon("bottom", 700, 7000, 10000, 1500)
createCannon("top", 800, 6000, 100, 4000)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
