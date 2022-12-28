
/*
 <script src="{{ url_for('static', filename = 'jquery.min.js') }}"></script>
    <script src="{{ url_for('static', filename = 'bootstrap.min.js') }}"></script>
    <script src="{{ url_for('static', filename = 'anime.min.js') }}"></script>
    <script src="{{ url_for('static', filename = 'new.js') }}"></script>
*/
import loginComp from '../loginComp'
import registerComp from '../registerComp'

const Login  = () => {  
    return (
        <div class="container">
            <loginComp />
            <registerComp />
        </div>
    )  
}
