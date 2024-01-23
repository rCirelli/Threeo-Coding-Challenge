const db = require('better-sqlite3')('./src/database/db.sqlite');
db.pragma('journal_mode = WAL');

export default class UserModel {
  public static async findOne(email: string) {
    const user = await db.prepare('SELECT * FROM users WHERE email = ?').get(email);

    return user;
  }
}
