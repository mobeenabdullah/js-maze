const { Engine, Render, Runner, World, Bodies } = Matter;

const engine = Engine.create();
const { world } = engine;
const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        width: 600,
        height: 500
    }
});
Render.run(render);
Runner.run(Runner.create(), engine);

const shape = Bodies.rectangle(200, 200, 75, 75, {
    isStatic: true
});

World.add(world, shape);