const { Engine, Render, Runner, World, Bodies } = Matter;

const cells = 3;
const width = 600;
const height = 600;

const engine = Engine.create();
const { world } = engine;
const render = Render.create({
    element: document.body,
    engine: engine,
    options: {
        wireframes: true,
        width: width,
        height: height
    }
});
Render.run(render);
Runner.run(Runner.create(), engine);

// Walls
const walls = [
    Bodies.rectangle(width / 2, 0, width, 40, { isStatic: true }),
    Bodies.rectangle(width / 2, height, width, 40, { isStatic: true }),
    Bodies.rectangle(0, height / 2, 40, height, { isStatic: true }),
    Bodies.rectangle(width, width / 2, 40, height, { isStatic: true })
];
World.add(world, walls);

// Maze generation
const grid = Array(cells)
    .fill(null)
    .map(() => Array(cells).fill(false));

const verticals = Array(cells)
    .fill(null)
    .map(() => Array(cells - 1).fill(false));

const horizontals = Array(cells - 1)
    .fill(null)
    .map(() => Array(cells).fill(false));

const startRow = Math.floor(Math.random() * cells);
const startColumn = Math.floor(Math.random() * cells);

const stepThroughCell = (row, column) => {
    // If I've visited the cell at [row, column], then return
    if(grid[row][column] === true) {
        return;
    };

    // Mark this cell as being visited
    grid[row][column] = true;

    // Assemble randomly-ordered list of neighbors
    const neighbors = [
        [row - 1, column],
        [row, column + 1],
        [row + 1, column],
        [row, column - 1]
    ];

    // For each neighbor: ...

    // See if that neibghors is out of bounds

    // If we've visited that neibghor, continue to next neighbor

    // Remove a wall from either horizontals or verticals

    // Visit that next cell
};
stepThroughCell(startRow, startColumn);

console.log(grid);