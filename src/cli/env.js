const parseEnv = () => {
    const envVars = process.env;

    const rssVars = Object.keys(envVars)
        .filter(key => key.startsWith('RSS_'))
        .map(key => `${key}=${envVars[key]}`);

    if (rssVars.length > 0) {
        console.log(rssVars.join('; '));
    } else {
        console.log('No RSS_ prefixed environment variables found.');
    }
};

parseEnv();