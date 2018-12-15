// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyAR7CyLsAeCwZLfgcaz1BGJR3UmRFKizbc',
        authDomain: 'friseur-grenz.firebaseapp.com',
        databaseURL: 'https://friseur-grenz.firebaseio.com',
        projectId: 'friseur-grenz',
        storageBucket: 'friseur-grenz.appspot.com',
        messagingSenderId: '277652114063'
    }
};
