/*
 |--------------------------------------------------------------------------
 | Browser-sync config file
 |--------------------------------------------------------------------------
 |
 | For up-to-date information about the options:
 |   http://www.browsersync.io/docs/options/
 |
 | There are more options than you see here, these are just the ones that are
 | set internally. See the website for more info.
 |
 | Installing: npm install -g browser-sync less less-plugin-clean-css
 | Usage: browser-sync start --config bs-config.js
 */

const path = require('path');
const exec = require('child_process').exec;

const proxy   = 'www.phatgiaonuithanh.com';
const options = '--clean-css="--compatibility=ie8 --advanced"';

module.exports = {
    proxy: proxy,
	files: [
		'**/*.html',
		'**/*.php',
		'**/*.css',
		'**/*.js',
		{
			match: ['**/*.less'],
			fn: function (event, file) {
				var input   = path.resolve('./' + file);
				var output  = path.dirname('./' + file) + '/' + path.basename(file, '.less') + '.css';
				var outname = path.basename(file, '.less') + '.css';
				exec(`lessc ${input} ${options} ${output}`, (error, stdout, stderr) => {
					if (error) {
						console.error(`${error}`);
						return;
					}
					console.log(`Success: ${input} -> ${outname}`);
				});
			}
		}
	]
};
