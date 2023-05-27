import React from 'react';

const SkillTag = ({imgName}) => {
    return (
        <div className='skillTag'>
            <img src={imgName} alt="404"/>            
        </div>
    );
};

export default SkillTag;