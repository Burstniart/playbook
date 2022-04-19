const MissionCommander = require('./../app/missionCommander');

describe("This is a test Unit Test for Mission Commander", () => {
    test(' 1) Create a mission commander object', () => {
        // I test
        const myMissionCommander = new MissionCommander("Woopa")

        // I expect this
        expect(myMissionCommander.name).toBe("Woopa");
    });
})