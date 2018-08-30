/*import '../../node_modules/jquery/dist/jquery.min';*/  // Uncaught ReferenceError: $ is not defined
import $ from 'jquery'; /*add library*/
$('.jquery').html('Test JQuery'); /*test*/
$('.jquery').css('text-align', 'center'); /*test*/
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../css/main.scss';
import './test'; /*always needs slash before name*/






