const sql = require('mssql'); // npm i mssql

/** 
connections
select all from the codenation database
staff table receivng the details

TODO: Export our functions
*/

const connection = async () => {
    await sql.connect('mssql://sa:Password1@localhost,1433/CodeNation')
}


const SelectAllStaff = async () => {
    await connection(); //  Connects to the database
    let result; //  result we dont have to export
    try {
        result = await sql.query `SELECT * FROM Staff` // SQL syntax inside of JS
    } catch (err) { // If there is an error, tell me
        console.log('ERROR');
    }
    return result;
}

const SelectStaffMember = async (ID) => {
    await connection();
    let result;
    try {
        result = await sql.query `SELECT * FROM Staff WHERE ID = ${ID}`
        //  We insert the ID value by inputting it into a Insomnia GET request
    } catch (err) {
        console.log('error')
    }
    return result
}


const createStaffMember = async (ID, Name, Role, Location, Salary, Commission) => {
    await connection();
    let result;
    try {
        result = await sql.query `INSERT INTO Staff VALUES (${ID}, ${Name}, ${Role}, ${Location}, ${Salary}, ${Commission} )`
        // ID, Name, Role, Location, Salary, Commission
    } catch (error) {
        console.log('error');
    }
    return result;
}

                      //  async (ID, Name, Role, Location, Salary, Commission) => {
const updateStaffMember = async (ID) => {
    await connection();
    try {
        const result = await sql.query `UPDATE Staff SET Location = 'Coventry' WHERE ID = ${ID}`
        // const result = await sql.query `UPDATE Staff WHERE ID = ${ID}, Name = ${Name}, Location = ${Location}, Salary = ${Salary}, Commission = ${Commission}`
    
        console.log(result);
    } catch (err) {
        console.log('error');
    }
}


const deleteStaffMember = async (ID) => {
    await connection();
    try {
        const result = await sql.query `DELETE FROM Staff WHERE ID = ${ID}`;
        console.log(result);
    } catch (error) {
        console.log('error');
    }
}



module.exports = {
    SelectAllStaff,
    SelectStaffMember,
    createStaffMember,
    updateStaffMember,
    deleteStaffMember
}

