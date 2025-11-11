// DEV and TESTING PURPOSES ONLY

const bcrypt = require('bcryptjs');

const password = 'bloody-password-123'

bcrypt.hash(password, 10, (err, hash) => {
    if (err) {
        console.error('Error generating hash:', err);
        return;
    }
    console.log('\n=================================');
    console.log('Password Hash Generated!');
    console.log('=================================');
    console.log('\nPassword:', password);
    console.log('\nHash:', hash);
    console.log('\nCopy this hash to data/credentials.json');
    console.log('=================================\n');

})