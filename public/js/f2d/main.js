(function() {
    "use strict";

    var windowSize = new THREE.Vector2(window.innerWidth, window.innerHeight);

    var renderer = new THREE.WebGLRenderer();
    renderer.autoClear = false;
    renderer.sortObjects = false;
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(windowSize.x, windowSize.y);
    renderer.setClearColor(0x00ff00);
    document.body.appendChild(renderer.domElement);


    var grid = {
        size: new THREE.Vector2(512, 256),
        scale: 1,
        applyBoundaries: true
    };
    var time = {
        step: 1,
    };
    var displayScalar, displayVector;
    var displaySettings = {
        slab: "density"
    };
    var solver, gui;
    var mouse = new F2D.Mouse(grid);

    function init(shaders) {
        solver = F2D.Solver.make(grid, time, windowSize, shaders);

        displayScalar = new F2D.Display(shaders.basic, shaders.displayscalar);
        displayVector = new F2D.Display(shaders.basic, shaders.displayvector);


        // we need a splat color "adapter" since we want values between 0 and
        // 1 but also since dat.GUI requires a JavaScript array over a Three.js
        // vector
        var splatSettings = {
            color: [
                solver.ink.x * 255,
                solver.ink.y * 255,
                solver.ink.z * 255
            ]
        };


        requestAnimationFrame(update);
    }

    function update() {
        solver.step(renderer, mouse);
        render();

        requestAnimationFrame(update);
    }

    function render() {
        var display, read;
        switch (displaySettings.slab) {
        case "density":
            display = displayScalar;
            display.scale.copy(solver.ink);
            display.bias.set(0, 0, 0);
            read = solver.density.read;
            break;
        }
        display.render(renderer, read);
    }

    function resize() {
        windowSize.set(window.innerWidth, window.innerHeight);
        renderer.setSize(windowSize.x, windowSize.y);
    }
    window.onresize = resize;

    var loader = new F2D.FileLoader("shaders", [
        "advect.fs",
        "basic.vs",
        "gradient.fs",
        "jacobiscalar.fs",
        "jacobivector.fs",
        "displayscalar.fs",
        "displayvector.fs",
        "divergence.fs",
        "splat.fs",
        "vorticity.fs",
        "vorticityforce.fs",
        "boundary.fs"
    ]);
    loader.run(function(files) {
        // remove file extension before passing shaders to init
        var shaders = {};
        for (var name in files) {
            shaders[name.split(".")[0]] = files[name];
        }
        init(shaders);
    });
}());
