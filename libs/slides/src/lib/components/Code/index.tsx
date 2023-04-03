import React from 'react';

interface CodeProps {
    code: string | JSX.Element;
    'data-noescape'?: boolean;
}

const Code: React.FC<CodeProps> = ({code, ...others}) => {
    return (<pre>
      <code {...others}>{code}</code>
  </pre>)
};

export default Code;