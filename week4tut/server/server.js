let express = require('express'); 
let bodyParser = require('body-parser');
let app = express();
let http = require('http').Server(app);
const cors = require('cors');
app.use(cors());


app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

let server = http.listen(3000, function() { 
    let host = server.address().address;
    let port = server.address().port;
    console.log('Server listening on: ' + host + ' port: ' + port);
});

class User {
    constructor(username, birthdate, age, email, password, valid) {
        this.username = username;
        this.birthdate = birthdate;
        this.age = age;
        this.email = email;
        this.password = password;
        this.valid = valid;
    }
}

const users = [
    new User("user1", "01/01/1990", 33, "user1@example.com", "pass1", false),
    new User("user2", "02/02/1992", 31, "user2@example.com", "pass2", false),
    new User("user3", "03/03/1994", 29, "user3@example.com", "pass3", false)
];

app.post('/api/auth', function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const user = users.find(u => u.email === email && u.password === password);

    if (user) {
        user.valid = true;
        res.send({ ...user, password: undefined }); // excluding the password from the response
    } else {
        res.send({ valid: false });
    }
});
