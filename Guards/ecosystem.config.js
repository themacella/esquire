
const DatabaseName1 = "Incident"

module.exports = {
    apps: [
    {
        name: `${DatabaseName1}-guard1`,
        script: "./Guard1/main.js",
        watch: true
    },
    {
        name: `${DatabaseName1}-guard2`,
        script: "./Guard2/main.js",
        watch: true
    },
    {
        name: `${DatabaseName1}-guard3`,
        script: "./Guard3/main.js",
        watch: true
    },
    {
        name: `${DatabaseName1}-guard4`,
        script: "./Guard4/main.js",
        watch: true
    },
    {
        name: `${DatabaseName1}-guard5`,
        script: "./Guard5/main.js",
        watch: false
    },
    ]
};
