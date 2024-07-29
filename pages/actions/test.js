// pages/actions/test.js
'use server';

async function EnvVariable() {
    'use server';

    return {
        theVariable: process.env.actionVariable || undefined
    };
}
export default EnvVariable;
// module.exports = EnvVariable;
