const setEnv = () => {
  const fs = require('fs');
  const writeFile = fs.writeFile;
  // Configure Angular `environment.ts` file path
  const targetPath = './src/environments/environment.ts';
  // Load node modules
  require('dotenv').config({
    path: 'src/environments/.env',
  });
  // `environment.ts` file structure
  const envConfigFile = `export const environment = {
    spoti_api_url: 'https://api.spotify.com/v1',
    spoti_preview_track_url: 'https://open.spotify.com/embed/track/',
    spoti_token_url: 'https://accounts.spotify.com/api/token',
    spoti_client_id: '${process.env['SPOTI_CLIENT_ID']}',
    spoti_client_secret: '${process.env['SPOTI_SECRET']}',
    production: true,
  };
`;
  writeFile(targetPath, envConfigFile, (err: any) => {
    if (err) {
      console.error(err);
      throw err;
    } else {
      console.log(
        `Angular environment.ts file generated correctly at ${targetPath} \n`
      );
    }
  });
};

setEnv();
