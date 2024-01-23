const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./src/database/db.sqlite');

db.serialize(() => {
  db.run("CREATE TABLE IF NOT EXISTS users(id INTEGER PRIMARY KEY ASC, username VARCHAR, email VARCHAR, password VARCHAR);");

  const stmt = db.prepare(`
    INSERT INTO users(username, email, password)
    VALUES
    ('cirelli', 'cirelli@email.com', 'senha'),
    ('user', 'user@email.com', 'senha123')
  `);
  stmt.run();
  stmt.finalize();

  db.each("SELECT rowid AS id, username, email, password FROM users", (err, row) => {
    console.log(row.id + " | email: " + row.email + " | password: " + row.password);
  });
});

db.close();