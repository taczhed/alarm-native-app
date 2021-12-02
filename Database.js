import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase("alarm_native_app.db")

class Database {
    constructor() {}

    static createTable = () => {
        db.transaction(tx => {
            tx.executeSql("CREATE TABLE IF NOT EXISTS Alarms (id INTEGER PRIMARY KEY AUTOINCREMENT, hour TEXT, enabled INTEGER, days TEXT);")
        })
    }

    static add = () =>{
        db.transaction(tx => {
            tx.executeSql('INSERT INTO Alarms (hour, enabled, days) values ("04:20", 0, "0|0|0|0|0|0|0")')
        })
    }

    static getAll = () => {
        const query = "SELECT * FROM Alarms";
        return new Promise(resolve => db.transaction((tx) => {
            tx.executeSql(query, [], (tx, results) => {
                resolve(JSON.stringify(results))
            })
        }))
    }

    static removeAll = () => {

        db.transaction(tx => {
            tx.executeSql(
                "DELETE FROM Alarms ;"
            );
        });
    }

    static remove = (id) => {
        db.transaction(tx => {
            tx.executeSql(
                `DELETE FROM Alarms WHERE (id = ${id});`
            );
        });

    }
}

export default Database