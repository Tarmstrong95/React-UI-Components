import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';

const HeaderTitle = () => {
    return (
        <div>
            <h1>Lambda School <span className="small-grey">@LambdaSchool - 26 jan</span></h1>
            <HeaderContent />
        </div>
        
    )
}

export default HeaderTitle;