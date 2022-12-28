import db from "$/lib/database.js";

export const get = () => {
    const posts = db.prepare('SELECT * FROM Posts').all();
    return {
        body: {
            posts
        }
    };
};
