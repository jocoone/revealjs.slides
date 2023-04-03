import React from 'react';

export interface FragmentProps {
    children: JSX.Element | JSX.Element[];
}

const Fragment: React.FC<FragmentProps> = ({children}) => {
    return <div className="fragment">
        {children}
    </div>
}

export default Fragment;