const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'moMovie'
});

// connect DB 
db.connect();

// Get movie data from DB 
let getAllMovies = (callback) => {
    let q = 'SELECT * FROM movies';
    db.query(q, (error, results, fields)=> {
        if (error) {
            return console.error(error);
        } else {
            console.log('Result of getting movies from DB: ', results);
            callback(null, results);
        }
    })
}

// Insert a new movie data to DB 
let addNewMovie = (data) => {
    let q = `INSERT INTO movies (title, release_date, image_path, rating, votes, overview) 
    VALUES ("${data.title}", "${data.release_date}", "${data.poster_path}", ${data.vote_average}, 
    ${data.vote_count}, "${data.overview}")`;
    
    console.log('Data in the DB! : ', data);
    // optionally make your own promise
    // abstract this into a helper function and promisify all your queries!
    return new Promise((resolve, reject)=> {
    // remember to use return like above or if/else like here
    // to prevent calling resolve after rejecting
        db.query(q, (error, results, fields)=>{
            if(error){
                reject(error);
            } else {
                resolve(results);
            }
        });
    })

}

// // test inserting 
// addNewMovie({
//     title: "Mean Girls", 
//     release_date: "2004-04-30",
//     poster_path: "/lDlGPZS0UJYKxVlpyff3BMyPc2H.jpg",
//     vote_average: 7,
//     vote_count: 3041,
//     overview: "Cady Heron is a hit with The Plastics, the A-list girl clique at her new school, until she makes the mistake of falling for Aaron Samuels, the ex-boyfriend of alpha Plastic Regina George."
// });

// // test getting 
// getAllMovies((error, data)=> {
//     console.log(data);
// });

// exports two queries
module.exports = {
    getAllMovies,
    addNewMovie
}