import React ,{Component} from 'react';
import './Header.css';



class ImageThumbnail extends Component{
    render(){
        return(
            <div>
                <img className="img" src="/Images/Lambda_Avatar_Red.jpg" alt="Lambda Logo"/>
            </div>
                
        )
    }
}


export default ImageThumbnail;