const path = require('path');
const controller = {};

controller.mainPage = (req, res) =>{
    res.render('mainPage');
};

controller.list =  (req,res) =>{
    req.getConnection((err, conn) =>{
        if (err){
            res.jsonn(err);
        }
        else{
            conn.query('SELECT * FROM contacts',(err, contacts) =>{
                if (err){
                    res.json(err);
                }
                else{
                    res.render('viewContacts', {
                        data: contacts
                    });
                }
            });
        }
    });
};

controller.save = (req, res) => {
    const data = req.body;

    console.log(data);

    req.getConnection((err, conn) =>{
            if (err){
                console.log(err);
                res.json(err);
            }

            else{
                conn.query('INSERT INTO contacts set ?', [data], (err, contact) =>{
                    // console.log(contact);
                    res.redirect('/proyecto');
                });
            }
    });
};

controller.edit = (req, res)=>{
    const id = req.params.id;
    req.getConnection((err, conn) =>{
        conn.query('SELECT * FROM contacts WHERE id = ?', [id], (err, contact)=>{
            res.render('contactEdit.ejs', {
                data: contact[0]
            });
        });
    });
};

controller.update = (req, res) =>{
    const id = req.params.id;
    const newContact = req.body;

    req.getConnection((err, conn)=>{
        conn.query('UPDATE contacts set ? WHERE id = ?', [newContact, id], (err, rows) =>{
            res.redirect('/proyecto');
        });
    });
};


controller.delete = (req, res) =>{
    req.getConnection((err,conn)=>{
        const id = req.params.id;
        conn.query('DELETE FROM contacts WHERE id = ?', [id], (err, rows) =>{
            res.redirect('/proyecto');
        });
    });
};

// Public !

controller.styles = (req, res) =>{
    res.type('css')
    res.sendFile(path.join(__dirname, '../public/styles.css'));
};

controller.background = (req, res)=>{
    res.type('jpg');
    res.sendFile(path.join(__dirname, '../public/background.jpg'));
};

controller.favicon = (req,res) =>{
    res.type('png');
    res.sendFile(path.join(__dirname, '../public/favicon.png'));
};

controller.myPhoto = (req,res) =>{
    res.type('jpeg');
    res.sendFile(path.join(__dirname, '../public/Me.jpeg'));
};

controller.misionTic = (req,res) =>{
    res.type('png');
    res.sendFile(path.join(__dirname, '../public/misionTic.png'));
};

module.exports = controller;