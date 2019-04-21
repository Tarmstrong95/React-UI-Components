import React, {Component} from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';


class HeaderContainer extends Component{
    render(){
        return(
            <div className="headerContFlex">
                <div>
                    <ImageThumbnail />
                </div>
                <div>
                    <HeaderTitle />
                    <HeaderContent />
                </div>
                
            </div>
            
        )
    }
}






export default HeaderContainer;