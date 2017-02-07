
const strings = {

		en : {
			content : {
				loading : 'Please wait the content loads...'
			}
		}
	} ,
	
	language = document.getElementsByTagName ( 'html' ) [ 0 ].getAttribute ( 'lang' );

export default strings [ language ];
